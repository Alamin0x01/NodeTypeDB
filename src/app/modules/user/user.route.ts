import express, { Router } from 'express';
import { UserController } from './user.controller';

const router: Router = express.Router();

router.post('/', UserController.createUser);
// Endpoint: GET /api/users to Retrieve a list of all users
router.get('/', UserController.getAllUsers);

export const userRoutes = router;
