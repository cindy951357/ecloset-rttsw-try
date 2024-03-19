import React, {ReactElement, useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { zoomInSelector } from '../../reducers/zoomedInArea';
import { mockTags } from '../../mockData/mockTags';

export type TagType = {
    id: number;
    tagName: string;
}

type SingleStyleTagComponentProps = {
    tagName: string;
    selected: boolean;
}

export const SingleStyleTagComponent: React.FC<SingleStyleTagComponentProps> = ({tagName, selected}) => {
    return (
        <span className={`"fashion-style-tag p-2 rounded bg-rose-200 m-1
            text-ellipsis truncate max-w-[72px]
            ${selected?"border-solid border-2 border-rose-400" : ""}
        "`}>
                {tagName}
        </span>
    )
}

const StyleTag = (tags) => {
    /** Everytime user picks an outfit, we render related fashion style tags */
    const zoomInOutfit = useSelector(zoomInSelector);
    const [currentTags, setcurrentTags] = useState<TagType[]>([]);
    
    useEffect(() => {
        const list = mockTags.filter(elem => zoomInOutfit.tags.includes(elem.id));
        setcurrentTags(list);
    }, [zoomInOutfit]);

  return (
    <div className="style-tags-container h-[50px] p-[2px] flex self-center text-rose-500">
        {
            currentTags.map((tag:TagType) => (
                <SingleStyleTagComponent tagName={tag.tagName}/>
            ))
        }
    </div>
  )
}

export default StyleTag