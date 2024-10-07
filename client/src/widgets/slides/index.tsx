import { Slide } from './slide';
import mock1 from './mockAssets/mock1.png';
import mock2 from './mockAssets/mock3.png';
import mock3 from './mockAssets/mock2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './index.module.css';
import './sliderStyles.css';
import cx from 'classnames';

const slidesMock: Slide[] = [
    { img: mock1, title: 'Новая \nколлекция \nодежды 2024', titlePosition: 'bl', titleSize: 'md' },
    {
        img: mock2,
        title: 'Кокос Групп \nvs Розгруз',
        subtitle: '06 октября 19:00',
        titlePosition: 'tl',
        titleSize: 'lg',
    },
    {
        img: mock3,
        title: 'Новое интервью \nс Игроком уже \nна нашем канале',
        titlePosition: 'tr',
        titleSize: 'md',
    },
];

export const Slides = () => {
    return (
        <div className={cx(s.container, 'slidesContainer')}>
            <Slider
                dots
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                autoplay
            >
                {slidesMock.map(({ img, title, subtitle, titlePosition, titleSize }) => (
                    <Slide
                        key={title}
                        img={img}
                        title={title}
                        subtitle={subtitle}
                        titlePosition={titlePosition}
                        titleSize={titleSize}
                    />
                ))}
            </Slider>
        </div>
    );
};
