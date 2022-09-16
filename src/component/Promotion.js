import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

const UURL = [
  { id: 1, url: 'raw3Nu0_mBQ', title: 'IT Technology', des: "IT 기술이 창조하는 승강기 스마트 시스템" },
  { id: 2, url: 'HnHDg8WaRZk', title: 'IT Technology2', des: "IT 기술이 창조하는 승강기 스마트 시스템" },
  { id: 3, url: 'MdnQo5KilmA', title: 'IT Technology3', des: "IT 기술이 창조하는 승강기 스마트 시스템" },
  { id: 4, url: 'KpAPiyThvC4', title: 'IT Technology4', des: "IT 기술이 창조하는 승강기 스마트 시스템" }
]

const Promotion = () => {
  const YTP = useRef();
  const [url, setUrl] = useState("raw3Nu0_mBQ");
  const [on, setOn] = useState(false);
  const [title, setTitle] = useState(0);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: on,
      loop: 1,
      controls: 0,
      showInfo: 0,
      rel: 0,
      mute: 1,
      // playlist: 'raw3Nu0_mBQ',
    }
  }
  return (
    <section className="Promotion csc" >
      <h2>홍보영상</h2>
      <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
      <div className="container">
        <div className="movie">
          <YouTube videoId={url} opts={opts} ref={YTP} className='u' />
          <div className="movie_title">
            {
              UURL[title].title
            }
          </div>
        </div>
        <div className="des">
          {
            UURL.map((you, idx) => {
              return (
                <li key={you.id} onClick={() => (setUrl(you.url), setTitle(idx))} className={title === idx ? "on" : ""}>
                  <div className="tit">{you.title}</div>
                  <p>{you.des}</p>
                </li>
              )
            })
          }
        </div>
      </div>
    </section >
  )
}

export default Promotion;