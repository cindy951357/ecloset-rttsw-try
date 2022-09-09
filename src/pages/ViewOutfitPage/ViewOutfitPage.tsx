
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { OutfitItem } from '../../components/OutfitItem/OutfitItem';
import { mockOutfit } from '../../mockData/mockOutfit';
import { puzzleSelector } from '../../reducers/puzzles';


const viewOutfitPageClass: string = classnames(
    'view-outfit-page',
    'page',
    'grid',
    'gap-1',
);

const ViewOutfitPage = () => {
    const puzzles: mockOutfit[] = useSelector(puzzleSelector);
    return (
        <div className={viewOutfitPageClass}>
            {puzzles.map(outfit => (
                <OutfitItem
                    key={outfit.id}
                    clothIDs={outfit.clothes}
                    viewMode='SIMPLE_MODE'
                />
            ))}
        </div>
    );
};
export { ViewOutfitPage };