import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [caseName, setCaseName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [doctor, setDoctor] = useState("");
  const [totalPaid, setTotalPaid] = useState("");
  const [unpaid, setUnpaid] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employees");
      setEmployees(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching employees:", error.message);
      setError("Error fetching employees: " + error.message);
      setIsLoading(false);
    }
  };

  const addOrUpdateEmployee = async (e) => {
    e.preventDefault();
    try {
      const employeeData = { name, age, caseName, email, phone, doctor, totalPaid, unpaid };
      if (editingEmployee) {
        // Update employee
        const response = await axios.put(`http://localhost:8000/employees/${editingEmployee._id}`, employeeData);
        setEmployees(employees.map(emp => emp._id === editingEmployee._id ? response.data : emp));
        setEditingEmployee(null);
      } else {
        // Add employee
        const response = await axios.post("http://localhost:8000/employees", employeeData);
        setEmployees([...employees, response.data]);
      }
      setName("");
      setAge("");
      setCaseName("");
      setEmail("");
      setPhone("");
      setDoctor("");
      setTotalPaid("");
      setUnpaid("");
      setError("");
    } catch (error) {
      console.error("Error adding/updating employee:", error.message);
      setError("Error adding/updating employee: " + error.message);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error.message);
      setError("Error deleting employee: " + error.message);
    }
  };

  const startEdit = (employee) => {
    setEditingEmployee(employee);
    setName(employee.name);
    setAge(employee.age);
    setCaseName(employee.caseName);
    setEmail(employee.email);
    setPhone(employee.phone);
    setDoctor(employee.doctor);
    setTotalPaid(employee.totalPaid);
    setUnpaid(employee.unpaid);
  };

  return (
    <div className="card bg-dark text-white">
      <img className={`card-img ${styles.imageMain}`} src="../bgg.avif" alt="Card image" />
      <div className="card-img-overlay">
      <div className={styles.container}>
      <h1 className={styles.header}>Clients Management System</h1>
      <h2>{editingEmployee ? "Edit Clients" : "Add Clients"}</h2>
      <form onSubmit={addOrUpdateEmployee} className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Medical Issue"
          value={caseName}
          onChange={(e) => setCaseName(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={styles.inputField}
        />
        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
          className={styles.selectField}
        >
          <option value="">Select Doctor</option>
          <option value="Dr. John Doe">Dr. John Doe</option>
          <option value="Dr. Jane Smith">Dr. Jane Smith</option>
          <option value="Dr. Michael Johnson">Dr. Michael Johnson</option>
          <option value="Dr. Emily Davis">Dr. Emily Davis</option>
          <option value="Dr. Robert Brown">Dr. Robert Brown</option>
        </select>
        <input
          type="number"
          placeholder="Total Payment"
          value={totalPaid}
          onChange={(e) => setTotalPaid(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Amount Unpaid"
          value={unpaid}
          onChange={(e) => setUnpaid(e.target.value)}
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.button} disabled={!name || !age || !caseName || !email || !phone || !doctor || !totalPaid || !unpaid}>
          {editingEmployee ? "Update Client" : "Add Client"}
        </button>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}

      <h2>Clients</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.employeeList}>
          {employees.map((employee) => (
            <li key={employee._id} className={styles.employeeItem}>
              <div className={styles.employeeDetails}>
                {employee.name}, {employee.age}, {employee.caseName}, {employee.email}, {employee.phone}, {employee.doctor}, {employee.totalPaid}, {employee.unpaid}
              </div>
              <div className={styles.actionButtons}>
                <button onClick={() => startEdit(employee)} className={styles.button}>
                  Edit
                </button>
                <button onClick={() => deleteEmployee(employee._id)} className={styles.button}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
      </div>
    </div>    
  );
}

export default Home;


