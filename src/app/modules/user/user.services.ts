import { UserModel } from '../user.model';
import { UserInterfaceIUser } from './user.interface';

// creating an user
const createUserToDb = async (user: UserInterfaceIUser) => {
  const result = await UserModel.create(user);
  return result;
};

export const userServices = {
  createUserToDb,
};
