function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,u,l,f=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,f=t,a=e.apply(i,n)}function h(e){return f=e,u=setTimeout(j,t),c?b(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=i}function j(){var e=m();if(T(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-l);return s?v(n,i-(e-f)):n}(e))}function S(e){return u=void 0,g&&r?b(e):(r=o=void 0,a)}function w(){var e=m(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return h(l);if(s)return u=setTimeout(j,t),b(l)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,r=l=o=u=void 0},w.flush=function(){return void 0===u?a:S(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),h=document.querySelector("input"),T=document.querySelector("textarea");b.addEventListener("input",e(t)((function(e){try{e.preventDefault();const{elements:{email:t,message:n}}=b,r={email:t.value,message:n.value},o=JSON.stringify(r);localStorage.setItem("feedback-form-state",o)}catch(e){console.log(e)}}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);try{if(null===e)return h.value="";h.value=t.email,T.value=t.message}catch(t){return console.log(t),e}}(),b.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return alert("Please fill in all the fields!");t.value,n.value;console.log(`E-mail: ${t.value}, Message: ${n.value}`),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.72fa2726.js.map
