'use client'

/* eslint-disable @next/next/no-img-element */
import { addDoc, collection } from "firebase/firestore";
import { app, db } from "../firebase/config";
import { useState } from "react";
import Validation from "./validation";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
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
    const [ AngkaPotensi, setAngkaPotensi ] = useState(1);
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
                    angka_potensi: AngkaPotensi,
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

                {/** Angka Potensi */}
                <div><p className="w-full font-bold">Angka Potensi</p>
                <input required placeholder="Potensi" min={1} value={AngkaPotensi} onChange={(e) => setAngkaPotensi(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="number"/></div>

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

                {/** RT */}
                <div className="flex flex-row justify-center gap-2">
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

                {MsgState === 'Berhasil Menambahkan Data...' && <p className="font-bold text-green-500 text-sm text-center" onLoad={setTimeout(refreshMsgState, 1500)}>{MsgState}</p>}
                <br />
                <button onClick={() => {submit(); notify()}} className="bg-[#232323] text-white px-3 py-1 w-fit self-center rounded-sm">Submit</button>
                <ToastContainer position="top-right"  autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover theme="light"/>
            </div>
        </>
    )
}