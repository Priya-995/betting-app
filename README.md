# 🎯 Betting Web Application (Technical Assessment)

A full-stack React/Next.js web application built as part of the **Full Stack Developer Intern Technical Assessment**.

The project includes:

- 👤 User Website  
- 🛠 Admin Panel  
- ⚡ Secure backend APIs  
- 🗄 PostgreSQL database (Supabase)  
- 🚀 Deployed on Vercel  

---

## 🧑‍💻 Tech Stack

### Frontend
- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- Supabase (PostgreSQL)
- RPC (Stored Procedures)
- Transaction-safe wallet deduction logic

### Deployment
- Vercel

---

## 📌 Features

### 👤 User Website
- View available markets
- Place bets (Single, Jodi, Single Panna, Double Panna, Triple Panna)
- Wallet balance handling
- API-integrated bet submission
- Fully responsive UI design

### 🛠 Admin Panel
- Structured admin routing
- Ready for result declaration logic
- Extendable backend architecture

---

## 🔐 Backend Logic

- Atomic wallet deduction using PostgreSQL stored procedure
- Prevents race conditions
- Ensures transactional integrity
- Secure server-side Supabase service role usage
- Proper separation of UI, API, and database layers

---

## 📂 Project Structure
app/
├── dashboard/
├── bet/
𝑚
𝑎
𝑟
𝑘
𝑒
𝑡
𝐼
𝑑
marketId/
├── admin/
├── api/
│ ├── bets/
│ ├── markets/
components/
lib/
types/

---

## 📈 Scalability Note

This project is structured with scalability in mind:

- Modular component architecture
- API abstraction layer
- Database logic centralized via RPC functions
- Clear separation of concerns (UI / API / DB)

Easily extendable for:
- Authentication integration
- Bet history module
- Result declaration logic
- Admin controls & analytics
- Real-time updates

### For production-level scaling:
- Implement authentication (JWT / Supabase Auth)
- Add rate limiting
- Introduce caching layer (Redis)
- Add pagination for large datasets
- Use connection pooling
- Integrate logging & monitoring tools

---

## 🚀 Live Demo

🔗 https://betting-app-4hfi.vercel.app/

---

## 👩‍💻 Author

**Priya Singh**  
Full Stack Developer (React / Node / PostgreSQL)
