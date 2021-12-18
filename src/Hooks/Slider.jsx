import React from "react";

const Slider = ({ carouselItems, ...rest }) => {
  const [active, setActive] = React.useState(0);
  

  React.useEffect(() => {
    let scrollInterval = null;
    scrollInterval = setTimeout(() => {
      setActive((active + 1) % carouselItems.length);
    }, 4000);
    return () => clearTimeout(scrollInterval);
  });

  return (
    <div className="carousel">
      {carouselItems.map((item, index) => {
        const key = Math.random() * (100 - 1) + 1;
        const activeClass = active === index ? ' visible' : '';
        return React.cloneElement(item, {
          ...rest,
          className: `carousel-item${activeClass}`,
          key: key
        });
      })}
    </div>
  );
}
export default Slider;