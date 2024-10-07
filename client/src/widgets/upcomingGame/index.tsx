import { useEffect, useState } from 'react';
import { EStatuses } from '../../entities/game/config';
import { Game } from '../../entities/game/types';
import { Box } from '../../shared/ui/box';
import mock1 from './mockAssets/mock1.png';
import mock2 from './mockAssets/mock2.png';
import { getDateDiff } from './lib';
import { Button } from '@nextui-org/react';
import s from './index.module.css';
import cx from 'classnames';

const gameMock: Game = {
    id: '0',
    teamsInfo: [
        { team: { id: '1', name: 'Розгруз', img: mock2, players: [] }, score: 0, guest: false },
        { team: { id: '2', name: 'Кокос Групп', img: mock1, players: [] }, score: 0, guest: true },
    ],
    status: EStatuses.comming,
    date: '30 октября, вс',
    time: '19:00',
    place: 'ВТБ Арена',
};

const dateMock = '2024-10-30:19:00';

export const UpcomingGame = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const { days, hours, minutes } = getDateDiff(dateMock);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        const intervalId = setInterval(() => {
            const { days, hours, minutes } = getDateDiff(dateMock);
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Box className={s.box}>
            <div className={s.title}>Ближайшие матчи</div>
            <div className={s.ligueName}>Суперлига F</div>
            <div className={s.datePlace}>
                <div>{gameMock.date}</div>
                <div className={s.divider} />
                <div>{gameMock.time}</div>
                <div className={s.divider} />
                <div>{gameMock.place}</div>
            </div>
            <div className={s.teamsTime}>
                <div className={s.team}>
                    <img
                        src={gameMock.teamsInfo[0].team.img}
                        alt={gameMock.teamsInfo[0].team.name}
                        className={s.img}
                    />
                    <div className={s.teamName}>{gameMock.teamsInfo[0].team.name}</div>
                    <div className={s.place}>
                        {gameMock.teamsInfo[0].guest ? 'В гостях' : 'Дома'}
                    </div>
                </div>
                <div className={s.timeCount}>
                    <div className={s.count}>- : -</div>
                    <div className={s.time}>
                        {days < 10 ? '0' + days : days} : {hours < 10 ? '0' + hours : hours} :{' '}
                        {minutes < 10 ? '0' + minutes : minutes}
                    </div>
                    <div className={s.timeCaption}>
                        <div>дней</div>
                        <div>часов</div>
                        <div>минут</div>
                    </div>
                </div>
                <div className={s.team}>
                    <img
                        src={gameMock.teamsInfo[1].team.img}
                        alt={gameMock.teamsInfo[1].team.name}
                        className={s.img}
                    />
                    <div className={s.teamName}>{gameMock.teamsInfo[1].team.name}</div>
                    <div className={s.place}>
                        {gameMock.teamsInfo[1].guest ? 'В гостях' : 'Дома'}
                    </div>
                </div>
            </div>
            <div className={s.buttons}>
                <Button className={s.button}>Подробнее</Button>
                <Button className={cx(s.button, s.red)}>Зарегистрироваться</Button>
            </div>
        </Box>
    );
};
