import express from 'express';
import { getChatHistory, saveChatMessage, generateMessage, changePokemon } from './db';

// --------------
// express server
// --------------
// create express app
const app = express();
app.set("port", 3000);

// init middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// listen to port
app.listen(app.get("port"), () => console.log(`App running on port ${app.get("port")}.`));

// view engine
app.set('view engine', 'ejs'); // EJS als view engine
app.set('views', __dirname + "/views");

//////////////////////////////////////////////
//////////////////////////////////////////////

/**
 * Toont een pagina met daarop een textarea waarin de chatgeschiedenis getoond wordt,
 * en een input veld waarin je een nieuwe boodschap kan verzenden.
 */
app.get("/", (req, res) => { 
    // TODO: implementeer get request
});

/**
 * vangt op wanneer een nieuwe boodschap wordt verzonden.
 * Bij een nieuwe boodschap:
 *  - bewaar je de nieuwe boodschap in de database
 *  - controleer je of het '/pokemon' commando gegeven werd
 *      - zo ja, dan verander je de huidige pokemon door 'changePokemon()' aan te roepen
 *  - bewaar je het antwoord in de database
 *  - gebruik je 'res.redirect("/")' om de pagina te verversen na 4 seconden
 */
app.post("/", (req, res) => { 
    // TODO: implementeer post request
});