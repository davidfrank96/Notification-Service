import express from 'express';



const apiRoutes = express.Router();

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
