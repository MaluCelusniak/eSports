export function convertHourToMinutes(hourString: any){
    const [hours, minutes] = hourString.split(':').map(Number)
   const minutesAmout = (hours * 60) + minutes 

   return minutesAmout
}