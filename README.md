# 📝 Notes Manager (React)

## Project Overview
Notes Manager is a simple frontend application built with React that allows users to create, view, and delete notes.
The project focuses on clean component architecture, predictable state management, and a polished user experience without overengineering.
LIVE DEMO :https://notes-app-react00.netlify.app/

## How to Run

Requirements:
- Node.js version 18 or higher

Installation:
npm install

Start the development server:
npm run dev

Open the URL shown in the terminal (usually http://localhost:5173).

## Component Breakdown

App.jsx
Acts as the root component.
Responsible for composing global components such as the background pattern and the main notes container.

Pattern.jsx
A fixed, full-page background component.
It is independent of application state and does not re-render when notes change.

NotesContainer.jsx
The core logic component of the application.
It manages the notes state and provides functions to add and delete notes, which are passed down to child components via props.

NoteForm.jsx
A controlled form component used to create new notes.
It manages local input state, performs basic validation, and sends note data to the parent container on submission.

NoteList.jsx
Responsible for rendering the list of notes.
Handles empty-state UI and arranges notes in a responsive grid layout.

Card.jsx
A reusable presentational component used to display individual notes.
Receives note data and delete handlers via props and provides a clear, visible delete action.

## State Explanation

All application state is centralized in NotesContainer.jsx.
The notes array is stored using React state, ensuring a single source of truth.

Data flow follows a top-down approach:
- NotesContainer holds the state
- Child components receive data and callbacks via props
- User actions trigger state updates in the parent, causing React to re-render the UI

This approach avoids unnecessary complexity and keeps state predictable.

## Assumptions and Limitations

- No backend or data persistence is implemented; all notes exist only in memory.
- The application does not include authentication or user accounts.
- Advanced state management tools such as Redux or Context API were intentionally avoided to keep the scope aligned with the assessment.
- Styling prioritizes clarity and usability over extensive customization.
