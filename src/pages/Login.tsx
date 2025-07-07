import { useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode' 
import Cookies from 'js-cookie'

//Components
import { Box, Grid, Container } from '@mui/material'
import { Logo, BannerImage, FormComponent, StyledH1, StyledP } from '@/componnents'
//Hooks
import { useFormValidation, usePost } from '@/hooks'
//Utils
import { pxToRem, jwtExpirationDataConverter} from '@/utils'
//Types
import type { LoginData, LoginPostData, MessageProps, DecodedJWT } from '@/types'

import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/index'; 



function Login() {
  const navigate = useNavigate()
  const {email, message} = useSelector((state : RootState) => state.createProfile)


  const inputs = [
    { type: 'email', placeholder: 'Email' },
    { type: 'password', placeholder: 'Password' },
  ];

  const { data, loading, error, postData } = usePost<LoginData, LoginPostData>('login');
  const { formValues, formValid, handleChange: handleInputChange } = useFormValidation(inputs);

  const handleMessage = ():MessageProps => {
    if (!error) return { msg: message ?? '', type: 'success' };

    switch (error) {
      case 401:
        return { msg: 'Email ou senha inválido', type: 'error' };
      default:
        return { msg: 'Não foi possível realizar a operação', type: 'error' };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    });
  };

  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJWT = jwtDecode(data?.jwt_token)
      Cookies.set('Authorization', data?.jwt_token, {
        expires: jwtExpirationDataConverter(decoded.exp),
        secure: true
      })
      if (Cookies.get('Authorization')) navigate('/home')
    }
  }, [data, navigate]);

  useEffect(()=>{
    if(email){
      handleInputChange(0, email)
    }
  }, [email])

  return (
    <Box>
      <Grid container>
        <Grid
          size={{xs: 12,sm: 6, md: 6}}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            height: '100vh',
          }}
        >
          <Container maxWidth="sm">
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <Logo height={41} width={100} />
            </Box>

            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Bem-vindo</StyledH1>
              <StyledP>Digite sua senha e email para logar</StyledP>
            </Box>

            <FormComponent
              inputs={inputs.map((input, index) => ({
                type: input.type,
                placeholder: input.placeholder,
                value: formValues[index] || '',
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(index, e.target.value),
              }))}
              buttons={[
                {
                  className: 'primary',
                  type: 'submit',
                  children: loading ? 'Aguarde...' : 'Login',
                  disabled: !formValid || loading,
                  onClick: handleSubmit,
                },
              ]}
              message={handleMessage()}
            />

            
            <Link to='/registration' className='mt-2'>Registre-se</Link> 

          </Container>

        </Grid>

        <Grid
          size={{sm: 6, md: 6}}
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login