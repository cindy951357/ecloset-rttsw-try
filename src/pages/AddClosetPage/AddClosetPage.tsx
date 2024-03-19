import { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faUpload, faBox } from '@fortawesome/fontawesome-free-solid'
import { useTranslation } from 'react-i18next';
import { filterConditionSectionClass } from '../../components/FilterCloset/FilterCloset';
import { DropdownInput } from '../../components/DropdownInput/DropdownInput';
import {
    ALL,
    clothTypes,
    firstLayerClothTypes,
} from './../../mockData/mockTypes';
import { addCloth } from '../../actions/cloth';
import { setPopupShowAndContent } from '../../actions/popup';

fontawesome.library.add(faUpload, faBox);

const AddClosetPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [imgFile, setImgFile] = useState<File | null>(null);
    const [blobURL, setBlobURL] = useState<string>('');


    const [firstTypeSelected, setFirstTypeSelected] = useState(ALL);
    const [secondTypeSelected, setSecondTypeSelected] = useState(ALL);

    const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImgFile(e.target.files[0]);
            console.log("hereeeee")
            if (e.target.files[0]) {
                console.log("here", imgFile)
                document.getElementById('preview_uploaded_img').src = URL.createObjectURL(e.target.files[0]);
                setBlobURL(URL.createObjectURL(e.target.files[0]));
            }
        }
    }
    const onChooseFileClick = () => {
        document.getElementById('input_file')?.click();
    }

    const onSubmitClick = () => {
        dispatch(addCloth({
            firstType: firstTypeSelected,
            secondType: secondTypeSelected,
            blobURL: blobURL,
        }));
        dispatch(setPopupShowAndContent({
            isShow: true,
            content: {
                message: t('closet.clothAddedMsg'),
            }
        }));
    }

    return (
        <div className="add-closet-page h-full
            grid grid-rows-[2fr_60px_1fr]
            gap-y-1
            px-5 py-5
            flex
            justify-center
            items-center
        ">
            <div className="justify-self-center">
                <div className="img-background-container 
                    relative bg-rose-100
                    h-[310px] w-[310px] rounded-xl border border-gray-400
                    xs:max-w-[190px] xs:max-h-[190px]
                    flex justify-center items-center"
                >
                    <img id="preview_uploaded_img"
                        className="flex border w-[200px] h-[200px] absolute
                            max-w-[200px] max-h-[200px] sm:max-w-[300px] sm:max-h-[300px]
                            min-w-[30px] min-h-[30px]
                            xs:max-w-[170px] xs:max-h-[170px]
                            "
                    />
                </div>
                <div className="btn-container flex justify-center pt-1">
                <input id="input_file" type="file"
                    onChange={onFileInputChange}
                    className="hidden"
                    accept="image/jpeg, image/png, image/jpg"
                />
                <button id="choose_file"
                    className="btn flex w-[150px] h-[40px] rounded-lg bg-rose-200
                        items-center justify-center mr-2
                    "
                    onClick={onChooseFileClick}
                >
                    <FontAwesomeIcon icon={`fa-solid fa-box`} />
                    {t('closet.chooseFile')}
                </button>
                </div>
            </div>
            <div>
                <span className="upload-type-hint w-16 xs:w-12 md:w-14
                    xs:text-xl text-xs
                ">
                    {t('closet.optionHint')}
                    </span>
                <div className={filterConditionSectionClass}>
                    <DropdownInput
                        layer={'FIRST'}
                        optionList={firstLayerClothTypes}
                        setParentSelected={setFirstTypeSelected}
                        clearSecondLayerDefaultOption={null}
                        secondLayerDefaultOption={null} />

                    <DropdownInput
                        layer={'SECOND'}
                        optionList={clothTypes[firstTypeSelected]}
                        setParentSelected={setSecondTypeSelected}
                        clearSecondLayerDefaultOption={null}
                        secondLayerDefaultOption={null} />
                </div>
            </div>
            <div className="btn-container flex justify-center xs:w-26 xs:text-xs">
                <button
                    className="btn submit-btn flex w-[120px] h-[40px] rounded-lg bg-rose-200 
                     items-center justify-center md:mt-4 sm:ml-4 text-xs xs:text-xl"
                    onClick={onSubmitClick}
                >
                    <FontAwesomeIcon icon={`fa-solid fa-upload`} />
                    {t('closet.uploadIt')}
                </button>
            </div>
        </div>
    )
}

export { AddClosetPage }