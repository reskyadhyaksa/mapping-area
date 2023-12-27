export const TablePenduduk = ({NamaKepala, UmurKepala, AnggotaKeluarga, JumlahKeluarga, Alamat, Koordinat, AngkaPotensi}) => {
    return (
        <>
            <div className="font-bold flex flex-col">
                <div>{NamaKepala}</div><br/>
                <div>{UmurKepala}</div>
                <div>{AnggotaKeluarga}</div>
                <div>{JumlahKeluarga}</div>
                <div>{Alamat}</div>
                <div>{Koordinat}</div>
                <div>{AngkaPotensi}</div>
            </div>
        </>
    )


}