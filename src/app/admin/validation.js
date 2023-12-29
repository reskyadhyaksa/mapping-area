export default function Validation(namaKepala, koord) {

    if (namaKepala == ''){
        return 'Nama Kepala Keluarga Required'
    }
    
    if (koord == ''){
        return 'Koordinate Rumah Required'
    }
}