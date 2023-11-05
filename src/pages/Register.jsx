import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
    const { createUser, userUpdateProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        // const userInfo = {name,photo,email,password};

        // console.log(userInfo)

        createUser(email, password).then(() =>{
            toast.success("Successfully Register!");
            form.reset();
            userUpdateProfile(name,photo);
            navigate('/')

        })
        .catch(error =>{
            toast.error(`something wrong ${error.message}`);
            
        })
    }
    return (
      <div>
        <div>
          <Toaster />
        </div>
        <div className="bg-orange-300 w-96 mx-auto">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400">Username</label>
                <input
                  type="text"
                  name="name"
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