Continue the project and build the **complete Full Stack Authentication System** from the existing backend.

The backend authentication system already exists using:

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* bcryptjs
* JWT
* dotenv
* cors

Now build the **entire remaining project (frontend + backend integration + protected auth flow + deployment readiness)** using **minimum lines of code with clean logic and good architecture**.

Tech Stack:
Frontend:

* React (Vite)
* React Router DOM
* Axios

Backend:

* Existing Node.js JWT Auth API

Goal:
Create a clean, internship-quality, production-friendly authentication flow with concise code, proper logic, and minimal complexity.

Core Requirements:

### Authentication Flow

Implement complete auth flow:

Register → JWT generated → save token → redirect dashboard

Login → JWT generated → save token → redirect dashboard

Unauthorized access → auto redirect to `/login`

Expired/invalid token → logout automatically and redirect to `/login`

Logout → remove token and redirect login

---

### Frontend Pages

Build these pages:

1. Login Page
2. Register Page
3. Dashboard Page (Protected)
4. Not Found Page (optional but clean)

Requirements:

* Minimal UI
* Clean layout
* Functional over beautiful
* Responsive enough for desktop/mobile
* Avoid unnecessary CSS complexity

---

### Routing

Use React Router DOM.

Routes required:

`/login`

`/register`

`/dashboard` (protected)

`*` → NotFound

Requirements:

* Prevent logged-out users from accessing dashboard
* Prevent logged-in users from visiting login/register unnecessarily
* Use clean protected routing logic

---

### Authentication State Management

Create a lightweight auth system.

Requirements:

* Store JWT securely in localStorage
* Persist login after refresh
* Detect missing token
* Detect invalid/expired token
* Auto logout if unauthorized response comes from backend
* Keep logic minimal and reusable

Prefer:

* Context API OR simple reusable hook
* Avoid Redux or overengineering

---

### API Layer

Create clean API handling.

Requirements:

* Axios instance with base URL
* Automatically attach JWT in Authorization header
* Handle 401 unauthorized globally
* Keep API code centralized and concise

---

### Forms

#### Register Form

Fields:

* Name
* Email
* Password

Requirements:

* Controlled inputs
* Basic validation
* Show backend errors cleanly
* Successful register redirects to dashboard

#### Login Form

Fields:

* Email
* Password

Requirements:

* Controlled inputs
* Error handling
* Successful login redirects to dashboard

---

### Dashboard

Requirements:

* Protected page
* Show authenticated user info if available
* Add Logout button
* Optional sample protected API call (`/api/tasks`)
* Keep UI simple

---

### Project Structure

Create a scalable but lightweight structure.

Frontend should include:

* pages/
* components/
* context/ OR hooks/
* services/api/
* routes/
* layouts/ (only if needed)
* utils/
* assets/ (minimal)

Keep structure professional but avoid unnecessary files.

---

### UI Rules

* Keep styling minimal
* Prefer plain CSS or simple module CSS
* No Tailwind unless absolutely needed
* Functional > Fancy
* Internship-quality UI is enough

---

### Security Requirements

* JWT stored in localStorage
* Authorization header uses Bearer token
* Protected routes enforced
* Handle invalid tokens properly
* No sensitive secrets on frontend

---

### Error Handling

Handle:

* Wrong password
* User not found
* Duplicate email
* Missing token
* Expired token
* Server error

Show user-friendly messages.

---

### Code Quality Rules

* Use minimum lines of code
* Keep logic clean and reusable
* Avoid repetition
* Avoid unnecessary abstraction
* Use modern React practices
* Functional components only
* Async/await
* Beginner-friendly but professional
* Short readable components
* No overengineering
* Keep project easy to explain in internship demo

---

### Final Deliverables

Generate:

1. Full frontend folder structure
2. All frontend files one-by-one
3. Backend integration changes if needed
4. API integration
5. Route protection
6. Auth persistence logic
7. Logout flow
8. Deployment-ready setup for:

   * Vercel (Frontend)
   * Render (Backend)

Also include:

* Environment variable setup
* CORS fixes
* Production API URL handling
* Deployment checklist

Ensure everything works together without missing imports or broken flows.

The final app must successfully demonstrate:

1. New user registration
2. Login
3. JWT saved in localStorage
4. Protected dashboard access
5. Redirect if unauthenticated
6. Logout
7. Successful deployment readiness

Build everything with concise, optimized, internship-ready code that can realistically be completed and understood quickly.
