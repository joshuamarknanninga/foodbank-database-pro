# Food Bank Inventory Management Application

A web-based application to help manage the inventory of a food bank. This application allows users to add, view, update, and delete inventory items, as well as search, sort, and filter items. It is designed to be responsive and works well on both desktop and mobile devices.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices using Bootstrap.
- **Inventory Management**: Add, view, update, and delete inventory items.
- **Search Functionality**: Search items by name or category.
- **Sorting**: Sort items by name, quantity, or category.
- **Filtering**: Filter items based on categories.
- **Pagination**: Navigate through large inventories using pagination controls.
- **Data Persistence**: Inventory data is stored in a JSON file for simplicity.

---

## Demo

*Since this is a local application, you'll need to follow the installation steps to run it on your machine.*

---

## Technology Stack

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Bootstrap 4.5.2 (via CDN)
- **Backend**:
  - Node.js
  - Express.js
  - Body-parser (middleware for parsing request bodies)
  - File system (fs) module for data persistence
- **Data Storage**:
  - JSON file (`inventory.json`) for storing inventory data

---

## Project Structure

```
food-bank-inventory/
├── package.json
├── package-lock.json
├── server.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── routes/
│   └── items.js
├── models/
│   └── Item.js
└── data/
    └── inventory.json
```

- **package.json**: Contains project metadata and dependencies.
- **server.js**: Entry point for the Node.js server.
- **public/**: Contains all frontend files (HTML, CSS, JavaScript).
- **routes/**: Contains Express route handlers.
- **models/**: Contains data models and logic for CRUD operations.
- **data/**: Contains the `inventory.json` file for data storage.

---

## Installation

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/food-bank-inventory.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd food-bank-inventory
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

   This will install all the required packages listed in `package.json`.

4. **Initialize the Data File**

   Ensure that the `data/inventory.json` file exists and contains an empty array:

   ```json
   []
   ```

   If the file doesn't exist, create it:

   ```bash
   mkdir data
   echo "[]" > data/inventory.json
   ```

---

## Usage

### Starting the Server

You can start the server using the following command:

```bash
npm start
```

By default, the server will run on **port 3001**. You can change the port by modifying the `PORT` variable in `server.js` or by setting the `PORT` environment variable.

### Accessing the Application

Open your web browser and navigate to:

```
http://localhost:3001
```

---

## Application Features and Instructions

### 1. Adding Items

- Fill out the **Item Name**, **Quantity**, and **Category** fields in the form at the top of the page.
- Click the **Add Item** button.
- The item will be added to the inventory and displayed in the table below.

### 2. Viewing Items

- All inventory items are displayed in the table.
- Items are paginated, showing a set number of items per page (default is 5).

### 3. Updating Items

- Click the **Update** button next to the item you wish to update.
- Enter the new quantity in the prompt that appears.
- The item's quantity will be updated.

### 4. Deleting Items

- Click the **Delete** button next to the item you wish to remove.
- Confirm the deletion when prompted.
- The item will be removed from the inventory.

### 5. Searching Items

- Use the **Search** input field to search for items by name or category.
- The table will update in real-time to show matching items.

### 6. Filtering Items

- Use the **Category Filter** dropdown to filter items by category.
- Select a category to display only items in that category.
- Select **All Categories** to remove the filter.

### 7. Sorting Items

- Use the **Sort By** dropdown to sort items by name, quantity, or category.
- The table will update to reflect the selected sorting order.

### 8. Pagination

- Navigate between pages using the **Previous** and **Next** buttons or by clicking on the page numbers.
- The pagination controls are located below the inventory table.

---

## API Endpoints

The application provides a simple RESTful API for managing inventory items.

### Base URL

```
http://localhost:3001/api/items
```

### Endpoints

#### 1. **Get All Items**

- **URL**: `/api/items`
- **Method**: `GET`
- **Description**: Retrieves all inventory items.
- **Response**: JSON array of item objects.

#### 2. **Add a New Item**

- **URL**: `/api/items`
- **Method**: `POST`
- **Description**: Adds a new item to the inventory.
- **Body Parameters**:
  - `name` (string): Name of the item.
  - `quantity` (number): Quantity of the item.
  - `category` (string): Category of the item.
- **Response**: JSON array of updated items.

#### 3. **Update an Item**

- **URL**: `/api/items/:id`
- **Method**: `PUT`
- **Description**: Updates an existing item.
- **URL Parameters**:
  - `id` (string): ID of the item to update.
- **Body Parameters**: Fields to update (e.g., `quantity`).
- **Response**: JSON array of updated items.

#### 4. **Delete an Item**

- **URL**: `/api/items/:id`
- **Method**: `DELETE`
- **Description**: Deletes an item from the inventory.
- **URL Parameters**:
  - `id` (string): ID of the item to delete.
- **Response**: JSON array of updated items.

---

## Troubleshooting

### Common Issues

#### 1. **Port Already in Use**

**Error Message**:

```
Error: listen EADDRINUSE: address already in use :::3001
```

**Solution**:

- Another process is using the port. Free up the port by killing the process or change the port number in `server.js` or set the `PORT` environment variable.

#### 2. **Cannot Find Module '../models/Item'**

**Error Message**:

```
Error: Cannot find module '../models/Item'
```

**Solution**:

- Ensure that the `Item.js` file exists in the `models` directory.
- Check for correct file naming and case sensitivity (`Item.js` vs. `item.js`).
- Verify that the require statement in `routes/items.js` matches the file name.

#### 3. **SyntaxError: Unexpected End of JSON Input**

**Error Message**:

```
SyntaxError: Unexpected end of JSON input
```

**Solution**:

- The `inventory.json` file is empty or contains invalid JSON.
- Ensure that `inventory.json` contains valid JSON, such as an empty array `[]`.
- Update the `readDataFile` function in `models/Item.js` to handle empty or missing files gracefully.

#### 4. **Node.js Version Issues**

**Symptom**:

- The application behaves unexpectedly or certain features don't work.

**Solution**:

- Ensure you're using a compatible version of Node.js (preferably LTS versions like v14.x.x or v16.x.x).
- Check your Node.js version:

  ```bash
  node -v
  ```

- If necessary, download the latest LTS version from [nodejs.org](https://nodejs.org/).

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

   Click on the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/yourusername/food-bank-inventory.git
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   Implement your feature or bug fix.

5. **Commit Your Changes**

   ```bash
   git commit -am 'Add new feature'
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**

   Go to the original repository and create a pull request from your fork.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **Bootstrap**: For the responsive design framework.
- **Express.js**: For the backend framework.
- **Node.js**: For the runtime environment.
- **Community**: For contributions and feedback.

---

## Contact

If you have any questions or need further assistance, please feel free to reach out:

- **Email**: your.email@example.com
- **GitHub**: [yourusername](https://github.com/yourusername)

---

*Thank you for using the Food Bank Inventory Management Application! Your contributions and feedback are highly appreciated.*