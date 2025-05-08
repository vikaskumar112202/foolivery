// const path = require("path");
// const http = require("http");
// const fs = require("fs");

// const indexFile = path.join(__dirname, "./public/index.html");

// const server = http.createServer((req, res) => {
//   fs.readFile(indexFile, (err, data) => {
//     if (err) {
//       console.error("Error reading HTML file:", err);
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Internal Server Error");
//       return;
//     }
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// });

// server.listen(3000, () => {
//   console.log("server started");
// });

const express=require("express")
const dotenv=require("dotenv");
const connectDB=require("./utils/db")
const userRouter = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const cors=require("cors");

const app = express();
dotenv.config();
// this is my file
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());
app.use(cors());
//hello
app.use(userRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port: ${PORT}`);
});
