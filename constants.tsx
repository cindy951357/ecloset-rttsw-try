export const env = process.env.NODE_ENV;
import outfitDefaultImg1 from './src/assets/images/cloth-items/T01_YeccaVecca_white.jpg';
import outfitDefaultImg2 from './src/assets/images/cloth-items/F01_Net_darkGreen.jpg';
import outfitDefaultImg3 from './src/assets/images/cloth-items/S01_Orin_black_derby.jpg';
import outfitDefaultImg4 from './src/assets/images/cloth-items/A02_DTB_black.jpg';

export const imgFolderPath = './../../assets/images/cloth-items';
export const defaultImgFName = 'A02_DTB_black.jpg';

export const SIMPLE_MODE = 'SIMPLE_MODE';
export const COMPLEX_MODE = 'COMPLEX_MODE';

export const defaultOutfitFiles: Array<typeof Image> = [
    outfitDefaultImg1,
    outfitDefaultImg2,
    outfitDefaultImg3,
    outfitDefaultImg4,
]

export const defaultOutfitImgFileNames: [string, string, string, string] = [
    'T01_YeccaVecca_white.jpg',
    'F01_Net_darkGreen.jpg',
    'S01_Orin_black_derby.jpg',
    'A02_DTB_black.jpg',
]

export const defaultOutfitClothIDs = [1, 2, 3, 4];

export const MAX_OUTFIT_ITEM_SIZE = 4;