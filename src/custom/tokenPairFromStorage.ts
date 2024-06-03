const tokenPairFromStorage = <T>(key: string) => {
    const storageData = localStorage.getItem(key) || "";
    if (storageData) {
        return JSON.parse(storageData) as T
    } else {
        return {} as T
    }
}
export default tokenPairFromStorage