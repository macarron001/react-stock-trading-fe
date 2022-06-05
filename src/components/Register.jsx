// import React from "react"
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import { useEffect } from "react"
// import axios from "axios"

// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string(),
//   confirmedPassword: yup.string().oneOf([yup.ref("password"), null]),
// })

// const Register = () => {
//   const {
//     register,
//     handleSubmit,
//     getValues,
//     formState: { errors, isSubmitSuccessful },
//     setError,
//   } = useForm({
//     resolver: yupResolver(schema),
//   })

//   useEffect(() => {
//     if (isSubmitSuccessful) {
//       const values = getValues()
//       axios({
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         url: "http://localhost:3001/signup",
//         data: {
//           user: {
//             email: values.email,
//             password: values.password,
//           },
//         },
//       })
//         .then((res) => {
//           console.log(res)
//         })
//         .catch((error) => {
//           const { full_messages, ...errors } = error.response.data.errors
//           Object.keys(errors).forEach((name) => {
//             setError(name, {
//               type: "manual",
//               message: error.response.data.errors.full_messages[0],
//             })
//           })
//         })
//     }
//   }, [isSubmitSuccessful])

//   const onSubmit = (form, e) => {
//     e.preventDefault()
//   }

//   return (
//     <div className="wrapper">
//       <header>
//         <div></div>
//         <div className="center-column">
//           <h1>LOGO</h1>
//         </div>
//         <div className="right-column"></div>
//       </header>
//       <div className="main-register">
//         <div className="sub-header-register">
//           <h1>Let's set you up with an account first!</h1>
//           <div>
//           </div>
//         </div>
//         <div className="form-container-register">
//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             <div>
//               <input
//                 required
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="email"
//                 {...register("email")}
//               ></input>
//               <span>{errors.email?.message}</span>
//               <input
//                 required
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="password"
//                 {...register("password")}
//               ></input>
//               <span>{errors.password?.message}</span>
//               <input
//                 required
//                 type="password"
//                 id="confirmedPassword"
//                 name="confirmedPassword"
//                 placeholder="confirm password"
//                 {...register("confirmedPassword")}
//               ></input>
//               <span>
//                 {errors.confirmedPassword && "password does not match"}
//               </span>
//             </div>
//             <button className="btn-signup" type="submit">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="registered">
//         <p>Already got an account?</p>
//         {/* <Link to="/slack-app">Sign in to an existing account</Link> */}
//       </div>
//       <footer>
//         <div>© 2022 Ronny Pinoon</div>
//       </footer>
//     </div>
//   )
// }

// export default Register