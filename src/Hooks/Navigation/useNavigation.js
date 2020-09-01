import { useCallback, useState } from 'react';
import { useAppContext } from '@baaz/adapter/context/app';
import { useHistory } from 'buikit-drivers';


export const useNavigation = props => {
    const [appState, { closeDrawer }] = useAppContext();

    const { drawer } = appState;
    const isOpen = drawer === 'nav';
    const history = useHistory();


    // get local state
    const [view, setView] = useState('MENU');
    const hasModal = view === 'MENU';


    const handleClose = useCallback(() => {
        closeDrawer();
    }, [closeDrawer]);


    return {
        hasModal,
        isOpen,
        handleClose
    };
};
