import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, Users, Shield, Activity, Stethoscope } from 'lucide-react';

interface PatientLoginPageProps {
  onLogin: (aadhaarNumber: string, patientName: string) => void;
  onBack: () => void;
}

export function PatientLoginPage({ onLogin, onBack }: PatientLoginPageProps) {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [patientName, setPatientName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aadhaarNumber.trim() && patientName.trim()) {
      onLogin(aadhaarNumber, patientName);
    }
  };

  const formatAadhaar = (value: string) => {
    const digits = value.replace(/\D/g, '');
    const limited = digits.slice(0, 12);
    return limited.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAadhaar(e.target.value);
    setAadhaarNumber(formatted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Patient Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto lg:mx-0"
            >
              <Users className="w-12 h-12 text-white" />
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Patient Portal
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access your complete medical history instantly with secure Aadhaar-based authentication.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-teal-100"
              >
                <Activity className="w-8 h-8 text-teal-600" />
                <div>
                  <h3 className="font-semibold text-teal-800">View Medical History</h3>
                  <p className="text-sm text-gray-600">Complete timeline of your reports</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100"
              >
                <Shield className="w-8 h-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Emergency Access</h3>
                  <p className="text-sm text-gray-600">Critical info for healthcare providers</p>
                </div>
              </motion.div>
            </div>

            {/* Patient accessing reports illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-teal-200"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-center">
                  <div className="w-16 h-2 bg-teal-200 rounded-full mb-1"></div>
                  <div className="w-12 h-2 bg-emerald-200 rounded-full"></div>
                </div>
              </div>
              <p className="text-sm text-center text-gray-600">
                Secure digital access to all your medical reports
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-4 pb-8">
              {/* Back button */}
              <div className="flex justify-start">
                <Button
                  variant="ghost"
                  onClick={onBack}
                  className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 p-2"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                
                <CardTitle className="text-2xl text-gray-800">
                  Patient Login
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Enter your Aadhaar details to access your medical records
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <Label htmlFor="aadhaar" className="text-gray-700">
                    Aadhaar Number
                  </Label>
                  <Input
                    id="aadhaar"
                    type="text"
                    placeholder="1234 5678 9012"
                    value={aadhaarNumber}
                    onChange={handleAadhaarChange}
                    className="h-12 text-lg border-2 border-teal-100 focus:border-teal-300 rounded-xl bg-white/70"
                    maxLength={14}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-2"
                >
                  <Label htmlFor="name" className="text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name as per Aadhaar"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="h-12 text-lg border-2 border-teal-100 focus:border-teal-300 rounded-xl bg-white/70"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Secure Login
                  </Button>
                </motion.div>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="space-y-4"
              >
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    🔒 Protected by 256-bit SSL encryption
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <h4 className="font-medium text-teal-800 text-sm mb-2">What you can access:</h4>
                  <ul className="text-xs text-teal-700 space-y-1">
                    <li>• View complete medical history</li>
                    <li>• Access test reports and prescriptions</li>
                    <li>• Emergency medical information</li>
                    <li>• Download reports as PDF</li>
                  </ul>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}