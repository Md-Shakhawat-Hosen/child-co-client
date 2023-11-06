import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Navbar = () => {
 const {user,userLogOut} = useContext(AuthContext);

//  console.log(user)


 const handleLogout = () => {
    userLogOut()
    .then(()=>{
        toast.success('Successfully logout')
    })
    .catch(error=>{
        toast.error(error.message)
    })
 }
    
    return (
      <div>
        <div>
          <Toaster />
        </div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-20  p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>

                {user?.email && (
                  <>
                    <li>Dashboard</li>
                    <ul className="p-2">
                      <li>
                        <NavLink to="/my-services">My-Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/add-services">Add-Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/my-schedules">My-schedules</NavLink>
                      </li>
                    </ul>
                  </>
                )}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Child Co</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu z-10 menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li tabIndex={0}>
                {user?.email && (
                  <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2">
                      <li>
                        <NavLink to="/my-services">My-Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/add-services">Add-Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/my-schedules">My-schedules</NavLink>
                      </li>
                    </ul>
                  </details>
                )}
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName}
                      {/* <span className="badge">New</span> */}
                    </a>
                  </li>

                  <li className="">
                    <button onClick={handleLogout} className="bg-gray-300 ">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to="/login" className="btn">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;