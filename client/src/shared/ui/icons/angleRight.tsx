import { FC } from 'react';

interface Props {
    color?: string;
}

export const AngleRight: FC<Props> = ({ color = '#000001' }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 2.61523L10.8557 7.346C10.9013 7.38053 10.9376 7.42224 10.9624 7.46855C10.9872 7.51485 11 7.56478 11 7.61523C11 7.66569 10.9872 7.71562 10.9624 7.76192C10.9376 7.80823 10.9013 7.84993 10.8557 7.88447L5 12.6152"
                stroke={color}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
