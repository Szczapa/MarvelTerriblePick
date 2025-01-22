var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
document.addEventListener("DOMContentLoaded", function () {
    var img_container = document.querySelector(".img_container");
    var button = document.querySelector("#generateButton");
    var characterList = [
        "adamwarlock", "blackpanther", "blackwidow", "captainamerica",
        "cloak&dagger", "doctorstrange", "groot", "hawkeye", "hela", "hulk",
        "invisiblegirl", "ironfist", "ironman", "jeff", "loki", "lunasnow",
        "magik", "magneto", "mantis", "misterfantastic", "moonknight",
        "namor", "peni-parker", "psylocke", "rocket-racoon", "scarlet-witch",
        "spider-man", "squirrelgirl", "star-lord", "storm", "thepunisher",
        "thor", "venom", "wintersoldier", "wolverine"
    ];
    var pickList = [];
    if (button) {
        button.addEventListener("click", pick);
    }
    function pick() {
        if (img_container) {
            resetContainer(); // Supprime les images précédentes
            draw();
            for (var _i = 0, pickList_1 = pickList; _i < pickList_1.length; _i++) {
                var character = pickList_1[_i];
                var img = document.createElement("img");
                img.src = "./src/image/".concat(character, ".png");
                img.alt = "Image de ".concat(character);
                img.classList.add("card");
                img_container.appendChild(img);
            }
        }
        else {
            console.error("Conteneur img_container non trouvé !");
        }
    }
    function draw() {
        pickList.length = 0;
        var shuffledList = __spreadArray([], characterList, true).sort(function () { return Math.random() - 0.5; });
        pickList.push.apply(pickList, shuffledList.slice(0, 6));
    }
    function resetContainer() {
        if (img_container) {
            img_container.innerHTML = ""; // Vide le conteneur
        }
    }
});
