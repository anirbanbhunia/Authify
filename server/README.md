# User Authentication System

A robust authentication system built with Express.js, MongoDB, and JWT with support for file uploads, email notifications, and role-based access control.

## Features

### Authentication
- User registration with avatar upload
- Login with JWT token generation
- Secure logout
- Password management:
  - Forgot password with email recovery
  - Reset password functionality
  - Change password option
- Profile management:
  - View profile
  - Update profile details
  - Update profile picture

### Admin Features
- User statistics
- Delete user accounts
- Role-based access control (ADMIN/USER)

### Security
- JWT-based authentication
- Password hashing
- Secure cookie handling
- Role-based middleware protection
- File upload security

### File Handling
- Profile picture upload support
- Cloudinary integration for image storage
- Automatic image optimization
- Secure file deletion

## Tech Stack

- Express.js - Web framework
- MongoDB - Database
- JWT - Authentication
- Bcrypt - Password hashing
- Cloudinary - Image storage
- Multer - File upload handling
- Nodemailer - Email notifications
- Morgan - HTTP request logging

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>