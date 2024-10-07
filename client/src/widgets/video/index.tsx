import { Box } from '../../shared/ui/box';
import { AngleRight } from '../../shared/ui/icons/angleRight';

export const Video = () => {
    return (
        <Box dividers>
            <div>
                <div>Видео</div>
                <div>
                    Все видео <AngleRight />
                </div>
            </div>
            <div></div>
        </Box>
    );
};
