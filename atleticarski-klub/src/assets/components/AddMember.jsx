// AddMember.js
import React, { useState } from "react";
import axios from "axios";

const AddMember = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("http://localhost:5000/api/members", {
        first_name: firstName,
        last_name: lastName,
        dob,
        discipline,
        contact_info: contactInfo,
      });
      setSuccess("Member added successfully!");
      setFirstName("");
      setLastName("");
      setDob("");
      setDiscipline("");
      setContactInfo("");
    } catch (err) {
      setError("Error adding member. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Member</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      {success && <div className="mb-4 text-green-500">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border border-gray-300 rounded"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border border-gray-300 rounded"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="dob">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="w-full p-2 border border-gray-300 rounded"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="discipline"
          >
            Discipline
          </label>
          <input
            type="text"
            id="discipline"
            className="w-full p-2 border border-gray-300 rounded"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="contactInfo"
          >
            Contact Info
          </label>
          <input
            type="text"
            id="contactInfo"
            className="w-full p-2 border border-gray-300 rounded"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddMember;
