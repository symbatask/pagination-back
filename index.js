import express from "express";
import cors from "cors"
const PORT = process.env.PORT || 3001

let products = [
    {
      "artnumber": 1,
      "name": "STUDDED FAUX LEATHER JACKET",
      "brand": "Zara",
      "quantity": 3,
      "price": "200$",
      "stock": 1,
      "weight": "22g"
    },
    {
      "artnumber": 2,
      "name": "DOUBLE-FACED JACKET",
      "brand": "HM",
      "quantity": 2,
      "price": "1233$",
      "stock": 0,
      "weight": "522g"
    },
    {
      "artnumber": 3,
      "name": "EMBROIDERED VELVET JACKET",
      "brand": "LV",
      "quantity": 3,
      "price": "2005$",
      "stock": 1,
      "weight": "672g"
    },
    {
      "artnumber": 4,
      "name": "OVERSIZE OVERSHIRT WITH RHINESTONES",
      "brand": "Zara",
      "quantity": 4,
      "price": "7800$",
      "stock": 0,
      "weight": "564g"
    },
    {
      "artnumber": 5,
      "name": "ZW THE DENIM CAPE",
      "brand": "Zara",
      "quantity": 6,
      "price": "7800$",
      "stock": 0,
      "weight": "786g"
    },
    {
      "artnumber": 6,
      "name": "DOUBLE-FACED CROPPED JACKET",
      "brand": "LV",
      "quantity": 9,
      "price": "765$",
      "stock": 1,
      "weight": "675g"
    },
    {
      "artnumber": 7,
      "name": "WATER-REPELLENT QUILTED JACKET",
      "brand": "HM",
      "quantity": 7,
      "price": "457$",
      "stock": 0,
      "weight": "786g"
    },
    {
      "artnumber": 8,
      "name": "WATER-REPELLENT QUILTED JACKET",
      "brand": "Zara",
      "quantity": 5,
      "price": "786$",
      "stock": 1,
      "weight": "123g"
    },
    {
      "artnumber": 9,
      "name": "STUDDED DENIM JACKET",
      "brand": "Burberry",
      "quantity": 8,
      "price": "200$",
      "stock": 1,
      "weight": "322g"
    },
    {
      "artnumber": 10,
      "name": "TEXTURED OVERSHIRT",
      "brand": "Burberry",
      "quantity": 4,
      "price": "280$",
      "stock": 1,
      "weight": "622g"
    },
    {
      "artnumber": 11,
      "name": "LONGLINE CHECK OVERSHIRT",
      "brand": "Zara",
      "quantity": 3,
      "price": "1200$",
      "stock": 1,
      "weight": "456g"
    },
    {
      "artnumber": 12,
      "name": "FAUX SUEDE JACKET WITH BELT",
      "brand": "LV",
      "quantity": 1,
      "price": "5990$",
      "stock": 0,
      "weight": "897g"
      }  
  ]

const app = express();
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json(products);
});



app.listen(PORT, () => {
  console.log("App startted");
});
