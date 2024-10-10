const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const membersRouter = require("./routes/members");
const trainingsRouter = require("./routes/trainings");
const competitionsRouter = require("./routes/competitions");
const financesRouter = require("./routes/finances");
const equipmentRouter = require("./routes/equipment");

app.use("/api/members", membersRouter);
app.use("/api/trainings", trainingsRouter);
app.use("/api/competitions", competitionsRouter);
app.use("/api/finances", financesRouter);
app.use("/api/equipment", equipmentRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
