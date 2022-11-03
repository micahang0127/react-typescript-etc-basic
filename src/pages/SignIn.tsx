export default function File() {
  return <div></div>;
}
// import React, { ChangeEvent, FormEvent, useState } from "react";
// import {
//   Button,
//   Container,
//   FormControlLabel,
//   Checkbox,
//   Link,
//   Grid,
//   Box,
//   Typography,
// } from "@mui/material/";
// import LockOutlinedIconMui from "../components/_Atoms/icons/LockOutlinedIconMui";
// import TextFieldMui from "../components/_Atoms/inputs/TextFieldMui";
// import { isImportEqualsDeclaration } from "typescript";

// // const LOGIN_USER = gql`
// // 	mutation loginUser($email:String){
// // 		loginUser(email: $email, password: $password){
// // 			accessToken
// // 		}
// // 	}
// // `

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>,loginUser(LOGIN_USE)

//   const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
//     console.log("iiiemail" + event.target.value);
//     setEmail(event.target.value);
//   };

//   const handleOnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
//     console.log("iiippppwwwl" + event.target.value);
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       const result = await loginUser({
//         variables: {
//           email: email,
//           password: password,
//         },
//       });
//       const accessToken = result.data?.loginUser.accessToken;
//     } catch (error) {
//       console.log("loginerror", error);
//     }
//   };
//   // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   console.log({
//   //     email: data.get("email"),
//   //     password: data.get("password"),
//   //   });
//   // };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <LockOutlinedIconMui />
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextFieldMui
//             id="email"
//             name="email"
//             label="Email Address"
//             required={true}
//             disabled={false}
//             onChange={handleOnChangeEmail}
//           />
//           <TextFieldMui
//             id="password"
//             name="password"
//             label="Password"
//             required={true}
//             disabled={false}
//             onChange={handleOnChangePassword}
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SignIn;
