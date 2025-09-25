```javascript
‎// server.js
‎
‎const express = require('express');
‎const cors = require('cors');
‎const multer = require('multer');
‎const jwt = require('jsonwebtoken');
‎
‎const app = express();
‎app.use(cors());
‎app.use(express.json());
‎
‎const upload = multer({ dest: 'uploads/'});
‎const SECRET_KEY = 'yourSecretKey';
‎
‎// Dummy login route
‎app.post('/api/auth/login', (req, res) => {
‎  const { email, password} = req.body;
‎  // Validate user (mock)
‎  const token = jwt.sign({ email, role: 'staff'}, SECRET_KEY, { expiresIn: '1h'});
‎  res.json({ token, role: 'staff', name: 'Umar'});
‎});
‎
‎// Submit report
‎app.post('/api/reports', upload.single('evidence'), (req, res) => {
‎  const { location, details} = req.body;
‎  const evidenceFile = req.file;
‎  // Save report logic here
‎  res.json({ message: 'Report submitted successfully', file: evidenceFile.filename});
‎});
‎
‎// AI tagging endpoint (mock)
‎app.post('/api/ai/tag', (req, res) => {
‎  const { videoUrl} = req.body;
‎  // Call Python script or AI service here
‎  res.json({ detectedObjects: ['crowd', 'fire']});
‎});
‎
‎app.listen(3000, () => {
‎  console.log('Server running on http://localhost:3000');
‎});
‎```
‎
‎---
‎
‎*✅ Next Steps*
‎
‎- 🔐 Add JWT middleware for protected routes
‎- 🧪 Connect to database (PostgreSQL/MySQL)
‎- 📡 Integrate AI module via Python subprocess or microservice
‎- 🖼️ Add frontend logic in `app.js` to submit reports and handle responses
