const express = require('express');
const router = express.Router();


let users = [
  {
    name: "cory",
    age: 21,
    height: "6 ft",
    dopeness: "doep"
  },
  {
    name: "tim",
    age: 22,
    height: "6 ft 2",
    dopeness: "doeper"
  },
  {
    name: "jake",
    age: 23,
    height: "6 ft 4",
    dopeness: "doepboi"
  }
];

router.get('/', (req, res, next) => {
  res.send("Welcome to our API");
});

// Get users by specific name
router.get('/users/:username', (req, res, next) => {
  let user = req.params.username;

  if(user) {
      let result = users.find((elem) => {
        return elem.name == user;
      });

      if(result){
        res.send(`User: ${result.name} requested,
          dopeness: ${result.dopeness},
          age: ${result.age},
          height: ${result.height}
        `);
      } else {
        res.send("user not found...");
      }
  }

});

// Get all users
router.get('/users', (req,res,next) => {
  if(users){
    res.send(users);
  }
});

// Add a new user
router.post('/users', (req, res, next) => {
  console.log(req.body);
  if(req.body){
    let newUser = {
      name: req.body.name,
      age: req.body.age,
      height: req.body.height,
      dopeness: req.body.dopeness
    }

    // Save newUser to database in actual application
    users.push(newUser);
    console.log(users);

    res.send(users);
  } else {
    console.log("No body found..");
    res.send("No user found");
  }

});

module.exports = router;
