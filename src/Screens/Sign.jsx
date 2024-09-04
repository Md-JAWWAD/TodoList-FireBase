import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../COnfig/Config";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";

const Sign = () => {
  const [name, setName] = useState("");
  const [user, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSign = () => {
    let userObj = {
      name,
      email,
      user,
    };

    createUserWithEmailAndPassword(auth, email, password).then((credential) => {
      console.log(credential);
      localStorage.setItem("userData", JSON.stringify(userObj));
      navigate("/login");
    });
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          {" "}
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </div>
        <div>
          {" "}
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </div>
        <div>
          {" "}
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <Button onClick={handleSign} variant="outlined">
          Sign up
        </Button>
      </Box>
    </>
  );
};

export default Sign;
