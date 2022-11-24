require("dotenv").config();
let { PORT } = require("./const");
const app = require("./app");


// PORT
PORT = PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
