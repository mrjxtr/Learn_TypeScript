/**
 * Generates a unique ID using timestamp and random numbers
 * @returns A unique string ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
} 
