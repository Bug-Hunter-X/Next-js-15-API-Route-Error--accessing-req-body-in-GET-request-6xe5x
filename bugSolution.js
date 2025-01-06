```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Check the request method before accessing req.body
  if (req.method === 'POST') {
    console.log(req.body);
  } else {
    console.log('This is a GET request')
  }
  res.status(200).json({ name: 'John Doe' });
}
```