import { useState, useEffect, useRef } from "react";

interface UseTimerProps {
    duration?: number;
    step?: number;
    onEnd?: () => void;
}

interface UseTimerReturn {
    progress: number;
    isPaused: boolean;
    pause: () => void;
    resume: () => void;
    reset: () => void;
}

const useTimer = ({
    duration = 15000,
    step = 100,
    onEnd = () => {},
}: UseTimerProps): UseTimerReturn => {
    const [progress, setProgress] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setProgress((prev) => {
                    const increment = (step / duration) * 100;
                    if (prev + increment >= 100) {
                        clearInterval(intervalRef.current!);
                        setProgress(100);
                        onEnd();
                        return 100;
                    }
                    return prev + increment;
                });
            }, step);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, step, duration, onEnd]);

    const pause = () => setIsPaused(true);
    const resume = () => setIsPaused(false);const reset = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(0);
        setIsPaused(false);
    };

    return { progress, isPaused, pause, resume, reset };
};

export default useTimer;
