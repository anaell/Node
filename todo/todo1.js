// Import built-in node.js modules

const fs = require("fs");
const path = require("path");

// Create the full path to the todo.json file (It's in the same folder as this script)
const todoFile = path.resolve(__dirname, "todo1.json");

// If the file doesn't exist already, create it with an empty array

if (!fs.existsSync(todoFile)) {
  fs.writeFileSync(todoFile, "[]", "utf-8");
}

// Load todos from the file
function getTodos() {
  const todoData = fs.readFileSync(todoFile, "utf-8");
  return JSON.parse(todoData);
}

// Save todos to the file
function saveTodos(todo) {
  const saveTodo = JSON.stringify(todo);
  fs.writeFileSync(todoFile, saveTodo, "utf-8");
}

// Handle command-line arguments

const command = process.argv[2];
const input = process.argv[3];

if (!command) {
  console.error(
    'Please input a command\nUsage: node todo1.js [add "task"]\nOR\nnode todo1.js list'
  );
  process.exit(1);
}

// Read current todos and store data in a variable
const todo = getTodos();

// Handle the commands

if (command === "add") {
  if (!input) {
    console.error(
      'Please provide an input\nUsage: node todo1.js [add "task"]\nOR\nnode todo1.js list'
    );
    process.exit(1);
  }

  todo.push({ task: input, done: false });
  saveTodos(todo);
  console.log(`✅ Task added: "${input}"`);
} else if (command === "list") {
  if (todo.length === 0) {
    console.log("No task has been added");
  } else {
    todo.forEach((todo, index) => {
      const status = todo.done ? "✅" : "❌";
      console.log(`${index + 1}. ${todo.task} - ${status}`);
    });
  }
} else {
  console.log(`Unknown command: ${command}`);
  console.log('Usage: node todo.js [add "task"] | list');
}
