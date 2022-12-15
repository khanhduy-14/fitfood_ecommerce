import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { v4 as uuidv4 } from 'uuid'
import BannerItem from './components/BannerItem'
import { AcceptButton } from '../../components/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'

import BannerImage1 from '../../assets/images/slider_homepage1.jpeg'
import BannerImage2 from '../../assets/images/slider_homepage2.jpeg'
import BannerImage3 from '../../assets/images/slider_homepage3.jpeg'
import BannerImage4 from '../../assets/images/slider_homepage4.jpeg'
import ProductImage1 from '../../assets/images/product1.jpeg'
import './HomePage.scss'
import TitleSection from './components/TitleSection'
import ProductItem from '../../components/ProductItem'
import path from '../../constants/path'

const howitworks = [
  {
    id: uuidv4(),
    image: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18'
          stroke='#141414'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z'
          stroke='#141414'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path d='M22 22L21 21' stroke='#141414' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
        <path d='M8 7H16' stroke='#141414' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
        <path d='M9 11H15' stroke='#141414' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      </svg>
    ),
    name: 'Chọn Gói Ăn',
    desc: 'Chọn gói ăn phù hợp với nhu cầu của bạn và điền đầy đủ thông tin giao hàng'
  },
  {
    id: uuidv4(),
    image: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18.9702 22.75H4.97021C1.22021 22.75 1.22021 20.67 1.22021 19V18C1.22021 17.04 2.01021 16.25 2.97021 16.25H20.9702C21.9302 16.25 22.7202 17.04 22.7202 18V19C22.7202 20.67 22.7202 22.75 18.9702 22.75ZM2.97021 17.75C2.83021 17.75 2.72021 17.86 2.72021 18V19C2.72021 20.64 2.72021 21.25 4.97021 21.25H18.9702C21.2202 21.25 21.2202 20.64 21.2202 19V18C21.2202 17.86 21.1102 17.75 20.9702 17.75H2.97021Z'
          fill='#141414'
        />
        <path
          d='M20.72 17.75H3.27002C2.86002 17.75 2.52002 17.41 2.52002 17V13C2.52002 8.9 5.43002 5.3 9.43002 4.45C10.02 4.32 10.64 4.25 11.27 4.25H12.72C13.36 4.25 13.98 4.32 14.57 4.45C18.57 5.31 21.47 8.91 21.47 13V17C21.47 17.41 21.14 17.75 20.72 17.75ZM4.02002 16.25H19.97V13C19.97 9.61 17.57 6.63 14.25 5.91C13.76 5.8 13.25 5.75 12.72 5.75H11.27C10.75 5.75 10.24 5.8 9.75002 5.91C6.43002 6.62 4.02002 9.6 4.02002 13V16.25Z'
          fill='#141414'
        />
        <path
          d='M9.59 5.93C9.26 5.93 8.96 5.71 8.87 5.38C8.79 5.09 8.75 4.8 8.75 4.5C8.75 2.71 10.21 1.25 12 1.25C13.79 1.25 15.25 2.71 15.25 4.5C15.25 4.8 15.21 5.09 15.13 5.38C15.03 5.76 14.65 6 14.25 5.91C13.76 5.8 13.25 5.75 12.72 5.75H11.27C10.75 5.75 10.24 5.8 9.75 5.91C9.7 5.92 9.65 5.93 9.59 5.93ZM11.27 4.25H12.72C13.06 4.25 13.41 4.27 13.74 4.31C13.65 3.43 12.9 2.75 12 2.75C11.1 2.75 10.36 3.43 10.26 4.31C10.6 4.27 10.93 4.25 11.27 4.25Z'
          fill='#141414'
        />
        <path
          d='M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z'
          fill='#141414'
        />
      </svg>
    ),
    name: 'Fitfood nấu',
    desc: 'Chúng tôi lựa chọn những nguyên liệu tốt nhất và nấu trong bếp công nghiệp hiện đại'
  },
  {
    id: uuidv4(),
    image: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999'
          stroke='#141414'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12'
          stroke='#141414'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z'
          stroke='#141414'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z'
          stroke='#141414'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z'
          stroke='#141414'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path d='M2 8H8' stroke='#141414' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
        <path d='M2 11H6' stroke='#141414' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
        <path d='M2 14H4' stroke='#141414' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      </svg>
    ),
    name: 'Giao hàng',
    desc: 'Đội ngũ giao hàng của Fitfood sẽ giao tận nơi các phần ăn cho bạn mỗi ngày'
  },
  {
    id: uuidv4(),
    image: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25ZM12 10.25C11.04 10.25 10.25 11.04 10.25 12C10.25 12.96 11.04 13.75 12 13.75C12.96 13.75 13.75 12.96 13.75 12C13.75 11.04 12.96 10.25 12 10.25Z'
          fill='#292D32'
        />
        <path
          d='M18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V9.5C17.75 9.09 18.09 8.75 18.5 8.75C18.91 8.75 19.25 9.09 19.25 9.5V14.5C19.25 14.91 18.91 15.25 18.5 15.25Z'
          fill='#292D32'
        />
        <path
          d='M5 22.75C2.38 22.75 0.25 20.62 0.25 18C0.25 15.38 2.38 13.25 5 13.25C7.62 13.25 9.75 15.38 9.75 18C9.75 20.62 7.62 22.75 5 22.75ZM5 14.75C3.21 14.75 1.75 16.21 1.75 18C1.75 19.79 3.21 21.25 5 21.25C6.79 21.25 8.25 19.79 8.25 18C8.25 16.21 6.79 14.75 5 14.75Z'
          fill='#292D32'
        />
        <path
          d='M3.99989 19.75C3.74989 19.75 3.49988 19.62 3.35988 19.39C3.14988 19.04 3.25989 18.57 3.61989 18.36L4.3799 17.9C4.4499 17.86 4.49989 17.77 4.49989 17.69V16.76C4.49989 16.35 4.83989 16.01 5.24989 16.01C5.65989 16.01 5.99989 16.35 5.99989 16.76V17.69C5.99989 18.3 5.66992 18.88 5.14992 19.19L4.38991 19.65C4.26991 19.72 4.12989 19.75 3.99989 19.75Z'
          fill='#292D32'
        />
        <path
          d='M17 20.75H8.5C8.09 20.75 7.75 20.41 7.75 20C7.75 19.59 8.09 19.25 8.5 19.25H17C19.86 19.25 21.25 17.86 21.25 15V9C21.25 6.14 19.86 4.75 17 4.75H7C4.14 4.75 2.75 6.14 2.75 9V15.2C2.75 15.61 2.41 15.95 2 15.95C1.59 15.95 1.25 15.61 1.25 15.2V9C1.25 5.35 3.35 3.25 7 3.25H17C20.65 3.25 22.75 5.35 22.75 9V15C22.75 18.65 20.65 20.75 17 20.75Z'
          fill='#292D32'
        />
      </svg>
    ),
    name: 'Thưởng thức',
    desc: 'Không cần suy nghĩ, shopping hay nấu nướng dầu mỡ, chỉ cần hâm và thưởng thức!'
  }
]

