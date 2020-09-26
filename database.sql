CREATE DATABASE stock;

CREATE TABLE stock_item (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255),
    item_quantity INT,
    item_value REAL
);