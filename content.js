console.log("Table open, now tiling tables");

//Hotkeys for betting, raising, folding, and selecting bet-input box
//.future-actions are preselect options. 
//.action-buttons are buttons to fold, call, check, bet, and raise when action is on you.
//.show happens when it is users turn. without .show bugs will occur such as folding at any time.
//keycodes: 81 is 'Q', 68 is 'D', 69 is 'E', 38 is 'Arrow Up'
document.onkeydown = function(e) {
    if (e.which == 81) {
        const futureFoldBtn = document.querySelector('.future-actions.fold')
        const foldBtn = document.querySelector('.action-button.action-fold.show')
            if (futureFoldBtn) futureFoldBtn.click();
            else if (foldBtn) foldBtn.click();
    } else if (e.which == 68) {
        const betBtn = document.querySelector('.action-button.action-bet.show')
        const raiseBtn = document.querySelector('.action-button.action-raise.show')
            if (betBtn) betBtn.click();
            else if (raiseBtn) raiseBtn.click();
    } else if (e.which == 69) {
        const callBtn = document.querySelector('.action-button.action-call.show')
        const checkBtn = document.querySelector('.action-button.action-check.show')
            if (callBtn) callBtn.click();
            else if (checkBtn) checkBtn.click();
    } else if (e.which == 38) {
        const betInput = document.querySelector('.bet-input')
            if (betInput) betInput.click();
    }
};

console.log("Hotkeys loaded. Now loading quick-seat tool.");

//create delay function, guess setTimeout by itself would work as well
var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

//on table open: tile all tables on screen and immediately join game. 
//600ms delay so table has time to load before executing.
delay(function(){
    document.querySelector('.tile-tables').click();
    const joinBtn = document.querySelector('.action-join')
        if (joinBtn) joinBtn.click();
}, 600 );

console.log("This is the end. My only friend - the end.");
