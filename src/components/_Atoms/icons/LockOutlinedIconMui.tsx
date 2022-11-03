import { Avatar } from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LockOutlinedIconMui = () => {
  return (
    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
      <LockOutlinedIcon />
    </Avatar>
  );
};

export default LockOutlinedIconMui;
