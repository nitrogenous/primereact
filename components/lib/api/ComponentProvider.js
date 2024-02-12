import React, { createContext, useEffect, useState } from 'react';

const ComponentContext = createContext();
const { Provider, Consumer: ComponentConsumer } = ComponentContext;

const ComponentProvider = ({ componentDetails, children }) => {
    const [childrenDetails, setChildrenDetails] = useState({});

    useEffect(() => {
        if (componentDetails && componentDetails.instance instanceof HTMLElement) {
            const { instance, props, state, parent } = componentDetails;

            setChildrenDetails({
                parent: {
                    instance,
                    props,
                    state,
                    parent
                }
            });
        }
    }, [componentDetails]);

    return <Provider value={{ ...childrenDetails }}>{children}</Provider>;
};

export { ComponentProvider, ComponentConsumer, ComponentContext };
