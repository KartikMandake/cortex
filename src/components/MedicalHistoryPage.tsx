import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  ArrowLeft, 
  History, 
  Search, 
  Download, 
  Calendar,
  Activity,
  Brain,
  Heart,
  Stethoscope,
  FileText,
  Eye
} from 'lucide-react';

interface MedicalHistoryPageProps {
  onBack: () => void;
}

export function MedicalHistoryPage({ onBack }: MedicalHistoryPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  const mockHistory = [
    {
      id: 1,
      type: 'Blood Report',
      date: '2025-01-15',
      status: 'Normal',
      doctor: 'Dr. Smith',
      hospital: 'City Hospital',
      icon: Activity,
      color: 'bg-emerald-500',
      results: 'Hemoglobin: 14.2 g/dL, WBC: 7,200/μL, Platelets: 250,000/μL'
    },
    {
      id: 2,
      type: 'CT Scan',
      date: '2025-01-10',
      status: 'Review Required',
      doctor: 'Dr. Johnson',
      hospital: 'Medical Center',
      icon: Brain,
      color: 'bg-amber-500',
      results: 'No significant abnormalities detected. Follow-up recommended.'
    },
    {
      id: 3,
      type: 'ECG',
      date: '2025-01-08',
      status: 'Normal',
      doctor: 'Dr. Wilson',
      hospital: 'Heart Clinic',
      icon: Heart,
      color: 'bg-emerald-500',
      results: 'Normal sinus rhythm, Heart rate: 72 bpm'
    },
    {
      id: 4,
      type: 'MRI Scan',
      date: '2025-01-05',
      status: 'Normal',
      doctor: 'Dr. Brown',
      hospital: 'Imaging Center',
      icon: Brain,
      color: 'bg-emerald-500',
      results: 'Brain MRI shows normal anatomical structures'
    },
    {
      id: 5,
      type: 'Blood Report',
      date: '2024-12-20',
      status: 'Normal',
      doctor: 'Dr. Smith',
      hospital: 'City Hospital',
      icon: Activity,
      color: 'bg-emerald-500',
      results: 'Hemoglobin: 13.8 g/dL, Blood Sugar: 95 mg/dL'
    },
    {
      id: 6,
      type: 'X-Ray',
      date: '2024-12-15',
      status: 'Normal',
      doctor: 'Dr. Davis',
      hospital: 'Ortho Clinic',
      icon: Stethoscope,
      color: 'bg-emerald-500',
      results: 'Chest X-ray: No abnormalities detected'
    }
  ];

  const reportTypes = ['all', 'Blood Report', 'CT Scan', 'MRI Scan', 'X-Ray', 'ECG', 'Ultrasound'];

  const filteredHistory = mockHistory
    .filter(item => {
      const matchesSearch = item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.hospital.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || item.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });

  const handleDownloadHistory = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'medical-history.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50 p-4">
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
              className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>

            <Button
              onClick={handleDownloadHistory}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download History
            </Button>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <History className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Medical History</h1>
            <p className="text-gray-600">Complete timeline of your medical reports and test results</p>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search by report type, doctor, or hospital..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-2 border-emerald-100 focus:border-emerald-300 rounded-xl bg-white/70"
                  />
                </div>

                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="h-12 border-2 border-emerald-100 focus:border-emerald-300 rounded-xl bg-white/70">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    {reportTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type === 'all' ? 'All Reports' : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 border-2 border-emerald-100 focus:border-emerald-300 rounded-xl bg-white/70">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Newest First</SelectItem>
                    <SelectItem value="date-asc">Oldest First</SelectItem>
                    <SelectItem value="type">Report Type</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Showing {filteredHistory.length} of {mockHistory.length} reports
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {filteredHistory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    {/* Timeline dot and line */}
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      {index < filteredHistory.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-200 mt-4"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-800">{item.type}</h3>
                            <Badge 
                              variant={item.status === 'Normal' ? 'secondary' : 'destructive'}
                              className={item.status === 'Normal' ? 'bg-emerald-100 text-emerald-800' : ''}
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(item.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            <span>•</span>
                            <span>{item.doctor}</span>
                            <span>•</span>
                            <span>{item.hospital}</span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="text-teal-600 border-teal-200 hover:bg-teal-50">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">Key Results:</h4>
                        <p className="text-gray-600">{item.results}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredHistory.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center py-12"
          >
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No reports found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}