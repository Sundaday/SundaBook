const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;

//find All users
module.exports.getAllUsers = async(req, res) => {
    const users = await UserModel.find().select('-password')
    res.status(200).json(users)
};

//find user by id
module.exports.userInfo = (req, res) => {
    //req.params = user info
    console.log(req.params)
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('Unknown Id : ' + req.params.id)
    
    UserModel.findById(req.params.id, (err, docs) => {
        if(!err)res.send(docs)
        else console.log('Unknown Id : ' + err)
    }).select('-password')
};

//Update user by id
module.exports.updateUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await UserModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            bio: req.body.bio,
          },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true })
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err }));
    } catch (err) {
      return res.status(500).json({ message: err });
    }
};

//Delete user by id
module.exports.deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);

    try{
      await UserModel.deleteOne({ _id: req.params.id }).exec();
      res.status(200).json({ message: "Successfully deleted." });
    }catch(err){
      return res.status(500).json({ message: err });
    }
};

module.exports.follow = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);

    try{
      
    }catch(err){
      return res.status(500).json({ message: err });
    }
};

module.exports.unfollow = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);

    try{
      
    }catch(err){
      return res.status(500).json({ message: err });
    }
};
