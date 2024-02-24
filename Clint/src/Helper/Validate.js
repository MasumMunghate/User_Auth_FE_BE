

import toast from "react-hot-toast";

// Validate Login page username
export async function usernameValidate (values){
    const error = usernameVerify({},values)
}
// Validate Password
export async function validatePassword(value){
    const error = validetUserLogin({},value)
    return error
}

// Validet Profile Page
export async function ProfileValidation(value){
    const error = emailVerify({},value)
    return error;
}

export  const ResetPassword = async(value)=>{
    const error = resetFun({}, value);
    return error
}
// Validate User name
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalide Username....!");
  }

  return error;
}

// Validate User Login
function validetUserLogin(error={} , value){
    const specialCharector = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if(!value.password){
        error.password = toast.error("Password Required !....")
    }
    else if (value.password.includes(" ")){
        error.password = toast.error("Wrong Password !...")
    }
    else if(value.password.length < 4){
        error.password = toast.error("Password must be more that 4 Charector !..")
    }
    else if (!specialCharector){
        error.password = toast.error("Password Must be in Spicial Charector")
    }

    return error;
}

// validate Conform Password (Reset Component)

function resetFun(error={},value){

    if(value.newPassword != value.conformPwd){
        error.conformPwd = toast.error("Password not Matched")
    }
}

// Profile Validation

function emailVerify(error={} , value){

}


