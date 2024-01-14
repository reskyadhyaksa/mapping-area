'use client'

import { useEffect, useState } from "react"
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; 
import { FaRegEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function InformationPage() {
    const [ user, setUser ] = useState(false);
    const [ potensi, setPotensi ] = useState([]);

    const [ edit1, setEdit1 ] = useState(false);
    const [ editText1, setEditText1 ] = useState('');

    const [ edit2, setEdit2 ] = useState(false);
    const [ editText2, setEditText2 ] = useState('');

    const [ edit3, setEdit3 ] = useState(false);
    const [ editText3, setEditText3 ] = useState('');

    const [ edit4, setEdit4 ] = useState(false);
    const [ editText4, setEditText4 ] = useState('');

    const [ edit5, setEdit5 ] = useState(false);
    const [ editText5, setEditText5 ] = useState('');

    const [ edit6, setEdit6 ] = useState(false);
    const [ editText6, setEditText6 ] = useState('');
    
    const [ edit7, setEdit7 ] = useState(false);
    const [ editText7, setEditText7 ] = useState('');

    const [ edit8, setEdit8 ] = useState(false);
    const [ editText8, setEditText8 ] = useState('');

    const [ edit9, setEdit9 ] = useState(false);
    const [ editText9, setEditText9 ] = useState('');
    
    const [ edit10, setEdit10 ] = useState(false);
    const [ editText10, setEditText10 ] = useState('');

    const [ edit11, setEdit11 ] = useState(false);
    const [ editText11, setEditText11 ] = useState('');

    const [ edit12, setEdit12 ] = useState(false);
    const [ editText12, setEditText12 ] = useState('');
    
    const [ edit13, setEdit13 ] = useState(false);
    const [ editText13, setEditText13 ] = useState('');

    const [ edit14, setEdit14 ] = useState(false);
    const [ editText14, setEditText14 ] = useState('');

    const [ edit15, setEdit15 ] = useState(false);
    const [ editText15, setEditText15 ] = useState('');
    
    const [ edit16, setEdit16 ] = useState(false);
    const [ editText16, setEditText16 ] = useState('');

    const [ edit17, setEdit17 ] = useState(false);
    const [ editText17, setEditText17 ] = useState('');

    const [ edit18, setEdit18 ] = useState(false);
    const [ editText18, setEditText18 ] = useState('');
    
    const [ edit19, setEdit19 ] = useState(false);
    const [ editText19, setEditText19 ] = useState('');
    
    const [ edit20, setEdit20 ] = useState(false);
    const [ editText20, setEditText20 ] = useState('');

    const [ edit21, setEdit21 ] = useState(false);
    const [ editText21, setEditText21 ] = useState('');

    const [ edit22, setEdit22 ] = useState(false);
    const [ editText22, setEditText22 ] = useState('');
    
    const [ edit23, setEdit23 ] = useState(false);
    const [ editText23, setEditText23 ] = useState('');
    
    const [ edit24, setEdit24 ] = useState(false);
    const [ editText24, setEditText24 ] = useState('');
    
    const [ edit25, setEdit25 ] = useState(false);
    const [ editText25, setEditText25 ] = useState('');

    const [ edit26, setEdit26 ] = useState(false);
    const [ editText26, setEditText26 ] = useState('');

    const [ edit27, setEdit27 ] = useState(false);
    const [ editText27, setEditText27 ] = useState('');
    
    const [ edit28, setEdit28 ] = useState(false);
    const [ editText28, setEditText28 ] = useState('');

    const [ edit29, setEdit29 ] = useState(false);
    const [ editText29, setEditText29 ] = useState('');

    const [ edit30, setEdit30 ] = useState(false);
    const [ editText30, setEditText30 ] = useState('');
    
    const [ edit31, setEdit31 ] = useState(false);
    const [ editText31, setEditText31 ] = useState('');

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
            } else if (index.name == '6c'){
                pathname = 'circle16.png'
            } else if (index.name == '7b'){
                pathname = 'circle17.png'
            } else if (index.name == '8a'){
                pathname = 'circle18.png'
            } else if (index.name == '9a'){
                pathname = 'circle19.png'
            } else if (index.name == '9b'){
                pathname = 'circle20.png'
            } else if (index.name == '10'){
                pathname = 'circle21.png'
            } else if (index.name == '9c'){
                pathname = 'circle22.png'
            } else if (index.name == '10a'){
                pathname = 'circle23.png'
            } else if (index.name == '11'){
                pathname = 'circle24.png'
            } else if (index.name == '12'){
                pathname = 'circle25.png'
            } else if (index.name == '10b'){
                pathname = 'circle26.png'
            } else if (index.name == '11a'){
                pathname = 'circle27.png'
            } else if (index.name == '12a'){
                pathname = 'circle28.png'
            } else if (index.name == '13'){
                pathname = 'circle29.png'
            } else if (index.name == '14'){
                pathname = 'circle30.png'
            } else if (index.name == '15'){
                pathname = 'circle31.png'
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

    const notify = () => {
        toast.success('Data changed successfully...', {
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

    const handleUpdate = async (potensi, text) => {
        if (potensi.idDocs != null ){
            const docRef = doc(db, 'infopotensi', potensi.idDocs);
            try {
                await updateDoc(docRef, {
                    info: text,
                });
                console.log('Document successfully updated!');
            } catch (error) {
                console.error('Error updating document:', error);
            }
        } else {
            console.log('a')
        }
        console.log(potensi)
        console.log(text)
        setEdit1(false)
        setEdit2(false)
        setEdit3(false)
        setEdit4(false)
        setEdit5(false)
        setEdit6(false)
        setEdit7(false)
        setEdit8(false)
        setEdit9(false)
        setEdit10(false)
        setEdit11(false)
        setEdit12(false)
        setEdit13(false)
        setEdit14(false)
        setEdit15(false)
        setEdit16(false)
        setEdit17(false)
        setEdit18(false)
        setEdit19(false)
        setEdit20(false)
        setEdit21(false)
        setEdit22(false)
        setEdit23(false)
        setEdit24(false)
        setEdit25(false)
        setEdit26(false)
        setEdit27(false)
        setEdit28(false)
        setEdit29(false)
        setEdit30(false)
        setEdit31(false)
        getInfoPotensi()
        
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
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit1(!edit1)}/>}
                            </div>
                            { edit1 && <button className="mt-2" onClick={() => {handleUpdate(potensi[0], editText1); notify();}}>Submit</button>}
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
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit2(!edit2)}/>}
                            </div>
                            { edit2 && <button className="mt-2" onClick={() => {handleUpdate(potensi[1], editText2); notify();}}>Submit</button>}
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
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit3(!edit3)}/>}
                            </div>
                            { edit3 && <button className="mt-2" onClick={() => {handleUpdate(potensi[2], editText3); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[3]?.namePotensi}
                            ( <img src={potensi[3]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit4 ? <p>{potensi[3]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText4} onChange={(e) => setEditText4(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit4(!edit4)}/>}
                            </div>
                            { edit4 && <button className="mt-2" onClick={() => {handleUpdate(potensi[3], editText4); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[4]?.namePotensi}
                            ( <img src={potensi[4]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit5 ? <p>{potensi[4]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText5} onChange={(e) => setEditText5(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit5(!edit5)}/>}
                            </div>
                            { edit5 && <button className="mt-2" onClick={() => {handleUpdate(potensi[4], editText5); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[5]?.namePotensi}
                            ( <img src={potensi[5]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit6 ? <p>{potensi[5]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText6} onChange={(e) => setEditText6(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit6(!edit6)}/>}
                            </div>
                            { edit6 && <button className="mt-2" onClick={() => {handleUpdate(potensi[5], editText6); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[6]?.namePotensi}
                            ( <img src={potensi[6]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit7 ? <p>{potensi[6]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText7} onChange={(e) => setEditText7(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit7(!edit7)}/>}
                            </div>
                            { edit7 && <button className="mt-2" onClick={() => {handleUpdate(potensi[6], editText7); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[7]?.namePotensi}
                            ( <img src={potensi[7]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit8 ? <p>{potensi[7]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText8} onChange={(e) => setEditText8(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit8(!edit8)}/>}
                            </div>
                            { edit8 && <button className="mt-2" onClick={() => {handleUpdate(potensi[7], editText8); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[8]?.namePotensi}
                            ( <img src={potensi[8]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit9 ? <p>{potensi[8]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText9} onChange={(e) => setEditText9(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit9(!edit9)}/>}
                            </div>
                            { edit9 && <button className="mt-2" onClick={() => {handleUpdate(potensi[8], editText9); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[9]?.namePotensi}
                            ( <img src={potensi[9]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit10 ? <p>{potensi[9]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText10} onChange={(e) => setEditText10(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit10(!edit10)}/>}
                            </div>
                            { edit10 && <button className="mt-2" onClick={() => {handleUpdate(potensi[9], editText10); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[10]?.namePotensi}
                            ( <img src={potensi[10]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit11 ? <p>{potensi[10]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText11} onChange={(e) => setEditText11(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit11(!edit11)}/>}
                            </div>
                            { edit11 && <button className="mt-2" onClick={() => {handleUpdate(potensi[10], editText11); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[11]?.namePotensi}
                            ( <img src={potensi[11]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit12 ? <p>{potensi[11]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText12} onChange={(e) => setEditText12(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit12(!edit12)}/>}
                            </div>
                            { edit12 && <button className="mt-2" onClick={() => {handleUpdate(potensi[11], editText12); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[12]?.namePotensi}
                            ( <img src={potensi[12]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit13 ? <p>{potensi[12]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText13} onChange={(e) => setEditText13(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit13(!edit13)}/>}
                            </div>
                            { edit13 && <button className="mt-2" onClick={() => {handleUpdate(potensi[12], editText13); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[13]?.namePotensi}
                            ( <img src={potensi[13]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit14 ? <p>{potensi[13]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText14} onChange={(e) => setEditText14(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit14(!edit14)}/>}
                            </div>
                            { edit14 && <button className="mt-2" onClick={() => {handleUpdate(potensi[13], editText14); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[14]?.namePotensi}
                            ( <img src={potensi[14]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit15 ? <p>{potensi[14]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText15} onChange={(e) => setEditText15(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit15(!edit15)}/>}
                            </div>
                            { edit15 && <button className="mt-2" onClick={() => {handleUpdate(potensi[14], editText15); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[15]?.namePotensi}
                            ( <img src={potensi[15]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit16 ? <p>{potensi[15]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText16} onChange={(e) => setEditText16(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit16(!edit16)}/>}
                            </div>
                            { edit16 && <button className="mt-2" onClick={() => {handleUpdate(potensi[15], editText16); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[16]?.namePotensi}
                            ( <img src={potensi[16]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit17 ? <p>{potensi[16]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText17} onChange={(e) => setEditText17(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit17(!edit17)}/>}
                            </div>
                            { edit17 && <button className="mt-2" onClick={() => {handleUpdate(potensi[16], editText17); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[17]?.namePotensi}
                            ( <img src={potensi[17]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit18 ? <p>{potensi[17]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText18} onChange={(e) => setEditText18(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit18(!edit18)}/>}
                            </div>
                            { edit18 && <button className="mt-2" onClick={() => {handleUpdate(potensi[17], editText18); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[18]?.namePotensi}
                            ( <img src={potensi[18]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit19 ? <p>{potensi[18]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText19} onChange={(e) => setEditText19(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit19(!edit19)}/>}
                            </div>
                            { edit19 && <button className="mt-2" onClick={() => {handleUpdate(potensi[18], editText19); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[19]?.namePotensi}
                            ( <img src={potensi[19]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit20 ? <p>{potensi[19]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText20} onChange={(e) => setEditText20(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit20(!edit20)}/>}
                            </div>
                            { edit20 && <button className="mt-2" onClick={() => {handleUpdate(potensi[19], editText20); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[20]?.namePotensi}
                            ( <img src={potensi[20]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit21 ? <p>{potensi[20]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText21} onChange={(e) => setEditText21(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit21(!edit21)}/>}
                            </div>
                            { edit21 && <button className="mt-2" onClick={() => {handleUpdate(potensi[20], editText21); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[21]?.namePotensi}
                            ( <img src={potensi[21]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit22 ? <p>{potensi[21]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText22} onChange={(e) => setEditText22(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit22(!edit22)}/>}
                            </div>
                            { edit22 && <button className="mt-2" onClick={() => {handleUpdate(potensi[21], editText22); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[22]?.namePotensi}
                            ( <img src={potensi[22]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit23 ? <p>{potensi[22]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText23} onChange={(e) => setEditText23(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit23(!edit23)}/>}
                            </div>
                            { edit23 && <button className="mt-2" onClick={() => {handleUpdate(potensi[22], editText23); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[23]?.namePotensi}
                            ( <img src={potensi[23]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit24 ? <p>{potensi[23]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText24} onChange={(e) => setEditText24(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit24(!edit24)}/>}
                            </div>
                            { edit24 && <button className="mt-2" onClick={() => {handleUpdate(potensi[23], editText24); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[24]?.namePotensi}
                            ( <img src={potensi[24]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit25 ? <p>{potensi[24]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText25} onChange={(e) => setEditText25(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit25(!edit25)}/>}
                            </div>
                            { edit25 && <button className="mt-2" onClick={() => {handleUpdate(potensi[24], editText25); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[25]?.namePotensi}
                            ( <img src={potensi[25]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit26 ? <p>{potensi[25]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText26} onChange={(e) => setEditText26(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit26(!edit26)}/>}
                            </div>
                            { edit26 && <button className="mt-2" onClick={() => {handleUpdate(potensi[25], editText26); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[26]?.namePotensi}
                            ( <img src={potensi[26]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit27 ? <p>{potensi[26]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText27} onChange={(e) => setEditText27(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit27(!edit27)}/>}
                            </div>
                            { edit27 && <button className="mt-2" onClick={() => {handleUpdate(potensi[26], editText27); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[27]?.namePotensi}
                            ( <img src={potensi[27]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit28 ? <p>{potensi[27]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText28} onChange={(e) => setEditText28(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit28(!edit28)}/>}
                            </div>
                            { edit28 && <button className="mt-2" onClick={() => {handleUpdate(potensi[27], editText28); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[28]?.namePotensi}
                            ( <img src={potensi[28]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit29 ? <p>{potensi[28]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText29} onChange={(e) => setEditText29(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit29(!edit29)}/>}
                            </div>
                            { edit29 && <button className="mt-2" onClick={() => {handleUpdate(potensi[28], editText29); notify();}}>Submit</button>}
                        </div>
                    </div>
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[29]?.namePotensi}
                            ( <img src={potensi[29]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit30 ? <p>{potensi[29]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText30} onChange={(e) => setEditText30(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit30(!edit30)}/>}
                            </div>
                            { edit30 && <button className="mt-2" onClick={() => {handleUpdate(potensi[29], editText30); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <section className="flex gap-2">
                    <div className="border-2 border-black w-[400px] h-[125px] flex flex-col justify-center place-items-center">
                        <div className="flex">
                            Potensi {potensi[30]?.namePotensi}
                            ( <img src={potensi[30]?.pathname} className="w-4 h-4 self-center"/> )
                        </div>
                        <div className="mt-2 flex flex-col place-items-center">
                            <div className="flex place-items-center">
                                { !edit31 ? <p>{potensi[30]?.infoPotensi}</p> :
                                    <input required placeholder="Potensi" value={editText31} onChange={(e) => setEditText31(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                {user && <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit31(!edit31)}/>}
                            </div>
                            { edit31 && <button className="mt-2" onClick={() => {handleUpdate(potensi[30], editText31); notify();}}>Submit</button>}
                        </div>
                    </div>
                </section>
                <div className="text-white h-20">Invisible</div>
            </div>
            <ToastContainer position="top-right"  autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
                    pauseOnFocusLoss draggable pauseOnHover theme="light"/>
        </div>

    )
}