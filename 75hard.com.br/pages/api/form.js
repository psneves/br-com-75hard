import { db } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
    const client = await db.connect();  
    const formData = {};

    const regex = /name="([^"]+)"[\r\n\r\n]+([^"\n]+)[\r\n]+/g;
    let match;
    while ((match = regex.exec(req.body)) !== null) {
      const [, fieldName, fieldValue] = match;
      //Save fieldValue removing breaklines
      formData[fieldName] = fieldValue.replace(/(\r\n|\n|\r)/gm, "");    
    }

    // Access the form data
    const { name, lastname, email, phone } = formData;
      
      await client.sql`CREATE TABLE IF NOT EXISTS Leads ( Name varchar(255), LastName varchar(255), Email varchar(255), Phone varchar(255), CreatedAt timestamp );`;
      await client.sql`INSERT INTO Leads (Name, LastName, Email, Phone, CreatedAt) VALUES (${name}, ${lastname}, ${email}, ${phone}, CURRENT_TIMESTAMP);`;

    } catch (error) {
      return res.status(500).json({ error });
    }
    return res.status(200).json('OK');
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
