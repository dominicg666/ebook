import { useCallback } from 'react';

export const useNavigationHeader = props => {
    const { onClose } = props;


    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    return {
        handleClose,
    };
};
