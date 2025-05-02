import { useEffect, useRef, useState } from 'react';
import './Header.scss';

export default function Header() {
 const homeTypes = ['OMG!', 'Icons', 'Play', 'Off-the-grid', 'Top cities', 'National parks', 'Cabins', 'Treehouses', 'Beachfront', 'Mansions', 'Castles', 'Amazing Views', 'Countryside', 'New', 'Houseboats', 'Earth homes', 'Domes', 'Caves', 'Historical homes', 'Lake', 'A-frames', 'Lakefront', 'Farms', 'Luxe', 'Trending', 'Islands', 'Dammusi', 'Containers', 'Riads', 'Golfing', 'Hanoks', 'Amazing pools', 'Desert', 'Boats', 'Cycladic homes', 'Camping', 'Rooms', 'Ski in/out', 'Creative spaces', 'Yurts', 'Design', 'Tropical', 'Tiny homes', 'Campers', 'Arctic', 'Surfing', 'Skiing', 'Vineyards', 'Bed & breakfasts', "Chef's kitchens", "Shepherd's huts", 'Top of the world', 'Ryokans', 'Minsus', 'Barns', 'Casas particulares', 'Windmills', 'Grand pianos', 'Towers', 'Adapted', 'Truli', 'Beach']
 const [focusedIndex, setFocusedIndex] = useState(null);
 const [isScrollingDown, setIsScrollingDown] = useState(false);
 const lastScrollY = useRef(0);
 const [showCompactSearch, setShowCompactSearch] = useState(false);

 const navRef = useRef<HTMLUListElement | null>(null);


 function handleFocus(index) {
  setFocusedIndex(index);
 }

 function handleBlur() {
  setFocusedIndex(null);
 }

 useEffect(() => {
  const handleScroll = () => {
   const scrollY = window.scrollY;

   setIsScrollingDown(scrollY > lastScrollY.current);
   lastScrollY.current = scrollY;

   const isAtTop = scrollY < 50;
   setShowCompactSearch(!isAtTop);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, [lastScrollY]);

 const handleScrollLeft = () => {
  console.log('scroll left clicked');
  if (navRef.current) {
   navRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  }
 };

 const handleScrollRight = () => {
  console.log('scroll right clicked');
  if (navRef.current) {
   navRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  }
 };

 const images = Array.from({ length: 62 }, (_, index) => `/assets/asset ${index}.jpeg`)

 return (
  <div className={`header ${showCompactSearch ? 'shrink-header-mid-size' : ""}`}>
   <div className='mobile-header'>
    <button className='start-search-mobile'>
     <img src='/assets/asset 65.svg' />
     Start your search
    </button>
    <div className='sidescroll-menu'>
     <ul>
      {images.map((src, index) => (
       <li key={index}>
        <img src={src} alt={`Asset ${index}`} />
        <p>{homeTypes[index]}</p>
       </li>
      ))}
     </ul>
    </div>
   </div>

   <div className={`mid-header ${showCompactSearch ? 'shorten-header-height' : ""}`}>
    <div className='top-row'>
     <img className='logo' src='/assets/asset 63.svg' />
     <div className={`scrolled-down-search-criteria ${showCompactSearch ? "show" : ""}`}>
      <div>
       <p className='bold'>Anywhere</p>
      </div>
      <div className='divider'></div>
      <div className='bold'>Any week</div>
      <div className='divider'></div>
      <div className='lighter'>Add g...</div>
      <div className='search'>
       <img className='search-img' src='/assets/asset 64.svg' />
      </div>
     </div>

     <div className='header-right-container'>
      <p>Airbnb your home</p>
      <img className='world-icon' src='/assets/asset 66.svg' />
      <div className='user-menu'>
       <img className='hamburger-menu' src='/assets/asset 67.svg' />
       <img className='user-icon' src='/assets/asset 68.svg' />
      </div>
     </div>
    </div>

    <div className={`middle-row ${showCompactSearch ? "fade-out-and-up" : ""}`}>
     {/* these toggle colors and change the bottom row */}
     <p>Homes</p>
     <p>Experiences</p>
    </div>

    <div className={`bottom-row ${showCompactSearch ? "merge-up" : ""}`}>
     <div className='bottom-row-content-container'>


      <div className={`search-criteria-container ${focusedIndex !== null ? 'container-dimmed' : ''}`}>
       <div
        className={`first-div div-hover search-criteria ${focusedIndex === 0 ? 'focused-div' : 'unfocused-div'}`}
        onFocus={() => handleFocus(0)}
        onBlur={handleBlur}
        tabIndex={0}
       >
        <p className='heading'>Where</p>
        <input className='sub-heading' placeholder='Search destinations' />
       </div>
       <div>
        <div className='divider'></div>
       </div>
       <div className={`dates-div overflow-hidden div-hover search-criteria ${focusedIndex === 1 ? 'focused-div' : 'unfocused-div'}`}
        onFocus={() => handleFocus(1)}
        onBlur={handleBlur}
        tabIndex={0}
       >
        <p className='heading'>Check in</p>
        <p className='sub-heading'>Add dates</p>
       </div>
       <div >
        <div className='divider'></div>
       </div>
       <div className={`dates-div overflow-hidden div-hover search-criteria ${focusedIndex === 2 ? 'focused-div' : 'unfocused-div'}`}
        onFocus={() => handleFocus(2)}
        onBlur={handleBlur}
        tabIndex={0}
       >
        <p className='heading'>Check out</p>
        <p className='sub-heading'>Add dates</p>
       </div>
       <div>
        <div className='divider'></div>
       </div>
       <div className={`fourth-div div-hover search-criteria ${focusedIndex === 3 ? 'focused-div' : 'unfocused-div'}`}
        onFocus={() => handleFocus(3)}
        onBlur={handleBlur}
        tabIndex={0}
       >
        <div>
         <p className='heading'>Who</p>
         <p className='sub-heading'>Add guests</p>
        </div>
        <div className='search-img-container'>
         <img className='search-img' src='/assets/asset 65.svg' />
        </div>
       </div>

      </div>
     </div>
    </div>
    <div className='sidescroll-menu'>
     <button className="bttn-left" onClick={() => handleScrollLeft()}>
      <img src='/assets/asset 69.svg' />
     </button>
     <div className='fade-left fade'></div>
     <ul ref={navRef}>
      {images.map((src, index) => (
       <li key={index}>
        <img src={src} alt={`Asset ${index}`} />
        <p>{homeTypes[index]}</p>
       </li>
      ))}
     </ul>
     <div className='fade-right fade'></div>
     <button className='bttn-right' onClick={() => handleScrollRight()}>
      <img src='/assets/asset 70.svg' />
     </button>
    </div>
   </div>

  </div>
 )
}