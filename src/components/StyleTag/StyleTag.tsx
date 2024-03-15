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
        console.log(zoomInOutfit.tags);
        const list = mockTags.filter(elem => zoomInOutfit.tags.includes(elem));
        setcurrentTags(list);
    }, [zoomInOutfit]);

  return (
    <div className="style-tags-container">
        {
            currentTags.map((tag) => (
                <div className="fashion-style-tag p-1 rounded">
                    {tag.tagName}
                </div>
            ))
        }
    </div>
  )
}

export default StyleTag