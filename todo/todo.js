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
function getTodos() {
    const data = fs.readFileSync(todoFile, 'utf-8');
    return JSON.parse(data);  
}

// Save todos to the file
function saveTodos(todos) {
    const json = JSON.stringify(todos, null, 2) // pretty print
    fs.writeFileSync(todoFile, json, 'utf-8');    
}

// Handle command-line  arguments
const command = process.argv[2];
const input = process.argv[3];

if (!command) {
    console.log('Usage: node todo.js [add "task"] | list');
    process.exit(1);
}

// Read current todos
const todos = getTodos();

if (command === 'add') {
    if (!input) {
        console.log('Please provide a task.');
        process.exit(1);        
    }

    todos.push({ task: input, done: false});
    saveTodos(todos);
    console.log(` Task added: "${input}"`);
    
} else if (command === 'list') {
    if (todos.length === 0) {
        console.log('No tasks found.');
        
    } else {
        todos.forEach((todo, index) => {
            const status = todo.done ? 'Good' : 'Bad';
            console.log(`${index + 1}. ${todo.task} - ${status}`);
        });
    }
} else {
    console.log(`Unknown command: ${command}`);
    console.log(`Usage: node todo.js [add "task"] | list`);
}