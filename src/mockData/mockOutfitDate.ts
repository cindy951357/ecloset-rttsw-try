
import moment from 'moment';
export const mockOutfitDateSimple = [
    1, //1
    2,
    4,
    -1,
    3,
    2,
    1,
    2,
    3,
    -1
    - 1, //11
    2,
    2,
    3,
    4,
    1,
    4,
    -1,
    3,
    -1,
    -1, //21
    4,
    2,
    -1,
    -1,
    1,
    2,
    4,
    1,
    2,
    -1, //30
    1,
];

export const generateMockOutfitDateTuplesArr = (year: number, month: number) => {
    const numOfDaysOfMonth = moment(`${year}-${month}`).daysInMonth();

    let outfitDatesTupleArr: any[] = [];
    for (let i = 0; i < numOfDaysOfMonth; i++) {
        outfitDatesTupleArr.push([`${year}-${month}-${i + 1}`, mockOutfitDateSimple[i]]); /** Debug typescript push tuple */
    };
    return outfitDatesTupleArr;
}
const now = new Date();
export const outfitDatesTupleArr = generateMockOutfitDateTuplesArr(
    now.getDate(), now.getMonth() + 1
);
