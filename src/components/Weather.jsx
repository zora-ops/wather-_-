import React, { useEffect } from 'react'
import Input from './input'
import Card from './card'
import Nav from './navbar'
import useFetch from '../hooks/useFetch'
import { useState, useMemo } from 'react'
import useLocation from '../hooks/useLocation'


const Weather = () => {

  const [url, setUrl] = useState('');
  const [cityQuery, setCityQuery] = useState('')
  const { lat, lon } = useLocation();

  useEffect(() => {
    if (lat && lon && !cityQuery) {
      setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ad5e8e9d596e4f6203ee3aa78474753d`)
    } else if (cityQuery) {
      setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=ad5e8e9d596e4f6203ee3aa78474753d`)
    }
  }, [lat, lon, cityQuery])

  const options = useMemo(() => ({}), [])
  const { data, pending, error } = useFetch(url, options);



  console.log(data);

  if (!data) {
    return <div>Loading data please wait</div>
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover filter blur-sm scale-105 z-0"
        autoPlay
        loop
        muted
        playsInline
        src="public/backgrounds/clear.mp4"
      />

      <div className="relative z-10">
        <Nav />
      </div>
      <div className="relative z-10 flex justify-center items-center mt-10">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 p-6 text-white">
          <h1 className="text-2xl font-semibold mb-2">{data.name}</h1>
          <p className="text-sm uppercase tracking-wide text-white/80">Country: {data.sys.country}</p>
          <p className="text-lg font-medium mt-1">{data.weather[0].main}</p>
        </div>
      </div>

      <div className="relative z-10 flex justify-center mt-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-4">
          <Input onclick={setCityQuery} />
        </div>
      </div>
    </div>

  )
}

export default Weather