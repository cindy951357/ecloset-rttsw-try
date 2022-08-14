interface Props extends HTMLAttributes<HTMLDivElement> {
}
import { HTMLAttributes } from 'react';

const ClosetPage = ({ ...props }: Props) => {
    return (
        <div className='closet-page page'>
            Closet Page
        </div>
    );
};
export {
    ClosetPage,
};
export type { Props };