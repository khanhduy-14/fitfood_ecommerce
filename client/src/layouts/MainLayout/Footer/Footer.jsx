import React from 'react';
import LayoutComponents from '../LayoutComponents/LayoutComponents';
import "./Footer.scss";

export default function Footer() {
    return (
        <FooterWrapper>
            <Footer.Top>    
                <LayoutComponents.Logo />
                <LayoutComponents.Menu/>
                <LayoutComponents.Contact />
            </Footer.Top>
            <Footer.Center />
            <Footer.Bottom />
        </FooterWrapper>
    );
}


function FooterWrapper({ children }) {
    return (
        <div className='footer'>
            <div className="mainWrapper">
            {
                children
            }
            </div>
        </div>
    );

}

function Top({ children }) {
    return (
        <div className="footer__top">
            {children}
        </div>
    );

}

function Center() {
    return (
        <div className="footer__center">
            <a href='https://github.com/tranhakhanhduy'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6.3H14.9935C14.4505 6.3 14.01 6.74 14.01 7.2835V10.7335H18L17.4155 14.532H14.0105V21.5H9.6225V14.532H6V10.7335H9.5755L9.6225 7.1285L9.616 6.4735C9.61078 5.95361 9.70867 5.43784 9.904 4.95601C10.0993 4.47418 10.3882 4.03584 10.754 3.66635C11.1198 3.29686 11.5552 3.00353 12.035 2.80334C12.5148 2.60314 13.0296 2.50004 13.5495 2.5H18V6.3Z" stroke="#EB5757" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>

            </a>
            <a href='https://github.com/tranhakhanhduy'>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z" fill="#EB5757" />
                </svg>
            </a>
            <a href='https://github.com/tranhakhanhduy'>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0834 2.75922C21.0834 2.75922 19.2336 3.85188 18.2051 4.16172C17.653 3.52694 16.9193 3.07702 16.1032 2.87282C15.2871 2.66861 14.428 2.71998 13.642 3.01997C12.856 3.31995 12.1812 3.85409 11.7086 4.55012C11.2361 5.24616 10.9888 6.07053 11.0001 6.91172V7.82838C9.38916 7.87016 7.79292 7.51288 6.35351 6.78838C4.9141 6.06387 3.67621 4.99463 2.75008 3.67588C2.75008 3.67588 -0.916585 11.9259 7.33341 15.5926C5.44556 16.874 3.19664 17.5166 0.916748 17.4259C9.16675 22.0092 19.2501 17.4259 19.2501 6.88422C19.2501 6.62938 19.2244 6.37455 19.1767 6.12338C20.1117 5.20122 21.0834 2.75922 21.0834 2.75922Z" stroke="#EB5757" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>

    );
}

function Bottom() {
    return (
        <div className="footer__bottom body5">
            <span>Bảo mật và điều khoản</span>
            <span>© 2022 Một sản phẩm của KhanhDuy</span>
        </div>
    );
}


Footer.Top = Top;
Footer.Center = Center;
Footer.Bottom = Bottom;

