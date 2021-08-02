export interface Product {
  id: number;
  img: string;
  text: string;
  title: string;
}

export type Products = Product[];

export interface CreatedBy {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  username: string;
}
export interface Comment {
  created_at: string;
  created_by: CreatedBy;
  id: number;
  product: number;
  rate: number;
  text: string;
}
export type Comments = Comment[];

export interface LoginRequest {
  username: string;
  password: string;
}
export interface LoginResponse {
  success: boolean;
  token: string;
}

export interface RegistrationRequest {
  username: string;
  password: string;
}
export interface RegistrationResponse {
  success: boolean;
  token: string;
}
