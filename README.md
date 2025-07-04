
# 📚 Library Management System

A clean, minimal, and fully functional **Library Management System** built with **React**, **Redux Toolkit Query**, **Tailwind CSS**, and **TypeScript**. This app allows users to manage books, borrow them, and view a borrowing summary — all without authentication.

---

## 🚀 Live Demo

[🔗 Live Link](https://your-deployment-url.com)

---

## ✨ Features

- ✅ Public Routes (no login)
- ✅ Book List with Edit/Delete/Borrow
- ✅ Add New Book
- ✅ Borrow Book Form
- ✅ Business Logic (copies update, availability)
- ✅ Borrow Summary with Aggregation
- ✅ Responsive & Clean UI
- ✅ Toast notifications & alerts
- ✅ Loading spinners & error handling

---

## 🧩 Tech Stack

| Technology        | Purpose                          |
|-------------------|----------------------------------|
| **React**         | UI library                       |
| **TypeScript**    | Static typing                    |
| **Redux Toolkit Query** | State management & API handling |
| **Tailwind CSS**  | Utility-first styling            |
| **React Hook Form** | Form management                |
| **Vite**          | Fast dev server & bundler        |
| **SweetAlert2**   | Confirmation modals              |
| **React Toastify**| Toast notifications              |
| **Radix UI**      | Accessible UI primitives         |
| **React Router v7**| Navigation between pages        |

---

## 🗂️ Folder Structure
src/
│
├── components/ # UI components (e.g., Button, Input)
├── commonComponents/ # Shared components (Loader, Footer)
├── pages/ # Page components (Books, Create, Borrow)
├── redux/ # Redux store, API slices
│ ├── api/ # bookApi.ts, borrowApi.ts
│
├── types/ # TypeScript interfaces & types
├── MainLayout.tsx # Main app layout
└── main.tsx # Entry point

## 🧾 API Overview
Backend hosted at: https://libarary-db.vercel.app/api

- GET /books

- POST /books

- PUT /books/:id

- DELETE /books/:id

- GET /borrow

- POST /borrow


---

## 📦 All Dependencies
{
  - "@radix-ui/react-checkbox": "^1.3.2",
  - "@radix-ui/react-label": "^2.1.7",
  - "@radix-ui/react-slot": "^1.2.3",
  - "@reduxjs/toolkit": "^2.8.2",
  - "@tailwindcss/vite": "^4.1.11",
  - "class-variance-authority": "^0.7.1",
  - "clsx": "^2.1.1",
  - "lucide-react": "^0.525.0",
  - "react": "^19.1.0",
  - "react-dom": "^19.1.0",
  - "react-hook-form": "^7.59.0",
  - "react-icons": "^5.5.0",
  - "react-redux": "^9.2.0",
  - "react-router": "^7.6.3",
  - "react-spinners": "^0.17.0",
  - "react-toastify": "^11.0.5",
  - "sweetalert2": "^11.22.2",
  - "tailwind-merge": "^3.3.1",
  - "tailwindcss": "^4.1.11"
}

---

## 🙋‍♂️ Author
- Hayder Ali 
- 📧 Email: hayderbd4290@gamil.com


