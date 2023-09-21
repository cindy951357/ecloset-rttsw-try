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

interface ClosetProps {
    closet: Array<ClothProps>
}

const init: ClosetProps = {
    closet: mockCloset,
};

export default function clothReducer(state = init, action) {
    switch (action.type) {
        case ADD_CLOTH:
            const { blobURL, firstType, secondType } = action.payload;
            const newId: number = state.closet.length;
            return {
                ...state,
                closet: [
                    ...state.closet,
                    {
                        id: newId,
                        file: "",
                        firstType: firstType,
                        secondType: secondType,
                        blobURL: blobURL,
                    }
                ]
            };
        default:
            return state;
    }
}

export const clothSelector = ({ clothReducer }) => (clothReducer);