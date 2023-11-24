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
exports.userServices = void 0;
const user_model_1 = require('./user.model');
const createUserInDB = (userData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = user_model_1.UserModel.create(userData);
    return result;
  });
const getAllUserDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = user_model_1.UserModel.aggregate([
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
  });
const getSingleUserDB = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = user_model_1.UserModel.findOne({ userId: id });
    return result;
  });
const updateUserDB = (id, data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = user_model_1.UserModel.updateOne(
      { userId: id },
      { $set: data },
    );
    return result;
  });
const deleteUserDB = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = user_model_1.UserModel.deleteOne({ userId: id });
    return result;
  });
exports.userServices = {
  createUserInDB,
  getAllUserDB,
  getSingleUserDB,
  updateUserDB,
  deleteUserDB,
};