export default function HomePage() {
  const navigate = useNavigate()

  const handleToShopping = () => {
    navigate(path.menu)
  }
  return (
    <div className='homepage'>
      {/*Banner*/}
      <section className='banner'>
        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          grabCursor
          slidesPerView={1}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <BannerItem image={BannerImage1}>
              <h1>
                <small>Kế hoạch đồ ăn sạch cho </small>
                một lối sống lành mạnh
              </h1>
              <AcceptButton styleButton={{ marginTop: '12px' }} onClick={handleToShopping}>
                Đặt Ngay
              </AcceptButton>
            </BannerItem>
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem image={BannerImage2}>
              <h1>
                Trải nghiệm đồ ăn sạch
                <small>tươi ngon giàu dinh dưỡng</small>
              </h1>
              <AcceptButton styleButton={{ marginTop: '12px' }} onClick={handleToShopping}>
                Đặt Ngay
              </AcceptButton>
            </BannerItem>
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem image={BannerImage4}>
              <h1>
                <small>Nhà cung cấp đồ ăn sạch</small>
                lớn nhất Sài Gòn
              </h1>
              <AcceptButton
                styleButton={{ marginTop: '12px', height: '4px', padding: '0px', width: '200px' }}
                onClick={handleToShopping}
              ></AcceptButton>
            </BannerItem>
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem image={BannerImage3}>
              <h1>
                Giải pháp HEALTHY FOOD
                <small>giao tận nơi</small>
              </h1>
              <AcceptButton
                styleButton={{ marginTop: '12px', height: '4px', padding: '0px', width: '200px' }}
                onClick={handleToShopping}
              ></AcceptButton>
            </BannerItem>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* About */}
      <section className='about'>
        <div className='about__content mainWrapper'>
          <TitleSection title='Về chúng tôi' />
          <p>
            Fitfood VN cung cấp các phần ăn lành mạnh hàng tuần giúp bạn duy trì một lối sống khỏe. Chúng tôi tập trung
            vào chế độ ăn cân bằng được thiết kế chuyên biệt để hỗ trợ bạn kiểm soát cân nặng một cách hiệu quả nhất.
          </p>
          <p>
            Nếu bạn đang tìm kiếm những bữa ăn ngon và tốt cho sức khỏe được chuẩn bị sẵn ở Saigon thì Fitfood là một
            lựa chọn tối ưu. Thực đơn đa dạng với hơn 100 món của chúng tôi có thể giúp bạn thưởng thức mà không ngán
            trong hơn 1 tháng.
          </p>
        </div>
        <div className='about__image' />
        <div className='about__background-black ' />
        <div className='about__background ' />
      </section>
      {/* HowItWork */}
      <section className='how-it-work'>
        <div className='how-it-work-main mainWrapper container'>
          <TitleSection title='Cách đặt hàng' styleGroup={{ alignItems: 'center' }} styleText={{ color: '#141414' }} />
          <div className='how-it-work-main__list'>
            {howitworks &&
              howitworks.map((howitwork) => {
                return (
                  <div className='how-it-work-main__list--item' key={uuidv4()}>
                    {howitwork.image}
                    <span>{howitwork.name}</span>
                    <p>{howitwork.desc}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      {/* Product */}
      <section className='product'>
        <div className='mainWrapper container'>
          <TitleSection
            title='Sản phẩm tiêu biểu'
            styleGroup={{ alignItems: 'center' }}
            styleText={{ color: '#ffffff' }}
            styleBorder={{ borderColor: '#ffffff' }}
          />
          <p>Fitfood cung cấp nhiều gói ăn và thực phẩm đa dạng phù hợp với mọi nhu cầu của bạn</p>
          <div className='product-list'>
            <div className='product-list-homepage__prev'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.528 6.46731C10.2338 6.17573 9.75889 6.17784 9.46731 6.47204C9.17573 6.76624 9.17784 7.24111 9.47204 7.53269L11.235 9.28C11.9505 9.98914 12.4413 10.4772 12.7734 10.8907C13.096 11.2924 13.2067 11.5504 13.2361 11.7815C13.2546 11.9266 13.2546 12.0734 13.2361 12.2185C13.2067 12.4496 13.096 12.7076 12.7734 13.1093C12.4413 13.5228 11.9505 14.0109 11.235 14.72L9.47204 16.4673C9.17784 16.7589 9.17573 17.2338 9.46731 17.528C9.75889 17.8222 10.2338 17.8243 10.528 17.5327L12.3227 15.7539C12.9987 15.084 13.5511 14.5364 13.9429 14.0485C14.3504 13.5412 14.6453 13.0263 14.7241 12.4082C14.7586 12.1371 14.7586 11.8629 14.7241 11.5918C14.6453 10.9737 14.3504 10.4588 13.9429 9.95146C13.5511 9.46359 12.9987 8.91604 12.3227 8.24609L10.528 6.46731Z'
                  fill='#141414'
                />
              </svg>
            </div>

            <Swiper
              slidesPerView={4}
              grabCursor
              spaceBetween={40}
              navigation={{
                prevEl: '.product-list-homepage__prev',
                nextEl: '.product-list-homepage__next'
              }}
              modules={[Navigation, Scrollbar]}
              scrollbar={{
                hide: true
              }}
            >
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
              </SwiperSlide>
            </Swiper>
            <div className='product-list-homepage__next'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.528 6.46731C10.2338 6.17573 9.75889 6.17784 9.46731 6.47204C9.17573 6.76624 9.17784 7.24111 9.47204 7.53269L11.235 9.28C11.9505 9.98914 12.4413 10.4772 12.7734 10.8907C13.096 11.2924 13.2067 11.5504 13.2361 11.7815C13.2546 11.9266 13.2546 12.0734 13.2361 12.2185C13.2067 12.4496 13.096 12.7076 12.7734 13.1093C12.4413 13.5228 11.9505 14.0109 11.235 14.72L9.47204 16.4673C9.17784 16.7589 9.17573 17.2338 9.46731 17.528C9.75889 17.8222 10.2338 17.8243 10.528 17.5327L12.3227 15.7539C12.9987 15.084 13.5511 14.5364 13.9429 14.0485C14.3504 13.5412 14.6453 13.0263 14.7241 12.4082C14.7586 12.1371 14.7586 11.8629 14.7241 11.5918C14.6453 10.9737 14.3504 10.4588 13.9429 9.95146C13.5511 9.46359 12.9987 8.91604 12.3227 8.24609L10.528 6.46731Z'
                  fill='#141414'
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
