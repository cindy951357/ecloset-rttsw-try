
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { OutfitItem } from '../../components/OutfitItem/OutfitItem';
import { mockOutfit } from '../../mockData/mockOutfit';
import { puzzleSelector } from '../../reducers/puzzles';

const viewOutfitPageClass: string = classnames(
    'view-outfit-page',
    'page',
);

const gridContainerClass: String = classnames(
    'grid',
    'grid-cols-2',
    'h-fit',
    'sm:grid-cols-3',
    'gap-2',
)

const ViewOutfitPage = ({size='M'}) => {
    const puzzles: mockOutfit[] = useSelector(puzzleSelector);

    return (
        <div className={viewOutfitPageClass}>
            <div className={gridContainerClass}>
                {puzzles.map((outfit) => (
                    <div className="puzzle-container rounded-2xl
                        aspect-square
                        bg-white hover:shadow-2xl flex flex-col 
                        items-center
                    ">
                        <strong className="text-gray flex">{outfit.id}</strong>
                        <OutfitItem
                            key={outfit.id}
                            clothIDs={outfit.clothes}
                            viewMode='SIMPLE_MODE'
                            size={'L'}
                        />
                    </div>                
                ))}
            </div>            
        </div>
    );
};
export { ViewOutfitPage };