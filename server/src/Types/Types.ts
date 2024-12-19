export interface payload {
  email: string,
  userId: string
}

export interface UserType {
  email: string;
  password: string;
}

export interface ProductType {
  name: string;
  description: string;
  price: string;
  condition: string;
  color: string;
  image?: string;
  contactNumber: number;
}

