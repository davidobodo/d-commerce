export const cloneObject = <T>(source: T): T => {
    return JSON.parse(JSON.stringify(source)) as T;
};

export const getRand = (a: number, b = 1) => {
    return Math.round(Math.random() * (a - b)) + 1;
};

export const shuffleArray = () => {};
