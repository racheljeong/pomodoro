import { atom, selector } from "recoil";


export const PLAY_TIME = 25 * 60; //1500

export const totalTimeState = atom<number>({
    key: "totalTimeState",
    default : PLAY_TIME
});

export const timeSelector = selector<string[]>({
    key : "timeSelector",
    get : ({get}) => {
        const totalTime = get(totalTimeState);
        const minutes = Math.floor(totalTime/60);
        const seconds = Math.floor(totalTime%60);
    return [minutes, seconds].map((state) => String(state).padStart(2,"0"));    
    }
});

export const countState = atom<number>({
    key: "countState",
    default : 0,
});

export const countSelector = selector({
    key : "countSelector",
    get : ({get}) => {
        const count = get(countState);
        const round = count % 4;
        const goal = Math.floor(count / 4);
        return[round, goal];
    },
});

//selector이므로 해당 selector에 대한 setter 함수를 직접 가져올 수 없습니다. 
//selector는 읽기 전용이므로 setter 함수를 가지고 있지 않습니다.
