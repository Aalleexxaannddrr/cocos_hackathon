import { Button, Input } from '@nextui-org/react';
import { Box } from '../../shared/ui/box';
import s from './index.module.css';
import img from './assets/img.png';

export const Subscribe = () => {
    return (
        <Box className={s.box}>
            <div className={s.left}>
                <div className={s.title}>Будь с нами на связи!</div>
                <div className={s.description}>
                    Оставь свою почту и узнавай первым о новых акциях, <br />
                    розыгрышах и предложениях партнёров!
                </div>
                <form className={s.form} onSubmit={() => {}}>
                    <Input
                        type="email"
                        className={s.input}
                        radius="sm"
                        placeholder="Введите вашу почту"
                    />
                    <Button className={s.button} size="sm" color="danger" radius="sm">
                        Подписаться
                    </Button>
                </form>
                <div className={s.pdn}>
                    Нажимая на кнопку «ПОДПИСАТЬСЯ», вы соглашаетесь с <br />
                    правилами обработки персональных данных и получение <br />
                    рекламно-информационных рассылок.
                </div>
            </div>
            <img className={s.img} src={img} />
        </Box>
    );
};
