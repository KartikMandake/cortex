import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Upload, FileText, Check, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface ReportUploadPageProps {
  onBack: () => void;
}

export function ReportUploadPage({ onBack }: ReportUploadPageProps) {
  const [formData, setFormData] = useState({
    reportType: '',
    reportDate: '',
    notes: '',
    file: null as File | null
  });
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const reportTypes = [
    'Blood Report',
    'CT Scan',
    'MRI Scan',
    'X-Ray',
    'ECG',
    'Ultrasound',
    'Pathology Report',
    'Prescription',
    'Discharge Summary',
    'Other'
  ];

  const handleFileSelect = (file: File) => {
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast.error('File size should be less than 10MB');
      return;
    }

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload only PDF, JPEG, or PNG files');
      return;
    }

    setFormData(prev => ({ ...prev, file }));
    toast.success('File selected successfully');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.reportType || !formData.reportDate || !formData.file) {
      toast.error('Please fill all required fields and select a file');
      return;
    }

    setIsUploading(true);
    
    // Simulate upload process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Report uploaded successfully!');
      
      // Reset form
      setFormData({
        reportType: '',
        reportDate: '',
        notes: '',
        file: null
      });
      
      // Reset file input
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      toast.error('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Upload className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Upload Medical Report</h1>
            <p className="text-gray-600">Add your latest medical test results to your health record</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <FileText className="w-5 h-5 mr-2 text-emerald-600" />
                  Report Details
                </CardTitle>
                <CardDescription>Please provide information about your medical report</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="reportType" className="text-gray-700">
                        Report Type *
                      </Label>
                      <Select 
                        value={formData.reportType} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, reportType: value }))}
                      >
                        <SelectTrigger className="h-12 border-2 border-emerald-100 focus:border-emerald-300 rounded-xl bg-white/70">
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          {reportTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reportDate" className="text-gray-700">
                        Report Date *
                      </Label>
                      <Input
                        id="reportDate"
                        type="date"
                        value={formData.reportDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, reportDate: e.target.value }))}
                        className="h-12 border-2 border-emerald-100 focus:border-emerald-300 rounded-xl bg-white/70"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-gray-700">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Add any relevant notes about this report..."
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      className="min-h-[100px] border-2 border-emerald-100 focus:border-emerald-300 rounded-xl bg-white/70"
                    />
                  </div>

                  {/* File Upload Area */}
                  <div className="space-y-2">
                    <Label className="text-gray-700">Upload File *</Label>
                    <div
                      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                        isDragOver
                          ? 'border-emerald-400 bg-emerald-50'
                          : formData.file
                          ? 'border-emerald-300 bg-emerald-50'
                          : 'border-gray-300 bg-white/50 hover:border-emerald-300 hover:bg-emerald-50'
                      }`}
                      onDrop={handleDrop}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragOver(true);
                      }}
                      onDragLeave={() => setIsDragOver(false)}
                    >
                      {formData.file ? (
                        <div className="space-y-4">
                          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
                            <Check className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-emerald-800">{formData.file.name}</p>
                            <p className="text-sm text-emerald-600">
                              {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, file: null }));
                              const fileInput = document.getElementById('file-input') as HTMLInputElement;
                              if (fileInput) fileInput.value = '';
                            }}
                            className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                          >
                            Change File
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                          <div>
                            <p className="text-gray-600 mb-2">
                              Drag and drop your file here, or
                            </p>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById('file-input')?.click()}
                              className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                            >
                              Browse Files
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500">
                            Supported formats: PDF, JPEG, PNG (Max 10MB)
                          </p>
                        </div>
                      )}
                      
                      <input
                        id="file-input"
                        type="file"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileInputChange}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isUploading}
                    className="w-full h-12 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isUploading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Uploading...
                      </div>
                    ) : (
                      <>
                        <Upload className="w-5 h-5 mr-2" />
                        Upload Report
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upload Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Upload Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Ensure your report is clear and readable
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Use PDF format for best quality
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Maximum file size is 10MB
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">
                    Include report date for proper tracking
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-amber-800 mb-1">Data Security</p>
                    <p className="text-sm text-amber-700">
                      All uploaded files are encrypted and stored securely. Only you and authorized healthcare providers can access your reports.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}