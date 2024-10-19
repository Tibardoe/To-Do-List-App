let userInput = "";

function getUserInput() {
    const userNote = document.querySelector(".user-input");

    userNote.addEventListener("input", (event) => {
        userInput = event.target.value.trim();
    });
}

function addNote() {
    const todoList = document.querySelector(".text-box");
    const addButton = document.querySelector(".add-button");
    const inputArea = document.querySelector(".user-input")

    addButton.addEventListener("click", () => {
        if (userInput !== "") {
            const newLabel = document.createElement("label");
            newLabel.classList.add("checkbox-container");

            newLabel.innerHTML = `<input class="checkbox" type="checkbox"><span class="checkmark"></span> ${userInput}`;


            newLabel.addEventListener("click", () => {
                todoList.removeChild(newLabel);
            });


            todoList.appendChild(newLabel);

            inputArea.value = "";
            userInput = "";

        };


    });
}

getUserInput();
addNote();







// let userInput = "";

// // Function to get the user input
// function getUserInput() {
//     const inputArea = document.querySelector(".user-input");
//     inputArea.addEventListener("input", (event) => {
//         userInput = event.target.value.trim(); // Trim to avoid adding empty input
//     });
// }

// // Function to add a note to the list
// function addNote() {
//     const addButton = document.querySelector(".add-button");
//     const taskContainer = document.querySelector(".text-box");
//     const inputArea = document.querySelector(".input-area")

//     addButton.addEventListener("click", () => {
//         if (userInput !== "") {
//             const newLabel = document.createElement("label");
//             newLabel.classList.add("checkbox-container");
//             newLabel.innerHTML = `
//                 <input class="checkbox" type="checkbox">
//                 <span class="checkmark"></span>
//                 <span class="task-text">${userInput}</span>
//             `;

//             // Add delete functionality on click
//             newLabel.addEventListener("click", (event) => {
//                 // Prevent deletion when clicking on the text to edit
//                 if (!event.target.classList.contains('task-text')) {
//                     taskContainer.removeChild(newLabel);
//                 }
//             });

//             // Add edit functionality on double-click
//             const taskText = newLabel.querySelector(".task-text");
//             taskText.addEventListener("dblclick", () => {
//                 const inputField = document.createElement("input");
//                 inputField.type = "text";
//                 inputField.value = taskText.textContent;
//                 inputField.classList.add("edit-input");

//                 // Replace task text with an input field
//                 newLabel.replaceChild(inputField, taskText);
//                 inputField.focus();

//                 // Save the edit on pressing Enter or losing focus
//                 inputField.addEventListener("blur", () => {
//                     saveEdit(inputField, taskText, newLabel);
//                 });
//                 inputField.addEventListener("keydown", (e) => {
//                     if (e.key === "Enter") {
//                         saveEdit(inputField, taskText, newLabel);
//                     }
//                 });
//             });

//             // Append the new task to the container
//             taskContainer.appendChild(newLabel);
//             userInput = ""; // Reset the input after adding
//         }
//     });
// }

// // Function to save the edited task
// function saveEdit(inputField, taskText, newLabel) {
//     if (inputField.value.trim() !== "") {
//         taskText.textContent = inputField.value.trim(); // Update task text
//         newLabel.replaceChild(taskText, inputField); // Replace input field with text
//     } else {
//         // If the input is empty, revert to the previous task text
//         newLabel.replaceChild(taskText, inputField);
//     }
// }

// // Initialize functions
// getUserInput();
// addNote();
