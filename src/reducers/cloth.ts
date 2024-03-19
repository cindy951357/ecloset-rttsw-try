import {
    ADD_CLOTH,
} from '../actions/actionTypes';
import { mockCloset } from '../mockData/mockCloset';

interface ClothProps {
    id: number
    file: string
    firstType: string
    secondType: string
    blobURL: string
}


const init: Array<ClothProps> = [...mockCloset];

export default function clothReducer(state = init, action) {
    switch (action.type) {
        case ADD_CLOTH:
            const { blobURL, firstType, secondType } = action.payload;
            const newId: number = state.length;
            return [
                    {
                        id: newId,
                        file: "",
                        firstType: firstType,
                        secondType: secondType,
                        blobURL: blobURL,
                    },
                    ...state
                ];
        default:
            return state;
    }
}

export const clothSelector = ({ clothReducer }) => (clothReducer);