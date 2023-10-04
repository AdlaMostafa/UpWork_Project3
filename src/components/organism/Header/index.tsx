"use client";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../../../public/assets/SocialMedia/Upwork Logo.png";
import { Toolbar } from "@mui/material";
import Image from "next/image";
import {
  StyleBellIcon,
  StyleQueIcon,
  StyleSendIcon,
  StyledHeader,
} from "./style";
import { selectData } from "@/mock/SelectComponentInfo";
import Link from "next/link";
import CustomizedInputBase from "@/components/atoms/SearchInput";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AvatarMenu from "@/components/atoms/Avatar";

import { makeStyles } from "@mui/styles";

interface HeaderProps {}

const useStyles = makeStyles({
  select1: {
    color: "green",
    border: "none",
    marginRight: "5px",
    height: "40px",
    marginTop: "10px",
    fontSize:'14px'
  },
  select2: {
    color: "green",
    marginRight: "5px",
    height: "40px",
    marginTop: "10px",
    fontSize:'14px'
  },
  select3: {
    border: "none",
    color: "green",
    marginRight: "5px",
    height: "40px",
    marginTop: "10px",
    fontSize:'14px'
  },
});

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();

  const [selectedValue1, setSelectedValue1] = useState<string>(
    selectData[0].options[0].value.toString()
  );
  const [selectedValue2, setSelectedValue2] = useState<string>(
    selectData[1].options[0].value.toString()
  );
  const [selectedValue3, setSelectedValue3] = useState<string>(
    selectData[2].options[0].value.toString()
  );

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
        {/* First Select */}
        <Select
          label={selectData[0].label}
          value={selectedValue1}
          onChange={handleSelectChange1}
          variant="outlined"
          className={classes.select1}
        >
          {selectData[0].options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {/* Second Select */}
        <Select
          label={selectData[1].label}
          value={selectedValue2}
          onChange={handleSelectChange2}
          variant="outlined"
          className={classes.select2}
        >
          {selectData[1].options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {/* Third Select */}
        <Select
          label={selectData[2].label}
          value={selectedValue3}
          onChange={handleSelectChange3}
          variant="outlined"
          className={classes.select3}
        >
          {selectData[2].options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
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
