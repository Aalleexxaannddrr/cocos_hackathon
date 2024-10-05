import { Game } from '../../entities/game/types';
import { Box } from '../../shared/ui/box';
import s from './index.module.css';
import { Input, Tabs, Tab, Button } from '@nextui-org/react';
import mockImg1 from './mockAssets/mock1.png';
import mockImg2 from './mockAssets/mock2.png';
import { EStatuses } from '../../entities/game/config';
import { Game as GameComponent } from './game';

const gamesMock: Game[] = [
    {
        id: '0',
        teamsInfo: [
            { team: { id: 't0', name: 'Розгруз', img: mockImg2 }, score: 1, guest: false },
            { team: { id: 't1', name: 'Кокос Групп', img: mockImg1 }, score: 0, guest: true },
        ],
        status: EStatuses.finished,
    },
    {
        id: '1',
        teamsInfo: [
            { team: { id: 't1', name: 'Кокос Групп', img: mockImg1 }, score: 4, guest: true },
            { team: { id: 't2', name: 'ФК Добрый', img: mockImg2 }, score: 3, guest: false },
        ],
        status: EStatuses.finished,
    },
    {
        id: '2',
        teamsInfo: [
            { team: { id: 't3', name: 'Эксклюзив', img: mockImg2 }, score: 1, guest: false },
            { team: { id: 't1', name: 'Кокос Групп', img: mockImg1 }, score: 4, guest: true },
        ],
        status: EStatuses.finished,
    },
    {
        id: '3',
        teamsInfo: [
            { team: { id: 't4', name: 'Транслом', img: mockImg2 }, score: 0, guest: false },
            { team: { id: 't1', name: 'Кокос Групп', img: mockImg1 }, score: 4, guest: true },
        ],
        status: EStatuses.finished,
    },
];

export const Games = () => {
    return (
        <Box dividers className={s.games}>
            <div className={s.title}>Матчи</div>
            <div>
                <Input placeholder="Фильтр" className={s.input} radius="sm" />
                <Tabs variant="light" color="danger" className={s.tabs}>
                    <Tab key="past" title="Прошедшие" />
                    <Tab key="upcoming" title="Предстоящие" />
                </Tabs>
                <div className={s.subtitle}>Суперлига F</div>
            </div>
            {gamesMock.map((game) => (
                <GameComponent key={game.id} {...game} />
            ))}
            <div>
                <Button className={s.button}>Все матчи</Button>
            </div>
        </Box>
    );
};
