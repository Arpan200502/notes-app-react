import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

function NotesContainer() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h1>Notes Manager</h1>
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default NotesContainer;