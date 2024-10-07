import { Games } from '../../widgets/games';
import { News } from '../../widgets/news';
import { Players } from '../../widgets/players';
import { Slides } from '../../widgets/slides';
import { TournamentTable } from '../../widgets/tournamenTable';
import { UpcomingGame } from '../../widgets/upcomingGame';
import s from './index.module.css';

export const Main = () => {
    return (
        <div className={s.main}>
            <div>
                <Games />
                <Players />
            </div>
            <div>
                <UpcomingGame />
                <Slides />
            </div>
            <div>
                <News />
                <TournamentTable />
            </div>
        </div>
    );
};
