export function parseDate(inputDate) {
    let parsedDate = Date.parse(inputDate)
    let bate = new Date(parsedDate)
    
    return [
        bate.getDate(),
        bate.getMonth(),
        bate.getFullYear(),
    ].join('.')
}