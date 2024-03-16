import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: rgba(232, 65, 24,1.0);
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.h1`
    font-size:58px;
    color: aliceblue;
    text-align: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

`;
export const Container = styled.div`
    grid-template-columns: repeat(1, 1fr);
    
`;
export const CardSection = styled.div`
    //grid-template-rows: repeat(2, 1fr);
    display: flex;
    align-items: center;
    //padding-top: 0px;
`;
export const TimeCard = styled(motion.div)`
    width: 150px;
    height: 180px;
    background-color: aliceblue;
    border-radius: 30px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: slategray;
`;

export const timeCardVariants = {
    initial : { 
        scale: 1, 
    },
    animate : {
        rotateY : 0,
        scale: 1.1,
        transition: { 
            duration: 0.5,
        }
    }
}

export const Dot = styled.span`
    display: flex;
    padding: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: aliceblue;
`;

export const PlayingContainer = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 50px;
`;
export const PlayingBtn = styled(motion.button)`
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
export const RestContainer = styled.div`
    grid-template-columns: repeat(2, 1fr);
    display: flex;
    gap:50px;
    justify-content: space-between;
`;

export const CountingSection = styled.div`
    //display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;

`;
export const CountVal = styled.div`
    text-align: center;
    justify-content: center;
    color: darkgrey;
    font-size: 28px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const CountTxt = styled.div`
    text-align: center;
    justify-content: center;
    color: #e0dcf6;
    font-size: 36px;
    padding: 10px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;
