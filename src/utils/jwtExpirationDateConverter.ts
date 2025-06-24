/**
* Convert JWT exp in days
* @param exp - Number to be convert
* @returns - Converted exp in days
*/

export function jwtExpirationDataConverter(exp: number): number {
    const currtentTime= Math.floor(Date.now()/1000)
    const secundsUntilExpiration = exp - currtentTime
    const secondsInDay = 86400
    const daysUntilExpiration = secundsUntilExpiration / secondsInDay
    return daysUntilExpiration
}