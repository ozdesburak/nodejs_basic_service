const User = require('../Models/userModel');
const mongoose = require('mongoose');

const UserService = () => {
  const isAValidID = (id) => (mongoose.Types.ObjectId.isValid(id));

  const create = (req, res) => {
    console.log('brk');
    User.create(req.body, (err, user) => {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).json(user);
    })
  };

  const findAll = (req, res) => {
    User.find({}, (err, users) => {
      if (err) return res.status(500).send("There was a problem finding the user.");
      res.status(200).json(users);
    })
  };
  
  const findById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.sendStatus(404);
      res.status(200).send(user);
    });
  };

  const findByIdAndRemove = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.sendStatus(204);
    });
  };

  const findByIdAndUpdate = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(user);
    });
  };
  const login = (req, res) => {
    console.log('buradak', req.params);
    User.findOne( {email:req.params.email, password:req.params.password}, (err, user) => {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(401).send({message:'USER not found' , status:401})
      res.status(200).send(user);
    });
  };

  return { 
    create,
    findAll,
    findById,
    findByIdAndRemove,
    findByIdAndUpdate,
    isAValidID,
    login
  };
}


module.exports = UserService();