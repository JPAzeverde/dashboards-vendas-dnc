import styled from 'styled-components'

const RegistrationArea = styled.div`
    background: red;
`
const RegistrationImage = styled.div`
    background-image: url(/LoginImage.svg);
    background-size:cover;
    height:100vh;
    width:50vw;
`

function Registration() {
  return (
    <>
    <RegistrationArea></RegistrationArea>
    <RegistrationImage />
    </>
  );
}

export default Registration;
