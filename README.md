# Zealthy Project

This repository contains two main components:  

- **Server**: The backend application built with Node.js and Express.  
- **Zealthy**: The frontend application built with Next.js.

---

## Prerequisites  

Before you start, ensure you have the following installed:  

- [Node.js](https://nodejs.org/) (via [nvm](https://github.com/nvm-sh/nvm))  
- [Docker](https://www.docker.com/)

---

## Running the Project  

### Steps to Run  

1. **Navigate to the server directory:**  
   ```bash  
   cd server  
    ```

2. **Ensure you're using the correct Node.js version for the server:**  
   ```bash  
   nvm use  
    ```

3. **Install the server dependencies:**  
   ```bash  
   npm install
    ```

4. **Start the database and other required services with Docker:**  
   ```bash  
   docker compose up -d  
    ```

5. **Start the backend server:**  
   ```bash  
   npm start  
    ```

6. **Open a new terminal and navigate to the zealthy directory:**  
   ```bash  
   cd zealthy
    ```

7. **Ensure you're using the correct Node.js version for the frontend:**  
   ```bash  
   nvm use
    ```

8. **Install the frontend dependencies:**  
   ```bash  
   npm install
    ```

9. **Start the frontend application:**  
   ```bash  
    npm run dev  
    ```

10. **The backend will run on http://localhost:3030 and the frontend on http://localhost:3000.**
