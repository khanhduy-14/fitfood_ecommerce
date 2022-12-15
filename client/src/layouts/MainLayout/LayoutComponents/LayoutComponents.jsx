import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import path from '../../../constants/path'
import AccountDropdown from '../../../features/account/AccountDropdown'
import './LayoutComponents.scss'
export default function LayoutComponents() {
  return null
}

function Logo() {
  return (
    <Link to={path.home}>
      <div className='layout__logo'>
        <div className='layout__logo--image'>
          <img src={logo} alt='Fitfood logo' />
        </div>
      </div>
    </Link>
  )
}

function Menu() {
  const [coords, setCoords] = useState()
  const location = useLocation()
  useEffect(() => {
    const activeItem = document.querySelector('.layout__menu--item.active')
    if (activeItem) {
      setCoords({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth
      })
    } else {
      setCoords({
        left: 0,
        width: 0
      })
    }
  }, [location])
  return (
    <ul className='layout__menu body4'>
      <NavLink to={path.home} className='layout__menu--item' end>
        Trang chủ
      </NavLink>
      {/* <NavLink to={path.calorieCaculator} className='layout__menu--item'>
        Tính calo
      </NavLink> */}
      <NavLink to={path.menu} className='layout__menu--item'>
        Đặt hàng
      </NavLink>
      <NavLink to={path.faqs} className='layout__menu--item'>
        FAQs
      </NavLink>
      {/* <NavLink to={path.about} className='layout__menu--item'>
        Về chúng tôi
      </NavLink> */}
      <div
        className='layout__menu--underBorder'
        style={{ left: `${coords?.left}px`, width: `${coords?.width}px` }}
      ></div>
    </ul>
  )
}

function Function() {
  return (
    <div className='layout__function'>
      <div className='layout__function--cart'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M6.53031 9.46967C6.23741 9.17678 5.76254 9.17678 5.46965 9.46967C5.17675 9.76256 5.17675 10.2374 5.46965 10.5303L6.06965 11.1303C9.34488 14.4056 14.6551 14.4056 17.9303 11.1303L18.5303 10.5303C18.8232 10.2374 18.8232 9.76256 18.5303 9.46967C18.2374 9.17678 17.7625 9.17678 17.4696 9.46967L16.8696 10.0697C14.1802 12.7591 9.81975 12.7591 7.13031 10.0697L6.53031 9.46967Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 0.25C9.07852 0.25 6.66617 2.42852 6.29849 5.25L5.63592 5.25C4.64023 5.24997 3.81454 5.24994 3.16653 5.34049C2.48529 5.43567 1.87316 5.64585 1.40763 6.16597C0.942096 6.68609 0.800806 7.31769 0.781433 8.00527C0.763004 8.65932 0.854212 9.47995 0.964197 10.4695L1.27209 13.2405C1.50212 15.3109 1.68278 16.937 1.98963 18.2008C2.30415 19.4962 2.77194 20.5072 3.64039 21.2845C4.50967 22.0625 5.57115 22.4154 6.90054 22.5847C8.19848 22.75 9.84662 22.75 11.9465 22.75H12.0535C14.1533 22.75 15.8015 22.75 17.0994 22.5847C18.4288 22.4154 19.4903 22.0625 20.3596 21.2845C21.228 20.5072 21.6958 19.4962 22.0103 18.2008C22.3172 16.937 22.4978 15.311 22.7279 13.2406L23.0358 10.4695C23.1457 9.47996 23.2369 8.65931 23.2185 8.00527C23.1991 7.31769 23.0579 6.68609 22.5923 6.16597C22.1268 5.64585 21.5147 5.43567 20.8334 5.34049C20.1854 5.24994 19.3597 5.24997 18.364 5.25L17.7015 5.25C17.3339 2.42858 14.9214 0.25 12 0.25ZM12 1.75C14.0913 1.75 15.8299 3.26063 16.184 5.25H7.81589C8.16998 3.26068 9.90869 1.75 12 1.75ZM2.52532 7.16635C2.65603 7.02031 2.86344 6.89741 3.3741 6.82605C3.90604 6.75173 4.62603 6.75 5.69126 6.75H18.3087C19.3739 6.75 20.0939 6.75173 20.6258 6.82605C21.1365 6.89741 21.3439 7.02031 21.4746 7.16635C21.6053 7.31239 21.7046 7.5321 21.7191 8.04752C21.7342 8.58441 21.6565 9.30019 21.5388 10.3589L21.243 13.0215C21.0057 15.1569 20.8342 16.6873 20.5527 17.8469C20.2762 18.9857 19.9145 19.6697 19.3592 20.1668C18.8047 20.6631 18.0816 20.9475 16.9099 21.0967C15.7177 21.2486 14.165 21.25 12 21.25C9.83495 21.25 8.28228 21.2486 7.09007 21.0967C5.91831 20.9475 5.19529 20.6631 4.64077 20.1668C4.08543 19.6697 3.72378 18.9857 3.44728 17.8469C3.16574 16.6873 2.99425 15.1569 2.75698 13.0215L2.46114 10.3589C2.3435 9.30019 2.26571 8.58441 2.28084 8.04752C2.29536 7.5321 2.39461 7.31239 2.52532 7.16635Z'
            fill='white'
          />
        </svg>
      </div>
      <AccountDropdown />
    </div>
  )
}

function Contact() {
  return (
    <div className='layout__contact'>
      <span className='body3'>Contact:</span>
      <h4>
        <a href='tel:0333521488'>0333521488</a>
      </h4>
    </div>
  )
}
LayoutComponents.Logo = Logo
LayoutComponents.Menu = Menu
LayoutComponents.Function = Function
LayoutComponents.Contact = Contact
