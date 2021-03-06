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
        const item = req.body;
        const newItem = await pool.query(
            `INSERT INTO stock_item (item_name,item_quantity, item_value) VALUES(${item["item_name"]},${item["item_quantity"]},${item["item_value"]}) RETURNING *`
            )
        console.log(req.body);
        res.json(newItem.rows);
    } catch (error) {
        console.log(error.message);
    }
});
// get all itens
app.get("/stock",async(req,res) =>{
    try {
        const allItens = await pool.query("SELECT * FROM stock_item")
        res.json(allItens.rows);
    } catch (error) {
        console.log(error.message);
    }
});

// get single item
app.get("/stock/:id",async(req,res) =>{
    try {
        const {id} = req.params;
        const item = await pool.query(`SELECT * FROM stock_item WHERE item_id = ${id}`)
        res.json(item.rows);
    } catch (error) {
        console.log(error.message);
    }
});
// update item
app.put("/stock/:id",async(req,res) =>{
    try {
        const {id} = req.params;
        const item = req.body;
        
        let sql = "UPDATE stock_item ";
        const iKeys = Object.keys(item);
        sql += iKeys.length && 'SET ' || '';
        sql += iKeys.map(key => typeof item[key] === 'string' ? ` ${key} = '${item[key]}'` : ` ${key} = ${item[key]}`).join(', ');
        sql += ` WHERE item_id = ${id}`;
        const upItem = await pool.query(sql)
        res.json("Item Updated");

    } catch (error) {
        console.log(error.message);
    }
});
// delete item
app.delete("/stock/:id",async(req,res) =>{
    try {
        const {id} = req.params;
        const deleteItem = await pool.query(`DELETE FROM stock_item WHERE item_id = ${id}`)
        res.json("Deleted item");
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(5000, () => {
    console.log("server started on port 5000")
})