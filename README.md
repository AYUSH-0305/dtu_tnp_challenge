📚 TNP Recruitment Portal Frontend
This is the frontend application for the TNP Recruitment Challenge, built with Vite + React. It includes:

🔐 Admin Panel (with login and shareable link generation)

🌐 Public Share Page (to view student data)

🔍 Email-based search functionality

✅ Form validation via Zod

🎨 Clean, responsive UI with custom CSS

🚀 Tech Stack
React (with Vite)

Axios

Zod (for validation)

CSS Modules / Plain CSS

React Router

📦 Project Structure
src/
│
├── components/ # Reusable UI components (e.g. Table.jsx)
├── pages/ # Page components (Admin.jsx, PublicView.jsx)
├── services/ # Axios API configuration
├── styles/ # CSS files
├── utils/ # Utility functions (e.g. auth token management)
└── main.jsx # App entry point

🔧 Environment Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/tnp-recruitment-frontend.git
cd tnp-recruitment-frontend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file at the root:

.env

VITE_API_BASE_URL=https://your-backend-url.com/api

ℹ️ Replace the URL with your actual backend API base.

▶️ Running the App
Start the development server:

bash
Copy
Edit
npm run dev
Visit: http://localhost:5173

🛠️ Build for Production
bash
Copy
Edit
npm run build
Then preview the build:

bash
Copy
Edit
npm run preview
🧪 Features Overview
✅ Admin Login (validated via Zod)
✅ Shareable Link Generation
✅ Public Page Access via Token
✅ Responsive Table View
✅ Email Search Filter
✅ Graceful Login Feedback (No browser popups)
✅ Environment-based API Configuration

🧑‍💻 Developer Notes
Uses axios with import.meta.env.VITE_API_BASE_URL

Ensure backend CORS settings allow credentials from http://localhost:5173

Do not expose the actual share tokens in public repos

