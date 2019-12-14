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
  let details = {};
  switch (row) {
    case "A":
    case "B":
    case "C":
    case "D": {
      details = {
        type: "Standard",
        price: "60.000đ",
        price_float: 60000,
        currency: "đ"
      };
      break;
    }
    case "E":
    case "F":
    case "G":
    case "H":
    case "J":
    case "K": {
      details = {
        type: "VIP",
        price: "90.000đ",
        price_float: 90000,
        currency: "đ"
      };
      break;
    }
    default: {
      details = {
        type: "Deluxe",
        price: "110.000đ",
        price_float: 110000,
        currency: "đ"
      };
      break;
    }
  }
  return [...Array(12)].map((item, index) => ({
    id: uuidv4(),
    row,
    booked: false,
    user_id: "",
    seat_num: index + 1,
    status: randomValueInArray(["unavailable", "normal", "area"]),
    details
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
      sub: "2D Vietnam sub",
      cinema: "CGV Cresent Mall",
      time_start: (new Date().getTime() + 60 * 60 * 1000) / 1000,
      time_end: (new Date().getTime() + 3 * 60 * 60 * 1000) / 1000
    }
  });
});

app.get("/content/:id/tickets", (req, res) => {
  // const id = req.params.id;
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L"];
  let data = {};
  rows.forEach(row => {
    data[row] = [...generateTickets(row)];
  });
  return res.json({
    status: 1,
    data: { ...data }
  });
});

app.get("/profile", (req, res) => {
  res.json({
    status: 1,
    data: { id: uuidv4(), full_name: "Jayce Thai" }
  });
});

app.listen(ENVS.SERVER_PORT, () =>
  console.log(`Server start at port: ${ENVS.SERVER_PORT}`)
);
