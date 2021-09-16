import { useFetchGifs } from '../hooks/useFetchGifs'
import GifItem from './GifItem'

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category)

  return (
    <div className="grid-container">
      <h3 className="animate__animated animate__fadeInLeft">{category}</h3>
      {loading && <p className="animate__animated animate__flash">{'Cargando...'}</p>}
      {''}
      <ol className="card-grid">
        {data.map(gif => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </ol>
    </div>
  )
}

export default GifGrid
