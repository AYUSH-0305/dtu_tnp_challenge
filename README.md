# Shareable TnP Dashboard

A modern, secure frontend dashboard built using React and Vite, allowing authenticated users to generate shareable tokens for data access and enabling public users to view shared TnP data without authentication.

## 🚀 Features

- 🔐 JWT-based authentication
- 📄 Secure share token generation
- 🌐 Public view via tokenized URLs
- 🎨 Modern responsive UI/UX
- 📊 Stylish tabular data views
- ✅ Form validation using Zod
- ♿ Accessibility and performance best practices
- 🔁 Token refresh support
- 🌈 Loading animations and error handling

## 📁 Project Structure

```
├── public
├── src
│   ├── assets
│   ├── components
│   │   └── Table.jsx
│   ├── pages
│   │   ├── Admin.jsx
│   │   └── PublicView.jsx
│   ├── services
│   │   └── api.js
│   ├── styles
│   │   ├── Admin.css
│   │   ├── PublicView.css
│   │   └── Table.css
│   ├── utils
│   │   └── auth.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

## 🛠️ Technologies Used

- React + Vite
- Axios
- React Router
- Zod (Validation)
- Vercel (Deployment)

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shareable-tnp-dashboard.git
cd shareable-tnp-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variable

Create a `.env` file at the root level:

```
VITE_API_BASE_URL=https://tnp-recruitment-challenge.manitvig.live
```

### 4. Run Locally

```bash
npm run dev
```

Visit: `http://localhost:5173`

## 🚀 Deployment (Vercel)

### Steps:

1. Push the code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and import the repo.
3. Set the environment variable `VITE_API_BASE_URL` in the Vercel dashboard.
4. Ensure your project has a `vercel.json` file with this content:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures proper routing with React Router for share token URLs.

## 📚 Available Scripts

- `npm run dev` — Run development server
- `npm run build` — Build production files
- `npm run preview` — Preview production build


