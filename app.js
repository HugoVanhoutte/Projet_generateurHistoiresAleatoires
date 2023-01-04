const usernameButton = document.getElementById("username-button");
const usernameText = document.getElementById("username-text");
const container = document.getElementById("container")

let names = [
    "Henri",
    "George",
    "Philippe",
]

let items = [
    "un tournevis",
    "une chaise",
    "une théière",
]

let places = [
    "sur la place du marché",
    "chez lui",
    "dérrière l'église",
]

let verbs = [
    "a tué",
    "a vendu",
    "a volé",
]

let generator = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}

let tempGenerator = () => {
    return `${Math.floor(Math.random()*40-10)}°C`
}

usernameButton.addEventListener("click", () => {
    let newStory = document.createElement("p");
    let newVerb = generator(verbs);
    switch (newVerb){
        case "a tué":
            newStory.innerText = `${generator(names)} ${newVerb} ${usernameText.value} ${generator(places)} avec ${generator(items)}, le corps était à ${tempGenerator()} quand il a été retrouvé`
            break;

        default:
            newStory.innerText = `${generator(names)} ${newVerb} ${generator(items)} à ${usernameText.value} ${generator(places)}, alors qu'il faisait ${tempGenerator()}`
            break;
    }
    container.append(newStory);
})
