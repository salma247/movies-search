import { useState, useEffect } from 'react';

export const useThrottling = (value: string, delay: number) => {
    const [throttledValue, setThrottledValue] = useState(value);
    const [lastValue, setLastValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setThrottledValue(lastValue);
        }, delay);

        return () => clearTimeout(timeout);
    }, [lastValue, delay]);

    useEffect(() => {
        if (value !== throttledValue) {
            setLastValue(value);
        }
    }, [value, throttledValue]);

    return throttledValue;
}