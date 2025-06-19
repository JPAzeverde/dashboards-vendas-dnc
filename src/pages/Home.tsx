import { Header, CardComponent, AvatarList } from "@/componnents";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";

function Home() {
  const mockListData = [
    {
      avatar:'/avatarMock1.svg',
      name: '1 - Nome e Sobrenome',
      subtitle: currencyConverter(1000),
    },
    {
      avatar:'/avatarMock1.svg',
      name: '2 - Nome e Sobrenome',
      subtitle:currencyConverter(2000),
    },
    {
      avatar:'/avatarMock1.svg',
      name: '3 - Nome e Sobrenome',
      subtitle:currencyConverter(3000),
    },
  ]
  
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        
        <CardComponent >
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  );
}

export default Home;
