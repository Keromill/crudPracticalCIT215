//Define an array of objects
//Populate the array with objects
supCharacters = [
    {
        name: "Dean",
        species: "Human",
        status: "Hero",
        src: "https://preview.redd.it/what-are-your-unpopular-opinions-about-dean-winchester-v0-ukow4afu3wwa1.jpg?auto=webp&s=55649f6d5d5a6c7d74f2d52aa8c9846206c38be1",
    },

    {
        name: "Sam",
        species: "Human",
        status: "Hero",
        src: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/supernatural/b/b6/Sam_Winchester.jpg",
    },

    {
        name: "Castiel",
        species: "Angel",
        status: "Hero",
        src: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Castiel.Supernatural.webp",
    },

    {
        name: "Crowley",
        species: "Demon",
        status: "Villain",
        src: "https://i.redd.it/gchs0nxndhpa1.jpg",
    },

    {
        name: "Benny",
        species: "Vampire",
        status: "Friend",
        src: "https://preview.redd.it/opinions-on-benny-v0-5v3nrkwdo3nc1.jpeg?auto=webp&s=268ba3e467deadf3cd9bb50cfc99949be18a107a",
    }
]

console.log(supCharacters);

//reflect the objects in the display area | Use array method forEach
const updateDisplay = () => {
    let list = document.querySelector(".list");
    list.innerHTML = null;
    let header = document.createElement("h2");
    header.append(document.createElement("em"));
    header.append("Character List");
    list.append(header);
    let newList = document.createElement("ul");
    supCharacters.forEach((Character) => {
        let newCharacter = document.createElement("li");
        newCharacter.append(Character.name);
        newList.append(newCharacter);
    });
    list.append(newList);
    console.log(supCharacters);
}

updateDisplay();
let image = document.querySelector(".characterImage");
image.src = "images//Supernatural.png";

const act = () => {
    let action = document.querySelector("#editInput").value;
    console.log(`Current action: ${action}`);

    switch (action) {
        case "C":
            createCharacter();
            break;
        case "R":
            readCharacter();
            break;
        case "U":
            updateCharacter();
            break;
        case "D":
            deleteCharacter();
            break;
        default:
            alert("Invalid selection provided, please try again!");
            console.log("Invalid selection provided, please try again!");
            break;
    }
}

//Create: Include a mechanism for creating a new  object, using the attributes entered by the user
//Add the object to the array and refresh the display on the web page
//Use array method push
const createCharacter = () => {
    console.log("Creating character!");
    //Keep the total of objects to 10 or less, so you can display them easily on an associated web page
    if(supCharacters.length == 10)
    {
        alert("Character limit reached! Please remove a character before adding a new one!");
        console.log("Character limit reached! Please remove a character before adding a new one!");
        return;
    }
    let name = prompt("What character do you want to add?");
    let species = prompt(`What species is ${name}?`);
    let allegience = prompt (`What allegience is ${name}?`);
    let src = prompt (`Please provide an image source for ${name}`)
    console.log(`New character: ${name}, ${species}, ${allegience}, ${src}`);
    supCharacters.push({name: name, species: species, status: allegience, src: src});
    updateDisplay();
}

//Read: Include a mechanism for listing a specific object details
//Must use the find method in JavaScript on the array, and then display details on web page
//Use array method find
const readCharacter = () => {
    console.log("Reading character!");
    let character = findCharacter();
    if(character == undefined)
        return;
    console.log(`Looking for ${character.name} details: ${character}`)
    let characterString = document.querySelector(".displayedInfo");
    characterString.innerHTML = `${character.name} is a ${character.species} who is a ${character.status}!`;
    console.log(characterString);
    let image = document.querySelector(".characterImage");
    image.src = character.src;
}

//Update: Provide a mechanism to change a part of the object, and to display changed details on web page
//Use array method find
const updateCharacter = () => {
    console.log("Updating character!");
    let character = findCharacter();
    if(character == undefined)
        return;
    console.log(`Updating character: ${character}`);
    let name = prompt("What do you want the new name to be?");
    let species = prompt(`What species is ${name}?`);
    let allegience = prompt (`What allegience is ${name}?`);
    let src = prompt (`Please provide an image source for ${name}`)
    character.name = name;
    character.species = species;
    character.status = allegience;
    character.src = src;
    console.log(`Character after updates: ${character}`);
    updateDisplay();
}

//Delete : Provide a mechanism to remove the object from the array and refresh the details on the web page
//Use array method splice
const deleteCharacter = () => {
    console.log("Deleting character!");
    let character = findCharacter();
    if(character == undefined)
        return;
    console.log(`Deleting character: ${character}`)
    let index = -1;
    for(let i = 0; i < supCharacters.length; i++)
    {
        if(supCharacters[i] == character)
            index = i;
    }
    console.log(`Character index: ${index}`)
    supCharacters.splice(index, 1);
    updateDisplay();
}

//Use array method find
const findCharacter = () => {
    console.log("Finding character!");
    let characterName = prompt("Which character do you want to search for?");
    console.log(`Searching for ${characterName}`);
    let character = supCharacters.find((character) =>
        character.name == characterName
    );
    
    if(character == undefined)
    {
        alert("That character wasn't found! Please try again!");
        console.log("That character wasn't found! Please try again!");
    }

    console.log(`Character found: ${character}`);
    return character;
}