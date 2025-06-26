import { useEffect, type ChangeEvent } from 'react';
import { Box, Grid, Container } from '@mui/material'
import { BannerImage, FormComponent, StyledH1, StyledP, StyledUl, Logo } from '@/componnents';
import { pxToRem } from '@/utils';

import { useFormValidation, usePost } from '@/hooks';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/index'; 
import { setMessage, setProfileData } from '@/redux/slices/createProfile';

import type { CreateProfileData, InputProps } from '@/types';

import { useNavigate } from 'react-router-dom';


function Registration() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {email} = useSelector((state : RootState) => state.createProfile)

  const { 
    data,
    loading,
    error,
    postData,
  } = usePost<string, CreateProfileData>('profile/create', true);

  const step1Inputs: InputProps[] =[
    {name:'name', type:'text', placeholder:'Nome', required:true},
    {name:'email', type:'email', placeholder:'Email'},
    {name:'phone', type:'tel', placeholder:'Telefone', required:true},
  ]
  const handleStep1 = (e: React.FormEvent) =>{
    e.preventDefault()
    dispatch(
      setProfileData({
        email: String(step1FormValues[2])
      })
    )
  }

  const {
    formValues: step1FormValues,
    formValid: step1FormValid,
    handleChange: step1FormHandleChange
  } = useFormValidation(step1Inputs)

  const step2Inputs: InputProps[] =[
      {type:'password', placeholder:'Senha'},
  ]
  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      name: String(step1FormValues[0]),
      email: String(step1FormValues[1]),
      phone: String(step1FormValues[2]),
      password:String(step2FormValues[0]),
    })
  }
  const {
    formValues: step2FormValues,
    formValid: step2FormValid,
    handleChange: step2FormHandleChange
  } = useFormValidation(step2Inputs)
  
  const handleStepInputs = email ? step2Inputs : step1Inputs

  useEffect (()=>{
    if(data !== null){
      dispatch(setMessage('Usuário criado com sucesso'))
      navigate('/')
    } else if (error){
      alert(`Nao foi possivel realizar a operação( erro : ${error})`)
    } 
  },[data, error, navigate])


  return (
     <Box>
           <Grid container>
             <Grid
               size={{xs: 12,sm: 6, md: 6}}
               sx={{alignItems:'center',justifyContent:'center',display:'flex',height:'100vh'}}>
     
                 <Container maxWidth="sm">
                   <Box sx={{marginBottom:pxToRem(24)}}>
                      <Logo height={41} width={100} />
                    </Box>

                   <Box sx={{marginBottom:pxToRem(24)}}>
                     <StyledH1>{email? 'Defina sua senha' : 'Faça seu cadastro' }</StyledH1>
                     <StyledP>{email? 'Sua senha deve ter:' : 'Primeiro, diga-nos quem você é.' }</StyledP>
                     {
                        email && (
                        <StyledUl>
                          <li>Entre 8 e 16 caracteres;</li>
                          <li>Pelo menos uma letra maiúscula;</li>
                          <li>Pelo menos um caractere especial.</li>
                          <li>Pelo menos um número</li>
                        </StyledUl>
                      )}
                    
                   </Box>
                   
                    <FormComponent
                      inputs={handleStepInputs.map((input, index) => ({
                        type: input.type,
                        placeholder: input.placeholder,
                        value: email ? step2FormValues[index] || '' : step1FormValues[index] || '' ,
                        onChange: (e: ChangeEvent<HTMLInputElement>) => 
                          email ? 
                            step2FormHandleChange(index, (e.target as HTMLInputElement).value):
                            step1FormHandleChange(index, (e.target as HTMLInputElement).value)
                      }))}
                      buttons={[
                        { 
                          className: 'primary',
                          type: 'submit',
                          children: email? 'Enviar' : 'Proximo',
                          disabled: email? !step2FormValid || loading : !step1FormValid|| loading ,
                          onClick: email? handleStep2 : handleStep1
                        },
                      ]}
                      message={{ msg: 'sucesso', type: 'success' }}/>

                 </Container>
     
             </Grid>
             <Grid size={{sm: 6,}} sx={{display:{xs:'none',sm:'block'}}}>
                 <BannerImage />
             </Grid>
           </Grid>
         </Box>
  )
}

export default Registration;
