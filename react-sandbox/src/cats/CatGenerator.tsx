import { useState, useEffect } from 'react'
import { getCat, voteCat } from './catService'

export default function CatGenerator() {
  const [catImage, setCatImage] = useState<string | null>(null);
  const [catId, setCatId] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean | null>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function loadImage() {
    try {
      setLoading(true);
      setErrorMessage(null);
      const data = await getCat();
      setCatId(data.id);
      setCatImage(data.url);
    } catch {
      setErrorMessage('Error while loading the Image');
    } finally {
      setLoading(false);
    }
  }

  async function vote(value: number) {
    try {
      if (catId) await voteCat(catId, value);
      if (value === 1) alert('You liked this cat successfully');
      if (value === -1) alert('You disliked this cat successfully');
    } catch (error) {
      alert('Error while sending the vote');
      console.log(error);
    } finally {
      loadImage();
    }
  }
 
  useEffect(() => {
    async function load() {
      await loadImage();
    }
    load();
  }, [])
  // the callback inside useEffect() must return undefined or a cleaning function
  // that's why we have to wrap the loadImage() call inside an async function first

  const customImgStyle: React.CSSProperties = { display: 'block', maxWidth: '80%' }

  return (
    <main>
      <h1>The Cat Generator</h1>
      <p>The main goal was to learn about fetch() and assyncronous tools</p>
      <button onClick={loadImage}>Generate new cat</button>
      <button onClick={() => vote(1)}>Like</button>
      <button onClick={() => vote(-1)}>Dislike</button>
      {
        loading ?
          (<p>Loading...</p>) :
          (catImage ? (<img src={catImage} style={customImgStyle}></img>) : (<p>No image was loaded...</p>))
      }
      {
        errorMessage && (<p> {errorMessage} </p>)
      }
    </main>
  )
}