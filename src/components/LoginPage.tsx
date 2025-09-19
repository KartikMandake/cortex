import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Shield, Activity, Heart } from 'lucide-react';

interface LoginPageProps {
  onLogin: (aadhaarNumber: string, patientName: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [patientName, setPatientName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aadhaarNumber.trim() && patientName.trim()) {
      onLogin(aadhaarNumber, patientName);
    }
  };

  const formatAadhaar = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Limit to 12 digits
    const limited = digits.slice(0, 12);
    // Add spaces every 4 digits
    return limited.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAadhaar(e.target.value);
    setAadhaarNumber(formatted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Illustration/Info */}
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
              className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto lg:mx-0"
            >
              <Activity className="w-12 h-12 text-white" />
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                MedCare Digital
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Secure, reliable healthcare access at your fingertips. 
                Connect with your medical history instantly using your Aadhaar ID.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100"
              >
                <Shield className="w-8 h-8 text-emerald-600" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Secure Access</h3>
                  <p className="text-sm text-gray-600">Aadhaar-based authentication</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-teal-100"
              >
                <Heart className="w-8 h-8 text-teal-600" />
                <div>
                  <h3 className="font-semibold text-teal-800">Complete Care</h3>
                  <p className="text-sm text-gray-600">Access all your medical records</p>
                </div>
              </motion.div>
            </div>
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
            <CardHeader className="text-center space-y-4 pb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto lg:hidden"
              >
                <Activity className="w-8 h-8 text-white" />
              </motion.div>
              
              <CardTitle className="text-2xl text-gray-800">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-gray-600">
                Sign in securely with your Aadhaar credentials
              </CardDescription>
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
                    className="h-12 text-lg border-2 border-emerald-100 focus:border-emerald-300 rounded-xl bg-white/70"
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
                    Patient Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="h-12 text-lg border-2 border-emerald-100 focus:border-emerald-300 rounded-xl bg-white/70"
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
                    className="w-full h-12 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Secure Login
                  </Button>
                </motion.div>
              </form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-center"
              >
                <p className="text-sm text-gray-500">
                  Protected by 256-bit SSL encryption
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}