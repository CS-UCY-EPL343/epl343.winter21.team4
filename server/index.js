const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "postgres",
      database: "parkpick",
    },
  });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all movies from the database
app.get('/view', (req, res) => {
    db.select('*')
        .from('users')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});


// GET: Fetch movie by movieId from the database
// app.get('/:movieId', (req, res) => {
//     const movieId = req.params.movieId;
//     db.select('*')
//         .from('movies')
//         .where('movie_id', '=', movieId)
//         .then((data) => {
//             console.log(data);
//             res.json(data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// POST: Create movies and add them to the database
app.post('/addUser', (req, res) => {
     const { id, created, fullname, email} = req.body;
    db('users')
        .insert({
            id : req.body.id,
            created: req.body.created,
            fullname: req.body.fullname,
            email: req.body.email
        })
        .then(() => {
            console.log('user added');
            return res.json({ msg: 'user added' });
        })
        .catch((err) => {
            console.log(err);
        });
});

// DELETE: Delete movie by movieId from the database
// app.delete('/delete-movie', (req, res) => {
//     const movieId = req.body;
//     const movieIdToDelete = Number(movieId.movieId);
//     console.log(movieIdToDelete);
//     db('movies')
//         .where('movie_id', '=', movieIdToDelete)
//         .del()
//         .then(() => {
//             console.log('Movie Deleted');
//             return res.json({ msg: 'Movie Deleted' });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// PUT: Update movie by movieId from the database
// app.put('/update-movie', (req, res) => {
//     db('movies')
//         .where('movie_id', '=', 1)
//         .update({ movie_name: 'Goldeneye' })
//         .then(() => {
//             console.log('Movie Updated');
//             return res.json({ msg: 'Movie Updated' });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));