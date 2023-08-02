import _ from 'lodash';
const dayjs = require('dayjs')

const numberOfCards = document.querySelectorAll('.card').length;
const cardsPerPage = 9;
let pageNumber = 1;
const totalPages = Math.ceil(numberOfCards / cardsPerPage);
const pagination = document.querySelector('.pagination');


//NPM daysjs library to format the date
const today = dayjs().format('DD/MM/YYYY');
console.log(today);
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
    btn.classList.add(`button`);
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

    //Show the pages that belong to each page
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < numberOfCards; i++) {
        if (i >= (pageNumber - 1) * cardsPerPage && i < pageNumber * cardsPerPage) {
            cards[i].style.display = 'flex';
        } else {
            cards[i].style.display = 'none';
        }
    }

    //Put the active class on the current page button
    const buttons = document.querySelectorAll('.button');
    for(let j=0; j<buttons.length; j++) {
        if(buttons[j].innerText == pageNumber) {
            buttons[j].classList.add('active');
        }else {
            buttons[j].classList.remove('active');
        }
        }
    }


// Show first page
showCards();


// Logic that change the display to a grid or a list of cards
let cardContainer = document.querySelector(".grid-container")

//Put the grid container showing 3 cloumns
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
//Put the grid container showing 1 column like a list, also reduce the size of each column to the half of the parent
// and place it in the middle
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

