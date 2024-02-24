// This is LonIn Page

import { Link } from "react-router-dom";
import  { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {usernameValidate} from '../Helper/Validate'

const Username = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate : usernameValidate,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values =>{
      console.log(values);
    }
  });
  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <div className="flex justify-center items-center h-screen">
          <div className="border p-10 shadow-2xl rounded-xl">
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Hello Again</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Explore more by containg with us !
              </span>
            </div>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-4">
                <img
                  src="https://images.pexels.com/photos/20243531/pexels-photo-20243531/free-photo-of-a-woman-in-a-beige-coat-standing-in-front-of-a-hedge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="avatar"
                  className="w-16 h-4/5 rounded-full"
                />
              </div>
              <div className="textbox flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="username"
                  className="p-2 border border-indigo-600"
                  {...formik.getFieldProps('username')}
                />
                <button
                  type="Submit"
                  className="border p-1 bg-orange-500 font-medium rounded-xl "
                >
                  Let's Go
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500 font-semibold">
                  Not a Member!
                  <Link className="text-red-500" to="/register">
                    Register Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
