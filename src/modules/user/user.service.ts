import { userOrders } from '../order/order.interface';
import { userData } from './user.interface';
import { UserModel } from './user.model';

const createUserInDB = async (userData: userData) => {
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
const getSingleUserDB = async (id: string) => {
  const result = UserModel.findOne({ userId: id });
  return result;
};
const updateUserDB = async (id: string, data: userData) => {
  const result = UserModel.updateOne({ userId: id }, { $set: data });
  return result;
};
const deleteUserDB = async (id: string) => {
  const result = UserModel.deleteOne({ userId: id });
  return result;
};
const addOrderDB = async (id: string, orderData: userOrders) => {
  const data = new UserModel(orderData);
  if (!(await data.isUserExits(id))) {
    const result = UserModel.updateOne(
      { userId: id },
      { $push: { orders: orderData } },
    );
    return result;
  } else {
    throw new Error('User is not exits');
  }
};
const getSingleOrderDB = async (id: string) => {
  const result = UserModel.aggregate([
    { $match: { userId: parseInt(id) } },
    {
      $project: { orders: 1 },
    },
  ]);
  return result;
};
const getTotalCostDB = async (id: string) => {
  const result = UserModel.aggregate([
    { $match: { userId: parseInt(id) } },
    {
      $unwind: '$orders',
    },
    {
      $project: {
        totalCost: { $multiply: ['$orders.price', '$orders.quantity'] },
      },
    },
    {
      $group: {
        _id: null,
        totalCost: { $sum: '$totalCost' },
      },
    },
  ]);
  return result;
};
export const userServices = {
  createUserInDB,
  getAllUserDB,
  getSingleUserDB,
  updateUserDB,
  deleteUserDB,
  addOrderDB,
  getSingleOrderDB,
  getTotalCostDB,
};
