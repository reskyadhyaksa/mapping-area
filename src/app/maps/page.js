'use client'

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

export default function MapsPage() {
    const containerStyle = {
        width: '100%',
        height: '95vh'
    };
        
    const center = {
        lat: -6.950275687125475, 
        lng: 107.67502524630714
    };


    const options = {
        mapId: 'aa7c7b2e35e22e5e',
        mapTypeControl: false,
        clickableIcons: false,
    }

    const { isLoaded } = useJsApiLoader({
        id: process.env.NEXT_PUBLIC_MAP_ID,
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY
    })
    

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            options={options}
            zoom={15}>
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerF position={{lat:-6.950275687125475, lng:107.67502524630714}} />

        <MarkerF position={{lat:-6.950356471182162, lng:107.6750341243538}} />

        {/** POP UP WINDOW */}
        <div className='absolute w-[400px] text-white top-[5%] left-[5%]'>
            <h1 className='font-bold text-white px-2 py-2 bg-black'>Information Layout</h1>

            <p className='flex w-[100%] justify-between font-regular bg-white px-2 py-1 text-black'>
                <span>Nama Kepala Keluarga : </span>
                <span className='font-bold'>Dave Irawan Hastono</span>
            </p>
            
            <p className='flex w-[100%] justify-between font-regular bg-white px-2 py-1 text-black'>
                <span>Umur Kepala Keluarga : </span>
                <span className='font-bold'>22 Tahun</span>
            </p>

            <p className='flex w-[100%] justify-between font-regular bg-white px-2 py-1 text-black'>
                <span>Nama Anggota Keluarga : </span>
                <div className='flex flex-col gap-1 text-end font-bold'>
                    <p>Farhan W</p>
                    <p>Dafa R</p>
                </div>
            </p>

            <p className='flex w-[100%] justify-between font-regular bg-white px-2 py-1 text-black'>
                <span>Jumlah Anggota Keluarga : </span>
                <span className='font-bold'>2 Orang</span>
            </p>
            <p className='flex w-[100%] font-regular bg-white px-2 py-1 text-black'>
                {/* <span>Alamat Rumah : </span> */}
                <span className='font-bold'>Jalan Sharon Garden No.147</span>
            </p>
        </div>
        <></>
        </GoogleMap>
    ) : <></>
}