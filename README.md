# To-Do App Backend

This is a simple **To-Do App Backend** built using **Node.js, Express.js, MySQL, and Sequelize**. It provides a REST API for managing tasks, including features like adding, updating, deleting, and retrieving to-do tasks.

## 🚀 Live API

The backend is deployed on **Render** and can be accessed here:  
👉 **[https://basic-crud-assignment.onrender.com](https://basic-crud-assignment.onrender.com)**

## 📌 Features

- Add new tasks
- Get all tasks
- Update task details
- Delete tasks
- Mark tasks as completed

## 🛠 Tech Stack

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MySQL** - Relational database
- **Sequelize** - ORM for MySQL
- **Dotenv** - Environment variable management
- **Cors** - Enable CORS for API calls
- **Body-parser** - Parse JSON request bodies

## 📂 Project Structure

```
todo-app-backend/
│── src/
│   ├── config/
│   │   ├── database.js    # Database connection
│   ├── models/
│   │   ├── todo.model.js  # To-Do Model
│   ├── routes/
│   │   ├── todo.routes.js # API Routes
│   ├── controllers/
│   │   ├── todo.controller.js # Business logic
│   ├── app.js            # Main server file
│── .env                  # Environment variables
│── package.json          # Dependencies & scripts
│── README.md             # Project documentation
```

## 🚀 API Endpoints

### 🎯 Base URL: `https://basic-crud-assignment.onrender.com/api/todos`

| Method   | Endpoint | Description    |
| -------- | -------- | -------------- |
| `POST`   | `/`      | Add a new task |
| `GET`    | `/`      | Get all tasks  |
| `PUT`    | `/:id`   | Update a task  |
| `DELETE` | `/:id`   | Delete a task  |

### 🔹 Example API Request (POST a Task)

```sh
POST https://basic-crud-assignment.onrender.com/api/todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread"
}
```

### 🔹 Example API Response

```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread",
  "completed": false
}
```

---

### 🚀 Next Steps

- ✅ Add **user authentication** (JWT-based login)
- ✅ Implement **pagination** for large task lists
- ✅ Add **task filtering** by completion status
