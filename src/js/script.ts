document.addEventListener("DOMContentLoaded", () => {
    const img_container: HTMLElement | null = document.querySelector(".img_container");
    const button: HTMLElement | null = document.querySelector("#generateButton");

    const characterList: string[] = [
        "adamwarlock", "blackpanther", "blackwidow", "captainamerica",
        "cloak&dagger", "doctorstrange", "groot", "hawkeye", "hela", "hulk",
        "invisiblegirl", "ironfist", "ironman", "jeff", "loki", "lunasnow",
        "magik", "magneto", "mantis", "misterfantastic", "moonknight",
        "namor", "peni-parker", "psylocke", "rocket-racoon", "scarlet-witch",
        "spider-man", "squirrelgirl", "star-lord", "storm", "thepunisher",
        "thor", "venom", "wintersoldier", "wolverine"
    ];

    const pickList: string[] = [];

    if (button) {
        button.addEventListener("click", pick);
    }

    function pick(): void {
        if (img_container) {
            resetContainer(); // Supprime les images précédentes
            draw();
            for (const character of pickList) {
                const img: HTMLImageElement = document.createElement("img");
                img.src = `./src/image/${character}.png`;
                img.alt = `Image de ${character}`;
                img.classList.add("card");
                img_container.appendChild(img);
            }
        } else {
            console.error("Conteneur img_container non trouvé !");
        }
    }

    function draw(): void {
        pickList.length = 0;
        const shuffledList = [...characterList].sort(() => Math.random() - 0.5);
        pickList.push(...shuffledList.slice(0, 6));
    }

    function resetContainer(): void {
        if (img_container) {
            img_container.innerHTML = ""; // Vide le conteneur
        }
    }
});
