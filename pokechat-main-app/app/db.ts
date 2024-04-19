import { iMessage } from "./types";

/* De pokemon waar de gebruiker momenteel mee chat. */
let currentPokemon = "pikachu";

/**
 * Genereert een boodschap op basis van de huidige pokemon.
 */
export const generateMessage = (): iMessage => { 
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const nameToArr = [...currentPokemon.toLowerCase()];
    const vowelIds : number[] = [];
    nameToArr.forEach((char, index) => {
        if (vowels.includes(char) && vowelIds.indexOf(index - 1) == -1) {
            vowelIds.push(index);
        }
    });

    let cry = "";
    if (vowelIds.length <= 1) { 
        cry = `${currentPokemon}`;
    }
    else if (vowelIds[1] - vowelIds[0] == 2) { 
        cry = `${currentPokemon.substring(0, vowelIds[1] + 1)}`;
    }
    else { 
        cry = `${currentPokemon.substring(0, vowelIds[0] + 2)}`;
    }

    return {
        sender: currentPokemon,
        message: `${cry} ${cry}?`
    };
}

/**
 * variabele om de chat history op te slaan.
 */
const chatHistory: iMessage[] = [
    generateMessage()
];

/**
 * Geeft de chatHistory terug.
 */
export const getChatHistory = () => { 
    return chatHistory;
}

/**
 * TODO: voeg een chat message toe aan de chatHistory
 */
export const saveChatMessage = (msg : iMessage) => { 
    // TODO: implementeer functie
}

/**
 * changePokemon genereert een willekeurig getal tussen 1 en 255.
 * Vervolgens wordt de fetch API gebruikt om een pokemon op te vragen van https://pokeapi/api/v2/pokemon/[pokemonID], 
 * waarbij [pokemonID] het willekeurig getal is.
 * Uiteindelijk wordt de naam van de opgevraagde pokemon bewaard in de variabele 'currentPokemon' (zie code lijn [10]).
 * 
 * changePokemon geeft een promise terug, zodat je instructies kunt uitvoeren wanneer de nieuwe pokemon klaar staat om te chatten.
 */
export const changePokemon = () => { 
    // TODO: implementeer functie
}