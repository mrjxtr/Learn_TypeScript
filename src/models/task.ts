/**
 * Represents the status of a task
 */
export type TaskStatus = "pending" | "in_progress" | "completed";

/**
 * Represents a category for tasks
 */
export interface Category {
  id: string;
  name: string;
  color?: string;
}

/**
 * Represents a task in the system
 */
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  category?: Category;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
} 
