## Note Taker 
GIVEN a note-taking application

- WHEN I open the Note Taker THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text THEN a Save icon appears in the navigation at the top of the page
- WHEN I click on the Save icon THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
- WHEN I click on an existing note in the list in the left-hand column THEN that note appears in the right-hand column
- WHEN I click on the Write icon in the navigation at the top of the page THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Built With
- HTML
- CSS: Bootstrap, Font Awesome
- Javascript
- Node js: FS
- Express js

## Note Taker Webpage
The user is presented with the index.html page as the homepage.  From there the user can move to the Note Taker page which has their notes stored and allows for the user to add or remove notes.

## Backend Services
Using Express js, a backend server provides access to the json "database" the stores the note information.  Server.js provides routes to support GET, PUT, and DELETE requests when the user adds or removes notes.

## Demo
<img src=https://github.com/texrob20/note-taker/blob/main/demo/note-taker-demo.png>

## Deployed Application
https://limitless-bayou-72672.herokuapp.com/