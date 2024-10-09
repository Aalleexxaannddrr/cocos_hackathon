import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './pages/about';
import { Games } from './pages/games';
import { Main } from './pages/main';
import { News } from './pages/news';
import { NewsItem } from './pages/newsItem';
import { Player } from './pages/player';
import { Profile } from './pages/profile';
import { Store } from './pages/store';
import { Team } from './pages/team';
import { Header } from './widgets/header';
import { Media } from './pages/media';
import { NextUIProvider } from '@nextui-org/react';
import { Footer } from './widgets/footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <NextUIProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/games" element={<Games />} />
                            <Route path="/store" element={<Store />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/media" element={<Media />} />
                            <Route path="/news-item" element={<NewsItem />} />
                            <Route path="/player" element={<Player />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </BrowserRouter>
                </NextUIProvider>
            </main>
            <Footer />
        </>
    );
}

export default App;
