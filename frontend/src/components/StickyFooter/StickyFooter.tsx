import './StickyFooter.scss';

export default function StickyFooter() {


 return (
  <div className='sticky-footer-container'>
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
 )
}