export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  isDeleted?: boolean; // Esto es opcional
}
