'use client'

import { useEffect, useState } from "react"
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; 
import { FaRegEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function InformationPage() {
    const [ user, setUser ] = useState(true);
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

    const handleUpdate = (potensi, text) => {
        if (potensi.idDocs != null ){
            const docRef = doc(db, 'infopotensi', potensi.idDocs);
            updateDoc(docRef, {
                info: text,
            })
        }
        console.log(potensi)
        console.log(text)
        
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
                            { edit1 && <button className="mt-2" onClick={() => {handleUpdate(potensi[0], editText1); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                            { edit2 && <button className="mt-2" onClick={() => {handleUpdate(potensi[1], editText2); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                            { edit3 && <button className="mt-2" onClick={() => {handleUpdate(potensi[2], editText3); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit4(!edit4)}/>
                            </div>
                            { edit4 && <button className="mt-2" onClick={() => {handleUpdate(potensi[3], editText4); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit5(!edit5)}/>
                            </div>
                            { edit5 && <button className="mt-2" onClick={() => {handleUpdate(potensi[4], editText5); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit6(!edit6)}/>
                            </div>
                            { edit6 && <button className="mt-2" onClick={() => {handleUpdate(potensi[5], editText6); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                    <input required placeholder="Potensi" value={editText6} onChange={(e) => setEditText6(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit7(!edit7)}/>
                            </div>
                            { edit7 && <button className="mt-2" onClick={() => {handleUpdate(potensi[6], editText7); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                    <input required placeholder="Potensi" value={editText5} onChange={(e) => setEditText5(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit8(!edit8)}/>
                            </div>
                            { edit8 && <button className="mt-2" onClick={() => {handleUpdate(potensi[7], editText8); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                    <input required placeholder="Potensi" value={editText6} onChange={(e) => setEditText6(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-72 px-2 text-black" type="text"/>
                                }
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit9(!edit9)}/>
                            </div>
                            { edit9 && <button className="mt-2" onClick={() => {handleUpdate(potensi[8], editText9); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit10(!edit10)}/>
                            </div>
                            { edit10 && <button className="mt-2" onClick={() => {handleUpdate(potensi[9], editText10); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit11(!edit11)}/>
                            </div>
                            { edit11 && <button className="mt-2" onClick={() => {handleUpdate(potensi[10], editText11); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit12(!edit12)}/>
                            </div>
                            { edit12 && <button className="mt-2" onClick={() => {handleUpdate(potensi[11], editText12); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit13(!edit13)}/>
                            </div>
                            { edit13 && <button className="mt-2" onClick={() => {handleUpdate(potensi[12], editText13); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit14(!edit14)}/>
                            </div>
                            { edit14 && <button className="mt-2" onClick={() => {handleUpdate(potensi[13], editText14); notify(); setTimeout(location.reload(), 5000)}}>Submit</button>}
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
                                <FaRegEdit className="hover:scale-125 ml-2" onClick={()=> setEdit15(!edit15)}/>
                            </div>
                            { edit15 && <button className="mt-2" onClick={() => {handleUpdate(potensi[14], editText15); notify(); setTimeout(location.reload(), 3000)}}>Submit</button>}
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