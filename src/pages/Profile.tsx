import { useContext } from "react";
import { Header, CardComponent, StyledButton } from "@/componnents"
import { AppThemeContext } from "@/contexts";
import { Container } from "@mui/material";

function Profile() {
  const themeConstext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container>
        <CardComponent>
          <StyledButton className="primary" onClick={themeConstext?.toggleTheme}>
            Trocar para o tema {themeConstext?.appTheme == 'light' ? 'escuro' : 'claro' }
          </StyledButton>
        </CardComponent>
      </Container>
      

    </>
  );
}

export default Profile;
