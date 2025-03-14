import Header from '../Header/Header';
import './Home.scss';



export default function Home() {
 return (
  <div className='home-main-container'>
   <Header />
   <div className='total-price-slider-container'>
    <div className='total-price-slider-desc'>
     <h1>Display total price</h1>
     <p>Includes all fees, before taxes</p>
    </div>
    <div>
     <label className="switch">
      <input type="checkbox"></input>
      <span className="slider round"></span>
     </label>
    </div>
   </div>
   <div className='main-content'>
    {/* have a reusable component for each of the home types here? */}
    <p>Home page</p>
   </div>

  </div>
 )
}