export interface Patient {
  id?: number;
  aadhaarNumber: string;
  patientName: string;
  dateOfBirth?: string;
  gender?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  bloodGroup?: string;
  emergencyContact?: string;
}

export interface MedicalProfessional {
  id?: number;
  email: string;
  fullName: string;
  specialization?: string;
  licenseNumber?: string;
  hospitalName?: string;
  phoneNumber?: string;
}

export interface MedicalReport {
  id?: number;
  patientId: number;
  reportType: string;
  reportDate: string;
  fileUrl?: string;
  fileName?: string;
  uploadedBy?: number;
  notes?: string;
}

export interface MedicalHistory {
  id?: number;
  patientId: number;
  condition: string;
  diagnosedDate?: string;
  status?: string;
  notes?: string;
}
