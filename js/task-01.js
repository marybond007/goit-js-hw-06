const ulCategories = document.querySelectorAll(".item");
const itemNumber = ulCategories.length;
console.log(`Number of categories: ${itemNumber}`);

for (const category of ulCategories) {
  const headingEl = category.firstElementChild;
  console.log(`Category: ${headingEl.textContent}
Elements: ${headingEl.nextElementSibling.children.length} `);
}