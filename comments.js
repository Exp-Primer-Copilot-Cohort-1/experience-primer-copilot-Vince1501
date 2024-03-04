// Create web server 
// 1. Create a web server using Express
// 2. Create a route to get all the comments
// 3. Create a route to get a comment by its id
// 4. Create a route to add a new comment
// 5. Create a route to update a comment
// 6. Create a route to delete a comment
// 7. Start the server to listen on port 3000

// 1. Create a web server using Express
const express = require('express');
const app = express();
app.use(express.json());

// 2. Create a route to get all the comments
const comments = [
    { id: 1, author: 'John', text: 'First comment' },
    { id: 2, author: 'Jane', text: 'Second comment' },
    { id: 3, author: 'Jack', text: 'Third comment' }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

// 3. Create a route to get a comment by its id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found');
    res.json(comment);
});

// 4. Create a route to add a new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,    };
    // Rest of the code...
});
