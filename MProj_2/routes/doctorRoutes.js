import express from "express";
import doctors from "../model/users/doctorSchema.js";

const router = express.Router();

// Define a route to handle adding a new product
router.post("/add", async (req, res) => {
    try {
        // Create a new product based on the request body
        const newProduct = new doctors(req.body);

        // Save the new product to the database
        await newProduct.save();

        // Respond with a success message
        res.status(201).json({ message: "Doctor added successfully" });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: "An error occurred" });
    }
});


router.put("/update/:id", async (req, res) => {
    try {
        // Create a new product based on the request body
        const DoctorId = req.params.id;
        const doctor = await doctors.findById(id);
        if (!doctor) {
            res.status(404).json({ message: "Doctor not found" });
            return;
        }
        doctor.set(req.body);
        await doctor.save();
        res.status(404).json({ message: "Doctor updated successfully" });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: "An error occurred" });
    }
});


// Define a route to get product information by name, brand, or category
router.get("/search", async (req, res) => {
    try {
        // Extract the query parameters from the URL
        const { name, brand, category, price } = req.query;

        // Define a query object to filter the products
        const query = {};

        if (name) {
            query.name = name;
        }

        if (brand) {
            query.brand = brand;
        }

        if (category) {
            query.category = category;
        }

        if (price) {
            query.price = price;
        }

        // Use the 'electronics' model to find products based on the query
        const products = await electronics.find(query);

        if (products.length === 0) {
            // If no products match the query, respond with a not found message
            res
                .status(404)
                .json({ message: "No products found for the given criteria" });
        } else {
            // If products are found, respond with the matching products
            res.status(200).json({ products });
        }
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: "An error occurred" });
    }
});

//http://localhost:3000/products/search
//http://localhost:3000/products/search?name=Product_Name
//http://localhost:3000/products/search?category=Category_Name
//http://localhost:3000/products/search?category=Category_Name

// Update product by ID
router.put("/update/:id", async (req, res) => {
    try {
        // Extract the product ID from the URL parameter
        const productId = req.params.id;

        // Find the product by its ID
        const product = await electronics.findById(productId);

        if (!product) {
            // If the product is not found, respond with a not found message
            res.status(404).json({ message: "Product not found" });
            return;
        }

        // Update all fields of the product based on the request body
        product.set(req.body);

        // Save the updated product to the database
        await product.save();

        // Respond with a success message
        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: "An error occurred" });
    }
});

// DELETE a product by ID
router.delete("/delete/:_id", async (req, res) => {
    try {
        const productId = req.params._id;

        // Find and delete the product by its ID
        const deletedProduct = await electronics.findOneAndRemove({
            _id: productId,
        });

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res
            .status(200)
            .json({ message: "Product deleted successfully" + deletedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// DELETE a product by name
router.delete("/deleteByName/:name", async (req, res) => {
    try {
        const productName = req.params.name;

        // Find and delete the product by its name
        const deletedProduct = await electronics.findOneAndRemove({
            title: productName,
        });

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" + deletedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});






export default router;
