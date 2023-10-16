// import React from 'react'
// import { useFieldArray, useForm, FieldErrors } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
// import {yupResolver} from '@hookform/resolvers/yup'
// import * as yup from 'yup'

// const schema = yup.object({
//     name : yup.string().required('name is required'),
//     email : yup.string().required('email is required'),
//     password : yup.number().required('password is required')
// })
// const YupForm = () => {


//     const form = useForm({
//         defaultValues: {
//             name: "pilu",
//             email: "",
//             password: "", 
//         },
//         resolver:yupResolver(schema)
//     });
//     const { register, control, handleSubmit, formState, watch,reset,trigger } = form;
//     const { errors, touchedFields, dirtyFields,isDirty,isValid,isSubmitting,isSubmitSuccessful} = formState;


//     const onSubmit = (data) => {
//         console.log("inside submit", data);
//     };

//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit(onSubmit)}>
//         <div className="inp">
//                     <label htmlFor="name">name</label> <br />
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register('name')}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.name?.message}</p>
//                 </div>
//                 <div className="inp">
//                     <label htmlFor="email">mail</label> <br />
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register('email')}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.email?.message}</p>
//                 </div>
//                 <div className="inp">
//                     <label htmlFor="password">password</label> <br />
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register('password')}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.password?.message}</p>
//                 </div>
//                 <button type="submit">submit</button>
//         </form>
//     </div>
//   )
// }

// export default YupForm