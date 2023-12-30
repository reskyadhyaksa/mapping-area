/* eslint-disable @next/next/no-img-element */
'use client'

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { TablePenduduk } from './table_penduduk';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import AddKoordinat from './form';
import InputField from './form';
import TestingElement from './testing';
import { useRouter } from 'next/navigation';
import { GridCloseIcon } from '@mui/x-data-grid';


export default function AdminPage() {
    const router = useRouter();
    const [ active, setActive ] = useState(false);
    const [ koordinate, setKoordinate ] = useState([
        { ltd: null, lgt: null }])
        
    const { isLoaded } = useJsApiLoader({
        id: 'aa7c7b2e35e22e5e',
        googleMapsApiKey: 'AIzaSyAdD0FtCnto1rDPxwoEIlEZxK7rojgwrE8'
    })

    const getKoordinate = async () => {
        let temp_array = [];

        let colRef = collection(db, 'RT01');
        let snapshot = await getDocs(colRef);
        let docs = snapshot.docs.map((doc) => doc.data());

        docs.forEach((index, i) => {
            temp_array.push({
                koordinate: index.koordinate,
            })
        })

        colRef = collection(db, 'RT02');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());

        docs.forEach((index, i) => {
            temp_array.push({
                koordinate: index.koordinate,
            })
        })

        colRef = collection(db, 'RT03');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());

        docs.forEach((index, i) => {
            temp_array.push({
                koordinate: index.koordinate,
            })
        })

        colRef = collection(db, 'RT04');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());

        docs.forEach((index, i) => {
            temp_array.push({
                koordinate: index.koordinate,
            })
        })

        colRef = collection(db, 'RT05');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());

        docs.forEach((index, i) => {
            temp_array.push({
                koordinate: index.koordinate,
            })
        })

        colRef = collection(db, 'RT06');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());

        docs.forEach((index, i) => {
            temp_array.push({
                koordinate: index.koordinate,
            })
        })

        // Split values associated with the 'koordinate' key
        const valuesArray = temp_array.map((obj) => {
            const koordinateString = obj.koordinate || '';
            // Split the string into an array using ',' as the delimiter
            const stringValues = koordinateString.split(',');
            
            // Remove leading and trailing whitespaces from each value
            const trimmedValues = stringValues.map((value) => value.trim());
            
            return trimmedValues;
        });
        
        // console.log('V :', valuesArray)
        setKoordinate(valuesArray)
    }
    
    useEffect(() => {
        getKoordinate()
        // console.log(data)
    }, [])

    return isLoaded ? (
        <div className='flex w-full justify-between h-[93vh]'>
            <GoogleMap
                    mapContainerStyle={{width: '100%', height: '93vh'}}
                    center={{lat: -6.951863811807195, lng: 107.67325614768446}}
                    options={{
                        mapId: 'aa7c7b2e35e22e5e',
                        mapTypeControl: false,
                        clickableIcons: false,}}
                    zoom={17}
                    className={`border-2`}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    {koordinate.map((e, i) => {
                        return(
                            <div key={i}>
                                <MarkerF key={e} position={{lat: parseFloat(e[0]), lng: parseFloat(e[1])}}/>
                                {/* {console.log(e[1])} */}
                            </div>
                        )
                    })}
            </GoogleMap>

            <div className='absolute left-10 top-20 flex flex-col  rounded-md text-white justify-center'>
                <div className='flex gap-2 mb-5'>
                    <button className='bg-[#232323] rounded-md px-5 py-1' onClick={() => setActive(true)}>Add Data</button>
                    <button className='bg-[#232323] rounded-md px-5 py-1' onClick={() => router.refresh()}>Refresh Maps</button>
                    <button className='bg-[#232323] rounded-md px-5 py-1' onClick={() => router.push('/admin/table')}>Data list table</button>
                </div>
                {active && 
                    <div className='bg-[#f3f3f3] rounded-md border-2 border-black pl-10 pr-8 py-5 text-black'>
                        <div className="flex justify-between">
                            <h1 className='font-bold text-xl'>Input New Data</h1>
                            <GridCloseIcon onClick={() => setActive(false)}/>
                        </div>
                        <hr className="border-black w-full mt-2 mb-5"/>
                        <InputField/>
                    </div>
                }
            </div>
            
        </div>
        
    ) : <></>
}