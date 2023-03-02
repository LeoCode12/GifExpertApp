import { useFetchGifs } from '../hooks/useFetchGifs'
import GifItem from './GifItem'

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)
  console.log(isLoading);

  return (
    <div className='grid-gif'>
      <div className='header-grid'>
        <h3>{category}</h3>
      </div>

      <div className='card-grid'>
        {images.map((image) =>
        (<GifItem
          key={image.id}
          {...image}
        />)
        )}
      </div>

    </div>
  )
}

export default GifGrid
