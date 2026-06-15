# Internship Demo Video Script: Full-Stack Secure Authentication System

This script is structured to help you present your project clearly and professionally. It walks through the introduction, project structure, live demo, code highlights, and deployment configuration.

---

## 🎬 Part 1: Introduction (Duration: ~45 seconds)
**[Visual: Screen showing the browser open at the Login page. Show the black, yellow, and orange glassmorphism UI.]**

* **Narration:**
  > "Hello everyone! Today, I’m excited to walk you through the **Full Stack Authentication System** I built for my internship.
  > 
  > The goal of this project was to design and implement a complete, secure, and production-ready authentication flow from scratch. 
  > 
  > For the tech stack:
  > - On the **Backend**, we use Node.js and Express.js, connecting to a MongoDB Atlas cluster with Mongoose, and securing passwords with bcryptjs.
  > - On the **Frontend**, the application is built using React with Vite, React Router DOM for route guards, and Axios for handling API calls.
  > 
  > Let's take a look at the layout and how the system works."

---

## 📁 Part 2: Folder Structure & Architecture (Duration: ~1 minute)
**[Visual: Open VS Code showing the folder explorer panel. Expand the backend and frontend folders.]**

* **Narration:**
  > "Here in my editor, we have a clean monorepo architecture separating the `backend` and `frontend` folders:
  > 
  > - In the **backend**, we have a clean MVC-style folder structure. We have `config/` for DB settings, `models/` for MongoDB schemas, `controllers/` for register/login logic, `middleware/` for auth verification, and `routes/` to expose endpoints.
  > - In the **frontend**, the `src/` folder is cleanly structured. We have `context/` for managing the auth state globally, `services/` containing our Axios API layer, `components/` for security route guards, `pages/` for UI modules, and `index.css` for custom style guidelines."

---

## 🚀 Part 3: Live Application Walkthrough (Duration: ~2 minutes)
**[Visual: Switch back to the browser. Perform the actions in real-time as you speak.]**

* **Narration (Attempting Unauthorized Access):**
  > "First, I'll demonstrate route protection. If I attempt to navigate directly to `/dashboard` without being logged in, the application detects the missing session token and automatically redirects me back to `/login`."

* **Narration (Registration Flow):**
  > "Let's click **Create account** to go to the Register screen. I will register a new user: name 'Shiva', email 'shiva@example.com', and a secure password.
  > 
  > Upon clicking 'Get Started', the backend checks that the email is unique, creates the user document in MongoDB, signs a JWT token, and sends it back to the client. The frontend saves this token securely in `localStorage` and routes us to the protected dashboard."

* **Narration (Dashboard & Protected API Showcase):**
  > "Now we are inside the Dashboard. As you can see, we have a clean, modern **black, yellow, and orange themed layout** with glassmorphism panels.
  > 
  > Here in the header, it displays: **'Welcome to the prodesk IT, Shiva'**.
  > 
  > On mount, the dashboard performs a GET request to the protected `/api/tasks` endpoint. Since our Axios instance automatically attaches the JWT Bearer token in the request headers, the backend successfully authorizes the request and returns our tasks."

* **Narration (Mobile Responsiveness Demo):**
  > *[Action: Open Chrome Developer Tools and toggle the Mobile Emulator View or resize the window]*
  > "The UI is designed to be fully responsive. On mobile screen widths, the fixed left sidebar collapses into a sleek, sticky top header bar. The menu items become horizontally scrollable, ensuring that no buttons are squished, and the workspace remains readable."

* **Narration (Session Persistence & Logout):**
  > "If I reload the page, the user session persists because the app queries the backend `/api/auth/me` endpoint to verify the token in `localStorage`. 
  > 
  > When I click the **Logout** button, the session token is removed from `localStorage`, our global context state resets, and we are routed back to the login screen."

---

## 💻 Part 4: Key Code Highlights (Duration: ~1.5 minutes)
**[Visual: Switch back to VS Code to show these three files as you speak.]**

* **Narration (AuthContext - `src/context/AuthContext.jsx`):**
  > "Let's look at how the authentication state is managed. In `AuthContext.jsx`, we utilize the React Context API to wrap the entire app. It checks for a token on mount to restore user details and provides `login`, `register`, and `logout` hooks to our components."

* **Narration (Axios Config - `src/services/api.js`):**
  > "In `api.js`, we configure a central Axios instance. We use a request interceptor to automatically inject the Bearer token into all outgoing headers. 
  > 
  > More importantly, we have a global response interceptor. If the backend returns a `401 Unauthorized` status (indicating an expired or invalid token), the interceptor automatically clears the local storage and dispatches a custom event to log the user out instantly."

* **Narration (Route Protection - `src/components/ProtectedRoute.jsx`):**
  > "Our routing guards are implemented in `ProtectedRoute.jsx`. `ProtectedRoute` prevents unauthenticated visitors from accessing `/dashboard`, while `PublicRoute` stops authenticated users from landing back on the login/register forms."

---

## 🏁 Part 5: Conclusion & Deployment (Duration: ~30 seconds)
**[Visual: Open the prompt.md or vercel.json file in VS Code.]**

* **Narration:**
  > "Finally, the project is configured for deployment. We have added a `vercel.json` rewrite file to handle Single Page Application routing on Vercel, and the backend is configured to accept environment variables for database endpoints and CORS configurations on Render.
  > 
  > This completes my walkthrough. We have a robust, secure, and fully responsive Full Stack Authentication system. Thank you!"
