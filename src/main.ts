import { TaskService } from "./services/taskService.ts";
import { Category } from "./models/task.ts";

// Create a task service instance
const taskService = new TaskService();

// Create some categories
const workCategory: Category = {
  id: "1",
  name: "Work",
  color: "blue",
};

const personalCategory: Category = {
  id: "2",
  name: "Personal",
  color: "green",
};

// Create some tasks
console.log("Creating tasks...");
const task1 = taskService.createTask(
  "Complete TypeScript Project",
  "Implement all required features",
  workCategory,
  new Date("2024-01-15"),
);

const task2 = taskService.createTask(
  "Go to the gym",
  "Cardio day",
  personalCategory,
  new Date("2024-01-01"),
);

// Display all tasks
console.log("\nAll tasks:");
console.log(taskService.getAllTasks());

// Update task status
console.log("\nUpdating task status...");
taskService.updateTaskStatus(task1.id, "in_progress");

// Display tasks by status
console.log("\nPending tasks:");
console.log(taskService.getTasksByStatus("pending"));

console.log("\nIn progress tasks:");
console.log(taskService.getTasksByStatus("in_progress"));
