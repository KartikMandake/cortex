import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, Lock, Shield, FileText, Users, Stethoscope, Award } from 'lucide-react';

interface MedicalLoginPageProps {
  onLogin: (email: string, password: string) => void;
  onBack: () => void;
}

export function MedicalLoginPage({ onLogin, onBack }: MedicalLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpRequired, setOtpRequired] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpRequired) {
      // Simulate OTP requirement
      setOtpRequired(true);
    } else {
      if (email.trim() && password.trim() && otp.trim()) {
        onLogin(email, password);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Medical Authority Illustration */}
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
              className="w-24 h-24 bg-gradient-to-br from-slate-600 to-blue-600 rounded-full flex items-center justify-center mx-auto lg:mx-0"
            >
              <Stethoscope className="w-12 h-12 text-white" />
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                Medical Authority Portal
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Secure access for healthcare professionals to manage patient records and medical data.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200"
              >
                <FileText className="w-8 h-8 text-slate-600" />
                <div>
                  <h3 className="font-semibold text-slate-800">Upload & Manage Reports</h3>
                  <p className="text-sm text-gray-600">Add new medical reports for patients</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-200"
              >
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-blue-800">Patient Management</h3>
                  <p className="text-sm text-gray-600">Update medical history and conditions</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-teal-200"
              >
                <Shield className="w-8 h-8 text-teal-600" />
                <div>
                  <h3 className="font-semibold text-teal-800">Compliance & Security</h3>
                  <p className="text-sm text-gray-600">Activity logs and audit trails</p>
                </div>
              </motion.div>
            </div>

            {/* Legal compliance badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">ISO 27001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">HIPAA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-teal-700">SOC 2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">MoHFW</span>
                </div>
              </div>
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
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="space-y-4 pb-8">
              {/* Back button */}
              <div className="flex justify-start">
                <Button
                  variant="ghost"
                  onClick={onBack}
                  className="text-gray-600 hover:text-slate-600 hover:bg-slate-50 p-2"
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
                  className="w-16 h-16 bg-gradient-to-br from-slate-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Lock className="w-8 h-8 text-white" />
                </motion.div>
                
                <CardTitle className="text-2xl text-gray-800">
                  Medical Authority Login
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Secure access for healthcare professionals
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {!otpRequired ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-gray-700">
                        Medical ID / Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="doctor@hospital.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-lg border-2 border-slate-200 focus:border-slate-400 rounded-xl bg-white/70"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="password" className="text-gray-700">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your secure password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 text-lg border-2 border-slate-200 focus:border-slate-400 rounded-xl bg-white/70"
                        required
                      />
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-blue-800">Two-Factor Authentication Required</p>
                      <p className="text-xs text-blue-600 mt-1">Enter the OTP sent to your registered device</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="text-gray-700">
                        Verification Code
                      </Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="h-12 text-lg text-center border-2 border-blue-200 focus:border-blue-400 rounded-xl bg-white/70"
                        maxLength={6}
                        required
                      />
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    {otpRequired ? 'Verify & Login' : 'Send OTP'}
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
                    🔒 End-to-end encrypted connection
                  </p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <div className="flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 text-sm mb-1">Legal Compliance Note</h4>
                      <p className="text-xs text-amber-700">
                        By logging in, you agree to maintain patient confidentiality and comply with HIPAA regulations. 
                        All activities are logged for audit purposes.
                      </p>
                    </div>
                  </div>
                </div>

                {!otpRequired && (
                  <div className="text-center">
                    <Button variant="ghost" className="text-sm text-gray-500 hover:text-slate-600">
                      Forgot Password?
                    </Button>
                  </div>
                )}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}