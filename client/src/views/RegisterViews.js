import NavBar from "../components/NavBar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
export default function RegisterViews() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("staff");

  async function register(e) {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
        name,
        role,
      };

      await axios({
        method: "POST",
        url: `http://localhost:3000/users/`,
        data: data,
      });

      navigate("/login");
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
          })
    }
  }
  return (
    <>
      <NavBar></NavBar>

      <div className="container py-16 mx-auto">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden text-justify">
          <h2 className="text-2xl uppercase font-medium mb-1">Register</h2>
          <p className="text-gray-600 mb-6 text-sm">Register your account</p>
          <form onSubmit={register}>
            <div className="space-y-3">
              <div>
                <label for="email" className="text-gray-600 mb-2 block">
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded  focus:border-red-500"
                  placeholder="Enter your email address"
                ></input>
              </div>
              <div>
                <label for="text" className="text-gray-600 mb-2 block">
                  name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded  focus:border-red-500"
                  placeholder="name"
                ></input>
              </div>
              <div>
                <label for="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"
                  placeholder="Enter your password "
                ></input>
              </div>
              <div>
                <label for="role" className="text-gray-600 mb-2 block">
                  Select your role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  name="roles"
                  id="roles"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"
                >
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="text-red-500 focus:ring-0 rounded-sm cursor-pointer"
                ></input>
                <label
                  for="agreement"
                  className="text-gray-600 ml-2 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a href="/" className="text-red-500">
                Forgot password
              </a>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="block w-full py-2 text-center bg-red-500 text-white border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition font-medium"
              >
                LOGIN
              </button>
            </div>

            <div className="flex items-center justify-between mt-6">
              <a href="/login">
                Already have an account?
                <span className="text-red-500 ml-1 hover:text-slate-600">
                  Login now
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
