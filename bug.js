```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This line will cause an error because the 'req' object does not have a body property
  // when using the GET method. It only has a body property for POST requests.
  console.log(req.body);
  res.status(200).json({ name: 'John Doe' });
}
```