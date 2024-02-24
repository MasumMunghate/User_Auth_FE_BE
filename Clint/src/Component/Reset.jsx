
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import {ResetPassword} from '../Helper/Validate'

const Reset = () => {
  const formik = useFormik({
    initialValues : {
      newPassword : '',
      conformPwd : ''
    },
    validate:ResetPassword,
    validateOnBlur : false,
    validateOnChange: false,
    onSubmit : async value =>{
      console.log(value);
    }
  })
  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center"></Toaster>
        <div className="flex justify-center items-center h-screen">
          <div className="border p-10 shadow-2xl rounded-xl">
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Reset</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Enter New Password
              </span>
            </div>

            <form className="py-20" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="New Password"
                  className="p-2 border border-indigo-600"
                  {...formik.getFieldProps('newPassword')}
                />
                <input
                  type="text"
                  placeholder="Repeat Password"
                  className="p-2 border border-indigo-600"
                  {...formik.getFieldProps('conformPwd')}
                />
                <button
                  type="Submit"
                  className="border p-1 bg-orange-500 font-medium rounded-xl "
                >
                 Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
