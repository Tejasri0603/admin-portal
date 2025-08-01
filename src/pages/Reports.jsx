import React from "react";
import { Table } from "react-bootstrap";

const Reports = () => {
  const reports = [
    { id: 1, title: "Sales Report - July", status: "Generated", date: "2025-07-31" },
    { id: 2, title: "User Activity", status: "Pending", date: "2025-07-25" },
  ];

  return (
    <div className="container mt-4">
      <h2>Reports</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Report Title</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((rep) => (
            <tr key={rep.id}>
              <td>{rep.id}</td>
              <td>{rep.title}</td>
              <td>{rep.status}</td>
              <td>{rep.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Reports;
