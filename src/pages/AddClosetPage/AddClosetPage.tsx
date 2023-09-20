import { useState, ChangeEvent } from 'react'
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

fontawesome.library.add(faUpload, faBox);

const AddClosetPage = () => {
    const { t } = useTranslation();

    const [imgFile, setImgFile] = useState<File | null>(null);
    const [imgSrc, setImgSrc] = useState<string>('');


    const [firstTypeSelected, setFirstTypeSelected] = useState(ALL);
    const [secondTypeSelected, setSecondTypeSelected] = useState(ALL);

    const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImgFile(e.target.files[0]);
            console.log("hereeeee")
            if (e.target.files[0]) {
                console.log("here", imgFile)
                document.getElementById('preview_uploaded_img').src = URL.createObjectURL(e.target.files[0]);
            }
        }
    }
    const onChooseFileClick = () => {
        document.getElementById('input_file')?.click();
    }
    return (
        <div className="page add-closet-page 
            grid sm:grid-rows-[1fr_60px_auto]
            md:grid-cols-2 md:grid-rows-2
            gap-y-8
            px-5 py-5
        ">
            <div className="md:col-start-1 md:col-span-2 justify-self-center">
                <div className="img-background-container 
                    relative bg-rose-100
                    h-[310px] w-[310px] rounded-xl border border-gray-400
                    flex justify-center items-center"
                >
                    <img id="preview_uploaded_img"
                        className="border w-[200px] h-[200px] absolute
                            max-w-[200px] max-h-[200px] sm:max-w-[300px] sm:max-h-[300px]
                            min-w-[30px] min-h-[30px]"
                    />
                </div>
            </div>
            <div>
                {t('closet.optionHint')}
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
            <div className="btn-group flex md:flex-col items-end sm:justify-end">
                <input id="input_file" type="file"
                    onChange={onFileInputChange}
                    className="hidden"
                    accept="image/jpeg, image/png, image/jpg"
                />
                <button id="choose_file"
                    className="btn flex w-[100px] h-[40px] rounded-lg bg-rose-200
                    items-center justify-center"
                    onClick={onChooseFileClick}
                >
                    <FontAwesomeIcon icon={`fa-solid fa-box`} />
                    {t('closet.chooseFile')}
                </button>
                <button type="submit"
                    className="btn flex w-[100px] h-[40px] rounded-lg bg-rose-200 
                     items-center justify-center md:mt-4 sm:ml-4">
                    <FontAwesomeIcon icon={`fa-solid fa-upload`} />
                    {t('closet.uploadIt')}
                </button>
            </div>
        </div>
    )
}

export { AddClosetPage }