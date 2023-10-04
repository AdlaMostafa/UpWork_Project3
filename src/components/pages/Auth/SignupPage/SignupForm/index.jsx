"use client";
import React, { useState } from "react";
import CustomButton from "@/components/atoms/Button";
import { countries } from "../../../../../mock/countries";
import {
  StyleAppleButton,
  StyleGoogleButton,
  StyledButtonsParent,
  StyledNameFeild,
  StyledParentForm,
  StyledSignupForm,
  StyledTitleForm,
} from "./style";
import Google from "../../../../../../public/assets/SocialMedia/Google.png";
import Apple from "../../../../../../public/assets/SocialMedia/BlackApple.png";
import Image from "next/image";
import { Divider, TextField, Typography } from "@mui/material";
import SignupTextFeild from "./SignupComponent/SignupTextFeild/index";
import PasswordInput from "./SignupComponent/Password";
import CheckboxLabels from "./SignupComponent/CheckBox";
import LoginPage from "../../LoginPage/page";
import Link from "next/link";
const SignupForm = () => {
  const handleSignupWithGoogle = () => {
    window.location.href = "https://accounts.google.com";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = { id, firstName, lastName, email, password };
    console.log(userInfo);
  };
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <StyledParentForm>
      <StyledSignupForm>
        <form onSubmit={handleSubmit}>
          <StyledTitleForm>
            <h2>Sign up to find work you love</h2>
          </StyledTitleForm>
          <StyleAppleButton>
            <CustomButton
              variant="contained"
              icon={<Image src={Apple} alt="Apple" width={16} height={16} />}
              text="Continue With Apple"
              style={{
                backgroundColor: "White",
                borderRadius: "20px",
                color: "Black",
                border: "1px solid Black",
                width: "560px",
                marginBottom: "10px",
                marginLeft: "10px",
                height: "40px",
              }}
            />
          </StyleAppleButton>
          <StyleGoogleButton>
            <CustomButton
              variant="contained"
              icon={<Image src={Google} alt="google" width={35} height={36} />}
              text="Continue With Google"
              style={{
                backgroundColor: "Blue",
                borderRadius: "20px",
                width: "560px",
                height: "40px",
                marginLeft: "10px",
                marginBottom: "10px",
              }}
              onClick={handleSignupWithGoogle}
            />
          </StyleGoogleButton>
          <Divider orientation="horizantal" variant="middle" flexItem>
            <Typography variant="body2" color="text.secondary" align="center">
              {"or "}
            </Typography>
          </Divider>
          <StyledNameFeild>
            <SignupTextFeild
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{
                width: "270px",
              }}
            />
            <SignupTextFeild
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{
                width: "270px",
              }}
            />
          </StyledNameFeild>
          <SignupTextFeild
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="filled-select-currency-native"
            select
            defaultValue="Palestinian Territories"
            SelectProps={{
              native: true,
              sx: {
                width: "562px",
                height: "45px",
                marginLeft: "9px",
                marginTop: "10px",
                marginBottom: "10px",
              },
            }}
            variant="outlined"
          >
            {countries.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <CheckboxLabels label="Send me helpful email to find rewarding work and job leads" />
          <CheckboxLabels
            label={
              <span>
                Yes,I understand and agree to the
                <a
                  href="/terms"
                  style={{ color: "green", textDecoration: "none" }}
                >
                  Upwork Terms of Services
                </a>
                . including the
                <a
                  href="/terms"
                  style={{ color: "green", textDecoration: "none" }}
                >
                  user Agreement
                </a>
                and
                <a
                  href="/terms"
                  style={{ color: "green", textDecoration: "none" }}
                >
                  {" "}
                  Privacy Policy
                </a>
              </span>
            }
            fontSize="14px"
          />

          <StyledButtonsParent>
            <CustomButton
              variant="contained"
              text="Create my account"
              style={{
                backgroundColor: "Green",
                borderRadius: "20px",
                marginBottom: "10px",
                width: "540px",
                marginTop: "10px",
                height: "40px",
              }}
            />
          </StyledButtonsParent>
          <Typography
            variant="body2"
            marginBottom="15px"
            color="text.secondary"
            align="center"
          >
            {"Already have an account?"}
            <Link
              href={<LoginPage />}
              style={{ color: "green", textDecoration: "none" }}
            >
              Login
            </Link>
          </Typography>
        </form>
      </StyledSignupForm>
    </StyledParentForm>
  );
};

export default SignupForm;
