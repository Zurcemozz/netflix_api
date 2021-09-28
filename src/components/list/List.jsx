import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useRef, useState } from "react";
import ListItem from '../listItem/listItem';
import './list.scss';

//pinasa ko ung prop from Home prop to list prop... line 35 Home
const List = ({list}) => {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
        <div className="list">
            <span className="list-title">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIos className="sliderArrow left" onClick={() => handleClick("left")} 
                style={{display: !isMoved && 'none'}}
                />
                 <div div className="container" ref={listRef}>
                  {/* after getting the data from home.jsx. With the use of axios.get(), kinuha natin ung mga content na galing sa API natin, ung cinreate nating list doon....After makuha natin ung list doon, pinasa natin siya as a prop. Line 36 list={list}
                  after natin makuha yun mismong list. Kasi ung nanduon, nirerender lang natin kung ilang list meron tayo para makita sa page, then dito kinukuha natin ung mga info duon. So ung list -> pinasok pa natin at kinuha natin ung list.content, tapos minap antin siya individually para render bawat isang ID ng movie
                  */}
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}

                </div>
                <ArrowForwardIos className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
