import { useState } from 'react';
import { DropdownInput } from './../../components/DropdownInput/DropdownInput';

import { clothTypes, firstLayerClothTypes } from './../../mockData/mockTypes';
interface Props extends HTMLAttributes<HTMLDivElement> {
}
import { HTMLAttributes } from 'react';

const ClosetPage = ({ ...props }: Props) => {
    const [firstTypeSelected, setFirstTypeSelected] = useState('Top');
    const [secondTypeSelected, setSecondTypeSelected] = useState('');
    const [secondLayerDefaultOption, clearSecondLayerDefaultOption] = useState(null);
    return (
        <div className='closet-page page'>
            <DropdownInput
                layer={'FIRST'}
                optionList={firstLayerClothTypes}
                setParentSelected={setFirstTypeSelected}
                clearSecondLayerDefaultOption={clearSecondLayerDefaultOption}
                secondLayerDefaultOption={secondLayerDefaultOption} />

            <DropdownInput
                layer={'SECOND'}
                optionList={clothTypes[firstTypeSelected]}
                setParentSelected={setSecondTypeSelected}
                clearSecondLayerDefaultOption={clearSecondLayerDefaultOption}
                secondLayerDefaultOption={secondLayerDefaultOption} />
        </div>
    );
};
export {
    ClosetPage,
};
export type { Props };