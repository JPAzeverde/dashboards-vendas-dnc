/**
* Convert to BRL currency format
* @param value - Number to be convert
* @returns The convert BRL string
*/

export function currencyConverter(value: number): string {
    return new Intl.NumberFormat('pt-br',{
        style:'currency',
        currency: 'BRL'
    }).format(value)
}