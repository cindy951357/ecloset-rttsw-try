import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';


interface Props extends HTMLAttributes<HTMLDivElement> {
}

const styleClassNames = classnames(
  'h-1/6',
  'w-screen',
  'flex',
  'flex-1',
  'justify-self-start',
  'place-content-center',
  'place-items-center',
  'bg-rose-200',
  'text-zinc-700',
);

const Header = ({ ...props }: Props) => {
  return (
    <div
      {...props}
      className={styleClassNames}
    >
      {'Dear Closet'}
    </div>
  )
}

export {
  Header
};
export type { Props };
