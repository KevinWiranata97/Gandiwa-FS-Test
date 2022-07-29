import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Homeviews() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios({
        url: `http://localhost:3000/users`,
        method: "GET",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      await axios({
        url: `http://localhost:3000/users/${id}`,
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }


  if (localStorage.getItem("role") === "admin") {
    return (
      <>
        <NavBar></NavBar>

        <div className="w-3/4 mx-auto px-20 mt-12">
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    id
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Role
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Password
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={user.id}
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.id}
                    </th>
                    <td class="py-4 px-6">{user.name}</td>
                    <td class="py-4 px-6">{user.email}</td>
                    <td class="py-4 px-6">{user.role}</td>
                    <td class="py-4 px-6">{user.password}</td>
                    <td class="py-4 px-6">
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="border border-gray-300 text-white px-8 py-2 font-medium rounded uppercase bg-red-500 flex items-center gap-2 hover:text-slate-500 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  if (localStorage.getItem("role") === "staff") {
    return (
      <>
        <NavBar></NavBar>

        <div className="w-3/4 mx-auto px-20 mt-12">
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    id
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Role
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Password
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.id}
                    </th>
                    <td class="py-4 px-6">{user.name}</td>
                    <td class="py-4 px-6">{user.email}</td>
                    <td class="py-4 px-6">{user.role}</td>
                    <td class="py-4 px-6">{user.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
