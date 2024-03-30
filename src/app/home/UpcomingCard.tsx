import { Card } from '@/components/ui/card';
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
export const UpcomingCard = ({ eventName, cityName, date, weather, distanceKm, imgUrl }: EventType) => {
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
        <Card className='w-full shadow-2xl hover:scale-110  transition-transform duration-300 ease-in-out'>
            <div
                className='bg-cover w-full h-60 flex  items-end px-4 rounded-lg'
                style={{
                    backgroundImage: `url('${transformImageUrl(imgUrl)}')`,
                }}
            >
                <div className='w-full bg-black opacity-50 p-2 text-white  '>
                    {date.split('T')[0]}
                </div>
            </div>

            <div className='p-6'>
                <div className='flex items-end'>
                    <div className='text-lg font-bold'>{eventName}</div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-1'><IconLocationDot /><div>{cityName}</div></div>
                    <div className='flex'>{weather} | {Math.floor(parseFloat(distanceKm) / 100)}km</div>
                </div>
            </div>

        </Card>
    )
}
