// navBar function
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


// for adding foodCard div 
let foodCardCount = 12; // Initial count of food cards
const foodPannel = document.querySelector('.foodPannel');

function loadMoreContent() {
  const newFoodCards = createFoodCards(6); // Create 6 new food cards
  foodPannel.innerHTML += newFoodCards;
}

function createFoodCards(count) {
  let foodCardsHTML = '';
  for (let i = 0; i < count; i++) {
    foodCardCount++;
    foodCardsHTML += `<div class="foodCard">
                          
                      </div>`;
  }
  return foodCardsHTML;
}


//filter function
function filterFoodCards() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  const foodCards = document.querySelectorAll('.foodCard');

  foodCards.forEach((card) => {
    const category = card.getAttribute('data-category');

    if (selectedCategory === 'all' || category === selectedCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
