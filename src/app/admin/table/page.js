'use client'

import getAllData from "@/app/handler/get_data";
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";

import { data } from "autoprefixer";
import { use, useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaRegEdit, FaTrash } from "react-icons/fa";
import StyledTableCell from "./styled_table_cell";
import StyledTableRow from "./styled_table_row";
import { GridCloseIcon } from "@mui/x-data-grid";
import deleteData from "@/app/handler/delete_data";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/navigation";
import InputField from "../form";
import PopupInformation from "./add_information";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";



export default function PendudukPage() {
    const router = useRouter()
    const [ dataAll, setAllData ] = useState([]);
    const [ selectedData, setSelectedData ] = useState([]);
    const [ popupDelete, setPopupDelete ] = useState(false);
    const [ popupAdd, setPopupAdd ] = useState(false);
    const [ popupEdit, setPopupEdit ] = useState(false);
    const [ popupInfo, setPopupInfo ] = useState(false);

    const [ SelectID, setSelectID ] = useState('');

    const [ namaKepala, setNamaKepala ] = useState('');
    const [ namaKepala2, setNamaKepala2 ] = useState('');
    const [ namaKepalaEdit, setNamaKepalaEdit ] = useState(false);

    const [ umurKepala, setUmurKepala ] = useState(null);
    const [ umurKepala2, setUmurKepala2 ] = useState(null);
    const [ umurKepalaEdit, setUmurKepalaEdit ] = useState(false);

    const [ AnggotaFields2, setAnggotaFields2 ] = useState([
        { name: '', age: '' },
    ])
    const [ anggotaKeluargaEdit, setAnggotaKeluargaEdit ] = useState(false);
    
    const [ alamatRumah, setAlamatRumah ] = useState('');
    const [ alamatRumah2, setAlamatRumah2 ] = useState('');
    const [ alamatRumahEdit, setAlamatRumahEdit ] = useState(false);

    const [ koordinate, setKoordinate ] = useState('');
    const [ koordinate2, setKoordinate2 ] = useState('');
    const [ koordinateEdit, setKoordinateEdit ] = useState(false);
    
    const [ RTName, setRTName ] = useState('');
    const [ RTName2, setRTName2 ] = useState('');
    const [ RTNameEdit, setRTNameEdit ] = useState(false);

    const [ potensiRumah, setPotensiRumah ] = useState(null);
    const [ potensiRumah2, setPotensiRumah2 ] = useState(null);

    const [ AngkaPotensi, setAngkaPotensi ] = useState('');
    const [ AngkaPotensi2, setAngkaPotensi2 ] = useState('');
    const [ AngkaPotensi3, setAngkaPotensi3 ] = useState('');
    const [ AngkaPotensi4, setAngkaPotensi4 ] = useState('');
    const [ AngkaPotensi5, setAngkaPotensi5 ] = useState('');

    const [ potensiAktif, setPotensiAktif1 ] = useState(false);
    const [ potensiAktif2, setPotensiAktif2 ] = useState(false);
    const [ potensiAktif3, setPotensiAktif3 ] = useState(false);
    const [ potensiAktif4, setPotensiAktif4 ] = useState(false);
    const [ potensiAktif5, setPotensiAktif5 ] = useState(false);

    const [ finalPotensi, setFinalPotensi ] = useState(null);
    const [ potensiRumahEdit, setPotensiRumahEdit ] = useState(false);

    const [ potensiAsc, setPotensiAsc ] = useState(false);
    const [ namaKepalaAsc, setNamaKepalaAsc ] = useState(false);
    const [ RTAsc, setRTAsc ] = useState(false);
    const [ alamatAsc, setAlamatAsc ] = useState(false);
    const [ koorAsc, setKoorAsc ] = useState(false);

    const [ popPie, setPopPie ] = useState(false);
    const [ pieData, setPieData ] = useState([]);

    const size = {
        width: 400,
        height: 200,
    };

    const fetchData = async () => {
        try {
            const result = await getAllData();
    
            // Sort the data by 'namaKepala' property in ascending order
            const sortedData = result.slice().sort((a, b) => {
                const nameA = a.namaKepala.toLowerCase();
                const nameB = b.namaKepala.toLowerCase();
    
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
    
            setAllData(sortedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const sortAscendantNamaKepala = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            const nameA = a.namaKepala.toLowerCase();
            const nameB = b.namaKepala.toLowerCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        setAllData(sortedData);
    };
    
    const sortDescendantNamaKepala = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            const nameA = a.namaKepala.toLowerCase();
            const nameB = b.namaKepala.toLowerCase();

            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;
            return 0;
        });
        setAllData(sortedData);
    };
    
    const sortAscendantPotensi = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            const potensiA = parseInt(a.potensi, 10);
            const potensiB = parseInt(b.potensi, 10);

            return potensiA - potensiB;
        });
        setAllData(sortedData);
    };
    
    const sortDescendantPotensi = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            const potensiA = parseInt(a.potensi, 10);
            const potensiB = parseInt(b.potensi, 10);

            return potensiB - potensiA;
        });
        setAllData(sortedData);
    };
    
    const sortAscendantRT = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            const rtNumberA = parseInt(a.RTName.replace('RT', ''), 10);
            const rtNumberB = parseInt(b.RTName.replace('RT', ''), 10);

            return rtNumberA - rtNumberB;
        });
        setAllData(sortedData);
    };
    
    const sortDescendantRT = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            const rtNumberA = parseInt(a.RTName.replace('RT', ''), 10);
            const rtNumberB = parseInt(b.RTName.replace('RT', ''), 10);

            return rtNumberB - rtNumberA;
        });
        setAllData(sortedData);
    };

    const sortAscendantAlamat = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            // Use localeCompare for string comparison
            return a.alamat.localeCompare(b.alamat);
        });
    
        setAllData(sortedData);
    };

    const sortDescendantAlamat = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            // Use localeCompare for string comparison
            return b.alamat.localeCompare(a.alamat);
        });
    
        setAllData(sortedData);
    };

    const sortAscendantCoordinates = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            // Check for invalid coordinates
            if (!a.koordinate || !b.koordinate) return 0;
    
            // Parse latitude values from coordinates
            const latA = parseFloat(a.koordinate.lat);
            const latB = parseFloat(b.koordinate.lat);
    
            // Check for NaN values
            if (isNaN(latA) || isNaN(latB)) return 0;
    
            return latA - latB;
        });
    
        setAllData(sortedData);
    };

    const sortDescendantCoordinates = () => {
        const sortedData = dataAll.slice().sort((a, b) => {
            // Check for invalid coordinates
            if (!a.koordinate || !b.koordinate) return 0;
    
            // Parse latitude values from coordinates
            const latA = parseFloat(a.koordinate.lat);
            const latB = parseFloat(b.koordinate.lat);
    
            // Check for NaN values
            if (isNaN(latA) || isNaN(latB)) return 0;
    
            return latB - latA;
        });
    
        setAllData(sortedData);
    };

    const handlePotensi = (value) => {
        //! HANDLE AKTIF
        if (value === 1){
            setAngkaPotensi('1')
            setPotensiAktif1(true)
        } else if (value === 2){
            setAngkaPotensi2('2')
            setPotensiAktif2(true)
        } else if (value === 3){
            setAngkaPotensi3('3')
            setPotensiAktif3(true)
        } else if (value === 4){
            setAngkaPotensi4('4')
            setPotensiAktif4(true)
        } else if (value === 5){
            setAngkaPotensi5('5')
            setPotensiAktif5(true)
        }

        //! HANDLE NONAKTIF
        if (value === 1 && potensiAktif){
            setPotensiAktif1(false)
            setAngkaPotensi('')
        } else if (value === 2 && potensiAktif2){
            setPotensiAktif2(false)
            setAngkaPotensi2('')
        } else if (value === 3 && potensiAktif3){
            setPotensiAktif3(false)
            setAngkaPotensi3('')
        } else if (value === 4 && potensiAktif4){
            setPotensiAktif4(false)
            setAngkaPotensi4('')
        } else if (value === 5 && potensiAktif5){
            setPotensiAktif5(false)
            setAngkaPotensi5('')
        }


    };

    const countPotensi = async () => {
        // Create an object to store counts
        const countMap = {};
        const categorizedData = [];
        const result = await getAllData();
    
        // Iterate through the data and count occurrences
        result.forEach(item => {
            const potensi_temp = item.potensi;
    
            // Check if the property exists and is a string
            if (potensi_temp && typeof potensi_temp === 'string') {
                // Use the property value as the key in the count map
                countMap[potensi_temp] = (countMap[potensi_temp] || 0) + 1;
            }
        });
    
        // Create an array with objects including id based on the order
        Object.keys(countMap).forEach((potensi, index) => {
            categorizedData.push({
                potensi,
                count: countMap[potensi],
                id: index + 1,
                value: countMap[potensi], // Add the value property
            });
        });
    
        console.log(categorizedData)
        setPieData(categorizedData);
    };

    useEffect(() => {
        if( sessionStorage.getItem('user') == null ) {
            router.push('/login')
        }
        fetchData();
        countPotensi();
        // if ( selectedData.id != null ) {
        //     setSelectID(selectedData.id)
        //     setNamaKepala2(selectedData.namaKepala)
        //     setUmurKepala2(selectedData.umurKepala)
        //     setAnggotaFields2(selectedData.namaAnggota)
        //     setAlamatRumah2(selectedData.alamat)
        //     setPotensiRumah2(selectedData.potensi)
        //     setRTName2(selectedData.RTName)
        // }

        if (AngkaPotensi === '1' && AngkaPotensi2 === '2' && AngkaPotensi3 === '' && AngkaPotensi4 === '' && AngkaPotensi5 === '') {
            setPotensiRumah2('3a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '' && AngkaPotensi3 === '3' && AngkaPotensi4 === '' && AngkaPotensi5 === '') {
            setPotensiRumah2('4a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '' && AngkaPotensi3 === '' && AngkaPotensi4 === '4' && AngkaPotensi5 === '') {
            setPotensiRumah2('5a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '' && AngkaPotensi3 === '' && AngkaPotensi4 === '' && AngkaPotensi5 === '5') {
            setPotensiRumah2('6');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '2' && AngkaPotensi3 === '3' && AngkaPotensi4 === '' && AngkaPotensi5 === '') {
            setPotensiRumah2('5b');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '2' && AngkaPotensi3 === '' && AngkaPotensi4 === '4' && AngkaPotensi5 === '') {
            setPotensiRumah2('6b');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '2' && AngkaPotensi3 === '' && AngkaPotensi4 === '' && AngkaPotensi5 === '5') {
            setPotensiRumah2('7');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '' && AngkaPotensi3 === '3' && AngkaPotensi4 === '4' && AngkaPotensi5 === '') {
            setPotensiRumah2('7a');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '' && AngkaPotensi3 === '3' && AngkaPotensi4 === '' && AngkaPotensi5 === '5') {
            setPotensiRumah2('8');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '' && AngkaPotensi3 === '' && AngkaPotensi4 === '4' && AngkaPotensi5 === '5') {
            setPotensiRumah2('9');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '2' && AngkaPotensi3 === '3' && AngkaPotensi4 === '' && AngkaPotensi5 === '') {
            setPotensiRumah2('6c');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '2' && AngkaPotensi3 === '' && AngkaPotensi4 === '4' && AngkaPotensi5 === '') {
            setPotensiRumah2('7b');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '2' && AngkaPotensi3 === '' && AngkaPotensi4 === '' && AngkaPotensi5 === '5') {
            setPotensiRumah2('8a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '' && AngkaPotensi3 === '3' && AngkaPotensi4 === '4' && AngkaPotensi5 === '') {
            setPotensiRumah2('9a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '' && AngkaPotensi3 === '3' && AngkaPotensi4 === '' && AngkaPotensi5 === '5') {
            setPotensiRumah2('9b');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '' && AngkaPotensi3 === '' && AngkaPotensi4 === '4' && AngkaPotensi5 === '5') {
            setPotensiRumah2('10');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '2' && AngkaPotensi3 === '3' && AngkaPotensi4 === '4' && AngkaPotensi5 === '') {
            setPotensiRumah2('9c');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '2' && AngkaPotensi3 === '3' && AngkaPotensi4 === '' && AngkaPotensi5 === '5') {
            setPotensiRumah2('10a');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '2' && AngkaPotensi3 === '' && AngkaPotensi4 === '4' && AngkaPotensi5 === '5') {
            setPotensiRumah2('11');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '' && AngkaPotensi3 === '3' && AngkaPotensi4 === '4' && AngkaPotensi5 === '5') {
            setPotensiRumah2('12');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '2' && AngkaPotensi3 === '3' && AngkaPotensi4 === '4' && AngkaPotensi5 === '') {
            setPotensiRumah2('10b');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '2' && AngkaPotensi3 === '3' && AngkaPotensi4 === '' && AngkaPotensi5 === '5') {
            setPotensiRumah2('11a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '2' && AngkaPotensi3 === '' && AngkaPotensi4 === '4' && AngkaPotensi5 === '5') {
            setPotensiRumah2('12a');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '' && AngkaPotensi3 === '3' && AngkaPotensi4 === '4' && AngkaPotensi5 === '5') {
            setPotensiRumah2('13');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '2' && AngkaPotensi3 === '3' && AngkaPotensi4 === '4' && AngkaPotensi5 === '5') {
            setPotensiRumah2('14');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '2' && AngkaPotensi3 === '3' && AngkaPotensi4 === '4' && AngkaPotensi5 === '5') {
            setPotensiRumah2('15');
        } else if (AngkaPotensi === '1' && AngkaPotensi2 === '' && AngkaPotensi3 === '' && AngkaPotensi4 === '' && AngkaPotensi5 === '') {
            setPotensiRumah2('1');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '2' && AngkaPotensi3 === '' && AngkaPotensi4 === '' && AngkaPotensi5 === '') {
            setPotensiRumah2('2');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '' && AngkaPotensi3 === '3' && AngkaPotensi4 === '' && AngkaPotensi5 === '') {
            setPotensiRumah2('3');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '' && AngkaPotensi3 === '' && AngkaPotensi4 === '4' && AngkaPotensi5 === '') {
            setPotensiRumah2('4');
        } else if (AngkaPotensi === '' && AngkaPotensi2 === '' && AngkaPotensi3 === '' && AngkaPotensi4 === '' && AngkaPotensi5 === '5') {
            setPotensiRumah2('5');
        }

    }, [AngkaPotensi, AngkaPotensi2, AngkaPotensi3, AngkaPotensi4, AngkaPotensi5]);

    const handleEdit = async (row) => {
        if (SelectID != ''){
            const docRef = doc(db, RTName2, SelectID);
            try {
                await updateDoc(docRef, {
                    nama_kepala_keluarga: namaKepala2,
                    umur_kepala: umurKepala2,
                    koordinate: koordinate2,
                    anggota_keluarga: AnggotaFields2,
                    jumlah_anggota: AnggotaFields2.length,
                    angka_potensi: potensiRumah2,
                    alamat: alamatRumah2,
                })
                toast.success('Data Edit successfully', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setPopupEdit(false)
                setSelectID('')
                setNamaKepala2('')
                setUmurKepala2(null)
                setAnggotaFields2([
                    { name: '', age: '' },
                ])
                setAlamatRumah2('')
                setPotensiRumah2('')
                setRTName2('')
                setNamaKepalaEdit(true)
                setAnggotaKeluargaEdit(true)
                setAlamatRumahEdit(true)
                setKoordinateEdit(true)
                setPotensiRumahEdit(true)
                setRTNameEdit(true)

                setAngkaPotensi('')
                setAngkaPotensi2('')
                setAngkaPotensi3('')
                setAngkaPotensi4('')
                setAngkaPotensi5('')
                setPotensiAktif1(false)
                setPotensiAktif2(false)
                setPotensiAktif3(false)
                setPotensiAktif4(false)
                setPotensiAktif5(false)

                fetchData()
            } catch (e){
                console.log(e)
            }
        }
    }

    const handlePopUpDelete = (row) => {
        setSelectedData(row);
        setPopupDelete(!popupDelete)
    }

    const handlePopUpEdit = (row) => {
        setSelectedData(row);
        setSelectID(row.id)
        setNamaKepala2(row.namaKepala)
        setUmurKepala2(row.umurKepala)
        setAnggotaFields2(row.namaAnggota)
        setAlamatRumah2(row.alamat)
        setPotensiRumah2(row.potensi)
        setKoordinate2(row.koordinate.lat +', '+ row.koordinate.lon)
        setRTName2(row.RTName)
        setPopupEdit(!popupEdit)
        
    }

    const notify = () => {
        toast.success('Data deleted successfully', {
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
    const handleDeleteButton = () => {
        setPopupDelete(false)
        setSelectedData([])
        fetchData();
        
    }
    
    const handleAnggotaChange = (event, index) => {
        let data = [...AnggotaFields2];
        data[index][event.target.name] = event.target.value;
        setAnggotaFields2(data);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(AnggotaFields2)
    }

    const addFields = () => {
        let object = {
            name: '',
            age: ''
        }

        setAnggotaFields2([...AnggotaFields2, object])
    }

    const removeFields = (index) => {
        let data = [...AnggotaFields2];
        data.splice(index, 1)
        setAnggotaFields2(data)
    }

    return(
        <>
            {popupDelete && popupAdd != true && popupEdit != true && 
                <div id="delete" className={`fixed left-[40%] top-[20%] w-[300px] rounded-md px-5 py-5 bg-[#f3f3f3] border-2 border-black text-black`}>
                    <div className="flex justify-between">
                        <div className="font-bold">Delete data</div>
                        <GridCloseIcon onClick={() => setPopupDelete(false)}/>
                    </div>

                    <hr className="border-black w-full mt-2"/>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Nama Kepala Keluarga</h3>
                        <h6 className="font-bold">{selectedData.namaKepala} {selectedData.umurKepala != null && <span>({selectedData.umurKepala})</span>}</h6>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Anggota Keluarga </h3>
                        <h6 className="font-bold">
                        {selectedData.namaAnggota?.map((row, index)=> {
                                            return (
                                                <div key={index}>{row.name} {row.age != '' && <span>({row.age})</span>}</div>
                                        )})}
                        </h6>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Alamat</h3>
                        <h6 className="font-bold">{selectedData.alamat} {selectedData.RTName != null && <span>({selectedData.RTName})</span>}</h6>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Koordinat</h3>
                        <h6 className="font-bold">Lat: {selectedData.koordinate.lat}<br/>Lon: {selectedData.koordinate.lon}</h6>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Potensi</h3>
                        <h6 className="font-bold">{selectedData.potensi}</h6>
                    </div>

                    <div className="flex justify-center gap-1">
                        <button className="bg-[#232323] text-white px-3 py-1 text-sm rounded-sm"
                            onClick={() => {deleteData(selectedData); handleDeleteButton(); notify()}}>Delete</button>
                        <button className="bg-red-300 text-black px-3 py-1 text-sm rounded-sm"
                            onClick={() => setPopupDelete(false)}>Cancel</button>
                    </div>
                </div>
            }

            {popupEdit && popupAdd != true && popupDelete != true && 
                <div id="edit" className={`fixed left-[40%] top-[20%] ${!anggotaKeluargaEdit ? 'w-[300px]' : 'w-[400px]'} rounded-md px-5 py-5 bg-[#f3f3f3] border-2 border-black text-black`}>
                    <div className="flex justify-between">
                        <div className="font-bold">Edit data</div>
                        <GridCloseIcon onClick={() => {setPopupEdit(false); console.log(selectedData.namaAnggota)}}/>
                    </div>

                    <hr className="border-black w-full mt-2"/>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Nama Kepala Keluarga</h3>
                        <div className="font-bold flex items-center justify-between">
                            {!namaKepalaEdit ? 
                                <div>
                                    {selectedData.namaKepala} {selectedData.umurKepala != null && 
                                            <span>({selectedData.umurKepala})</span>}
                                </div> :
                                <div>
                                    <input required placeholder="Nama" min={1} value={namaKepala2} onChange={(e) => setNamaKepala2(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-[150px] px-2 text-black" type="text"/>
                                    <input required placeholder="Umur" 
                                        value={umurKepala2} type="number" onChange={(e) => setUmurKepala2(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-20 px-2 ml-1 text-black 
                                            [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                                </div>
                            }
                        <FaRegEdit className="hover:scale-125" onClick={() => setNamaKepalaEdit(!namaKepalaEdit)}/>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Anggota Keluarga </h3>
                        <div className="flex justify-between">
                            <div>
                                {!anggotaKeluargaEdit ? 
                                    <h6 className="font-bold">
                                    {AnggotaFields2 == null ? <h1 className="font-bold">Tidak ada data anggota</h1> : 
                                        <span>{selectedData.namaAnggota?.map((row, index)=> {
                                            return (
                                                <div key={index}>{row.name} {row.age != '' && <span>({row.age})</span>}</div>)})}
                                        </span>}
                                    </h6> : 
                                    <form onSubmit={submitHandler}>
                                    {AnggotaFields2.map((Anggota, index) => {
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
                                            {AnggotaFields2.length > 1 && <button className="bg-white text-black px-3 py-1 rounded-md font-bold" onClick={() => removeFields(index)}>-</button>}
                                            </div>
                                        )
                                        })}
                                    </form>}

                            </div>
                            <FaRegEdit className="hover:scale-125 self-center" onClick={() => {setAnggotaKeluargaEdit(!anggotaKeluargaEdit)}}/>
                        </div>
                        
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Alamat</h3>
                        <div className="font-bold flex items-center justify-between">
                            {!alamatRumahEdit ? 
                                <div>
                                    {selectedData.alamat != '' ? <div>{selectedData.alamat}</div> : <div>Tidak Ada Alamat</div>}
                                </div> :
                                <div>
                                    <input required placeholder="Alamat" min={1} value={alamatRumah2} onChange={(e) => setAlamatRumah2(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-[200px] px-2 text-black" type="text"/>
                                </div>
                            }
                            <FaRegEdit className="hover:scale-125" onClick={() => setAlamatRumahEdit(!alamatRumahEdit)}/>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Koordinat</h3>
                        <div className="font-bold flex items-center justify-between">
                            {!koordinateEdit ? 
                                <div>
                                    lat : {selectedData.koordinate.lat}<br/>lon : {selectedData.koordinate.lon}
                                </div> :
                                <div>
                                    <input required placeholder="Koordinat" min={1} value={koordinate2} onChange={(e) => setKoordinate2(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-[200px] px-2 text-black" type="text"/>
                                </div>
                            }
                            <FaRegEdit className="hover:scale-125" onClick={() => setKoordinateEdit(!koordinateEdit)}/>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Potensi</h3>
                        <div className="font-bold flex items-center justify-between">
                            {!potensiRumahEdit ? 
                                <div>{selectedData.potensi}</div> :
                                <div className="flex flex-row justify-center gap-4">
                                    <div className="flex flex-col place-items-center">
                                        <p className="font-bold">1</p>
                                        <button onClick={() => {handlePotensi(1)}} className={`${ potensiAktif ? 'bg-[#FF0000]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                    </div>
                                    <div className="flex flex-col place-items-center">
                                        <p className="font-bold">2</p>
                                        <button onClick={() => {handlePotensi(2)}} className={`${ potensiAktif2 ? 'bg-[#00FF00]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                    </div>
                                    <div className="flex flex-col place-items-center">
                                        <p className="font-bold">3</p>
                                        <button onClick={() => {handlePotensi(3)}} className={`${ potensiAktif3 ? 'bg-[#0000FF]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                    </div>
                                    <div className="flex flex-col place-items-center">
                                        <p className="font-bold">4</p>
                                        <button onClick={() => {handlePotensi(4)}} className={`${ potensiAktif4 ? 'bg-[#FFFF00]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                    </div>
                                    <div className="flex flex-col place-items-center">
                                        <p className="font-bold">5</p>
                                        <button onClick={() => {handlePotensi(5)}} className={`${ potensiAktif5 ? 'bg-[#FF00FF]' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                    </div>
                                </div>
                            }
                            <FaRegEdit className="hover:scale-125 self-center" onClick={() => setPotensiRumahEdit(!potensiRumahEdit)}/>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="font-regular text-sm">Nama RT</h3>
                        <div className="font-bold flex items-center justify-between">
                            {!RTNameEdit ?
                                <div>{selectedData.RTName}</div> : 
                                <div className="flex flex-col justify-center self-center gap-2">
                                    <div className="flex gap-5 justify-center">
                                        <div className="flex flex-col place-items-center">
                                            <p className="font-bold">RT01</p>
                                            <button onClick={() => {setRTName2('RT01')}} className={`${ RTName2 == 'RT01' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                        </div>
                                        <div className="flex flex-col place-items-center">
                                            <p className="font-bold">RT02</p>
                                            <button onClick={() => {setRTName2('RT02')}} className={`${ RTName2 == 'RT02' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                        </div>
                                        <div className="flex flex-col place-items-center">
                                            <p className="font-bold">RT03</p>
                                            <button onClick={() => {setRTName2('RT03')}} className={`${ RTName2 == 'RT03' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                        </div>
                                    </div>

                                    <div className="flex gap-5 justify-center">
                                        <div className="flex flex-col place-items-center">
                                            <p className="font-bold">RT04</p>
                                            <button onClick={() => {setRTName2('RT04')}} className={`${ RTName2 == 'RT04' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                        </div>
                                        <div className="flex flex-col place-items-center">
                                            <p className="font-bold">RT05</p>
                                            <button onClick={() => {setRTName2('RT05')}} className={`${ RTName2 == 'RT05' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                        </div>
                                        <div className="flex flex-col place-items-center">
                                            <p className="font-bold">RT06</p>
                                            <button onClick={() => {setRTName2('RT06')}} className={`${ RTName2 == 'RT06' ? 'bg-red-600' : 'bg-gray-200'} h-[18px] w-[18px] md:h-6 md:w-6 rounded-full border-2 flex justify-center place-items-center font-bold text-white`}/>
                                        </div>
                                    </div>
                                </div> 
                            }
                            <FaRegEdit className="hover:scale-125 self-center" onClick={() => setRTNameEdit(!RTNameEdit)}/>
                        </div>

                    </div>

                    <div className="flex justify-center gap-1 mt-10">
                        <button className="bg-[#232323] text-white px-3 py-1 text-sm rounded-sm"
                            onClick={() => {console.log(SelectID, namaKepala2, umurKepala2, AnggotaFields2, koordinate2, alamatRumah2, potensiRumah2, RTName2); handleEdit()}}>Edit</button>
                        <button className="bg-red-300 text-black px-3 py-1 text-sm rounded-sm"
                            onClick={() => setPopupEdit(false)}>Cancel</button>
                    </div>
                </div>
            }

            {popupAdd && popupDelete != true && popupEdit != true && 
                <div className="fixed bg-[#f3f3f3] left-[40%] top-[10%] px-5 rounded-md py-5">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Add data</h1>
                        <GridCloseIcon onClick={() => setPopupAdd(false)} className="hover:scale-125"/>
                    </div>
                    <hr className="border-black w-full mt-1 mb-3"/>
                    <InputField/>
                </div>
            }

            {popPie && 
                <div className="fixed bg-[#f3f3f3] left-[40%] top-[10%] px-5 rounded-md py-5">
                    <PieChart
                        series={[
                            {
                            pieData,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        height={200}
                    />
                </div>
            }

            
            <div className="py-5 px-16" id="test">
                <button id="add" className="px-3 py-1 bg-[#232323] text-white rounded-md text-md"
                    onClick={() => setPopupAdd(true)}>Add data</button>
                <button id="add" className="px-3 py-1 bg-[#232323] text-white rounded-md text-md ml-2"
                    onClick={() => {setPopPie(true)}}>Show Pie Chart</button>
                <button className="px-3 py-1 bg-[#232323] text-white rounded-md text-md ml-2 mb-2"
                    onClick={() => router.push('/admin')}>Back to maps</button>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="Data Table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">No.</StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className="flex justify-center place-items-center gap-2">
                                        <p>Nama Kepala Keluarga</p>
                                        {namaKepalaAsc ? 
                                            <FaArrowUp onClick={() => {setNamaKepalaAsc(false); sortDescendantNamaKepala()}}/> : <FaArrowDown onClick={() => {setNamaKepalaAsc(true); sortAscendantNamaKepala()}}/>}
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">Anggota Keluarga</StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className="flex justify-center place-items-center gap-2">
                                        <p>Alamat</p>
                                        {alamatAsc ? 
                                            <FaArrowUp onClick={() => {setAlamatAsc(false); sortDescendantAlamat()}}/> : <FaArrowDown onClick={() => {setAlamatAsc(true); sortAscendantAlamat()}}/>}
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className="flex justify-center place-items-center gap-2">
                                        <p>RT</p>
                                        {RTAsc ? 
                                            <FaArrowUp onClick={() => {setRTAsc(false); sortDescendantRT()}}/> : <FaArrowDown onClick={() => {setRTAsc(true); sortAscendantRT()}}/>}
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className="flex justify-center place-items-center gap-2">
                                        <p>Koordinat Rumah</p>
                                        {koorAsc ? 
                                            <FaArrowUp onClick={() => {setKoorAsc(false); sortDescendantCoordinates()}}/> : <FaArrowDown onClick={() => {setKoorAsc(true); sortAscendantCoordinates()}}/>}
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <div className="flex justify-center place-items-center gap-2">
                                        <p>Potensi</p>
                                        {potensiAsc ? 
                                            <FaArrowUp onClick={() => {setPotensiAsc(false); sortDescendantPotensi()}}/> : <FaArrowDown onClick={() => {setPotensiAsc(true); sortAscendantPotensi()}}/>}
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataAll.length > 0 ?
                                dataAll.map((row, index) => {
                                    return (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell align="center" component="th" scope="row">{index+1}</StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">{row.namaKepala} {row.umurKepala != null && <span>({row.umurKepala})</span>}</StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">
                                            {row.namaAnggota?.map((row, index)=> {
                                                return (
                                                    <div key={index}>{row.name} {row.age != '' && <span>({row.age})</span>}</div>
                                            )})}
                                        </StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">{row.alamat}</StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">{row.RTName}</StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">{row.koordinate.lat},{row.koordinate.lon}</StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">{row.potensi}</StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">
                                            <div className="flex justify-center gap-2">
                                                <FaRegEdit className="hover:scale-150" onClick={() => {handlePopUpEdit(row)}}/>
                                                <FaTrash className="hover:scale-150" onClick={() => handlePopUpDelete(row)}/>
                                            </div>
                                            
                                        </StyledTableCell>
                                    </StyledTableRow>)
                                }) :
                                <StyledTableRow>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell className="font-bold" align="center">
                                        <p className="text-lg">Tidak ada data</p>
                                    </StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell></StyledTableCell>
                                </StyledTableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false}
                pauseOnFocusLoss draggable pauseOnHover theme="light" />
        </>
    )
}