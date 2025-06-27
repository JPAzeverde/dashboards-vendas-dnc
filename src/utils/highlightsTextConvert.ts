/**
* Convert text t o highlights api
* @param text - text to be convert
* @returns - Converted text t o highlights api
*/

export function highlightsTextConverter(text: string): string {
    switch(text) {
        case 'alert':
            return '*Meta longe de ser batida'
        case 'success':
            return '* A meta do mês foi alcançada!'
        case 'warning':
            return '* Falta pouco, vamos lá!'
        default:
            return 'Sem dados no momento' 
    }
}