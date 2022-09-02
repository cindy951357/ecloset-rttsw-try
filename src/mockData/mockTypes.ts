export const TOP = 'Top';
export const BOTTOM = 'Bottom';
export const ONEPIECE = 'One-Piece';
export const ACCESSORIES = 'Accessories';
export const SHOES = 'Shoes';

export const ALL = 'All';
export const OTHERS = 'Others';

export const BLOUSE = 'Blouse';
export const TSHIRT = 'T-shirt';
export const LACETOP = 'Lace-Top';
export const CARDIGANS = 'Cardigans';
export const COAT = 'Coat';

export const SKIRTS = 'Skirts';
export const PANTS = 'Pants';
export const JEANS = 'Jeans';
export const SHORTS = 'Shorts';

export const DRESS = 'Dress';
export const JUMPSUIT = 'Jumpsuit';

export const DERBY = 'Derby';
export const SNEAKERS = 'Sneakers';

export const BAG = 'Bag';
export const GLASSES = 'Glasses'
export const SCARFS = 'Scarfs';

export const clothTypes = {
    [ALL]: [ALL],
    [TOP]: [ALL, BLOUSE, TSHIRT, LACETOP, CARDIGANS, COAT, OTHERS],
    [BOTTOM]: [ALL, SKIRTS, PANTS, JEANS, SHORTS, OTHERS],
    [ONEPIECE]: [ALL, DRESS, JUMPSUIT, OTHERS],
    [SHOES]: [ALL, DERBY, SNEAKERS, OTHERS],
    [ACCESSORIES]: [ALL, BAG, GLASSES, SCARFS, OTHERS]
}

export const firstLayerClothTypes = Object.keys(clothTypes);