/*================================================
    
    Game Data

=================================================*/

const gameData = {
    score: 0, // Total score.
    scoreSpent: 0, // Used to track how much of score the player has spent. 
    scorePerSecond: 1, // Score that the user gets passively per second. 
    amountPerClick: 1, // Score that the user gets when clicking on the onion.
    clickCount: 0, // Used to record the number of clicks that the user has done. 
    checkUpgrades: 0, // Used to track if every upgrade has been purchased.

    elemCounterTotal: document.getElementById('onion-counter'),
    elemRateValue: document.getElementById('rate-value')

}

/*================================================

    Passive Upgrade Objects 
    (Used to increase scorePerSecond) 
        
=================================================*/

const passiveUpgrade1 = {
    cost: 15,
    value: 0,
    totalPurchased: 0,

    elemCost: document.getElementById('cost-passiveUpgrade1'),
    elemTotalPurchased: document.getElementById('counter-passiveUpgrade1'),
    elemRate: document.getElementById('passiveUpgrade1-rate'),
    elemPercentage: document.getElementById('passiveUpgrade1-percentage'),
    elemToolTip: document.getElementById('passiveUpgrade1-large'),
    elemOverlay: document.getElementById('overlay-passiveUpgrade1'),

    elemRateMobile: document.getElementById('passiveUpgrade1-rate-mobile'),
    elemPercentageMobile: document.getElementById('passiveUpgrade1-percentage-mobile'),
}

const passiveUpgrade2 = {
    cost: 100,
    value: 0,
    totalPurchased: 0,

    elemCost: document.getElementById('cost-passiveUpgrade2'),
    elemTotalPurchased: document.getElementById('counter-passiveUpgrade2'),
    elemRate: document.getElementById('passiveUpgrade2-rate'),
    elemPercentage: document.getElementById('passiveUpgrade2-percentage'),
    elemToolTip: document.getElementById('passiveUpgrade2-large'),
    elemOverlay: document.getElementById('overlay-passiveUpgrade2'),

    elemRateMobile: document.getElementById('passiveUpgrade2-rate-mobile'),
    elemPercentageMobile: document.getElementById('passiveUpgrade2-percentage-mobile'),
}

const passiveUpgrade3 = {
    cost: 500,
    value: 0,
    totalPurchased: 0,

    elemCost: document.getElementById('cost-passiveUpgrade3'),
    elemTotalPurchased: document.getElementById('counter-passiveUpgrade3'),
    elemRate: document.getElementById('passiveUpgrade3-rate'),
    elemPercentage: document.getElementById('passiveUpgrade3-percentage'),
    elemToolTip: document.getElementById('passiveUpgrade3-large'),
    elemOverlay: document.getElementById('overlay-passiveUpgrade3'),

    elemRateMobile: document.getElementById('passiveUpgrade3-rate-mobile'),
    elemPercentageMobile: document.getElementById('passiveUpgrade3-percentage-mobile'),
}

const passiveUpgrade4 = {
    cost: 1000,
    value: 0,
    totalPurchased: 0,

    elemCost: document.getElementById('cost-passiveUpgrade4'),
    elemTotalPurchased: document.getElementById('counter-passiveUpgrade4'),
    elemRate: document.getElementById('passiveUpgrade4-rate'),
    elemPercentage: document.getElementById('passiveUpgrade4-percentage'),
    elemToolTip: document.getElementById('passiveUpgrade4-large'),
    elemOverlay: document.getElementById('overlay-passiveUpgrade4'),

    elemRateMobile: document.getElementById('passiveUpgrade4-rate-mobile'),
    elemPercentageMobile: document.getElementById('passiveUpgrade4-percentage-mobile'),
}

const passiveUpgrade5 = {
    cost: 5000,
    value: 0,
    totalPurchased: 0,

    elemCost: document.getElementById('cost-passiveUpgrade5'),
    elemTotalPurchased: document.getElementById('counter-passiveUpgrade5'),
    elemRate: document.getElementById('passiveUpgrade5-rate'),
    elemPercentage: document.getElementById('passiveUpgrade5-percentage'),
    elemToolTip: document.getElementById('passiveUpgrade5-large'),
    elemOverlay: document.getElementById('overlay-passiveUpgrade5'),


    elemRateMobile: document.getElementById('passiveUpgrade5-rate-mobile'),
    elemPercentageMobile: document.getElementById('passiveUpgrade5-percentage-mobile'),
}

/* =====================================================================

    Click Upgrade Objects 
    (Used to increase amountPerClick) 

======================================================================== */
// const clickUpgradeArray = [clickUpgrade1, clickUpgrade2, clickUpgrade3, clickUpgrade4, clickUpgrade5, clickUpgrade6, clickUpgrade7]

const clickUpgrade1 = {
    cost: 100,
    value: 1,
    lock: 0,

    elemCost: document.getElementById('clickUpgrade1-cost'),
    elemValue: document.getElementById('clickUpgrade1-value'),
    elemCostMobile: document.getElementById('clickUpgrade1-cost-mobile'),
    elemValueMobile: document.getElementById('clickUpgrade1-value-mobile'),
    elemOverlay: document.getElementById('clickUpgrade1-overlay')
}

const clickUpgrade2 = {
    cost: 500,
    value: 2,
    lock: 0,

    elemCost: document.getElementById('clickUpgrade2-cost'),
    elemValue: document.getElementById('clickUpgrade2-value'),
    elemCostMobile: document.getElementById('clickUpgrade2-cost-mobile'),
    elemValueMobile: document.getElementById('clickUpgrade2-value-mobile'),
    elemOverlay: document.getElementById('clickUpgrade2-overlay')
}

const clickUpgrade3 = {
    cost: 1000,
    value: 3,
    lock: 0,

    elemCost: document.getElementById('clickUpgrade3-cost'),
    elemValue: document.getElementById('clickUpgrade3-value'),
    elemCostMobile: document.getElementById('clickUpgrade3-cost-mobile'),
    elemValueMobile: document.getElementById('clickUpgrade3-value-mobile'),
    elemOverlay: document.getElementById('clickUpgrade3-overlay')
}

const clickUpgrade4 = {
    cost: 3000,
    value: 5,
    lock: 0,

    elemCost: document.getElementById('clickUpgrade4-cost'),
    elemValue: document.getElementById('clickUpgrade4-value'),
    elemCostMobile: document.getElementById('clickUpgrade4-cost-mobile'),
    elemValueMobile: document.getElementById('clickUpgrade4-value-mobile'),
    elemOverlay: document.getElementById('clickUpgrade4-overlay')
}

const clickUpgrade5 = {
    cost: 5000,
    value: 7,
    lock: 0,

    elemCost: document.getElementById('clickUpgrade5-cost'),
    elemValue: document.getElementById('clickUpgrade5-value'),
    elemCostMobile: document.getElementById('clickUpgrade5-cost-mobile'),
    elemValueMobile: document.getElementById('clickUpgrade5-value-mobile'),
    elemOverlay: document.getElementById('clickUpgrade5-overlay')
}

const clickUpgrade6 = {
    cost: 10000,
    value: 10,
    lock: 0,

    elemCost: document.getElementById('clickUpgrade6-cost'),
    elemValue: document.getElementById('clickUpgrade6-value'),
    elemCostMobile: document.getElementById('clickUpgrade6-cost-mobile'),
    elemValueMobile: document.getElementById('clickUpgrade6-value-mobile'),
    elemOverlay: document.getElementById('clickUpgrade6-overlay')
}

