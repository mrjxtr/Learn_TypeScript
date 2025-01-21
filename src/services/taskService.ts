import { Task, TaskStatus, Category } from "../models/task.ts";
import { generateId } from "../utils/idGenerator.ts";

/**
 * Service class for managing tasks
 */
export class TaskService {
  private tasks: Map<string, Task>;

  constructor() {
    this.tasks = new Map<string, Task>();
  }

  /**
   * Creates a new task
   * @param title - The title of the task
   * @param description - Optional description of the task
   * @param category - Optional category for the task
   * @param dueDate - Optional due date for the task
   */
  createTask(
    title: string,
    description?: string,
    category?: Category,
    dueDate?: Date,
  ): Task {
    const task: Task = {
      id: generateId(),
      title,
      description,
      status: "pending",
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueDate,
    };

    this.tasks.set(task.id, task);
    return task;
  }

  /**
   * Updates the status of a task
   * @param taskId - The ID of the task to update
   * @param status - The new status
   */
  updateTaskStatus(taskId: string, status: TaskStatus): Task {
    const task = this.tasks.get(taskId);
    if (!task) {
      throw new Error(`Task with ID ${taskId} not found`);
    }

    task.status = status;
    task.updatedAt = new Date();
    this.tasks.set(taskId, task);
    return task;
  }

  /**
   * Gets all tasks
   */
  getAllTasks(): Task[] {
    return Array.from(this.tasks.values());
  }

  /**
   * Gets tasks by status
   * @param status - The status to filter by
   */
  getTasksByStatus(status: TaskStatus): Task[] {
    return this.getAllTasks().filter((task) => task.status === status);
  }
} 
