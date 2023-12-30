'use client'

import getAllData from "@/app/handler/get_data";
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";

import { data } from "autoprefixer";
import { use, useEffect, useState } from 'react';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import StyledTableCell from "./styled_table_cell";
import StyledTableRow from "./styled_table_row";
import { GridCloseIcon } from "@mui/x-data-grid";
import deleteData from "@/app/handler/delete_data";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/navigation";
import InputField from "../form";



export default function PendudukPage() {
    const router = useRouter()
    const [ dataAll, setAllData ] = useState([]);
    const [ selectedData, setSelectedData ] = useState([]);
    const [ popupDelete, setPopupDelete ] = useState(false);
    const [ popupAdd, setPopupAdd ] = useState(false);
    const [ popupEdit, setPopupEdit ] = useState(false);

    const [ namaKepala, setNamaKepala ] = useState('');
    const [ namaKepalaEdit, setNamaKepalaEdit ] = useState(true);

    const [ umurKepala, setUmurKepala ] = useState(null);
    const [ umurKepalaEdit, setUmurKepalaEdit ] = useState(true);

    const [ anggotaKeluarga, setAnggotaKeluarga ] = useState([]);
    const [ anggotaKeluargaEdit, setAnggotaKeluargaEdit ] = useState(true);
    
    const [ alamatRumah, setAlamatRumah ] = useState('');
    const [ alamatRumahEdit, setAlamatRumahEdit ] = useState(true);

    const [ koordinate, setKoordinate ] = useState('');
    const [ koordinateEdit, setKoordinateEdit ] = useState(true);

    const [ potensiRumah, setPotensiRumah ] = useState(null);
    const [ potensiRumahEdit, setPotensiRumahEdit ] = useState(true);

    const fetchData = async () => {
        try {
            const result = await getAllData();
            setAllData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        if ( selectedData.length > 0 ) {
            setNamaKepala(selectedData.namaKepala)
            setUmurKepala(selectedData.umurKepala)
            setAnggotaKeluarga(selectedData.namaAnggota)
            setAlamatRumah(selectedData.alamat)
            setPotensiRumah(selectedData.potensi)
        }
    }, []);

    const handleEdit = (row) => {
        console.log(row)
    }

    const handlePopUpDelete = (row) => {
        setSelectedData(row);
        setPopupDelete(!popupDelete)
    }

    const handlePopUpEdit = (row) => {
        setSelectedData(row);
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
    


    return(
        <>
            {popupDelete && popupAdd != true && popupEdit != true && 
                <div className="absolute left-[40%] top-[20%] w-[300px] rounded-md px-5 py-5 bg-[#f3f3f3] border-2 border-black text-black">
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
                <div className="absolute left-[40%] top-[20%] w-[300px] rounded-md px-5 py-5 bg-[#f3f3f3] border-2 border-black text-black">
                    <div className="flex justify-between">
                        <div className="font-bold">Edit data</div>
                        <GridCloseIcon onClick={() => setPopupEdit(false)}/>
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
                                    <input required placeholder="Nama" min={1} value={namaKepala} onChange={(e) => setNamaKepala(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-[150px] px-2 text-black" type="text"/>
                                    <input required placeholder="Umur" 
                                        value={umurKepala} type="number" onChange={(e) => setUmurKepala(e.target.value)}
                                        className="nama border-2 outline-none rounded-md w-20 px-2 ml-1 text-black 
                                            [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                                </div>
                            }
                        <FaRegEdit className="hover:scale-125" onClick={() => setNamaKepalaEdit(!namaKepalaEdit)}/>
                        </div>
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

            {popupAdd && popupDelete != true && popupEdit != true && 
                <div className="absolute bg-[#f3f3f3] left-[40%] top-[10%] px-5 rounded-md py-5">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">Add data</h1>
                        <GridCloseIcon onClick={() => setPopupAdd(false)} className="hover:scale-125"/>
                    </div>
                    <hr className="border-black w-full mt-1 mb-3"/>
                    <InputField/>
                </div>
            }



            
            <div className="py-5 px-16">
                <button className="px-3 py-1 bg-[#232323] text-white rounded-md text-md"
                    onClick={() => setPopupAdd(true)}>Add data</button>
                <button className="px-3 py-1 bg-[#232323] text-white rounded-md text-md ml-2 mb-2"
                    onClick={() => router.push('/admin')}>Back to maps</button>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="Data Table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">No.</StyledTableCell>
                                <StyledTableCell align="center">Nama Kepala Keluarga</StyledTableCell>
                                <StyledTableCell align="center">Anggota Keluarga</StyledTableCell>
                                <StyledTableCell align="center">Alamat Rumah</StyledTableCell>
                                <StyledTableCell align="center">RT</StyledTableCell>
                                <StyledTableCell align="center">Koordinat Rumah</StyledTableCell>
                                <StyledTableCell align="center">Potensi</StyledTableCell>
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
                                                <FaRegEdit className="hover:scale-150" onClick={() => handlePopUpEdit(row)}/>
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