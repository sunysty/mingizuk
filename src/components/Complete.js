import React from 'react'
import styled from 'styled-components'
import { ButtonOutlined, FlexRow, Text, Img } from '../elements/index'
import { CancelRounded } from '@material-ui/icons'
import Icon from '../components/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import { actionCompleteMD } from '../redux/async/actionComplete'
import {
    setActionBtn,
    setActionName,
    setModal,
    setImgSrc,
    setCompleteBtn,
    setDefaultBtn,
    setActionId,
    setRoutineId,
} from '../redux/modules/completeSlice'

const CompleteActionModal = (props) => {
    const dispatch = useDispatch()

    const [success, setsuccess] = React.useState('false')
    const modalImg = useSelector((state) => state.actionComplete.ImgSrc)
    const modalActionName = useSelector(
        (state) => state.actionComplete.actionName
    )
    const modalActionBtn = useSelector(
        (state) => state.actionComplete.actionBtn
    )
    const modalCompleteBtn = useSelector(
        (state) => state.actionComplete.completeBtn
    )
    const modalDefaultBtn = useSelector(
        (state) => state.actionComplete.defaultBtn
    )
    const modalActionId = useSelector((state) => state.actionComplete.actionId)
    const modalRoutineId = useSelector(
        (state) => state.actionComplete.routineId
    )

    const successAction = () => {
        dispatch(setDefaultBtn(false))
        dispatch(setCompleteBtn(true))
        const data = [modalActionId, modalRoutineId]
        console.log('아이디', data)
        dispatch(actionCompleteMD(data))
        dispatch(setActionName('성공!'))
        dispatch(
            setImgSrc(
                'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/mingsuccess.jpg'
            )
        )
        dispatch(setActionBtn('닫기'))
    }

    const changeBtn = () => {
        dispatch(
            setImgSrc(
                'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming.gif'
            )
        )
        if (modalActionBtn == '시작 !') {
            dispatch(setActionBtn('화이팅 !'))
            setTimeout(function () {
                dispatch(setActionBtn('완료하기 !'))
                dispatch(setDefaultBtn(false))
                dispatch(setCompleteBtn(true))
            }, 5000)
        }
    }

    const changeFalse = () => {
        dispatch(setModal(false))
        dispatch(
            setImgSrc(
                'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming.JPG'
            )
        )
        dispatch(setActionBtn('시작 !'))
        dispatch(setDefaultBtn(true))
        dispatch(setCompleteBtn(false))
    }

    return (
        <>
            <FlexRow _border={'none'}>
                <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'black',
                        opacity: '0.3',
                        position: 'fixed',
                        top: '0',
                        left: '0',
                    }}
                    onClick={() => {
                        changeFalse()
                    }}
                ></div>
                <ModalEl>
                    <button
                        style={{
                            position: 'absolute',
                            right: '1rem',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            changeFalse()
                        }}
                    >
                        <CancelRounded />
                    </button>
                    <Text _fontSize={'2rem'} _margin={'1.5rem 0px 0.5rem 0px'}>
                        {modalActionName}
                    </Text>
                    <Img
                        _src={modalImg}
                        _width={'13rem'}
                        _height={'18rem'}
                        _bradius={'0px'}
                        _others={'background-color:#fff'}
                    ></Img>
                    {modalDefaultBtn && (
                        <ButtonOutlined
                            _width={'13rem'}
                            _margin={'1rem 0px 0px 0px'}
                            _padding={'0px'}
                            _onClick={() => {
                                changeBtn()
                            }}
                        >
                            <Text _padding={'0.7rem 0px'}>
                                {modalActionBtn}
                            </Text>
                        </ButtonOutlined>
                    )}
                    {modalCompleteBtn && (
                        <ButtonOutlined
                            _width={'13rem'}
                            _margin={'1rem 0px 0px 0px'}
                            _padding={'0px'}
                            _onClick={() => {
                                successAction()
                                modalActionBtn == '닫기' && changeFalse()
                            }}
                        >
                            <Text _padding={'0.7rem 0px'}>
                                {modalActionBtn}
                            </Text>
                        </ButtonOutlined>
                    )}
                </ModalEl>
            </FlexRow>
        </>
    )
}

const ModalEl = styled.div`
    width: 300px;
    height: 30rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 4.3rem;
    left: 1.8rem;
    @media screen and (max-width: 280px) {
        width: 233px;
        left: 1.5rem;
    }
    @media screen and (min-width: 281px) and (max-width: 320px) {
        width: 263px;
    }
    @media screen and (min-width: 361px) and (max-width: 375px) {
        width: 318px;
    }
    @media screen and (min-width: 376px) and (max-width: 414px) {
        width: 353px;
    }
    @media screen and (min-width: 415px) and (max-width: 540px) {
        width: 460px;
        left: 2.5rem;
    }
    @media screen and (min-width: 700px) and (max-width: 768px) {
        width: 673px;
        left: 3rem;
    }
    @media screen and (min-width: 1000px) and (max-width: 1280px) {
        width: 897px;
        left: 4rem;
    }
`

export default CompleteActionModal