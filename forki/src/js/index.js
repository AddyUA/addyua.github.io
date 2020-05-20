///////////// MAIN PROJECT
import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
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

/* Search Controller

*/
const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();
  // const query = 'pizza';
  console.log(query);
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
  console.log(id);

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
      console.log(state.recipe);
      clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch (error) {
      alert('Error processing recipe!');
    }
  }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);

// Handling recipe button clicks
elements.recipe.addEventListener('click', (e) => {
  if (e.target.matches('.btn-decrease, btn-decrease *')) {
    // Dec button is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
    }
  } else if (e.target.matches('.btn-increase, btn-increase *')) {
    // Inc button is clicked
    state.recipe.updateServings('inc');
  }
  console.log(state.recipe.servings);
});