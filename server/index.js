const express = require("express");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const e = require("express");
const SECRET = "parkpickForLife";

const db = knex({
  client: "pg",
  connection: {
    host: "20.101.114.208",
    user: "parkpick",
    port: 5432,
    password: "parkpick",
    database: "parkpick",
  },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all users from the database
app.get("/view", verifyToken, (req, res) => {
  jwt.verify(req.token, "parkpickSecret", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      db.select("*")
        .from("users")
        .then((data) => {
          console.log(data);
          res.send({
            message: { data }
          });
          //return res.redirect("localhost:3000");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

// POST: Create a user and add it to the database
app.post("/addUser", (req, response) => {
  const {
    id_body,
    created_body,
    firstname_body,
    email_body,
    lastname_body,
    phone_body,
    password_body,
  } = req.body;

  bcrypt.hash(password_body, 10).then((hashedPassword) => {
    db.from("users")
      .insert({
        id: id_body,
        created: created_body,
        firstname: firstname_body,
        email: email_body,
        lastname: lastname_body,
        phone: phone_body,
        password: hashedPassword,
      })
      .returning(["id", "email"])
      .then((users) => {
        console.log(users);
        response.json({
          username: firstname_body,
          password: password_body,
        });
        // response.json(users[0]);
      });
  });
});

app.post("/login", (request, response, next) => {
  const User = {
    email: request.body.email_login,
    password: request.body.password_login,
  };

  db.from("users")
    .where({ email: User.email })
    .first()
    .then((user) => {
      if (!user) {
        response.status(401).json({
          error: "No user by that name",
        });
      } else {
        return bcrypt
          .compare(User.password, user.password)
          .then((isAuthenticated) => {
            if (!isAuthenticated) {
              response.status(401).json({
                error: "Unauthorized Access!",
              });
            } else {
              jwt.sign({ User }, "parkpickSecret",{expiresIn: '1h'}, (error, token) => {
                response.json({
                  message: "nice",
                  Token: token,
                });
              });
              // return jwt.sign(user, SECRET, (error, token) => {
              //   response.status(200).json({ token });
              // });

              //return response.redirect("http://localhost:3000/user/home");
            }
          });
      }
    });
});

//Verify that a user is logged in
function verifyToken(req, result, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" "); //create an array of the token
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    //forbiden access
    result.sendStatus(403);
  }
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
