``markdown
‎# SSHB Platform – API Documentation
‎
‎This document outlines the RESTful API endpoints used in the Sokoto State Hisbah Board Surveillance & Intelligence Platform.
‎
‎---
‎
‎## 🔐 Authentication
‎
‎### POST /api/auth/login
‎Authenticates a user and returns a JWT token.
‎
‎**Request Body:**
‎```json
‎{ "email": "user@example.com", "password": "******"}
‎```
‎
‎*Response:*
‎```json
‎{ "token": "abc123", "role": "staff", "name": "Umar"}
‎```
‎
‎---
‎
‎*POST /api/auth/register*
‎Registers a new user.
‎
‎*Request Body:*
‎```json
‎{ "name": "Umar", "email": "user@example.com", "password": "******", "role": "staff"}
‎```
‎
‎---
‎
‎*📥 Reports*
‎
‎*POST /api/reports*
‎Submit a field report.
‎
‎*Request Body:*
‎```json
‎{ "userId": "123", "type": "suspicious_activity", "location": "Gawon Nama", "details": "Group gathering at night", "evidenceUrl": "https://..."}
‎```
‎
‎---
‎
‎*GET /api/reports?status=pending*
‎Retrieve all pending reports.
‎
‎---
‎
‎*🚨 Alerts*
‎
‎*POST /api/alerts*
‎Trigger an emergency alert.
‎
‎*Request Body:*
‎```json
‎{ "type": "riot", "location": "Sokoto Central", "description": "Crowd unrest", "triggeredBy": "Commander"}
‎```
‎
‎---
‎
‎*🕵️ Intelligence Logs*
‎
‎*POST /api/intel*
‎Submit spy mode log.
‎
‎*Request Body:*
‎```json
‎{ "agentId": "007", "location": "Market", "activity": "Illegal sale", "videoUrl": "https://..."}
‎```
‎
‎---
‎
‎*📡 AI Surveillance*
‎
‎*POST /api/ai/tag*
‎Submit video for AI tagging.
‎
‎*Request Body:*
‎```json
‎{ "videoUrl": "https://...", "detectedObjects": ["crowd", "fire"]}
‎```
‎
‎---
‎
‎*💬 Messaging*
‎
‎*POST /api/messages*
‎Send a secure message.
‎
‎*Request Body:*
‎```json
‎{ "senderId": "123", "recipientId": "456", "message": "Proceed to location now."}
‎```
‎
‎---
‎
‎*🧾 Notes*
‎- All endpoints require JWT authentication.
‎- Use HTTPS for secure transmission.
‎```
