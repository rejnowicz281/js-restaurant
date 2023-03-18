(()=>{"use strict";var n={150:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),s=t(667),c=t.n(s),l=new URL(t(88),t.b),d=a()(r()),u=c()(l);d.push([n.id,"body {\n  margin: 0;\n  width: 100vw;\n  height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n  background: url("+u+");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 50px;\n  box-sizing: border-box;\n  gap: 30px;\n}\n\nheader {\n  flex: 1;\n  display: flex;\n  gap: 50px;\n}\n\n.header-logo {\n  font-size: 100px;\n}\n\n.header-buttons {\n  flex: 1;\n  display: flex;\n}\n\n.header-buttons button {\n  background-color: rgb(36, 36, 36);\n  color: white;\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n  font-size: 17px;\n  font-weight: bold;\n  flex: 1;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.header-buttons button:hover {\n  background-color: rgb(54, 54, 54);\n  color: white;\n}\n\nmain {\n  flex: 8;\n  display: flex;\n  background-color: rgba(240, 248, 255, 0.897);\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.main-left {\n  flex: 1;\n}\n\n.restaurant-description {\n  line-height: 40px;\n  font-size: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n\n.dish-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.dish-list button {\n  font-size: 30px;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  border: none;\n  background-color: inherit;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.dish-list button:hover {\n  background-color: rgb(53, 53, 53);\n  color: white;\n  font-size: 31px;\n}\n\n.main-right {\n  flex: 2;\n}\n\n.main-logo {\n  padding: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-logo-top {\n  font-size: 150px;\n  margin: 0;\n  letter-spacing: 56px;\n}\n.main-logo-bottom {\n  font-size: 30px;\n  letter-spacing: 5px;\n  margin: 0;\n  color: rgb(80, 80, 80);\n}\n\n.dish-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.dish-info img {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  transition: 0.5s;\n  cursor: pointer;\n  border-radius: 20px;\n}\n\n.dish-info img:hover {\n  scale: 1.05;\n}\n\n.dish-info p {\n  text-align: center;\n  font-size: 20px;\n}\n\n.contact {\n  font-size: 25px;\n  width: 100%;\n}\n\n.contact h1 {\n  text-align: center;\n}\n\n.contact-main {\n  display: flex;\n  gap: 10px;\n}\n\n.contact-left {\n  text-align: center;\n  flex: 1;\n  height: 100%;\n}\n\n.contact-number {\n  font-size: 50px;\n}\n\n.contact-right {\n  flex: 1;\n}\n\n.contact-right > p {\n  text-align: center;\n}\n\n#message-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  height: 100%;\n}\n\n#mail-content {\n  resize: none;\n  flex: 1;\n}\n\n#send-message-button {\n  background-color: rgb(48, 48, 48);\n  color: white;\n  flex: 1;\n  font-weight: bold;\n  font-size: 17px;\n  border: none;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n#send-message-button:hover {\n  background-color: rgb(92, 92, 92);\n}\n",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},88:(n,e,t)=>{n.exports=t.p+"4b117500a5d32cc77808.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(150),h={};function g(){document.querySelector("main").innerHTML='\n  <div class="main-left restaurant-description">\n    <p>\n        <b>High Definition Food</b> is a stylish and modern restaurant that serves high-quality and\n        visually\n        appealing cuisine. The interior of the restaurant is designed to impress, with sleek lines and a\n        modern aesthetic that sets the tone for what\'s to come. Every dish is crafted with the highest\n        quality ingredients and prepared with care to create a culinary experience that is both\n        delicious\n        and visually stunning.\n    </p>\n  </div>\n  <div class="main-right main-logo">\n    <h1 class="main-logo-top">HDF.</h1>\n    <div class="main-logo-bottom">The Definitive Food Experience</div>\n  </div>'}h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,g(),document.getElementById("home-button").addEventListener("click",g),document.getElementById("menu-button").addEventListener("click",(function(){console.log("bruh"),document.querySelector("main").innerHTML='\n    <div class="main-left dish-list">\n      <button id="ribeye-button">Precision-Cut Ribeye</button>\n      <button id="stirfry-button">Vibrant Veggie Stir Fry</button>\n      <button id="chicken-button">Ultra-Crisp Fried Chicken</button>\n      <button id="pork-button">Pixel-Perfect Pork Belly</button>\n    </div>\n    <div class="main-right dish-info">\n    </div>'})),document.getElementById("contact-button").addEventListener("click",(function(){document.querySelector("main").innerHTML='\n    <div class="contact">\n      <h1>Contact us</h1>\n      <div class="contact-main">\n          <div class="contact-left">\n              <p>If you wish to speak to a reservationist, please call</p>\n              <p class="contact-number">123-456-789</p>\n          </div>\n          <div class="contact-right">\n              <p>Also, feel free to send us an email!</p>\n              <form id="message-form">\n                  <input type="email" name="email" id="email" placeholder="Email goes here">\n                  <textarea name="mail-content" id="mail-content"\n                      placeholder="Message goes here"></textarea>\n                  <button id="send-message-button">Send</button>\n              </form>\n          </div>\n      </div>\n    </div>'}))})()})();