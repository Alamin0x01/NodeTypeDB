import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUser);
router.get('/:userId', userController.getSingleUser);
router.put('/:userId', userController.updateUser);

export const userRoutes = router;