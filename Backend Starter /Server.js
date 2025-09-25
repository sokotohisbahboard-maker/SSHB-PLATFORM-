‎```javascript
‎app.post('/api/reports', upload.single('evidence'), (req, res) => {
‎  const { location, details} = req.body;
‎  const evidenceFile = req.file;
‎
‎  // Save to DB or log
‎  console.log('Report received:', location, details, evidenceFile.filename);
‎
‎  res.json({ message: 'Report submitted successfully', file: evidenceFile.filename});
‎});
‎```
‎
‎> ✅ *Validation*: Add frontend checks (e.g. required fields) and backend checks (e.g. file type, size) for security.
‎
‎---
‎
‎*🧪 2. API Testing (Using Postman or Pynt)*
‎
‎*🔹 Recommended Tools:*
‎- *Postman*: For manual and automated testing
‎- *Pynt*: For security-focused API testing integrated with CI/CD⁽¹⁾
‎
‎*🔹 Best Practices:*
‎- Test all endpoints: `/api/auth/login`, `/api/reports`, `/api/ai/tag`
‎- Validate:
‎  - ✅ Status codes (200, 400, 401, 500)
‎  - ✅ Response structure
‎  - ✅ Authentication (JWT headers)
‎  - ✅ Edge cases (missing fields, invalid data)
