(function(){"use strict";var e={7022:function(e,t,n){var a=n(9242),r=n(3396),o=n(7139);const i={class:"w-2/3 mx-auto mt-24 bg-neutral-200 p-4 drop-shadow-2xl rounded"},s=(0,r._)("p",{class:"mb-2 p-1"},[(0,r.Uk)(" Please select a "),(0,r._)("a",{href:"https://en.wikipedia.org/wiki/Time-based_one-time_password"},"TOTP"),(0,r.Uk)(" aka 2FA QR Code image or screenshot to parse out the secret. This secret can then be used to setup TOTP / 2FA in applications like "),(0,r._)("a",{href:"https://keepassxc.org"},"KeepassXC"),(0,r.Uk)(". ")],-1),c=(0,r._)("p",{class:"mb-2 p-1 w-full bg-yellow-100 rounded"}," This application works fully client-side and never transfers any data back to the server. ",-1),l=["onchange"],u={key:0,class:"flex"},d={class:"p-4"},h=(0,r._)("h2",{class:"text-center font-bold"},"Analysed QR Code",-1),f=["src"],p={class:"p-4 grow"},g=(0,r._)("h2",{class:"text-center font-bold"},"Secret",-1),b={class:"my-2 p-2 w-full text-center text-2xl text-blue-900 bg-neutral-300 rounded"};function m(e,t,n,a,m,w){return(0,r.wg)(),(0,r.iD)("div",i,[s,c,(0,r._)("input",{class:"mb-4",type:"file",name:"qrcode",id:"qrcode",onchange:w.updateQRCode,accept:"image/*"},null,8,l),null!==m.imageData?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",d,[h,(0,r._)("img",{class:"my-2 w-48 h-48 object-scale-down",src:m.imageData,alt:"The selected QR Code (you did select a QR Code right?)"},null,8,f)]),(0,r._)("div",p,[g,(0,r._)("pre",b,(0,o.zw)(m.content),1)])])):(0,r.kq)("",!0)])}var w=n(851),v=n.n(w),k={name:"App",data(){return{imageData:null,blo:null,content:""}},methods:{reset(){this.imageData=null,this.blob=null,this.content=""},updateQRCode(e){if(this.reset(),e.target.files&&1===e.target.files.length){this.blob=e.target.files[0];const t=new FileReader;t.addEventListener("load",(()=>{this.imageData=t.result,this.readQRCode()})),t.readAsDataURL(this.blob)}},readQRCode(){createImageBitmap(this.blob).then((e=>{console.dir(e);const t=new Image(e.width,e.height);t.src=this.imageData;const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(t,0,0);const r=a.getImageData(0,0,e.width,e.height),o=v()(r.data,e.width,e.height),i=new URL(o.data);this.content=i.searchParams.get("secret")})).catch((e=>{this.content=e}))}}},y=n(89);const x=(0,y.Z)(k,[["render",m]]);var _=x;(0,a.ri)(_).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(a);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkzebra"]=self["webpackChunkzebra"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7022)}));a=n.O(a)})();
//# sourceMappingURL=app.8217d3cc.js.map