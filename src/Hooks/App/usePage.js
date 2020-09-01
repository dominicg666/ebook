import { useEffect } from 'react';
import { usePageContext } from '../../store/context/page';
export const usePage = () => {

    const [, appApi] = usePageContext();
    useEffect(() => {
        appApi.beginData();
    }, [])


    return {

    };
};
