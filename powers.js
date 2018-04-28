/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

let selectorMap = [
    {
        buttonSelector: "#activate-flight",
        sectionSelector: "flight",
    },
    {
        buttonSelector: "#activate-mindreading",
        sectionSelector: "mindreading",
    },
    {
        buttonSelector: "#activate-xray",
        sectionSelector: "xray",
    }
];

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

selectorMap.forEach(function (selectorObj) {
    let activateButton = document.querySelector(selectorObj.buttonSelector);
    activateButton.addEventListener("click", function (event) {
        var powerlistSection = document.getElementById(selectorObj.sectionSelector);
        powerlistSection.classList.remove("disabled");
        powerlistSection.classList.add("enabled");
    })
});

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

let activateAllButton = document.querySelector("#activate-all");
activateAllButton.addEventListener("click", function (event) {
    selectorMap.forEach(function (selectorObj) {
        var allPowerList = document.getElementById(selectorObj.sectionSelector);
        allPowerList.classList.remove("disabled");
        allPowerList.classList.add("enabled");
    })
});

let deactivateAllButton = document.querySelector("#deactivate-all");
deactivateAllButton.addEventListener("click", function (event) {
    selectorMap.forEach(function (selectorObj) {
        var deactivateAll = document.getElementById(selectorObj.sectionSelector);
        deactivateAll.classList.remove("enabled");
        deactivateAll.classList.add("disabled");
    })
});