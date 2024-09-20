const express = require("express");
const app = express();
const session = require("express-session");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "etqrwtqrwet",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000000,
    },
  })
);
let id = 0;
app.post("/api/login", (req, res) => {
  const { name, password } = req.body;
  console.log();
  console.log("before setting user property on session", req.session);
  console.log();
  req.session.user = {
    id: id,
    name: name,
    password: password,
  };
  console.log("after setting user property on session", req.session);
  id++;
  res.status(200).send("Success !");
});
app.get("/api/get_user", (req, res) => {
  console.log(req.session.user);
  res.status(200).send(req.session.user);
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${4000}`);
});
