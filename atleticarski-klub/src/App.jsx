import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemberList from "./assets/components/MemberList";
import AddMember from "./assets/components/AddMember";
import "./app.css";

function App() {
  return (
    <Router>
      <div>
        <h1>Atletičarski Klub</h1>
        <Routes>
          <Route path="/" element={<MemberList />} />
          <Route path="/add-member" element={<AddMember />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
