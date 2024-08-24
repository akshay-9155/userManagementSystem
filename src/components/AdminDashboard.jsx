import React, { useState } from "react";
import TaskDialog from "./TaskDialog";
import AddUserForm from "./AddUserForm";

const AdminDashboard = () => {
  const [showTaskDialog, setShowTaskDialog] = useState(false);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "User" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
  ];

  return (
    <div className="p-8 bg-gray-900 text-gray-300 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">User Management</h2>
        <button
          className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setShowAddUserForm(true)}
        >
          Add New User
        </button>
      </div>
      <table className="w-full text-left bg-gray-800 rounded-lg">
        <thead>
          <tr>
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Email</th>
            <th className="p-4 border-b">Role</th>
            <th className="p-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-4 border-b">{user.name}</td>
              <td className="p-4 border-b">{user.email}</td>
              <td className="p-4 border-b">{user.role}</td>
              <td className="p-4 border-b">
                <button className="py-1 px-3 mr-2 bg-yellow-500 rounded hover:bg-yellow-600">
                  Update
                </button>
                <button className="py-1 px-3 mr-2 bg-red-500 rounded hover:bg-red-600">
                  Delete
                </button>
                <button
                  className="py-1 px-3 bg-green-500 rounded hover:bg-green-600"
                  onClick={() => setShowTaskDialog(true)}
                >
                  Assign Task
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showTaskDialog && (
        <TaskDialog onClose={() => setShowTaskDialog(false)} />
      )}

      {showAddUserForm && (
        <AddUserForm onClose={() => setShowAddUserForm(false)} />
      )}
    </div>
  );
};

export default AdminDashboard;
