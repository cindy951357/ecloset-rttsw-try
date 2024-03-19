
import { useState } from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { OutfitItem } from '../../components/OutfitItem/OutfitItem';
import { mockOutfit, mockOutfits } from '../../mockData/mockOutfit';
import { puzzleSelector } from '../../reducers/puzzles';
import { mockTags } from './../../mockData/mockTags';
import {SingleStyleTagComponent} from '../../components/StyleTag/StyleTag';

const viewOutfitPageClass: string = classnames(
    'view-outfit-page',
    'page',
);

const gridContainerClass: string = classnames(
    'grid',
    'grid-cols-2',
    'h-fit',
    'sm:grid-cols-3',
    'gap-2',
)


const ViewOutfitPage = () => {
    const [selectableTags, setselectableTags] = useState(mockTags.map(elem => ({
        ...elem,
        isSelected: true,
    })));

    const puzzles: mockOutfit[] = useSelector(puzzleSelector);
      
    const [intersectPuzzles, setIntersectPuzzles] = useState([...puzzles]);

    const onTagClick = (userSelectTagID) => {
        let wasSelected;
        const newTagsListValue = selectableTags.map( tag => {
            if(tag.id === userSelectTagID) {
                wasSelected = tag.isSelected;
                tag.isSelected = !tag.isSelected;
            }
            return tag;
        });
        setselectableTags(newTagsListValue);
        calculateIntersectPuzzles();
    }
    
    const calculateIntersectPuzzles = () => {<div id="root"></div>
        // remove out those who shouldn't be here
        let newIntersectPuzzles = puzzles.filter(curPuzzle => {
        if(curPuzzle.tags.find(tagElem => selectableTags.find(
                selTag => selTag.id === tagElem && selTag.isSelected)
                )){
                    return true;
            }
        });
        // add in those who should be here

        setIntersectPuzzles(newIntersectPuzzles);
    }

    return (
        <div className={viewOutfitPageClass}>
            <div className="style-tags-container flex flex-wrap pb-2
                bg-gradient-to-b from-transparent to-zinc-300 drop-shadow-lg
                max-h-24 overflow-y-auto
            ">
                {
                    selectableTags.map( (tag) => (
                        <div className={`"selectable single-tag-container w-fit cursor-pointer p-2
                            rounded
                        "`}
                            onClick={() => onTagClick(tag.id)}
                        >
                            <SingleStyleTagComponent tagName={tag.tagName} selected={tag.isSelected}/>
                        </div>
                    ))
                }
            </div>
            <div className={gridContainerClass}>
                {intersectPuzzles.map((outfit) => (
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