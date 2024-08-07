"use client"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInValidationSchema } from "@/utils/validations";
import { Signin } from "@/interface/auth";
import { setDataToCookie } from "@/utils/data-service";
import  auth  from "@/service/auth";
import { useRouter } from "next/navigation";
import Notification from "@/utils/notification";
import { useState } from "react";

const Index = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues: Signin = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values: Signin) => {
    try {
      const response = await auth.sign_in(values);
      if (response.status === 200) {
        router.push("/");
        setDataToCookie("access_token",response.data.access_token);
        setDataToCookie("user_id", response.data.id )
        Notification({
          title: "Successfully login",
          type: "success",
        });
      }
    } catch (error:any) {
      if (error.response.status === 400) {
        Notification({
          title: error?.response?.data?.message,
          type: "error",
        });
      } else if (error.response.status === 404) {
        Notification({
          title: "Email not found",
          type: "error",
        });
      }
      console.error(error);
    }
  };
  return (
    <>
      <div className=" flex-col flex items-center justify-center gap-3 p-5 mb-4">
        <h1 className="text-[30px] font-bold sm:text-[35px] md:text-[40px]">
          Login
        </h1>
        <div className="max-w-[600px]">
          <Formik
            initialValues={initialValues}
            validationSchema={signInValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  size="small"
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                />
                <Field
                  size="small"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  as={TextField}
                  label="Password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="text-[red] text-[15px]"
                    />
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  size="small"
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{marginTop:"15px", backgroundColor:"#FBD029", marginBottom:"10px"}}
                  className="hover:bg-[#FBb005] mb-[10px]"
                >
                  {isSubmitting ? "Submitting" : "Login"}
                </Button>
                <span onClick={()=>router.push("/signup")} className=" cursor-pointer text-[20px] hover:text-[#FBb005]">Signup</span>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default Index;
