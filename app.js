import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url'; // Import this utility
import passwordRoutes  from "./Routes/passwordRoutes.js";

const app = express();
const port = 3000;


// Middleware
app.use(express.json()); // Parses incoming JSON requests
// Middleware for parsing form data
app.use(bodyParser.urlencoded({extended: true}));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = path.dirname(__filename); // Extract the directory

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Use the password routes
app.use('/', passwordRoutes);


// Start the server
app.listen(3000, () => {
    console.log(`Server starting at port ${port}`);
})