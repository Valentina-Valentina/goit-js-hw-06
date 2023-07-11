const li = document.querySelectorAll('.item')

const numberOfCategories = li.length;

console.log("Number of categories: " + numberOfCategories)

li.forEach(li => {
    const h2 = li.firstElementChild;

    const category = h2.textContent;
    console.log("Category: " + category)

    const categoryList = li.lastElementChild;
    const categoryListItems = categoryList.children;
    
    console.log("Elements: " + categoryListItems.length)
});
