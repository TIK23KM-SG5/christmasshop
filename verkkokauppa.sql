DROP TABLE IF EXISTS order_line;
DROP TABLE IF EXISTS customer_order;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS product_category;

CREATE TABLE product_category(
    category_name VARCHAR(255) NOT NULL PRIMARY KEY,
    category_description VARCHAR(500)
);

CREATE TABLE product(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2),
    image_url VARCHAR(255),
    category VARCHAR(255),
    FOREIGN KEY (category) REFERENCES product_category(category_name)
);

CREATE TABLE customer(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    pw VARCHAR(255)
);

CREATE TABLE customer_order(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_date DATETIME NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE order_line(
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES customer_order(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);


INSERT INTO product_category VALUES 
('Trees', 'Christmas trees'),
('Costumes', 'Different kind of christmas costumes'),
('Decor', 'Christmas gift decorations')



INSERT INTO product (product_name, price, image_url, category) VALUES 
('Green Christmas Tree', '49.90', NULL, 'Trees'),('Red Christmas Tree', '49.90', NULL, 'Trees'), ('White Christmas Tree', '49.90', NULL, 'Trees'),
('Classic Santa costume', '29.90', NULL, 'Costumes'), ('Grinch Santa costume', '29.90', NULL, 'Costumes'), ('Christmas Elf costume', '29.90', NULL, 'Costumes'), 
('Wrapping paper', '4.90', NULL, 'Decor'),('Wrapping string', '4.90', NULL, 'Decor'), ('Gift bag', '4.90', NULL, 'Decor')