const clickUpgrade7 = {
    cost: 50000,
    value: 15,
    lock: 0,

    elemCost: document.getElementById('clickUpgrade7-cost'),
    elemValue: document.getElementById('clickUpgrade7-value'),
    elemCostMobile: document.getElementById('clickUpgrade7-cost-mobile'),
    elemValueMobile: document.getElementById('clickUpgrade7-value-mobile'),
    elemOverlay: document.getElementById('clickUpgrade7-overlay')
}

/*================================================

    Passive Upgrade Objects
    Click Upgrade Objects 
    Basic DOM Manipulation

=================================================*/

// Passive Upgrades
// Displays the value of the 'cost' property into the 'elemCost' property.
passiveUpgrade1.elemCost.innerHTML = parseInt(passiveUpgrade1.cost).toLocaleString() + " onions";
passiveUpgrade2.elemCost.innerHTML = parseInt(passiveUpgrade2.cost).toLocaleString() + " onions";
passiveUpgrade3.elemCost.innerHTML = parseInt(passiveUpgrade3.cost).toLocaleString() + " onions";
passiveUpgrade4.elemCost.innerHTML = parseInt(passiveUpgrade4.cost).toLocaleString() + " onions";
passiveUpgrade5.elemCost.innerHTML = parseInt(passiveUpgrade5.cost).toLocaleString() + " onions";

// Displays the value of the 'rate' property into the 'elemRate' property.
passiveUpgrade1.elemRate.innerHTML = passiveUpgrade1.value;
passiveUpgrade2.elemRate.innerHTML = passiveUpgrade2.value;
passiveUpgrade3.elemRate.innerHTML = passiveUpgrade3.value;
passiveUpgrade4.elemRate.innerHTML = passiveUpgrade4.value;
passiveUpgrade5.elemRate.innerHTML = passiveUpgrade5.value;

passiveUpgrade1.elemRateMobile.innerHTML = passiveUpgrade1.value;
passiveUpgrade2.elemRateMobile.innerHTML = passiveUpgrade2.value;
passiveUpgrade3.elemRateMobile.innerHTML = passiveUpgrade3.value;
passiveUpgrade4.elemRateMobile.innerHTML = passiveUpgrade4.value;
passiveUpgrade5.elemRateMobile.innerHTML = passiveUpgrade5.value;

// Click Upgrades
// Displays the value of the 'cost' property into the 'elemCost' property.
clickUpgrade1.elemCost.innerHTML = parseInt(clickUpgrade1.cost).toLocaleString() + " onions";
clickUpgrade2.elemCost.innerHTML = parseInt(clickUpgrade2.cost).toLocaleString() + " onions";
clickUpgrade3.elemCost.innerHTML = parseInt(clickUpgrade3.cost).toLocaleString() + " onions";
clickUpgrade4.elemCost.innerHTML = parseInt(clickUpgrade4.cost).toLocaleString() + " onions";
clickUpgrade5.elemCost.innerHTML = parseInt(clickUpgrade5.cost).toLocaleString() + " onions";
clickUpgrade6.elemCost.innerHTML = parseInt(clickUpgrade6.cost).toLocaleString() + " onions";
clickUpgrade7.elemCost.innerHTML = parseInt(clickUpgrade7.cost).toLocaleString() + " onions";

clickUpgrade1.elemCostMobile.innerHTML = parseInt(clickUpgrade1.cost).toLocaleString() + " onions";
clickUpgrade2.elemCostMobile.innerHTML = parseInt(clickUpgrade2.cost).toLocaleString() + " onions";
clickUpgrade3.elemCostMobile.innerHTML = parseInt(clickUpgrade3.cost).toLocaleString() + " onions";
clickUpgrade4.elemCostMobile.innerHTML = parseInt(clickUpgrade4.cost).toLocaleString() + " onions";
clickUpgrade5.elemCostMobile.innerHTML = parseInt(clickUpgrade5.cost).toLocaleString() + " onions";
clickUpgrade6.elemCostMobile.innerHTML = parseInt(clickUpgrade6.cost).toLocaleString() + " onions";
clickUpgrade7.elemCostMobile.innerHTML = parseInt(clickUpgrade7.cost).toLocaleString() + " onions";

// Displays the value of the 'value' property into the 'elemValue' property.
clickUpgrade1.elemValue.innerText = clickUpgrade1.value;
clickUpgrade2.elemValue.innerText = clickUpgrade2.value;
clickUpgrade3.elemValue.innerText = clickUpgrade3.value;
clickUpgrade4.elemValue.innerText = clickUpgrade4.value;
clickUpgrade5.elemValue.innerText = clickUpgrade5.value;
clickUpgrade6.elemValue.innerText = clickUpgrade6.value;
clickUpgrade7.elemValue.innerText = clickUpgrade7.value;

clickUpgrade1.elemValueMobile.innerText = clickUpgrade1.value + ".00";
clickUpgrade2.elemValueMobile.innerText = clickUpgrade2.value + ".00";
clickUpgrade3.elemValueMobile.innerText = clickUpgrade3.value + ".00";
clickUpgrade4.elemValueMobile.innerText = clickUpgrade4.value + ".00";
clickUpgrade5.elemValueMobile.innerText = clickUpgrade5.value + ".00";
clickUpgrade6.elemValueMobile.innerText = clickUpgrade6.value + ".00";
clickUpgrade7.elemValueMobile.innerText = clickUpgrade7.value + ".00";


/*================================================

    Sound / Audio 

=================================================*/

// Onion onclick Sound
function playOnionSound() {
    let sound = document.getElementById("onion-audio");
    sound.volume = 0.05;
    if (sound.paused) {
        sound.play();
    } else {
        sound.currentTime = 0
    }
}

// Upgrades onclick Sound
function playUpgradeSound() {
    let sound = document.getElementById("upgrade-audio");
    sound.volume = 0.09;
    if (sound.paused) {
        sound.play();
    } else {
        sound.currentTime = 0
    }
}

// Coins Sound
function playCoinsAudio() {
    let sound = document.getElementById("coins-audio");
    sound.volume = 0.03;
    if (sound.paused) {
        sound.play();
    } else {
        sound.currentTime = 0
    }
}
// Small Coins Audio
function playSmallCoinsAudio() {
    let sound = document.getElementById("small-coins-audio");
    sound.volume = 0.05;
    if (sound.paused) {
        sound.play();
    } else {
        sound.currentTime = 0
    }
}

// Achievement Audio
function playAchievementAudio() {
    let sound = document.getElementById("achievement-audio");
    sound.volume = 0.08;
    if (sound.paused) {
        sound.play();
    } else {
        sound.currentTime = 0
    }
}

/*================================================
    
    Mouse Coordinates
    Floating Text Animation

=================================================*/

function animation(event) {

    let elemfloatingText = document.getElementById("floating-text");

    let elem = elemfloatingText.cloneNode(true);
    document.getElementById("onion").appendChild(elem);
    elemfloatingText.innerHTML = "+" + gameData.amountPerClick;

    elem.style.display = 'block';

    let x = event.clientX - 40;
    let y = event.clientY - 20;

    let id = setInterval(frame, 3);

    function frame() {
        if (y == 200) {
            clearInterval(id);
            elem.style.display = 'none';
        } else {
            y--;
            elem.style.top = y + 'px';
            elem.style.left = x + 'px';
        }
    }
}

