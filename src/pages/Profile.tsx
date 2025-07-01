import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { Header, CardComponent, StyledButton, StyledH2, FormComponent } from "@/componnents"

import { AppThemeContext } from "@/contexts"
import { Container, Grid } from "@mui/material"

import { logout } from "@/services";

import type { InputProps, ProfileData, ProfileEditableData, MessageProps } from "@/types";

import { useFormValidation, useGet, useDelete, usePut } from "@/hooks";

function Profile() {
  const themeConstext = useContext(AppThemeContext)

  const [updateMessage, setUpdateMessage] = useState<MessageProps>({
    type:'success',
    msg:''
  })

  const clearMessage = () => {
    setTimeout(()=>{
      setUpdateMessage({
        type:'success',
        msg:''
      })
    }, 3000)
  }
  const{
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>('/profile')

  const{
    data: profileUpdateData,
    putData: profilePutData,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = usePut<ProfileEditableData>('/profile/update')

  const{ deleteData: profileDeleteData, loading: profileDeleteLoading,} = useDelete('/profile/delete')

  useEffect(()=>{
    if(profileData){
      handleChange(0,profileData.name)
      handleChange(1,profileData.email)
      handleChange(2,profileData.phone)
    }

  }, [profileData])
  
  const inputs: InputProps[] =[
    {name:'name', type:'text', placeholder:'Nome', required:true},
    {name:'email', type:'email', placeholder:'Email', disabled: true, required:false},
    {name:'phone', type:'tel', placeholder:'Telefone', required:true},
  ]
  
  const {formValues, formValid, handleChange} = useFormValidation(inputs)
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    await profilePutData(
      {
        name: String(formValues[0]),
        phone: String(formValues[2])
      }
    )
  }

  const handleDelete = async() =>{
    if(confirm('Tem certeza de apagar sua conta? Certifique se de deletar seus leads')){
      try{
        await profileDeleteData()
        alert('Perfil deletado com sucesso')
        // Cookies.remove('Authorization')
        // window.location.href='/'
      } catch (e) {
        alert('Nao foi possivel realizar a operação')
      }
    }
  }

  useEffect(()=>{
  if(profileUpdateData !== null){
    setUpdateMessage({
      msg:'Perfil atualizado com sucesso',
      type:'success',
    })
  } else if (profileUpdateError){
    setUpdateMessage({
      msg:'Não foi possível realizar essa operação',
      type:'error',
    })
  }
  clearMessage()
}, [profileUpdateData, profileUpdateError])

  return (
    <>
      <Header />
      <Container className="md-2 =" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{xs: 12, sm: 6}}>
            {
              !profileError && (
                  <CardComponent className={profileLoading ? 'skeleton-loading skeleton-loading-mh2' : ''}>
                    {
                      !profileLoading && profileData && (
                        <>
                          <StyledH2 className="mb-1">Seus Dados</StyledH2>
                          <FormComponent
                            inputs={inputs.map((input, index) => ({
                              ...input,
                              type: input.type,
                              placeholder: input.placeholder,
                              value: formValues[index] || '',
                              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                                handleChange(index, e.target.value),
                            }))}
                            buttons={[
                              {
                                className: 'primary',
                                id: "update-profile",
                                type: 'submit',
                                children: profileUpdateLoading ? 'Aguarde...':'Atualizar meu perfil',
                                disabled: !formValid || profileUpdateLoading,
                                onClick: handleSubmit,
                              },
                              {
                                className: 'alert',
                                id: "delete-profile",
                                disabled: profileDeleteLoading,
                                type: 'button',
                                children: profileDeleteLoading ? 'Aguarde' : 'Excluir minha conta',
                                onClick: handleDelete,
                              },
                            ]}
                            message={updateMessage}
                            />
                        </>
                    )}
                  </CardComponent>
              )
            }
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <CardComponent>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton id="button-theme" className="primary mb-1" onClick={themeConstext?.toggleTheme}>
                Trocar para o tema {themeConstext?.appTheme == 'light' ? 'escuro' : 'claro' }
              </StyledButton>
              <StyledButton id="button-logout" className="alert mb-1" onClick={logout}>
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
