import { Games } from '../../widgets/games';
import { News } from '../../widgets/news';
import { Players } from '../../widgets/players';
import { TournamentTable } from '../../widgets/tournamenTable';
import s from './index.module.css';

export const Main = () => {
    return (
        <div className={s.main}>
            <div>
                <Games />
                <Players />
            </div>
            <div></div>
            <div>
                <News />
                <TournamentTable />
            </div>
        </div>
    );
};
