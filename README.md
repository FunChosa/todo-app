# Todo app

This is a basic to-do list application built with React, Vite, Tailwind CSS, and Firebase. The primary goal of this project was to practice using Firebase for data persistence.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/todo-app.git`
2. **Navigate to the project directory:** `cd todo-app`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

## Features

* Add Tasks:  Add new tasks via a simple input field and button.
* Delete Tasks: Remove completed or unwanted tasks with a dedicated delete button.
* Mark as Complete: Use checkboxes to mark tasks as complete.  (Completed tasks are still visible but visually indicated as done).

## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.10
* Firebase: ^11.0.2
* React-icons: ^5.3.0
* Tailwindcss: ^3.4.15

## State Management

The application's state is managed using the `useState` hook.

## Firebase Configuration

You'll need to configure your Firebase project before running the application.  This typically involves creating a Firebase project, obtaining your Firebase configuration object, and adding it to your environment variables or a dedicated configuration file.  See the Firebase documentation for more details.

## Deployment

The application is deployed on Netlify: https://funchosa-todo-app.netlify.app

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
