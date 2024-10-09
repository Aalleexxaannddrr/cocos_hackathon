import { Bestsellers } from '../../widgets/bestsellers';
import { Games } from '../../widgets/games';
import { News } from '../../widgets/news';
import { Players } from '../../widgets/players';
import { Slides } from '../../widgets/slides';
import { Subscribe } from '../../widgets/subscribe';
import { TournamentTable } from '../../widgets/tournamenTable';
import { Transfers } from '../../widgets/transfers';
import { UpcomingGame } from '../../widgets/upcomingGame';
import { Video } from '../../widgets/video';
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
                <Video />
                <Transfers />
                <Bestsellers />
                <Subscribe />
            </div>
            <div>
                <News />
                <TournamentTable />
            </div>
        </div>
    );
};
