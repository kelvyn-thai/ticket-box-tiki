const express = require("express");
const app = express();
const path = require("path");
const ENVS = require("dotenv").config().parsed;
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid/v4");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(path.resolve(__dirname, "../public")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, "logo.png");
  }
});
const upload = multer({ storage: storage });

const randomValueInArray = arr => arr[Math.floor(Math.random() * arr.length)];

const generateTickets = (row = "") => {
  return [...Array(12)].map((item, index) => ({
    id: uuidv4(),
    row,
    booked: false,
    user_id: "",
    seat_num: index + 1,
    details: randomValueInArray([
      { type: "standard", price: "60.000đ" },
      { type: "VIP", price: "90.000đ" },
      { type: "Deluxe", price: "110.000đ" }
    ])
  }));
};

app.use(cors());

app.get("/content/:id", (req, res) => {
  // const id = req.params.id;
  return res.json({
    status: 1,
    data: {
      id: 1,
      name: "Spider-man: Người nhện xa nhà",
      age_limit: "C13",
      type: "2D",
      sub: "Viet name sub"
    }
  });
});

app.get("/content/:id/tickets", (req, res) => {
  // const id = req.params.id;
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K"];
  let data = [];
  rows.forEach(row => {
    data.push(generateTickets(row));
  });
  return res.json({
    status: 1,
    data: [...data]
  });
});

app.listen(ENVS.SERVER_PORT, () =>
  console.log(`Server start at port: ${ENVS.SERVER_PORT}`)
);
