if (document.script.src.includes("jquery") !== true) {
  console.log("Generating jquery");
  let scr = document.createElement("SCRIPT");
  scr.async = "true";
  scr.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
  document.head.appendchild(scr);
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
