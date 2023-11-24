import { UserData } from './user.interface';
import { UserModel } from './user.model';

const createUserInDB = async (userData: UserData) => {
  const result = UserModel.create(userData);
  return result;
};

const getAllUserDB = async () => {
  const result = UserModel.aggregate([
    { $match: {} },
    {
      $project: {
        userId: 1,
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
      },
    },
  ]);
  return result;
};
export const userServices = {
  createUserInDB,
  getAllUserDB,
};
