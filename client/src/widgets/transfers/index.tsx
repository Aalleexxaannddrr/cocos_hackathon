import { Avatar } from '@nextui-org/react';
import { Transfer, TransferStatuses } from '../../entities/transfer/types';
import { Box } from '../../shared/ui/box';
import { AngleRight } from '../../shared/ui/icons/angleRight';
import s from './index.module.css';
import mock from './mockAssets/mock.png';
import mockPhoto from './mockAssets/mockPhoto.png';
import cx from 'classnames';

const transfersMock: Transfer[] = [
    {
        id: '0',
        date: 'Сегодня',
        status: TransferStatuses.incoming,
        player: { id: '1', firstName: 'Вова', lastName: 'Вовин', photo: mockPhoto },
        fromTeam: { id: '2', img: mock, name: 'Клуб 1', players: [] },
        toTeam: { id: '3', img: mock, name: 'Клуб 2', players: [] },
        playTime: 'С августа 2024 г. по июнь 2025 г.',
    },
    {
        id: '4',
        date: '12.09',
        status: TransferStatuses.outcoming,
        player: { id: '1', firstName: 'Вова', lastName: 'Вовин', photo: mockPhoto },
        fromTeam: { id: '2', img: mock, name: 'Клуб 1', players: [] },
        toTeam: { id: '3', img: mock, name: 'Клуб 2', players: [] },
        playTime: 'С августа 2024 г. по июнь 2025 г.',
    },
];

export const Transfers = () => {
    return (
        <Box dividers className={s.box}>
            <div className={s.head}>
                <div className={s.title}>Видео</div>
                <a href="/" className={s.allTranfers}>
                    Все видео <AngleRight />
                </a>
            </div>
            <div>
                <div className={s.transfers}>
                    {transfersMock.map((transfer) => (
                        <div key={transfer.id} className={s.transfer}>
                            <div className={s.top}>
                                <div className={s.date}>{transfer.date}</div>
                                <div className={cx(s.status, {
                                    [s.green]: transfer.status === TransferStatuses.incoming,
                                    [s.red]: transfer.status === TransferStatuses.outcoming,
                                    })}>
                                    {transfer.status === TransferStatuses.incoming
                                        ? 'Прибыл'
                                        : 'Убыл'}
                                </div>
                            </div>
                            <Avatar className={s.avatar} src={transfer.player.photo} />
                            <div className={s.name}>
                                {transfer.player.firstName} {transfer.player.firstName}
                            </div>
                            <div className={s.teams}>
                                <div className={s.team}>
                                    <img className={s.teamImg} src={transfer.fromTeam.img} />
                                    <div className={s.teamName}>{transfer.fromTeam.name}</div>
                                </div>
                                <div className={s.teamName}>-></div>
                                <div className={s.team}>
                                    <img className={s.teamImg} src={transfer.toTeam.img} />
                                    <div className={s.teamName}>{transfer.toTeam.name}</div>
                                </div>
                            </div>
                            <div className={s.divider} />
                            <div className={s.playTime}>{transfer.playTime}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Box>
    );
};
