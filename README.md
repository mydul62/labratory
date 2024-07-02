# Laboratory Website 
https://labratory.netlify.app/

Welcome to the Laboratory website repository! This project is a diagnostic center management platform developed using React.js, Node.js, MongoDB, and JWT authentication. It caters to both user and admin roles, providing functionalities tailored to each role's needs.

## Features

- **Homepage:** Displays a banner with key information and features various diagnostic tests.
- **Test Details:** Provides comprehensive details about each test, including pricing and scheduling options.
- **All Tests:** Offers pagination and search functionality to explore available tests, with automatic removal of past date tests.
- **Dashboard:**
  - **User Dashboard:**
    - Manages appointments (book, update, delete).
    - Views and downloads test results.
    - Updates profile information and resets passwords.
  - **Admin Dashboard:**
    - Manages appointments (view, update test results, search by email).
    - Manages users (view, block, promote to admin).
    - Manages tests (add, update, delete).
    - Controls active banners (adds, activates, deactivates).
- **Security:** Implements JWT authentication for secure access control to different features and routes.
- **Banner Management:** Admins can add and activate banners, ensuring only one banner is active at any time for clarity.
- **Profile Section:** Users and admins can view and update their profile information and profile images.
- **User Management:** Admins have access to detailed user information, including test booking history and the ability to download user data.
- **Test Management:** Admins can add, update, or delete tests, view reservations, search by email, and submit test results.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Payment Gateway:** Stripe

## Deployment

The website is deployed on [Netlify](https://labratory.netlify.app/).

