# To-Do List Application

A full-stack To-Do List application built with a Node.js/Express backend (using in-memory storage) and a React frontend.

## Features

- Add new tasks
- Mark tasks as completed/incomplete
- Delete tasks
- Responsive, mobile-friendly design
- Strike-through effect for completed tasks
- **Demo-ready:** Backend starts with a few dummy tasks so you can see the app working immediately.

## Tech Stack

### Backend
- Node.js
- Express.js
- CORS
- Body-parser

### Frontend
- React.js
- Axios for API calls
- CSS for styling

## Project Structure

```
todo-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   │   └── tasks.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── AddTask.jsx
    │   │   └── TaskList.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Backend Setup

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   The backend server will run on [http://localhost:5000](http://localhost:5000).

   > **Note:** The backend starts with a few example tasks so you can see the app working right away.

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173) (default Vite port).

## API Endpoints

- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Add a new task  
  - Body: `{ "title": "Task title", "completed": false }`
- `PUT /tasks/:id` - Update task completion status  
  - Body: `{ "completed": true/false }`
- `DELETE /tasks/:id` - Delete a task

## Testing the Application

1. Start both backend and frontend servers as described above.
2. Open the frontend in your browser (default: [http://localhost:5173](http://localhost:5173)).
3. Test the following features:
   - Add a new task using the input form
   - Mark tasks as complete/incomplete using the toggle button
   - Delete tasks using the delete button
   - Verify completed tasks have strike-through styling
   - Test responsive design on mobile devices
   - **You will see some example tasks already present to demonstrate the app is working.**

## API Validation

- Task titles are required and must be non-empty strings
- Proper error handling for invalid requests
- 404 errors for non-existent tasks

## Mobile Responsiveness

- Form elements stack vertically on small screens
- Task items adjust layout for mobile viewing
- Buttons remain accessible on touch devices

## Development Notes

- **In-memory storage:** Tasks are stored in an array on the backend. Data will reset when the server restarts.
- **CORS:** Enabled for cross-origin requests.
- **Frontend:** Includes error handling for API calls. Components are modular and reusable.
- **Validation:** Backend validates that task titles are non-empty.
- **Demo tasks:** The backend starts with a few dummy tasks for demonstration.
