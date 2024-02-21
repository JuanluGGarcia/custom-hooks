// import { v4 } from 'uuid';
import { StyledList, StyledTab, StyledTabsContainer } from './styles';
// import { useState } from 'react';
import { useTabs } from '../../hooks/useTabs';

// const TABS = [
//     { id: v4(), name: 'Tab1' },
//     { id: v4(), name: 'Tab2' },
//     { id: v4(), name: 'Tab3' },
//     { id: v4(), name: 'Tab4' },
//     { id: v4(), name: 'Tab5' }
// ];

// const TABSINFO = ['Info 1', 'Info 2', 'Info 3', 'Info 4', 'Info 5'];

const TabsB = () => {
    // const [tabActive, setTabActive] = useState(0);
    const { tabActive, handleTab } = useTabs();

    return (
        <>
            <StyledTabsContainer>
                <StyledList>
                    
                    {TABS.map((tab, index) => {

                        return (

                            <StyledTab onClick={() => 
                                handleTab(index)} 
                                key={tab.id}
                                // Comprobamos que la pestaña esté activa y pasamos este active al background de styles
                                $active = {index === tabActive}
                            >
                                {tab.name}
                            </StyledTab>
                        );
                        
                    })}

                </StyledList>
            </StyledTabsContainer>
            <p>{TABSINFO[tabActive]}</p>
        </>
        
    );
};

// const handleTab = (setTabActive, index) => {
//     setTabActive(index);
// };

export default TabsB;
