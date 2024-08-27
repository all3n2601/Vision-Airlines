
# Airplane Management System ✈️

## Overview

Welcome to the Airplane Management System! This application is built using the MERN Stack, Vite, Redux, and Framer Motion to deliver a seamless and responsive experience for managing flight bookings. Users can effortlessly search for flights, book tickets, and download them for their travels.

## Features

- **Flight Search:** Quickly find available flights based on your preferred departure and arrival locations, date, and time.
- **Ticket Booking:** Easily book tickets with just a few clicks. The app ensures a smooth and intuitive booking process.
- **Download Tickets:** After booking, users can download their tickets directly from the app for convenience.
- **Smooth Animations:** Enhanced user experience with Framer Motion, providing fluid and engaging animations throughout the app.
- **State Management:** Efficient state management with Redux ensures a fast and responsive UI, even with large datasets.

## Tech Stack

- **Frontend:** 
  - **Vite:** For fast development and optimized builds.
  - **React:** The core of our UI, providing a modular and reusable component-based architecture.
  - **Redux:** Manages the state of the application, ensuring consistency across the UI.
  - **Framer Motion:** Adds smooth and appealing animations to enhance user interaction.

- **Backend:**
  - **Node.js:** Provides the runtime environment for executing JavaScript code on the server side.
  - **Express:** A minimalist web framework for building robust RESTful APIs.
  - **MongoDB:** A NoSQL database that stores all flight, user, and booking data.
  - **Mongoose:** An Object Data Modeling (ODM) library for MongoDB, providing schema-based solutions to model our data.

## Getting Started

### Prerequisites

- **Node.js & npm:** Ensure that Node.js and npm are installed on your machine.
- **MongoDB:** You'll need a running MongoDB instance to store flight and user data.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/airplane-management-system.git
   cd airplane-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4. **Run the development server:**
```bash
npm run dev
```
5. **Start the backend server:**
```bash
npm run server
```
6. **Access the application:**
Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Search Flights:** Enter your travel details in the search form and browse through the available flights.
- **Book Tickets:** Select your desired flight and proceed with the booking process.
- **Download Tickets:** After booking, your ticket will be available for download.

## Contributions

Contributions are welcome! Feel free to fork this repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

   
