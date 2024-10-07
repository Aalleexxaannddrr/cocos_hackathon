import { FC } from 'react';
import { Game as IGame } from '../../../entities/game/types';
import { gameStatuses } from '../../../entities/game/config';
import s from './index.module.css';

export const Game: FC<IGame> = ({ teamsInfo, status }) => {
    return (
        <div>
            <div className={s.game}>
                <div className={s.team}>
                    <img src={teamsInfo[0].team.img} alt={teamsInfo[0].team.name} />
                    <div className={s.name}>{teamsInfo[0].team.name}</div>
                    <div className={s.place}>{teamsInfo[0].guest ? 'В гостях' : 'Дома'}</div>
                </div>
                <div className={s.center}>
                    <div className={s.score}>
                        {teamsInfo[0].score} - {teamsInfo[1].score}
                    </div>
                    <div className={s.status}>{gameStatuses[status]}</div>
                </div>
                <div className={s.team}>
                    <img src={teamsInfo[1].team.img} alt={teamsInfo[1].team.name} />
                    <div className={s.name}>{teamsInfo[1].team.name}</div>
                    <div className={s.place}>{teamsInfo[1].guest ? 'В гостях' : 'Дома'}</div>
                </div>
            </div>
        </div>
    );
};
