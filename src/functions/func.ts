
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('valueOfCounter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const loadStateSettings = () => {
    try {
        const serializedState = localStorage.getItem('valueOfSettings');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state: number) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('valueOfCounter', serializedState);
    } catch {
        // ignore write errors
    }
};

export const saveSettings = (state: number[]) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('valueOfSettings', serializedState);
    } catch {
        // ignore write errors
    }
};



