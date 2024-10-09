import { FC } from 'react';

interface Props {
    color?: string;
}

export const AngleLeft: FC<Props> = ({ color = '#000001' }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 12.6152L5.14427 7.88446C5.09873 7.84993 5.06243 7.80823 5.03762 7.76192C5.0128 7.71562 5 7.66569 5 7.61523C5 7.56477 5.0128 7.51485 5.03762 7.46855C5.06243 7.42224 5.09873 7.38053 5.14427 7.346L11 2.61523"
                stroke={color}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
