import './header.scss'

export default function Header() {
 const homeTypes = ['OMG!', 'Icons', 'Play', 'Off-the-grid', 'Top cities', 'National parks', 'Cabins', 'Treehouses', 'Beachfront', 'Mansions', 'Castles', 'Amazing Views', 'Countryside', 'New', 'Houseboats', 'Earth homes', 'Domes', 'Caves', 'Historical homes', 'Lake', 'A-frames', 'Lakefront', 'Farms', 'Luxe', 'Trending', 'Islands', 'Dammusi', 'Containers', 'Riads', 'Golfing', 'Hanoks', 'Amazing pools', 'Desert', 'Boats', 'Cycladic homes', 'Camping', 'Rooms', 'Ski in/out', 'Creative spaces', 'Yurts', 'Design', 'Tropical', 'Tiny homes', 'Campers', 'Arctic', 'Surfing', 'Skiing', 'Vineyards', 'Bed & breakfasts', "Chef's kitchens", "Shepherd's huts", 'Top of the world', 'Ryokans', 'Minsus', 'Barns', 'Casas particulares', 'Windmills', 'Grand pianos', 'Towers', 'Adapted', 'Trulli', 'Beach']

 const images = Array.from({ length: 62 }, (_, index) => `/assets/asset ${index}.jpeg`)

 return (
  <div className='header'>
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
        <p>{homeTypes[index]}</p> {/* Display corresponding text */}
       </li>
      ))}
     </ul>
    </div>
   </div>

  </div>
 )
}