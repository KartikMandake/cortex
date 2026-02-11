import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import patientRoutes from './routes/patient.routes';
import medicalRoutes from './routes/medical.routes';
import reportRoutes from './routes/report.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/medical', medicalRoutes);
app.use('/api/reports', reportRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Cortex API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
