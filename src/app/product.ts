import { Department } from "./department";

export interface Product {
  name: string;
  departments: Department[] | undefined[];
  stock: number;
  price: number;
  _id ?: string;
}
