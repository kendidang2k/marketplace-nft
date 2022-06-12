import { Grid } from "@mui/material";
import { Logo } from "components/atoms/Logo/Logo";

const Header: React.FC = () => {
  return (
    <Grid>
      <Logo isNameVisible={true}/>
    </Grid>
  );
};

export default Header;
