import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { zoomInSelector } from '../../reducers/zoomedInArea';
import { mockTags } from '../../mockData/mockTags';

type TagType = {
    id: number;
    tagName: string;
}

const StyleTag = () => {
    /** Everytime user picks an outfit, we render related fashion style tags */
    const zoomInOutfit = useSelector(zoomInSelector);
    const [currentTags, setcurrentTags] = useState<TagType[]>([]);
    
    useEffect(() => {
        const list = mockTags.filter(elem => zoomInOutfit.tags.includes(elem.id));
        setcurrentTags(list);
    }, [zoomInOutfit]);

  return (
    <div className="style-tags-container m-2">
        {
            currentTags.map((tag) => (
                <span className="fashion-style-tag p-1 rounded bg-rose-200 m-2">
                    {tag.tagName}
                </span>
            ))
        }
    </div>
  )
}

export default StyleTag