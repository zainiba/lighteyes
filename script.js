function showBuyNow() { 
    document.getElementById("BuyNow").style.display = "inline"; 
}

//this calls the function above, 3000 milliseconds is 3 seconds, adjust here to make it a longer interval
setTimeout("showBuyNow()", 100);

var str = "<h1 class=front1>Welcome to Society.</h1> <br><h3 class=front2>We are so glad you could make it.</h3><br><br><p class=front3>Please take your required welcome balloon</p>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
}());
