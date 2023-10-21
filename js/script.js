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
  const selectedCategory = document.getElementById('categoryFilterTpye').value;
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

    //for both
    function filterFoodCardBoth() {
        const selectedCategoryTpye = document.getElementById('categoryFilterTpye').value;
        const selectedCategoryOrderTpye = document.getElementById('categoryFilterOrderTpye').value;
        const foodCards = document.querySelectorAll('.foodCard');

        foodCards.forEach((card) => {
            const categoryTpye = card.getAttribute('data-category');
            const categoryOrderTpye = card.getAttribute('data-order-type');

            if (
                (selectedCategoryTpye === 'all' || categoryTpye === selectedCategoryTpye) &&
                (selectedCategoryOrderTpye === 'all' || categoryOrderTpye === selectedCategoryOrderTpye)
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

