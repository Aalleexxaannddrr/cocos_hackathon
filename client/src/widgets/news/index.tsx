import { Box } from '../../shared/ui/box';
import s from './index.module.css';
import { News as INews } from '../../entities/news/types';
import mock1 from './mockAssets/mock1.png';
import mock2 from './mockAssets/mock2.png';
import mock3 from './mockAssets/mock3.png';
import { Button, Link } from '@nextui-org/react';

const newsMock: INews[] = [
    {
        id: '0',
        photo: mock3,
        title: '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '1',
        photo: mock2,
        title: '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '2',
        photo: mock1,
        title: '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '3',
        photo: mock1,
        title: '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '4',
        photo: mock1,
        title: '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
];

export const News = () => {
    return (
        <Box dividers className={s.box}>
            <div className={s.title}>Новости</div>
            <div>
                <a href={`/news/${newsMock[0].id}`}>
                    <img src={newsMock[0].photo} alt={newsMock[0].title} className={s.mainImg} />
                    <div className={s.newsTitle}>{newsMock[0].title}</div>
                    <div className={s.date}>{newsMock[0].date}</div>
                </a>
            </div>
            {newsMock.slice(1).map((news) => (
                <div key={news.id}>
                    <a className={s.smallNewsContainer} href={`/news/${news.id}`}>
                        <img src={news.photo} alt={news.title} className={s.img} />
                        <div>
                            <div className={s.newsTitle}>{news.title}</div>
                            <div className={s.date}>{news.date}</div>
                        </div>
                    </a>
                </div>
            ))}
            <div>
                <Button href="/news" as={Link} className={s.button}>
                    Все новости
                </Button>
            </div>
        </Box>
    );
};
