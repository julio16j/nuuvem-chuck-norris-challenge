(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(36),i=r.n(a),c=(r(54),r(15)),u=r(9),l=r(3),s=r(37),h=r.n(s),f=(r(56),r(38));function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var s={};function h(){}function f(){}function m(){}var d={};c(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==e&&r.call(y,o)&&(d=y);var g=m.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,c(g,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var m=r.n(f).a.create({baseURL:"https://api.chucknorris.io/jokes",timeout:1e4}),d={search:function(t){return"search?query=".concat(t)},random:function(){return"random"}};function v(t){return m.get(d.search(t))}function y(){return m.get(d.random())}function g(){return(g=Object(u.a)(p().mark(function t(e){var r,n,o,a;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e&&e.length>3)){t.next=12;break}return t.next=3,v(e);case 3:if(r=t.sent,!((n=r.data).total<=0)){t.next=9;break}return t.abrupt("return",null);case 9:return t.abrupt("return",n.result[Math.floor(Math.random()*n.result.length)]);case 10:t.next=17;break;case 12:return t.next=14,y();case 14:return o=t.sent,a=o.data,t.abrupt("return",a);case 17:case"end":return t.stop()}},t)}))).apply(this,arguments)}var w={getJokesFromSearchTerm:v,getRandomJoke:y,getRandomJokeFromSearchTerm:function(t){return g.apply(this,arguments)}},E=r(14),b=r.n(E),x=r(46),j=r(8),k=r(7),L=r(21),O=r.n(L);var S=function(t){var e=t.joke;return o.a.createElement("aside",null,o.a.createElement("header",null,o.a.createElement("h4",null,o.a.createElement(j.a,{icon:k.c,style:{color:"var(--orange-white)"}})," Id: ",e.id)),o.a.createElement("main",null,o.a.createElement("section",null,o.a.createElement("p",null," ",o.a.createElement(j.a,{icon:k.d,style:{color:"var(--orange-white)"}})," Joke: ",e.value)),o.a.createElement("section",null,e.categories.length>0&&o.a.createElement("p",null," ",o.a.createElement(j.a,{icon:k.b,style:{color:"var(--orange-white)"}})," Categories:",e.categories.map(function(t,r){return 0===r&&e.categories.length>1?" "+t+", ":0===r?" "+t:r+1===e.categories.length?t:t+", "})))),o.a.createElement("footer",{className:"d-flex justify-content-between align-items-center"},o.a.createElement(j.a,{icon:k.a,style:{color:"var(--orange-white)",marginBottom:"11px"}}),o.a.createElement("p",{className:"ml-2"},"Created At: ",O()(e.created_at).format("MM/DD/YYYY")),o.a.createElement("p",{className:"ml-2"},"Updated At: ",O()(e.updated_at).format("MM/DD/YYYY"))))};var N=function(t){var e=t.state,r=t.joke,a=t.closeFunction,i=getComputedStyle(document.documentElement).getPropertyValue("--primary-color"),c=Object(n.useState)(null),u=Object(l.a)(c,2),s=u[0],h=u[1];return Object(n.useEffect)(function(){h(r)},[r]),o.a.createElement(b.a,{isOpen:e.open,onRequestClose:a,style:{content:{maxWidth:"80vmin",maxHeight:"80vmin",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"var(--background-main-color)",color:"white"}}}," ",e.loading&&o.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100%"}},o.a.createElement(x.a,{color:i,height:40,width:40}))||null!=s&&o.a.createElement(S,{joke:s}),!e.loading&&null===s&&o.a.createElement("div",{className:"text-align-center"},"No joke was found, better luck next time"))};var _=function(t){var e=t.searchJokes,r=t.handleFeelingLuckClickButton,n=t.searchTerm,a=t.setSearchTerm;return o.a.createElement("main",null,o.a.createElement("div",{className:"searchField"},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},o.a.createElement(j.a,{icon:k.e}))),o.a.createElement("input",{type:"text",placeholder:"Search",value:n,onChange:function(t){return a(t.target.value)},onKeyDown:function(t){return function(t){"Enter"===t.key&&e(n)}(t)}}))),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("button",{className:"searchButton",onClick:function(){e(n)}},"Pesquisar"),o.a.createElement("button",{className:"searchButton",onClick:function(){r(n)}},"I'm feeling luck")))};r(95);var T=function(t){var e=t.children,r=t.type,n=t.message,a=t.isShow,i=void 0!==a&&a,c=t.handleClose;return o.a.createElement("div",{className:i?"".concat(r," alert"):"hide",onClick:c},e?o.a.cloneElement(e):n,o.a.createElement("span",{className:"closebtn"},"\xd7"))},F=r(1);function G(){G=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var m={};c(m,o,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(k([])));v&&v!==e&&r.call(v,o)&&(m=v);var y=p.prototype=h.prototype=Object.create(m);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var P=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),f=s[0],p=s[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),v=d[0],y=d[1],g=Object(n.useState)(null),E=Object(l.a)(g,2),b=E[0],x=E[1],j=Object(n.useState)({open:!1,loading:!1}),k=Object(l.a)(j,2),L=k[0],O=k[1],S=Object(F.f)();function P(){return(P=Object(u.a)(G().mark(function t(e){var r,n;return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.length<3)){t.next=4;break}return p("Please type a least 3 characters"),y(!0),t.abrupt("return");case 4:return t.next=6,w.getJokesFromSearchTerm(e);case 6:r=t.sent,n=r.data.result,S("/jokes",{state:{jokes:n,searchTerm:e}});case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}function C(){return(C=Object(u.a)(G().mark(function t(e){return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O({open:!0,loading:!0}),t.t0=x,t.next=4,w.getRandomJokeFromSearchTerm(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),O({open:!0,loading:!1});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"chucknorris_logo"}),o.a.createElement("p",null,"Type to search the best chuck jokes")),o.a.createElement("main",{className:"Main-container"},o.a.createElement(_,{searchTerm:r,setSearchTerm:a,searchJokes:function(t){return P.apply(this,arguments)},handleFeelingLuckClickButton:function(t){return C.apply(this,arguments)}}),o.a.createElement(T,{type:"error",message:f,isShow:v,handleClose:function(){return y(!1)}})),o.a.createElement(N,{state:L,joke:b,closeFunction:function(){O(Object(c.a)({},L,{open:!1}))}}))};r(97);var C=function(t){var e=t.text,r=void 0===e?"":e,n=t.regexTerm,a=void 0===n?"":n;if(!a.trim())return o.a.createElement("span",null,r);var i=new RegExp("(".concat(a,")"),"i"),c=r.split(i);return o.a.createElement("span",null,c.filter(String).map(function(t,e){return i.test(t)?o.a.createElement("mark",{key:e},t):o.a.createElement("span",{key:e},t)}))};r(99);var A=function(t){var e=t.jokes,r=t.detailFunction,n=t.searchTerm;return o.a.createElement("div",{className:"listContainer"},0===e.length&&"No joke was found, please try again ",e.map(function(t){return o.a.createElement("div",null,o.a.createElement("main",{className:"jokeBox",onClick:function(){return r(t)}},o.a.createElement("section",null,o.a.createElement("p",null," ",o.a.createElement(j.a,{icon:k.d,style:{color:"var(--orange-white)"}})," Joke: ",o.a.createElement(C,{text:t.value,regexTerm:n})))))}))};function I(){I=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var m={};c(m,o,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(k([])));v&&v!==e&&r.call(v,o)&&(m=v);var y=p.prototype=h.prototype=Object.create(m);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var J=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),h=s[0],f=s[1],p=Object(n.useState)([]),m=Object(l.a)(p,2),d=m[0],v=m[1],y=Object(n.useState)(null),g=Object(l.a)(y,2),E=g[0],b=g[1],x=Object(n.useState)({open:!1,loading:!1}),j=Object(l.a)(x,2),k=j[0],L=j[1],O=Object(n.useState)(""),S=Object(l.a)(O,2),G=S[0],P=S[1],C=Object(n.useState)(!1),J=Object(l.a)(C,2),Y=J[0],B=J[1],R=Object(F.e)();function D(){return(D=Object(u.a)(I().mark(function t(e){var r,n;return I().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.length<3)){t.next=4;break}return P("Please type a least 3 characters"),B(!0),t.abrupt("return");case 4:return f(e),t.next=7,w.getJokesFromSearchTerm(e);case 7:r=t.sent,n=r.data.result,v(n);case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}function H(){return(H=Object(u.a)(I().mark(function t(e){return I().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return L({open:!0,loading:!0}),t.t0=b,t.next=4,w.getRandomJokeFromSearchTerm(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),L({open:!0,loading:!1});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(n.useEffect)(function(){v(R.state.jokes),a(R.state.searchTerm),f(R.state.searchTerm)},[R.state]),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"searchHeader"},o.a.createElement(_,{searchTerm:r,setSearchTerm:a,searchJokes:function(t){return D.apply(this,arguments)},handleFeelingLuckClickButton:function(t){return H.apply(this,arguments)}}),o.a.createElement(T,{type:"error",message:G,isShow:Y,handleClose:function(){return B(!1)}})),o.a.createElement("main",null,o.a.createElement("div",null,null!=d&&o.a.createElement(A,{jokes:d,detailFunction:function(t){L({open:!0,loading:!0}),b(t),L({open:!0,loading:!1})},searchTerm:h}))),o.a.createElement(N,{state:k,joke:E,closeFunction:function(){L(Object(c.a)({},k,{open:!1}))}}))},Y=r(42),B=r(13);var R=function(){return o.a.createElement("div",null,o.a.createElement(Y.a,null,o.a.createElement("title",null,"Chuck Norris Jokes"),o.a.createElement("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",crossOrigin:"anonymous"})),o.a.createElement(B.a,null,o.a.createElement(F.c,null,o.a.createElement(F.a,{path:"/",element:o.a.createElement(P,null)}),o.a.createElement(F.a,{path:"/jokes",element:o.a.createElement(J,null)}),o.a.createElement(F.a,{path:"*",element:o.a.createElement(P,null)}))),o.a.createElement("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",integrity:"sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",crossOrigin:"anonymous"}))},D=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,102)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null))),b.a.setAppElement("#root"),D()},37:function(t,e,r){t.exports=r.p+"static/media/chucknorris_logo_coloured.39b94c0e.png"},47:function(t,e,r){t.exports=r(101)},54:function(t,e,r){},56:function(t,e,r){},95:function(t,e,r){},97:function(t,e,r){},99:function(t,e,r){}},[[47,3,2]]]);
//# sourceMappingURL=main.7ee56759.chunk.js.map