-- Sample Patients
INSERT INTO patients (aadhaar_number, patient_name, date_of_birth, gender, phone_number, email, blood_group) VALUES
('123456789012', 'John Doe', '1990-05-15', 'Male', '9876543210', 'john.doe@email.com', 'O+'),
('234567890123', 'Jane Smith', '1985-08-22', 'Female', '9876543211', 'jane.smith@email.com', 'A+');

-- Sample Medical Professionals (password: 'password123' - hashed)
INSERT INTO medical_professionals (email, password_hash, full_name, specialization, license_number, hospital_name) VALUES
('dr.sharma@hospital.com', '$2b$10$example', 'Dr. Rajesh Sharma', 'Cardiology', 'MED12345', 'City Hospital'),
('dr.patel@hospital.com', '$2b$10$example', 'Dr. Priya Patel', 'General Medicine', 'MED12346', 'City Hospital');
