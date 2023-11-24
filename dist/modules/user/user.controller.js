'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.userController = void 0;
const user_service_1 = require('./user.service');
const createUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = req.body;
      const result = yield user_service_1.userServices.createUserInDB(data);
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
  });
const getAllUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const result = yield user_service_1.userServices.getAllUserDB();
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
  });
const getSingleUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const result = yield user_service_1.userServices.getSingleUserDB(userId);
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
  });
const updateUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const data = req.body;
      const result = yield user_service_1.userServices.updateUserDB(
        userId,
        data,
      );
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
  });
const deleteUser = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { userId } = req.params;
      const result = yield user_service_1.userServices.deleteUserDB(userId);
      res.status(201).json({
        success: true,
        message: 'Delete user successfully!',
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error,
      });
    }
  });
exports.userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
