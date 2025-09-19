import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  Shield, 
  Activity, 
  Zap, 
  Stethoscope, 
  Users, 
  FileText, 
  Heart,
  Lock,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface LandingPageProps {
  onPatientLogin: () => void;
  onMedicalLogin: () => void;
}

export function LandingPage({ onPatientLogin, onMedicalLogin }: LandingPageProps) {
  const benefits = [
    {
      icon: Zap,
      title: 'Easy Access',
      description: 'Instant access to your medical records with just your Aadhaar number',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Secure Records',
      description: 'Bank-level encryption ensures your medical data stays private and secure',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Emergency Ready',
      description: 'Critical medical information available instantly during emergencies',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-teal-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Cortex
                </h1>
                <p className="text-xs text-gray-500">Your Health, One Click Away</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-teal-600">
                About
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-teal-600">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full"
                >
                  <Award className="w-4 h-4 text-teal-600 mr-2" />
                  <span className="text-sm font-medium text-teal-800">Trusted Healthcare Platform</span>
                </motion.div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Health,{' '}
                  <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    One Click Away
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Secure, reliable healthcare access connecting patients and medical professionals. 
                  Access your complete medical history instantly with Aadhaar-based authentication.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onPatientLogin}
                  className="h-14 px-8 text-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Patient Login
                </Button>
                
                <Button
                  onClick={onMedicalLogin}
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-teal-300 text-teal-700 hover:bg-teal-50 hover:border-teal-400 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Medical Authority
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-teal-600" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </motion.div>

            {/* Right side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl transform -rotate-3"></div>
                
                {/* Main illustration area */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-teal-100">
                  <div className="space-y-6">
                    {/* Connected healthcare illustration */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Patients</span>
                      </div>
                      
                      <div className="flex-1 mx-4">
                        <div className="h-0.5 bg-gradient-to-r from-teal-300 to-emerald-300 relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center">
                          <Stethoscope className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Doctors</span>
                      </div>
                    </div>

                    {/* Feature icons */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <FileText className="w-6 h-6 text-teal-600" />
                        </div>
                        <span className="text-xs text-gray-600">Records</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Activity className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-xs text-gray-600">Reports</span>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Heart className="w-6 h-6 text-cyan-600" />
                        </div>
                        <span className="text-xs text-gray-600">Health</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cortex?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of healthcare management with our secure, user-friendly platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold">Cortex</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Your Health, One Click Away. Secure healthcare access for everyone.
              </p>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-gray-400">HIPAA Compliant Platform</span>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contact Us</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 1800-CORTEX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@cortex.health</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Healthcare District, India</span>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-teal-400 transition-colors">Data Protection</a>
                <a href="#" className="hover:text-teal-400 transition-colors">Compliance</a>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="font-semibold">Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-teal-400" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>MoHFW Approved</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Cortex Healthcare Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}