const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  // const data = { message: "hello data" };
  res.render("index");
});
/*app.post("/login", async (req, res, next) => {
  try {
    let { username, password } = req.body;
    // console.log(username);
    // console.log(password);
    res.status(200).json({
      username,
      password,
    });
  } catch (error) {
    next(error);
  }
});*/

const users = [{ username: "nikhil", password: "nikhil1" }];
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res, next) => {
  try {
    let { username, password } = req.body;
    console.log(username);
    console.log(password);
    let user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) res.status(200).json("valid");
    res.status(200).json("invalid");
    console.log(user);
  } catch (error) {
    next(error);
  }
});

app.listen(3001, () => {
  console.log("server runnig on the port 3001");
});
