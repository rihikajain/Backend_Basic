// import mongoose from "mongoose";
// import items1 from "./userSchema.js";
// import connectDB from "../../connection/db.js";

// {
// "name" :"Riks",
// "roll_no" : 2,
// "address" :"Agra",
// "parent_name" :"ABC",
// "caste" : "general",
// "nationality" : "indian",
// "religion" : "jainism"
// }










// const createDocument = async () => {
//     try {
//         // Connect to the database
//         await connectDB();

//         const newItem = new items1({
//             id: 31,
//             title: "iPhone 99",
//             description: "An apple mobile which is in space",
//             price: 54990,
//             discountPercentage: 88.96,
//             rating: 9.69,
//             stock: 9,
//             brand: "Apple",
//             category: "smartphones",
//             thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//             images: [
//                 "https://i.dummyjson.com/data/products/1/1.jpg",
//                 "https://i.dummyjson.com/data/products/1/2.jpg",
//                 "https://i.dummyjson.com/data/products/1/3.jpg",
//                 "https://i.dummyjson.com/data/products/1/4.jpg",
//                 "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//             ],
//         });

//         const result = await newItem.save();
//         console.log("Document saved successfully:", result);
//     } catch (error) {
//         console.error("Error occurred:", error);
//     } finally {
//         // Close the database connection
//         mongoose.connection.close();
//     }
// };
// createDocument();