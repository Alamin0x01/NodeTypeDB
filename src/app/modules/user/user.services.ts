import { UserModel } from '../user.model';
import { UserInterfaceIUser } from './user.interface';

// creating an user
const createUserToDb = async (user: UserInterfaceIUser) => {
  const result = await UserModel.create(user);
  return result;
};
//getting all users from db
const getAllUsersFromDb = async () => {
  const result = await UserModel.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1, _id: 0 },
  );
  return result;
};

export const userServices = {
  createUserToDb,
  getAllUsersFromDb,
};
