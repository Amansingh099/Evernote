import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchBar from "./Search";
import Trash from "./Trash";
import Sidebar from "./Sidebar";
import './App.css'
import Account from "./Account";
function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [deletedNotes, setDeletedNotes] = useState(JSON.parse(localStorage.getItem("deletedNotes")) || []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));
  }, [deletedNotes]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    const deletedNote = notes[id];
    setDeletedNotes((prevDeletedNotes) => [...prevDeletedNotes, deletedNote]);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <BrowserRouter>
      <div className="appbody">
        {/* Sidebar component rendered outside of the Routes */}
        <Sidebar deletedNotes={deletedNotes} />
        <Routes>
          <Route path="/" element={<Home addNote={addNote} deleteNote={deleteNote} notes={notes} />} />
          <Route path="/searchbar" element={<SearchBar deleteNote={deleteNote} notes={notes} />} />
          <Route path="/trash" element={<Trash deletedNotes={deletedNotes} setDeletedNotes={setDeletedNotes} />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
