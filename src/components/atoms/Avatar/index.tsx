import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { StyledAvatar } from "../Avatar/style";
import Adla from "../../../../public/assets/SocialMedia/adla2.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const settings = ["Profile", "Logout"];

function AvatarMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (setting: string) => {
    handleCloseUserMenu();
    if (setting === "Profile") {
      router.push("/profile");
    } else if (setting === "Logout") {
      router.push("/");
    }
  };

  return (
    <StyledAvatar>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, width: 20 }}>
          <Avatar alt="Adla Mostafa" src={Adla} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "50px", width: "500px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Image
          src={Adla}
          alt="Adla"
          width={80}
          height={80}
          style={{
            borderRadius: "50%",
            marginLeft: "100px",
            marginRight: "100px",
            marginTop: "20px",
          }}
        />
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </StyledAvatar>
  );
}

export default AvatarMenu;
