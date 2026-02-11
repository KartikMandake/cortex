import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Phone, 
  Heart,
  Activity,
  Zap,
  Clock,
  User,
  MapPin,
  AlertCircle
} from 'lucide-react';

interface EmergencyAccessPageProps {
  onBack: () => void;
}

export function EmergencyAccessPage({ onBack }: EmergencyAccessPageProps) {
  const [accessGranted, setAccessGranted] = useState(false);

  const emergencyContacts = [
    { name: 'Dr. Sarah Johnson', role: 'Primary Physician', phone: '+1 (555) 123-4567' },
    { name: 'City Hospital Emergency', role: 'Emergency Department', phone: '+1 (555) 911-0000' },
    { name: 'John Doe (Spouse)', role: 'Emergency Contact', phone: '+1 (555) 987-6543' }
  ];

  const criticalInfo = {
    bloodType: 'O+',
    allergies: ['Penicillin', 'Shellfish', 'Latex'],
    chronicConditions: ['Hypertension', 'Type 2 Diabetes'],
    currentMedications: [
      { name: 'Metformin', dosage: '500mg twice daily' },
      { name: 'Lisinopril', dosage: '10mg once daily' },
      { name: 'Aspirin', dosage: '81mg once daily' }
    ],
    lastVitals: {
      bloodPressure: '130/85 mmHg',
      heartRate: '72 bpm',
      temperature: '98.6°F',
      date: '2025-01-15'
    }
  };

  const recentReports = [
    {
      type: 'Blood Report',
      date: '2025-01-15',
      status: 'Normal',
      critical: false
    },
    {
      type: 'CT Scan',
      date: '2025-01-10',
      status: 'Review Required',
      critical: true
    },
    {
      type: 'ECG',
      date: '2025-01-08',
      status: 'Normal',
      critical: false
    }
  ];

  const handleEmergencyAccess = () => {
    setAccessGranted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-gray-600 hover:text-red-600 hover:bg-red-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>

            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-600 font-medium">Emergency Mode</span>
            </div>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <AlertTriangle className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Emergency Access</h1>
            <p className="text-gray-600">Critical medical information for healthcare providers</p>
          </div>
        </motion.div>

        {!accessGranted ? (
          /* Access Request */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-200 shadow-xl">
              <CardHeader className="text-center">
                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-2xl text-red-800">Emergency Medical Access Required</CardTitle>
                <CardDescription className="text-gray-600">
                  This will provide healthcare providers with immediate access to critical medical information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    Only authorized healthcare providers should access this information during medical emergencies.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Information that will be shared:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Blood type and allergies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Current medications and chronic conditions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Recent vital signs and test results</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Emergency contact information</span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handleEmergencyAccess}
                  className="w-full h-12 text-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Grant Emergency Access
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* Emergency Information Display */
          <div className="space-y-6">
            {/* Critical Alert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Alert className="border-red-500 bg-red-100">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <AlertDescription className="text-red-800 font-medium">
                  Emergency access granted. Critical medical information displayed below.
                </AlertDescription>
              </Alert>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Patient Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <User className="w-5 h-5 mr-2" />
                      Patient Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Blood Type</p>
                        <p className="text-lg font-bold text-red-700">{criticalInfo.bloodType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Last Updated</p>
                        <p className="font-medium">{criticalInfo.lastVitals.date}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Allergies</p>
                      <div className="flex flex-wrap gap-2">
                        {criticalInfo.allergies.map((allergy) => (
                          <Badge key={allergy} variant="destructive" className="bg-red-100 text-red-800">
                            ⚠️ {allergy}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Chronic Conditions</p>
                      <div className="space-y-1">
                        {criticalInfo.chronicConditions.map((condition) => (
                          <div key={condition} className="flex items-center space-x-2">
                            <Heart className="w-4 h-4 text-orange-500" />
                            <span className="text-gray-800">{condition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Current Medications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Activity className="w-5 h-5 mr-2" />
                      Current Medications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {criticalInfo.currentMedications.map((medication, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <div>
                            <p className="font-medium text-orange-900">{medication.name}</p>
                            <p className="text-sm text-orange-700">{medication.dosage}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Last Vital Signs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-2 border-emerald-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-emerald-800">
                      <Heart className="w-5 h-5 mr-2" />
                      Latest Vital Signs
                    </CardTitle>
                    <CardDescription className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      Recorded on {criticalInfo.lastVitals.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-emerald-50 rounded-lg">
                        <p className="text-sm text-emerald-600">Blood Pressure</p>
                        <p className="text-lg font-bold text-emerald-800">{criticalInfo.lastVitals.bloodPressure}</p>
                      </div>
                      <div className="text-center p-3 bg-emerald-50 rounded-lg">
                        <p className="text-sm text-emerald-600">Heart Rate</p>
                        <p className="text-lg font-bold text-emerald-800">{criticalInfo.lastVitals.heartRate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Emergency Contacts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-800">
                      <Phone className="w-5 h-5 mr-2" />
                      Emergency Contacts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {emergencyContacts.map((contact, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <div>
                            <p className="font-medium text-blue-900">{contact.name}</p>
                            <p className="text-sm text-blue-700">{contact.role}</p>
                          </div>
                          <Button size="sm" variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-100">
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Recent Critical Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-purple-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-800">
                    <Activity className="w-5 h-5 mr-2" />
                    Recent Test Results
                  </CardTitle>
                  <CardDescription>Latest medical reports and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recentReports.map((report, index) => (
                      <div key={index} className={`p-4 rounded-lg ${report.critical ? 'bg-red-50 border-2 border-red-200' : 'bg-purple-50'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800">{report.type}</h4>
                          {report.critical && <AlertTriangle className="w-4 h-4 text-red-500" />}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{report.date}</p>
                        <Badge 
                          variant={report.status === 'Normal' ? 'secondary' : 'destructive'}
                          className={report.status === 'Normal' ? 'bg-emerald-100 text-emerald-800' : ''}
                        >
                          {report.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}