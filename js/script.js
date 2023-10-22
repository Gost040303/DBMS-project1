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


//filter function by Order Type
function filterFoodCardTpye() {
  const selectedCategoryType = document.getElementById('categoryFilterTpye').value;
  const foodCards = document.querySelectorAll('.foodCard');

  foodCards.forEach((card) => {
    const category = card.getAttribute('data-category');

    if (selectedCategoryType === 'all' || category === selectedCategoryType) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

    //filter function for order type
    function filterFoodCardOrderTpye() {
      const selectedCategoryFilterOrderType = document.getElementById('categoryFilterOrderTpye').value;
      const foodCards = document.querySelectorAll('.foodCard');
    
      foodCards.forEach((card) => {
        const category = card.getAttribute('data-order-type-category');
    
        if (selectedCategoryFilterOrderType === 'all' || category === selectedCategoryFilterOrderType) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    //filter function for ratings
    function filterFoodCardRating(){
      const selectedCategoryFilterRating = document.getElementById('categoryFilterRating').value;
      const foodCards = document.querySelectorAll('.foodCard');

      foodCards.forEach((card) =>{
        const category = card.getAttribute('data-rating-category');

        if(selectedCategoryFilterRating === 'all' || category === selectedCategoryFilterRating){
           card.style.display = 'block';
        }else {
          card.style.display = 'none';
        }
      });
    }

    //for both
    // Filter function
function filterFoodCards() {
  const selectedCategoryTpye = document.getElementById('categoryFilterTpye').value;
  const selectedCategoryOrderTpye = document.getElementById('categoryFilterOrderTpye').value;
  const foodCards = document.querySelectorAll('.foodCard');

  foodCards.forEach((card) => {
      const categoryTpyeForBoth = card.getAttribute('data-category');
      const categoryOrderTpyeForBoth = card.getAttribute('data-order-type-category');

      // Check if both options are set to 'all' or if they match the card's attributes
      if (
          (selectedCategoryTpye === 'all' || categoryTpyeForBoth === selectedCategoryTpye) &&
          (selectedCategoryOrderTpye === 'all' || categoryOrderTpyeForBoth === selectedCategoryOrderTpye)
      ) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}


//for all
//Filter Function

// Add an event listener to the selects to trigger filtering
document.getElementById('categoryFilterTpye').addEventListener('change', filterFoodCards);
document.getElementById('categoryFilterOrderTpye').addEventListener('change', filterFoodCards);
document.getElementById('categoryFilterRating').addEventListener('change', filterFoodCards);

// Filter function
function filterFoodCards() {
  const selectedCategoryType = document.getElementById('categoryFilterTpye').value;
  const selectedCategoryOrderType = document.getElementById('categoryFilterOrderTpye').value;
  const selectedCategoryRating = document.getElementById('categoryFilterRating').value;

  const foodCards = document.querySelectorAll('.foodCard');

  foodCards.forEach((card) => {
    const categoryType = card.getAttribute('data-category');
    const categoryOrderType = card.getAttribute('data-order-type-category');
    const categoryRating = card.getAttribute('data-rating-category');

    const typeMatch = selectedCategoryType === 'all' || categoryType === selectedCategoryType;
    const orderTypeMatch = selectedCategoryOrderType === 'all' || categoryOrderType === selectedCategoryOrderType;
    const ratingMatch = selectedCategoryRating === 'all' || categoryRating === selectedCategoryRating;

    if (typeMatch && orderTypeMatch && ratingMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initial filtering when the page loads
filterFoodCards();
