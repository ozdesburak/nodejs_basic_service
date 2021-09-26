const express = require('express');
const userService = require('../Services/UserService');

/*========================*/

const routes = () => {

  const userRouter = express.Router();

  userRouter.route('/')
    .post(userService.create)
    .get(userService.findAll)
    
    userRouter
    .route('/login/:email/:password')
    .get(userService.login)

    userRouter.use('/:id', (req, res ,next) =>
    userService.isAValidID(req.params.id) ? 
      next() : res.sendStatus(404)
    )

    userRouter
    .route('/:id')
    .get(userService.findById)
    .put(userService.findByIdAndUpdate)
    .patch(userService.findByIdAndUpdate)
    .delete(userService.findByIdAndRemove)

    
    


  return userRouter

}

module.exports = routes();
