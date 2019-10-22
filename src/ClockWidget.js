import React, {useState, useEffect} from 'react';
import Clock from 'react-clock';

export const ClockWidget = (props) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(
            () => setTime(new Date()),
            1000
        );
    }, []);

    return (
        <div>
            <Clock value={time} />
        </div>
    )
};

export default ClockWidget;