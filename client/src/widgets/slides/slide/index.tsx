import { FC } from 'react';
import s from './index.module.css';
import cx from 'classnames';

export interface Slide {
    img: string;
    title: string;
    subtitle?: string;
    titleSize?: 'lg' | 'md';
    titlePosition?: 'tl' | 'tr' | 'bl' | 'br';
}

export const Slide: FC<Slide> = ({
    img,
    title,
    subtitle,
    titleSize = 'md',
    titlePosition = 'tl',
}) => {
    return (
        <div className={s.slide}>
            <img src={img} alt={title} className={s.img} />
            <div
                className={cx(s.titleContainer, {
                    [s.tl]: titlePosition === 'tl',
                    [s.tr]: titlePosition === 'tr',
                    [s.bl]: titlePosition === 'bl',
                    [s.br]: titlePosition === 'br',
                })}
            >
                <div
                    className={cx(s.title, {
                        [s.lg]: titleSize === 'lg',
                        [s.md]: titleSize === 'md',
                    })}
                >
                    {title}
                </div>
                {!!subtitle && <div className={s.subtitle}>{subtitle}</div>}
            </div>
        </div>
    );
};
