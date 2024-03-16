import { mockTags } from "../mockData/mockTags";
import type { TagType } from "../components/StyleTag/StyleTag";

/** Note that the following two different functions return two different type result. */
export const getTagsFromTagIdList:(tagIdList: number[]) => TagType[] = tagIdList => {
    let result:TagType[] = [];
    tagIdList.map((tagId) => mockTags.filter(mockTag => {
        if(mockTag.id === tagId ) {
             result.push(mockTag);
        }
    }))
    return result;
}

export const getTagNamesFromTagIdList:(tagIdList: number[]) => string[] = tagIdList => {
    let result:string[] = [];
    tagIdList.map((tagId) => mockTags.filter(mockTag => {
        if(mockTag.id === tagId ) {
             result.push(mockTag.tagName);
        }
    }))
    return result;
}