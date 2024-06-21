// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);
const PORT=4000;

app.listen(PORT,()=>(
  console.log(`server is running on port ${PORT}`)
));