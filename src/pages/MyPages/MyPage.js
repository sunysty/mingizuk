import React, { useState } from 'react'
import { history } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { changeNav } from '../../redux/modules/userSlice'

//* sytle
import '../../styles/mypage/mypage.scss'
import Icon from '../../components/icons/Icon'
import { loginCheckMD } from '../../redux/async/user'

const MyPage = (props) => {
    const [userInfo, setUserInfo] = useState('')
    const dispatch = useDispatch()
    const nickName = useSelector((state) => state.user.userInfo.nickName)
    const pwd = useSelector((state) => state.user.userInfo.userPw)
    const email = useSelector((state) => state.user.userInfo.userEmail)
    const charList = useSelector((state) => state.character.charList)
    const curChara =
        charList.length > 0 && charList[charList.length - 1].charName
    React.useEffect(() => {
        dispatch(loginCheckMD())
        dispatch(changeNav('mypage'))
    }, [])

    console.log('?>', charList[charList?.length - 1]?.charSrc)
    return (
        <>
            <div className="mypage-layout">
                <section className="contents">
                    <div className="user-profile">
                        <img
                            className="user-image"
                            src={charList[charList?.length - 1]?.charSrc}
                        />
                        <div className="user-info">
                            <div style={{ display: 'flex' }}>
                                <span className="user-nickname">
                                    {nickName}
                                </span>
                                <Icon
                                    className="user-info-update"
                                    _onClick={() => {
                                        history.push('/users/info')
                                    }}
                                    icon="ic_edit"
                                    size="24px"
                                    color="white"
                                />
                            </div>
                            <span className="user-email">{email}</span>
                        </div>
                    </div>

                    <ul className="mypage-list">
                        <li onClick={() => history.push('/users/collection')}>
                            <span>내 캐릭터 콜렉션</span>
                            <div style={{ marginRight: '0.3rem' }}>
                                <Icon
                                    icon="right-tri"
                                    size="14px"
                                    color="A5ABB0"
                                />
                            </div>
                        </li>
                        <li onClick={() => history.push('/users/moim')}>
                            <span>내 모임</span>
                            <div style={{ marginRight: '0.3rem' }}>
                                <Icon
                                    icon="right-tri"
                                    size="14px"
                                    color="A5ABB0"
                                />
                            </div>
                        </li>
                        <li>
                            <a
                                className="error-mail"
                                href="mailto:miraculous0006@gmail.com"
                                target="_blank"
                            >
                                <span>오류 문의</span>
                            </a>
                            <div style={{ marginRight: '0.3rem' }}>
                                <Icon
                                    icon="right-tri"
                                    size="14px"
                                    color="A5ABB0"
                                />
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default MyPage
