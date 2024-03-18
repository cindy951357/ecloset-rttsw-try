import React, {
  useState,
} from 'react'
import { useDispatch } from 'react-redux';

import classnames from 'classnames';
import { OutfitList } from '../../components/OutfitList/OutfitList';

import { setPickedOutfitDate } from '../../actions/outfitDate';
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';
import { setPopupShowAndContent } from '../../actions/popup';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const pickOutfitDatePageClass = classnames(
  'pick-outfit-date-page',
  'page',
  'grid',
  'flex',
  'flex-col',
  'sm:flex-row',
  'justify-around',
  'text-zinc-400',
  'p-2',
);

const step1Class = classnames(
  'step-1',
  'grid',
  'h-96',
  'overflow-y-auto',
);

const step2Class = classnames(
  'step-2',
  'grid',
);

const PickStep1 = ({ setOutfitID }) => {
  const [checkedOutfitID, setCheckedOutfitID] = useState(-1);

  return (
    <div className={step1Class}>
      <div className="step-instruction text-lg my-2">
        <strong>Step 1.</strong> Let's pick your desired outfit.
      </div>
      <div className="filter-section">
        <OutfitList setOutfitID={setOutfitID} checkedOutfitID={checkedOutfitID} />
      </div>
    </div>
  )
};

const PickStep2 = ({ setDate }) => {
  return (
    <div className={step2Class}>
      <div className="step-instruction text-lg my-2">
      <strong>Step 2.</strong> Let's pick your desired day.
      </div>
      <div className="date-input-section">
        <input type='date'
          onChange={e => { setDate(e.target.value); }}
        />
      </div>
    </div>
  )
}

const PickOutfitDatePage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [outfitID, setOutfitID] = useState(-1);

  const onSubmitButtonClick = () => {
    dispatch(setPickedOutfitDate({
      outfitID: outfitID,
      date: date
    }));
    dispatch(setPopupShowAndContent({
      isShow: true,
      content: {
        message: t('popup.outfitDateIsAdded')
      }
    }));
    navigate('/calendar/view-calendar');
  };

  return (
    <div className={pickOutfitDatePageClass}>
      <PickStep1 setOutfitID={setOutfitID} />
      <div className="w-full h-1 border-solid border-2 border-slate-300 mt-2"/>
      <PickStep2 setDate={setDate} />
      <SubmitButton onClick={onSubmitButtonClick} />
    </div>
  )
}

export { PickOutfitDatePage };