const mongoose = require('mongoose');
require('dotenv').config({path: './server/.env'});

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    const volunteers = await mongoose.connection.collection('volunteers').find().toArray();
    console.log(JSON.stringify(volunteers, null, 2));
    process.exit(0);
  })
  .catch(console.error);
