const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CowSchema = new Schema({
  name: { type: String, unique: true },
  description: String,
});

const Cow = mongoose.model('Cow', CowSchema);

module.exports.getCows = () => {
  console.log('getcows filter: ');
  let cow = Cow.find().exec();
  console.log('getcows done');
  return cow;
};

module.exports.saveCows = (cow) => {
  return Cow.findOneAndUpdate({ name: cow.name }, cow, {
    new: true,
    upsert: true,
    useFindAndModify: false,
  }).exec();
};
