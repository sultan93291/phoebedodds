export type commonType<T> = {
  id: number;
  created_at: string;
  updated_at: string;
  success: boolean;
  message: string;
  code: number;
  data: T;
};
