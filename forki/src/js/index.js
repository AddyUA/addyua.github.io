///////////// MAIN PROJECT
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import {
  elements,
  renderLoader,
  clearLoader,
  elementsString,
} from './views/base';

/* Global state of the app
 * - Search obj
 * - Current recipe obj
 * - Shopping list obj
 * - Liked recipes
 */
const state = {};

/* Search Controller */
const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();
  if (query) {
    // 2) New search obj add to state
    state.search = new Search(query);

    // 3) Prepare UI for result
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    try {
      // 4) Search fro recipes
      await state.search.getResult();

      // 5) render result on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (error) {
      alert('Something went wrong with the search ...');
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});

// Testing 1
// window.addEventListener('load', (e) => {
//   e.preventDefault();
//   controlSearch();
// });

elements.searchResPages.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/* Recipe Controller */
const controlRecipe = async () => {
  //Get id from URL
  const id = window.location.hash.replace('#', '');

  if (id) {
    // prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Highlight selected search item
    if (state.search) searchView.highlightSelected(id);

    //Create new Recipe obj
    state.recipe = new Recipe(id);

    // Testing 1
    // window.r = state.recipe;

    try {
      //Get recipe data and parse Ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      //Calc servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      //Render recipe
      clearLoader();
      recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
    } catch (error) {
      console.log(error);
      alert('Error processing recipe!');
    }
  }
};

/* List Controller */
const controlList = () => {
  // Create a new list if none
  if (!state.list) state.list = new List();
  // add ingredients to the list
  state.recipe.ingredients.forEach((el) => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

['hashchange', 'load'].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);

// Handle delete and update list item events
elements.shoping.addEventListener('click', (e) => {
  const id = e.target.closest('.shopping__item').dataset.itemid;
  //Handle del button
  if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    // Delete from state
    state.list.delItem(id);

    // Delete from UI
    listView.delItem(id);
  } else if (e.target.matches('.shopping__count-value')) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

/* Likes Controller */
const controlLike = () => {
  if (!state.likes) state.likes = new Likes();
  const currID = state.recipe.id;
  // User has NOT liked curr recipe
  if (!state.likes.isLiked(currID)) {
    // Add Like to the state
    const newLike = state.likes.addLike(
      currID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
    // Toggle like button
    likesView.toggleLikeBtn(true);
    // Add Likes to UI List
    likesView.renderLike(newLike);
    // User HAS liked curr recipe
  } else {
    // Remove Like to the state
    state.likes.delLike(currID);
    // Toggle like button
    likesView.toggleLikeBtn(false);
    // Remove Likes from UI List
    likesView.delLike(currID);
  }
  likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore liked recipes on page load
window.addEventListener('load', () => {
  state.likes = new Likes();

  //Restore likes
  state.likes.readStorage();

  // Toggle like menu button
  likesView.toggleLikeMenu(state.likes.getNumLikes());

  // Render the existing likes
  state.likes.likes.forEach((like) => likesView.renderLike(like));
});

// Handling recipe button clicks
elements.recipe.addEventListener('click', (e) => {
  if (e.target.matches('.btn-decrease, .btn-decrease *')) {
    // Dec button is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches('.btn-increase, .btn-increase *')) {
    // Inc button is clicked
    state.recipe.updateServings('inc');
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
    // Add ingredients to shoping list
    controlList();
  } else if (e.target.matches('.recipe__love, .recipe__love *')) {
    // Like controller
    controlLike();
  }
});
