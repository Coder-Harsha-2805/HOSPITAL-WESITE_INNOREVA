const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://harsha2805:harshasinha2805@harsha-cluster.fkldryh.mongodb.net/fullstack?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  mongoose.connection.close(); // Close the connection after successful connection
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
