import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoPlay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoints:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoints:576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },

        ]
    }
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          dolore eaque quasi dolor eius aliquam necessitatibus laborum sit?
          Accusamus officiis cum fugiat quos cumque laborum molestiae, atque
          totam sint?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          dolore eaque quasi dolor eius aliquam necessitatibus laborum sit?
          Accusamus officiis cum fugiat quos cumque laborum molestiae, atque
          totam sint?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Laura James</h6>
                <p>Planner</p>
            </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          dolore eaque quasi dolor eius aliquam necessitatibus laborum sit?
          Accusamus officiis cum fugiat quos cumque laborum molestiae, atque
          totam sint?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Daniel James</h6>
                <p>Manager</p>
            </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat
          dolore eaque quasi dolor eius aliquam necessitatibus laborum sit?
          Accusamus officiis cum fugiat quos cumque laborum molestiae, atque
          totam sint?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Alexia Russel</h6>
                <p>Marketer</p>
            </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
