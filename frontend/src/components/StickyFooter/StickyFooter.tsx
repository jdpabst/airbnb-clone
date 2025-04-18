import { useEffect, useState } from 'react';
import './StickyFooter.scss';

export default function StickyFooter() {
 const [isScrollingDown, setIsScrollingDown] = useState(false)
 const [lastScrollY, setLastScrollY] = useState(0);
 const [atTop, setAtTop] = useState(true);
 const [bottomMargin, setBottomMargin] = useState("0px");

 useEffect(() => {
  const handleScroll = () => {
   const scrollY = window.scrollY;

   setIsScrollingDown(scrollY > lastScrollY);
   setAtTop(scrollY === 0); // Check if at top of the page
   setLastScrollY(scrollY);
   setBottomMargin(scrollY > lastScrollY ? "-25px" : "25px");
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, [lastScrollY]);

 return (

  <div>

   <div className='mobile-footer-container'>

    <button style={{ marginBottom: bottomMargin }} className={`map-bttn-container ${isScrollingDown ? "slide-in" : atTop ? "fade-out slide-out" : "stay-on-top"}`}>
     <p>Map</p>
     <img src='/assets/asset 72.svg' />
    </button>



    <div className={`sticky-footer-container ${isScrollingDown ? "slide-down" : atTop ? "slide-up" : ""}`}>
     <ul>
      <li>
       <img src='/assets/big-search-glass.svg' />
       <p>Explore</p>
      </li>
      <li>
       <img src='/assets/wishlist.svg' />
       <p>Wishlists</p>
      </li>
      <li>
       <img src='/assets/log-in.svg' />
       <p>Log in</p>
      </li>
     </ul>
    </div>


   </div>

   <button className={`map-bttn-mid-screen-size`}>
    <p>Show map</p>
    <img src='/assets/asset 72.svg' />
   </button>
  </div>


 )
}