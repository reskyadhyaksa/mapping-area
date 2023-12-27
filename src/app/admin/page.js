/* eslint-disable @next/next/no-img-element */
'use client'

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { SubmitForm } from './submit_form';
import { TablePenduduk } from './table_penduduk';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import AddKoordinat from './form';
import InputField from './form';


export default function AdminPage() {
    const [ active, setActive ] = useState(true);
    const [ data, setData ] = useState([]);


    const getData =  async () => {
        const temp_array = [];
        const colRef = collection(db, 'RT01');
        const snapshot = await getDocs(colRef);
        const docs = snapshot.docs.map((doc) => doc.data());
        
        docs.forEach((index, i) => {
            temp_array.push({
                namaKepala: index.nama_kepala_keluarga,
                umurKepala: index.umur,
                namaAnggota: index.nama_anggota_keluarga,
                jumlahAnggota: index.jumlah_anggota_keluarga,
                koordinate: index.latitude+', '+index.longitude,
                potensi: index.angka_potensi
            })
        })
        console.log(temp_array)
        
        setData(temp_array);
    }

    const containerStyle = {
        width: '100%',
        height: '50vh'
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

    useEffect(() => {
        getData()
    }, [])

    return isLoaded ? (
        <div className='flex w-full justify-between h-[95vh]'>
            <div className='flex flex-col w-[50%] p-20 text-center justify-center'>
                <h1 className='font-bold mb-2'>Maps Overview</h1>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    options={options}
                    zoom={15}
                    className={`border-2`}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
                </GoogleMap>
            </div>

            <div className='flex flex-col w-[50%] h-full justify-center'>
                <div className='border-2 border-slate-500 w-fit px-10 py-5 self-center'>
                    <div className='flex flex-row justify-between mb-5'>
                        <div className='flex justify-center'>
                            <h1 className='flex font-bold'>Input Field</h1>
                        </div>
                        <button onClick={() => setActive(!active)}><img alt='' src='../rotate.svg' className='w-5 h-5 fill-black'/></button>
                    </div>

                    {active ? <InputField/> : 
                    <p>A</p>
                    }
                </div>
            </div>
        </div>
    ) : <></>
}