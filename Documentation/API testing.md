‎```markdown
‎# 🧪 API Testing Guide – SSHB Platform
‎
‎## 🎯 Purpose
‎
‎This guide outlines how to test the core API endpoints of the SSHB Surveillance Platform using **Postman** and **Pynt**. It ensures that all routes are functioning correctly, securely, and reliably across different scenarios.
‎
‎---
‎
‎## 🔐 Authentication
‎
‎Most endpoints require a valid JWT token. To obtain one:
‎
‎### 🔸 Login Request
‎```http
‎POST /api/auth/login
‎Content-Type: application/json
‎
‎{
‎  "email": "agent@example.com",
‎  "password": "yourPassword"
‎}
‎```
‎
‎*🔸 Response*
‎```json
‎{
‎  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
‎  "role": "staff",
‎  "name": "Umar"
‎}
‎```
‎
‎Use this token in the `Authorization` header for all protected routes:
‎```
‎Authorization: Bearer <token>
‎```
‎
‎---
‎
‎*📋 Endpoints to Test*
‎
‎*1. Submit Report*
‎```http
‎POST /api/reports
‎Content-Type: multipart/form-data
‎
‎Form Data:
‎- location: "Gawon Nama"
‎- details: "Group gathering at night"
‎- evidence: <upload file>
‎```
‎
‎*2. AI Tagging*
‎```http
‎POST /api/ai/tag
‎Content-Type: application/json
‎
‎{
‎  "videoUrl": "https://example.com/video.mp4"
‎}
‎```
‎
‎*3. Get Reports (future)*
‎```http
‎GET /api/reports
‎Headers:
‎Authorization: Bearer <token>
‎```
‎
‎---
‎
‎*🧪 Using Postman*
‎
‎1. Create a new *Collection*: `SSHB API Tests`
‎2. Add each endpoint as a separate request
‎3. Use *Environment Variables* for token and base URL
‎4. Add *Tests Tab* to validate responses:
‎```javascript
‎pm.test("Status code is 200", function () {
‎  pm.response.to.have.status(200);
‎});
‎```
‎5. Save and share collection with team
‎
‎---
‎
‎*🔐 Using Pynt (Optional)*
‎
‎Pynt is a security-focused API testing tool that integrates with Postman.
‎
‎*Steps:*
‎1. Export Postman collection as JSON
‎2. Run Pynt CLI:
‎```bash
‎pynt run --collection sshb-api.json
‎```
‎3. Review security report:
‎- Broken authentication
‎- Injection vulnerabilities
‎- Rate limiting
‎
‎> Learn more at [Pynt’s integration guide](https://docs.pynt.io/documentation/security-testing-integrations/pynt-for-postman)⁽¹⁾
‎
‎---
‎
‎*✅ Best Practices*
‎
‎- Test with valid and invalid data
‎- Check for proper error messages
‎- Validate response structure and status codes
‎- Ensure protected routes reject unauthorized access
‎- Document edge cases and bug reports
‎
‎---
‎
‎*📬 Contact*
‎
‎For questions or issues, open a GitHub issue or contact the platform maintainer.
‎
‎```
