import productRoutes from './routes/product.route.js';
import express from 'express';
import { connectDB } from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());



// API routes go here
app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === 'production'){
// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'frontend/dist')));
// Handle all other routes by serving the index.html
app.get('*', (req, res) => {
  console.log('Serving index.html'); // Debug log
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});
}


const PORT = process.env.PORT || 3000;

// Update the listen callback to include error handling
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  connectDB();
  console.log(`Server is running on port: ${PORT}`);
});