const express = require('express');
const contactService = require('../Services/contactService');

/*========================*/

const routes = () => {

  const contactRouter = express.Router();

  contactRouter.route('/')
    .post(contactService.create)
    // .get(contactService.findAll)

    // contactRouter.use('/:id', (req, res ,next) =>
    // contactRouter.isAValidID(req.params.id) ? 
    //   next() : res.sendStatus(404)
    // )

    // contactRouter
    // .route('/:id')
    // .get(contactService.findById)
    // .put(contactService.findByIdAndUpdate)
    // .patch(contactService.findByIdAndUpdate)
    // .delete(contactService.findByIdAndRemove)


  return contactRouter

}

module.exports = routes();
