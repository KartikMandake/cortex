-- Patients Table
CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  aadhaar_number VARCHAR(12) UNIQUE NOT NULL,
  patient_name VARCHAR(255) NOT NULL,
  date_of_birth DATE,
  gender VARCHAR(10),
  phone_number VARCHAR(15),
  email VARCHAR(255),
  address TEXT,
  blood_group VARCHAR(5),
  emergency_contact VARCHAR(15),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Medical Professionals Table
CREATE TABLE medical_professionals (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  specialization VARCHAR(100),
  license_number VARCHAR(50) UNIQUE,
  hospital_name VARCHAR(255),
  phone_number VARCHAR(15),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Medical Reports Table
CREATE TABLE medical_reports (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  report_type VARCHAR(100) NOT NULL,
  report_date DATE NOT NULL,
  file_url TEXT,
  file_name VARCHAR(255),
  uploaded_by INTEGER REFERENCES medical_professionals(id),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Medical History Table
CREATE TABLE medical_history (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  condition VARCHAR(255) NOT NULL,
  diagnosed_date DATE,
  status VARCHAR(50),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Emergency Access Logs Table
CREATE TABLE emergency_access_logs (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  accessed_by INTEGER REFERENCES medical_professionals(id),
  access_reason TEXT NOT NULL,
  access_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better performance
CREATE INDEX idx_patients_aadhaar ON patients(aadhaar_number);
CREATE INDEX idx_medical_email ON medical_professionals(email);
CREATE INDEX idx_reports_patient ON medical_reports(patient_id);
CREATE INDEX idx_history_patient ON medical_history(patient_id);
