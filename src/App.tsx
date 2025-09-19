import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { PatientLoginPage } from './components/PatientLoginPage';
import { MedicalLoginPage } from './components/MedicalLoginPage';
import { PatientDashboard as Dashboard } from './components/Dashboard';
import { MedicalDashboard } from './components/MedicalDashboard';
import { ReportUploadPage } from './components/ReportUploadPage';
import { MedicalHistoryPage } from './components/MedicalHistoryPage';
import { EmergencyAccessPage } from './components/EmergencyAccessPage';
import { Toaster } from './components/ui/sonner';

type Page = 'landing' | 'patient-login' | 'medical-login' | 'patient-dashboard' | 'medical-dashboard' | 'upload' | 'history' | 'emergency' | 'settings' | 'medical-info' | 'update-history' | 'patients';
type UserType = 'patient' | 'medical' | null;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userType, setUserType] = useState<UserType>(null);
  const [patientData, setPatientData] = useState<{
    aadhaarNumber: string;
    patientName: string;
  } | null>(null);
  const [medicalData, setMedicalData] = useState<{
    email: string;
    password: string;
  } | null>(null);

  const handlePatientLogin = (aadhaarNumber: string, patientName: string) => {
    setPatientData({ aadhaarNumber, patientName });
    setUserType('patient');
    setCurrentPage('patient-dashboard');
  };

  const handleMedicalLogin = (email: string, password: string) => {
    setMedicalData({ email, password });
    setUserType('medical');
    setCurrentPage('medical-dashboard');
  };

  const handleLogout = () => {
    setPatientData(null);
    setMedicalData(null);
    setUserType(null);
    setCurrentPage('landing');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleBackToDashboard = () => {
    if (userType === 'patient') {
      setCurrentPage('patient-dashboard');
    } else if (userType === 'medical') {
      setCurrentPage('medical-dashboard');
    }
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return (
          <LandingPage
            onPatientLogin={() => setCurrentPage('patient-login')}
            onMedicalLogin={() => setCurrentPage('medical-login')}
          />
        );
      
      case 'patient-login':
        return (
          <PatientLoginPage
            onLogin={handlePatientLogin}
            onBack={handleBackToLanding}
          />
        );
      
      case 'medical-login':
        return (
          <MedicalLoginPage
            onLogin={handleMedicalLogin}
            onBack={handleBackToLanding}
          />
        );
      
      case 'patient-dashboard':
        return (
          <Dashboard
            patientName={patientData?.patientName || ''}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      
      case 'medical-dashboard':
        return (
          <MedicalDashboard
            doctorEmail={medicalData?.email || ''}
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
        );
      
      case 'upload':
        return <ReportUploadPage onBack={handleBackToDashboard} />;
      
      case 'history':
        return <MedicalHistoryPage onBack={handleBackToDashboard} />;
      
      case 'emergency':
        return <EmergencyAccessPage onBack={handleBackToDashboard} />;
      
      case 'settings':
      case 'medical-info':
      case 'update-history':
      case 'patients':
        // Redirect back to appropriate dashboard for now (these pages not implemented)
        handleBackToDashboard();
        return null;
      
      default:
        return (
          <LandingPage
            onPatientLogin={() => setCurrentPage('patient-login')}
            onMedicalLogin={() => setCurrentPage('medical-login')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentPage()}
      <Toaster position="top-right" />
    </div>
  );
}