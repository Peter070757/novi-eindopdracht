const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = 'f38466c2';
const APP_key = '72c051625d9a8f8172500a3a877396ba';


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    // console.log(searchQuery);
    fetchAPI();

});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=21`;
    const response = await fetch(baseURL);
    // console.log(response);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    container.classList.remove('initial');
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=
            `
              <div class="item">
                <img src="${result.recipe.image}" alt="">
                <div class="flex-container">
                    <h1 class="title">${result.recipe.label}</h1>
                    <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
                </div>
                <p class="item-data1">Cuisine: ${result.recipe.cuisineType}</p>
                <p class="item-data">Meal Type: ${result.recipe.mealType}</p>
                <p class="item-data1">Dish Type: ${result.recipe.dishType}</p>
                <p class="item-data">Ingredients: ${result.recipe.ingredients.map(ingredient => ingredient.text)}</p>
                <p class="item-data1">Calories: ${result.recipe.calories.toFixed(2)}</p>
                <p class="item-data">Cooking time minutes: ${result.recipe.totalTime > 0 ? result.recipe.totalTime : 'Variable'}</p>
                <h1 class="title-nutrients">Nutrients:</h1>
                <p class="item-data1">${result.recipe.totalNutrients.CA.label} ${result.recipe.totalNutrients.CA.quantity.toFixed(2)} ${result.recipe.totalNutrients.CA.unit}</p>
                <p class="item-data1">${result.recipe.totalNutrients.CHOLE.label} ${result.recipe.totalNutrients.CHOLE.quantity.toFixed(2)} ${result.recipe.totalNutrients.CHOLE.unit}</p>
                <p class="item-data1">${result.recipe.totalNutrients.FAT.label} ${result.recipe.totalNutrients.FAT.quantity.toFixed(2)} ${result.recipe.totalNutrients.FAT.unit}</p>
                <p class="item-data1">${result.recipe.totalNutrients.FOLFD.label} ${result.recipe.totalNutrients.FOLFD.quantity.toFixed(2)} ${result.recipe.totalNutrients.FOLFD.unit}</p>
                <p class="item-data1">${result.recipe.totalNutrients.SUGAR.label} ${result.recipe.totalNutrients.SUGAR.quantity.toFixed(2)} ${result.recipe.totalNutrients.SUGAR.unit}</p>
                <p class="item-data1">${result.recipe.totalNutrients.VITC.label} ${result.recipe.totalNutrients.VITC.quantity.toFixed(2)} ${result.recipe.totalNutrients.VITC.unit}</p>
                <p class="item-data1">${result.recipe.totalNutrients.VITD.label} ${result.recipe.totalNutrients.VITD.quantity.toFixed(2)} ${result.recipe.totalNutrients.VITD.unit}</p>
                <p class="item-data">Total Weight (grams): ${result.recipe.totalWeight.toFixed(2)}</p>                 
            </div>
            `
    })
    searchResultDiv.innerHTML = generatedHTML;
}
