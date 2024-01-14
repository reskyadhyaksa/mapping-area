'use client'

/* eslint-disable @next/next/no-img-element */
import { addDoc, collection } from "firebase/firestore";
import { app, db } from "../firebase/config";
import { useEffect, useState } from "react";
import Validation from "./validation";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'



export default function InputField() {
    const router = useRouter();
    const [ MsgState, setMsgState] = useState('')
    const [ MsgState2, setMsgState2] = useState('')

    //! SET VARIABLE FORM
    const [ namaKepala, setNamaKepala ] = useState('');
    const [ umurKepala, setUmurKepala ] = useState(null);
    const [ Alamat, setAlamat ] = useState('');
    const [ Koordinate, setKoordinate ] = useState('');
    const [ AngkaPotensi, setAngkaPotensi ] = useState(null);
    const [ AngkaPotensi2, setAngkaPotensi2 ] = useState(null);
    const [ finalPotensi, setFinalPotensi ] = useState(null);
    const [ RTrumah, setRTrumah ] = useState('RT01');
    
    const [ AnggotaFields, setAnggotaFields ] = useState([
        { name: '', age: '' },
    ])


    const handleAnggotaChange = (event, index) => {
        let data = [...AnggotaFields];
        data[index][event.target.name] = event.target.value;
        setAnggotaFields(data);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(AnggotaFields)
    }

    const submit = async (e) => {
        setMsgState(Validation(namaKepala))
        if( namaKepala != '' && Koordinate != ''){
            try {
                await addDoc(collection(db, RTrumah), {
                    nama_kepala_keluarga: namaKepala,
                    umur_kepala_keluarga: umurKepala,
                    alamat: Alamat,
                    anggota_keluarga: AnggotaFields,
                    jumlah_anggota: AnggotaFields.length,
                    angka_potensi: finalPotensi,
                    koordinate: Koordinate,
                })
    
                setNamaKepala('')
                setUmurKepala(null)
                setAlamat('')
                setKoordinate('')
                setAngkaPotensi(1)
                setAnggotaFields([{ name: '', age: ''},])
                console.log('Data added successfully')
                setMsgState('Berhasil Menambahkan Data...')

            } catch (error){
                console.error("Error adding data:", error);
    
            }
        } else {
            setMsgState2('Koordinate Rumah Required')
            setNamaKepala('');
            setUmurKepala(null);
            setAlamat('');
            setKoordinate('');
            setAngkaPotensi(1);
            setAnggotaFields([
                { name: '', age: '' },
            ])
        }
    }

    const addFields = () => {
        let object = {
            name: '',
            age: ''
        }

        setAnggotaFields([...AnggotaFields, object])
    }

    const removeFields = (index) => {
        let data = [...AnggotaFields];
        data.splice(index, 1)
        setAnggotaFields(data)
    }
    
    const notify = () => {
        toast.success('Data added successfully...', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const refreshMsgState = () => {
        setMsgState('')
        router.push('/admin/table')
        location.reload()
    }

    const handlePotensi = (value) => {
        if (AngkaPotensi === null) {
            // If no button is active, activate the first button
            setAngkaPotensi(value);
        } else if (AngkaPotensi2 === null) {
            // If only one button is active, activate the second button
            setAngkaPotensi2(value);
        } else {
            // If two buttons are active, deactivate the earliest clicked button and activate the new button
            setAngkaPotensi(AngkaPotensi2);
            setAngkaPotensi2(value);
        }
    };

    useEffect(() => {
        if (AngkaPotensi === '1' && AngkaPotensi2 === '2') {
            setFinalPotensi('3a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '3' || AngkaPotensi === '3' && AngkaPotensi2 === '1') {
            setFinalPotensi('4a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '4' || AngkaPotensi === '4' && AngkaPotensi2 === '1') {
            setFinalPotensi('5a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '5' || AngkaPotensi === '5' && AngkaPotensi2 === '1') {
            setFinalPotensi('6');
        } else if (AngkaPotensi === '2' && AngkaPotensi2 === '3' || AngkaPotensi === '3' && AngkaPotensi2 === '2') {
            setFinalPotensi('5b');
        } else if (AngkaPotensi === '2' && AngkaPotensi2 === '4' || AngkaPotensi === '4' && AngkaPotensi2 === '2') {
            setFinalPotensi('6b');
        } else if (AngkaPotensi === '2' && AngkaPotensi2 === '5' || AngkaPotensi === '5' && AngkaPotensi2 === '2') {
            setFinalPotensi('7');
        } else if (AngkaPotensi === '3' && AngkaPotensi2 === '4' || AngkaPotensi === '4' && AngkaPotensi2 === '3') {
            setFinalPotensi('7a');
        } else if (AngkaPotensi === '3' && AngkaPotensi2 === '5' || AngkaPotensi === '5' && AngkaPotensi2 === '3') {
            setFinalPotensi('8');
        } else if (AngkaPotensi === '4' && AngkaPotensi2 === '5' || AngkaPotensi === '5' && AngkaPotensi2 === '4') {
            setFinalPotensi('9');
        } else if (AngkaPotensi === '1') {
            setFinalPotensi('1');
        } else if (AngkaPotensi === '2') {
            setFinalPotensi('2');
        } else if (AngkaPotensi === '3') {
            setFinalPotensi('3');
        } else if (AngkaPotensi === '4') {
            setFinalPotensi('4');
        } else if (AngkaPotensi === '5') {
            setFinalPotensi('5');
        }
    }, [AngkaPotensi, AngkaPotensi2])

    return (
        <>
            <div className="flex flex-col gap-2">
                {/** Nama Kepala Keluarga */}
                <div>
                    <p className="w-full font-bold">Kepala Keluarga</p>
                    <div className="flex flex-row">
                    <input required placeholder="Nama" min={1} value={namaKepala} onChange={(e) => setNamaKepala(e.target.value)}
                        className="nama border-2 outline-none rounded-md w-[200px] px-2 text-black" type="text"/>
                    <input required placeholder="Umur" 
                        value={umurKepala} type="number" onChange={(e) => setUmurKepala(e.target.value)}
                        className="nama border-2 outline-none rounded-md w-20 px-2 ml-1 text-black 
                            [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                    </div>
                    {MsgState === 'Nama Kepala Keluarga Required' && <p className="text-xs text-red-600 font-bold ml-1">{MsgState}</p>}
                </div>

                {/** Alamat Rumah */}
                <div><p className="w-full font-bold">Alamat</p>
                <input required placeholder="Alamat" value={Alamat} onChange={(e) => setAlamat(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/></div>
                
                {/** Koordinat Rumah */}
                <div><p className="w-full font-bold">Koordinat</p>
                <input required placeholder="Koordinat" value={Koordinate} onChange={(e) => setKoordinate(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                {MsgState2 === 'Koordinate Rumah Required' && <p className="text-xs text-red-600 font-bold ml-1">{MsgState2}</p>}
                </div>


                <form onSubmit={submitHandler}>
                    <p className="w-full font-bold">Nama Anggota Keluarga</p>
                    {AnggotaFields.map((Anggota, index) => {
                    return (
                        <div key={index} className="flex flex-row gap-1 mb-1">
                        <button className="bg-white text-black px-3 py-1 rounded-md font-bold" onClick={addFields}>+</button>

                        <input
                            name='name'
                            placeholder='Name'
                            onChange={event => handleAnggotaChange(event, index)}
                            value={Anggota.name}
                            className="outline-none w-[170px] border-2 rounded-md text-black"
                        />
                        <input
                            name='age'
                            placeholder='Age'
                            onChange={event => handleAnggotaChange(event, index)}
                            value={Anggota.age}
                            type="number"
                            className="border-2 outline-none rounded-md w-20 px-2 text-black
                                [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button className="bg-white text-black px-3 py-1 rounded-md font-bold" onClick={() => removeFields(index)}>-</button>
                        </div>
                    )
                    })}
                </form>

                {/** ANGKA POTENSI */}
                <div className="flex flex-col">
                    <p className="w-full font-bold text-center mb-[1px]">Angka Potensi</p>
                    <div className="flex flex-row justify-center gap-7">
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">1</p>
                            <button onClick={() => {handlePotensi('1')}} className={`${ AngkaPotensi == '1' || AngkaPotensi2 == '1' ? 'bg-[#FF0000]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">2</p>
                            <button onClick={() => {handlePotensi('2')}} className={`${ AngkaPotensi == '2' || AngkaPotensi2 == '2' ? 'bg-[#00FF00]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">3</p>
                            <button onClick={() => {handlePotensi('3')}} className={`${ AngkaPotensi == '3' || AngkaPotensi2 == '3' ? 'bg-[#0000FF]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">4</p>
                            <button onClick={() => {handlePotensi('4')}} className={`${ AngkaPotensi == '4' || AngkaPotensi2 == '4' ? 'bg-[#FFFF00]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">5</p>
                            <button onClick={() => {handlePotensi('5')}} className={`${ AngkaPotensi == '5' || AngkaPotensi2 == '5' ? 'bg-[#FF00FF]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                    </div>
                </div> 

                {/** RT */}
                <div className="flex flex-col">
                    <p className="w-full font-bold text-center">Pilih RT</p>
                    <div className="flex flex-row justify-center gap-2">
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">RT01</p>
                            <button onClick={() => {setRTrumah('RT01')}} className={`${ RTrumah == 'RT01' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">RT02</p>
                            <button onClick={() => {setRTrumah('RT02')}} className={`${ RTrumah == 'RT02' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">RT03</p>
                            <button onClick={() => {setRTrumah('RT03')}} className={`${ RTrumah == 'RT03' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">RT04</p>
                            <button onClick={() => {setRTrumah('RT04')}} className={`${ RTrumah == 'RT04' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">RT05</p>
                            <button onClick={() => {setRTrumah('RT05')}} className={`${ RTrumah == 'RT05' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                        <div className="flex flex-col place-items-center">
                            <p className="font-bold">RT06</p>
                            <button onClick={() => {setRTrumah('RT06')}} className={`${ RTrumah == 'RT06' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                        </div>
                    </div> 
                </div>

                {MsgState === 'Berhasil Menambahkan Data...' && <p className="font-bold text-green-500 text-sm text-center" onLoad={setTimeout(refreshMsgState, 1500)}>{MsgState}</p>}
                <br />
                <button onClick={() => {submit(); notify()}} className="bg-[#232323] text-white px-3 py-1 w-fit self-center rounded-sm">Submit</button>
                <ToastContainer position="top-right"  autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            </div>
        </>
    )
}