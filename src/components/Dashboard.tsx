import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  FileText, 
  History, 
  AlertTriangle, 
  Settings, 
  LogOut, 
  Activity,
  Stethoscope,
  Heart,
  Brain,
  Download,
  Eye
} from 'lucide-react';

interface PatientDashboardProps {
  patientName: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function PatientDashboard({ patientName, onNavigate, onLogout }: PatientDashboardProps) {
  const mockReports = [
    {
      id: 1,
      type: 'Blood Report',
      date: '2025-01-15',
      status: 'Normal',
      icon: Activity,
      color: 'bg-teal-500',
      hospital: 'City Hospital',
      doctor: 'Dr. Smith'
    },
    {
      id: 2,
      type: 'CT Scan',
      date: '2025-01-10',
      status: 'Review Required',
      icon: Brain,
      color: 'bg-amber-500',
      hospital: 'Medical Center',
      doctor: 'Dr. Johnson'
    },
    {
      id: 3,
      type: 'ECG',
      date: '2025-01-08',
      status: 'Normal',
      icon: Heart,
      color: 'bg-emerald-500',
      hospital: 'Heart Clinic',
      doctor: 'Dr. Wilson'
    },
    {
      id: 4,
      type: 'MRI',
      date: '2025-01-05',
      status: 'Normal',
      icon: Brain,
      color: 'bg-teal-500',
      hospital: 'Imaging Center',
      doctor: 'Dr. Brown'
    }
  ];

  const menuItems = [
    { icon: History, label: 'View History', page: 'history', color: 'text-teal-600' },
    { icon: AlertTriangle, label: 'Emergency Access', page: 'emergency', color: 'text-red-600' },
    { icon: Settings, label: 'Settings', page: 'settings', color: 'text-gray-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Top Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-teal-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Cortex
                </h1>
                <p className="text-xs text-gray-500">Patient Portal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">{patientName}</p>
                <p className="text-sm text-gray-500">Patient ID: #12345</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onLogout}
                className="text-gray-600 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Menu */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left hover:bg-teal-50 transition-all duration-200"
                      onClick={() => onNavigate(item.page)}
                    >
                      <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Welcome back, {patientName}!</h2>
                      <p className="text-teal-100">
                        View your complete medical history and access emergency information.
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <Stethoscope className="w-16 h-16 text-teal-200" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                      onClick={() => onNavigate('history')}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <History className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">View History</h3>
                    <p className="text-sm text-gray-600">Browse all your medical reports</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                      onClick={() => onNavigate('emergency')}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Emergency Info</h3>
                    <p className="text-sm text-gray-600">Critical medical information</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Latest Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <FileText className="w-5 h-5 mr-2 text-teal-600" />
                    Latest Reports
                  </CardTitle>
                  <CardDescription>Your recent medical test results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockReports.map((report, index) => (
                      <motion.div
                        key={report.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <Card className="hover:shadow-md transition-all duration-200">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-4 mb-3">
                              <div className={`w-10 h-10 ${report.color} rounded-lg flex items-center justify-center`}>
                                <report.icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800">{report.type}</h4>
                                <p className="text-sm text-gray-500">{report.date}</p>
                              </div>
                              <Badge 
                                variant={report.status === 'Normal' ? 'secondary' : 'destructive'}
                                className={report.status === 'Normal' ? 'bg-emerald-100 text-emerald-800' : ''}
                              >
                                {report.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                              <p>{report.hospital} • {report.doctor}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="text-teal-600 border-teal-200 hover:bg-teal-50">
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                              <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                                <Download className="w-4 h-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Health Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    Emergency Info Summary
                  </CardTitle>
                  <CardDescription>Critical information for healthcare providers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-medium text-red-800 mb-1">Blood Type</h4>
                      <p className="text-2xl font-bold text-red-600">O+</p>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <h4 className="font-medium text-amber-800 mb-1">Allergies</h4>
                      <p className="text-sm text-amber-700">Penicillin, Shellfish</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-1">Conditions</h4>
                      <p className="text-sm text-blue-700">Hypertension, Diabetes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}