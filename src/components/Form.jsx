// import React, { useEffect } from "react";
// import { useFieldArray, useForm, FieldErrors } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
// import {yupResolver} from '@hookform/resolvers/yup'
// import * as yup from 'yup'

// const schema = yup.object({
//     name : yup.string().required('name is required')
// })

// const Form = () => {
//     const form = useForm({
//         //to set default valueees
//         defaultValues: {
//             name: "pilu",
//             email: "",
//             password: "",
//             number: ["", ""],
//             social: {
//                 twitter: "",
//                 facebook: "",
//             },
//             phNumbers: [{ number: 0 }],
//         },
//         mode:'onSubmit'
//     });

//     const { register, control, handleSubmit, formState, watch,reset,trigger } = form;
//     const { errors, touchedFields, dirtyFields,isDirty,isValid,isSubmitting,isSubmitSuccessful} = formState;
//     console.log(touchedFields, "touched fields", dirtyFields, "dirty fields");
//     const { fields, append, remove } = useFieldArray({
//         name: "phNumbers",
//         control,
//     });
//     const watchForm = watch();
//     const onSubmit = (data) => {
//         console.log("inside submit", data);
//     };
//     let onError = (errors) => {
//         console.log(errors);
//     };
//     useEffect(
//         ()=>{
//             if(isSubmitSuccessful) {
//                 reset()
//             }
//         },[isSubmitSuccessful,reset]
//     )
//     return (
//         <div style={{ height: "100vh" }}>
//             <DevTool control={control} />

//             <form
//                 onSubmit={handleSubmit(onSubmit, onError)}
//                 action=""
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "100%",
//                     flexDirection: "column",
//                 }}
//             >
//                 <div className="inp">
//                     <label htmlFor="name">Name</label> <br />
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register("name", { required: "name is required", value: true })}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.name?.message}</p>
//                 </div>
//                 <div className="inp">
//                     <label htmlFor="email">E-mail</label> <br />
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register("email", {
//                             required: "email is required",
//                             value: true,
//                             pattern: {
//                                 value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                                 message: "invalid email format",
//                             },
//                             validate: {
//                                 notAdmin: (fieldValue) => {
//                                     return (
//                                         fieldValue !== "admin@gmail.com" || "enter a different mail"
//                                     );
//                                 },
//                                 notSupport: (fieldValue) => {
//                                     return (
//                                         !fieldValue.endsWith("baddomain.com") ||
//                                         "this format is not supported"
//                                     );
//                                 },
//                                 emailAvailable : async(fieldValue)=>{
//                                     const response = await fetch(`http://localhost:4000/users?email=${fieldValue}`)
//                                     const data = await response.json()
//                                     return data.length === 0 || 'email already exist'
//                                 }
//                             },
//                         })}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.email?.message}</p>
//                 </div>
//                 <div className="inp">
//                     <label htmlFor="primary number">Primary Number</label> <br />
//                     <input
//                         type="tel"
//                         id="primary number"
//                         name="primary number"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register("number.0", {
//                             required: "number is required",
//                             value: true,
//                         })}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.number?.message}</p>
//                 </div>
//                 <div className="inp">
//                     <label htmlFor="secondary number">secondary Number</label> <br />
//                     <input
//                         type="tel"
//                         id="secondary number"
//                         name="secondary number"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register("number.1", {
//                             disabled: true,
//                             required: "secondary number is required",
//                             value: true,
//                         })}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.number?.message}</p>
//                 </div>

//                 <div className="inp">
//                     <label htmlFor="password">Password</label> <br />
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register("password", { required: "password is required" })}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.password?.message}</p>
//                 </div>

//                 <div className="inp">
//                     <label htmlFor="twitter">Twitter</label> <br />
//                     <input
//                         type="text"
//                         id="twitter"
//                         name="twitter"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register("social.twitter")}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.password?.message}</p>
//                 </div>

//                 <div className="inp">
//                     <label htmlFor="facebook">facebook</label> <br />
//                     <input
//                         type="text"
//                         id="facebook"
//                         name="facebook"
//                         style={{ padding: "10px", width: "100%", color: "black" }}
//                         {...register("social.facebook")}
//                     />{" "}
//                     <br />
//                     <p style={{ color: "red" }}>{errors.password?.message}</p>
//                 </div>

//                 <div className="inp">
//                     <label htmlFor="list">list of phone numbers</label> <br />
//                     {fields.map((field, i) => {
//                         return (
//                             <div style={{ display: "flex" }} key={field.id}>
//                                 <input
//                                     type="text"
//                                     id="list"
//                                     name="list"
//                                     style={{ padding: "10px", width: "100%", color: "black" }}
//                                     {...register(`phNumbers.${i}.number`, {
//                                         valueAsNumber: true,
//                                     })}
//                                 />
//                                 {i > 0 && (
//                                     <button type="button" onClick={() => remove(i)}>
//                                         remove
//                                     </button>
//                                 )}
//                             </div>
//                         );
//                     })}
//                     <button type="button" onClick={() => append({ number: "" })}>
//                         add new number
//                     </button>
//                     <br />
//                 </div>

//                 <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>submit</button>
//                 <button type="button" onClick={()=>reset()}>reset</button>
//             </form>
//         </div>
//     );
// };

// export default Form;
