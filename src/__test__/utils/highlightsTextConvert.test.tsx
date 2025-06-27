import { highlightsTextConverter } from "@/utils"

describe('highlightsTextConverter', () => {
    it('should return the correvt text for "alert"', () => {
        expect(highlightsTextConverter('alert')).toBe('*Meta longe de ser batida');
    });
    it('should return the correvt text for "success"', () => {
        expect(highlightsTextConverter('success')).toBe('* A meta do mês foi alcançada!');
    });
    it('should return the correvt text for "warning"', () => {
        expect(highlightsTextConverter('warning')).toBe('* Falta pouco, vamos lá!');
    });
    it('should return the correvt text for default', () => {
        expect(highlightsTextConverter('un')).toBe('Sem dados no momento' );
    });
    
})