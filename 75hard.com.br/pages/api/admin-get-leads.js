import { db } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'GET') {
        try {
            const query = req.query;
            const { token } = query;

            if(token==='1c9016dd-d561-41b6-862d-4499fc200da1'){
                const client = await db.connect();  
            
                const leads = await client.sql`SELECT * FROM Leads;`;
                return res.status(200).json({leads});
            } else {
                throw new Error('Invalid authentication');
            }
        } catch (error) {
            const message = error.message;
            return res.status(500).json({ message });
        }    
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
