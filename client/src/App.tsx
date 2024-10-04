import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/about';
import { Game } from './pages/game';
import { Main } from './pages/main';
import { News } from './pages/news';
import { NewsItem } from './pages/newsItem';
import { Player } from './pages/player';
import { Profile } from './pages/profile';
import { Store } from './pages/store';
import { Team } from './pages/team';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/game" element={<Game />} />
                <Route path="/main" element={<Main />} />
                <Route path="/news" element={<News />} />
                <Route path="/news-item" element={<NewsItem />} />
                <Route path="/player" element={<Player />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/store" element={<Store />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
