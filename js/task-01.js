const listCategory = document.querySelectorAll('.item');
console.log(`Number of categories:`, listCategory.length);

listCategory.forEach((item) => {
    console.log(`Category:, ${item.firstElementChild.textContent}`);
    console.log(`Elements:, ${item.lastElementChild.children.length}`);
});