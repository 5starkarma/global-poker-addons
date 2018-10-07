console.log("Table open. Activating hotkeys..");

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

document.onkeydown = function(e) {
    if (e.which == 81) {
        const foldBtn1 = document.querySelector('.future-actions.fold')
        const foldBtn = document.querySelector('.action-button.action-fold.show')
            if (foldBtn1) foldBtn1.click();
            else if (foldBtn) foldBtn.click();
    } else if (e.which == 68) {
        const test1 = document.querySelector('.action-button.action-bet.show')
        const test2 = document.querySelector('.action-button.action-raise.show')
            if (test1) test1.click();
            else if (test2) test2.click();
    } else if (e.which == 69) {
        const test3 = document.querySelector('.action-button.action-call.show')
        const test4 = document.querySelector('.action-button.action-check.show')
            if (test3) test3.click();
            else if (test4) test4.click();
    } else if (e.which == 38) {
        const test5 = document.querySelector('.bet-input')
            if (test5) test5.focus().select();
    }
};

console.log("Hotkeys activated. Tiling and joining table...");

delay(function(){
    document.querySelector('.tile-tables').click();
    const span1 = document.querySelector('.action-join')
        if (span1) span1.click();
}, 900 ); // end delay

console.log("Adding mouseover active table styling..");

//Add red color to bets when mouse is over table
document.querySelector('.view-container').addEventListener("mouseover", mouseOver);
function mouseOver() {
    document.querySelector('.view-container').style.color = "white";
}
document.querySelector('.view-container').addEventListener("mouseout", mouseOut);
function mouseOut() {
    document.querySelector('.view-container').style.color = "grey";
}

console.log("This is the end. My only friend - the end.");
