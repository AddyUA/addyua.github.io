(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68789118"],{"1d21":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[t.task?e("div",{staticClass:"col s6 offset-s3"},[e("h1",[t._v(t._s(t.task.title))]),e("form",{on:{submit:function(s){return s.preventDefault(),t.submitHandler(s)}}},[e("div",{ref:"chips",staticClass:"chips"}),e("div",{staticClass:"input-field"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"materialize-textarea",staticStyle:{"min-height":"150px"},attrs:{id:"description","data-length":"120"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}}),e("label",{attrs:{for:"description"}},[t._v("Description")]),e("span",{staticClass:"character-counter",staticStyle:{float:"right","font-size":"12px"}},[t._v(t._s(t.description.length)+"/2048")])]),e("input",{ref:"datepicker",attrs:{type:"text"}}),"completed"!==t.task.status?e("div",{staticClass:"btns"},[e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Update")]),e("button",{staticClass:"btn blue",attrs:{type:"button"},on:{click:t.completeTask}},[t._v(" Complete task ")])]):t._e()])]):e("p",[t._v("Task no found")])])},a=[],n=(e("a4d3"),e("e01a"),{name:"task",computed:{task:function(){return console.log(this.$store.getters.TASK_BY_ID(+this.$route.params.id)),this.$store.getters.TASK_BY_ID(+this.$route.params.id)}},data:function(){return{description:"",chips:null,date:null}},components:{},methods:{submitHandler:function(){this.$store.dispatch("UPDATE_TASK",{id:this.task.id,description:this.description,date:this.date.date}),this.$router.push("/list")},completeTask:function(){this.$store.dispatch("COMPLETE_TASK",this.task.id),this.$router.push("/list")}},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()},mounted:function(){this.description=this.task.description,this.chips=M.Chips.init(this.$refs.chips,{placeholder:"Task tags",data:this.task.tags}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date(this.task.date),setDefaultDate:!0}),setTimeout((function(){M.updateTextFields()}),0)}}),o=n,r=(e("2da1"),e("2877")),c=Object(r["a"])(o,i,a,!1,null,"68a6c131",null);s["default"]=c.exports},"2da1":function(t,s,e){"use strict";var i=e("90e1"),a=e.n(i);a.a},"90e1":function(t,s,e){}}]);
//# sourceMappingURL=chunk-68789118.7d8715b5.js.map