import { Header, CardComponent, AvatarList, CustomTable, CustomChart } from "@/componnents";
import { Container, Box } from "@mui/material";
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

  const mockTableData = {
    header:['name','Email','Actions'],
    rows:[
      [
        <span>Nome 1</span>,
        <span>Email 1</span>,
        <button>Action 1</button>,
      ],
      [
        <span>Nome 2</span>,
        <span>Email 2</span>,
        <button>Action 2</button>,
      ],
      [
        <span>Nome 3</span>,
        <span>Email 3</span>,
        <button>Action 3</button>,
      ],
    ]
  }
  
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" gap={1}>
          <CardComponent>
            <AvatarList listData={mockListData} />
          </CardComponent>
          <CardComponent>
            <CustomTable headers={mockTableData.header} rows={mockTableData.rows} />
          </CardComponent>
          <CardComponent>
            <CustomChart
              labels={['jan', 'fev', 'mar', 'abr', 'mai']}
              data={[1700.01, 2000.02, 2500.00, 4000.04 , 3000.03]}
              type='line' />
          </CardComponent>
        </Box>
      </Container>
    </>
  );
}

export default Home;
