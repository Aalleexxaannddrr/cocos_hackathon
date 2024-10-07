import {
    Button,
    Select,
    SelectItem,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from '@nextui-org/react';
import { Box } from '../../shared/ui/box';
import s from './index.module.css';
import { Team } from '../../entities/team/types';
import mock1 from './mockAssets/mock1.png';
import mock2 from './mockAssets/mock2.png';
import cx from 'classnames';

const selectMock = ['Суперлига F'];

const tableMock: { team: Team; w: number; n: number; p: number; o: number }[] = [
    { team: { id: '0', img: mock2, name: 'ЦСКА', players: [] }, w: 7, n: 3, p: 0, o: 24 },
    { team: { id: '1', img: mock1, name: 'Кокос Групп', players: [] }, w: 7, n: 3, p: 0, o: 24 },
    { team: { id: '0', img: mock2, name: 'ЦСКА', players: [] }, w: 7, n: 3, p: 0, o: 24 },
    { team: { id: '0', img: mock2, name: 'ЦСКА', players: [] }, w: 7, n: 3, p: 0, o: 24 },
    { team: { id: '0', img: mock2, name: 'ЦСКА', players: [] }, w: 7, n: 3, p: 0, o: 24 },
    { team: { id: '0', img: mock2, name: 'ЦСКА', players: [] }, w: 7, n: 3, p: 0, o: 24 },
    { team: { id: '0', img: mock2, name: 'ЦСКА', players: [] }, w: 7, n: 3, p: 0, o: 24 },
    { team: { id: '0', img: mock2, name: 'ЦСКА', players: [] }, w: 7, n: 3, p: 0, o: 24 },
];

export const TournamentTable = () => {
    return (
        <Box dividers className={s.box}>
            <div className={s.title}>Турнирная таблица</div>
            <div>
                <Select
                    items={selectMock.map((item, idx) => ({ key: idx, label: item }))}
                    defaultSelectedKeys={['0']}
                    className={s.select}
                >
                    {selectMock.map((item, idx) => (
                        <SelectItem key={idx}>{item}</SelectItem>
                    ))}
                </Select>
                <Table
                    removeWrapper
                    color="default"
                    selectionMode="single"
                    defaultSelectedKeys={[2]}
                    className={s.table}
                >
                    <TableHeader>
                        <TableColumn>Клуб</TableColumn>
                        <TableColumn className={s.pale}>В</TableColumn>
                        <TableColumn className={s.pale}>Н</TableColumn>
                        <TableColumn className={s.pale}>П</TableColumn>
                        <TableColumn>О</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {tableMock.map((item, idx) => (
                            <TableRow key={idx}>
                                <TableCell className={s.teamInfoCell}>
                                    <div className={cx(s.number, { [s.first]: idx === 0 })}>
                                        {idx + 1}
                                    </div>
                                    <img
                                        src={item.team.img}
                                        alt={item.team.name}
                                        className={s.img}
                                    />
                                    <div>{item.team.name}</div>
                                </TableCell>
                                <TableCell className={s.pale}>
                                    <div>{item.w}</div>
                                </TableCell>
                                <TableCell className={s.pale}>{item.n}</TableCell>
                                <TableCell className={s.pale}>{item.p}</TableCell>
                                <TableCell>{item.o}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button className={s.button}>Подробнее</Button>
            </div>
        </Box>
    );
};
