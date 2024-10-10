// MemberList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/members");
        setMembers(response.data);
      } catch (err) {
        setError("Error fetching members. Please try again.");
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Member List</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">First Name</th>
            <th className="border border-gray-300 p-2 text-left">Last Name</th>
            <th className="border border-gray-300 p-2 text-left">
              Date of Birth
            </th>
            <th className="border border-gray-300 p-2 text-left">Discipline</th>
            <th className="border border-gray-300 p-2 text-left">
              Contact Info
            </th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">
                {member.first_name}
              </td>
              <td className="border border-gray-300 p-2">{member.last_name}</td>
              <td className="border border-gray-300 p-2">{member.dob}</td>
              <td className="border border-gray-300 p-2">
                {member.discipline}
              </td>
              <td className="border border-gray-300 p-2">
                {member.contact_info}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
