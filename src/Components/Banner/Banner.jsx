
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css"
import img_1 from "../../../public/Images/childFriend.jpg"
import img_2 from "../../../public/Images/childNeck.jpg"
import img_3 from "../../../public/Images/childmom.jpg"
import img_4 from "../../../public/Images/childPlay.jpg"

const Banner = () => {
    const [sliderRef] = useKeenSlider(
      {
        loop: true,
       
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 2000);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );

  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
            <img className="h-[700px] w-full" src={img_1} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img className="h-[700px] w-full" src={img_2} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img className="h-[700px] w-full" src={img_3} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
            <img className="h-[700px] w-full" src={img_4} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
