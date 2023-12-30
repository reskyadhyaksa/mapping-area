import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config'; 

const getAllData = async () => {
    let temp_array = [];
    const colRef1 = collection(db, 'RT01');
    const snapshot1 = await getDocs(colRef1);
    const docs1 = snapshot1.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
    });

    docs1.forEach((index, i) => {
        const koordinateStr = index.koordinate || '';
        const koorArr = koordinateStr.split(',');
        const trimmedVal = koorArr.map((value) => value.trim());
        let temp_koor = {lat: parseFloat(trimmedVal[0]), lon: parseFloat(trimmedVal[1])}
        temp_array.push({
            id: index.id,
            namaKepala: index.nama_kepala_keluarga,
            umurKepala: index.umur_kepala_keluarga,
            namaAnggota: index.anggota_keluarga,
            alamat: index.alamat,
            jumlahAnggota: index.jumlah_anggota_keluarga,
            koordinate: temp_koor,
            potensi: index.angka_potensi,
            RTName: 'RT01',
        })
    })

    const colRef2 = collection(db, 'RT02');
    const snapshot2 = await getDocs(colRef2);
    const docs2 = snapshot2.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
    });

    docs2.forEach((index, i) => {
        const koordinateStr = index.koordinate || '';
        const koorArr = koordinateStr.split(',');
        const trimmedVal = koorArr.map((value) => value.trim());
        let temp_koor = {lat: parseFloat(trimmedVal[0]), lon: parseFloat(trimmedVal[1])}

        temp_array.push({
            id: index.id,
            namaKepala: index.nama_kepala_keluarga,
            umurKepala: index.umur_kepala_keluarga,
            namaAnggota: index.anggota_keluarga,
            alamat: index.alamat,
            jumlahAnggota: index.jumlah_anggota_keluarga,
            koordinate: temp_koor,
            potensi: index.angka_potensi,
            RTName: 'RT02',
        })
    })
    
    const colRef3 = collection(db, 'RT03');
    const snapshot3 = await getDocs(colRef3);
    const docs3 = snapshot3.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
    });

    docs3.forEach((index, i) => {
        const koordinateStr = index.koordinate || '';
        const koorArr = koordinateStr.split(',');
        const trimmedVal = koorArr.map((value) => value.trim());
        let temp_koor = {lat: parseFloat(trimmedVal[0]), lon: parseFloat(trimmedVal[1])}

        temp_array.push({
            id: index.id,
            namaKepala: index.nama_kepala_keluarga,
            umurKepala: index.umur_kepala_keluarga,
            namaAnggota: index.anggota_keluarga,
            alamat: index.alamat,
            jumlahAnggota: index.jumlah_anggota_keluarga,
            koordinate: temp_koor,
            potensi: index.angka_potensi,
            RTName: 'RT03',
        })
    })
    
    const colRef4 = collection(db, 'RT04');
    const snapshot4 = await getDocs(colRef4);
    const docs4 = snapshot4.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
    });

    docs4.forEach((index, i) => {
        const koordinateStr = index.koordinate || '';
        const koorArr = koordinateStr.split(',');
        const trimmedVal = koorArr.map((value) => value.trim());
        let temp_koor = {lat: parseFloat(trimmedVal[0]), lon: parseFloat(trimmedVal[1])}

        temp_array.push({
            id:index.id,
            namaKepala: index.nama_kepala_keluarga,
            umurKepala: index.umur_kepala_keluarga,
            namaAnggota: index.anggota_keluarga,
            alamat: index.alamat,
            jumlahAnggota: index.jumlah_anggota_keluarga,
            koordinate: temp_koor,
            potensi: index.angka_potensi,
            RTName: 'RT04',
        })
    })

    const colRef5 = collection(db, 'RT05');
    const snapshot5 = await getDocs(colRef5);
    const docs5 = snapshot5.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
    });

    docs5.forEach((index, i) => {
        const koordinateStr = index.koordinate || '';
        const koorArr = koordinateStr.split(',');
        const trimmedVal = koorArr.map((value) => value.trim());
        let temp_koor = {lat: parseFloat(trimmedVal[0]), lon: parseFloat(trimmedVal[1])}

        temp_array.push({
            id: index.id,
            namaKepala: index.nama_kepala_keluarga,
            umurKepala: index.umur_kepala_keluarga,
            namaAnggota: index.anggota_keluarga,
            alamat: index.alamat,
            jumlahAnggota: index.jumlah_anggota_keluarga,
            koordinate: temp_koor,
            potensi: index.angka_potensi,
            RTName: 'RT05',
        })
    })

    const colRef6 = collection(db, 'RT06');
    const snapshot6 = await getDocs(colRef6);
    const docs6 = snapshot6.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
    });

    docs6.forEach((index, i) => {
        const koordinateStr = index.koordinate || '';
        const koorArr = koordinateStr.split(',');
        const trimmedVal = koorArr.map((value) => value.trim());
        let temp_koor = {lat: parseFloat(trimmedVal[0]), lon: parseFloat(trimmedVal[1])}

        temp_array.push({
            id: index.id,
            namaKepala: index.nama_kepala_keluarga,
            umurKepala: index.umur_kepala_keluarga,
            namaAnggota: index.anggota_keluarga,
            alamat: index.alamat,
            jumlahAnggota: index.jumlah_anggota_keluarga,
            koordinate: temp_koor,
            potensi: index.angka_potensi,
            RTName: 'RT06',
        })
    })
    
    console.log('V :', temp_array)
    return temp_array;
}

export default getAllData;