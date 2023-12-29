// 'use client'

// import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase/config'; 
// import getAllData from './get_data';
// import Supercluster, { ClusterFeature, PointFeature } from 'supercluster';

// export default function MapsPage() {
//     const [ RTrumah, setRTrumah ] = useState('ALL');
//     const [ dataArray, setDataArray ] = useState([]);
//     const [ selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
//     const [ centerLat, setCenterLat ] = useState(-6.952064121310866);
//     const [ centerLng, setCenterLng ] = useState(107.67364643835181);

    
//     const containerStyle = {
//         width: '100%',
//         height: '93vh'
//     };
    
//     const center = {
//         lat: centerLat, 
//         lng: centerLng
//     };
    
    
//     const options = {
//         mapId: 'aa7c7b2e35e22e5e',
//         mapTypeControl: false,
//         clickableIcons: false,
//         minZoom: 6,
//         maxZoom: 20,
//     }

//     const sc = new Supercluster({ radius: 40, maxZoom: options.maxZoom})


//     const { isLoaded } = useJsApiLoader({
//         id: process.env.NEXT_PUBLIC_MAP_ID,
//         googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY
//     })
    

//     const handleMarkerClick = (index) => {
//         // setOpenPop(!openPop);
//         setSelectedMarkerIndex(index);
//         setCenterLat(dataArray[index].koordinate.lat);
//         setCenterLng(dataArray[index].koordinate.lon);

//     };

//     const getData = async () => {
//         let temp_array = [];
//         const colRef = collection(db, RTrumah);
//         const snapshot = await getDocs(colRef);
//         const docs = snapshot.docs.map((doc) => doc.data());
    
//         docs.forEach((index, i) => {
//             const koordinateStr = index.koordinate || '';
//             const koorArr = koordinateStr.split(',');
//             const trimmedVal = koorArr.map((value) => value.trim());
//             let temp_koor = {lat: parseFloat(trimmedVal[0]), lon: parseFloat(trimmedVal[1])}
    
//             temp_array.push({
//                 namaKepala: index.nama_kepala_keluarga,
//                 umurKepala: index.umur_kepala_keluarga,
//                 namaAnggota: index.anggota_keluarga,
//                 alamat: index.alamat,
//                 jumlahAnggota: index.jumlah_anggota_keluarga,
//                 koordinate: temp_koor,
//                 potensi: index.angka_potensi
//             })
//         })
        
//         console.log('V :', temp_array)
//         setDataArray(temp_array)
//     }


//     useEffect(() => {
//         getData()
//         if(RTrumah == 'ALL'){
//             getAllData().then((data) => setDataArray(data));
//         }
//     }, [RTrumah])


//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             options={options}
//             zoom={16}>
//         { /* Child components, such as markers, info windows, etc. */ }
//         {dataArray.map((e, i) => {
//             return(
//                 <div key={i}>
//                     <MarkerF position={{lat: e.koordinate.lat, lng: e.koordinate.lon}} onClick={() => handleMarkerClick(i)}/>
//                     { selectedMarkerIndex === i && (
//                         <InfoWindowF 
//                             position={{lat: e.koordinate.lat, lng: e.koordinate.lon}}
//                             options={{pixelOffset: new window.google.maps.Size(0, -40)}}>
//                             <div className='flex flex-col justify-center'>
//                                 <h1 className='font-bold mb-3 text-center'>Marker Information</h1>
//                                 <section>Nama Kepala Keluarga <br/>
//                                     <span className='font-bold'>{e.namaKepala}
//                                     {e.umurKepala > 0 && <span> ( {e.umurKepala} Tahun ) </span>}
//                                     </span>
//                                 </section>

//                                 <section className='mt-2'>Alamat Rumah<br/>
//                                     { e.alamat != "" ? 
//                                         <p className='font-bold'>{e.alamat}</p>
//                                         : <p className='font-bold'>Tidak ada data alamat</p>}
//                                 </section>
                                
//                                 <section className='mt-2'>Angka Potensi<br/>
//                                     { e.potensi > 0 ? 
//                                         <p className='font-bold'>{e.potensi}</p>
//                                         : <p className='font-bold'>Tidak ada data potensi</p>}
//                                 </section>  

//                                 <section className='mt-2'>Anggota Keluarga<br/>
//                                     { e.namaAnggota[0].name != "" ? 
//                                         <div className='flex flex-col font-bold'>
//                                             {e.namaAnggota.map((anggota, anggotaIndex) => (
//                                             <p key={anggotaIndex}>
//                                                 {anggota.name}{' '}
//                                                 {anggota.age != '' && (
//                                                 <span> ( {anggota.age} Tahun )</span>
//                                                 )}
//                                             </p>
//                                             ))}
//                                         </div>
//                                         : <p className='font-bold'>Tidak ada data anggota</p>}
//                                 </section>  

//                             </div>
//                         </InfoWindowF>
//                     )}
//                 </div>
//             )
//         })}
//         <>
//             <div className='absolute flex flex-col right-20 bottom-10 bg-slate-800 rounded-md text-white px-10 py-3'>
//                 <h1 className='font-bold'>Filter Options</h1>
//                 <div className='flex flex-row gap-3'>
//                     <div className="flex flex-col place-items-center">
//                         <p className="font-bold">ALL</p>
//                         <button onClick={() => {setRTrumah('ALL')}} className={`${ RTrumah == 'ALL' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
//                     </div>
//                     <div className="flex flex-col place-items-center">
//                         <p className="font-bold">RT01</p>
//                         <button onClick={() => {setRTrumah('RT01')}} className={`${ RTrumah == 'RT01' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
//                     </div>
//                     <div className="flex flex-col place-items-center">
//                         <p className="font-bold">RT02</p>
//                         <button onClick={() => {setRTrumah('RT02')}} className={`${ RTrumah == 'RT02' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
//                     </div>
//                     <div className="flex flex-col place-items-center">
//                         <p className="font-bold">RT03</p>
//                         <button onClick={() => {setRTrumah('RT03')}} className={`${ RTrumah == 'RT03' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
//                     </div>
//                     <div className="flex flex-col place-items-center">
//                         <p className="font-bold">RT04</p>
//                         <button onClick={() => {setRTrumah('RT04')}} className={`${ RTrumah == 'RT04' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
//                     </div>
//                     <div className="flex flex-col place-items-center">
//                         <p className="font-bold">RT05</p>
//                         <button onClick={() => {setRTrumah('RT05')}} className={`${ RTrumah == 'RT05' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
//                     </div>
//                     <div className="flex flex-col place-items-center">
//                         <p className="font-bold">RT06</p>
//                         <button onClick={() => {setRTrumah('RT06')}} className={`${ RTrumah == 'RT06' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 md:mt-1 mt-2 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
//                     </div>
//                 </div>
//             </div>
        
//         </>
//         </GoogleMap>
//     ) : <></>
// }