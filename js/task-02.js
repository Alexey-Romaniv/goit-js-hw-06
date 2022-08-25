const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");
const listItemRef = ingredients.map((title) => {
  const titleIngridients = document.createElement("li");
  titleIngridients.textContent = title;
  return titleIngridients;
});
listRef.append(...listItemRef);
