import { env } from './../../constants';
import { useLocation } from 'react-router';

export const genBGImgFilePathByEnv =
    (imgFile, assetsPath) => {
        let imgUrl;
        const location = useLocation();
        imgUrl = env === 'development'
            ? `url("${assetsPath}/images/cloth-items/${imgFile}")`
            : `url("./images/${imgFile}")`;
        if(env === 'productioin' && location.pathname.includes('-outfit')){
            imgUrl = `url("./../images/${imgFile}")`
        }
        return imgUrl;
    }
export const genImgFilePathByEnv =
    (imgFile, assetsPath) => {
        return env === 'development'
            ? `${assetsPath}/images/cloth-items/${imgFile}`
            : `./images/${imgFile}`
    }
