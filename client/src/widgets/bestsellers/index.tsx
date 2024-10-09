import { useEffect, useRef, useState } from 'react';
import { Box } from '../../shared/ui/box';
import { AngleRight } from '../../shared/ui/icons/angleRight';
import s from './index.module.css';
import { Product } from '../../entities/product/types';
import mock from './mockAssets/mock.png';
import { toPriceFormat } from '../../shared/lib';
import { AngleLeft } from '../../shared/ui/icons/angleLeft';

const bestsellersMock: Product[] = [
    { id: '0', photo: mock, name: 'Футболка игровая домашняя 2024/2025', price: 6599 },
    { id: '1', photo: mock, name: 'Футболка игровая домашняя 2024/2025', price: 6599 },
    { id: '2', photo: mock, name: 'Футболка игровая домашняя 2024/2025', price: 6599 },
    { id: '3', photo: mock, name: 'Футболка игровая домашняя 2024/2025', price: 6599 },
    { id: '4', photo: mock, name: 'Футболка игровая домашняя 2024/2025', price: 6599 },
    { id: '5', photo: mock, name: 'Футболка игровая домашняя 2024/2025', price: 6599 },
];

export const Bestsellers = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [left, setLeft] = useState(true);
    const [rigth, setRight] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) {
            return;
        }
        const onScroll = () => {
            setLeft(el.scrollLeft === 0);
            setRight(el.scrollLeft === el.scrollWidth - el.clientWidth);
        };
        el.addEventListener('scroll', onScroll);
        return () => {
            el.removeEventListener('scroll', onScroll);
        };
    }, []);

    const onArrowClick = (dir: 1 | -1) => {
        const el = ref.current;
        if (!el) {
            return;
        }
        el.scroll(el.scrollLeft + 500 * dir, 0);
    };

    return (
        <Box dividers className={s.box}>
            <div className={s.head}>
                <div className={s.title}>Хиты продаж</div>
                <a href="/store" className={s.allMerch}>
                    Весь мерч <AngleRight />
                </a>
            </div>
            <div>
                <div className={s.bestsellers} ref={ref}>
                    {bestsellersMock.map((bestseller) => (
                        <a
                            key={bestseller.id}
                            href={`/store/${bestseller.id}`}
                            className={s.bestseller}
                        >
                            <img className={s.img} src={bestseller.photo} />
                            <div className={s.name}>{bestseller.name}</div>
                            <div className={s.price}>{toPriceFormat(bestseller.price)} руб.</div>
                        </a>
                    ))}
                </div>
                <div className={s.arrows}>
                    <button className={s.arrowBtn} disabled={left} onClick={() => onArrowClick(-1)}>
                        <AngleLeft />
                    </button>
                    <button className={s.arrowBtn} disabled={rigth} onClick={() => onArrowClick(1)}>
                        <AngleRight />
                    </button>
                </div>
            </div>
        </Box>
    );
};
