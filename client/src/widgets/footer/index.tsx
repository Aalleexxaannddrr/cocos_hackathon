import s from './index.module.css';
import logo from '../../shared/assets/logo.png';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.content}>
                <a href="/">
                    <img src={logo} className={s.logo} />
                </a>
            </div>
        </footer>
    );
};
