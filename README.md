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
  - **Lesson 2: Modular routes (`app.js`, `routes/`)**  
    - Split routes into `routes/events.js`, `routes/classes.js`, `routes/contact.js`  
    - Mounted routers in `app.js` with `app.use('/path', router)`  
    - Organized project for scalability and team collaboration  
    - Runnable via `node app.js`  
  - **Lesson 3: PATCH endpoint + validation (`app.js`, `routes/products.js`)**  
    - Implements `PATCH /products/:id/inStock` to update only the `inStock` field  
    - Validates input: returns `400 Bad Request` if `inStock` is missing or not a boolean  
    - Returns `404 Not Found` if product ID does not exist  
    - Demonstrates partial updates, clear status codes, and modular routing  
    - Runnable via `node app.js`  
  - **Lesson 4: POST /transfer endpoint (`app.js`, `routes/transfer.js`)**  
    - Implements `POST /transfer` to move points between accounts  
    - Uses fixed valid UUIDs for Alice and Bob to simplify testing  
    - Validates: both IDs must be valid UUIDs, points must be a positive integer  
    - Returns `404 Not Found` if sender/receiver not found, `400 Bad Request` if invalid UUIDs or insufficient points  
    - Responds with `200 OK` and updated balances on success  
    - Demonstrates transaction-like workflow, input validation, and structured error handling  
    - Runnable via `node app.js`  
  - **Lesson 5: BakingController (`app.js`, `routes/baking.js`)**  
    - Implements `POST /baking/start` to begin baking an order  
    - Implements `GET /baking/status/:id` to check baking status by order ID  
    - Uses in-memory array to track baking orders  
    - Validates: returns `400 Bad Request` if orderId or flavor missing, `404 Not Found` if order not found  
    - Responds with `201 Created` on start and `200 OK` on status retrieval  
    - Demonstrates modular routing, workflow separation, and clear status codes  
    - Runnable via `node app.js`  
  - **Lesson 6: Discharge workflow with insurance middleware (`app.js`, `routes/discharge.js`)**  
    - Implements middleware chain for discharge: request log, doctor sign-off, pharmacy review, follow-up scheduling  
    - Adds `insuranceApprovalCheck` middleware to enforce `req.body.insuranceApproved`  
    - Returns `403 Forbidden` when insurance approval is missing  
    - Centralized error handler logs discharge steps for troubleshooting  
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

#### Lesson 2: Modular routes
```bash
cd Internship_caseStudies/express/lesson2
npm install
node app.js
```
Then visit:
- [http://localhost:3000/events](http://localhost:3000/events) → JSON list of events  
- [http://localhost:3000/classes](http://localhost:3000/classes) → JSON list of classes  
- [http://localhost:3000/contact](http://localhost:3000/contact) → JSON with email + phone  

#### Lesson 3: PATCH endpoint + validation
```bash
cd Internship_caseStudies/express/lesson3
npm install
node app.js
```
Then test:
```bash
# Valid update
curl -X PATCH http://localhost:3000/products/1/inStock \
  -H "Content-Type: application/json" \
  -d '{"inStock": false}'

# Invalid update (missing or wrong type)
curl -X PATCH http://localhost:3000/products/1/inStock \
  -H "Content-Type: application/json" \
  -d '{}'
curl -X PATCH http://localhost:3000/products/1/inStock \
  -H "Content-Type: application/json" \
  -d '{"inStock": "yes"}'
```

#### Lesson 4: POST /transfer endpoint
```bash
cd Internship_caseStudies/express/lesson4
npm install
node app.js
```
Then test:
```bash
# Valid transfer
curl -X POST http://localhost:3000/transfer \
  -H "Content-Type: application/json" \
  -d '{"fromCustomerId":"11111111-1111-4111-8111-111111111111","toCustomerId":"22222222-2222-4222-8222-222222222222","points":100}'

# Invalid UUIDs
curl -X POST http://localhost:3000/transfer \
  -H "Content-Type: application/json" \
  -d '{"fromCustomerId":"123","toCustomerId":"456","points":50}'

# Insufficient points
curl -X POST http://localhost:3000/transfer \
  -H "Content-Type: application/json" \
  -d '{"fromCustomerId":"22222222-2222-4222-8222-222222222222","toCustomerId":"11111111-1111-4111-8111-111111111111","points":9999}'
```

#### Lesson 5: BakingController
```bash
cd Internship_caseStudies/express/lesson5
npm install
node app.js
```
Then test:
```bash
# Start baking an order
curl -X POST http://localhost:3000/baking/start \
  -H "Content-Type: application/json" \
  -d '{"orderId":"101","flavor":"chocolate"}'

# Check baking status
curl -X GET http://localhost:3000/baking/status/101
```

#### Lesson 6: Discharge workflow with insurance middleware
```bash
cd Internship_caseStudies/express/lesson6
npm install
node app.js
```
Then test:
```bash
# Valid discharge request
curl -X POST http://localhost:3000/discharge \
  -H "Content-Type: application/json" \
  -d '{"patientName":"John Doe","doctorSigned":true,"pharmacyChecked":true,"followupScheduled":true,"insuranceApproved":true}'

# Missing insurance approval (should return 403)
curl -X POST http://localhost:3000/discharge \
  -H "Content-Type: application/json" \
  -d '{"patientName":"Jane Doe","doctorSigned":true,"pharmacyChecked":true,"followupScheduled":true}'
```

---

## 📈 Progress Tracker
- [x] **TypeScript**: Functions, Advanced Types, Generics, Design Patterns (Observer + Strategy), Classes & Access Modifiers  
- [x] **React (Vite)**: Component-driven solutions, hooks, state management  
- [x] **MongoDB Case Study 1**: Aggregation pipeline (MovieFlix analytics)  
- [x] **MongoDB Case Study 2**: CRUD challenge (FastBite menu, idempotent script)  
- [x] **MongoDB Case Study 3**: Transactions & Refunds (FinTrust wallet, ACID compliance)  
- [x] **Express Lesson 1**: Basic routes and server setup  
- [x] **Express Lesson 2**: Modular routes with mounted routers  
- [x] **Express Lesson 3**: PATCH endpoint with boolean validation  
- [x] **Express Lesson 4**: POST /transfer endpoint with UUID validation and error handling  
- [x] **Express Lesson 5**: BakingController  
- [x] **Express Lesson 6**: Discharge workflow with insurance middleware  
- [ ] **Express Lesson 7+**: Global error handling, authentication, and advanced middleware (upcoming)  

---

## ✨ Highlights
- Strong focus on **clarity and modularity**.  
- Each solution includes **conceptual explanation + runnable code**.  
- Demonstrates growth across **frontend, backend, and database layers** of the MERN stack.  
- MongoDB scripts are **idempotent** and **transaction-safe**, ensuring repeatable outputs and ACID compliance.  
- Express lessons show **step-by-step backend development**, from simple routes to modular structure and precise REST endpoints with validation and middleware.

---

## 📜 License
This project is open-source under the MIT License.
