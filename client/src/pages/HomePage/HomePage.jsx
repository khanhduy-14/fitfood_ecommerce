import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Scrollbar, Autoplay } from 'swiper'
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
import EnviromentalImage1 from '../../assets/images/enviromental1.jpeg'
import EnviromentalImage2 from '../../assets/images/enviromental2.jpeg'
import EnviromentalImage3 from '../../assets/images/enviromental3.jpeg'

import ProductImage1 from '../../assets/images/product1.jpeg'

import './HomePage.scss'
import ProductItem from '../../components/ProductItem'
import path from '../../constants/path'
import TestimonialItem from './components/TestimonialItem'
import { howitworks, partners, testimonials } from './constants'
import TitleSection from '../../components/TitleSection'

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
              {[...Array(10).keys()].map((item) => {
                return (
                  <SwiperSlide>
                    <ProductItem image={ProductImage1} name='Gạo lứt Rong Biển' price='100,000' unit='Hộp' />
                  </SwiperSlide>
                )
              })}
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
      {/* Enviromental */}
      <section className='enviromental'>
        <div className='mainWrapper container'>
          <TitleSection
            title='Chung tay bảo vệ môi trường'
            styleGroup={{ alignItems: 'center' }}
            styleText={{ color: '#141414' }}
          />
          <div className='enviromental-list'>
            <div className='enviromental-list__item'>
              <div className='enviromental-list__item--image'>
                <img src={EnviromentalImage1} alt='' />
              </div>
              <p className='enviromental-list__item--content'>
                Nhà cung cấp duy nhất sử dung túi Nylon sinh học tự hủy thân thiện với môi trường
              </p>
            </div>
            <div className='enviromental-list__item'>
              <div className='enviromental-list__item--image'>
                <img src={EnviromentalImage2} alt='' />
              </div>
              <p className='enviromental-list__item--content'>
                Rửa sạch lại hộp nhựa đen để nhận hoàn tiền 10,000 cho mỗi 10 hộp
              </p>
            </div>
            <div className='enviromental-list__item'>
              <div className='enviromental-list__item--image'>
                <img src={EnviromentalImage3} alt='' />
              </div>
              <p className='enviromental-list__item--content'>
                Fitfood chỉ cung cấp 01 bộ muỗng nĩa mỗi ngày để giảm thiểu rác thải nhựa
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className='testimonial'>
        <div className='mainWrapper container'>
          <TitleSection
            title='Câu chuyện khách hàng'
            styleGroup={{ alignItems: 'center' }}
            styleText={{ color: '#ffffff' }}
          ></TitleSection>
          <p className='description'> Những câu chuyện thành công từ khách hàng thân yêu của Fitfood</p>
          <Swiper
            loop={true}
            pagination={{
              dynamicBullets: true
            }}
            slidesPerView={3}
            grabCursor
            spaceBetween={40}
            initialSlide={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true
            }}
            centeredSlides={true}
            modules={[Autoplay, Pagination]}
          >
            {testimonials &&
              testimonials.map((testimonial) => {
                return (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialItem name={testimonial.name} job={testimonial.job} avatar={testimonial.image}>
                      {testimonial.content}
                    </TestimonialItem>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      </section>
      {/* Parner */}
      <section className='partners'>
        <div className='mainWrapper container'>
          <TitleSection title='Đối tác' styleGroup={{ alignItems: 'center' }} styleText={{ color: '#141414' }} />
          <p>Chúng tôi hợp tác với các nhà cung cấp hàng đầu để đảm bảo chất lượng trải nghiệm tốt nhất</p>
          <div className='partners__list'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            {partners &&
              partners.map((partner) => {
                return (
                  <div className='partners__list--item' key={partner.id}>
                    <img src={partner.image} alt='Partner' />
                  </div>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}
