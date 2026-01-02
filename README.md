# Winternship 2025 Case Studies – Solutions

Welcome to my repository of solved lessons from the **Winternship 2025 Case Studies**.  
This repo showcases my progress in mastering modern web development concepts through practical, hands-on challenges across **TypeScript**, **React (Vite)**, **MongoDB**, and now **Express**.

---

## 📘 Overview
The Winternship 2025 program provides structured case studies across:
- **TypeScript** → mastering language fundamentals, advanced types, generics, and design patterns  
- **React (Vite)** → building interactive UIs with hooks, state management, and component-driven architecture  
- **MongoDB** → designing aggregation pipelines for analytics and data transformation, CRUD operations, and ACID-compliant transactions  
- **Express** → backend routing, middleware, and REST APIs  

Each case study bridges theory and practice with real-world coding exercises.

---

## 🚀 What’s Inside
- **CaseStudy1 (TypeScript)**  
  - Functions (optional, default, rest parameters, callbacks, recursion, overloads)  
  - Advanced Types (union, utility, mapped types)  
  - Generics (generic classes and functions)  
  - Design Patterns (Observer, Strategy)  
  - Classes & Access Modifiers (inheritance, private/protected members)  

- **react/**  
  - Vite-based React app (`my-react-app`)  
  - Component-driven solutions with hooks  
  - State management patterns  
  - Code-splitting and optimization  

- **mongodb/**  
  - **Case Study 1: MovieFlix Analytics (`solution.js`)**  
    - Aggregation pipelines using `$match`, `$group`, `$project`, `$sort`, `$limit`  
    - Example queries: views, ratings, genres  
    - Runnable via `mongosh` or Node.js driver  

  - **Case Study 2: FastBite CRUD Challenge (`menu-crud.js`)**  
    - Demonstrates `insertOne`, `find`, `updateOne`, `deleteOne`  
    - Idempotent script using `upsert` and `$addToSet` for repeatable runs  
    - Runnable via `mongosh` or Node.js driver  

  - **Case Study 3: FinTrust Transactions & Refunds (`refund-transaction.js`, `seed-refund.js`)**  
    - Implements **multi-document ACID transactions** in MongoDB  
    - Secure money transfers with replica set enabled  
    - Refund workflow: balance adjustments, transaction status updates, and audit trail logging  
    - Prints balances before and after refund for verification  
    - Demonstrates rollback prevention and double-refund safeguards  

- **express/**  
  - **Lesson 1: Getting Started (`app.js`)**  
    - Basic Express server setup with `npm init` and `npm install express`  
    - Routes: `/` (homepage), `/events` (list of activities), `/contact` (JSON with email + phone)  
    - Demonstrates `res.send()` vs `res.json()` responses  
    - Runnable via `node app.js`  

---

## 🛠️ How to Run
Clone the repo and run any case study:

### TypeScript
```bash
cd Internship_caseStudies/CaseStudy1
tsc lesson-name.ts
node lesson-name.js
```

### React (Vite)
```bash
cd Internship_caseStudies/react/my-react-app
npm install
npm run dev
```
This will start the Vite dev server and open the app in your browser.

### MongoDB

#### Case Study 1: MovieFlix Analytics
```bash
cd Internship_caseStudies/mongodb
npm install
node solution.js
```

#### Case Study 2: FastBite CRUD Challenge
```bash
cd Internship_caseStudies/mongodb
npm install
node menu-crud.js
```

#### Case Study 3: FinTrust Transactions & Refunds
```bash
cd Internship_caseStudies/mongodb
npm install
node seed-refund.js   # seed sample users + transaction
node refund-transaction.js   # run refund workflow
```

### Express

#### Lesson 1: Getting Started
```bash
cd Internship_caseStudies/express/lesson1
npm install
node app.js
```
Then visit:
- [http://localhost:3000/](http://localhost:3000/) → homepage  
- [http://localhost:3000/events](http://localhost:3000/events) → JSON list of events  
- [http://localhost:3000/contact](http://localhost:3000/contact) → JSON with email + phone  

---

## 📈 Progress Tracker
- [x] **TypeScript**: Functions, Advanced Types, Generics, Design Patterns (Observer + Strategy), Classes & Access Modifiers  
- [x] **React (Vite)**: Component-driven solutions, hooks, state management  
- [x] **MongoDB Case Study 1**: Aggregation pipeline (MovieFlix analytics)  
- [x] **MongoDB Case Study 2**: CRUD challenge (FastBite menu, idempotent script)  
- [x] **MongoDB Case Study 3**: Transactions & Refunds (FinTrust wallet, ACID compliance)  
- [x] **Express Lesson 1**: Basic routes and server setup  
- [ ] **Express Lesson 2+**: Middleware, REST APIs, error handling (upcoming)  

---

## ✨ Highlights
- Strong focus on **clarity and modularity**.  
- Each solution includes **conceptual explanation + runnable code**.  
- Demonstrates growth across **frontend, backend, and database layers** of the MERN stack.  
- MongoDB scripts are **idempotent** and **transaction-safe**, ensuring repeatable outputs and ACID compliance.  
- Express lessons show **step-by-step backend development**, starting from simple routes to full REST APIs.  

---

## 📜 License
This project is open-source under the MIT License.
