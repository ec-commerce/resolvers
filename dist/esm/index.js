import{transformToNestObject as e,appendErrors as s}from"react-hook-form";const t=(s,t={abortEarly:!1})=>async(r,n,a=!1)=>{try{return t.context&&process.env.NODE_ENV,{values:await s.validate(r,Object.assign(Object.assign({},t),{context:n})),errors:{}}}catch(s){const t=((e,s)=>Array.isArray(e.inner)&&e.inner.length?e.inner.reduce(((e,{path:t,message:r,type:n})=>{const a=e[t]&&e[t].types||{},c=t||n;return Object.assign(Object.assign({},e),c?{[c]:Object.assign(Object.assign({},e[c]||{message:r,type:n}),s?{types:Object.assign(Object.assign({},a),{[n]:a[n]?[...[].concat(a[n]),r]:r})}:{})}:{})}),{}):{[e.path]:{message:e.message,type:e.type}})(s,a);return{values:{},errors:e(t)}}};class r extends TypeError{constructor(e,s){let t;const{message:r,...n}=e,{path:a}=e;super(0===a.length?r:"At path: "+a.join(".")+" -- "+r),Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>{var r;return null!=(r=t)?r:t=[e,...s()]}}}function*n(e,s,t={}){const{path:r=[],branch:a=[e],coerce:c=!1}=t,o={path:r,branch:a};c&&(e=s.coercer(e,o));let i=!0;for(const t of s.validator(e,o))i=!1,yield[t,void 0];if(i)for(const t of s.refiner(e,o))i=!1,yield[t,void 0];for(let[t,g,y]of s.entries(e,o)){const s=n(g,y,{path:void 0===t?r:[...r,t],branch:void 0===t?a:[...a,g],coerce:c});for(const r of s)r[0]?(i=!1,yield[r[0],void 0]):c&&(g=r[1],void 0===t?e=g:e instanceof Map?e.set(t,g):e instanceof Set?e.add(g):"object"==typeof(u=e)&&null!=u&&(e[t]=g))}var u;i&&(yield[void 0,e])}function a(e,s,t={}){const a=n(e,s,t),c=function(e){const{done:s,value:t}=e.next();return s?void 0:t}(a);if(c[0]){return[new r(c[0],(function*(){for(const e of a)e[0]&&(yield e[0])})),void 0]}return[void 0,c[1]]}var c=e=>e.reduce(((e,s,t)=>`${e}${"string"==typeof s?`${t>0?".":""}${s}`:`[${s}]`}`),"").toString();const o=(e,t)=>e.failures().reduce(((e,{path:r,message:n="",type:a})=>{const o=c(r);return Object.assign(Object.assign({},e),r?e[o]&&t?{[o]:s(o,t,e,a||"",n)}:{[o]:e[o]||Object.assign({message:n,type:a},t?{types:{[a||""]:n||!0}}:{})}:{})}),{}),i=(s,t)=>(r,n,c=!1)=>{const[i,u]=a(r,s,t);return null!=i?{values:{},errors:e(o(i,c))}:{values:u,errors:{}}},u=(e,t)=>Array.isArray(e.details)?e.details.reduce(((e,{path:r,message:n="",type:a})=>{const o=c(r);return Object.assign(Object.assign({},e),r?e[o]&&t?{[o]:s(o,t,e,a,n)}:{[o]:e[o]||Object.assign({message:n,type:a},t?{types:{[a]:n||!0}}:{})}:{})}),{}):[],g=(s,t={abortEarly:!1})=>async(r,n,a=!1)=>{try{return{values:await s.validateAsync(r,Object.assign({},t)),errors:{}}}catch(s){return{values:{},errors:e(u(s,a))}}},y=(e,t)=>e.isEmpty?{}:e.errors.reduce(((e,{path:r,message:n,code:a})=>{const o=c(r);return Object.assign(Object.assign({},e),r?e[o]&&t?{[o]:s(o,t,e,a,n)}:{[o]:e[o]||Object.assign({message:n,type:a},t?{types:{[a]:n||!0}}:{})}:{})}),{}),l=(s,t)=>async(r,n,a=!1)=>{const c=s.safeParse(r,t);return c.success?{values:c.data,errors:{}}:{values:{},errors:e(y(c.error,a))}},p=(e,s)=>Object.entries(e).reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:Object.assign({type:"",message:r[0]},s?{types:r.reduce(((e,s,t)=>Object.assign(Object.assign({},e),{[t]:s})),{})}:{})})),{}),d=(s,t={},r=!1)=>async t=>{const n=(a=s,(...e)=>new Promise((s=>a(...e).done(s))));var a;const c=await n(t),o=c.getErrors();return c.hasErrors()?{values:{},errors:e(p(o,r))}:{values:t,errors:{}}};export{g as joiResolver,i as superstructResolver,d as vestResolver,t as yupResolver,l as zodResolver};
//# sourceMappingURL=index.js.map