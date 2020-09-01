const STORAGE = `ebook`;

export const getStorageItem = async () => {
    return await JSON.parse(localStorage.getItem(STORAGE));
}

export const setStorageItem = (values) => {
    const data = JSON.stringify(values);
    return localStorage.setItem(STORAGE, data);
}