/* execute code in strict mode */
"use strict";

/* Hold all four squares as separate obj */
var s1 = document.getElementById('b1');
var s2 = document.getElementById('b2');
var s3 = document.getElementById('b3');
var s4 = document.getElementById('b4');

//create button objects
var bh = document.getElementById('btn-hor');
var bv = document.getElementById('btn-ver');

//store the object of the squares which are free after swap
//by default square 1 and 4 are free on load
var vfs = s1;
var hfs = s4;

//occupied squares
var vos = s3;
var hos = s2;

//empty space object
var emptySpace = "&nbsp;";

/* Handle click events */
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
    if (target.getAttribute('id') == "btn-hor" &&
            text.indexOf("Swap Horizontal") != -1)
        swapHorizontal();
    else if (target.getAttribute('id') == "btn-ver" &&
            text.indexOf("Swap Vertical") != -1)
        swapVertical();
    else
        return false;
}, false);


function swapHorizontal () {
    vfs.innerHTML = hos.innerHTML;
    hos.innerHTML = emptySpace;
    var temp = vfs;
    vfs = hos;
    hos = temp;
    hfs.innerHTML = vos.innerHTML;
    vos.innerHTML = emptySpace;
    temp = hfs;
    hfs = vos;
    vos = temp;
}


function swapVertical () {
    vfs.innerHTML = vos.innerHTML;
    vos.innerHTML = emptySpace;
    var temp = vfs;
    vfs = vos;
    vos = temp;
    hfs.innerHTML = hos.innerHTML;
    hos.innerHTML = emptySpace;
    temp = hfs;
    hfs = hos;
    hos = temp;
}
