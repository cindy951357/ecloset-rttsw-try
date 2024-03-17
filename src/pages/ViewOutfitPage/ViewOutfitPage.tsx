
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { OutfitItem } from '../../components/OutfitItem/OutfitItem';
import { mockOutfit } from '../../mockData/mockOutfit';
import { puzzleSelector } from '../../reducers/puzzles';


const viewOutfitPageClass: string = classnames(
    'view-outfit-page',
    'page',
    'grid',
    'grid-cols-2',
    'sm:grid-cols-3',
    'md:grid-cols-4',
);

const ViewOutfitPage = () => {
    const puzzles: mockOutfit[] = useSelector(puzzleSelector);
    return (
        <div className={viewOutfitPageClass}>
            {puzzles.map(outfit => (
                <div className="closet-outfit-item-cell rounded p-2 shadow-gray">
                    <OutfitItem
                        key={outfit.id}
                        clothIDs={outfit.clothes}
                        viewMode='SIMPLE_MODE'
                    />
                </div>                
            ))}
        </div>
    );
};
export { ViewOutfitPage };