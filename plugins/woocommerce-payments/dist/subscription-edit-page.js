(()=>{var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p=window.wcpayAssets.url,(()=>{const e=(e,t,n)=>{const r=document.createElement("option");return r.value=t,r.text=n,e.appendChild(r),r};(t=>{let{gateway:n,table:r,metaKey:o,tokens:a,defaultOptionText:c}=t;const i=`_payment_method_meta[${n}][${r}][${o}]`,l=document.getElementById(i),s=a.some((e=>e.tokenId.toString()===l.value));if(!l||"SELECT"===l.tagName)return;const p=document.createElement("select");if(p.id=i,p.name=i,!s){const t=e(p,"",c);t.disabled=!0,t.selected=!0}a.forEach((t=>{e(p,t.tokenId,t.displayName)})),s&&(p.value=l.value),l.parentElement.insertBefore(p,l),l.remove()})(wcpaySubscriptionEdit)})()})();