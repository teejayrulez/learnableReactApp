import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import students from "./students";

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(term.toLowerCase()) ||
        student.path.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  return (
    <div className="table-conatiner">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by name or path"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <table className="table-tab">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Path</th>
            <th>Information</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>
                <img
                  className="student-picture"
                  src={student.picture}
                  alt={student.name}
                />
              </td>
              <td>{student.name}</td>
              <td>{student.path}</td>
              <td>{student.information}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
