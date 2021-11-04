import React from 'react';

import Icon from '../../components/icons/Icon';
import styled from 'styled-components';

import { Text } from '../../elements/index'
import { NavBar } from '../../components/index'

const MyJoin = () => {
    const data = useSelector((state)=>state)
    console.log(state, '스테이트값')

    return(
    <>
    <PostBox>
    <TitleBox>
        <div>
            <Text 
                _fontSize="16px"
            >
                {data.title}
            </Text>
            <Text 
                _fontSize="11px" 
                _color="#8f8f8f"
                _align="left"
                >
                {data.publisedDate} {data.writer}
            </Text>
        </div>
        <Text _fontSize="11px">참여자 : {data.people}</Text>
    </TitleBox>
    <EtcBox>
        <SmallBox>
            <Icon icon={'favorite'} size="20px" /> 좋아요
            {data.likeCount}개
        </SmallBox>
        <SmallBox>
            <Icon icon={'message'} size="20px" />
            댓글 {data.commentCount}개
        </SmallBox>
    </EtcBox>
    </PostBox>
    <NavBar/>
    </>
    )

}

const TitleBox = styled.div`
display: flex;
justify-content: space-between;
padding: 15px;
`

const PostBox = styled.div`
margin: 5vw auto;
width: 90vw;
height: auto;
border: 1px solid #c4c4c4;
position: relative;
`
const SmallBox = styled.div`
display: flex;
height: inherit;
margin: 0 10px 0;
justify-content: center;
align-items: center;
font-size: 11px;
color: #8f8f8f;
`

const EtcBox = styled.div`
display: flex;
flex-direction: row;
text-align: left;
width: 90vw;
height: 45px;
border-bottom: 1px solid lightgray;
border-top: 1px solid lightgray;
`
export default MyJoin;