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

export interface ChangedComment {
  id: number;
  username: string;
  text: string;
  created_at: string;
  rate: number;
}

export interface AuthRequest {
  username: string;
  password: string;
}
export interface AuthResponse {
  success: boolean;
  token: string;
  message?: string;
}

export interface AddCommentResponse {
  success: boolean;
}

export interface NewComment {
  rate: number;
  text: string;
}

export interface AddCommentPayload extends NewComment {
  product_id: string;
}

export type Favorites = {
  product: Product;
  comments: ChangedComment;
}[];

export interface IProfile {
  firstName: string;
  lastName: string;
  photo: string;
}

type NotificationTypes = 'Error' | 'Success' | 'Info';
export interface Notification {
  type: NotificationTypes;
  title: string;
  text?: string;
}

export type INotifications = Notification[];
