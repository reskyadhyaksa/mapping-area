/* eslint-disable @next/next/no-img-element */
'use client'

import { GoogleMap, useJsApiLoader, MarkerF, Marker, InfoWindowF } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { TablePenduduk } from './table_penduduk';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import AddKoordinat from './form';
import InputField from './form';
import TestingElement from './testing';
import { useRouter } from 'next/navigation';
import { GridCloseIcon } from '@mui/x-data-grid';
import getAllData from '../handler/get_data';


export default function AdminPage() {
    const router = useRouter();
    const [ active, setActive ] = useState(false);
    const [ dataArr, setAllData ] = useState([]);
    const [ selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
    const [ centerLat, setCenterLat ] = useState(-6.952064121310866);
    const [ centerLng, setCenterLng ] = useState(107.67364643835181);
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

    const handleMarkerClick = (index) => {
        // setOpenPop(!openPop);
        setSelectedMarkerIndex(index);
        setCenterLat(dataArr[index].koordinate.lat);
        setCenterLng(dataArr[index].koordinate.lon);

    };

    const fetchData = async () => {
        try {
            const result = await getAllData();
            setAllData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    useEffect(() => {
        // getKoordinate()
        fetchData()
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
                    className={`border-2`}>
                    { /* Child components, such as markers, info windows, etc. */ }
                    {dataArr.map((e, i) => {
                        return(
                            <div key={i}>
                                <Marker position={{lat: e.koordinate.lat, lng: e.koordinate.lon}} onClick={() => handleMarkerClick(i)} 
                                    options={{
                                        icon: {
                                            url: e.circlePath,
                                            fillColor: '#232323',
                                            scaledSize: new window.google.maps.Size(10, 10),
                                        },
                                }}/>
                                { selectedMarkerIndex === i && (
                                    <InfoWindowF className={'bg-black'}
                                        position={{lat: e.koordinate.lat, lng: e.koordinate.lon}}
                                        options={{pixelOffset: new window.google.maps.Size(0, -40)}}>
                                        <div className='flex flex-col justify-center'>
                                            <h1 className='font-bold mb-3 text-center'>Marker Information</h1>
                                            <section>Nama Kepala Keluarga <br/>
                                                <span className='font-bold'>{e.namaKepala}
                                                {e.umurKepala > 0 && <span> ( {e.umurKepala} Tahun ) </span>}
                                                </span>
                                            </section>

                                            <section className='mt-2'>Alamat Rumah<br/>
                                                { e.alamat != "" ? 
                                                    <p className='font-bold'>{e.alamat}</p>
                                                    : <p className='font-bold'>Tidak ada data alamat</p>}
                                            </section>
                                            
                                            <section className='mt-2'>Angka Potensi<br/>
                                                { e.potensi != '' ? 
                                                    <p className='font-bold'>{e.potensi}</p>
                                                    : <p className='font-bold'>Tidak ada data potensi</p>}
                                            </section>  

                                            <section className='mt-2'>Anggota Keluarga<br/>
                                                { e.namaAnggota[0].name != "" ? 
                                                    <div className='flex flex-col font-bold'>
                                                        {e.namaAnggota.map((anggota, anggotaIndex) => (
                                                        <p key={anggotaIndex}>
                                                            {anggota.name}{' '}
                                                            {anggota.age != '' && (
                                                            <span> ( {anggota.age} Tahun )</span>
                                                            )}
                                                        </p>
                                                        ))}
                                                    </div>
                                                    : <p className='font-bold'>Tidak ada data anggota</p>}
                                            </section>  

                                        </div>
                                    </InfoWindowF>
                                )}
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