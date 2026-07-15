# Shifa Blooms

Premium flower shop landing page foundation built with React 19, TypeScript, Vite, Tailwind CSS, and Flask.

## Structure

- `src/` - Frontend application source
- `src/pages/` - Route-level screens, including the landing page and enquiry module
- `src/components/` - Shared UI and layout components
- `src/hooks/` - Reusable React hooks
- `src/services/` - Frontend service layer
- `src/services/api/` - API client and request helpers
- `src/utilities/` - Shared utilities and constants
- `src/assets/` - Static frontend assets
- `backend/app/` - Flask application package
- `backend/app/routes/` - HTTP route blueprints
- `backend/app/services/` - Backend service layer
- `backend/app/models/` - Database models and domain objects
- `backend/app/config/` - Environment-based configuration
- `backend/app/email_service/` - Mail delivery helpers
- `backend/app/database/` - Database and persistence helpers
- `backend/app/utilities/` - Backend utility functions

## Frontend

```bash
npm install
npm run dev
```

## Backend

```bash
cd backend
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
python run.py
```

## Environment

Copy `.env.example` to `.env` and fill in the values before running locally.
