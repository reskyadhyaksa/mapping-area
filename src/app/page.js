'use client'

import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/config';
import getAllData from './handler/get_data';
import Supercluster, { ClusterFeature, PointFeature } from 'supercluster';
import "./globals.css"
import { FaAlignJustify, FaHamburger } from 'react-icons/fa';
import filterData from './handler/filter_data';


export default function HomePage() {
    const [ hambState, SetOpenHamb] = useState(false);
    const [ openFilter, SetOpenFilter ] = useState(false);
    const [ openRW, SetOpenRW ] = useState(false);
    const [ RTrumah, setRTrumah ] = useState('ALL');
    const [ dataArray, setDataArray ] = useState([]);
    const [ selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
    const [ centerLat, setCenterLat ] = useState(-6.952064121310866);
    const [ centerLng, setCenterLng ] = useState(107.67364643835181);
    const [ potensiFilter, setPotensiFilter ] = useState([])
    


    const containerStyle = {
        width: '100%',
        height: '93vh'
    };
    
    const center = {
        lat: centerLat, 
        lng: centerLng
    };
    
    
    const options = {
        mapId: 'aa7c7b2e35e22e5e',
        mapTypeControl: false,
        clickableIcons: false,
        minZoom: 6,
        maxZoom: 20,
    }

    const sc = new Supercluster({ radius: 40, maxZoom: options.maxZoom})


    const { isLoaded } = useJsApiLoader({
        id: 'aa7c7b2e35e22e5e',
        googleMapsApiKey: 'AIzaSyAdD0FtCnto1rDPxwoEIlEZxK7rojgwrE8'
    })
    

    const handleMarkerClick = (index) => {
        // setOpenPop(!openPop);
        setSelectedMarkerIndex(index);
        setCenterLat(dataArray[index].koordinate.lat);
        setCenterLng(dataArray[index].koordinate.lon);

    };

    const getData = async () => {
        let temp_array = [];
        const colRef = collection(db, RTrumah);
        const snapshot = await getDocs(colRef);
        const docs = snapshot.docs.map((doc) => doc.data());
    
        docs.forEach((index, i) => {
            const koordinateStr = index.koordinate || '';
            const koorArr = koordinateStr.split(',');
            const trimmedVal = koorArr.map((value) => value.trim());
            let temp_koor = {lat: parseFloat(trimmedVal[0]), lon: parseFloat(trimmedVal[1])}
            let pathname = '';

            if(index.angka_potensi == '1'){
                pathname = 'circle1.png'
            } else if (index.angka_potensi == '2'){
                pathname = 'circle2.png'
            } else if (index.angka_potensi == '3'){
                pathname = 'circle3.png'
            } else if (index.angka_potensi == '4'){
                pathname = 'circle4.png'
            } else if (index.angka_potensi == '5'){
                pathname = 'circle5.png'
            } else if (index.angka_potensi == '4a'){
                pathname = 'circle6.png'
            } else if (index.angka_potensi == '5a'){
                pathname = 'circle7.png'
            } else if (index.angka_potensi == '6'){
                pathname = 'circle8.png'
            } else if (index.angka_potensi == '6b'){
                pathname = 'circle9.png'
            } else if (index.angka_potensi == '7'){
                pathname = 'circle10.png'
            } else if (index.angka_potensi == '7a'){
                pathname = 'circle11.png'
            } else if (index.angka_potensi == '8'){
                pathname = 'circle12.png'
            } else if (index.angka_potensi == '9'){
                pathname = 'circle13.png'
            } else if (index.angka_potensi == '5b'){
                pathname = 'circle14.png'
            } else if (index.angka_potensi == '3a'){
                pathname = 'circle15.png'
            } else if (index.angka_potensi == '6c'){
                pathname = 'circle16.png'
            } else if (index.angka_potensi == '7b'){
                pathname = 'circle17.png'
            } else if (index.angka_potensi == '8a'){
                pathname = 'circle18.png'
            } else if (index.angka_potensi == '9a'){
                pathname = 'circle19.png'
            } else if (index.angka_potensi == '9b'){
                pathname = 'circle20.png'
            } else if (index.angka_potensi == '10'){
                pathname = 'circle21.png'
            } else if (index.angka_potensi == '9c'){
                pathname = 'circle22.png'
            } else if (index.angka_potensi == '10a'){
                pathname = 'circle23.png'
            } else if (index.angka_potensi == '11'){
                pathname = 'circle24.png'
            } else if (index.angka_potensi == '12'){
                pathname = 'circle25.png'
            } else if (index.angka_potensi == '10b'){
                pathname = 'circle26.png'
            } else if (index.angka_potensi == '11a'){
                pathname = 'circle27.png'
            } else if (index.angka_potensi == '12a'){
                pathname = 'circle28.png'
            } else if (index.angka_potensi == '13'){
                pathname = 'circle29.png'
            } else if (index.angka_potensi == '14'){
                pathname = 'circle30.png'
            } else if (index.angka_potensi == '15'){
                pathname = 'circle31.png'
            }
    
    
            temp_array.push({
                id: index.id,
                namaKepala: index.nama_kepala_keluarga,
                umurKepala: index.umur_kepala_keluarga,
                namaAnggota: index.anggota_keluarga,
                alamat: index.alamat,
                jumlahAnggota: index.jumlah_anggota_keluarga,
                koordinate: temp_koor,
                potensi: index.angka_potensi,
                RTName: 'RT01',
                circlePath : pathname,
            })
        })
        
        console.log('V :', temp_array)
        setDataArray(temp_array)
    }

    const handlePotensiFilter = async (e) => {
        const { value, checked } = e.target;
        const updatedPotensiFilter = checked ? [...potensiFilter, value]
            : potensiFilter.filter((item) => item !== value);
        
        setPotensiFilter(updatedPotensiFilter);
        
        // Wait for getAllData to resolve, assuming it returns a Promise
        const baseDataArray = await getAllData();

        // Apply the updated filter to the base data array
        const filteredData = baseDataArray.filter((item) => updatedPotensiFilter.includes(item.potensi));
        console.log('Filtered Data:', filteredData);
        setDataArray(filteredData);
    };

    const clearPotensiFilter = async () => {
        // Uncheck all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        setPotensiFilter([]);

        // Wait for getAllData to resolve, assuming it returns a Promise
        const baseDataArray = await getAllData();
        setDataArray(baseDataArray);
    }

    useEffect(() => {
        const fetchData = async () => {
            let newDataArray;

            if (RTrumah === 'ALL' && potensiFilter.length === 0) {
                newDataArray = await getAllData();
            } else if (RTrumah !== 'ALL' && potensiFilter.length === 0) {
                const baseDataArray = await getAllData();
                const filteredData = baseDataArray.filter(
                    (item) =>
                        (RTrumah === 'ALL' || item.RTName === RTrumah)
                );
                newDataArray = filteredData;

            } else {
                // Apply both RT and potensi filters
                const baseDataArray = await getAllData();
                const filteredData = baseDataArray.filter(
                    (item) =>
                        (RTrumah === 'ALL' || item.RTName === RTrumah) &&
                        (potensiFilter.length === 0 || potensiFilter.includes(item.potensi))
                );
                newDataArray = filteredData;
            }

            setDataArray(newDataArray);
        };

        fetchData();
    }, [RTrumah, potensiFilter]);


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            options={options}
            zoom={16}>
        { /* Child components, such as markers, info windows, etc. */ }
        {dataArray?.map((e, i) => {
            return(
                <div key={i}>
                    <Marker position={{lat: e.koordinate.lat, lng: e.koordinate.lon}} onClick={() => handleMarkerClick(i)} 
                        options={{
                            icon: {
                                url: e.circlePath,
                                fillColor: '#232323',
                                scaledSize: new window.google.maps.Size(10, 10),
                            },
                        }}
                    />
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
        <>
            <div className='absolute flex flex-col left-5 top-5 bg-slate-800 rounded-md px-7 py-3 text-white'>
                <FaAlignJustify onClick={() => SetOpenHamb(true)} className={`fill-white ${hambState && 'hidden'}`}/>
                { hambState &&
                    <>
                        <button onClick={() => SetOpenHamb(false)}>Filter Options</button>
                        <hr className="border-white w-full mt-2 mb-2"/>
                        <button onClick={() => {SetOpenFilter(!openFilter); SetOpenRW(false); getAllData().then((data) => setDataArray(data)); setPotensiFilter([]); setRTrumah('ALL');}} className={`${openFilter && 'bg-white bg-opacity-15'} rounded-md mb-2`}>Potensi</button>
                        <button onClick={() => {SetOpenRW(!openRW); SetOpenFilter(false)}} className={`${openRW && 'bg-white bg-opacity-15'} rounded-md mb-2`}>RT</button>
                        <button onClick={() => {SetOpenRW(false); SetOpenFilter(false); setPotensiFilter([]); setRTrumah('ALL'); getAllData().then((data) => setDataArray(data));}} className={`rounded-md mb-2`}>Refresh</button>
                    </>
                }
            </div>
            {openRW && <div className='absolute flex flex-col left-[12rem] top-[22px] bg-slate-800 rounded-md text-white px-10 py-3'>
                <h1 className='font-bold mb-1 text-md'>FILTER OPTIONS</h1>
                <div className='flex flex-row gap-3'>
                    <div className="flex flex-col place-items-center">
                        <p className="font-bold">ALL</p>
                        <button onClick={() => {setRTrumah('ALL')}} className={`${ RTrumah == 'ALL' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                    </div>
                    <div className="flex flex-col place-items-center">
                        <p className="font-bold">RT01</p>
                        <button onClick={() => {setRTrumah('RT01')}} className={`${ RTrumah == 'RT01' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                    </div>
                    <div className="flex flex-col place-items-center">
                        <p className="font-bold">RT02</p>
                        <button onClick={() => {setRTrumah('RT02')}} className={`${ RTrumah == 'RT02' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                    </div>
                    <div className="flex flex-col place-items-center">
                        <p className="font-bold">RT03</p>
                        <button onClick={() => {setRTrumah('RT03')}} className={`${ RTrumah == 'RT03' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                    </div>
                    <div className="flex flex-col place-items-center">
                        <p className="font-bold">RT04</p>
                        <button onClick={() => {setRTrumah('RT04')}} className={`${ RTrumah == 'RT04' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                    </div>
                    <div className="flex flex-col place-items-center">
                        <p className="font-bold">RT05</p>
                        <button onClick={() => {setRTrumah('RT05')}} className={`${ RTrumah == 'RT05' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                    </div>
                    <div className="flex flex-col place-items-center">
                        <p className="font-bold">RT06</p>
                        <button onClick={() => {setRTrumah('RT06')}} className={`${ RTrumah == 'RT06' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                    </div>
                </div>
            </div> }

            { openFilter && <div className='absolute flex flex-col place-items-center left-[12rem] top-[22px] bg-slate-800 rounded-md text-white px-10 py-3'>
                <h1 className='font-bold'>Filter Potensi Options</h1>
                <hr className="border-white w-full mt-2 mb-3"/>
                <div className='flex gap-8'>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='1' onChange={handlePotensiFilter}/>
                            <p>1</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='2' onChange={handlePotensiFilter}/>
                            <p>2</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='3' onChange={handlePotensiFilter}/>
                            <p>3</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='4' onChange={handlePotensiFilter}/>
                            <p>4</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='5' onChange={handlePotensiFilter}/>
                            <p>5</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='6' onChange={handlePotensiFilter}/>
                            <p>6</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='7' onChange={handlePotensiFilter}/>
                            <p>7</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='8' onChange={handlePotensiFilter}/>
                            <p>8</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='9' onChange={handlePotensiFilter}/>
                            <p>9</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='10' onChange={handlePotensiFilter}/>
                            <p>10</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='11' onChange={handlePotensiFilter}/>
                            <p>11</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='12' onChange={handlePotensiFilter}/>
                            <p>12</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='13' onChange={handlePotensiFilter}/>
                            <p>13</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='14' onChange={handlePotensiFilter}/>
                            <p>14</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='15' onChange={handlePotensiFilter}/>
                            <p>15</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='3a' onChange={handlePotensiFilter}/>
                            <p>3a</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='4a' onChange={handlePotensiFilter}/>
                            <p>4a</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='5a' onChange={handlePotensiFilter}/>
                            <p>5a</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='7a' onChange={handlePotensiFilter}/>
                            <p>7a</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='8a' onChange={handlePotensiFilter}/>
                            <p>8a</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='9a' onChange={handlePotensiFilter}/>
                            <p>9a</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='10a' onChange={handlePotensiFilter}/>
                            <p>10a</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='11a' onChange={handlePotensiFilter}/>
                            <p>11a</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='12a' onChange={handlePotensiFilter}/>
                            <p>12a</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='5b' onChange={handlePotensiFilter}/>
                            <p>5b</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='6b' onChange={handlePotensiFilter}/>
                            <p>6b</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='7b' onChange={handlePotensiFilter}/>
                            <p>7b</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='9b' onChange={handlePotensiFilter}/>
                            <p>9b</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='10b' onChange={handlePotensiFilter}/>
                            <p>10b</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='6c' onChange={handlePotensiFilter}/>
                            <p>6c</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' value='9c' onChange={handlePotensiFilter}/>
                            <p>9c</p>
                        </div>
                    </div>
                </div>
                <button onClick={clearPotensiFilter} className='self-start mt-4 bg-white bg-opacity-30 px-4 rounded-sm'>Clear All</button>

            </div>}
        
        </>
        </GoogleMap>
    ) : <></>
}