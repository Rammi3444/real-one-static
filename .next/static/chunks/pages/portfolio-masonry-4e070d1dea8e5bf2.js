(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{416:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio-masonry",function(){return l(2769)}])},4564:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suspense=function(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},t.NoSSR=function(e){let{children:t}=e;return t},(0,l(2648).Z)(l(7294));var r=l(2983)},7645:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=n.default,a={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r({},a,e)),a=r({},a,t);let s=a.loader,i=()=>null!=s?s().then(o):Promise.resolve(o(()=>null));return a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated)).loadableGenerated,"boolean"!=typeof a.ssr||a.ssr||(delete a.webpack,delete a.modules),l(r({},a,{loader:i}))};var r=l(6495).Z,a=l(2648).Z;a(l(7294));var n=a(l(4588));function o(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,l(2648).Z)(l(7294));let a=r.default.createContext(null);t.LoadableContext=a},4588:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(932).Z,a=l(6495).Z,n=(0,l(2648).Z)(l(7294)),o=l(4564),s=l(3644);let i=[],u=[],d=!1;function c(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class f{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function _(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t),a=null;function i(){if(!a){let t=new f(e,l);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(l.lazy=n.default.lazy(r(function*(){if(l.ssr&&a){let e=a.getCurrentValue(),t=yield e.loaded;if(t)return t}return yield l.loader()})),!d){let e=l.webpack?l.webpack():l.modules;e&&u.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return i()})}function c(e){!function(){i();let e=n.default.useContext(s.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let t=l.loading,r=n.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),a=l.ssr?n.default.Fragment:o.NoSSR,u=l.lazy;return n.default.createElement(n.default.Suspense,{fallback:r},n.default.createElement(a,null,n.default.createElement(u,Object.assign({},e))))}return c.preload=()=>i(),c.displayName="LoadableComponent",c}(c,e)}function h(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return h(e,t)})}_.preloadAll=()=>new Promise((e,t)=>{h(i).then(e,t)}),_.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(d=!0,t());h(u,e).then(l,l)})},window.__NEXT_PRELOADREADY=_.preloadReady,t.default=_},2769:function(e,t,l){"use strict";l.r(t);var r=l(5893),a=l(3008),n=l(5152),o=l.n(n);let s=o()(()=>Promise.all([l.e(391),l.e(445)]).then(l.bind(l,3445)),{loadableGenerated:{webpack:()=>[3445]},ssr:!1}),i=()=>(0,r.jsxs)(a.Z,{noHeaderBg:!0,pageName:"Portfolio 2",children:[(0,r.jsx)("section",{className:"splash-area-section",style:{backgroundImage:"url(assets/img/background.jpg)"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"splash-area",children:[(0,r.jsx)("h2",{children:"We Love to Build Something Amazing"}),(0,r.jsx)("a",{href:"#",children:"Portfolio Grid"})]})})}),(0,r.jsx)(s,{})]});t.default=i},5152:function(e,t,l){e.exports=l(7645)}},function(e){e.O(0,[664,8,774,888,179],function(){return e(e.s=416)}),_N_E=e.O()}]);