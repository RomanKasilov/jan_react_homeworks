const tokenPairFromStorage = <T>(key: string) => {
    const storageData = localStorage.getItem(key) || "";
    console.log(storageData);
    if (storageData) {
        console.log(JSON.parse(storageData));
        return JSON.parse(storageData) as T
    } else {
        return {} as T
    }
}
export default tokenPairFromStorage