# Users Application (CRUD)

This is a simple Users Management Application built with **Angular**. It supports **Create, Read, Update, and Delete (CRUD)** operations using a mock backend powered by **JSON Server**.

## 📌 Tech Stack & Libraries Used

### **Frontend**
- **Framework:** Angular (Standalone Components)
- **UI Framework:** Angular Material (`MatTable`, `MatDialog`, `MatButton`, `MatIcon`, `MatSidenav`, etc.)
- **Styling:** SCSS, Material Themes
- **Routing:** Angular Router
- **Forms & Validation:** Angular Forms (Reactive Forms)
- **State Management:** Component-based State Management
- **HTTP Client:** Angular HttpClient

### **Backend (Mock Server)**
- **Database:** JSON (via JSON Server)
- **Fake API Server:** JSON Server

## 📚 Key Libraries Used

| Library              | Purpose                                    |
|----------------------|--------------------------------------------|
| `@angular/core`      | Core Angular functionality                 |
| `@angular/router`    | Client-side navigation                     |
| `@angular/forms`     | Form handling and validation               |
| `@angular/material`  | UI components (buttons, tables, modals, etc.) |
| `@angular/common`    | Common Angular utilities                   |
| `json-server`        | Fake REST API for CRUD operations          |
| `rxjs`              | Handling async data streams                 |

## 🗄️ Database & API
- **Database Type:** JSON (used as a mock database)
- **Backend:** JSON Server (`db.json` acts as a simple REST API)
- **Operations Supported:** Create, Read, Update, Delete (CRUD)

## ✨ Features Implemented
✅ Standalone Angular Components (No NgModule)  
✅ Modern UI with Angular Material  
✅ CRUD with Fake API (JSON Server)  
✅ Validation (Username, Password, Email, Birthdate)  
✅ Material Dialog for Deletion Confirmation  
✅ Password Masking with Toggle Visibility  
✅ Navbar with Sidebar Navigation  
✅ Mobile-Responsive Layout  

---

### 🚀 How to Run the Project

1. **Clone the Repository**
   ```sh
   git clone <repository-url>
   cd users-app

2. **Install Dependencies**
    npm install

3. **Run JSON Server (Mock API)**
    npm run json-server

4. **Run the Angular Application**
    ng serve

5. **Open in Browser**
    http://localhost:4200/


### 🎯 Future Improvements
Implement a real backend with Node.js / Express & MongoDB
Improve UI animations and responsiveness
Add user authentication & authorization

📌 Author: Jayson Banjawan
📅 Project Completion Date: March 2025
🛠️ Built with ❤️ using Angular & JSON Server
