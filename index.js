const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

// middleware
app.use(cors());
app.use(express.json());//req.body

// routes

// create item
app.post("/stock",async(req,res) =>{
    try {
        const {item} = req.body;
        const newItem = await pool.query(
            "INSERT INTO stock_item (item_name,item_quantity, item value) VALUES($1,$2,$3)",
            [item["name"],item["quantity"],item["value"]]
            )
        console.log(req.body);
        res.json(newItem);
    } catch (error) {
        console.log(error.message);
    }
});
// get all itens

// get single item

// update item

// delete item

app.listen(5000, () => {
    console.log("server started on port 5000")
})