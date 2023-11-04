import { NavLink } from "react-router-dom";


const Register = () => {
    return (
      <div>
        <div className="bg-orange-300 w-96 mx-auto">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Username</label>
                <input
                  type="text"
                  name="username"
                 
                  placeholder="Username"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                 
                  placeholder="Photo URL"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Email</label>
                <input
                  type="text"
                  name="email"
                 
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                
              </div>
              <button className="block w-full p-3 text-center rounded-sm bg-orange-500 text-white ">
                Register
              </button>
            </form>
            
            <p className="text-xl text-center sm:px-6 dark:text-gray-400">
              Already have an account?
              <NavLink
                rel="noopener noreferrer"
                to="/login"
                className="underline dark:text-gray-100"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;