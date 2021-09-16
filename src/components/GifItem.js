const GifItem = ({ title, url }) => {
  return (
    <li className="card animate__animated animate__zoomInDown">
      <img src={url} alt={title} />
      <p className="card__title ">{title}</p>
    </li>
  )
}

export default GifItem
