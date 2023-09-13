import { useEffect, useState } from "react";
import axios from "axios";
import Navigasi from "./Navigasi";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`)
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid justify-center items-center mt-10">
      <Navigasi />
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">No</th>
            <th className="border-b px-4 py-2">Name</th>
            <th className="border-b px-4 py-2">Gender</th>
            <th className="border-b px-4 py-2">Email</th>
            <th className="border-b px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="border-b px-10 py-2">{index + 1}</td>
              <td className="border-b px-10 py-2">{user.name}</td>
              <td className="border-b px-10 py-2">{user.gender}</td>
              <td className="border-b px-10 py-2">{user.email}</td>
              <td className="border-b px-10 py-2">
                <Link to={`/edit/${user.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ml-3">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
