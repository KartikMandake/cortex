import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Upload, 
  Users, 
  FileText, 
  Activity, 
  Settings, 
  LogOut, 
  Stethoscope,
  UserPlus,
  History,
  Shield,
  Clock,
  AlertTriangle
} from 'lucide-react';

interface MedicalDashboardProps {
  doctorEmail: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function MedicalDashboard({ doctorEmail, onNavigate, onLogout }: MedicalDashboardProps) {
  const recentActivity = [
    {
      id: 1,
      action: 'Blood Report Uploaded',
      patient: 'John Doe (A1234)',
      time: '2 hours ago',
      type: 'upload',
      status: 'completed'
    },
    {
      id: 2,
      action: 'Medical History Updated',
      patient: 'Jane Smith (A5678)',
      time: '4 hours ago',
      type: 'update',
      status: 'completed'
    },
    {
      id: 3,
      action: 'Emergency Access Granted',
      patient: 'Mike Johnson (A9012)',
      time: '6 hours ago',
      type: 'emergency',
      status: 'active'
    },
    {
      id: 4,
      action: 'CT Scan Report Uploaded',
      patient: 'Sarah Wilson (A3456)',
      time: '8 hours ago',
      type: 'upload',
      status: 'completed'
    }
  ];

  const stats = [
    {
      title: 'Patients Managed',
      value: '247',
      change: '+12 this week',
      icon: Users,
      color: 'bg-teal-500'
    },
    {
      title: 'Reports Uploaded',
      value: '89',
      change: '+23 this week',
      icon: Upload,
      color: 'bg-blue-500'
    },
    {
      title: 'Emergency Access',
      value: '5',
      change: 'Active sessions',
      icon: AlertTriangle,
      color: 'bg-red-500'
    },
    {
      title: 'Pending Reviews',
      value: '14',
      change: 'Requires attention',
      icon: Clock,
      color: 'bg-amber-500'
    }
  ];

  const menuItems = [
    { icon: Upload, label: 'Upload Report', page: 'upload', color: 'text-teal-600', description: 'Add new medical reports' },
    { icon: UserPlus, label: 'Add Medical Info', page: 'medical-info', color: 'text-blue-600', description: 'Update patient conditions' },
    { icon: History, label: 'Update History', page: 'update-history', color: 'text-emerald-600', description: 'Manage patient timeline' },
    { icon: Users, label: 'Patients List', page: 'patients', color: 'text-purple-600', description: 'View all patients' },
    { icon: Settings, label: 'Settings', page: 'settings', color: 'text-gray-600', description: 'Account preferences' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Top Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                  Cortex
                </h1>
                <p className="text-xs text-gray-500">Medical Authority Portal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-gray-800">Dr. Medical Authority</p>
                <p className="text-sm text-gray-500">{doctorEmail}</p>
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
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-slate-600 to-blue-600 text-white border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Medical Authority Dashboard</h2>
                  <p className="text-slate-200">
                    Manage patient records, upload reports, and maintain medical histories.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <Shield className="w-16 h-16 text-slate-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-xs text-gray-500">{stat.change}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Actions */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">Quick Actions</CardTitle>
                  <CardDescription>Common tasks and operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {menuItems.slice(0, 4).map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Card 
                          className="cursor-pointer hover:shadow-md transition-all duration-200 transform hover:scale-[1.02] border border-gray-100"
                          onClick={() => onNavigate(item.page)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                                <item.icon className={`w-5 h-5 ${item.color}`} />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-800">{item.label}</h4>
                                <p className="text-xs text-gray-500">{item.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            activity.type === 'upload' ? 'bg-teal-100' :
                            activity.type === 'update' ? 'bg-blue-100' :
                            'bg-red-100'
                          }`}>
                            {activity.type === 'upload' && <Upload className="w-4 h-4 text-teal-600" />}
                            {activity.type === 'update' && <FileText className="w-4 h-4 text-blue-600" />}
                            {activity.type === 'emergency' && <AlertTriangle className="w-4 h-4 text-red-600" />}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800 text-sm">{activity.action}</p>
                            <p className="text-xs text-gray-600">{activity.patient}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={activity.status === 'completed' ? 'secondary' : 'destructive'}
                            className={activity.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                          >
                            {activity.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Compliance Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    Compliance Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">HIPAA Compliance</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Encryption</span>
                    <Badge className="bg-green-100 text-green-800">256-bit</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Audit Trail</span>
                    <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Last Backup</span>
                    <Badge className="bg-blue-100 text-blue-800">2 hours ago</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Patient Search */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-800">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Quick Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left border-teal-200 hover:bg-teal-50"
                    onClick={() => onNavigate('patients')}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    View All Patients
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left border-blue-200 hover:bg-blue-50"
                    onClick={() => onNavigate('upload')}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload New Report
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left border-red-200 hover:bg-red-50"
                    onClick={() => onNavigate('emergency')}
                  >
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Emergency Access
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* System Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800">System Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">All systems operational</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Database: Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">File Storage: Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Scheduled maintenance: 2 AM</span>
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