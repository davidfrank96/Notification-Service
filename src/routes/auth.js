import express from 'express';
import { signupController, signupVerifyController } from '../controllers';
import signupValidator from '../validations/signup';
import signupVerifyMiddleware from '../middlewares/signupVerify';
import UserController from '../controllers/userController';
import loginValidation from '../validations/userValidation'




const authRouter = express.Router();

const { login } = UserController;

authRouter.post('/signup', signupValidator,
    signupController);

authRouter.post('/login', loginValidation, login);

authRouter.put(
  '/verify/:token',
  signupVerifyMiddleware,
  signupVerifyController
);







export default authRouter;
