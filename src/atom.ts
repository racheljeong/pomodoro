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
        const minuteState = Math.floor(totalTime/60);
        const secondState = Math.floor(totalTime%60);
    return [minuteState, secondState].map((state) => String(state).padStart(2,"0"));    
    }
});

//selector이므로 해당 selector에 대한 setter 함수를 직접 가져올 수 없습니다. 
//selector는 읽기 전용이므로 setter 함수를 가지고 있지 않습니다.
// export const minuteState = selector({
//     key : "minuteState",
//     get : ({get})=> {
//         const minutes = get(totalTimeState);
//         return minutes < 0 ? 0 : Math.floor(PLAY_TIME/60);
//     },
// });

// export const secondState = selector({
//     key : "secondState",
//     get :  ({get}) => {
//         const seconds = get(totalTimeState);
//         return seconds < 0 ? 0 :Math.floor(PLAY_TIME%60);
//     }
// });
