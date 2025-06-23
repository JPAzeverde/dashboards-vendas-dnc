import { useContext } from "react";
import { Header, CardComponent, StyledButton } from "@/componnents"
import { AppThemeContext } from "@/contexts";

function Profile() {
  const themeConstext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton className="primary" onClick={themeConstext?.toggleTheme}>
          Trocar para o tema {themeConstext?.appTheme == 'light' ? 'escuro' : 'claro' }
        </StyledButton>
      </CardComponent>

    </>
  );
}

export default Profile;
