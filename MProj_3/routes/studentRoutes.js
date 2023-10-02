import express, { response } from "express";
import students from "../model/users/studentSchema.js"; // Import the 'items1' model

const router = express.Router();

// Define a route to handle adding a new product
router.post("/register", async (req, res) => {
    try {
        // Create a new product based on the request body
        const newStudent = new students(req.body);

        // Save the new product to the database
        await newStudent.save();

        // Respond with a success message
        res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: "An error occurred" });
    }
});

// router.get("/login",async(req,res)=>{
//     try{
//         const response = await students.find();
//         res.send(201).json({message:"Logged in"+response});

//     }
//     catch(error){
//         res.status(500).json({error:"Error Occured"});

//     }
// })



// Define a route to get product information by name, brand, or category
router.get("/search", async (req, res) => {
    try {
        // Extract the query parameters from the URL
        const { name, roll_no, caste, religion } = req.query;

        // Define a query object to filter the products
        const query = {};

        if (name) {
            query.name = name;
        }

        if (roll_no) {
            query.roll_no = roll_no;
        }

        if (caste) {
            query.caste = caste;
        }

        if (religion) {
            query.religion = religion;
        }

        // Use the 'electronics' model to find products based on the query
        const student = await students.find(query);

        if (student.length === 0) {
            // If no products match the query, respond with a not found message
            res
                .status(404)
                .json({ message: "No Student found for the given criteria" });
        } else {
            // If products are found, respond with the matching products
            res.status(200).json({ student });
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
router.put("/update/:studentId", async (req, res) => {
    try {
        // Extract the product ID from the URL parameter
        const studentId = req.params.studentId;

        // Find the product by its ID
        const student = await students.findById(studentId);

        if (!student) {
            // If the product is not found, respond with a not found message
            res.status(404).json({ message: "student not found" });
            return;
        }

        // Update all fields of the product based on the request body
        student.set(req.body);

        // Save the updated product to the database
        await student.save();

        // Respond with a success message
        res.status(200).json({ message: "student updated successfully" });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: "An error occurred" });
    }
});

// DELETE a product by ID
router.delete("/delete/:_id", async (req, res) => {
    try {
        const studentId = req.params._id;

        // Find and delete the product by its ID
        const deletedStudent = await students.findOneAndRemove({
            _id: studentId,
        });

        if (!deletedStudent) {
            return res.status(404).json({ message: "student not found" });
        }

        res.status(200)
        res.json({ message: "student deleted successfully" + deletedStudent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// DELETE a product by name
router.delete("/deleteByName/:student_name", async (req, res) => {
    try {
        const studentName = req.params.student_name;

        // Find and delete the product by its name
        const deletedStudent = await students.findOneAndRemove({
            title: studentName,
        });

        if (!deletedStudent) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" + deletedProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});







export default router;