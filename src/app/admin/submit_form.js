import { list } from "postcss";
import { useState } from "react"

export const SubmitForm = () => {
    const [ namaKepala, setNamaKepala ] = useState('');
    const [ umurKepala, setUmurKepala ] = useState(0);
    const [ AnggotaKeluarga, setAnggotaKeluarga ] = useState([]);
    const [ JumlahAnggota, setJumlahAnggota ] = useState(0);
    const [ Alamat, setAlamat ] = useState('');
    const [ Koordinate, setKoordinate ] = useState('');
    const [ AngkaPotensi, setAngkaPotensi ] = useState(0);

    const [ listNama, setListNama ] = useState([{nama: ''}]);

    return (
        <>
            <div className="flex flex-col w-full gap-2">

                {/** Nama Kepala Keluarga */}
                <div><p className="w-full font-bold">Nama Kepala Keluarga</p>
                <input required placeholder="" min={1} value={namaKepala} onChange={(e) => setNamaKepala(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2" type="text"/></div>

                {/** Umur Kepala Keluarga */}
                <div><p className="w-full font-bold">Umur Kepala Keluarga</p>
                <input required placeholder="" min={1} value={umurKepala} onChange={(e) => setUmurKepala(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2"/></div>

                {/** Nama Anggota Keluarga */}
                <div><p className="w-full font-bold">Nama Anggota Keluarga</p>
                {
                    listNama.map((e, i) => {
                        <div>
                            <input name="namaKeluarga" value={e}/>
                            <button className="border-2 px-2 py-1 bg-slate-200">-</button>
                        </div>
                    })
                }
                </div>

                {/** Jumlah Anggota Keluarga */}
                <div><p className="w-full font-bold">Jumlah Anggota Keluarga</p>
                <input required placeholder="" min={1} value={JumlahAnggota} onChange={(e) => setJumlahAnggota(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2"/></div>

                {/** Alamat Rumah */}
                <div><p className="w-full font-bold">Alamat</p>
                <input required placeholder="" value={Alamat} onChange={(e) => setAlamat(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2" type="text"/></div>

                {/** Koordinat Rumah */}
                <div><p className="w-full font-bold">Koordinat</p>
                <input required placeholder="" value={Koordinate} onChange={(e) => setKoordinate(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2" type="text"/></div>

                {/** Angka Potensi */}
                <div><p className="w-full font-bold">Angka Potensi</p>
                <input required placeholder="" min={1} value={AngkaPotensi} onChange={(e) => setAngkaPotensi(e.target.value)}
                    className="nama border-2 outline-none rounded-md w-72 px-2" type="text"/></div>

                <a href="#" className="flex self-center border-2 font-bold bg-slate-200 px-10 py-1 rounded-md mt-10">Sumbit</a>
            </div>
        </>
    )
}

