#FUNNY COOKING

##"WHAT ARE WE COOKING TODAY?"

##Inhoudsopgave
1. Inleiding.
2. Benodigdheden om de applicatie te kunnen gebruiken.
3. Stappenplan installatie.
4. Stappenplan boilerplate opzetten.
5. Verdere benodigdheden.

##1. Inleiding

Met deze applicatie is het mogelijk om op verschillende manieren naar gerechten te zoeken.
Wanneer de applicatie wordt geopend kan de gebruiker door op de betreffende links in de menubar te klikken naar verschillende recepten pagina's navigeren. Ook kunnen de links in de "speech bubbles" gebruikt worden om naar de recepten pagina's toe te navigeren. Tevens kunnen diverse pagina's worden uitgeprint of in een pdf-bestand worden opgeslagen. Daar is een "print this page" button voor aangemaakt.

<img alt="Screenshot Home Page" src="assets/screenshots-recipe-app/home.JPG"/>

De about pagina geeft een korte handleiding voor de bezoeker weer. Zoals hoe de desbetreffende recepten zoek pagina's zullen gaan werken na een gedane handeling. Daarna kan de link gebruikt worden om naar de pagina te navigeren of men kan de menu navigatie bar gebruiken om verder te gaan.

<img alt="Screenshot About Page" src="assets/screenshots-recipe-app/about.JPG"/>

Wanneer de "Favorite Meal" pagina wordt bezocht, toont deze standaard 20 gerechten met het woord "SALAD" dit kan in het JS bestand appRecipe.js in een eigen recept worden gewijzigd. In de zoekbalk kan op recept of op ingrediënten (wel met comma's gescheiden) worden gezocht. Indien voorhanden worden er maximaal 20 recepten terug gegeven. Door over een recept image te hoveren krijgt men de compleet benodigde ingrediëntenlijst te zien inclusief de benodigde hoeveelheden. Door op de titel van het recept te klikken wordt de volledige recepten informatie op een nieuwe pagina getoond.

<img alt="Screenshot Favorite Meal" src="assets/screenshots-recipe-app/favorite-meal.JPG"/>

Wanneer de "Random Meal" pagina wordt bezocht, toont deze een info bubble.Tevens aanwezig een "RANDOM RECIPE BUTTON". Door op deze button te klikken wordt een random recept verkregen. Het is dus een verrassing welk recept de bezoeker terug krijgt. Mocht de bezoeker het recept niet bevallen dan klikt hij/zij gewoon verder of maakt een andere keuze in de menubar. Het verkregen random recept bevat naast de image, titel, ingrediëntelijst etc. ook nog een receptbereidings video die men op YouTube eventueel kan gaan bekijken.

<img alt="Screenshot Random Meal" src="assets/screenshots-recipe-app/random-meal.JPG"/>

Wanneer de "Mobile Recipe" pagina wordt bezocht, toont deze een info bubble.Tevens aanwezig een "SEARCH RECIPE" zoekbar met de "AND GO" button. In de zoekbalk kan op recept of op ingrediënten (wel met comma's gescheiden) worden gezocht. Indien voorhanden worden er maximaal 21 recepten terug gegeven, Onder de image wordt de title en diverse info zoals de calorieën, kooktijd, voedingswaarden etc weergegeven. Door op de VIEW RECIPE" button te klikken wordt de volledige info van het recept verkregen. Verder is deze pagina geschikt om op mobiele apparaten te gebruiken hiervoor is tevens een "Hamburger" menu navigatie gemaakt.

<img alt="Screenshot Mobile Recipe" src="assets/screenshots-recipe-app/mobile-recipe.JPG"/>


##2. Benodigdheden om de applicatie te kunnen gebruiken

Voor het gebruik van de applicatie wordt ervan uitgegaan dat er gebruikt wordt gemaakt van de IDE WebStorm.

##3. Stappenplan installatie

NPM, Parcel en Axios zijn al geconfigureerd. De bijbehorende dependencies moeten nog worden geïnstalleerd in de terminal:

`npm install` Zie hieronder ook "Boilerplate stappenplan" opzetten.

De applicatie wordt gestart met het commando:

`npm run start`

De locatie van de server wordt weergegeven in de terminal. Wanneer als eerste project in WebStorm geopend is dat:

`Server running at http://localhost:1234` Een ander project dat ook geopend wordt krijgt ook een ander localhost nummer.

Door op de link te klikken wordt de applicatie geopend in de browser en zal de startpagina "home.html" worden getoond. Hierna kan de gebruiker naar wens de applicatie doornemen en eventueel verder navigeren.

De applicatie kan worden afgebroken door in de terminal de toetsen combinatie:

`Ctrl + c` te gebruiken.

De applicatie kan weer gestart worden met het commando:

`npm run start of npm start`

#4 Boilerplate:

## Stappenplan project opzetten.

1. NPM initialiseren `npm init`
2. Parcel installeren `npm i parcel --save-dev`
3. Parcel plugin Nuke Distribution installeren `npm i parcel-plugin-nuke-dist --save-dev`
4. Aanmaken src map
5. Aanmaken index.html in src map
6. Aanmaken styles.css in src map
7. Koppelen styles.css in de head section `<link rel="stylesheet" href="./styles.css"/>`
8. Aanmaken main.js in src map
9. Koppelen main.js boven het sluiten van de body tag `<script src="./main.js" type="module"></script>`
10. Script tag vervangen in package.json `"scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html"
    },`
11. Test of alle koppelingen (js en css) en packages (parcel) werken! `npm run start`

## Stappenplan data fetchen.

1. Axios installeren `npm i axios`
2. Axios importeren in JS bestand `import axios from "axios";`
3. Asynchrone functie schrijven `async function functionName() { }`
4. Functie aanroepen `functionName()`
5. Functie testen
6. Try & catch block plaatsen in de functie declaratie `try {} catch ( e ) { console.error( e ); }`
7. In het try block een request (get/post/put/del) maken naar een endpoint en wachten op antwoord. Deze slaan we op in
   een variabele. `const response = await axios.get('https://api.uri-here.org/endpoint')`
8. Test response
9. Sla het object met de data op in een variabele `const nameOfData = response.data`
10. Nu kun je elke object binnen je endpoint aanroepen door de naam van de variabele te gebruiken. Let op! Een endpoint
    kan een array of object zijn en/of bevatten. Je zult dus middels de juiste syntax moeten aanroepen op onze variabele
    nameOfDataObject (bijv. `nameOfData.obj[0].info`)

## Verdere benodigdheden zijn de apiKeys.

1. Gebruikte API Key van: [Edamam](https://www.edamam.com/).
2. Gebruikte API Key van: [TheMealDB](https://themealdb.com/).





























#   N O V I - F i n a l - A s s i g n m e n t - W e b D e v 
 
 #   n o v i - e i n d o p d r a c h t 
 
 #   n o v i - e i n d o p d r a c h t 
 
 #   n o v i - e i n d o p d r a c h t 
 
 
