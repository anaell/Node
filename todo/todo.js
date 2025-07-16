// Importing necessary modules
const fs = require('fs');
const path = require('path');

// Define the path to the todo file
// This file will store the todo items in JSON format
const todoFile = path.resolve(__dirname, 'todo.json');

// If the todo file does not exist, create it with an empty array
if (!fs.existsSync(todoFile)) {
    fs.writeFileSync(todoFile, '[]', 'utf8');
}

// Function to read todo items from the file
function readTodos() {
    const data = fs.readFileSync(todoFile, 'utf8');
    return JSON.parse(data);
}

// Load the todo items from the file
