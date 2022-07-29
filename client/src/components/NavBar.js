import { useNavigate } from "react-router-dom";

export default function NavBar() {
const navigate = useNavigate()
function logout(){
  localStorage.clear()
  navigate('/login')

}

if(localStorage.getItem("access_token")) {
  return (
    <div className="container mx-auto p-5">
   <div class="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
    <div class="flex flex-row justify-center">
      <div class="bg-gradient-to-r from-blue-400 to-white-400 w-10 h-10 rounded-lg"></div>
      <h1 class="text-3xl text-gray-600 ml-2">Logo</h1>
    </div>
    <div class="mt-2">
      <a
        href="/"
        class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Home
      </a>

      <button
        onClick={logout}
        class="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
      >
        Logout
      </button>
  
    </div>
  </div>
    </div>
 
);
}

}
