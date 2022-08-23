export const getFirstDayOfMonth = (year: number, monthNumber: number): number => {

    const firstDate = new Date(year, monthNumber - 1, 1);

    /** Example: Saturday = 6 */
    return firstDate.getDay();
}

export const getNumOfDaysInThisMonth = (year: number, monthNumber: number) => {
    return new Date(year, monthNumber, 0).getDate();
}

export const todayDate: Date = new Date();
export const currentYear: number = todayDate.getFullYear();
export const currentMonth: number = todayDate.getMonth() + 1;
export const numOfDaysOfCurrentMonth: number = getNumOfDaysInThisMonth(currentYear, currentMonth);

export const dayNamesInWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const generateDatesOfCurMonth = (curYear: number, curMonth: number): Array<string> => {
    return Array.from(
        Array(numOfDaysOfCurrentMonth).keys()
    ).map(key => `${curYear}-${curMonth}-${key + 1}`);;
}