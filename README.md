# Gym Lead CRM

A multi-tenant SaaS CRM for independent gyms and fitness studios.

## Current status

**Phase 1 — Foundation** is in progress.

The repository contains the React + TypeScript + Vite application shell, Tailwind CSS, Supabase browser-client configuration, linting and formatting scripts. No CRM dashboard data is mocked. Authentication, tenant database schema, RLS and business workflows will be implemented in later verified phases.

## Technology

- React 19 + TypeScript + Vite
- Tailwind CSS
- Supabase (PostgreSQL, Auth, RLS, Edge Functions)
- React Router, React Hook Form, Zod
- TanStack Table, Recharts, Lucide React, Sonner

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Add the Supabase Project URL and anon/publishable key to the .env file:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY
VITE_APP_URL=http://localhost:5173
```

Restart the dev server after changing environment variables.

## Commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
npm run format
npm run format:check
```

## Security notes

- Only the Supabase public URL and anon/publishable key belong in Vite browser environment variables.
- Never put a service-role key, database password, Razorpay secret, or private invitation token in this repository or any VITE_* variable.
- A public anon key is not a substitute for Row Level Security. Do not add private business tables until their RLS policies are designed and tested.
- Gym/tenant identifiers supplied by the browser will never be trusted as proof of authorization.

## Planned phases

1. Product architecture and foundation
2. Multi-tenant PostgreSQL schema and RLS
3. Authentication and onboarding
4. Staff management
5. Core CRM
6. Activities and follow-ups
7. Dashboard and analytics
8. Subscription and billing
9. Super-admin platform
10. QA and security verification
11. Production deployment
