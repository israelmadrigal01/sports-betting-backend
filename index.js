// 1. Load environment variables
require('dotenv').config();

// 2. Import mongoose and express
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Connect to MongoDB (uses your MONGODB_URI from .env)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// 4. Your existing routes
const picksRoutes = require('./routes/picks');
app.use('/api/picks', picksRoutes);

// 5. Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Trigger deployment
