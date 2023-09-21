import React from "react";
import { useRouter } from "next/navigation";
import TextFeild from "./LoginComponent/TextFeild";
import CustomButton from "@/components/atoms/Button";
import {
  StyleAppleButton,
  StyleGoogleButton,
  StyleSignupButton,
  StyledButtonsParent,
  StyledLoginForm,
  StyledParentForm,
  StyledTitleForm,
} from "./style";
import Google from "../../../../../../public/assets/SocialMedia/Google.png";
import Apple from "../../../../../../public/assets/SocialMedia/BlackApple.png";
import Image from "next/image";
import { Divider, Typography } from "@mui/material";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const handleLoginWithGoogle = () => {
    window.location.href = "https://accounts.google.com";
  };

  const handleLoginWithEmail = () => {
    const email = "user123@gmail.com";
    const subject = "Login to Upwork";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <StyledParentForm>
      <StyledLoginForm>
        <form>
          <StyledTitleForm>
            <h2>Log in to Upwork</h2>
          </StyledTitleForm>
          <TextFeild />
          <StyledButtonsParent>
            <CustomButton
              variant="contained"
              text="Continue With Email"
              style={{
                backgroundColor: "Green",
                borderRadius: "20px",
                width: "400px",
                height: "40px",
              }}
              onClick={handleLoginWithEmail}
            />
            <Divider orientation="horizantal" variant="middle" flexItem>
              <Typography variant="body2" color="text.secondary" align="center">
                {"or "}
              </Typography>
            </Divider>
            <StyleGoogleButton>
              <CustomButton
                variant="contained"
                icon={
                  <Image src={Google} alt="google" width={33} height={35} />
                }
                text="Continue With Google"
                style={{
                  backgroundColor: "Blue",
                  borderRadius: "20px",
                  width: "400px",
                  height: "40px",
                }}
                onClick={handleLoginWithGoogle}
              />
            </StyleGoogleButton>
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
                  width: "400px",
                  marginBottom: "50px",
                  marginTop: "10px",
                  height: "40px",
                }}
              />
            </StyleAppleButton>
          </StyledButtonsParent>
          <Divider orientation="horizantal" variant="middle" flexItem>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Don’t have an Upwork account?"}
            </Typography>
          </Divider>
          <StyleSignupButton>
            <CustomButton
              variant="outline"
              text="Sign Up"
              style={{
                backgroundColor: "White",
                borderRadius: "20px",
                color: "Green",
                fontWeight: "500",
                border: "2px solid Green",
                width: "250px",
                marginBottom: "30px",
                height: "40px",
              }}
              onClick={handleSignUp}
            />
          </StyleSignupButton>
        </form>
      </StyledLoginForm>
    </StyledParentForm>
  );
};

export default LoginForm;
