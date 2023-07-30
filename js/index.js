console.log("Hola perro")

const numberOfCards = document.querySelectorAll('.card').length;
const cardsPerPage = 9;
let pageNumber = 1;
const totalPages = Math.ceil(numberOfCards / cardsPerPage);
const pagination = document.querySelector('.pagination');

// Create page buttons

//FIRST the previous button
let previousBtn = document.createElement('button');
previousBtn.innerText = "Previous";
previousBtn.onclick = function() {
    if (pageNumber > 1) {
        pageNumber = pageNumber - 1;
    }
    showCards();
}
pagination.appendChild(previousBtn)


//Then the page numbers
for (let i = 1; i <= totalPages; i++) {
    let btn = document.createElement('button');
    btn.innerText = i;
    btn.onclick = function() {
        pageNumber = this.innerText;
        showCards();
    };
    pagination.appendChild(btn);
}

// Finally the next button
let nextBtn = document.createElement('button');
nextBtn.innerText = "Next";
nextBtn.onclick = function() {
    if (pageNumber < totalPages) {
        pageNumber = pageNumber + 1;
    }
    showCards();
}
pagination.appendChild(nextBtn)


// Function that show the cards
function showCards() {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < numberOfCards; i++) {
        if (i >= (pageNumber - 1) * cardsPerPage && i < pageNumber * cardsPerPage) {
            cards[i].style.display = 'flex';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

// Show first page
showCards();


// Logic that change the display to a grid or a list of cards
let cardContainer = document.querySelector(".grid-container")

let displayInGrid = document.querySelector(".display-in-grid")
displayInGrid.onclick = function(event) {
    event.preventDefault();
    cardContainer.style.gridTemplateColumns = "repeat(3, 1fr)"
    cardContainer.style.placeContent = null;  
    let images = document.querySelectorAll(".card-img")
    for (let i = 0; i < images.length; i++) {
        images[i].style.width = null; 
        images[i].style.height = null;  
    }
}

let displayInList = document.querySelector(".display-in-list")
displayInList.onclick = function(event) {
    event.preventDefault();
    cardContainer.style.gridTemplateColumns = "repeat(1, 0.5fr)"
    cardContainer.style.placeContent = "center"
    let images = document.querySelectorAll(".card-img")
    for (let i = 0; i < images.length; i++) {
        images[i].style.width = "700px"
        images[i].style.height = "300px"
    }
}

