// Select DOM elements
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const listContainer = document.getElementById("listContainer");

// Initialize an array to manage shopping list items
let shoppingList = [];

// Function to render the shopping list items
function renderList() {
  // Clear the current list on the DOM
  listContainer.innerHTML = "";

  // Loop through the shoppingList array and create list items
  shoppingList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.style.textDecoration = item.purchased ? "line-through" : "none";
    li.style.backgroundColor = item.purchased ? "#a4ffaf" : "transparent";

    // Mark item as purchased on click
    li.addEventListener("click", () => {
      shoppingList[index].purchased = !shoppingList[index].purchased;
      renderList();
    });

    // Append the list item to the container
    listContainer.appendChild(li);
  });
}

// Function to add a new item to the shopping list
function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName) {
    shoppingList.push({ name: itemName, purchased: false });
    itemInput.value = ""; // Clear the input field
    renderList(); // Update the DOM
  } else {
    alert("Please enter an item!");
  }
}

// Function to clear the shopping list
function clearList() {
  shoppingList = [];
  renderList(); // Update the DOM
}

// Attach event listeners
addButton.addEventListener("click", addItem);
clearButton.addEventListener("click", clearList);
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

// Initial rendering
renderList();
