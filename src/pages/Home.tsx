import { Header, CardComponent, AvatarList, CustomTable, CustomChart, StyledH2, StyledH3, StyledSpan } from "@/componnents";
import { Container, Grid } from "@mui/material";
import { currencyConverter , highlightsTextConverter } from "@/utils";
import { useGet } from "@/hooks";
import type { CustomChartProps, HighlightsData, NewsData, StarsData } from "@/types";
import { ClassNames } from "@emotion/react";


function Home() {
  const{
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighlightsData[]>('sales/highlights')

  const{
    data: salesMounthData,
    loading: salesMounthLoading,
    error: salesMounthError,
  } = useGet<CustomChartProps>('sales/month')

  const{
    data: salesStarsData,
    loading: salesStarsLoading,
    error: salesStarsError,
  } = useGet<StarsData[]>('sales/stars')

  const{
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useGet<NewsData[]>('news')

  const{
    data: salesYearData,
    loading: salesYearLoading,
    error: salesYearError,
  } = useGet<CustomChartProps>('sales/year')
  
  
  
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="mb-2">
        <Grid container spacing={4}>
          {
            !highlightsError && (
              <>
              <Grid size={{ xs:12, md:4 }}>
                <CardComponent className={highlightsLoading? 'skeleton-loading skeleton-loading-mh1': ''}>
                  {
                    !highlightsLoading && highlightsData && (
                      <>
                      <StyledH2 className="mb-1">Total de vendas no mês</StyledH2>
                      <StyledH3 className="mb-1" size={40} lineHeight={40}>{currencyConverter(highlightsData[0].value)}</StyledH3>
                      <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                      </>
                    )

                  }
                  
                </CardComponent>
              </Grid>
              <Grid size={{ xs:12, md:4 }}>
                <CardComponent className={ highlightsData? highlightsData[1].subtitle: 'skeleton-loading skeleton-loading-mh1'}>
                  {
                    !highlightsLoading && highlightsData && (
                      <>
                      <StyledH2 className="mb-1" color="white">Meta do mês</StyledH2>
                      <StyledH3 className="mb-1" size={40} lineHeight={40}>{currencyConverter(highlightsData[1].value)}</StyledH3>
                      <StyledSpan>
                        {highlightsTextConverter(highlightsData[1].subtitle)}
                      </StyledSpan>
                      </>
                    )

                  }
                </CardComponent>
              </Grid>
              <Grid size={{ xs:12, md:4 }}>
                <CardComponent className={highlightsLoading? 'skeleton-loading skeleton-loading-mh1': ''}>
                  {
                    !highlightsLoading && highlightsData && (
                      <>
                      <StyledH2 className="mb-1">Leads Conectados</StyledH2>
                      <StyledH3 className="mb-1" size={40} lineHeight={40}>{highlightsData[2].value}</StyledH3>
                      <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                      </>
                    )

                  }
                  
                </CardComponent>
              </Grid>
              </>
            )
          }
          
          <Grid size={{ xs:12, md:7 }}>
            {
              !salesMounthError && (
                  <CardComponent className={salesMounthData ? 'skeleton-loading skeleton-loading-mh2' : ''}>
                    {
                      !salesMounthLoading && salesMounthData && (
                        <>
                          <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
                          <CustomChart
                            labels={salesMounthData.labels.map((labels) => labels)}
                            data={salesMounthData.data.map((data) => data)}
                            type={salesMounthData.type}
                          />
                        </>
                      )
                    }
                  </CardComponent>
              )
            }
            
          </Grid>
          <Grid size={{ xs:12, md:5 }}>
            {
                !salesStarsError && (
                <CardComponent className={salesStarsData ? 'skeleton-loading skeleton-loading-mh2' : ''}>
                   {
                    !salesStarsLoading && salesStarsData && (
                        <>
                          <StyledH2 className="mb-1">Maiores vendedores no mês</StyledH2>
                          <AvatarList 
                            listData = { salesStarsData.map((star)=>({
                              avatar: `/dncAvatar.svg`,
                              name: star.name,
                              subtitle: currencyConverter(star.value)
                            }))
                          }/>
                        </>
                    )}
                </CardComponent>
                )}
          </Grid>
          <Grid size={{ xs:12, md:5 }}>
            {
              !newsError && (
                <CardComponent className={newsData ? 'skeleton-loading skeleton-loading-mh2' : ''}>
                  {
                    !newsLoading && newsData && (
                      <>
                       <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
                        <CustomTable 
                          headers={['Títulos','Horários']}
                          rows={newsData.map((news) => [
                            <a className='ellipsis ellipsis-sm' href={news.link} target='_blank' key={news.link}>
                              {news.title}
                            </a>,
                            <a  href={news.link} target='_blank'>
                              {news.date}
                            </a>
                          ])}
                        />
                      </>
                    )
                  }
                </CardComponent>
              )
            }
          </Grid>
          <Grid size={{ xs:12, md:7 }}>
            {
              !salesYearError && (
                  <CardComponent className={salesYearData ? 'skeleton-loading skeleton-loading-mh2' : ''}>
                    {
                      !salesYearLoading && salesYearData && (
                        <>
                          <StyledH2 className="mb-1">Valor de vendas por mês</StyledH2>
                          <CustomChart
                            labels={salesYearData.labels.map((labels) => labels)}
                            data={salesYearData.data.map((data) => data)}
                            type={salesYearData.type}
                          />
                        </>
                      )
                    }
                  </CardComponent>
              )
            }
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;