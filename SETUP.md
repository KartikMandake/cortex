# Cortex Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
# Install all dependencies (root, frontend, backend)
npm run install:all
```

### 2. Database Setup

```bash
# Create PostgreSQL database
createdb cortex

# Run schema
psql -d cortex -f database/schema.sql

# (Optional) Seed sample data
psql -d cortex -f database/seed.sql
```

### 3. Configure Environment

```bash
# Backend
cd backend
cp .env.example .env
# Edit .env with your database credentials

# Frontend
cd ../frontend
cp .env.example .env
```

### 4. Run Development Servers

```bash
# From root directory - runs both frontend and backend
npm run dev

# Or run separately:
npm run dev:backend  # Backend on http://localhost:5000
npm run dev:frontend # Frontend on http://localhost:5173
```

## Project Structure

```
cortex/
├── frontend/              # React + Vite frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── services/     # API service layer
│   │   └── styles/       # Global styles
│   └── package.json
│
├── backend/              # Node.js + Express API
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── routes/       # API routes
│   │   └── config/       # Database config
│   └── package.json
│
├── database/             # PostgreSQL schemas
│   ├── schema.sql       # Database schema
│   └── seed.sql         # Sample data
│
└── shared/              # Shared TypeScript types
    └── types/
        └── index.ts     # Common interfaces
```

## Next Steps

1. Update backend controllers with actual database queries
2. Implement JWT authentication
3. Add file upload functionality for medical reports
4. Connect frontend to backend APIs
5. Add error handling and validation
