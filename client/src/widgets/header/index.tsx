import logo from './assets/logo.png';
import loup from './assets/loup.svg';
import login from './assets/login.svg';
import s from './index.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <a href="/" className={s.logoContainer}>
                <img src={logo} alt="Logo" />
                <div>Кокос Групп</div>
            </a>
            <nav className={s.nav}>
                <a href="/news">Новости</a>
                <a href="/team">Команда</a>
                <a href="/games">Матчи</a>
                <a href="/store">Магазин</a>
                <a href="/about">О клубе</a>
                <a href="/media">Медиа</a>
            </nav>
            <div className={s.right}>
                <button className={s.button}>
                    <img src={loup} alt="search" />
                    Поиск
                </button>
                <button className={s.button}>
                    <img src={login} alt="login" />
                    Вход
                </button>
            </div>
        </header>
    );
};
