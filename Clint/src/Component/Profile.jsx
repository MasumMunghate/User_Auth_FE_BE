import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import {ProfileValidation} from '../Helper/Validate'

const Profile = () => {
  const formik = useFormik({
    initialValues: {
      FirestName: "",
      LastName: "",
      MobileNumber: "",
      Email: "",
      Adress: "",
    },
    validate : ProfileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      console.log(value);
    },
  });
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen ">
          <div className="border p-10 shadow-2xl rounded-xl min-w-80">
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Profile</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                You Can Update Your Profile
              </span>
            </div>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center flex-col items-center py-4">
                <label htmlFor="profile">
                  <img
                    src="https://images.pexels.com/photos/20243531/pexels-photo-20243531/free-photo-of-a-woman-in-a-beige-coat-standing-in-front-of-a-hedge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="avatar"
                    className="w-16  rounded-full"
                  />
                </label>
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="hidden"
                />
              </div>

              <div className="textbox flex flex-col gap-6">
                <div className="name flex w-3/4 gap-6">
                  <input
                    type="text"
                    placeholder="FirestName*"
                    className="p-2 border border-indigo-600"
                    {...formik.getFieldProps("FirestName")}
                  />
                  <input
                    type="text"
                    placeholder="LastName*"
                    className="p-2 border border-indigo-600"
                    {...formik.getFieldProps("LastName")}
                  />
                </div>
                <div className="name flex w-3/4 gap-6">
                  <input
                    type="text"
                    placeholder="Mobile No.*"
                    className="p-2 border border-indigo-600"
                    {...formik.getFieldProps("MobileNumber")}
                  />
                  <input
                    type="text"
                    placeholder="Email*"
                    className="p-2 border border-indigo-600"
                    {...formik.getFieldProps("Email")}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Adress"
                  className="p-2 border border-indigo-600"
                  {...formik.getFieldProps("Adress")}
                />
                <button
                  type="Submit"
                  className="border p-2 bg-blue-500 font-medium rounded-xl "
                >
                  Register
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500 font-semibold">
                  Come Back Later
                  <button className="text-red-500"> Logout</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
