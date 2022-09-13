import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const SLIDE = [
  { id: 1, content: '현대엘리베이터 스마트 테크놀로지 체험', desc: '2021 한국국제승강기엑스포 VR투어' },
  { id: 2, content: '현대엘리베이터 스마트 테크놀로지 체험', desc: '2021 한국국제승강기엑스포 VR투어' },
  { id: 3, content: '현대엘리베이터 스마트 테크놀로지 체험', desc: '2021 한국국제승강기엑스포 VR투어' },
]

const MainVisual = () => {
  const setting = {
    arrows: false,
    dots: true,
  }
  return (
    <section className="MainVisual" >
      <Slider className="main_slider" {...setting}>
        {SLIDE.map(el => {
          return (
            <figure key={el.id} className={'itm0' + el.id}>
              <div className="inner">
                <h2>{el.content}</h2>
                <p>{el.desc}</p>
                <a href="/">더 보기</a>
              </div>
            </figure>
          )
        })}

      </Slider>
    </section>
  )
}

export default MainVisual;