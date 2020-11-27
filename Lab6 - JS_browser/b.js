var fiveSecTimer=setInterval(function(){showParagraph()},5000);



function showParagraph()
{
    var t="This is what you waited for. Congrats";
    document.getElementById("p").innerHTML=t;
}
