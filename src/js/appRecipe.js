// const APP_ID = 'f38466c2';
// const APP_KEY = '72c051625d9a8f8172500a3a877396ba';
console.log('Script is running ...!');

const appKey = "b76bd144d9bfe514a82caa915ec68a1b";
const appId = "594ba4ba";
const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}`;
const recipeContainer = document.querySelector("#recipe-container");
const txtSearch = document.querySelector("#txtSearch");
const btnFind = document.querySelector(".btn");
const loadingEle = document.querySelector("#loading");

btnFind.addEventListener("click", () => loadRecipes(txtSearch.value));

txtSearch.addEventListener("keyup", (e) => {
    const inputVal = txtSearch.value;
    if (e.keyCode === 13) {
        loadRecipes(inputVal);
    }
});

const toggleLoad = (element, isShow) => {
    element.classList.toggle("hide", isShow);
};

const setScrollPosition = () => {
    recipeContainer.scrollTo({top: 0, behavior: "smooth"});
};

function loadRecipes(type = "salad") {      // Main page can start for example with (type = "salad")
    toggleLoad(loadingEle, false)
    const url = baseUrl + `&q=${type}`;
    fetch(url)
        .then((res) => res.json())
        //.then((data) => console.log(data.hits))
        // .then((data) => renderRecipies(data.hits))
        .then((data) => {
            renderRecipes(data.hits);
            toggleLoad(loadingEle, true);
        })
        // .catch((error) => console.log(error))
        .catch((error) => toggleLoad(loadingEle, true))
        .finally(() => setScrollPosition());
}

loadRecipes();

const getRecipeStepsStr = (ingredientLines = []) => {
    let str = "";
    for (let step of ingredientLines) {
        str = str + `<li>${step}</li>`
    }
    return str;
}

const renderRecipes = (recipeList = []) => {
    recipeContainer.innerHTML = ";"
    recipeList.forEach(recipeObj => {
        const {
            label: recipeTitle,
            ingredientLines,
            image: recipeImage,
            url: recipeUrl,
        } = recipeObj.recipe;
        const recipeStepStr = getRecipeStepsStr(ingredientLines)
        const htmlStr = ` <div class="recipe">
<!--            <div class="recipe-title">${recipeTitle}</div>-->
             <div class="recipe-title btn-title"><a href="${recipeUrl}" target="_blank">${recipeTitle}</a></div>
            <div class="recipe-image">
                <img src="${recipeImage}" alt="recipe-img" />
            </div>
            <div class="recipe-text">
                <ul>
                 ${recipeStepStr}
                </ul>
            </div>
        </div>`;
        recipeContainer.insertAdjacentHTML("beforeend", htmlStr);
    });
};


















