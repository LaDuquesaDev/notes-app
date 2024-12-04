import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../api/firebaseImport.js";
import { getNoteList } from "../api/firestore.js";
import auth from "../api/firebaseConfig.js";
import "../styles/notes.css";
import "../styles/modal.css";
import { ModalNotes } from "./ModalNotes";

export const Notes = () => {
  const [notes, setNotes] = useState<Array<{ title: string; content: string }>>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getNotes();
  }, []);

  const logoutBtn = () => {
    signOut(auth).then((result) => {
      if (window.confirm("¿Estás seguro de cerrar sesión?")) {
        navigate("/");
      }
    });
  };

  const getNotes = async () => {
    const fetchedNotes = await getNoteList();
    setNotes(fetchedNotes);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <button className="logout-btn" onClick={logoutBtn}>
          Logout
        </button>
        <section className="header">
          <h1>Notes-app</h1>
        </section>
        <section className="container-notes">
          {notes.map((note: { title: string; content: string }) => (
            <div key={note.title}>
              <p>{note.title}</p>
              <p>{note.content}</p>
            </div>
          ))}
        </section>
        <ModalNotes />
      </div>
    );
  }
};
