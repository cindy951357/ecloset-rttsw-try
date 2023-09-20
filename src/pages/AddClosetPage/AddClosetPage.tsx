import { useState, ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faUpload, faBox } from '@fortawesome/fontawesome-free-solid'
import { useTranslation } from 'react-i18next';

fontawesome.library.add(faUpload, faBox);

const AddClosetPage = () => {
    const { t } = useTranslation();

    const [imgFile, setImgFile] = useState<File | null>(null);
    const [imgSrc, setImgSrc] = useState<string>('');

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
        <div className="page add-closet-page grid grid-cols-2 grid-rows-2">
            <div className="col-start-1 col-span-2 justify-self-center">
                <div className="img-background-container 
                    relative
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
                Please select the type of your uploaded item.
            </div>
            <div className="btn-group" className="flex flex-col">
                <input id="input_file" type="file"
                    onChange={onFileInputChange}
                    className="hidden"
                    accept="image/jpeg, image/png, image/jpg"
                />
                <button id="choose_file" className="btn"
                    onClick={onChooseFileClick}
                >
                    <FontAwesomeIcon icon={`fa-solid fa-box`} />
                    {t('closet.chooseFile')}
                </button>
                <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={`fa-solid fa-upload`} />
                    {t('closet.uploadIt')}
                </button>
            </div>

        </div>
    )
}

export { AddClosetPage }