(this["webpackJsonpreact-pomodoro"]=this["webpackJsonpreact-pomodoro"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(6),c=a.n(i),l=a(8),o=a(2),s=a(3),d=a(4),m=a(7),u=function(e){var t=e.children;return r.a.createElement("div",{className:"container mx-auto px-4 min-h-screen flex flex-col"},r.a.createElement("main",{className:"flex flex-col justify-center items-center w-full flex-auto"},t),r.a.createElement("footer",{className:"text-center text-xs py-3"},"Made with CRA, hosted on GitHub Pages"))},f=a(9),v=function(e){var t=e.children,a=Object(f.a)(e,["children"]);return r.a.createElement("button",Object.assign({className:"bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-75 disabled:cursor-not-allowed disabled:bg-red-400"},a),t)},b=function(e){return e.toString().padStart(2,"0")},p=function(e,t){switch(t.type){case"start":return Object(o.a)({},e,{isActive:!0,intervalId:t.payload.intervalId});case"decrease-timer":return e.timeLeft>=1?Object(o.a)({},e,{timeLeft:e.timeLeft-1}):(clearInterval(e.intervalId),Object(o.a)({},e,{isActive:!1,timeLeft:300}));case"stop":return clearInterval(e.intervalId),Object(o.a)({},e,{isActive:!1});case"restart":return clearInterval(e.intervalId),Object(o.a)({},e,{isActive:!1,timeLeft:1500});case"increase-session":return Object(o.a)({},e,{timeLeft:e.timeLeft+1500});case"decrease-session":return Math.floor(e.timeLeft/60)>=25?Object(o.a)({},e,{timeLeft:e.timeLeft-1500}):Object(o.a)({},e);default:return function(e){throw new Error("Not all variants of the discriminated union all covered.")}()}},h=function(){var e=Object(n.useReducer)(p,{timeLeft:1500,isActive:!1,intervalId:-1}),t=Object(l.a)(e,2),a=t[0],i=t[1],c=b(Math.floor(a.timeLeft/60)),o=b(a.timeLeft-60*Number(c));return Object(n.useEffect)((function(){return function(){clearInterval(a.intervalId)}}),[a.intervalId]),r.a.createElement(u,null,r.a.createElement("div",{className:"text-6xl font-semibold"},r.a.createElement("span",null,c),r.a.createElement("span",null,":"),r.a.createElement("span",null,o)),r.a.createElement("div",{className:"grid grid-cols-5 col-gap-2"},r.a.createElement(v,{title:"Start session",onClick:function(){var e=window.setInterval((function(){i({type:"decrease-timer"})}),1e3);i({type:"start",payload:{intervalId:e}})},disabled:a.isActive},r.a.createElement(s.a,null)),r.a.createElement(v,{title:"Stop session",onClick:function(){i({type:"stop"})},disabled:!a.isActive},r.a.createElement(s.b,null)),r.a.createElement(v,{title:"Restart session",onClick:function(){i({type:"restart"})}},r.a.createElement(m.a,null)),r.a.createElement(v,{title:"Increase the pomodoro with 25 minutes",onClick:function(){i({type:"increase-session"})}},r.a.createElement(d.b,null)),r.a.createElement(v,{title:"Decrease the pomodoro with 25 minutes",onClick:function(){i({type:"decrease-session"})},disabled:Number(c)<25},r.a.createElement(d.a,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.ce9f0c01.chunk.js.map