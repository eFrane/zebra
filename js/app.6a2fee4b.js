(function(){"use strict";var e={6760:function(e,t,n){var r=n(9242),a=n(3396),o=n(7139);const i={class:"w-2/3 mx-auto mt-24 bg-neutral-200 p-4 drop-shadow-2xl rounded"},s=(0,a._)("p",{class:"mb-2 p-1"},[(0,a.Uk)(" Please select a "),(0,a._)("a",{href:"https://en.wikipedia.org/wiki/Time-based_one-time_password"},"TOTP"),(0,a.Uk)(" aka 2FA QR Code image or screenshot to parse out the secret. This secret can then be used to setup TOTP / 2FA in applications like "),(0,a._)("a",{href:"https://keepassxc.org"},"KeepassXC"),(0,a.Uk)(". ")],-1),l=(0,a._)("p",{class:"mb-2 p-1 w-full bg-yellow-100 rounded"}," This application works fully client-side and never transfers any data back to the server. ",-1),c=["onchange"],u={key:0,class:"flex"},d={class:"p-4"},h=(0,a._)("h2",{class:"text-center font-bold"},"Analysed QR Code",-1),f=["src"],p={class:"p-4 border-neutral-300 border-l"},g=(0,a._)("h2",{class:"text-center font-bold"},"Data",-1),b={class:"text-center font-bold align-bottom px-2"},w={class:"grow text-center text-xl text-blue-900 bg-neutral-300 rounded"},m={class:"my-2 p-2 w-full text-sm text-grey-700 whitespace-pre-wrap"},v={key:1,class:"text-center"};function x(e,t,n,r,x,y){return(0,a.wg)(),(0,a.iD)("div",i,[s,l,(0,a._)("input",{class:"mb-4 file:rounded file:p-1 file:bg-blue-900 file:text-neutral-300 file:hover:bg-blue-600 file:hover:cursor-pointer",type:"file",name:"qrcode",id:"qrcode",onchange:y.updateQRCode,accept:"image/*"},null,8,c),null!==x.imageData?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",d,[h,(0,a._)("img",{class:"my-2 w-96 h-96 object-scale-down flex-none",src:x.imageData,alt:"The selected QR Code (you did select a QR Code right?)"},null,8,f)]),(0,a._)("div",p,[x.content?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[g,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(x.content.params,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"flex flex-row my-2"},[(0,a._)("h2",b,(0,o.zw)(t),1),(0,a._)("pre",w,(0,o.zw)(e),1)])))),128)),(0,a._)("pre",m,"Full URL: "+(0,o.zw)(x.content.url),1)],64)):((0,a.wg)(),(0,a.iD)("span",v,(0,o.zw)(x.err),1))])])):(0,a.kq)("",!0)])}var y=n(851),k=n.n(y),_={name:"App",data(){return{imageData:null,blo:null,content:null,err:""}},methods:{reset(){this.imageData=null,this.blob=null,this.content=null,this.err=""},updateQRCode(e){if(this.reset(),e.target.files&&1===e.target.files.length){this.blob=e.target.files[0];const t=new FileReader;t.addEventListener("load",(()=>{this.imageData=t.result,this.readQRCode()})),t.readAsDataURL(this.blob)}},readQRCode(){createImageBitmap(this.blob).then((e=>{const t=new Image(e.width,e.height);t.src=this.imageData;const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(t,0,0);const a=r.getImageData(0,0,e.width,e.height),o=k()(a.data,e.width,e.height),i=new URL(o.data),s={};for(const[l,c]of i.searchParams)s[l]=c;this.content={url:o.data,params:s}})).catch((e=>{this.err=e}))}}},D=n(89);const O=(0,D.Z)(_,[["render",x]]);var C=O;(0,r.ri)(C).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkzebra"]=self["webpackChunkzebra"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6760)}));r=n.O(r)})();
//# sourceMappingURL=app.6a2fee4b.js.map