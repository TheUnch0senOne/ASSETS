window.loader = {};
loader.obj = (()=>{return document.currentScript;})();
loader.data = (()=>{return document.querySelectorAll("[class=loader]").hasAttribute(/data-.*/gi);})();
loader.libcheck.func._libcheck = (jsonobj) => {
  for (let i = 0; i < jsonobj.length; i++) {
    
  }
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
