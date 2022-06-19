import { ButtonBase, Grid, Typography } from "@mui/material";
import { Logo } from "components/atoms/Logo/Logo";
import { NavButton } from "components/atoms/NavButton/NavButton";
import useAccount from "hooks/useAccount";
import { BsHandbagFill } from "react-icons/bs";
interface HeaderProps {
  title: String;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const account = useAccount();
  return (
    <Grid
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-between" },
        height: { xs: "60px", md: "100px" },
        borderBottom: "1px solid #282c34",
        padding: "0 20px",
      }}
    >
      <NavButton />
      <Typography
        component={"p"}
        sx={{
          color: "#c99681",
          fontSize: { xs: "27px", md: "37px" },
          fontWeight: "bold",
        }}
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
          padding: {xs:"7px 15px", md:"10px 15px"},
          color: "#fff",
          fontSize: "15px",
          borderRadius: "5px",
        }}
      >
        Đăng nhập
      </ButtonBase>
    </Grid>
  );
};
