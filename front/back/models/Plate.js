const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Plate = new Schema({
  plateName: {
    type: String
  },
  plateSurname: {
    type: String
  },
  platePlates: {
    type: String, unique: true
  }
},{
    collection: 'Plate'
});

module.exports = mongoose.model('Plate', Plate);