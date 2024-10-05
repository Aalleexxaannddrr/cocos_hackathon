import { FC, ReactNode } from 'react';
import s from './index.module.css';
import cx from 'classnames';

interface BoxProps {
    dividers?: boolean;
    className?: string;
    children: ReactNode;
}

export const Box: FC<BoxProps> = ({ dividers, className, children }) => {
    return <div className={cx(s.box, className, { [s.dividers]: dividers })}>{children}</div>;
};
