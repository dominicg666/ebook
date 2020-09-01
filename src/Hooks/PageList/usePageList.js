import { useState, useCallback, useEffect } from 'react';
import { usePageContext } from '../../store/context/page';
import { useHistory, useLocation } from 'buikit-drivers';

const setQueryParam = ({ history, location, parameter, value }) => {
    const { search } = location;
    const queryParams = new URLSearchParams(search);
    queryParams.set(parameter, value);

    if (history.push) {
        history.push({ search: queryParams.toString() });
    } else {
        // Use the native pushState. See https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState()_method
        history.pushState('', '', `?${queryParams.toString()}`);
    }
};
export const usePageList = () => {

    const [appState, appApi] = usePageContext();
    const history = useHistory();
    const { search } = useLocation();
    const [active, setActive] = useState(0);
    const handleSetActive = useCallback((index) => {
        setActive(index)
        setQueryParam({
            location,
            history,
            parameter: 'page',
            value: index
        });
    }, [
        active,
        setActive
    ])

    useEffect(() => {
        const nextParams = new URLSearchParams(search);
        const pageActive = nextParams.get("page");
        if (pageActive == null) {
            setQueryParam({
                location,
                history,
                parameter: 'page',
                value: active
            });
        }
        if (pageActive != null && pageActive != active) {
            setActive(pageActive)
        }
    }, [active, setActive])

    const handleEdit = useCallback(() => {
        history.push(`/edit-page?page=${active}`)
    }, [
        appState,
        active,
        history
    ])

    const content = appState.data && appState.data.length > 0 ? appState.data[active] : null

    return {
        active,
        data: appState.data,
        content,
        handleSetActive,
        handleEdit
    };
};
