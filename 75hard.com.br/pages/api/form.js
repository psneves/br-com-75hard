export default function handler(req, res) {
  if (req.method === 'POST') {
    const formData = {};

    const regex = /name="([^"]+)"[\r\n\r\n]+([^"\n]+)[\r\n]+/g;
    let match;
    while ((match = regex.exec(req.body)) !== null) {
      const [, fieldName, fieldValue] = match;
      formData[fieldName] = fieldValue;
    }

    // Access the form data
    const { name, lastname, email, phone } = formData;

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!name || !lastname) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ error: 'First or last name not found' });
    }

    // Found the name.
    // Sends a HTTP success code
    return res.status(200).json('OK');
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
