import express from 'express';
import authRouter from './auth';


const apiRoutes = express.Router();
//const usersRouter = express.Router();

//usersRouter.use('/v1/auth', authRouter);
apiRouters.use('/v1/auth', authRouter);

apiRoutes.get('/', (req, res) =>
  res.json({
    status: 200,
    message: 'Welcome to Notification Service'
  })
);

apiRoutes.get('/v1', (req, res) =>
  res.json({
    status: 200,
    message: 'Welcome to version 1 of Notification Service'
  })
);




export default apiRoutes;
