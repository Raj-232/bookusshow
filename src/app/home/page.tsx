"use client"
import React, { useEffect, useState, useRef } from "react";
import { ShowReccommended } from "./ShowRecommended";
import { useGetRecommendedEventsQuery, useGetUpcomingEventsQuery } from "@/store/api/eventsApi";
import { IconArrowRight } from "@/lib/Icons";
import { UpcomingCard } from "./UpcomingCard";
import Loading from "../loading";

type EventType = {
    eventName: string;
    cityName: string;
    date: string;
    weather: string;
    distanceKm: string;
    imgUrl: string;
};

export default function Home() {
    const [page, setPage] = useState(1);
    const [recData, setRecData] = useState<EventType[]>([]);
    const [upData, setUpData] = useState<EventType[]>([]);
    const { data, isFetching } = useGetRecommendedEventsQuery();
    const { data: eventData, refetch, isFetching: fetching } = useGetUpcomingEventsQuery(page);
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight) {
                console.log("itsend");
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        refetch();
    }, [page]);
    useEffect(() => {
        // If it's not the first page, append new data to existing data
        if (page > 1 && eventData?.events) {
            setUpData((prevData) => [...prevData, ...eventData.events]);
        } else {
            setUpData(eventData?.events || []);
        }
    }, [eventData]);
    useEffect(() => {
        setRecData(data?.events);
    }, [data, eventData]);


    return (
        <div className="" >
            {(fetching || isFetching) && <Loading />}
            <div className="bg-[url('/images/Banner.svg')] bg-cover h-screen flex items-center  text-white">
                <div className="space-y-6">
                    <div className="px-2 lg:px-40 lg:text-6xl text-3xl font-bold text-center">Discover Exciting Events Happening Near You-Stay Tuned for Updates!</div>
                    <div className="px-2 lg:px-64 text-center text-xl">Cras mattis consectetur purus sit amet fermentum. purus sit commodo cursus magna, tetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</div>
                </div>
            </div>
            <div className="relative bottom-32 text-white space-y-4">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-2 text-xl font-bold"><div>Recommended Shows</div> <IconArrowRight /></div>
                    <div className="underline">sell all</div>
                </div>
                <div className="flex lg:pl-44 overflow-x-scroll  custom-scrollbar">
                    {recData?.map((item, index) => (
                        <div key={index} className="flex">
                            <ShowReccommended eventName={item.eventName} cityName={item.cityName} date={item.date} weather={item.weather} distanceKm={item.distanceKm} imgUrl={item.imgUrl} />
                        </div>
                    ))}
                </div>
                <div className="text-black md:px-20 p-2">
                    <div className="flex p-4">
                        <div className="flex space-x-2 text-xl font-bold"><div>Upcoming Shows</div> <IconArrowRight /></div>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                        {upData?.map((item, index) => (
                            <div key={index} className="flex">
                                <UpcomingCard eventName={item.eventName} cityName={item.cityName} date={item.date} weather={item.weather} distanceKm={item.distanceKm} imgUrl={item.imgUrl} />
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
}
