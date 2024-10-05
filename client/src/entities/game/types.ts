import { Team } from '../team/types';
import { EStatuses } from './config';

export interface Game {
    id: string;
    teamsInfo: { team: Team; score: number; guest: boolean }[];
    status: EStatuses;
}
