const categories = document.querySelector("#categories");

const items = categories.querySelectorAll("li.item");
console.log("Number of categories:", items.length);

items.forEach((item) => {
  const headline = item.querySelector("h2");
  console.log("Category:", headline.textContent);
  const itemList = item.querySelectorAll("li");
  console.log("Elements:", itemList.length);
});
