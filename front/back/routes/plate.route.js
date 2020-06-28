const express = require('express');
const app = express();
const plateRoutes = express.Router();

let Plate = require('../models/Plate');

plateRoutes.route('/add').post(function (req, res) {
  let plate = new Plate(req.body);
  plate.save()
    .then(plate => {
      res.status(200).json({'Plate': 'Plate has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

plateRoutes.route('/').get(function (req, res) {
    Plate.find(function (err, plates){
    if(err){
      console.log(err);
    }
    else {
      res.json(plates);
    }
  });
});

plateRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Plate.findById(id, function (err, plate){
      res.json(plate);
  });
});

plateRoutes.route('/update/:id').post(function (req, res) {
    Plate.findById(req.params.id, function(err, plate) {
    if (!plate)
      res.status(404).send("Record not found");
    else {
        plate.plateName = req.body.plateName;
        plate.plateSurname = req.body.plateSurname;
        plate.platePlates = req.body.platePlates;

        plate.save().then(plate => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

plateRoutes.route('/delete/:id').get(function (req, res) {
    Plate.findByIdAndRemove({_id: req.params.id}, function(err, plate){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = plateRoutes;