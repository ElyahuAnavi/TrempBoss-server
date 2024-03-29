
---
# <img src="https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/826734b8-605d-4b3b-a5cb-c3af775eac77" width="50"> TrempBoss: A Rideshare Management App in Israel



## Table of Contents

1. [About the Project](#-about-the-project)
2. [Screenshots](#-screenshots)
3. [Key Features](#-key-features)
4. [Technologies and Structure](#-technologies-and-structure)
5. [System Architecture](#-system-architecture)
6. [Getting Started](#-getting-started)
7. [Dependencies](#-dependencies)
8. [Security](#-security)
9. [API Endpoints Overview](#-api-endpoints-overview)

## 📖 About the Project
TrempBoss is an innovative 🌟 application designed to facilitate hitchhiking, known locally in Israel as "tremp." It streamlines the process of connecting drivers with passengers, offering a user-friendly platform for ride coordination, communication, and private ride-sharing group management.

## 📸 Screenshots
![image](https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/0ce4fbfc-d632-4e4b-8101-b3c0f8bd1e04)
---
![image](https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/90a32a73-6384-4395-a79f-721e4934e505)
---
![image](https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/0ed2a1cf-99ee-4264-87cb-93e02f655cfd)
---
![image](https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/fe343be3-ee13-4cbf-888c-1b0073f643c4)
---

## 🛠 Key Features
- **Rides Management:** 🚘 Users can request rides, offer rides, and manage their travel with ease.
- **Group Management:** 🔒 Create and manage private groups for sharing rides, ensuring privacy and exclusivity.
- **In-App Messaging:** 💬 A robust communication system allows passengers and drivers to stay connected.
- **Data-Driven Insights:** 📊 A dashboard equipped with dynamic KPIs aids in data management and decision-making.

## 🏗 Technologies and Structure
TrempBoss leverages the MERN Stack, integrating various technologies for a seamless and efficient user experience:
- **Backend:** Node.js with Express, utilizing TypeScript for robust development practices.
- **Database:** MongoDB, ensuring scalable and efficient data storage.

## 📐 System Architecture
- **Data Architecture:** Innovative design to differentiate ride offers and requests.
- **Singleton Pattern:** Ensures efficient database access.
- **Security:** JWT authentication and secure group management.
- **Notifications:** Comprehensive system with email (NodeMailer) and app notifications (FCM).

## 🚀 Getting Started

### Prerequisites
- Ensure you have Node.js and MongoDB installed.
- Obtain necessary API keys (Firebase Admin).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ElyahuAnavi/TrempBoss-server.git
   ```
2. Install dependencies:
   ```bash
   pnpm i
   ```
3. Configure your `.env` file with the necessary environment variables.

### Running the App
- Start the development server:
  ```bash
  pnpm run dev
  ```
- Build the app for production:
  ```bash
  pnpm run build
  ```


## 📦 Dependencies

The TrempBoss application leverages a robust stack of dependencies, ensuring a secure, efficient, and scalable service. Here's an enhanced overview of the key dependencies:

### Core Technologies
- **MongoDB:** A powerful NoSQL database, MongoDB is utilized to store and retrieve data dynamically, supporting the app's data-intensive operations.
- **Express.js:** This minimal and flexible Node.js web application framework provides a robust set of features to develop the server-side logic, making API routing intuitive and scalable.
- **Node.js:** At the heart of the backend, Node.js offers a JavaScript runtime environment that executes code server-side, enabling the development of fast and scalable network applications.

### Security and Data Validation
- **bcrypt:** Used for hashing passwords, `bcrypt` ensures that user password data is encrypted and secure, safeguarding user accounts from unauthorized access.
- **Helmet:** Enhances app security by setting various HTTP headers, helping protect against web vulnerabilities.
- **express-mongo-sanitize:** Prevents NoSQL injection attacks by sanitizing user-supplied data, particularly useful in MongoDB operations.
- **express-rate-limit:** Mitigates brute-force attacks by limiting the number of requests a user can make to the API in a given timeframe.
- **hpp:** Protects against HTTP Parameter Pollution attacks by ensuring that only the last parameter value is used in cases of duplication.
- **jsonwebtoken:** Facilitates secure data transmission as JSON objects, encrypted with a signature, for user authentication and data integrity.
- **Joi:** This powerful schema description language and data validator for JavaScript ensures that the app's data conforms to a predefined schema, reducing bugs and enhancing data integrity.

### Communication and File Handling
- **NodeMailer:** Facilitates email sending, essential for account verification, notifications, and user communications.
- **Firebase Cloud Messaging (FCM):** Integrated to send real-time notifications to users, enhancing the app's interactivity and user engagement.
- **Multer:** A middleware for handling `multipart/form-data`, used primarily for uploading files.

### Development and Debugging
- **Nodemon:** Simplifies development by automatically restarting the node application when file changes in the directory are detected.
- **ts-node:** Enables direct execution of TypeScript files, streamlining development workflows for TypeScript projects.
- **tsc-watch:** A development tool that triggers a script when your TypeScript files change, enhancing the efficiency of the development process.

### Miscellaneous
- **date-fns and date-fns-tz:** Provides comprehensive tools for manipulating and formatting dates, crucial for handling time zones and scheduling in the application.
- **uuid:** Generates unique identifiers, vital for database entries, session management, and ensuring data consistency.

These dependencies are integral to the functioning of TrempBoss, each contributing to different aspects of the application, from its core functionality and security to user interaction and data management.

## 🔒 Security

TrempBoss implements a multi-layered security strategy to ensure robust protection of user data and system integrity. Here's a breakdown of the key security measures and practices in place:

### JWT Authentication
- **Token-based Authentication:** Utilizing JSON Web Tokens (JWT), the app ensures secure communication between clients and the server. Each token contains encoded user information and permissions, which are verified with each request to authenticate user identity and authorization levels.
- **Role-Based Access Control:** The system distinguishes user roles (such as 'user' and 'admin') within the token payload, allowing for fine-grained access control and ensuring that users can only perform actions that their role permits.

### Rate Limiting
- **Request Throttling:** Using `express-rate-limit`, the application imposes a cap on the number of requests a single IP address can make within a set timeframe. This measure mitigates brute-force attacks and ensures equitable service distribution among users.

### Data Sanitization
- **NoSQL Injection Prevention:** `mongoSanitize` is employed to cleanse input data, thwarting injection attacks by stripping out any keys that begin with '$' in the inputs, a common vector for NoSQL injection.
- **Parameter Pollution Protection:** The app utilizes `hpp` (HTTP Parameter Pollution protection) to safeguard against multiple parameter pollution attacks by picking the last parameter occurrence and ignoring the rest, ensuring the integrity of query parameters.

### Security Headers
- **Secure HTTP Headers:** The application employs `helmet`, a middleware that sets various HTTP headers to secure app communication. Helmet adjusts headers like `X-Frame-Options` and `X-XSS-Protection` to fortify the app against common web vulnerabilities.

### Content Security Policy
- **Defining Trusted Sources:** By configuring appropriate content security policies, the app mitigates the risk of XSS attacks by specifying which dynamic resources are trusted, preventing the browser from loading malicious assets.

### Error Handling and Monitoring
- **Centralized Error Handling:** A custom JSON error handler intercepts and processes exceptions and errors, ensuring a consistent error response structure and preventing potential leakages of sensitive information.

### Secure Data Transmission
- **Encrypted Communication:** All data transmitted between the client and the server is encrypted using HTTPS, safeguarding against man-in-the-middle attacks and eavesdropping.

### Best Practices
- **Security Audits and Updates:** Regular security audits, dependency updates, and adherence to security best practices ensure that the app remains protected against emerging threats.

## API Endpoints Overview 🚏

After launching the server, the API endpoints for TrempBoss can be accessed at `http://localhost:5500/api/` or `https://drab-pink-iguana.cyclic.app/api/`.

These endpoints enable comprehensive user management within TrempBoss, allowing for registration, profile management, group interactions, and administrative functions.

### User Endpoints
- **POST /api/users/register:** Register a new user.
- **POST /api/users/login:** Log in an existing user.
- **POST /api/users/request-password-reset:** Request a password reset link.
- **POST /api/users/reset-password:** Reset the user password.
- **GET /api/users/:id:** Retrieve a specific user by ID.
- **PATCH /api/users/update/:id:** Update a user's information.
- **POST /api/users/update-image/:id:** Upload or update a user's profile image.
- **DELETE /api/users/delete/:id:** Delete a user account.
- **POST /api/users/my-groups:** Retrieve groups associated with the user.
- **POST /api/users/add-notification-token:** Add a notification token for the user.
- **GET /api/users/all:** Retrieve all users (Admin only).
- **POST /api/users/admin-add-user:** Add a new user as an admin (Admin only).
- **PUT /api/users/update-user/:id:** Update any user's details as an admin (Admin only).

### User Group Endpoints
- **DELETE /api/user-groups/cancel-group-request:** Cancel a pending group join request.
- **PUT /api/user-groups/approve-group-request:** Approve a user's request to join a group.
- **POST /api/user-groups/get-users-request:** Retrieve group join requests made by the user.

### Admin User Endpoints
- **POST /api/admin/login:** Admin login.
- **GET /api/admin/validateToken:** Validate admin session token.
- **GET /api/admin/all:** Retrieve all admin users.
- **GET /api/admin/me:** Fetch current admin user's details.
- **GET /api/admin/:id:** Get details of a specific admin user.
- **POST /api/admin/add:** Add a new admin user.
- **DELETE /api/admin/delete/:id:** Delete an admin user.
- **PUT /api/admin/markDeleted/:id:** Soft delete an admin user.
- **PUT /api/admin/updateAdmin/:id:** Update an admin user's details.

### Group Request Endpoints
- **POST /api/group-request/add:** Submit a new group join request.
- **POST /api/group-request/upload-image/:id:** Upload an image for the group request.
- **POST /api/group-request/get-user-requests:** Get user-specific group requests (Admin only).
- **GET /api/group-request/unapproved-requests:** Fetch unapproved group requests (Admin only).
- **PUT /api/group-request/approve/:id:** Approve a group request (Admin only).
- **PUT /api/group-request/deny/:id:** Deny a group request (Admin only).

### Group Endpoints
- **GET /api/groups/getById/:id:** Retrieve group details by ID.
- **POST /api/groups/groups-user-not-connected:** Get groups a user is not connected to.
- **GET /api/groups/groups-user-connected/:user_id:** Get groups a user is connected to.
- **PUT /api/groups/join-group-request:** Request to join a group.
- **PUT /api/groups/disconnect-from-group:** Leave a group.
- **PUT /api/groups/add-admin-to-group:** Add an admin to a group.
- **POST /api/groups/all-groups-with-user-status:** Get all groups with user status.
- **PUT /api/groups/update:** Update group details.
- **POST /api/groups/upload-image/:id:** Upload a group image.

### KPI Endpoints (Admin only).
- **POST /api/kpis/get-all-top-five:** Retrieve top five KPIs.
- **POST /api/kpis/get-people-and-tremps-counts:** Get counts of people and tremps.
- **POST /api/kpis/get-percentages-per-type:** Get ride and trip count percentages.
- **POST /api/kpis/get-hitchhiker-monthly-counts-by-gender:** Get monthly hitchhiker counts by gender.
- **GET /api/kpis/get-inactive-groups:** Fetch inactive groups.
- **GET /api/kpis/get-most-active-groups:** Get most active groups.

### Tremp Endpoints
- **POST /api/tremps/add:** Create a tremp.
- **POST /api/tremps/tremps-by-filters:** Retrieve tremps by filters.
- **PUT /api/tremps/join-ride:** Join a ride/tremp.
- **POST /api/tremps/user-tremps:** Get tremps for a user.
- **PUT /api/tremps/approve-user-in-tremp:** Approve user in a tremp.
- **GET /api/tremps/users-in-tremp/:tremp_id:** Get users in a tremp.
- **POST /api/tremps/approved-tremps:** Get approved tremps.
- **PUT /api/tremps/delete-tremp:** Delete a tremp.
- **PUT /api/tremps/tremp-completed:** Mark tremp as completed.
- **POST /api/tremps/tremp-history:** Get tremp history.

These endpoints facilitate the management and interaction within the TrempBoss platform, ensuring a comprehensive experience for users and administrators.
---

