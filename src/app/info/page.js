'use client'

import { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config'; 
import { FaRegEdit } from "react-icons/fa";

export default function InformationPage() {
    const [ user, setUser ] = useState(true);
    const [ potensi, setPotensi ] = useState([]);

    const [ edit1, setEdit1 ] = useState(false);
    const [ editText1, setEditText1 ] = useState('');

    const [ edit2, setEdit2 ] = useState(false);
    const [ editText2, setEditText2 ] = useState('');

    const [ edit3, setEdit3 ] = useState(false);
    const [ editText3, setEditText3 ] = useState('');

    const getInfoPotensi = async () => {
        let temp_array = [];
        const colRef1 = collection(db, 'infopotensi');
        const snapshot1 = await getDocs(colRef1);
        const docs1 = snapshot1.docs.map((doc) => {
            const data = doc.data();
            data.idDocs = doc.id;
            return data;
        });

        docs1.map((index) => {
            let pathname = '';

            if(index.name == '1'){
                pathname = 'circle1.png'
            } else if (index.name == '2'){
                pathname = 'circle2.png'
            } else if (index.name == '3'){
                pathname = 'circle3.png'
            } else if (index.name == '4'){
                pathname = 'circle4.png'
            } else if (index.name == '5'){
                pathname = 'circle5.png'
            } else if (index.name == '4a'){
                pathname = 'circle6.png'
            } else if (index.name == '5a'){
                pathname = 'circle7.png'
            } else if (index.name == '6'){
                pathname = 'circle8.png'
            } else if (index.name == '6b'){
                pathname = 'circle9.png'
            } else if (index.name == '7'){
                pathname = 'circle10.png'
            } else if (index.name == '7a'){
                pathname = 'circle11.png'
            } else if (index.name == '8'){
                pathname = 'circle12.png'
            } else if (index.name == '9'){
                pathname = 'circle13.png'
            } else if (index.name == '5b'){
                pathname = 'circle14.png'
            } else if (index.name == '3a'){
                pathname = 'circle15.png'
            }

            temp_array.push({
                idDocs: index.idDocs,
                id: index.id,
                namePotensi: index.name,
                infoPotensi: index.info,
                pathname: pathname,
            })
        })
        temp_array.sort((a, b) => a.id - b.id);
        setPotensi(temp_array)
    }

    const handleUpdate = () => {
        console.log('Update Data')
    }

    useEffect(() => {
        if( sessionStorage.getItem('user') != null ) {
            setUser(true)
        }

        getInfoPotensi();
    }, [])


    return (
        <div className="w-full flex flex-col justify-center place-items-center pt-5">
            <h1 className="text-3xl font-bold mb-5 bg-[#232323] px-10 py-2 rounded-md text-white">INFORMASI POTENSI</h1>
            <div className="flex flex-col gap-2">
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[0]?.namePotensi}
                            ( <img src={potensi[0]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit1 ? <p>{potensi[0]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText1} onChange={(e) => setEditText1(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit1(!edit1)}/>
                            </div>
                            { edit1 && <button className="mt-2" onClick={() => handleUpdate()}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[1]?.namePotensi}
                            ( <img src={potensi[1]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit2 ? <p>{potensi[1]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText2} onChange={(e) => setEditText2(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit2(!edit2)}/>
                            </div>
                            { edit2 && <button className="mt-2" onClick={() => handleUpdate()}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[2]?.namePotensi}
                            ( <img src={potensi[2]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit3 ? <p>{potensi[2]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText3} onChange={(e) => setEditText3(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit3(!edit3)}/>
                            </div>
                            { edit3 && <button className="mt-2" onClick={() => handleUpdate()}>Submit</button>}
                        </div>
                    </div>
                    
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[3]?.namePotensi}
                            ( <img src={potensi[3]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[3]?.infoPotensi}</div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[4]?.namePotensi}
                            ( <img src={potensi[4]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[4]?.infoPotensi}</div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[5]?.namePotensi}
                            ( <img src={potensi[5]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[5]?.infoPotensi}</div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[6]?.namePotensi}
                            ( <img src={potensi[6]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[6]?.infoPotensi}</div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[7]?.namePotensi}
                            ( <img src={potensi[7]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[7]?.infoPotensi}</div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[8]?.namePotensi}
                            ( <img src={potensi[8]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[8]?.infoPotensi}</div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[9]?.namePotensi}
                            ( <img src={potensi[9]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[9]?.infoPotensi}</div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[10]?.namePotensi}
                            ( <img src={potensi[10]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[10]?.infoPotensi}</div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[11]?.namePotensi}
                            ( <img src={potensi[11]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[11]?.infoPotensi}</div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[12]?.namePotensi}
                            ( <img src={potensi[12]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[12]?.infoPotensi}</div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[13]?.namePotensi}
                            ( <img src={potensi[13]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[13]?.infoPotensi}</div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[100px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[14]?.namePotensi}
                            ( <img src={potensi[14]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2">{potensi[14]?.infoPotensi}</div>
                    </div>
                </section>
            </div>
        </div>

    )
}