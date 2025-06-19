import { Header, CardComponent } from "@/componnents";
import { Container } from "@mui/material";

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent />
        <CardComponent className='warning'>
          Card
        </CardComponent>
      </Container>
    </>
  );
}

export default Home;
