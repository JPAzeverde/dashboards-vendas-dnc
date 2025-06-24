import { useContext } from "react";
import { Header, CardComponent, StyledButton, StyledH2 } from "@/componnents"

import { AppThemeContext } from "@/contexts"
import { Container, Grid } from "@mui/material"

import { logout } from "@/services";

function Profile() {
  const themeConstext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="md-2 =" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{xs: 12, sm: 6}}>
            <CardComponent>
              Seus Dados
            </CardComponent>
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <CardComponent>
              <StyledH2>Definições de conta</StyledH2>
              <StyledButton className="primary mb-1" onClick={themeConstext?.toggleTheme}>
                Trocar para o tema {themeConstext?.appTheme == 'light' ? 'escuro' : 'claro' }
              </StyledButton>
              <StyledButton className="alert mb-1" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
      
      

    </>
  );
}

export default Profile;
