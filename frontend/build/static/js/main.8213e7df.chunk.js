(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{40:function(t,e,r){t.exports=r(56)},45:function(t,e,r){},46:function(t,e,r){},47:function(t,e,r){},56:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(34),i=r.n(o),c=r(4),l=r(15),s=r(12),u=r(6),f=r(59),h=r(60),p=r(38),m=r(62),d=r(63),v=(r(45),r(46),r(47),r(61));function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var u={};function f(){}function h(){}function p(){}var m={};c(m,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==e&&r.call(v,a)&&(m=v);var g=p.prototype=f.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}var g=function(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),r=e[0],o=e[1],i=Object(n.useState)([]),g=Object(u.a)(i,2),E=g[0],b=g[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){var t=Object(s.a)(y().mark((function t(){var e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/tasks");case 3:e=t.sent,b(e.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching tasks:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(s.a)(y().mark((function t(){var e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===r.trim()){t.next=12;break}return t.prev=1,t.next=4,v.a.post("/api/tasks",{title:r});case 4:e=t.sent,b([].concat(Object(l.a)(E),[e.data])),o(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error("Error adding task:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(s.a)(y().mark((function t(e){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.put("/api/tasks/".concat(e));case 3:b(E.map((function(t){return t._id===e?Object(c.a)(Object(c.a)({},t),{},{completed:!t.completed}):t}))),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("Error completing task:",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(s.a)(y().mark((function t(e){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.delete("/api/tasks/".concat(e));case 3:b(E.filter((function(t){return t._id!==e}))),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("Error deleting task:",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{className:"dark-edition",style:{background:"rgb(5, 5, 34)"}},a.a.createElement("div",{className:"main-panel"},a.a.createElement("div",{className:"content"},a.a.createElement(f.a,null,a.a.createElement(h.a,null,a.a.createElement(p.a,{lg:8,md:12,xs:12},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-header card-header-primary"},a.a.createElement("h4",{className:"card-title text-center"},a.a.createElement("b",null,"Task Management System"))),a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"table-responsive ps"},a.a.createElement("table",{className:"table tablesorter table-hover"},a.a.createElement("thead",{className:"text-primary"},a.a.createElement("tr",null,a.a.createElement("th",null,a.a.createElement(p.a,{md:12,sm:6},a.a.createElement(m.a.Group,null,a.a.createElement(m.a.Control,{type:"text",value:r,onChange:function(t){return o(t.target.value)},className:"form-control",style:{fontSize:"25px"},placeholder:"New Task",required:!0})))),a.a.createElement("th",null,a.a.createElement(d.a,{variant:"success",className:"btn-sm col-md-12 col-xsm-2",style:{width:"100px"},onClick:w},"Add Task")))),a.a.createElement("tbody",null,E.map((function(t){return a.a.createElement("tr",{key:t._id},a.a.createElement("td",null,a.a.createElement("li",{style:{textDecoration:t.completed?"line-through":"none"}},t.title)),a.a.createElement("td",null,a.a.createElement(d.a,{variant:"info",className:"btn-link btn-sm","data-original-title":t.completed?"Mark Incomplete":"Mark Complete",onClick:function(){return k(t._id)}},a.a.createElement("i",{className:"material-icons"},t.completed?"done":"check"),a.a.createElement("div",{className:"ripple-container"})),a.a.createElement(d.a,{variant:"danger",className:"btn-link btn-sm","data-original-title":"Delete",onClick:function(){return N(t._id)}},a.a.createElement("i",{className:"material-icons"},"delete"),a.a.createElement("div",{className:"ripple-container"}))))})))),a.a.createElement("div",{className:"ps__rail-x",style:{left:"0px",bottom:"0px"}},a.a.createElement("div",{className:"ps__thumb-x",tabIndex:0,style:{left:"0px",width:"0px"}})),a.a.createElement("div",{className:"ps__rail-y",style:{top:"0px",right:"0px"}},a.a.createElement("div",{className:"ps__thumb-y",tabIndex:0,style:{top:"0px",height:"0px"}})))))))))))},E=r(39),b=r(3);r(55);var x=function(){return a.a.createElement(E.a,null,a.a.createElement(b.c,null,a.a.createElement(b.a,{path:"/",element:a.a.createElement(g,null)})))},w=document.getElementById("root");i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),w)}},[[40,1,2]]]);
//# sourceMappingURL=main.8213e7df.chunk.js.map