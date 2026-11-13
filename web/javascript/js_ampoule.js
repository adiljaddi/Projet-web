function OnOffAmpoule() {
    let img = document.getElementById('bulb');
    if (img.src.search("bulboff") != -1) {  
        img.src = "/images/pic_bulbon.gif";
    } else {
        img.src = "/images/pic_bulboff.gif";
    }
}