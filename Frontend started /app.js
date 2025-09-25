‎```javascript
‎document.getElementById('reportForm').addEventListener('submit', async (e) => {
‎  e.preventDefault();
‎
‎  const location = document.getElementById('location').value;
‎  const details = document.getElementById('details').value;
‎  const evidence = document.getElementById('evidence').files[0];
‎
‎  const formData = new FormData();
‎  formData.append('location', location);
‎  formData.append('details', details);
‎  formData.append('evidence', evidence);
‎
‎  try {
‎    const res = await fetch('http://localhost:3000/api/reports', {
‎      method: 'POST',
‎      body: formData
‎});
‎    const data = await res.json();
‎    alert('Report submitted: ' + data.message);
‎} catch (err) {
‎    alert('Error submitting report');
‎}
‎});
‎```
