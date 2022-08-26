const liWithClassItemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${liWithClassItemRef.length}`);

liWithClassItemRef.forEach((item) =>
  console.log(`Category: ${item.querySelector("h2").textContent}
Elements: ${item.querySelectorAll("li").length}`)
);
