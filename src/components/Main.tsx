import { useEffect, useState } from "react";
import { PLAY_TIME, countSelector, countState, 
         timeSelector, totalTimeState } from "../atom";
import { useRecoilState, useRecoilValue} from "recoil";
import { PauseIcon,PlayCircleIcon} from '@heroicons/react/20/solid';
import { CardSection, Container, CountTxt, CountVal, CountingSection, 
        Dot, MainContainer, PlayingBtn, PlayingContainer, RestContainer, 
        TimeCard, Title, timeCardVariants } from "../styles";



function Main() {
   
    const [totalTime, setTotalTime] = useRecoilState(totalTimeState);
    const [count, setCount] = useRecoilState(countState);
    const [minutes, seconds] = useRecoilValue(timeSelector);
    const [round, goal] = useRecoilValue(countSelector);

    const [playYN, setPlayYN] = useState(true);  //기본값 === 정지상태

    useEffect(()=> {
        if(!playYN) {
            //시간이 흐를때
            const timerInterval = setInterval(() => {
                setTotalTime((current) => current - 1);

                if(totalTime <= 0) {
                    clearInterval(timerInterval);
                    setTotalTime(PLAY_TIME);
                    setPlayYN(true);
                    setCount((cnt) => cnt + 1);
                }
            },
            1000);
           // 컴포넌트가 언마운트될 때 타이머 정리
            return () => {
                if (timerInterval) clearInterval(timerInterval);
    };
        }
    }, [playYN, setTotalTime, totalTime, setCount]);
        //의존성 배열 요소 -> 이 중에 하나라도 변화가 있을경우 실행
    
    const playingYN = () => {
        setPlayYN(prev => !prev);
    };
   
    
    return (
        <MainContainer>
            <Title>POMODORO</Title>
            <Container>
                <CardSection>
                    <TimeCard
                        key={`${minutes}-minutes`}
                        variants={timeCardVariants}
                        initial="initial"
                        animate="animate"
                    >{minutes}
                    </TimeCard>
                    <Dot>:</Dot>
                    <TimeCard
                        key={`${seconds}-seconds`}
                        variants={timeCardVariants}
                        initial="initial"
                        animate="animate"
                      >{seconds}
                    </TimeCard>
                </CardSection>
                <PlayingContainer>
                    <PlayingBtn onClick={playingYN} whileHover={{scale : 1.1}} whileTap={{scale : 1.3}}>
                        { playYN ? <PlayCircleIcon/>: <PauseIcon/> }
                    </PlayingBtn>
                </PlayingContainer>
                <RestContainer>
                    <CountingSection>
                        <CountVal>{round}/4</CountVal>
                        <CountTxt>ROUND</CountTxt>
                    </CountingSection>
                    <CountingSection>
                        <CountVal>{goal}/12</CountVal>
                        <CountTxt>GOAL</CountTxt>
                    </CountingSection>
                </RestContainer>
            </Container>    
        </MainContainer>
    );
}

export default Main;