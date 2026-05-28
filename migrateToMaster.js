const mongoose = require('mongoose');
require('dotenv').config({path: './server/.env'});

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    const admin = await mongoose.connection.collection('admins').updateOne(
      { email: 'admin@shecanfoundation.ngo' },
      { $set: { role: 'master' } }
    );
    console.log(`Matched ${admin.matchedCount} document(s) and modified ${admin.modifiedCount} document(s)`);
    
    // Check if another admin exists, if not maybe log it
    const all = await mongoose.connection.collection('admins').find().toArray();
    console.log('All admins:', all);
    
    process.exit(0);
  })
  .catch(console.error);
