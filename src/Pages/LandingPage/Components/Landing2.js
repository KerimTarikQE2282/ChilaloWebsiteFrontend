import React, { useState, useEffect } from 'react';
import wwd from '../../../Resources/whatweDo.png';

function Landing2() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageHeight = 500; // Adjust the image height as per your requirements
  const maxOffset = 200; // Adjust the maximum offset you want to allow

  // Calculate the parallax offset
  const parallaxOffset = Math.max((1 - scrollPosition / imageHeight) * maxOffset, 0);

  return (
    <div>
      <div className='whatWeDo' style={{ transform: `translateX(${parallaxOffset}px)` }}>
        <div className='content'>
          <div className='wwd1'>
            <h1>What We Do</h1>
            <p>
              Magna adipisicing veniam qui magna commodo amet occaecat laboris nostrud fugiat deserunt cillum deserunt
              ex. Ullamco ipsum officia qui fugiat. Aute id quis elit eu ullamco labore exercitation est eu non aliqua
              proident officia ad. Consequat do et dolore non aliquip cupidatat tempor aliqua laborum dolor. Cupidatat
              voluptate occaecat minim ad duis incididunt eu aliqua cillum non exercitation voluptate aliqua eu.
              Adipisicing laboris qui ex est labore do dolor nulla enim. Eu veniam aute qui proident excepteur esse ad
              fugiat voluptate aliquip do in nostrud veniam. Laborum irure ad dolore ipsum. Officia consectetur tempor
              enim eu commodo sint nisi. Reprehenderit ut ex velit cillum fugiat ipsum quis mollit nulla minim est ad.
              Pariatur quis in dolore ex aute adipisicing sunt esse consectetur elit laboris magna irure velit.
            </p>
          </div>
          <div>
            <img src={wwd} alt='What We Do' className='wwd-image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing2;