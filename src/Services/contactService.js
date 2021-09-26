const Contact = require('../Models/contactModel')
const mongoose = require('mongoose');

const ContactService = () => {
  const isAValidID = (id) => (mongoose.Types.ObjectId.isValid(id));

  const create = (req, res) => {
    console.log('brk');
    Contact.create(req.body, (err, contact) => {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).json(contact);
    })
  };

  const findAll = (req, res) => {
    Contact.find({}, (err, contacts) => {
      if (err) return res.status(500).send("There was a problem finding the contact.");
      res.status(200).json(contact);
    })
  };
  
  const findById = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
      if (err) return res.status(500).send("There was a problem finding the contact.");
      if (!contact) return res.sendStatus(404);
      res.status(200).send(contact);
    });
  };

  const findByIdAndRemove = (req, res) => {
    Contact.findByIdAndRemove(req.params.id, (err, contact) => {
      if (err) return res.status(500).send("There was a problem deleting the contact.");
      res.sendStatus(204);
    });
  };
  
  const findByIdAndUpdate = (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, contact) => {
      if (err) return res.status(500).send("There was a problem updating the contact.");
      res.status(200).send(contact);
    });
  };

  return { 
    create,
    findAll,
    findById,
    findByIdAndRemove,
    findByIdAndUpdate,
    isAValidID
  };
}


module.exports = ContactService();