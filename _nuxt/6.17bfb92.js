(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{593:function(t,e,r){"use strict";r.r(e);r(82),r(40),r(41),r(22),r(62);var n=r(39),o=(r(16),r(3));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={transition:"fade",data:function(){return{story:{content:{}}}},watch:{$route:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.loadFallbackData();case 2:data=t.sent,r.$set(r,"story",l(l({},{}),data.story)),r.$storyblok.initEditor(r);case 5:case"end":return t.stop()}}),t)})))()}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadFallbackData();case 2:data=e.sent,t.$set(t,"story",l(l({},{}),data.story)),t.$storyblok.initEditor(t);case 5:case"end":return e.stop()}}),e)})))()},methods:{loadFallbackData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.$storyblok.get("cdn/stories/".concat(t.$route.path),{resolve_relations:"homepage-case-study-list.case_studies,homepage-article-list.articles"}).then((function(t){return t.data})));case 1:case"end":return e.stop()}}),e)})))()}}},h=r(1),component=Object(h.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page"}},[e("section",[this.story.content.component?e(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1),this._v(" "),e("main-footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);