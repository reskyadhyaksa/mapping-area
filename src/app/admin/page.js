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


export default function AdminPage() {
    const [ active, setActive ] = useState(true);
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

            <div className='absolute left-10 top-20 flex flex-col bg-[#232323] text-white justify-center'>
                <div className='border-2 border-slate-500 w-fit px-10 py-5 self-center'>
                    <div className='flex flex-row justify-between mb-5'>
                        <div className='flex justify-center'>
                            <h1 className='flex font-bold w-full text-lg'>
                                {active ? <span>Input Field</span> : <span>Tabel List Penduduk</span>}
                            </h1>
                        </div>
                        <button onClick={() => {setActive(!active)}}>
                            <img alt='' src='../rotate.svg' className='w-5 h-5 fill-red-200'/></button>
                    </div>

                    {active ? <InputField/> : 
                    <TablePenduduk/>
                    }
                </div>
            </div>
        </div>
    ) : <></>
}