import { useCallback } from 'react';
import { useAppContext } from '@baaz/adapter/context/app';

export const useNavigationTrigger = () => {
    const [, { toggleDrawer }] = useAppContext();

    const handleOpenNavigation = useCallback(() => {
        toggleDrawer('nav');
    }, [toggleDrawer]);

    return {
        handleOpenNavigation
    };
};
