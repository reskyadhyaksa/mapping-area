import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export const TablePenduduk = () => {
    const [ data, setData ] = useState([]);

    const getData =  async () => {
        const temp_array = [];
        let colRef = collection(db, 'RT01');
        let snapshot = await getDocs(colRef);
        let docs = snapshot.docs.map((doc) => doc.data());
        
        docs.forEach((index, i) => {
            temp_array.push({
                namaKepala: index.nama_kepala_keluarga,
                umurKepala: index.umur,
                namaAnggota: index.nama_anggota_keluarga,
                jumlahAnggota: index.jumlah_anggota_keluarga,
                koordinate: index.koordinate,
                potensi: index.angka_potensi,
                RT: 'RT01',
            })
        })
        
        colRef = collection(db, 'RT02');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());
        
        docs.forEach((index, i) => {
            temp_array.push({
                namaKepala: index.nama_kepala_keluarga,
                umurKepala: index.umur,
                namaAnggota: index.nama_anggota_keluarga,
                jumlahAnggota: index.jumlah_anggota_keluarga,
                koordinate: index.koordinate,
                potensi: index.angka_potensi,
                RT: 'RT02',
            })
        })
        
        colRef = collection(db, 'RT03');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());
        
        docs.forEach((index, i) => {
            temp_array.push({
                namaKepala: index.nama_kepala_keluarga,
                umurKepala: index.umur,
                namaAnggota: index.nama_anggota_keluarga,
                jumlahAnggota: index.jumlah_anggota_keluarga,
                koordinate: index.koordinate,
                potensi: index.angka_potensi,
                RT: 'RT03',
            })
        })
        
        colRef = collection(db, 'RT04');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());
        
        docs.forEach((index, i) => {
            temp_array.push({
                namaKepala: index.nama_kepala_keluarga,
                umurKepala: index.umur,
                namaAnggota: index.nama_anggota_keluarga,
                jumlahAnggota: index.jumlah_anggota_keluarga,
                koordinate: index.koordinate,
                potensi: index.angka_potensi,
                RT: 'RT04',
            })
        })

        colRef = collection(db, 'RT05');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());
        
        docs.forEach((index, i) => {
            temp_array.push({
                namaKepala: index.nama_kepala_keluarga,
                umurKepala: index.umur,
                namaAnggota: index.nama_anggota_keluarga,
                jumlahAnggota: index.jumlah_anggota_keluarga,
                koordinate: index.koordinate,
                potensi: index.angka_potensi,
                RT: 'RT05',
            })
        })

        colRef = collection(db, 'RT06');
        snapshot = await getDocs(colRef);
        docs = snapshot.docs.map((doc) => doc.data());
        
        docs.forEach((index, i) => {
            temp_array.push({
                namaKepala: index.nama_kepala_keluarga,
                umurKepala: index.umur,
                namaAnggota: index.nama_anggota_keluarga,
                jumlahAnggota: index.jumlah_anggota_keluarga,
                koordinate: index.koordinate,
                potensi: index.angka_potensi,
                RT: 'RT06',
            })
        })

        console.log('temp :' , temp_array)
        
        setData(temp_array);
        console.log('data : ', temp_array)
    }

    useEffect(() => {
        getData()
        // console.log(data)
    }, [])



    return (
        <>
            <div className="font-bold flex flex-col gap-10s h-[50vh] w-[500px] overflow-y-scroll">
                <table>
                    <thead className="text-[16px] bg-[#1D809F] border-2 text-white">
                        <tr>
                            <td className='border-solid border-2 border-black text-center'>Kepala Keluarga</td>
                            <td className='border-solid border-2 border-black text-center'>RT</td>
                            <td className='border-solid border-2 border-black text-center'>Koordinat</td>
                            <td className='border-solid border-2 border-black text-center'>Edit</td>
                            <td className='border-solid border-2 border-black text-center'>Delete</td>
                        </tr>
                    </thead>

                    <tbody className="bg-white text-black">
                        { data.length == 0 ? (
                            <tr>
                                <td className="px-2">Tidak Ada Data</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ) : (
                            data.map((e, i) => {
                                return(
                                    <tr key={i}>
                                        <td className='border-solid border-2 border-black text-center'>{e.namaKepala}</td>
                                        <td className='border-solid border-2 w-2 border-black text-center'>{e.RT}</td>
                                        <td className='border-solid border-2 w-[1000px] border-black text-center'>{e.koordinate}</td>
                                        <td className='border-solid border-2 border-black'>
                                            <FaRegEdit onClick={() => console.log('a')} />
                                        </td>
                                        <td className='border-solid border-2 px-7 border-black'>
                                            <FaRegTrashAlt onClick={() => console.log('a')} />
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )


}