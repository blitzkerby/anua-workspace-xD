/********************* review tab function */
const review_tab = document.getElementById("review-tab");
const question_tab = document.getElementById("question-tab");

const review_button = document.getElementById("review-button");
const question_button = document.getElementById("question-button");

review_button.addEventListener("click", () => {
  // console.log(review_button);
  review_button.classList.add("active");
  question_button.classList.remove("active");
  question_tab.classList.add("visually-hidden");
  review_tab.classList.remove("visually-hidden");
});

question_button.addEventListener("click", () => {
  // console.log(question_button);
  question_button.classList.add("active");
  review_button.classList.remove("active");
  review_tab.classList.add("visually-hidden");
  question_tab.classList.remove("visually-hidden");
});
/********************* end review tab function*/

/******************** show more function */
const show_more_button = document.getElementById("show-more-button");
show_more_button.addEventListener("click", () => {
  show_more_button.classList.add("loading");
  show_more_button.disabled = true;
  setTimeout(() => {
    show_more_button.classList.remove("loading");
    show_more_button.disabled = false;
    showMore();
  }, 1000);
});

function showMore() {
  const review_container = document.getElementById("review-container");
  const item = review_container.querySelectorAll("#item-01")[0];
  review_container.appendChild(item.cloneNode(true));
  //   console.log(item);
}
/******************** end show more function */

/******************** filter function */
const filter_button = document.getElementById("filter-button");
const filter_option = document.getElementById("filter-option");
filter_button.addEventListener("click", () => {
  // console.log(review_button);
  filter_button.classList.toggle("active");
  filter_option.classList.toggle("show");
  // filter_option.classList.toggle("show");
});

/******************** end filter function */
