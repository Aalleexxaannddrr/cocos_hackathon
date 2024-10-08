import { Box } from '../../shared/ui/box';
import { AngleRight } from '../../shared/ui/icons/angleRight';
import { Video as IVideo, VideoCategories } from '../../entities/video/types';
import mock1 from './mockAssets/mock1.png';
import mock2 from './mockAssets/mock2.png';
import { AngleLeft } from '../../shared/ui/icons/angleLeft';
import s from './index.module.css';
import cx from 'classnames';

const videoMock: IVideo[] = [
    {
        id: '0',
        previewImg: mock2,
        url: '/',
        categoey: VideoCategories.game,
        description:
            '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '1',
        previewImg: mock1,
        url: '/',
        categoey: VideoCategories.behindScene,
        description:
            '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '2',
        previewImg: mock2,
        url: '/',
        categoey: VideoCategories.interview,
        description:
            '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '3',
        previewImg: mock1,
        url: '/',
        categoey: VideoCategories.game,
        description:
            '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '4',
        previewImg: mock2,
        url: '/',
        categoey: VideoCategories.behindScene,
        description:
            '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
    {
        id: '5',
        previewImg: mock1,
        url: '/',
        categoey: VideoCategories.interview,
        description:
            '«Уверен, что ЦСКА ждет прекрасный сезон. Армейцы составят конкуренцию любому клубу РПЛ» — Пьянич',
        date: '14 октября 18:30',
    },
];

export const Video = () => {
    return (
        <Box dividers className={s.box}>
            <div className={s.head}>
                <div className={s.title}>Видео</div>
                <a href='/' className={s.allVideos}>
                    Все видео <AngleRight />
                </a>
            </div>
            <div>
                <div className={s.videos}>
                    {videoMock.map((video) => (
                        <a key={video.id} href={video.url} className={s.video}>
                            <img className={s.img} src={video.previewImg} />
                            <div className={s.badgeDate}>
                                <div className={cx(s.badge, {
                                    [s.green]: video.categoey === VideoCategories.game, 
                                    [s.purple]: video.categoey === VideoCategories.behindScene,
                                    [s.red]: video.categoey === VideoCategories.interview
                                    })}>{video.categoey}</div>
                                <div className={s.date}>{video.date}</div>
                            </div>
                            <div className={s.description}>{video.description}</div>
                            <div className={s.watch}>Смотреть -></div>
                        </a>
                    ))}
                </div>
                <div className={s.arrows}>
                    <button><AngleLeft /></button>
                    <button><AngleRight /></button>
                </div>
            </div>
        </Box>
    );
};
