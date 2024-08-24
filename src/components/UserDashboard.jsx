import React from "react";

const UserDashboard = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "User",
    tasks: [
      { id: 1, title: "Complete Project", status: "Pending" },
      { id: 2, title: "Attend Meeting", status: "Completed" },
    ],
  };

  return (
    <div className="p-8 bg-gray-900 text-gray-300 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Profile Information</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Assigned Tasks</h2>
        <ul className="mt-4">
          {user.tasks.map((task) => (
            <li key={task.id} className="p-4 bg-gray-800 rounded mb-2">
              <p className="font-bold">{task.title}</p>
              <p>Status: {task.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
