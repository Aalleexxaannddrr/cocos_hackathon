import { Avatar, Button } from '@nextui-org/react';
import { Player } from '../../entities/player/types';
import { Box } from '../../shared/ui/box';
import s from './index.module.css';

const playersMock: Player[] = [
    { id: '0', firstName: 'Junior', lastName: 'Garcia' },
    { id: '1', firstName: 'Junior', lastName: 'Garcia' },
    { id: '2', firstName: 'Junior', lastName: 'Garcia' },
    { id: '3', firstName: 'Junior', lastName: 'Garcia' },
    { id: '4', firstName: 'Junior', lastName: 'Garcia' },
];

export const Players = () => {
    return (
        <Box className={s.box} dividers>
            <div className={s.title}>Состав игроков</div>
            {playersMock.map((player) => (
                <div key={player.id}>
                    <div className={s.player}>
                        <Avatar
                            src={player.photo}
                            name={player.firstName[0] + player.lastName[0]}
                        />
                        <div>
                            {player.firstName} {player.lastName}
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <Button className={s.button}>Все игроки</Button>
            </div>
        </Box>
    );
};
