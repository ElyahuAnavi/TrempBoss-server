
---

# 🚗 TrempBoss: A Rideshare Management App in Israel

## Table of Contents

1. [About the Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Technologies and Structure](#-technologies-and-structure)
4. [System Architecture](#-system-architecture)
5. [Getting Started](#-getting-started)
6. [Screenshots](#-screenshots)
7. [Dependencies](#-dependencies)
8. [Security](#-security)
9. [Contributing](#-contributing)
10. [License](#-license)

## 📖 About the Project
TrempBoss is an innovative 🌟 application designed to facilitate hitchhiking, known locally in Israel as "tremp." It streamlines the process of connecting drivers with passengers, offering a user-friendly platform for ride coordination, communication, and private ride-sharing group management.

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
   git clone [repository-url]
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

## 📸 Screenshots
![image](https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/0ce4fbfc-d632-4e4b-8101-b3c0f8bd1e04)
---
![image](https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/90a32a73-6384-4395-a79f-721e4934e505)
---
![image](https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/0ed2a1cf-99ee-4264-87cb-93e02f655cfd)
---
![image](https://github.com/ElyahuAnavi/TrempBoss-server/assets/137146370/fe343be3-ee13-4cbf-888c-1b0073f643c4)
---


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

---

