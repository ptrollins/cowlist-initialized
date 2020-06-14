const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CowSchema = new Schema({
  id: { type: Number, unique: true },
  name: { type: String, unique: true },
  description: String,
});

const Cow = mongoose.model('Cow', CowSchema);

module.exports.getCows = () => {
  return Cow.find().exec();
};

module.exports.saveCows = (cow) => {
  return Cow.findOneAndUpdate({ name: cow.name }, cow, {
    new: true,
    upsert: true,
    useFindAndModify: false,
  }).exec();
};
