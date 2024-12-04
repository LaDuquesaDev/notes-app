import { db } from "./firebaseConfig"
import { 
    collection, 
    addDoc, 
    getDocs,
    query,
} from "firebase/firestore";

export const saveNotes = async (title, content) => {
    addDoc(collection(db, 'Notes'), {
    title, content
  });
}

export const getNoteList = async () => {
    const notes = [];
    const querySnapshot = await getDocs(collection(db, 'Notes'));
    querySnapshot.forEach(doc => {
      notes.push({ id: doc.id, ...doc.data() }); // Incluye el id del documento
    });
    return notes;
  };

export const paintNoteList = () => {
    const paint = query(collection(db, 'Notes'));
    return paint;
  };