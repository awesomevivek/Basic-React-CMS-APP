const cacheKey = "cache_";

export default class LocalStorageCache{
    static getData = (key, enabledInvalidate) => {
        const cache = localStorage.getItem(cacheKey + key);
        if(cache){
            const parsedData = JSON.parse(cache);
            if(parsedData && parsedData.invalidateDate && parsedData.cachedData){
                const invalidateDate = new Date(parsedData.invalidateDate);
                invalidateDate.setSeconds(invalidateDate.getSeconds() + 3600);
                const now = new Date();
                if(invalidateDate > now || !enabledInvalidate) {
                    return parsedData.cachedData
                }
            }
        }
        return null
    }

    static cacheData = (key, cachingData) => {
        localStorage.setItem(cacheKey + key, JSON.stringify({
            invalidateDate: new Date(),
            cachedData: cachingData
        }))
    }

    static removeItem = (key) => {
        localStorage.removeItem(cacheKey + key)
    }

    static clearCache = (key) => {
        const keys = [];
        for(let i = 0; i < localStorage.length; i++){
            if(~localStorage.key(i).indexOf(cacheKey)){
                if(key && ~localStorage.key(i).indexOf(cacheKey + key + ":")){
                    keys.push(localStorage.key(i))
                }else if (!key){
                    keys.push(localStorage.key(i))
                }
            }
        }
        keys.forEach(key=>localStorage.removeItem(key))
    }
}