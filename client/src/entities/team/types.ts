import { Player } from '../player/types';

export interface Team {
    id: string;
    name: string;
    img: string;
    players: Player[];
}
