# REST API Project

This project is part of Laurea UAS's Full Stack Development course.
This is a simple REST API built with Node.js, Express, and MongoDB. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on items in a MongoDB database. The project is deployed on [Render.com](https://render.com).

## Deployment

This project is deployed on Render. You can access the live API at:

- [https://restapi-0v5t.onrender.com](https://restapi-0v5t.onrender.com)
- Video Presentation: 

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing item data.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Render**: Cloud platform for deployment.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/maixuanlinh/restapi.git
   cd restapi
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

---

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
MONGO_URI=mongodb_connection_string
PORT=5000
```

- **MONGO_URI**: MongoDB connection string (from MongoDB Atlas).
- **PORT**: The port number for running the app locally (default: 5000).

---

## Usage

### Running Locally

1. Ensure MongoDB is running (you can use a local instance or a MongoDB Atlas cluster).
2. Start the server:

   ```bash
   npm start
   ```

3. The API will be available at `http://localhost:5000`.

### Testing the API

Use **Postman** or **curl** to test the API endpoints (see below for endpoint details).

---

## API Endpoints

| HTTP Method | Endpoint                        | Description                       |
|-------------|---------------------------------|-----------------------------------|
| GET         | `/api/getall`                   | Retrieve all items                |
| GET         | `/api/:id`                      | Retrieve an item by ID            |
| POST        | `/api/add`                      | Create a new item                 |
| PUT         | `/api/update/:id`               | Update an item by ID              |
| DELETE      | `/api/delete/:id`               | Delete an item by ID              |

### Example Request and Response

#### GET `/api/getall`

- **Description**: Retrieve all items in the database.
- **Example Request**: 
  ```bash
  GET https://restapi-0v5t.onrender.com/api/getall
  ```
- **Example Response**:
  ```json
  [
      {
          "_id": "63a469353f57f82c4d372134",
          "name": "<--Click this to delete an item",
          "createdAt": "2024-11-17T21:02:17.197Z"
      },
      {
          "_id": "63a48c10256dae822e18afd5",
          "name": "Sample Item",
          "createdAt": "2024-11-17T21:02:17.197Z"
      }
  ]
  ```

#### POST `/api/add`

- **Description**: Create a new item in the database.
- **Example Request**:
  ```bash
  POST https://restapi-0v5t.onrender.com/api/add
  ```
  - **Body**:
    ```json
    {
        "name": "New Item",
        "description": "This is a new item"
    }
    ```
- **Example Response**:
  ```json
  {
      "_id": "63a469353f57f82c4d372abc",
      "name": "New Item",
      "description": "This is a new item",
      "createdAt": "2024-11-17T21:05:30.197Z"
  }
  ```

---



### Deployment Steps

1. Push your code to GitHub.
2. Log in to Render.com and create a new **Web Service**.
3. Connect the service to your GitHub repository.
4. Set environment variables (`MONGO_URI`) in Render’s dashboard.
5. Use the following build and start commands:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Render will automatically deploy your app and provide a public URL.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

Thanks to all the open-source packages and tools that made this project possible.
