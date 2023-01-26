import references from "./references.js";
import { http } from "./http.js";
import { USER_ROLE, NAME_OF_MANAGER_RESTO } from "./index.js";

export async function getRatingsData() {
  if (USER_ROLE === "admin") {
    const data = await http.get("restaurant");
    displayRatingsToAdmin(data);
  } else if (USER_ROLE === "manager") {
    const data = await http.get(`manager/${NAME_OF_MANAGER_RESTO}`);
    displayRatingsToManager(data.restaurantFinder.ratings);
  }
}

// ---------------------------Admin--------------------------------------------
let reviewElement = "";

function displayRatingsToAdmin(data) {
  const restaurnatsDetails = data.restaurnatsDetails;
  
  for (let resto of restaurnatsDetails) {
    const { restaurantName, restaurantId: id, ratings } = resto;
    let reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML += `
     
      <span class="resto_or_user_name" >${restaurantName}</span>
      <span class="individual-average">Average:-3.2</span>
      <button class="customers-ratings" id=${id}>Customers Ratings</button>
      `;
    references.ratings.appendChild(reviewElement);
    
    addAction(ratings, id);
  }
}
// ------------------------Manager--------------------------------------------------------------

function displayRatingsToManager(data) {
  for (let resto of data) {
   display(resto)
  }
}

// ---------------------------Get Users Rating and Display---------------------------------------------

function addAction(ratings, id) {
  console.log(id)
  const customersRatingBtnDisplay = document.getElementById(id);
  console.log(customersRatingBtnDisplay)
  customersRatingBtnDisplay.addEventListener("click", () => {
  
    const customersReviewElement = document.querySelector(".ratings");
    customersReviewElement.innerHTML = "";
    customersRatingsDisplay( ratings);
  });
}

function customersRatingsDisplay( ratings) {
  for (let resto of ratings) {
    display(resto);
  }
}

// ----------------------------Display Template-------------------------------------------
function display({
  username,
  food,
  ambience,
  service,
  cleanliness,
  overAll,
  averageRating
}) {
  reviewElement = `
            <section class="review">
              <span class="resto_or_user_name">${username}</span>      
                  
                    <section class="rating-category">
                      <div class="category">Food</div>
                      <div class="category-value">${food}</div>
                    </section>
                    <section class="rating-category">
                      <div class="category">Ambience</div>
                      <div class="category-value">${ambience}</div>
                    </section>
                    <section class="rating-category">
                      <div class="category">Service</div>
                      <div class="category-value">${service}</div>
                    </section>
                    <section class="rating-category">
                      <div class="category">Cleanliness</div>
                      <div class="category-value">${cleanliness}</div>
                    </section>
                    <section class="rating-category">
                      <div class="category">OverAll</div>
                      <div class="category-value">${overAll}</div>
                    </section>             
              <span class="individual-average">Average:-${averageRating}</span>`;

  references.ratings.innerHTML += reviewElement;
}
