const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Wow!! I'm so exited I am learning node for about 1 hour");
});

const users = [
  { id: 0, name: "Tanvir", email: "tanvir@gmail.com", phone: "555-1234" },
  { id: 1, name: "Jubair", email: "tanvir@gmail.com", phone: "555-1234" },
  { id: 2, name: "Masud", email: "tanvir@gmail.com", phone: "555-1234" },
  { id: 3, name: "Shihab", email: "tanvir@gmail.com", phone: "555-1234" },
  { id: 4, name: "Ataur", email: "tanvir@gmail.com", phone: "555-1234" },
];

app.get("/users", (req, res) => {
  // use query parameter
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = user.length;
  users.push(newUser);

  console.log("Hitting The Post", req.body);
  //   res.send(JSON.stringify(newUser));
  res.json(newUser);
});

//dynamic API
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "orange", "coconut", "apple"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Mango manei fazli!!");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
