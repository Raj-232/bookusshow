import { IconLocationDot } from '@/lib/Icons';
import React from 'react'
interface EventType {
  eventName: string,
  cityName: string,
  date: string,
  weather: string,
  distanceKm: string,
  imgUrl: string,
}
export const ShowReccommended = ({ eventName, cityName, date, weather, distanceKm, imgUrl }: EventType) => {
  function transformImageUrl(imgUrl: any) {
    if (!imgUrl) return '';
    const fileId = imgUrl.match(/\/d\/([^/]+)\/view/);
    if (fileId && fileId[1]) {
      return `https://drive.google.com/thumbnail?id=${fileId[1]}&sz=w1000`;
    } else {
      return ''; // Return empty string if fileId is not found
    }
  }
 
  return (
    <div
      className='h-96 w-80 p-6 flex flex-col justify-end space-y-2  text-white bg-cover text-sm'
      style={{
        backgroundImage: `url('${transformImageUrl(imgUrl)}')`,
      }}
    >
      <div className='flex justify-between items-end'>
        <div className='text-lg font-bold w-40'>{eventName}</div>
        <div className=''>
          {date.split('T')[0]}
        </div>
      
      </div>
      <div className='flex justify-between'>
      <div className='flex items-center space-x-1'><IconLocationDot/><div>{cityName}</div></div>
        <div className='flex'>{weather} | {Math.floor(parseFloat(distanceKm)/ 100)}km</div>
      </div>
    </div>
  )
}
