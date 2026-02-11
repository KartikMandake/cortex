# Cortex - Medical Services Platform

A full-stack medical services platform with patient and medical professional portals.

## Project Structure

```
cortex/
├── frontend/          # React + Vite frontend application
├── backend/           # Node.js + Express backend API
├── database/          # PostgreSQL schemas and migrations
└── shared/            # Shared TypeScript types
```

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+

## Setup Instructions

### 1. Database Setup

```bash
# Create PostgreSQL database
createdb cortex

# Run schema
psql -d cortex -f database/schema.sql

# (Optional) Seed sample data
psql -d cortex -f database/seed.sql
```

### 2. Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your database credentials

# Start development server
npm run dev
```

Backend runs on http://localhost:5000

### 3. Frontend Setup

```bash
cd frontend
npm install

# Start development server
npm run dev
```

Frontend runs on http://localhost:5173

## Features

- Patient Portal: Login, view medical history, upload reports
- Medical Professional Portal: View patients, access records
- Emergency Access: Quick access to patient records
- Secure Authentication: JWT-based auth system

## Tech Stack

- Frontend: React 18, TypeScript, Vite, Tailwind CSS, Radix UI
- Backend: Node.js, Express, TypeScript
- Database: PostgreSQL
- Authentication: JWT, bcrypt

## Development

- Frontend: `cd frontend && npm run dev`
- Backend: `cd backend && npm run dev`

## Building for Production

```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && npm run build && npm start
```
