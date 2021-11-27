const express = require("express");
const cors = require("cors");
const knex = require("knex");
require("dotenv").config();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const SECRET = "parkpickForLife";

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
app.use(bodyParser.json());
// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

// GET: Fetch all users from the database
app.get("/view", (req, res) => {
  db.select("*")
    .from("users")
    .then((data) => {
      console.log(data);
      return res.redirect("localhost:3000");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Authentication of a user with the database
app.post("/authUser", (req, res) => {
  db.select("email", "password")
    .from("users")
    .where("email", "=", req.body.email_login)
    .andWhere("password", "=", req.body.password_login)
    .then((data) => {
      console.log(req.body.email_login, "  ", req.body.password_login);
      console.log(data);
      return res.redirect("http://localhost:3000/user/home");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/parking", (req, res) => {
  db.select("*")
    .from("parking")
    .where("id", "=", req.body.parkID)
    .then((data) => {
      console.log(data);
      // return res.redirect("http://localhost:3000/user/home");
    })
    .catch((err) => {
      console.log(err);
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
    db("users")
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
        // response.json(users[0]);
      });
  });
});

app.post("/login", (request, response, next) => {
  db.from("users")
    .where({ email: request.body.email_login })
    .first()
    .then((user) => {
      if (!user) {
        response.status(401).json({
          error: "No user by that name",
        });
      } else {
        return bcrypt
          .compare(request.body.password_login, user.password)
          .then((isAuthenticated) => {
            if (!isAuthenticated) {
              response.status(401).json({
                error: "Unauthorized Access!",
              });
            } else {
              // return jwt.sign(user, SECRET, (error, token) => {
              //   response.status(200).json({ token });
              // });

              return response.redirect("http://localhost:3000/user/home");
            }
          });
      }
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
