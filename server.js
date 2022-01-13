const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const { savedNotes } = require('./data/db');
const PORT = process.env.PORT || 3001;
//sets initial value for note id
var counterID = savedNotes.length;  

//determines which note to delete from db and removes
function checkNote (id) {
  for (i=0; i<savedNotes.length; i++) {
    if (savedNotes[i].id == id) {
      savedNotes.splice(i,1);
    }
  }
  return savedNotes;
}

//updates the db when a note is added or removed
function updateNotes(){
  fs.writeFileSync(
    path.join(__dirname, "./data/db.json"),
    JSON.stringify({ savedNotes }, null, 2)
  );
  return savedNotes;
}

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//listens for get api request and returns notes stored in db
app.get('/api/notes', (req, res)=>{
    res.json(savedNotes);
})
//listens for post request and adds a new note to the db
app.post('/api/notes', (req, res)=>{
  req.body.id = counterID;  //sets note ID based on counter
  savedNotes.push(req.body);
  updateNotes();
  counterID ++; //updates counter to avoid duplicate IDs
  res.json(savedNotes);
})
//listens for delete request and removes note that matches selected ID
app.delete('/api/notes/', (req, res)=>{
  let value = req.query.id;
  checkNote(value);
  updateNotes();
  res.json(savedNotes);
})
//directs all home requests to the index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
//directs all /notes requests to the notes.html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });