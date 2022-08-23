import React from 'react'
import classnames from 'classnames';
import { OutfitList } from '../../components/OutfitList/OutfitList';

const pickOutfitDatePageClass = classnames(
  'pick-outfit-date-page',
  'page',
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
);

const step2Class = classnames(
  'step-2',
  'grid',
);

const PickStep1 = () => {
  return (
    <div className={step1Class}>
      <div className="step-instruction">
        Step 1. Let's pick your desired outfit.
      </div>
      <div className="filter-section">
        <OutfitList />
      </div>
    </div>
  )
};

const PickStep2 = () => {
  return (
    <div className={step2Class}>
      <div className="step-instruction">
        Step 2. Let's pick your desired day.
      </div>
      <div className="date-input-section">
        <input type='date' />
      </div>
    </div>
  )
}

const PickOutfitDatePage = () => {
  return (
    <div className={pickOutfitDatePageClass}>
      <PickStep1 />
      <PickStep2 />
    </div>
  )
}

export { PickOutfitDatePage };