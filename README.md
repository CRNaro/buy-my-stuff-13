# buy-my-stuff-13
Back end for my e-commerce website 


## Table of Content

- Description
- Usage
- Features


## Description

This project is a back end for an e-commerce website built using Express.js. It utilizes the Sequelize ORM to interact with a MySQL database. E-commerce, a significant sector within the electronics industry, enables businesses and consumers to engage in online buying and selling conveniently. This application aims to provide the latest technologies to empower internet retail companies to compete effectively in the e-commerce market.

## Usage

To use this application, you need to set up your environment variables for the database connection. Refer to the Perquisites and Installation sections below for detailed instructions. Once set up, you can start the server and interact with the API endpoints using tools like Insomnia Core.

### Prerequisites
Before running the application, ensure you have the following:

- Node.js installed on your machine
- MySQL database installed and running
- Insomnia Core or similar tool for API testing

### Installation
1. Clone the starter code repository from here.
2. Set up your environment variables by creating a .env file in the root directory. Add the following variables:
makefile
Copy code
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PASSWORD=''
3. Run npm install to install the project dependencies.
4. Enter schema and seed commands to create a development database and seed it with test data.

### Running the Application
1. After completing the installation steps, run npm start to start the server.
2. Once the server is running, the Sequelize models will be synced to the MySQL database.

### Walkthrough Video
- Please refer to the [walkthrough video](/Users/chris/Desktop/buy-my-stuff-13/assets/pics-vids/buy-my-stuff-walkthrough.webm) to see a demonstration of the application's functionality and how each of the acceptance criteria is met.


## Acknowledgments

Referenced following websites:

- https://stackoverflow.com
- https://www.w3schools.com
- https://forum.codewithmosh.com/
- Special thanks to Xpert, the AI Learning Assistant, for providing valuable assistance and guidance.

## License

---MIT License

Copyright (c) [2023] [Christopher Robert Naro]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Features

- Provides API endpoints for categories, products, and tags.
- Supports CRUD operations (Create, Read, Update, Delete) for interacting with the database.
- Follows RESTful principles for API design.
## 

Christopher R. Naro