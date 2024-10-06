import { useEffect, useState } from 'react';
import { EStatuses } from '../../entities/game/config';
import { Game } from '../../entities/game/types';
import { Box } from '../../shared/ui/box';
import mock1 from './mockAssets/mock1.png';
import mock2 from './mockAssets/mock2.png';

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
    const [minuts, setMinuts] = useState(0);

    useEffect(() => {
        const date = new Date('2024-10-30:19:00');
        const today = new Date();

        const difTime = date.getTime() - today.getTime();

        const difDays = Math.round(difTime / (1000 * 3600 * 24));
    }, []);

    return (
        <Box>
            <div>Ближайшие матчи</div>
            <div>Суперлига F</div>
            <div>
                <div>{gameMock.date}</div>
                <div />
                <div>{gameMock.time}</div>
                <div />
                <div>{gameMock.place}</div>
            </div>
            <div>
                <div>
                    <img
                        src={gameMock.teamsInfo[0].team.img}
                        alt={gameMock.teamsInfo[0].team.name}
                    />
                    <div>{gameMock.teamsInfo[0].team.name}</div>
                    <div>{gameMock.teamsInfo[0].guest ? 'В гостях' : 'Дома'}</div>
                </div>
                <div>
                    <div>- : -</div>
                    <div></div>
                </div>
            </div>
        </Box>
    );
};
