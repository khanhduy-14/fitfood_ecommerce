import React from 'react'
import { useNavigate } from 'react-router-dom'
import unauthorizedImage from '../../assets/images/401.png'
import { ThreeDimensionButton } from '../../components/Buttons/Buttons'
import path from '../../constants/path'
import './Unauthorized.scss'
export default function Unauthorized() {
  const navigate = useNavigate()

  return (
    <div className='unauthorized'>
      <img src={unauthorizedImage} alt='' />
      <span className='body3'>Bạn không có quyền truy cập vào trang này</span>
      <ThreeDimensionButton handleClickButton={() => navigate(path.home)}>Trở về trang chủ</ThreeDimensionButton>
    </div>
  )
}
