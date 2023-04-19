import React from "react";
import { Container, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

import Logo from "../../Assets/image/Logo.png";
import { motion } from "framer-motion";
import ResetForm from "./FormInput/ResetForm";
import { Link } from "react-router-dom";


//////////////////////////////////
const RootStyle = styled("div")({
    background: "rgb(249, 250, 251)",
    display: "grid",
    placeItems: "center",
});

const HeadingStyle = styled(Box)({
    textAlign: "center",
});

const ContentStyle = styled(Box)({
    maxWidth: 480,
    padding: 25,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
    initial: {
        y: 40,
        opacity: 0,
        transition: { duration: 0.6, ease: easing },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
};

const ResetPassword = ({ setAuth }) => {
    return (
        <RootStyle>
            <Container maxWidth="sm" sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
                <ContentStyle>
                    <Link to="/Login" style={{ cursor: "pointer", color: "#FE4F62" }}>Login</Link>
                    <HeadingStyle component={motion.div} {...fadeInUp}>
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>

                        <Box height={15} />

                        <Typography sx={{ color: "text.secondary", mb: 5 }}>
                            Reset your password
                        </Typography>

                        <Typography sx={{ color: "text.secondary", mb: 5 }}>
                            Enter your email and check your inbox for instructions. Please also check your spam folder.
                        </Typography>
                    </HeadingStyle>

                    <Box height={20} />

                    <ResetForm setAuth={setAuth} />

                </ContentStyle>
            </Container>
        </RootStyle>
    );
};

export default ResetPassword;
