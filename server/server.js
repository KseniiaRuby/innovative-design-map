require("dotenv").config();
const app = require("./app");
require("./model/db");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
