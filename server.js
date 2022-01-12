const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
var { savedNotes } = require('./data/db');
const PORT = process.env.PORT || 3001;

function checkNote (id) {
  for (i=0; i<savedNotes.length; i++) {
    //console.log(savedNotes[i].id, id);
    if (savedNotes[i].id == id) {
      console.log(savedNotes[i].id, id);
      savedNotes.splice(i,1);
    }
  }
}

function updateNotes(){
  fs.writeFileSync(
    path.join(__dirname, "./data/db.json"),
    JSON.stringify({ savedNotes }, null, 2)
  );
  return savedNotes;
}

app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.get('/api/notes', (req, res)=>{
    res.json(savedNotes);
})

app.post('/api/notes', (req, res)=>{
  req.body.id = savedNotes.length;
  savedNotes.push(req.body);
  updateNotes();
})

app.delete('/api/notes/', (req, res)=>{
  let value = req.query.id;
  checkNote(value);
  updateNotes();
  console.log(savedNotes);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });