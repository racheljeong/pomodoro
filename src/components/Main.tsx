import { useEffect, useState } from "react";
import styled from "styled-components";
import { PLAY_TIME, timeSelector, totalTimeState } from "../atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { motion } from "framer-motion";
import {
    PauseIcon,
    PlayCircleIcon,
    XCircleIcon,
  } from '@heroicons/react/20/solid';


const MainContainer = styled.div`
    background-color: rgba(232, 65, 24,1.0);
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    font-size: 48px;
    color: aliceblue;
    text-align: center;
`;
const Container = styled.div`
    grid-template-columns: repeat(1, 1fr);
    
`;
const CardSection = styled.div`
    //grid-template-rows: repeat(2, 1fr);
    display: flex;
    align-items: center;
    //padding-top: 0px;
`;
const MinuteCard = styled(motion.div)`
    width: 150px;
    height: 200px;
    background-color: aliceblue;
    border-radius: 30px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: slategray;
`;

const Dot = styled.span`
    display: flex;
    padding: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: aliceblue;
`;
const SecondsCard = styled(motion.div)`
    width: 150px;
    height: 200px;
    background-color: aliceblue;
    border-radius: 30px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: slategray;
`;
const PlayingContainer = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 50px;
`;
const PlayingBtn = styled(motion.button)`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.2);
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 24px; /* 아이콘 크기 조정 */
    color: rgba(255,255,255,0.5);
    border: none;

`;
const RestContainer = styled.div`

`;

const RoundSection = styled.div`
    
`;
const GoalSection = styled.div`
    
`;


function Main() {
   
    const [totalTime, setTotalTime] = useRecoilState(totalTimeState);
    const [minutes, seconds] = useRecoilValue(timeSelector);
    //console.log(minutes,seconds);
    const [playYN, setPlayYN] = useState(false);

    useEffect(()=> {
        if(!playYN) {
            const timerInterval = setInterval(() => {
                setTotalTime((current) => current-1);
                //console.log(totalTime,minutes,seconds);
            },
            1000);
            return () => clearInterval(timerInterval); // 컴포넌트가 언마운트될 때 타이머를 정리
        }
    }, [playYN]);

    
    const playingYN = () => {
        setPlayYN(prev => !prev);
        console.log(playYN);
    };
   
    
    return (
        <MainContainer>
            <Title>POMODORO</Title>
            <Container>
                <CardSection>
                    <MinuteCard>{minutes}</MinuteCard>
                    <Dot>:</Dot>
                    <SecondsCard>{seconds}</SecondsCard>
                </CardSection>
                <PlayingContainer>
                    <PlayingBtn onClick={playingYN}>{ playYN ? <PlayCircleIcon/>: <PauseIcon/> }</PlayingBtn>
                </PlayingContainer>
                <RestContainer>
                    <RoundSection></RoundSection>
                    <GoalSection></GoalSection>
                </RestContainer>
            </Container>    
        </MainContainer>
    );
}

export default Main;