import Card from "./Card";

function NoteList({ notes, onDeleteNote }) {

  if (!notes || notes.length === 0) {
    return <p>No notes yet. Add one!</p>;
  }

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {notes.map((note) => (
        <Card
          key={note.id}
          title={note.title}
          description={note.description}
           onDelete={() => onDeleteNote(note.id)}
        />
      ))}
    </div>
  );
}

export default NoteList;
