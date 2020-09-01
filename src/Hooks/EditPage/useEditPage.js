import { useCallback, useEffect, useState } from 'react';
import { usePageContext } from '../../store/context/page';
import { useHistory, useLocation } from 'buikit-drivers';

export const useEditPage = () => {

    const [appState, appApi] = usePageContext();
    console.log(appState);

    const history = useHistory();
    const { search, pathname } = useLocation();
    const [formApi, setFormApi] = useState();

    useEffect(() => {
        if (pathname == '/edit-page') {
            const nextParams = new URLSearchParams(search);
            const pageActive = nextParams.get("page");
            const content = appState.data && appState.data.length > 0 ? appState.data[pageActive] : null
            if (formApi) {
                formApi.setValue('page_title', content.pagename);
                formApi.setValue('id', content.id);
                formApi.setValue('page_body', content.pageBody);
            }

        }
    }, [formApi])

    const handleSubmit = useCallback(values => {
        const nextParams = new URLSearchParams(search);
        const pageActive = nextParams.get("page");
        const content = appState.data && appState.data.length > 0 ? appState.data[pageActive] : null
        if (pathname == '/edit-page') {
            appApi.editData({
                id: content.id,
                editedData: {
                    pagename: values.page_title,
                    pageBody: values.page_body
                }
            })
            history.replace(`/?page=${pageActive}`);
        } else {
            appApi.addData({
                title: values.page_title,
                body: values.page_body
            })
            history.replace(`/?page=${appState.data.length}`);
        }

    }, [
        search,
        appState,
        appApi,
        pathname,
        history
    ]);

    const handleGoback = useCallback(() => {
        history.replace('/');

    }, [
        history
    ]);


    return {
        setFormApi,
        handleSubmit,
        handleGoback
    };
};
