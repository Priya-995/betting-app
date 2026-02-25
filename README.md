🎯 Betting Web Application (Technical Assessment)

A full-stack React/Next.js web application built as part of the Full Stack Developer Intern Technical Assessment.

The project includes:

👤 User Website

🛠 Admin Panel

⚡ Secure backend APIs

🗄 PostgreSQL database (Supabase)

🚀 Deployed on Vercel

🧑‍💻 Tech Stack
Frontend

Next.js 16 (App Router)

React

TypeScript

Tailwind CSS

Backend

Next.js API Routes

Supabase (PostgreSQL)

RPC (Stored Procedures)

Transaction-safe wallet deduction logic

Deployment

Vercel

📌 Features
👤 User Website

View available markets

Place bets (Single, Jodi, Panna types)

Wallet balance handling

API-integrated bet submission

Responsive UI design

🛠 Admin Panel

Admin route structure

Ready for result declaration logic

Extendable backend architecture

🔐 Backend Logic

Atomic wallet deduction using PostgreSQL function

Prevents race conditions

Ensures transactional integrity

Secure server-side Supabase service role usage

Proper separation of UI, API, and database layers

📂 Project Structure
app/
 ├── dashboard/
 ├── bet/[marketId]/
 ├── admin/
 ├── api/
 │    ├── bets/
 │    ├── markets/
components/
lib/
types/
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone <your-repo-url>
cd betting-app
2️⃣ Install Dependencies
npm install
3️⃣ Environment Variables

Create a .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

⚠️ Do NOT expose service role key publicly.

4️⃣ Run Development Server
npm run dev
5️⃣ Production Build
npm run build
npm start
📈 Scalability Note

This project is structured with scalability in mind:

Modular component architecture

API abstraction layer

Database logic centralized via RPC functions

Separation of concerns (UI / API / DB)

Easily extendable for:

Authentication

Bet history

Result declaration

Admin controls

Real-time updates

For production-level scaling:

Add authentication (JWT / Supabase Auth)

Implement rate limiting

Add caching layer (Redis)

Add pagination for large datasets

Use connection pooling

Add logging & monitoring

🚀 Live Demo

🔗 https://betting-app-4hfi.vercel.app/
