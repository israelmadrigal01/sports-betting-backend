const express = require('express');
const app = express();
const PORT = 3000;

// 👇 Make sure this line is here
const picksRoutes = require('./routes/picks');

// 👇 Add middleware to use the route
app.use('/api/picks', picksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
