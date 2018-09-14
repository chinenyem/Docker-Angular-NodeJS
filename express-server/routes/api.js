const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const userarray = [];
const axios = require('axios')


// MongoDB URL from the docker-compose file
//going to have to change this for production
const dbHost = 'mongodb://database/mean2-docker';

// Connect to mongodb
mongoose.connect(dbHost);
//EXAMPLE IF USING MONGOOSE DATABASE
// // create mongoose schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
//
// // create mongoose model
// const User = mongoose.model('User', userSchema);
//
// /* GET api listing. */
// router.get('/', (req, res) => {
//     res.send('api works');
// });
//
// /* GET all users. */
// router.get('/users', (req, res) => {
//     User.find({}, (err, users) => {
//         if (err) res.status(500).send(error);
//         res.status(200).json(users);
//     });
// });
//
//
// /* GET one users. */
// router.get('/users/:id', (req, res) => {
//     User.findById(req.param.id, (err, users) => {
//         if (err) res.status(500).send(error)
//         res.status(200).json(users);
//     });
// });
//
// /* Create a user. */
// router.post('/users', (req, res) => {
//     let user = new User({
//         name: req.body.name,
//         age: req.body.age
//     });
//
//     user.save(error => {
//         if (error) res.status(500).send(error);
//
//         res.status(201).json({
//             message: 'User created successfully',
//             name:req.body.name,
//             age:req.body.age
//
//         });
//     });
// });

router.get('/busstations', (req, res) => {
  axios.get('http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y')
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

router.post('/getBustationslocations',( req, res)=>{
  let url = "http://api.bart.gov/api/etd.aspx?cmd=etd&orig=" + req.body.station + "&key=MW9S-E7SL-26DU-VV8V&json=y"
  axios.get(url)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch( error => {
      res.status(500).send(error);
    });
});

module.exports = router;
