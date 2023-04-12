const app = require("./app");

server = app.listen(8082, () => {
  console.log("listing to port", 8082);
});
