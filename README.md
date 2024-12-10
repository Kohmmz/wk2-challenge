# Shopping List Application

## Description
This is a simple interactive shopping list application built with **HTML**, **CSS**, and **JavaScript**. Users can:
- Add items to a shopping list.
- Mark items as purchased by clicking on them.
- Clear the entire shopping list with a button.

The application demonstrates key JavaScript concepts, including DOM manipulation, event handling, and dynamic updates to an array-based state.

---

## Features
- **Add Items**: Users can type an item in the input field and click the "Add" button or press "Enter" to add it to the list.
- **Mark as Purchased**: Clicking on a list item toggles its purchased status, changing the item's text decoration and background color.
- **Clear List**: The "CLEAR-LIST" button removes all items from the shopping list.
- **Responsive UI**: Styled using CSS to provide an intuitive and visually appealing user experience.

---

## Installation and Usage
1. Clone the repository or download the project files.
2. Open the `index.html` file in your web browser.
3. Interact with the application:
   - Type an item name in the input field and press **Add** or **Enter**.
   - Click on an item in the list to toggle its "purchased" status.
   - Press **CLEAR-LIST** to remove all items from the list.

---

## File Structure
- `index.html`: Contains the structure of the webpage and links to the CSS and JavaScript files.
- `style.css`: Styles the shopping list interface.
- `script.js`: Contains the JavaScript logic for adding, marking, and clearing items.

---

## JavaScript Breakdown
### Key Elements:
- **DOM Manipulation**:
  - Accessed elements with `document.getElementById`.
  - Updated the DOM dynamically using `innerHTML` and `createElement`.

- **State Management**:
  - Maintains a `shoppingList` array to track the list items and their "purchased" status.

- **Event Handling**:
  - Listened for `click` events on buttons and `keypress` events on the input field.

### Functions:
1. **`renderList`**:
   - Clears the `listContainer` and repopulates it based on the `shoppingList` array.

2. **`addItem`**:
   - Adds a new item to the `shoppingList` array and re-renders the list.

3. **`clearList`**:
   - Clears the `shoppingList` array and updates the DOM.

---

## Styling Highlights
- Gradient background and responsive design ensure usability across devices.
- List items change visually when marked as purchased.
- Buttons have distinct colors for clear visual hierarchy.

---

## How to Contribute
Feel free to fork the repository, make improvements, and create a pull request. Suggestions and bug reports are also welcome.

---

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## Author
Built with ❤️ by [Kohmmz].