import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserValidationSchema } from './user.validation';
import { userServices } from './user.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = UserValidationSchema.parse(req.body);
    if (!newUser.password) {
      return res.status(400).json({
        success: false,
        message: 'Password is required',
      });
    }
    const hashedPassword = await bcrypt.hash(newUser.password, 12);

    await userServices.createUserToDb({
      ...newUser,
      password: hashedPassword,
    });

    const userWithoutPassword = {
      ...newUser,
      password: undefined,
    };

    res.status(201).json({
      success: true,
      message: 'User is created successfully!',
      data: userWithoutPassword,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Invalid data format',
      error: err,
    });
  }
};

export const UserController = {
  createUser,
};
