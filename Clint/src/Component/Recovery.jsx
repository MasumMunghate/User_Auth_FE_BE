

const Recovery = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="border p-10 shadow-2xl rounded-xl">
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Recovery</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Enter OPT to recover Password !
              </span>
            </div>

            <form>
              <div className="profile flex justify-center py-4"></div>
              <div className="textbox flex flex-col gap-6">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit opt send to your email adress.
                </span>
                <input
                  type="text"
                  placeholder="OPT"
                  className="p-2 border border-indigo-600"
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
                  Cant get OPT ! {" "}
                  <button className="text-red-500" to="/recovery">
                    Resend
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recovery;
