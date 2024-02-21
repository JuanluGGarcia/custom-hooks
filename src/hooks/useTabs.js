import { useState } from "react";

export const useTabs = () => {
    const [tabActive, setTabActive] = useState(0);

    const handleTab = (index) => {
        setTabActive(index);
    };

    return {tabActive, handleTab};
};


