---
### Library Book Management System (LBMS) Backend

This Node.js server provides a basic Library Book Management System to manage books in a library. It includes CRUD (Create, Read, Update, Delete) operations for books stored in a MongoDB database.


Clone the repository:
   ```bash
   git clone https://github.com/Keshav-1803/Library-Book-Management-System.git
   ```
   The server will start on `http://localhost:8000`.

### Endpoints
The LBMS backend provides the following endpoints:

1. **Add a Book**
   - URL: `/api/books/add`
   - Method: POST
   - Request Body:
     ```json
     {
       "title": "String",
       "author": "String",
       "genre": "String",
       "ISBN": "String",
       "availability": "Boolean"
     }
     ```
   - Response:
     - Success: Status 201 - Book added successfully
     - Error: Status 400 - Invalid request data

2. **Update a Book**
   - URL: `/api/books/update/:id`
   - Method: PUT
   - Parameters: Book ID
   - Request Body:
     ```json
     {
       "title": "String",
       "author": "String",
       "genre": "String",
       "ISBN": "String",
       "availability": "Boolean"
     }
     ```
   - Response:
     - Success: Status 200 - Book updated successfully
     - Error: Status 404 - Book not found

3. **Delete a Book**
   - URL: `/api/books/delete/:id`
   - Method: DELETE
   - Parameters: Book ID
   - Response:
     - Success: Status 200 - Book deleted successfully
     - Error: Status 404 - Book not found

4. **Search Books**
   - URL: `/api/books/search`
   - Method: GET
   - Query Parameters (optional):
     - `title`: Title of the book (String)
     - `author`: Author of the book (String)
     - `genre`: Genre of the book (String)
     - `ISBN`: ISBN of the book (String)
     - `availability`: Availability of the book (Boolean)
   - Response:
     - Success: Status 200 - Array of books matching the search criteria
     - Error: Status 400 - Invalid search parameters

### Database Schema
The MongoDB database schema for the books collection is as follows:

```json
{
  "title": "String",
  "author": "String",
  "genre": "String",
  "ISBN": "String",
  "availability": "Boolean"
}
```

### Usage
- Use the provided endpoints to add, update, delete, and search for books in the library.
- Make requests to the server using tools like Postman or through frontend applications.

### Sample Requests
1. **Add a Book**
   - Method: POST
   - URL: `http://localhost:8000/api/books/add`
   - Request Body:
     ```json
     {
       "title": "The Great Gatsby",
       "author": "F. Scott Fitzgerald",
       "genre": "Classic Fiction",
       "ISBN": "1234567890",
       "availability": true
     }
     ```

2. **Update a Book**
   - Method: PUT
   - URL: `http://localhost:8000/api/books/update/6123abc456def789ghi0123`
   - Request Body:
     ```json
     {
       "title": "Updated Title",
       "author": "Updated Author",
       "genre": "Updated Genre",
       "ISBN": "Updated ISBN",
       "availability": true
     }
     ```

3. **Delete a Book**
   - Method: DELETE
   - URL: `http://localhost:8000/api/books/delete/6123abc456def789ghi0123`

4. **Search Books**
   - Method: GET
   - URL: `http://localhost:8000/api/books/search?title=Great&author=Fitzgerald&availability=true`

### Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

### Project Structure
```
.
├── node_modules
├── src
    ├── controllers
    │   └── libraryController.mjs
    ├── models
    │   └── libraryModel.mjs
    ├── routes
    │   └── route.mjs
    ├── index.mjs
├── package-lock.json
├── package.json
└── README.md
```

### Notes
- Make sure to have MongoDB installed and running on your machine.
- Update the MongoDB connection string in `index.mjs` with your database credentials.

This Library Book Management System backend provides a simple and efficient way to manage books in a library. Feel free to explore and customize it according to your needs.
---
