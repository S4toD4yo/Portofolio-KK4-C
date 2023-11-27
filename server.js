const Express = require("express");
const User = require("./router/students");
const App = Express();
const port = 5470;
const connectDB = require("./config/database");

App.use(Express.json());
App.use(Express.urlencoded({ extended: true }));

App.get("/", (req, res) => {
  res.send("Connected");
});

App.use(User);

connectDB();
App.use(Express.json());

App.listen(port, () => {
  console.log(`Connected To ${port}`);
});

//サトのプログラッム
