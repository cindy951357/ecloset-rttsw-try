import {
    TOP, BOTTOM, ONEPIECE, ACCESSORIES, SHOES, OTHERS,
    BLOUSE, TSHIRT, COAT, CARDIGANS, LACETOP,
    SKIRTS, PANTS, JEANS, SHORTS,
    DRESS, JUMPSUIT,
    DERBY, SNEAKERS,
    BAG, GLASSES, SCARFS,
}
    from './mockTypes';

export interface clothProps {
    id: number,
    files: string,
    firstType: string,
    secondType: string,
}

export const mockCloset = [
    {
        id: 1,
        file: "T01_YeccaVecca_white.jpg",
        firstType: TOP,
        secondType: BLOUSE,
        blobURL: '',
    }, {
        id: 2,
        file: "F01_Net_darkGreen.jpg",
        firstType: ONEPIECE,
        secondType: DRESS,
        blobURL: '',
    }, {
        id: 3,
        file: "S01_Orin_black_derby.jpg",
        firstType: SHOES,
        secondType: DERBY,
        blobURL: '',
    }, {
        id: 4,
        file: "A02_DTB_black.jpg",
        firstType: ACCESSORIES,
        secondType: BAG,
        blobURL: '',
    }, {
        id: 5,
        file: "cinderelly_houry.jpg",
        firstType: ONEPIECE,
        secondType: DRESS,
        blobURL: '',
    }, {
        id: 6,
        file: "S01_Anns_lightBlue.jpg",
        firstType: SHOES,
        secondType: OTHERS,
        blobURL: '',
    }, {
        id: 7,
        file: "bag_attrangs_pink.jpg",
        firstType: ACCESSORIES,
        secondType: BAG,
        blobURL: '',
    }, {
        id: 8,
        file: "B04_Cocodeal_brown.jpg",
        firstType: BOTTOM,
        secondType: SKIRTS,
        blobURL: '',
    }, {
        id: 9,
        file: "F03_HAndM_橘.jpg",
        firstType: ONEPIECE,
        secondType: DRESS,
        blobURL: '',
    }, {
        id: 10,
        file: "B02_Tou_黑.jpg",
        firstType: BOTTOM,
        secondType: PANTS,
        blobURL: '',
    }, {
        id: 11,
        file: "B04_Ladywore_茶_微光澤.jpg",
        firstType: BOTTOM,
        secondType: SKIRTS,
        blobURL: '',
    }, {
        id: 12,
        file: "B04_東京著衣_粉.jpg",
        firstType: BOTTOM,
        secondType: SKIRTS,
        blobURL: '',
    }, {
        id: 13,
        file: "T06_Uniqlo_白_半告領.jpg",
        firstType: TOP,
        secondType: CARDIGANS,
        blobURL: '',
    }, {
        id: 14,
        file: "T06_Net_粉_圓領.jpg",
        firstType: TOP,
        secondType: CARDIGANS,
        blobURL: '',
    }, {
        id: 15,
        file: "T06_Uniqlo_米_v領.jpg",
        firstType: TOP,
        secondType: CARDIGANS,
        blobURL: '',
    }, {
        id: 16,
        file: "T06_InShop_棕_短版.jpg",
        firstType: TOP,
        secondType: CARDIGANS,
        blobURL: '',
    }, {
        id: 17,
        file: "T04_32Wardrobe_棕.jpg",
        firstType: TOP,
        secondType: TSHIRT,
        blobURL: '',
    }, {
        id: 18,
        file: "T04_Elf_粉紅_燙金字母.jpg",
        firstType: TOP,
        secondType: TSHIRT,
        blobURL: '',
    },
]