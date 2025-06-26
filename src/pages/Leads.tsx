import { Header, CardComponent, StyledButton, StyledH2, FormComponent, CustomTable, StyledP, StyledSpan } from "@/componnents"
import { Container, Grid } from "@mui/material";

import { useFormValidation, useGet, usePost, useDelete } from "@/hooks";

import type { InputProps, LeadsData, LeadsPostData, LoginPostData, MessageProps } from "@/types";

import { useEffect, useState, type ChangeEvent } from "react";

import type { AxiosRequestConfig } from "axios"



function Leads() {
  
  const inputs: InputProps[] =[
    {name:'name', type:'text', placeholder:'Nome', required:true},
    {name:'email', type:'email', placeholder:'Email', required:true},
    {name:'phone', type:'tel', placeholder:'Telefone', required:true},
  ]
  
  const {formValues, formValid, handleChange} = useFormValidation(inputs)


  const { data:createLeadsData,
          loading:createLeadsLoading,
          error:createLeadsError,
          postData: createLeadsPostData,
  } = usePost<LeadsData, LeadsPostData>('leads/create', true);

  const{
      data: leadsData,
      loading: leadsLoading,
      error: leadsError,
      getData: getLeads
  } = useGet<LeadsData[]>('/leads')
  
  const{ deleteData: leadsDeleteData, loading: leadsDeleteLoading,} = useDelete('/leads/delete')

  const [createMessage, setCreateMessage] = useState<MessageProps>({
    type:'success',
    msg:'',
  })

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    await createLeadsPostData(
      {
        name: String(formValues[0]),
        email: String(formValues[1]),
        phone: String(formValues[2]),
      }
    )
  }

  const handleDelete = async (id: number) => {
    if(confirm('Tem certeza de apagar seu Lead?')){
      try{
        await leadsDeleteData({params:{id: id}})
        alert('Leads deletado com sucesso')
        getLeads()
      } catch (e) {
        alert('Nao foi possivel realizar a operação')
      }
    }
  }

  const clearMessage = () => {
    setTimeout(()=>{
      setCreateMessage({
        type:'success',
        msg:''
      })
    }, 3000)
  }


  useEffect(() =>{
    if(createLeadsData?.id){
      setCreateMessage({
        msg:'Lead criado com sucesso',
        type:'success'
      })
      getLeads()
      clearMessage()
    }else if (createLeadsError){
      setCreateMessage({
        msg:'Não foi possivel realizar essa operação',
        type:'error'
      })
    }
  }, [createLeadsData, createLeadsError])

  return (
    <>
      <Header />
      <Container className="md-2 =" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{xs: 12, sm: 7}}>
      
            <CardComponent className={leadsLoading  ? 'skeleton-loading skeleton-loading-mh2' : ''}>
              {
                !leadsError && !leadsLoading &&(
                  <>
                  <StyledH2 className="mb-1">Meus Leads</StyledH2>
                    {
                      leadsData?.length ? (
                        <CustomTable 
                          headers={['Nome','Email','Telefone', '']}
                          rows={(leadsData || []).map((lead) =>[ 
                            <StyledP key={`name-${lead.id}`}>{lead.name}</StyledP>,
                            <StyledP key={`email-${lead.id}`}>{lead.email}</StyledP>,
                            <StyledP key={`phone-${lead.id}`}>{lead.phone}</StyledP>,
                            <StyledButton key={`delete-${lead.id}`} className="borderless-alert" onClick={()=> handleDelete(lead.id)} disabled={leadsDeleteLoading}>Excluir</StyledButton>
                          ])}
                        />
                      ): (<StyledSpan>Sem Leads Cadastrados</StyledSpan>)
                    }
                  </>
                )
              }
              
                
            </CardComponent>
          </Grid>
          <Grid size={{xs: 12, sm: 5}}>
            <CardComponent>
              <StyledH2 className="mb-1">Cadastrar Leads</StyledH2>
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
                      type: 'submit',
                      children:'Cadastrar Leads',
                      disabled: !formValid  || createLeadsLoading || leadsDeleteLoading,
                      onClick: handleSubmit,
                    }
                  ]}
                  message={createMessage}
                  />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Leads;
