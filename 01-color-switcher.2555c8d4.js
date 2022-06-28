const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null;t.addEventListener("click",(t=>{console.log("+"),o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(t=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.2555c8d4.js.map
