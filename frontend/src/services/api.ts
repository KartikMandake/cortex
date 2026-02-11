const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Patient APIs
  patientLogin: async (aadhaarNumber: string, patientName: string) => {
    const response = await fetch(`${API_URL}/patients/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aadhaarNumber, patientName })
    });
    return response.json();
  },

  // Medical Professional APIs
  medicalLogin: async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/medical/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  },

  // Report APIs
  uploadReport: async (formData: FormData) => {
    const response = await fetch(`${API_URL}/reports/upload`, {
      method: 'POST',
      body: formData
    });
    return response.json();
  },

  getPatientReports: async (aadhaar: string) => {
    const response = await fetch(`${API_URL}/reports/patient/${aadhaar}`);
    return response.json();
  }
};
