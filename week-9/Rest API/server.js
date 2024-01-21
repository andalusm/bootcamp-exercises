const express = require('express');
const app = express();
app.use(express.json());


let userID = 5
let animalsID = 5

let users = [
    { id: 1, name: 'Alice', age: 30 , isActive: true},
    { id: 2, name: 'Bob', age: 25 , isActive: false},
    { id: 3, name: 'Charlie', age: 35 , isActive: true},
    { id: 4, name: 'Diana', age: 28 , isActive: true},
    { id: 5, name: 'Edward', age: 40 , isActive: false}
  ];
  
  let animals = [
    { id: 1, type: 'Dog', name: 'Rex' },
    { id: 2, type: 'Cat', name: 'Whiskers' },
    { id: 3, type: 'Bird', name: 'Tweety' },
    { id: 4, type: 'Fish', name: 'Goldie' },
    { id: 5, type: 'Hamster', name: 'Fuzzy' }
  ];


// List all users 
app.get('/users/', (req, res) => res.status(200).send({users:users}));

// Get a user by ID 
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.status(200).json(user) : res.status(403).send({error:'User not found'});
});

// Search users by name 
app.get('/usernames/', (req, res) => {
  const  name  = req.query.name;
  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
  res.status(200).json(filteredUsers);
});

// Add a new user 
app.post('/users/', (req, res) => {
  const newUser = { id: userID + 1, ...req.body };
  users.push(newUser);
  userID += 1
  res.status(201).json(newUser);
});

// Update a user 
app.put('/users/', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.body.id));
  if (user) {
    Object.assign(user, req.body);
    res.status(200).json(user);
  } else {
    res.status(403).send({error:'User not found'});
  }
});

// Delete a user 
app.delete('/users/:id/', (req, res) => {
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.status(204).send({message:'User removed'});
});

// List all animals 
app.get('/animals/', (req, res) => res.status(200).json(animals));

// Get a specific animal by ID 
app.get('/animals/:id', (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));
  animal ? res.status(200).json(animal) : res.status(403).send({error:'Animal not found'});
});

// Add a new animal 
app.post('/animals/', (req, res) => {
  const newAnimal = { id: animalsID + 1, ...req.body };
  animals.push(newAnimal);
  animalsID += 1
  res.status(201).json(newAnimal);
});

// Update an animal 
app.put('/animals/', (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.body.id));
  if (animal) {
    Object.assign(animal, req.body);
    res.status(200).json(animal);
  } else {
    res.status(403).send({error:'Animal not found'});
  }
});

// Delete an animal 
app.delete('/animals/:id/', (req, res) => {
  animals = animals.filter(animal => animal.id !== parseInt(req.params.id));
  res.status(204).send({message:'Animal removed'});
});

// Increment User's Age 
app.patch('/userages/', (req, res) => {
    const userId = req.query.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
      user.age += 1;
      res.status(200).json(user);
    } else {
      res.status(403).send({error:'User not found'});
    }
  });
  
  // Filter Animals by Type 
  app.get('/animaltypes/', (req, res) => {
    const type = req.query.type;
    const filteredAnimals = animals.filter(animal => animal.type.toLowerCase() === type.toLowerCase());
    res.status(200).json(filteredAnimals);
  });
  
  // Change Animal's Name 
  app.patch('/animalnames/', (req, res) => {
    const { id, newName } = req.body;
    const animal = animals.find(a => a.id === parseInt(id));
    if (animal && newName) {
      animal.name = newName;
      res.status(200).json(animal);
    } else {
      res.status(403).send({error:'Animal not found or new name not provided'});
    }
  });
  
  // List Users in a Certain Age Range 
  app.get('/userages/', (req, res) => {
    const { minAge, maxAge } = req.query;
    const filteredUsers = users.filter(user => user.age >= minAge && user.age <= maxAge);
    res.status(200).json(filteredUsers);
  });
  
  // Toggle User's Active Status 
  app.patch('/useractivestatuses/', (req, res) => {
    const userId = req.query.id;
    const user = users.find(u => u.id === parseInt(userId));
    if (user) {
      user.isActive = !user.isActive;
      res.status(200).json(user);
    } else {
      res.status(403).send({error:'User not found'});
    }
  });
  

app.listen(3000, () => console.log('Server running on port 3000'));