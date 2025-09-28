js
‎// Request to backend
‎fetch('https://sshb-backend.onrender.com/api/status')
‎.then(res => res.json())
‎.then(data => console.log(data));
‎
‎// Request to AI module
‎fetch('https://sshb-ai.onrender.com/api/tag', {
‎  method: 'POST',
‎  headers: { 'Content-Type': 'application/json'},
‎  body: JSON.stringify({ text: 'SSH connection established'})
‎})
‎.then(res => res.json())
‎.then(data => console.log(data));
‎```
