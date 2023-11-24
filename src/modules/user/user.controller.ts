import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await userServices.createUserInDB(data);
    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserDB();
    res.status(201).json({
      success: true,
      message: 'Get all user successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.getSingleUserDB(userId);
    res.status(201).json({
      success: true,
      message: 'Get single user successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = req.body;
    const result = await userServices.updateUserDB(userId, data);
    res.status(201).json({
      success: true,
      message: 'Update user successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
};