"use client";
import React, { useState } from "react";
import Logo from "../../../../public/assets/SocialMedia/Upwork Logo.png";
import { Toolbar } from "@mui/material";
import Image from "next/image";
import {
  StyleBellIcon,
  StyleQueIcon,
  StyleSendIcon,
  StyledHeader,
} from "./style";
import SelectVariants from "@/components/atoms/SelectComponent";
import { selectData } from "@/mock/SelectComponentInfo";
import Link from "next/link";
import CustomizedInputBase from "@/components/atoms/SearchInput";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AvatarMenu from "@/components/atoms/Avatar";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");
  const handleSelectChange1 = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedValue1(event.target.value);
  };
  const handleSelectChange2 = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedValue2(event.target.value);
  };
  const handleSelectChange3 = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectedValue3(event.target.value);
  };
  return (
    <StyledHeader>
      <Toolbar>
        <Image src={Logo} width="130" height="60" alt="logo" />
        {/* First SelectVariants */}
        <SelectVariants
          label={selectData[0].label}
          options={selectData[0].options}
          value={selectedValue1}
          onChange={handleSelectChange1}
        />
        {/* Second SelectVariants */}
        <SelectVariants
          label={selectData[1].label}
          options={selectData[1].options}
          value={selectedValue2}
          onChange={handleSelectChange2}
        />
        {/* Third SelectVariants */}
        <SelectVariants
          label={selectData[2].label}
          options={selectData[2].options}
          value={selectedValue3}
          onChange={handleSelectChange3}
        />
        <Link href="/">Message</Link>
        <CustomizedInputBase />
        <StyleQueIcon>
          <QuestionMarkIcon />
        </StyleQueIcon>
        <StyleSendIcon>
          <SendOutlinedIcon />
        </StyleSendIcon>
        <StyleBellIcon>
          <NotificationsNoneOutlinedIcon />
        </StyleBellIcon>
        <AvatarMenu />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
