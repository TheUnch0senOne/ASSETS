window.loader = {};
loader.obj = (()=>{return document.currentScript;})();
loader.data = (()=>{return document.querySelectorAll("[class=loader]").hasAttribute(/data-.*/gi);})();
loader.libcheck = {jquery: ($ !== undefined), data: loader.data};
if (libcheck.jquery) {
  
}
{
  let div = $("div[class='loader']")[0];
  div.css({"--main-bg-color":"black","background-color":"black","color":"#accae8"});
  let $img = $.create("IMG");
  $img = $img.attr({
    src = "https://cdn.jsdelivr.net/gh/TheUnch0senOne/ASSETS/"
  });
  $img = $img.css({ })
  div.append($img);
}
