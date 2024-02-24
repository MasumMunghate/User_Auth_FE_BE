import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { validatePassword } from "../Helper/Validate.js";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: validatePassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      console.log(value);
    },
  });
  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center"></Toaster>
        <div className="flex justify-center items-center h-screen">
          <div className="border p-10 shadow-2xl rounded-xl">
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">LogIn</h4>
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
                  placeholder="login"
                  className="p-2 border border-indigo-600"
                  {...formik.getFieldProps("password")}
                />
                <button
                  type="Submit"
                  className="border p-1 bg-orange-500 font-medium rounded-xl "
                >
                  Sing Up
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500 font-semibold">
                  Forgot Password
                  <Link className="text-red-500" to="/recovery">
                    {" "}
                    Recovery
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

export default Password;
