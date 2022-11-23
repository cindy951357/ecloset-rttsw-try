import { env } from './../../constants';
export const genBGImgFilePathByEnv =
    (imgFile, assetsPath) => {
        return env === 'development'
            ? `url("${assetsPath}/images/cloth-items/${imgFile}")`
            : `url("./images/${imgFile}")`
    }
export const genImgFilePathByEnv =
    (imgFile, assetsPath) => {
        return env === 'development'
            ? `${assetsPath}/images/cloth-items/${imgFile}`
            : `./images/${imgFile}`
    }
