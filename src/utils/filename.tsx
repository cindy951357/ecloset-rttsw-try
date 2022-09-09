import { env } from './../../constants';
export const genBGImgFilePathByEnv =
    (imgFile, assetsPath) => {
        return env === 'development'
            ? `url("${assetsPath}/images/cloth-items/${imgFile}")`
            : `url("https://cindy951357.github.io/images/${imgFile}")`
    }

export const genSVGPathByEnv = (svgFile, assetsPath) => {
    return env === 'development'
        ? `${assetsPath}/svg/${svgFile}`
        : `https://cindy951357.github.io/svg/${svgFile}`
}
export const genImgFilePathByEnv =
    (imgFile, assetsPath) => {
        return env === 'development'
            ? `${assetsPath}/images/cloth-items/${imgFile}`
            : `./images/${imgFile}`
    }
