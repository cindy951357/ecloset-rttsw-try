
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


export const generateMockOutfitDateTuplesArr = (year: number, month: number): Array<Array<[string, string]>> => {
    const numOfDaysOfMonth = moment(`${year}-${month}`).daysInMonth();

    let outfitDatesTupleArr: any[] = [];
    for (let i = 0; i < numOfDaysOfMonth; i++) {
        outfitDatesTupleArr.push([`${year}-${month}-${i + 1}`, mockOutfitDateSimple[i]]); /** Debug typescript push tuple */
    };
    return outfitDatesTupleArr;
}
const now = new Date();
export const defaultOutfitDatesTupleArr = generateMockOutfitDateTuplesArr(
    now.getFullYear(), now.getMonth() + 1
);
