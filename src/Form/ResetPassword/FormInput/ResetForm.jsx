import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Box, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useEffect } from "react";


/////////////////////////////////////////////////////////////
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const ResetForm = ({ setAuth }) => {

  // For Change title dynamically
  useEffect(() => {
    document.title = "Reset Your PDFLover password";
  }, []);


  // For recaptcha
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      setTimeout(() => {
        setAuth(true);
        navigate("/", { replace: true });
      }, 2000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </Stack>

          <div className="captcha">
            <ReCAPTCHA
              sitekey="6LdoRyUlAAAAAKmYRaxs2B4NhZcn2PCOD8A5pEIJ"
              onChange={onChange}
              style={{ width: "100px" }}
            />
          </div>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}>
            <Button
              disabled={!verified}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              sx={{
                background: "#FE4F62",
                ":hover": {
                  background: "black",
                  color: "white",
                },
              }}>
              Send
            </Button>
          </Box>
          <Button sx={{ color: "#FE4F62" }}>
            <Link variant="subtitle2" color="#FE4F62" to="/Login">
              Back
            </Link>
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default ResetForm;
