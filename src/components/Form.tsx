import React, { JSX, Ref, useRef, useState } from "react";
import { EyeOff, Eye, Loader } from "lucide-react";
import { createUser, signInUser } from "../utils/firebase_auth";
import { validateForm, IValidateForm } from "../utils/validateForm";
import { FirebaseError } from "firebase/app";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_IMG } from "../utils/constants";

interface IFormValidation {
  email?: boolean;
  password?: boolean;
}

const Login = (): JSX.Element => {
  const dispatch = useDispatch();
  const [showLearnMoreButton, setShowLearMoreButton] = useState(true);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [validateInput, setValidateInput] = useState<IValidateForm>();
  const [formValidation, setFormValidation] = useState<IFormValidation>({
    email: true,
    password: true,
  });
  const emailRef: Ref<HTMLInputElement> = useRef(null);
  const passwordRef: Ref<HTMLInputElement> = useRef(null);
  const currentPasswordRef: Ref<HTMLInputElement> = useRef(null);
  const nameRef: Ref<HTMLInputElement> = useRef(null);
  // const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validateInput = validateForm(
      emailRef.current?.value,
      passwordRef.current?.value
    );
    setValidateInput(validateInput);
    setFormValidation({
      email: validateInput.isEmailvalid,
      password: validateInput.isPasswordValid,
    });
    if (
      validateInput.isEmailvalid &&
      validateInput.isPasswordValid &&
      emailRef.current &&
      passwordRef.current
    ) {
      if (!isSignIn) {
        if (!isPasswordMatch) {
          alert("password and confirm password does not match");
          return;
        }
        try {
          setLoading(true);
          const result = await createUser(
            emailRef.current?.value,
            passwordRef.current?.value,
            nameRef.current?.value || ""
          );
          if (!result) {
            return "";
          }
          const { email, displayName, uid, photoURL } = result;

          dispatch(
            addUser({
              name: displayName,
              uid,
              photoURL,
              email,
            })
          );
          setLoading(false);

          if (result) {
            alert("User successfully created");
            // navigate("/Browse");
          }
        } catch (err: unknown) {
          setLoading(false);
          if (err instanceof FirebaseError) {
            const firebaseErr = err as FirebaseError & {
              customData?: {
                _tokenResponse?: { error?: { message?: string } };
              };
            };

            alert(firebaseErr.customData?._tokenResponse?.error?.message);
          }
        }
      } else {
        try {
          setLoading(true);
          const result = await signInUser(
            emailRef.current?.value,
            passwordRef.current?.value
          );
          setLoading(false);
          if (result) {
            alert("User successfully SignedIn");
            // navigate("/Browse");
          }
        } catch (err: unknown) {
          setLoading(false);
          if (err instanceof FirebaseError) {
            // const firebaseErr = err as FirebaseError & {
            //   customData?: {
            //     _tokenResponse?: { error?: { message?: string } };
            //   };
            // };

            alert(err?.message);
          }
        }
      }
    }
  };
  return (
    // 1️⃣ h-screen w-screen → Ensures the div takes the full viewport height & width.
    // 2️⃣ bg-cover → Ensures the image covers the entire screen without distortion.
    // 3️⃣ bg-center → Centers the image properly.
    // 4️⃣ backgroundImage (inline style) → Applies the image as a background.

    <div
      className="h-screen w-screen overflow-x-hidden bg-gradient-to-bl from-black bg-black"
      // style={{
      //   backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg")`,
      // }}
    >
      <img
        className="w-screen h-screen object-cover md:max-h-screen bg-center bg-cover bg-blend-multiply bg-black"
        src={NETFLIX_IMG}
        alt="image"
      />
      <div className="w-full flex flex-col">
        <div className="flex justify-center relative">
          <div className="shadow-2xl z-100 bg-black/80 text-white/95 w-[70%] md:w-[30%] flex justify-center absolute bottom-0 h-[650px]  md:h-[700px]">
            <div className="flex flex-col w-full md:w-8/10 p-5">
              <div className="flex justify-start px-0 mt-0 md:px-5 md:mt-10">
                <h2 className="text-2xl md:text-4xl font-bold">
                  {isSignIn ? "Sign In" : "Sign Up"}
                </h2>
              </div>
              <form
                className="flex flex-col gap-6 pt-5 md:pt-10 pb-3 px-0 md:px-5 font-medium text-xl"
                onSubmit={handleSubmit}
              >
                {!isSignIn && (
                  <input
                    className="px-4 py-2 md:py-6 flex-1 border border-slate-400 text-[15px]"
                    type="text"
                    placeholder="Enter the Name"
                    ref={nameRef}
                  />
                )}
                <div className="flex flex-col justify-center gap-1">
                  <input
                    className="px-4 py-2 md:py-6 w-full border border-slate-400 text-[15px]"
                    ref={emailRef}
                    type="text"
                    placeholder="Enter Email"
                    onChange={() => {
                      setFormValidation({
                        email: true,
                        password: formValidation.password,
                      });
                    }}
                    onBlur={() => {
                      const validateInput = validateForm(
                        emailRef.current?.value
                      );

                      setFormValidation({
                        email: validateInput.isEmailvalid,
                        password: formValidation.password,
                      });
                      setValidateInput({
                        isEmailvalid: validateInput.isEmailvalid,
                        isPasswordValid: formValidation.password,
                      });
                    }}
                  />
                  {!validateInput?.isEmailvalid && !formValidation.email && (
                    <p className="text-red-500/90 text-sm md:text-lg">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <div>
                  <div className="flex border border-slate-400 flex-1 relative">
                    <input
                      className="px-4 py-2 md:py-6 active:border-none focus:outline-0 w-11/12 text-[15px]"
                      ref={passwordRef}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      onChange={(e) => {
                        if (
                          e.target.value != currentPasswordRef.current?.value
                        ) {
                          setIsPasswordMatch(false);
                        } else {
                          setIsPasswordMatch(true);
                        }

                        setFormValidation({
                          password: true,
                          email: formValidation.email,
                        });
                      }}
                      onBlur={() => {
                        const validateInput = validateForm(
                          emailRef.current?.value,
                          passwordRef.current?.value
                        );

                        setFormValidation({
                          password: validateInput.isPasswordValid,
                          email: formValidation.email,
                        });
                        setValidateInput({
                          isPasswordValid: validateInput.isPasswordValid,
                          isEmailvalid: formValidation.email,
                        });
                      }}
                    />
                    <button
                      className="absolute top-1.5 md:top-7 right-3"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <Eye className="w-5 md:w-6" />
                      ) : (
                        <EyeOff className="w-5 md:w-6" />
                      )}
                    </button>
                  </div>
                  {!validateInput?.isPasswordValid &&
                    !formValidation?.password && (
                      <p className="text-red-500/90 text-sm md:text-lg">
                        Enter a valid password with atleast 8 chars including 1
                        special char and 1 upper case letter and a digit
                      </p>
                    )}
                </div>

                {!isSignIn && (
                  <>
                    <div className="flex border border-slate-400 flex-1 relative">
                      <input
                        ref={currentPasswordRef}
                        className="px-4 py-2 md:py-6 active:border-none focus:outline-0 w-11/12 text-[15px]"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        onChange={(e) => {
                          if (passwordRef.current?.value != e.target.value) {
                            setIsPasswordMatch(false);
                          } else {
                            setIsPasswordMatch(true);
                          }
                        }}
                      />
                      <button
                        className="absolute top-1.5 md:top-7 right-3"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowConfirmPassword(!showConfirmPassword);
                        }}
                      >
                        {showConfirmPassword ? (
                          <Eye className="w-5 md:w-6" />
                        ) : (
                          <EyeOff className="w-5 md:w-6" />
                        )}
                      </button>
                    </div>
                    {!isPasswordMatch && (
                      <p className="text-red-500/80 mt-[-20px]">
                        password do not match
                      </p>
                    )}
                  </>
                )}

                <button
                  className="py-2 md:px-8 md:py-4 bg-[rgb(229,9,20)] hover:bg-[rgb(180,0,0)] rounded-sm font-medium cursor-pointer flex justify-center items-center disabled:pointer-events-none text-[15px]"
                  type="submit"
                  disabled={!(formValidation.email && formValidation.password)}
                >
                  {loading ? (
                    <Loader size={24} />
                  ) : isSignIn ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </form>

              <div className="mt-0">
                {isSignIn && (
                  <div className="md:px-5">
                    <p className="text-center">OR</p>
                    <button className="py-2 md:px-8 md:py-4 bg-gray-500/40 rounded-sm w-full hover:bg-gray-500/35 cursor-pointer">
                      Sign In with Code
                    </button>
                  </div>
                )}
                <div className="md:px-5 py-5 md:py-10 md:flex md:items-center text-xl">
                  <p className="font-extralight text-[15px]">
                    {isSignIn ? "New to Netflix?" : "Already Have An Account?"}
                  </p>
                  <button
                    className="font-bold hover:underline cursor-pointer text-[15px]"
                    onClick={() => setIsSignIn(!isSignIn)}
                  >
                    {isSignIn ? "Sign up now" : "Sign In"}
                  </button>
                </div>
                <div className="text-base/6 text-gray-300 px-5">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                  {showLearnMoreButton && (
                    <button
                      onClick={() => setShowLearMoreButton(false)}
                      className="ml-1 text-blue-500"
                    >
                      Learn more.
                    </button>
                  )}
                  {!showLearnMoreButton && (
                    <p className="mt-5">
                      The information collected by Google reCAPTCHA is subject
                      to the Google Privacy Policy and Terms of Service, and is
                      used for providing, maintaining, and improving the
                      reCAPTCHA service and for general security purposes (it is
                      not used for personalised advertising by Google).
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:justify-center h-[60vh] text-white/80 gap-3 text-xl mt-50 md:mt-0">
          <div className="flex justify-start md:w-1/2 ml-10 md:ml-60 mt-4 text-[15px]">
            <p>Questions?</p>
            <span className="ml-1">Call 000-800-919-1743</span>
          </div>

          <div className="flex justify-start mt-5 w-9/12 md:ml-60 ml-10 text-[15px]">
            <ul className=" w-full flex flex-wrap md:text-lg underline">
              <li className="mt-4 w-3/12 bg-black">
                <a href="https://help.netflix.com/en/node/412">FAQ</a>
              </li>
              <li className="mt-4 w-3/12  bg-black">
                <a href="https://help.netflix.com/en/node/412">Help Centre</a>
              </li>
              <li className="mt-4 w-3/12  bg-black">
                <a href="https://help.netflix.com/en/node/412">Terms of Use</a>
              </li>
              <li className="mt-4 w-3/12  bg-black">
                <a href="https://help.netflix.com/en/node/412">Privacy</a>
              </li>
              <li className="mt-5 w-3/12">
                <a href="https://help.netflix.com/en/node/412">
                  Cookie Preferences
                </a>
              </li>
              <li className="mt-5">
                <a href="https://help.netflix.com/en/node/412">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
