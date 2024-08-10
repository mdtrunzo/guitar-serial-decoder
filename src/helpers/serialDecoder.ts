export type DecodedInfo = {
  year: number
  date: string
  itemNumber: number
}

export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export const decodeSerial = (serial: string): DecodedInfo | null => {
  if (serial.length !== 9 || isNaN(Number(serial))) {
    return null
  }

  const year = 2000 + parseInt(serial.charAt(0) + serial.charAt(4), 10)

  const dayOfYear = parseInt(serial.slice(1, 4), 10)

  const maxDays = isLeapYear(year) ? 366 : 365
  if (dayOfYear < 1 || dayOfYear > maxDays) {
    return null 
  }

  const itemNumber = parseInt(serial.slice(5), 10)

  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ]
  let month = 0
  let day = dayOfYear

  for (let i = 0; i < daysInMonth.length; i++) {
    if (day > daysInMonth[i]) {
      day -= daysInMonth[i]
      month++
    } else {
      break
    }
  }

  const decodedDate = new Date(year, month, day)

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  }
  const formattedDate = decodedDate.toLocaleDateString('en-US', options)

  return {
    year,
    date: formattedDate,
    itemNumber,
  }
}
