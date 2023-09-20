
import moment from 'moment';
export const mockOutfitDateSimple = [
    1, //1
    2,
    4,
    4,
    3,
    2,
    1,
    2,
    3,
    4,
    4, //11
    2,
    2,
    3,
    4,
    1,
    4,
    4,
    3,
    4,
    4, //21
    4,
    2,
    4,
    4,
    1,
    2,
    4,
    1,
    2,
    4, //30
    1,
];


export const generateMockOutfitDateTuplesArr = (year: number, month: number): Array<Array<[string, number]>> => {
    const numOfDaysOfMonth = moment(`${year}-${month}`).daysInMonth();

    let outfitDatesTupleArr: any[] = [];
    for (let i = 0; i < numOfDaysOfMonth; i++) {
        outfitDatesTupleArr.push([`${year}-${month}-${i + 1}`, mockOutfitDateSimple[i]]); /** Debug typescript push tuple */
    };
    return outfitDatesTupleArr;
}

export const monthSize = 36;

const generateMockOutfitMatrix =
    (year: number, month: number): Array<Array<Array<[string, number]>>> => {
        let outfitDatesTupleArr: Array<Array<Array<[string, number]>>> = [];

        // generate #monthSize of arrays of tuples
        // the year-month(input) is in the middle of matrix
        for (let i = 0; i < monthSize; i++) {
            outfitDatesTupleArr.push([]);
        }

        for (let i = 0; i < monthSize; i++) {

            const dateTime = new Date(`${year}-${month}-01`);
            dateTime.setMonth(dateTime.getMonth() - Math.floor(monthSize / 2) + i);

            const curYear = dateTime.getFullYear();
            const curMonth = dateTime.getMonth() + 1;

            const totalNumsOfDays = moment(`${curYear}-${curMonth}`).daysInMonth();
            for (let j = 0; j < totalNumsOfDays; j++) {
                const randInt = Math.floor(Math.random() * 6) - 1; // generate -1 possibly
                outfitDatesTupleArr[i].push(
                    [`${curYear}-${curMonth}-${j + 1}`, randInt]
                );
            }
        }
        return outfitDatesTupleArr;
    }
const now = new Date();
export const defaultOutfitDatesTupleArr = generateMockOutfitDateTuplesArr(
    now.getFullYear(), now.getMonth() + 1
);

export const defaultOutfitDatesMatrix = generateMockOutfitMatrix(
    now.getFullYear(), now.getMonth() + 1
);
