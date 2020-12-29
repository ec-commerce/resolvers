!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports,require("react-hook-form")):"function"==typeof define&&define.amd?define(["exports","react-hook-form"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).ReactHookFormResolvers={},e.ReactHookForm)}(this,(function(e,s){"use strict";class t extends TypeError{constructor(e,s){let t;const{message:r,...o}=e,{path:n}=e;super(0===n.length?r:"At path: "+n.join(".")+" -- "+r),Object.assign(this,o),this.name=this.constructor.name,this.failures=()=>{var r;return null!=(r=t)?r:t=[e,...s()]}}}function*r(e,s,t={}){const{path:o=[],branch:n=[e],coerce:a=!1}=t,c={path:o,branch:n};a&&(e=s.coercer(e,c));let i=!0;for(const t of s.validator(e,c))i=!1,yield[t,void 0];if(i)for(const t of s.refiner(e,c))i=!1,yield[t,void 0];for(let[t,l,d]of s.entries(e,c)){const s=r(l,d,{path:void 0===t?o:[...o,t],branch:void 0===t?n:[...n,l],coerce:a});for(const r of s)r[0]?(i=!1,yield[r[0],void 0]):a&&(l=r[1],void 0===t?e=l:e instanceof Map?e.set(t,l):e instanceof Set?e.add(l):"object"==typeof(u=e)&&null!=u&&(e[t]=l))}var u;i&&(yield[void 0,e])}function o(e,s,o={}){const n=r(e,s,o),a=function(e){const{done:s,value:t}=e.next();return s?void 0:t}(n);if(a[0]){return[new t(a[0],(function*(){for(const e of n)e[0]&&(yield e[0])})),void 0]}return[void 0,a[1]]}var n=e=>e.reduce(((e,s,t)=>`${e}${"string"==typeof s?`${t>0?".":""}${s}`:`[${s}]`}`),"").toString();const a=(e,t)=>e.failures().reduce(((e,{path:r,message:o="",type:a})=>{const c=n(r);return Object.assign(Object.assign({},e),r?e[c]&&t?{[c]:s.appendErrors(c,t,e,a||"",o)}:{[c]:e[c]||Object.assign({message:o,type:a},t?{types:{[a||""]:o||!0}}:{})}:{})}),{}),c=(e,t)=>Array.isArray(e.details)?e.details.reduce(((e,{path:r,message:o="",type:a})=>{const c=n(r);return Object.assign(Object.assign({},e),r?e[c]&&t?{[c]:s.appendErrors(c,t,e,a,o)}:{[c]:e[c]||Object.assign({message:o,type:a},t?{types:{[a]:o||!0}}:{})}:{})}),{}):[],i=(e,t)=>e.isEmpty?{}:e.errors.reduce(((e,{path:r,message:o,code:a})=>{const c=n(r);return Object.assign(Object.assign({},e),r?e[c]&&t?{[c]:s.appendErrors(c,t,e,a,o)}:{[c]:e[c]||Object.assign({message:o,type:a},t?{types:{[a]:o||!0}}:{})}:{})}),{}),u=(e,s)=>Object.entries(e).reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:Object.assign({type:"",message:r[0]},s?{types:r.reduce(((e,s,t)=>Object.assign(Object.assign({},e),{[t]:s})),{})}:{})})),{});e.joiResolver=(e,t={abortEarly:!1})=>async(r,o,n=!1)=>{try{return{values:await e.validateAsync(r,Object.assign({},t)),errors:{}}}catch(e){return{values:{},errors:s.transformToNestObject(c(e,n))}}},e.superstructResolver=(e,t)=>(r,n,c=!1)=>{const[i,u]=o(r,e,t);return null!=i?{values:{},errors:s.transformToNestObject(a(i,c))}:{values:u,errors:{}}},e.vestResolver=(e,t={},r=!1)=>async t=>{const o=(n=e,(...e)=>new Promise((s=>n(...e).done(s))));var n;const a=await o(t),c=a.getErrors();return a.hasErrors()?{values:{},errors:s.transformToNestObject(u(c,r))}:{values:t,errors:{}}},e.yupResolver=(e,t={abortEarly:!1})=>async(r,o,n=!1)=>{try{return t.context&&process.env.NODE_ENV,{values:await e.validate(r,Object.assign(Object.assign({},t),{context:o})),errors:{}}}catch(e){const t=((e,s)=>Array.isArray(e.inner)&&e.inner.length?e.inner.reduce(((e,{path:t,message:r,type:o})=>{const n=e[t]&&e[t].types||{},a=t||o;return Object.assign(Object.assign({},e),a?{[a]:Object.assign(Object.assign({},e[a]||{message:r,type:o}),s?{types:Object.assign(Object.assign({},n),{[o]:n[o]?[...[].concat(n[o]),r]:r})}:{})}:{})}),{}):{[e.path]:{message:e.message,type:e.type}})(e,n);return{values:{},errors:s.transformToNestObject(t)}}},e.zodResolver=(e,t)=>async(r,o,n=!1)=>{const a=e.safeParse(r,t);return a.success?{values:a.data,errors:{}}:{values:{},errors:s.transformToNestObject(i(a.error,n))}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map