function subtractionReset() {
    document.getElementById('subtract-text').style.animation = "fadingDown 1s";
    let elemSubtract = document.getElementById('subtract-text');
    let elemSubtractClone = elemSubtract.cloneNode(true);
    elemSubtract.parentNode.replaceChild(elemSubtractClone, elemSubtract);
}

/*================================================
    
    Passive Upgrade 
    Buying Functions

=================================================*/

function buyPassiveUpgrade1() {
    if (gameData.score >= passiveUpgrade1.cost) { // Determines whether or not the user can purchase crop.

        // Adjusts values when the upgrade is purchased.
        gameData.score = Math.round(gameData.score) - passiveUpgrade1.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + passiveUpgrade1.cost; // Tracks how much the user has spent. 
        passiveUpgrade1.totalPurchased = passiveUpgrade1.totalPurchased + 1; // Counter which keeps track of how many crops of this type that the user has.
        passiveUpgrade1.cost = Math.round(passiveUpgrade1.cost * 1.15); // Increases the price of the crop. 

        gameData.elemCounterTotal.innerHTML = gameData.score; // Displays the new score after purchase.
        passiveUpgrade1.elemCost.innerHTML = parseInt(passiveUpgrade1.cost).toLocaleString() + " onions"; // Displays the updated cost.
        passiveUpgrade1.elemTotalPurchased.innerHTML = passiveUpgrade1.totalPurchased; // Displays the updated total number of this crop that the user has purchased.
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 

        updateRateValuePassiveUpgrade1(); // Function which will increase the passive per second score by a given rate.

        // Adjusts all percentage values when the upgrade is purchased.
        updatePercentagePassiveUpgrade1();
        updatePercentagePassiveUpgrade2();
        updatePercentagePassiveUpgrade3();
        updatePercentagePassiveUpgrade4();
        updatePercentagePassiveUpgrade5();

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(passiveUpgrade1.cost / 1.15)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyPassiveUpgrade2() {
    if (gameData.score >= passiveUpgrade2.cost) { // Determines whether or not the user can purchase crop.

        // Adjusts values when the upgrade is purchased.
        gameData.score = Math.round(gameData.score) - passiveUpgrade2.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + passiveUpgrade2.cost; // Tracks how much the user has spent. 
        passiveUpgrade2.totalPurchased = passiveUpgrade2.totalPurchased + 1; // Counter which keeps track of how many crops of this type that the user has.
        passiveUpgrade2.cost = Math.round(passiveUpgrade2.cost * 1.15); // Increases the price of the crop. 

        gameData.elemCounterTotal.innerHTML = gameData.score; // Displays the new score after purchase.
        passiveUpgrade2.elemCost.innerHTML = parseInt(passiveUpgrade2.cost).toLocaleString() + " onions"; // Displays the updated cost.
        passiveUpgrade2.elemTotalPurchased.innerHTML = passiveUpgrade2.totalPurchased; // Displays the updated total number of this crop that the user has purchased.
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 

        updateRateValuePassiveUpgrade2(); // Function which will increase the passive per second score by a given rate.

        // Adjusts all percentage values when the upgrade is purchased.
        updatePercentagePassiveUpgrade1();
        updatePercentagePassiveUpgrade2();
        updatePercentagePassiveUpgrade3();
        updatePercentagePassiveUpgrade4();
        updatePercentagePassiveUpgrade5();

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(passiveUpgrade2.cost / 1.15)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyPassiveUpgrade3() {
    if (gameData.score >= passiveUpgrade3.cost) { // Determines whether or not the user can purchase crop.

        // Adjusts values when the upgrade is purchased.
        gameData.score = Math.round(gameData.score) - passiveUpgrade3.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + passiveUpgrade3.cost; // Tracks how much the user has spent. 
        passiveUpgrade3.totalPurchased = passiveUpgrade3.totalPurchased + 1; // Counter which keeps track of how many crops of this type that the user has.
        passiveUpgrade3.cost = Math.round(passiveUpgrade3.cost * 1.15); // Increases the price of the crop. 

        gameData.elemCounterTotal.innerHTML = gameData.score; // Displays the new score after purchase.
        passiveUpgrade3.elemCost.innerHTML = parseInt(passiveUpgrade3.cost).toLocaleString() + " onions"; // Displays the updated cost.
        passiveUpgrade3.elemTotalPurchased.innerHTML = passiveUpgrade3.totalPurchased; // Displays the updated total number of this crop that the user has purchased. 
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 

        updateRateValuePassiveUpgrade3(); // Function which will increase the passive per second score by a given rate.

        // Adjusts all percentage values when the upgrade is purchased.
        updatePercentagePassiveUpgrade1();
        updatePercentagePassiveUpgrade2();
        updatePercentagePassiveUpgrade3();
        updatePercentagePassiveUpgrade4();
        updatePercentagePassiveUpgrade5();

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(passiveUpgrade3.cost / 1.15)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyPassiveUpgrade4() {
    if (gameData.score >= passiveUpgrade4.cost) { // Determines whether or not the user can purchase crop.

        // Adjusts values when the upgrade is purchased.
        gameData.score = Math.round(gameData.score) - passiveUpgrade4.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + passiveUpgrade4.cost; // Tracks how much the user has spent. 
        passiveUpgrade4.totalPurchased = passiveUpgrade4.totalPurchased + 1; // Counter which keeps track of how many crops of this type that the user has.
        passiveUpgrade4.cost = Math.round(passiveUpgrade4.cost * 1.15); // Increases the price of the crop. 

        gameData.elemCounterTotal.innerHTML = gameData.score; // Displays the new score after purchase.
        passiveUpgrade4.elemCost.innerHTML = parseInt(passiveUpgrade4.cost).toLocaleString() + " onions"; // Displays the updated cost.
        passiveUpgrade4.elemTotalPurchased.innerHTML = passiveUpgrade4.totalPurchased; // Displays the updated total number of this crop that the user has purchased. 
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 

        updateRateValuePassiveUpgrade4(); // Function which will increase the passive per second score by a given rate.

        // Adjusts all percentage values when the upgrade is purchased.
        updatePercentagePassiveUpgrade1();
        updatePercentagePassiveUpgrade2();
        updatePercentagePassiveUpgrade3();
        updatePercentagePassiveUpgrade4();
        updatePercentagePassiveUpgrade5();

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(passiveUpgrade4.cost / 1.15)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyPassiveUpgrade5() {
    if (gameData.score >= passiveUpgrade5.cost) { // Determines whether or not the user can purchase crop.

        // Adjusts values when the upgrade is purchased.
        gameData.score = Math.round(gameData.score) - passiveUpgrade5.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + passiveUpgrade5.cost; // Tracks how much the user has spent. 
        passiveUpgrade5.totalPurchased = passiveUpgrade5.totalPurchased + 1; // Counter which keeps track of how many crops of this type that the user has.
        passiveUpgrade5.cost = Math.round(passiveUpgrade5.cost * 1.15); // Increases the price of the crop. 

        gameData.elemCounterTotal.innerHTML = gameData.score; // Displays the new score after purchase.
        passiveUpgrade5.elemCost.innerHTML = parseInt(passiveUpgrade5.cost).toLocaleString() + " onions"; // Displays the updated cost.
        passiveUpgrade5.elemTotalPurchased.innerHTML = passiveUpgrade5.totalPurchased; // Displays the updated total number of this crop that the user has purchased. 
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 

        updateRateValuePassiveUpgrade5(); // Function which will increase the passive per second score by a given rate.

        // Adjusts all percentage values when the upgrade is purchased.
        updatePercentagePassiveUpgrade1();
        updatePercentagePassiveUpgrade2();
        updatePercentagePassiveUpgrade3();
        updatePercentagePassiveUpgrade4();
        updatePercentagePassiveUpgrade5();

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(passiveUpgrade5.cost / 1.15)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

/*================================================

    Click Upgrade
    Buying Functions

================================================*/
function buyClickUpgrade1() {
    if (gameData.score >= clickUpgrade1.cost && clickUpgrade1.lock === 0) { // Determines whether or not the user can purchase upgrade.

        // Adjusts values when the upgrade is purchased.
        gameData.score = gameData.score - clickUpgrade1.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + clickUpgrade1.cost; // Tracks how much the user has spent. 
        gameData.amountPerClick = (gameData.amountPerClick += clickUpgrade1.value); // Increases onions per click.
        gameData.checkUpgrades = gameData.checkUpgrades + 1; // Adds to the checkUpgrades variable, which is used to track how many upgrades have been purchased.
        clickUpgrade1.lock = clickUpgrade1.lock + 1; // Prevents the user from purchasing this upgrade more than once. 

        // Visual feedback when the upgrade is purchased.
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 
        document.getElementById('clickUpgrade1').style.backgroundColor = '#ffed89'; // Changes the button's background color.
        document.querySelector('#clickUpgrade1 ul li:nth-child(1) span').innerText = "ing"; // Swaps 'increases' text to 'increasing'.
        clickUpgrade1.elemCost.style.display = "none"; // Hides the cost of the upgrade.
        document.getElementById('clickUpgrade1-cost-active').style.display = "block"; // Adds 'active' text.
        document.getElementById('clickUpgrade1-overlay').style.opacity = '0.0'; // Removes the overlay from the upgrade.
        document.getElementById('clickUpgrade1-cost-active-mobile').style.display = "block"; // Adds 'active' text for mobile.
        clickUpgrade1.elemCostMobile.style.display = "none"; // Hides the cost of the upgrade for mobile.

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(clickUpgrade1.cost)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyClickUpgrade2() {
    if (gameData.score >= clickUpgrade2.cost && clickUpgrade2.lock === 0) { // Determines whether or not the user can purchase upgrade.

        // Adjusts values when the upgrade is purchased.
        gameData.score = gameData.score - clickUpgrade2.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + clickUpgrade2.cost; // Tracks how much the user has spent. 
        gameData.amountPerClick = (gameData.amountPerClick += clickUpgrade2.value); // Increases onions per click.
        gameData.checkUpgrades = gameData.checkUpgrades + 1; // Adds to the checkUpgrades variable, which is used to track how many upgrades have been purchased.
        clickUpgrade2.lock = clickUpgrade2.lock + 1; // Prevents the user from purchasing this upgrade more than once. 

        // Visual feedback when the upgrade is purchased.   
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 
        document.getElementById('clickUpgrade2').style.backgroundColor = '#ffed89'; // Changes the button's background color. 
        document.querySelector('#clickUpgrade2 ul li:nth-child(1) span').innerText = "ing"; // Swaps 'increases' text to 'increasing'.
        clickUpgrade2.elemCost.style.display = "none"; // Hides the cost of the upgrade.
        document.getElementById('clickUpgrade2-cost-active').style.display = "block"; // Adds 'active' text.
        document.getElementById('clickUpgrade2-overlay').style.opacity = '0.0'; // Removes the overlay from the upgrade.
        document.getElementById('clickUpgrade2-cost-active-mobile').style.display = "block"; // Adds 'active' text for mobile.
        clickUpgrade2.elemCostMobile.style.display = "none"; // Hides the cost of the upgrade for mobile.

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(clickUpgrade2.cost)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyClickUpgrade3() {
    if (gameData.score >= clickUpgrade3.cost && clickUpgrade3.lock === 0) { // Determines whether or not the user can purchase upgrade.

        // Adjusts values when the upgrade is purchased.
        gameData.score = gameData.score - clickUpgrade3.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + clickUpgrade3.cost; // Tracks how much the user has spent. 
        gameData.amountPerClick = (gameData.amountPerClick += clickUpgrade3.value); // Increases onions per click.
        gameData.checkUpgrades = gameData.checkUpgrades + 1; // Adds to the checkUpgrades variable, which is used to track how many upgrades have been purchased.
        clickUpgrade3.lock = clickUpgrade3.lock + 1; // Prevents the user from purchasing this upgrade more than once. 

        // Visual feedback when the upgrade is purchased.
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 
        document.getElementById('clickUpgrade3').style.backgroundColor = '#ffed89'; // Changes the button's background color.
        document.querySelector('#clickUpgrade3 ul li:nth-child(1) span').innerText = "ing"; // Swaps 'increases' text to 'increasing'.
        clickUpgrade3.elemCost.style.display = "none"; // Hides the cost of the upgrade.
        document.getElementById('clickUpgrade3-cost-active').style.display = "block"; // Adds 'active' text.
        document.getElementById('clickUpgrade3-overlay').style.opacity = '0.0'; // Removes the overlay from the upgrade.
        document.getElementById('clickUpgrade3-cost-active-mobile').style.display = "block"; // Adds 'active' text for mobile.
        clickUpgrade3.elemCostMobile.style.display = "none"; // Hides the cost of the upgrade for mobile.

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(clickUpgrade3.cost)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyClickUpgrade4() {
    if (gameData.score >= clickUpgrade4.cost && clickUpgrade4.lock === 0) { // Determines whether or not the user can purchase upgrade.

        // Adjusts values when the upgrade is purchased.
        gameData.score = gameData.score - clickUpgrade4.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + clickUpgrade4.cost; // Tracks how much the user has spent. 
        gameData.amountPerClick = (gameData.amountPerClick += clickUpgrade4.value); // Increases onions per click.
        gameData.checkUpgrades = gameData.checkUpgrades + 1; // Adds to the checkUpgrades variable, which is used to track how many upgrades have been purchased.
        clickUpgrade4.lock = clickUpgrade4.lock + 1; // Prevents the user from purchasing this upgrade more than once. 

        // Visual feedback when the upgrade is purchased.
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 
        document.getElementById('clickUpgrade4').style.backgroundColor = '#ffed89'; // Changes the button's background color.
        document.querySelector('#clickUpgrade4 ul li:nth-child(1) span').innerText = "ing"; // Swaps 'increases' text to 'increasing'.
        clickUpgrade4.elemCost.style.display = "none"; // Hides the cost of the upgrade.
        document.getElementById('clickUpgrade4-cost-active').style.display = "block"; // Adds 'active' text.
        document.getElementById('clickUpgrade4-overlay').style.opacity = '0.0'; // Removes the overlay from the upgrade.
        document.getElementById('clickUpgrade4-cost-active-mobile').style.display = "block"; // Adds 'active' text for mobile.
        clickUpgrade4.elemCostMobile.style.display = "none"; // Hides the cost of the upgrade for mobile.

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(clickUpgrade4.cost)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound. 
        playCoinsAudio(); // Plays a sound.
    }
}

function buyClickUpgrade5() {
    if (gameData.score >= clickUpgrade5.cost && clickUpgrade5.lock === 0) { // Determines whether or not the user can purchase upgrade.

        // Adjusts values when the upgrade is purchased.
        gameData.score = gameData.score - clickUpgrade5.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + clickUpgrade5.cost; // Tracks how much the user has spent. 
        gameData.amountPerClick = (gameData.amountPerClick += clickUpgrade5.value); // Increases onions per click.
        gameData.checkUpgrades = gameData.checkUpgrades + 1; // Adds to the checkUpgrades variable, which is used to track how many upgrades have been purchased.
        clickUpgrade5.lock = clickUpgrade5.lock + 1; // Prevents the user from purchasing this upgrade more than once. 

        // Visual feedback when the upgrade is purchased.
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 
        document.getElementById('clickUpgrade5').style.backgroundColor = '#ffed89'; // Changes the button's background color.
        document.querySelector('#clickUpgrade5 ul li:nth-child(1) span').innerText = "ing"; // Swaps 'increases' text to 'increasing'.
        clickUpgrade5.elemCost.style.display = "none"; // Hides the cost of the upgrade.
        document.getElementById('clickUpgrade5-cost-active').style.display = "block"; // Adds 'active' text.
        document.getElementById('clickUpgrade5-overlay').style.opacity = '0.0'; // Removes the overlay from the upgrade.
        document.getElementById('clickUpgrade5-cost-active-mobile').style.display = "block"; // Adds 'active' text for mobile.
        clickUpgrade5.elemCostMobile.style.display = "none"; // Hides the cost of the upgrade for mobile.

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(clickUpgrade5.cost)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyClickUpgrade6() {
    if (gameData.score >= clickUpgrade6.cost && clickUpgrade6.lock === 0) { // Determines whether or not the user can purchase upgrade.

        // Adjusts values when the upgrade is purchased.
        gameData.score = gameData.score - clickUpgrade6.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + clickUpgrade6.cost; // Tracks how much the user has spent. 
        gameData.amountPerClick = (gameData.amountPerClick += clickUpgrade6.value); // Increases onions per click.
        gameData.checkUpgrades = gameData.checkUpgrades + 1; // Adds to the checkUpgrades variable, which is used to track how many upgrades have been purchased.
        clickUpgrade6.lock = clickUpgrade6.lock + 1; // Prevents the user from purchasing this upgrade more than once. 

        // Visual feedback when the upgrade is purchased.
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 
        document.getElementById('clickUpgrade6').style.backgroundColor = '#ffed89'; // Changes the button's background color.
        document.querySelector('#clickUpgrade6 ul li:nth-child(1) span').innerText = "ing"; // Swaps 'increases' text to 'increasing'.
        clickUpgrade6.elemCost.style.display = "none"; // Hides the cost of the upgrade.
        document.getElementById('clickUpgrade6-cost-active').style.display = "block"; // Adds 'active' text.
        document.getElementById('clickUpgrade6-overlay').style.opacity = '0.0'; // Removes the overlay from the upgrade.
        document.getElementById('clickUpgrade6-cost-active-mobile').style.display = "block"; // Adds 'active' text for mobile.
        clickUpgrade6.elemCostMobile.style.display = "none"; // Hides the cost of the upgrade for mobile.

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(clickUpgrade6.cost)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

function buyClickUpgrade7() {
    if (gameData.score >= clickUpgrade7.cost && clickUpgrade7.lock === 0) { // Determines whether or not the user can purchase upgrade.

        // Adjusts values when the upgrade is purchased.
        gameData.score = gameData.score - clickUpgrade7.cost; // Subtracts the cost from the user's score.
        gameData.scoreSpent = gameData.scoreSpent + clickUpgrade7.cost; // Tracks how much the user has spent. 
        gameData.amountPerClick = (gameData.amountPerClick += clickUpgrade7.value); // Increases onions per click.
        gameData.checkUpgrades = gameData.checkUpgrades + 1; // Adds to the checkUpgrades variable, which is used to track how many upgrades have been purchased.
        clickUpgrade7.lock = clickUpgrade7.lock + 1; // Prevents the user from purchasing this upgrade more than once. 

        // Visual feedback when the upgrade is purchased.
        achievement9.elemTaglineStats.innerText = parseInt(gameData.scoreSpent).toLocaleString() + " "; // Updates score spent achievement. 
        document.getElementById('clickUpgrade7').style.backgroundColor = '#ffed89'; // Changes the button's background color.
        document.querySelector('#clickUpgrade7 ul li:nth-child(1) span').innerText = "ing"; // Swaps 'increases' text to 'increasing'.
        clickUpgrade7.elemCost.style.display = "none"; // Hides the cost of the upgrade.
        document.getElementById('clickUpgrade7-cost-active').style.display = "block"; // Adds 'active' text.
        document.getElementById('clickUpgrade7-overlay').style.opacity = '0.0'; // Removes the overlay from the upgrade.
        document.getElementById('clickUpgrade7-cost-active-mobile').style.display = "block"; // Adds 'active' text for mobile.
        clickUpgrade7.elemCostMobile.style.display = "none"; // Hides the cost of the upgrade for mobile.

        document.getElementById('subtract-text').innerText = "-" + parseInt(Math.round(clickUpgrade7.cost)).toLocaleString(); // Displays a subtraction animation for the cost of the upgrade.
        subtractionReset(); // Resets the subtraction animation.

        // Audio feedback when the upgrade is purchased.
        playUpgradeSound(); // Plays a sound.
        playCoinsAudio(); // Plays a sound.
    }
}

/*================================================

    Score & Value 
    Updates

=================================================*/

// Function which adds to the total score when onion image is clicked.
function addToScore() {
    gameData.score = gameData.score + gameData.amountPerClick; // Adds to the total score when onion image is clicked.
    gameData.elemCounterTotal.innerHTML = gameData.score.toFixed(); // Displays the updated score without decimal points.
}

// Rate Values - Updates the score per second when crop is purchased.
function updateRateValuePassiveUpgrade1() {
    passiveUpgrade1.value = (passiveUpgrade1.value += 0.1); // Increases onion production by 0.1 / second
    gameData.scorePerSecond = (1 + passiveUpgrade1.value + passiveUpgrade2.value + passiveUpgrade3.value + passiveUpgrade4.value + passiveUpgrade5.value); // Updates per second rate by adding all the current total values together.
    gameData.elemRateValue.innerHTML = gameData.scorePerSecond.toFixed(2); // Updates Onions Per Second Counter
}

function updateRateValuePassiveUpgrade2() {
    passiveUpgrade2.value = (passiveUpgrade2.value += 0.5); // Increases onion production by 0.5 / second
    gameData.scorePerSecond = (1 + passiveUpgrade1.value + passiveUpgrade2.value + passiveUpgrade3.value + passiveUpgrade4.value + passiveUpgrade5.value); // Updates per second rate by adding all the current total values together.
    gameData.elemRateValue.innerHTML = gameData.scorePerSecond.toFixed(2); // Updates Onions Per Second Counter
}

function updateRateValuePassiveUpgrade3() {
    passiveUpgrade3.value = (passiveUpgrade3.value += 1); // Increases onion production by 3 / second
    gameData.scorePerSecond = (1 + passiveUpgrade1.value + passiveUpgrade2.value + passiveUpgrade3.value + passiveUpgrade4.value + passiveUpgrade5.value); // Updates per second rate by adding all the current total values together.
    gameData.elemRateValue.innerHTML = gameData.scorePerSecond.toFixed(2); // Updates Onions Per Second Counter
}

function updateRateValuePassiveUpgrade4() {
    passiveUpgrade4.value = (passiveUpgrade4.value += 3); // Increases onion production by 0.5 / second
    gameData.scorePerSecond = (1 + passiveUpgrade1.value + passiveUpgrade2.value + passiveUpgrade3.value + passiveUpgrade4.value + passiveUpgrade5.value); // Updates per second rate by adding all the current total values together.
    gameData.elemRateValue.innerHTML = gameData.scorePerSecond.toFixed(2); // Updates Onions Per Second Counter
}

function updateRateValuePassiveUpgrade5() {
    passiveUpgrade5.value = (passiveUpgrade5.value += 5); // Increases onion production by 0.5 / second
    gameData.scorePerSecond = (1 + passiveUpgrade1.value + passiveUpgrade2.value + passiveUpgrade3.value + passiveUpgrade4.value + passiveUpgrade5.value); // Updates per second rate by adding all the current total values together.
    gameData.elemRateValue.innerHTML = gameData.scorePerSecond.toFixed(2); // Updates Onions Per Second Counter
}

// Percentage Updates
function updatePercentagePassiveUpgrade1() {
    let updatedPercentage = ((passiveUpgrade1.value / gameData.scorePerSecond) * 100).toFixed(2) + "%"; // Calculates the percentage, cuts off excessive decimal values, displays % symbol.
    passiveUpgrade1.elemPercentage.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade1.elemRate.innerHTML = passiveUpgrade1.value.toFixed(2); // Displays the numerical value (number of crop purchased multipled by rate).

    passiveUpgrade1.elemPercentageMobile.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade1.elemRateMobile.innerHTML = passiveUpgrade1.value.toFixed(2); // Displays the numerical value (number of crop purchased multipled by rate).
}

function updatePercentagePassiveUpgrade2() {
    let updatedPercentage = ((passiveUpgrade2.value / gameData.scorePerSecond) * 100).toFixed(2) + "%"; // Calculates the percentage, cuts off excessive decimal values, displays % symbol.
    passiveUpgrade2.elemPercentage.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade2.elemRate.innerHTML = passiveUpgrade2.value.toFixed(2); // Displays the numerical value (number of crop purchased multipled by rate).

    passiveUpgrade2.elemPercentageMobile.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade2.elemRateMobile.innerHTML = passiveUpgrade2.value.toFixed(2); // Displays the numerical value (number of crop purchased multipled by rate).
}

function updatePercentagePassiveUpgrade3() {
    let updatedPercentage = ((passiveUpgrade3.value / gameData.scorePerSecond) * 100).toFixed(2) + "%"; // Calculates the percentage, cuts off excessive decimal values, displays % symbol.
    passiveUpgrade3.elemPercentage.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade3.elemRate.innerHTML = passiveUpgrade3.value.toFixed(2); // Displays the numerical value (number of crop purchased multipled by rate).

    passiveUpgrade3.elemPercentageMobile.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade3.elemRateMobile.innerHTML = passiveUpgrade3.value.toFixed(2); // Displays the numerical value (number of crop purchased multipled by rate).
}

function updatePercentagePassiveUpgrade4() {
    let updatedPercentage = ((passiveUpgrade4.value / gameData.scorePerSecond) * 100).toFixed(2) + "%"; // Calculates the percentage, cuts off excessive decimal values, displays % symbol.
    passiveUpgrade4.elemPercentage.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade4.elemRate.innerHTML = passiveUpgrade4.value.toFixed(2); // Displays the numerical value (number of crop purchased multipled by rate).

    passiveUpgrade4.elemPercentageMobile.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade4.elemRateMobile.innerHTML = passiveUpgrade4.value.toFixed(2); // Displays the numerical value (number of crop purchased 
}

function updatePercentagePassiveUpgrade5() {
    let updatedPercentage = ((passiveUpgrade5.value / gameData.scorePerSecond) * 100).toFixed(2) + "%"; // Calculates the percentage, cuts off excessive decimal values, displays % symbol.
    passiveUpgrade5.elemPercentage.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade5.elemRate.innerHTML = passiveUpgrade5.value.toFixed(2); // Displays the numerical value (number of crop purchased multipled by rate).

    passiveUpgrade5.elemPercentageMobile.innerHTML = updatedPercentage; // Displays the newly calculated percentage.
    passiveUpgrade5.elemRateMobile.innerHTML = passiveUpgrade4.value.toFixed(2); // Displays the numerical value (number of crop purchased 
}

// Continuously updates the player's score.
setInterval(function() {
    gameData.score = gameData.score + (gameData.scorePerSecond / 100);
    gameData.elemCounterTotal.innerHTML = Math.round(gameData.score) + "";

    // Checks to see if the user has a high enough score to purchase the passive upgrades.
    checkScoreForPassiveUpgrade1();
    checkScoreForPassiveUpgrade2();
    checkScoreForPassiveUpgrade3();
    checkScoreForPassiveUpgrade4();
    checkScoreForPassiveUpgrade5();

    // Checks to see if the user has a high enough score to purchase the click upgrades.
    checkScoreForClickUpgrade1();
    checkScoreForClickUpgrade2();
    checkScoreForClickUpgrade3();
    checkScoreForClickUpgrade4();
    checkScoreForClickUpgrade5();
    checkScoreForClickUpgrade6();
    checkScoreForClickUpgrade7();

}, 10); // 1000 ms = 1 second

/* Assigned separate variables to each achievement interval so that when the achievement is earned, the interval can be cleared. */
let achievement1Interval = setInterval(function() {
    checkAchievement1();
}, 10);

let achievement2Interval = setInterval(function() {
    checkAchievement2();
}, 10);

let achievement3Interval = setInterval(function() {
    checkAchievement3();
}, 10);

let achievement4Interval = setInterval(function() {
    checkAchievement4();
}, 10);

let achievement5Interval = setInterval(function() {
    checkAchievement5();
}, 10);

let achievement6Interval = setInterval(function() {
    checkAchievement6();
}, 10);

let achievement8Interval = setInterval(function() {
    checkAchievement8();
}, 10);

let achievement9Interval = setInterval(function() {
    checkAchievement9();
}, 10);

let achievement10Interval = setInterval(function() {
    checkAchievement10();
}, 10);

let achievement7Interval = setInterval(function() {
    checkAchievement7();
}, 10);


/*================================================
       
    Score Checkers

=================================================*/

function checkScoreForPassiveUpgrade1() {
    if (gameData.score < passiveUpgrade1.cost) {
        passiveUpgrade1.elemCost.style.color = '#FF4646';
        passiveUpgrade1.elemOverlay.style.display = 'block';
    } else if (gameData.score > passiveUpgrade1.cost) {
        passiveUpgrade1.elemCost.style.color = '#88FFB4';
        passiveUpgrade1.elemOverlay.style.display = 'none';
    }
}

function checkScoreForPassiveUpgrade2() {
    if (gameData.score < passiveUpgrade2.cost) {
        passiveUpgrade2.elemCost.style.color = '#FF4646';
        passiveUpgrade2.elemOverlay.style.display = 'block';
    } else if (gameData.score > passiveUpgrade2.cost) {
        passiveUpgrade2.elemCost.style.color = '#88FFB4';
        passiveUpgrade2.elemOverlay.style.display = 'none';
    }
}

function checkScoreForPassiveUpgrade3() {
    if (gameData.score < passiveUpgrade3.cost) {
        passiveUpgrade3.elemCost.style.color = '#FF4646';
        passiveUpgrade3.elemOverlay.style.display = 'block';
    } else if (gameData.score > passiveUpgrade3.cost) {
        passiveUpgrade3.elemCost.style.color = '#88FFB4';
        passiveUpgrade3.elemOverlay.style.display = 'none';
    }
}

function checkScoreForPassiveUpgrade4() {
    if (gameData.score < passiveUpgrade4.cost) {
        passiveUpgrade4.elemCost.style.color = '#FF4646';
        passiveUpgrade4.elemOverlay.style.display = 'block';
    } else if (gameData.score > passiveUpgrade4.cost) {
        passiveUpgrade4.elemCost.style.color = '#88FFB4';
        passiveUpgrade4.elemOverlay.style.display = 'none';
    }
}

function checkScoreForPassiveUpgrade5() {
    if (gameData.score < passiveUpgrade5.cost) {
        passiveUpgrade5.elemCost.style.color = '#FF4646';
        passiveUpgrade5.elemOverlay.style.display = 'block';
    } else if (gameData.score > passiveUpgrade5.cost) {
        passiveUpgrade5.elemCost.style.color = '#88FFB4';
        passiveUpgrade5.elemOverlay.style.display = 'none';
    }
}

// Score Checkers for Click Upgrades
function checkScoreForClickUpgrade1() {
    if (gameData.score < clickUpgrade1.cost) {
        clickUpgrade1.elemCost.style.color = '#FF4646';
        clickUpgrade1.elemOverlay.style.display = 'block';
    } else if (gameData.score >= clickUpgrade1.cost) {
        clickUpgrade1.elemCost.style.color = '#88FFB4';
        clickUpgrade1.elemOverlay.style.display = 'none';
    }
}

function checkScoreForClickUpgrade2() {
    if (gameData.score < clickUpgrade2.cost) {
        clickUpgrade2.elemCost.style.color = '#FF4646';
        clickUpgrade2.elemOverlay.style.display = 'block';
    } else if (gameData.score >= clickUpgrade2.cost) {
        clickUpgrade2.elemCost.style.color = '#88FFB4';
        clickUpgrade2.elemOverlay.style.display = 'none';
    }
}

function checkScoreForClickUpgrade3() {
    if (gameData.score < clickUpgrade3.cost) {
        clickUpgrade3.elemCost.style.color = '#FF4646';
        clickUpgrade3.elemOverlay.style.display = 'block';
    } else if (gameData.score >= clickUpgrade3.cost) {
        clickUpgrade3.elemCost.style.color = '#88FFB4';
        clickUpgrade3.elemOverlay.style.display = 'none';
    }
}

function checkScoreForClickUpgrade4() {
    if (gameData.score < clickUpgrade4.cost) {
        clickUpgrade4.elemCost.style.color = '#FF4646';
        clickUpgrade4.elemOverlay.style.display = 'block';
    } else if (gameData.score >= clickUpgrade4.cost) {
        clickUpgrade4.elemCost.style.color = '#88FFB4';
        clickUpgrade4.elemOverlay.style.display = 'none';
    }
}

function checkScoreForClickUpgrade5() {
    if (gameData.score < clickUpgrade5.cost) {
        clickUpgrade5.elemCost.style.color = '#FF4646';
        clickUpgrade5.elemOverlay.style.display = 'block';
    } else if (gameData.score >= clickUpgrade5.cost) {
        clickUpgrade5.elemCost.style.color = '#88FFB4';
        clickUpgrade5.elemOverlay.style.display = 'none';
    }
}

function checkScoreForClickUpgrade6() {
    if (gameData.score < clickUpgrade6.cost) {
        clickUpgrade6.elemCost.style.color = '#FF4646';
        clickUpgrade6.elemOverlay.style.display = 'block';
    } else if (gameData.score >= clickUpgrade6.cost) {
        clickUpgrade6.elemCost.style.color = '#88FFB4';
        clickUpgrade6.elemOverlay.style.display = 'none';
    }
}

function checkScoreForClickUpgrade7() {
    if (gameData.score < clickUpgrade7.cost) {
        clickUpgrade7.elemCost.style.color = '#FF4646';
        clickUpgrade7.elemOverlay.style.display = 'block';
    } else if (gameData.score >= clickUpgrade7.cost) {
        clickUpgrade7.elemCost.style.color = '#88FFB4';
        clickUpgrade7.elemOverlay.style.display = 'none';
    }
}


/*================================================
    
    Clicks Per Second

=================================================*/

function clickCounter() { // Records the number of times that the player has clicked on the image.
    gameData.clickCount = gameData.clickCount + 1;
    // Displays total clicks. 

    achievement6.elemTaglineStats.innerText = gameData.clickCount + " ";
}
/*================================================

    Achievement Objects

=================================================*/

const achievement1 = {
    title: 'One Small Step',
    tagline: 'Click on the onion.',

    elemTitle: document.getElementsByClassName('achievement-title')[0],
    elemTagline: document.getElementsByClassName('achievement-tagline')[0]
}
const achievement2 = {
    title: 'Onion Farmer',
    tagline: 'Obtain 100 onions.',

    elemTitle: document.getElementsByClassName('achievement-title')[1],
    elemTagline: document.getElementsByClassName('achievement-tagline')[1]
}

const achievement3 = {
    title: 'Now we\'re cooking! . . . er, harvesting.',
    tagline: 'Reach 20.00 onions per second.',

    elemTitle: document.getElementsByClassName('achievement-title')[2],
    elemTagline: document.getElementsByClassName('achievement-tagline')[2]
}

const achievement4 = {
    title: 'My Hands Are Full',
    tagline: 'Obtain 1,000 onions.',

    elemTitle: document.getElementsByClassName('achievement-title')[3],
    elemTagline: document.getElementsByClassName('achievement-tagline')[3]
}

/* Unused Achievement */
const achievement5 = {
    title: 'Well Rounded',
    tagline: 'Buy one of every crop.',

    elemTitle: document.getElementsByClassName('achievement-title')[4],
    elemTagline: document.getElementsByClassName('achievement-tagline')[4]
}

const achievement6 = {
    title: 'Paid By The Hour',
    tagline: 'Click on the onion 1,000 times.',

    elemTitle: document.getElementsByClassName('achievement-title')[5],
    elemTagline: document.getElementsByClassName('achievement-tagline')[5],
    elemTaglineStats: document.getElementById('clickCount')
}

const achievement7 = {
    title: 'We Have The Technology',
    tagline: 'Purchase every upgrade.',

    elemTitle: document.getElementsByClassName('achievement-title')[6],
    elemTagline: document.getElementsByClassName('achievement-tagline')[6]
}

const achievement8 = {
    title: 'Bad Breath',
    tagline: 'Purchase Garlic.',

    elemTitle: document.getElementsByClassName('achievement-title')[7],
    elemTagline: document.getElementsByClassName('achievement-tagline')[7]
}

const achievement9 = {
    title: 'Big Spender',
    tagline: 'Spend 500,000 onions.',

    elemTitle: document.getElementsByClassName('achievement-title')[8],
    elemTagline: document.getElementsByClassName('achievement-tagline')[8],
    elemTaglineStats: document.getElementById('scoreSpent')
}

const achievement10 = {
    title: 'Onion Hoarder',
    tagline: 'Obtain 100,000 onions.',

    elemTitle: document.getElementsByClassName('achievement-title')[9],
    elemTagline: document.getElementsByClassName('achievement-tagline')[9]
}

/*================================================

    Achievement Objects
    Basic DOM Manipulation

================================================*/

// Displays the value of the 'title' property into the 'elemTitle' property.
achievement1.elemTitle.innerText = achievement1.title;
achievement2.elemTitle.innerText = achievement2.title;
achievement3.elemTitle.innerText = achievement3.title;
achievement4.elemTitle.innerText = achievement4.title;
achievement5.elemTitle.innerText = achievement5.title;
achievement6.elemTitle.innerText = achievement6.title;
achievement7.elemTitle.innerText = achievement7.title;
achievement8.elemTitle.innerText = achievement8.title;
achievement9.elemTitle.innerText = achievement9.title;
achievement10.elemTitle.innerText = achievement10.title;

// Displays the value of the 'tagline' property into the 'elemTagline' property.
achievement1.elemTagline.innerText = achievement1.tagline;
achievement2.elemTagline.innerText = achievement2.tagline;
achievement3.elemTagline.innerText = achievement3.tagline;
achievement4.elemTagline.innerText = achievement4.tagline;
achievement5.elemTagline.innerText = achievement5.tagline;
achievement6.elemTagline.innerText = achievement6.tagline;
achievement7.elemTagline.innerText = achievement7.tagline;
achievement8.elemTagline.innerText = achievement8.tagline;
achievement9.elemTagline.innerText = achievement9.tagline;
achievement10.elemTagline.innerText = achievement10.tagline;

/*================================================
    
    Achievement Functions

=================================================*/

// Achievement 1 Check
function checkAchievement1() {
    if (gameData.clickCount == 1) { // Determines if the player has clicked on the image. 

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[0].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[0].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[0].classList.add('achievement-tagline-active'); // Changes the tagline color.

        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement1Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}

// Achievement 2 Check
function checkAchievement2() {
    if (gameData.score >= 100) { // Determines if the player has a score of 100 or higher. 

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[1].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[1].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[1].classList.add('achievement-tagline-active'); // Changes the tagline color.

        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement2Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}

// Achievement 3 Check
function checkAchievement3() {
    if (gameData.scorePerSecond >= 20) { // Determines if the player has a score per second of 20 or higher. 

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[2].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[2].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[2].classList.add('achievement-tagline-active'); // Changes the tagline color.

        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement3Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}

// Achievement 4 Check
function checkAchievement4() {
    if (gameData.score >= 1000) { // Determines if the player has a score of 1,000 or higher.

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[3].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[3].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[3].classList.add('achievement-tagline-active'); // Changes the tagline color.

        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement4Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}
// Achievement 5 Check
function checkAchievement5() {
    if (gameData.clickCount == 1) { // Determines if the player has clicked on the image 1,000 times. 

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[4].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[4].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[4].classList.add('achievement-tagline-active'); // Changes the tagline color.

        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement5Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}
// Achievement 6 Check
function checkAchievement6() {
    if (gameData.clickCount == 1000) { // Determines if the player has clicked on the image 1,000 times. 

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[5].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[5].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[5].classList.add('achievement-tagline-active'); // Changes the tagline color.
        document.getElementsByClassName('achievement-tagline-stats')[0].style.color = '#ffed89'; // Changes the tagline color.
        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement6Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}

function checkAchievement7() {
    if (gameData.checkUpgrades >= 7) { // Determines whether or not the player has purchased every upgrade.

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[6].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[6].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[6].classList.add('achievement-tagline-active'); // Changes the tagline color.

        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement7Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}

function checkAchievement8() {
    if (passiveUpgrade5.totalPurchased >= 1) { // Determines whether or not the player has purchased the passive upgrade. 

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[7].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[7].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[7].classList.add('achievement-tagline-active'); // Changes the tagline color.

        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement8Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}

function checkAchievement9() {
    if (gameData.scoreSpent >= 500000) { // Determines whether or not the player has spent the required score.

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[8].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[8].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[8].classList.add('achievement-tagline-active'); // Changes the tagline color.
        document.getElementsByClassName('achievement-tagline-stats')[1].style.color = '#ffed89'; // Changes the tagline color.
        // Audio feedback when the achievement is earned.
        playAchievementAudio(); // Plays a sound.
        clearInterval(achievement9Interval); // Stops the function from being called again (prevents audio from playing on repeat).
    }
}

function checkAchievement10() {
    if (gameData.score >= 100000) { // Determines if the player has a score of 100,000 or higher. 

        // Visual feedback when the achievement is earned.
        document.getElementsByClassName('achievement')[9].classList.add('achievement-active'); // Changes the border.
        document.getElementsByClassName('achievement-title')[9].classList.add('achievement-title-active'); // Changes the title color.
        document.getElementsByClassName('achievement-tagline')[9].classList.add('achievement-tagline-active'); // Changes the tagline color.

        // Audio feedback when the achievement is earned.
        playAchievementAudio();
        clearInterval(achievement10Interval);
    }
}

/*================================================
    
    Nav Buttons 
    Nav Function

=================================================*/

let arrowRight = document.getElementsByClassName('arrow-right');
let arrowLeft = document.getElementsByClassName('arrow-left');

function firstTab() {
    console.log('ok');
    document.getElementsByClassName('left')[0].style.zIndex = "1";
    document.getElementsByClassName('middle')[0].style.zIndex = "0";
    document.getElementsByClassName('right')[0].style.zIndex = "0";
}

function middleTab() {
    console.log('ok');
    document.getElementsByClassName('left')[0].style.zIndex = "0";
    document.getElementsByClassName('middle')[0].style.zIndex = "1";
    document.getElementsByClassName('right')[0].style.zIndex = "0";
}

function lastTab() {
    console.log('ok');
    document.getElementsByClassName('left')[0].style.zIndex = "0";
    document.getElementsByClassName('middle')[0].style.zIndex = "0";
    document.getElementsByClassName('right')[0].style.zIndex = "1";
}


/* TO DO: =======

-- Add tracker to record how many onions have been collected so far. 
-- Add tracker to record how many onions have been spent so far. 
-- Record through cookies

Upgrade Section
-- Manipulate DOM so that different upgrades become available at certain breakpoints. 

Crops Section
-- Manipulate DOM so that different crops become available at certain breakpoints. 

Achievements Section
-- Add achievements that float up and can be x'd out of.
-- Toggle Function for achievements
-- Change We Have The Technology Achievement conditions to check .length, not a number.

================ */