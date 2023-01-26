import { http } from "./http.js";
import { selectedResto } from "./RestoListDisplay.js";
import references from "./references.js";

const data = {};
export function submitUserRating() {
  references.rating_btn.addEventListener("click", (event) => {
    event.preventDefault();

    for (let element of rating_form.elements) {
      data[element.name] = element.value;
    }
    const { username, food, ambience, service, cleanliness ,overAll} = data;
    const RatingData = {
      restaurantName: selectedResto,
      username: username,
      food: food,
      ambience: ambience,
      service: service,
      cleanliness: cleanliness,
      overAll:overAll
    };

    http.post("restaurant/rate",RatingData)
    for (let element of rating_form.elements) {
      element.value = "";
    }
    references.rating_container_displayBtn.style.display = "none";
  });
}
