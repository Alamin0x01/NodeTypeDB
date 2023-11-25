import { Model } from 'mongoose';

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

  orders?: {
    productName: string;
    price: number;
    quantity: number;
  }[];
};

export type UserMethods = {
  // eslint-disable-next-line no-unused-vars
  isUserExits(id: string): Promise<userData | null>;
};

export type UserInterfaceModel = Model<
  userData,
  Record<string, never>,
  UserMethods
>;
