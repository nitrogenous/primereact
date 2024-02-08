import React, { createContext, useEffect, useState } from 'react';

const InstanceContext = createContext();
const { Provider, Consumer: InstanceConsumer } = InstanceContext;

const InstanceProvider = ({ instanceDetails, children }) => {
    const [currentInstance, setCurrentInstance] = useState(null);

    useEffect(() => {
        if (instanceDetails instanceof HTMLElement) {
            setCurrentInstance(instanceDetails);
        }
    }, [instanceDetails]);

    return <Provider value={{ parent: currentInstance }}>{children}</Provider>;
};

export { InstanceProvider, InstanceConsumer, InstanceContext };
