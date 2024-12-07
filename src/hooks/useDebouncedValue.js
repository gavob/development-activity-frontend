import React, { useState, useEffect, useRef } from 'react';

const useDebouncedValue = (inputValue, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(inputValue);
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebouncedValue(inputValue), delay);

        return () => {
            clearTimeout(timerRef.current);
        }
    }, [inputValue, delay]);

    return debouncedValue;
};

export default useDebouncedValue;