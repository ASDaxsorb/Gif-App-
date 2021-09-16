export const getGifs = async category => {
  const END_POINT = `https://api.giphy.com/v1/gifs/search?api_key=bZhQPhh6hzFwcvX3WxhAvLmScIDwxjJW&q=${encodeURI(
    category
  )}&limit=5`

  const response = await fetch(END_POINT)

  const { data } = await response.json()
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.original.url,
    }
  })

  return gifs
}
