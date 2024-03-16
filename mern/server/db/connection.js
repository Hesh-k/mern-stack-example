// import { MongoClient, ServerApiVersion } from "mongodb";

// const URI = process.env.ATLAS_URI || "";
// const client = new MongoClient(URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });




// try {
//   // Connect the client to the server
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   await client.db("admin").command({ ping: 1 });
//   console.log("Pinged your deployment. You successfully connected to MongoDB!");
// } catch (err) {
//   console.error(err);
// }

// let db = client.db("employees");

// export default db;



import { MongoClient } from "mongodb";

// Define the URI for connecting to your local MongoDB database
const URI = "mongodb://localhost:27017/employees"; // Modify the database name as needed

// Create a new MongoClient instance with the local URI
const client = new MongoClient(URI);

// Use try-catch block to handle potential errors
try {
  // Connect the client to the local MongoDB server
  await client.connect();
  console.log("Connected to the local MongoDB database!");
} catch (err) {
  console.error(err);
}

// Set up a reference to the "employees" database
let db = client.db("employees");

// Export the database connection for use in other parts of the application
export default db;
