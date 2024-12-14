"use client";

import { SVGProps } from "react";

const AlpineJS = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 200 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M155.556 0 200 44.25l-44.444 44.249-44.445-44.25L155.556 0Z"
                fill="#77C1D2"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m44.444 0 92.139 91.735H47.694L0 44.249 44.444 0Z"
                fill="#2D3441"
            />
        </svg>
    );
};

export default AlpineJS;
