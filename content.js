console.log("Table open. Activating hotkeys..");

//sleep function
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
sleep(500).then(() => {
    const tableTitle = document.title;
    console.log(tableTitle);
    var table = tableTitle.split(' ');
    var limit = table[1];
    var blinds = limit.split('/');
    var bigBlind = blinds[1];
    console.log(bigBlind);


    //Hotkeys for betting, raising, folding, and selecting bet-input box
    //.future-actions are preselect options.
    //.action-buttons are buttons to fold, call, check, bet, and raise when action is on you.
    //.show happens when it is users turn. without .show bugs will occur such as folding at any time.
    //keycodes: 81 is 'Q', 68 is 'D', 69 is 'E', 38 is 'Arrow Up', 76 is 'W'
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
        } else if (e.which == 87) {
            const betInputBox = document.querySelector('.bet-input')
                if (betInputBox) betInputBox.value = bigBlind * '2.5';
        //} else if (e.which == 67) {
        //    const totalPot = document.querySelector('.pot-value.pot-0').children;
        //        if (totalPot) console.log(totalPot);
        } else if (e.which == 32) {
            sleep(500).then(() => {
                const shareHand = document.querySelector('.share-hand')
                    if (shareHand) shareHand.click();
                    });
                    sleep(1000).then(() => {
                        const openURL = document.querySelector('.open-url-icon')
                            if (openURL) openURL.click();
                            });
        }
    };

    console.log("Hotkeys activated. Tiling and joining table...");

    //on table open: tile all tables on screen and immediately join game.
    //500ms delay so elements have time to load before executing.

        document.querySelector('.tile-tables').click();
        document.querySelector('.gameplay-tab').click();
        const joinBtn = document.querySelector('.action-join')
            if (joinBtn) joinBtn.click();
            sleep(1500).then(() => {
                const buyinBtn = document.querySelector('.new-ui-dialog-ok-button')
                    if (buyinBtn) buyinBtn.click();
                    });


    console.log("Adding mouseover active table styling..");

    //Add white color to bets when mouse is over table. Grey when mouse leaves table.
    document.querySelector('.view-container').addEventListener("mouseover", mouseOver);
    document.querySelector('.view-container').addEventListener("mouseout", mouseOut);

    function mouseOver() {
        document.querySelector('.view-container').style.color = "white";
    }
    function mouseOut() {
        document.querySelector('.view-container').style.color = "grey";
    }

    console.log("This is the end. My only friend - the end.");

});