const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://harsha2805:harshasinha2805@harsha-cluster.fkldryh.mongodb.net/fullstack?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  caseName: String,
  email: String,
  phone: String,
  doctor: String,
  totalPaid: Number,
  unpaid: Number,
});

const Employee = mongoose.model('Employee', employeeSchema);

// API Endpoints
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/employees', async (req, res) => {
  try {
    console.log('Received request to add employee:', req.body); // Log the incoming request data
    const { name, age, caseName, email, phone, doctor, totalPaid, unpaid } = req.body;
    const newEmployee = new Employee({ name, age, caseName, email, phone, doctor, totalPaid, unpaid });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/employees/:id', async (req, res) => {
  try {
    console.log('Received request to update employee:', req.body); // Log the incoming request data
    const { id } = req.params;
    const { name, age, caseName, email, phone, doctor, totalPaid, unpaid } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, age, caseName, email, phone, doctor, totalPaid, unpaid }, { new: true });
    res.json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
