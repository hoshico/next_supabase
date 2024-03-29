import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../libs/supabaseClient";
import { selectUser } from "../../libs/userSlice";

type FormData = {
  email: string;
  password: string;
};
const Signup = () => {
  const { register, handleSubmit } = useForm();

  // loginボタン
  const onLogin = async(data: any) => {
    const { user, error } = await supabase.auth.signUp(data);
    //selectUser(user)
  };
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="container py-12 px-6 h-full mx-auto">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center ">
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">新規登録</h4>
                    </div>
                    {/*フォーム*/}
                    <form onSubmit={handleSubmit(onLogin)}>
                      <div className="mb-4"> 
                        <input
                          {...register('email')}
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="email"
                        />
                      </div>
                      <div className="mb-4">  
                        <input
                          {...register('password')}
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="password"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          //style="
                          //  background: linear-gradient(
                          //    to right,
                          //    #ee7724,
                          //    #d8363a,
                          //    #dd3675,
                          //    #b44593
                          //  );
                          //"
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">Forgot password?</a>
                      </div>
                      {/*<div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2"> have an account?</p>
                        <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Danger
                        </button>
                      </div>*/}
                    </form>
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-cover bg-[url('/Petco_Park.jpg')]"
                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                    <p className="text-sm">
                      テキストテキスト
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Signup;