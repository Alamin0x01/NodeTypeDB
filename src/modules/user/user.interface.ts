import { Model } from 'mongoose';
import { userOrders } from '../order/order.interface';

export type userData = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?: userOrders[];
};

export type UserMethods = {
  isUserExits(id: string): Promise<userData | null>;
};

export type UserInterfaceModel = Model<
  userData,
  Record<string, never>,
  UserMethods
>;
