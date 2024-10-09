import { Player } from '../player/types';
import { Team } from '../team/types';

export enum TransferStatuses {
    incoming = 'incoming',
    outcoming = 'outcoming',
}

export interface Transfer {
    id: string;
    fromTeam: Team;
    toTeam: Team;
    player: Player;
    playTime: string;
    date: string;
    status: TransferStatuses;
}
