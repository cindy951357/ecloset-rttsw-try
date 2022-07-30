const getFirstDayOfMonth = (year: number, monthNumber: number): number => {

    const firstDate = new Date(year, monthNumber - 1, 1);

    /** Example: Saturday = 6 */
    return firstDate.getDay();
}

function getDaysInMonth(year: number, monthNumber: number) {
    return new Date(year, monthNumber, 0).getDate();
}

export {
    getFirstDayOfMonth,
    getDaysInMonth,
}