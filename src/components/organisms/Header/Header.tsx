import { ButtonBase, Grid, Typography } from "@mui/material";
import { Logo } from "components/atoms/Logo/Logo";
import { NavButton } from "components/atoms/NavButton/NavButton";
import { BsHandbagFill } from "react-icons/bs";
interface HeaderProps {
  title: String;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Grid
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60px",
        borderBottom: "1px solid #282c34",
      }}
    >
      <NavButton />
      <Typography
        component={"p"}
        sx={{ color: "#c99681", fontSize: "27px", fontWeight: "bold" }}
      >
        <Typography
          component={"span"}
          sx={{ color: "#fff", marginRight: "10px", fontSize: "20px" }}
        >
          <BsHandbagFill />
        </Typography>
        {title}
      </Typography>
      <ButtonBase
        sx={{
          position: "absolute",
          right: "20px",
          top: "24%",
          backgroundColor: "#004bfb",
          border: "none",
          padding: "7px 15px",
          color: "#fff",
          fontSize: "15px",
          borderRadius: '5px'
        }}
      >
        Đăng nhập
      </ButtonBase>
    </Grid>
  );
};
