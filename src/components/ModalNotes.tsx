import React, { useState } from "react";
import { Box, Button, Modal } from "@mui/material";
import { saveNotes } from "../api/firestore";
import "../styles/modal.css";

interface ModalProps {
  children?: React.ReactNode;
}

export function ModalNotes({ children }: ModalProps) {
  const [show, setShow] = useState(false);
  const [form, setState] = useState({
    title: "",
    content: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateFieldInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });

  const updateFieldTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });

  const printValues = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Button className="addNote-btn" variant="contained" onClick={handleShow}>
        +
      </Button>

      <Modal className="modal-window" open={show} onClose={handleClose}>
        <Box className="modal-content">
          <h2>Notes-app</h2>
          <form onSubmit={printValues}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                value={form.title}
                type="text"
                name="title"
                placeholder="Receta crema de zanahorias"
                onChange={updateFieldInput}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                rows={3}
                value={form.content}
                name="content"
                onChange={updateFieldTextarea}
              />
            </div>
            <div className="modal-footer">
              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  saveNotes(form.title, form.content);
                }}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
