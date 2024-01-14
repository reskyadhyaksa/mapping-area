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
        let pathname = '';

        if(index.angka_potensi == '1'){
            pathname = 'circle1.png'
        } else if (index.angka_potensi == '2'){
            pathname = 'circle2.png'
        } else if (index.angka_potensi == '3'){
            pathname = 'circle3.png'
        } else if (index.angka_potensi == '4'){
            pathname = 'circle4.png'
        } else if (index.angka_potensi == '5'){
            pathname = 'circle5.png'
        } else if (index.angka_potensi == '4a'){
            pathname = 'circle6.png'
        } else if (index.angka_potensi == '5a'){
            pathname = 'circle7.png'
        } else if (index.angka_potensi == '6'){
            pathname = 'circle8.png'
        } else if (index.angka_potensi == '6b'){
            pathname = 'circle9.png'
        } else if (index.angka_potensi == '7'){
            pathname = 'circle10.png'
        } else if (index.angka_potensi == '7a'){
            pathname = 'circle11.png'
        } else if (index.angka_potensi == '8'){
            pathname = 'circle12.png'
        } else if (index.angka_potensi == '9'){
            pathname = 'circle13.png'
        } else if (index.angka_potensi == '5b'){
            pathname = 'circle14.png'
        } else if (index.angka_potensi == '3a'){
            pathname = 'circle15.png'
        } else if (index.angka_potensi == '6c'){
            pathname = 'circle16.png'
        } else if (index.angka_potensi == '7b'){
            pathname = 'circle17.png'
        } else if (index.angka_potensi == '8a'){
            pathname = 'circle18.png'
        } else if (index.angka_potensi == '9a'){
            pathname = 'circle19.png'
        } else if (index.angka_potensi == '9b'){
            pathname = 'circle20.png'
        } else if (index.angka_potensi == '10'){
            pathname = 'circle21.png'
        } else if (index.angka_potensi == '9c'){
            pathname = 'circle22.png'
        } else if (index.angka_potensi == '10a'){
            pathname = 'circle23.png'
        } else if (index.angka_potensi == '11'){
            pathname = 'circle24.png'
        } else if (index.angka_potensi == '12'){
            pathname = 'circle25.png'
        } else if (index.angka_potensi == '10b'){
            pathname = 'circle26.png'
        } else if (index.angka_potensi == '11a'){
            pathname = 'circle27.png'
        } else if (index.angka_potensi == '12a'){
            pathname = 'circle28.png'
        } else if (index.angka_potensi == '13'){
            pathname = 'circle29.png'
        } else if (index.angka_potensi == '14'){
            pathname = 'circle30.png'
        } else if (index.angka_potensi == '15'){
            pathname = 'circle31.png'
        }


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
            circlePath : pathname,
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
        let pathname = '';

        if(index.angka_potensi == '1'){
            pathname = 'circle1.png'
        } else if (index.angka_potensi == '2'){
            pathname = 'circle2.png'
        } else if (index.angka_potensi == '3'){
            pathname = 'circle3.png'
        } else if (index.angka_potensi == '4'){
            pathname = 'circle4.png'
        } else if (index.angka_potensi == '5'){
            pathname = 'circle5.png'
        } else if (index.angka_potensi == '4a'){
            pathname = 'circle6.png'
        } else if (index.angka_potensi == '5a'){
            pathname = 'circle7.png'
        } else if (index.angka_potensi == '6'){
            pathname = 'circle8.png'
        } else if (index.angka_potensi == '6b'){
            pathname = 'circle9.png'
        } else if (index.angka_potensi == '7'){
            pathname = 'circle10.png'
        } else if (index.angka_potensi == '7a'){
            pathname = 'circle11.png'
        } else if (index.angka_potensi == '8'){
            pathname = 'circle12.png'
        } else if (index.angka_potensi == '9'){
            pathname = 'circle13.png'
        } else if (index.angka_potensi == '5b'){
            pathname = 'circle14.png'
        } else if (index.angka_potensi == '3a'){
            pathname = 'circle15.png'
        }


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
            circlePath : pathname,
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
        let pathname = '';

        if(index.angka_potensi == '1'){
            pathname = 'circle1.png'
        } else if (index.angka_potensi == '2'){
            pathname = 'circle2.png'
        } else if (index.angka_potensi == '3'){
            pathname = 'circle3.png'
        } else if (index.angka_potensi == '4'){
            pathname = 'circle4.png'
        } else if (index.angka_potensi == '5'){
            pathname = 'circle5.png'
        } else if (index.angka_potensi == '4a'){
            pathname = 'circle6.png'
        } else if (index.angka_potensi == '5a'){
            pathname = 'circle7.png'
        } else if (index.angka_potensi == '6'){
            pathname = 'circle8.png'
        } else if (index.angka_potensi == '6b'){
            pathname = 'circle9.png'
        } else if (index.angka_potensi == '7'){
            pathname = 'circle10.png'
        } else if (index.angka_potensi == '7a'){
            pathname = 'circle11.png'
        } else if (index.angka_potensi == '8'){
            pathname = 'circle12.png'
        } else if (index.angka_potensi == '9'){
            pathname = 'circle13.png'
        } else if (index.angka_potensi == '5b'){
            pathname = 'circle14.png'
        } else if (index.angka_potensi == '3a'){
            pathname = 'circle15.png'
        }


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
            circlePath : pathname,
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
        let pathname = '';

        if(index.angka_potensi == '1'){
            pathname = 'circle1.png'
        } else if (index.angka_potensi == '2'){
            pathname = 'circle2.png'
        } else if (index.angka_potensi == '3'){
            pathname = 'circle3.png'
        } else if (index.angka_potensi == '4'){
            pathname = 'circle4.png'
        } else if (index.angka_potensi == '5'){
            pathname = 'circle5.png'
        } else if (index.angka_potensi == '4a'){
            pathname = 'circle6.png'
        } else if (index.angka_potensi == '5a'){
            pathname = 'circle7.png'
        } else if (index.angka_potensi == '6'){
            pathname = 'circle8.png'
        } else if (index.angka_potensi == '6b'){
            pathname = 'circle9.png'
        } else if (index.angka_potensi == '7'){
            pathname = 'circle10.png'
        } else if (index.angka_potensi == '7a'){
            pathname = 'circle11.png'
        } else if (index.angka_potensi == '8'){
            pathname = 'circle12.png'
        } else if (index.angka_potensi == '9'){
            pathname = 'circle13.png'
        } else if (index.angka_potensi == '5b'){
            pathname = 'circle14.png'
        } else if (index.angka_potensi == '3a'){
            pathname = 'circle15.png'
        }


        temp_array.push({
            id: index.id,
            namaKepala: index.nama_kepala_keluarga,
            umurKepala: index.umur_kepala_keluarga,
            namaAnggota: index.anggota_keluarga,
            alamat: index.alamat,
            jumlahAnggota: index.jumlah_anggota_keluarga,
            koordinate: temp_koor,
            potensi: index.angka_potensi,
            RTName: 'RT04',
            circlePath : pathname,
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
        let pathname = '';

        if(index.angka_potensi == '1'){
            pathname = 'circle1.png'
        } else if (index.angka_potensi == '2'){
            pathname = 'circle2.png'
        } else if (index.angka_potensi == '3'){
            pathname = 'circle3.png'
        } else if (index.angka_potensi == '4'){
            pathname = 'circle4.png'
        } else if (index.angka_potensi == '5'){
            pathname = 'circle5.png'
        } else if (index.angka_potensi == '4a'){
            pathname = 'circle6.png'
        } else if (index.angka_potensi == '5a'){
            pathname = 'circle7.png'
        } else if (index.angka_potensi == '6'){
            pathname = 'circle8.png'
        } else if (index.angka_potensi == '6b'){
            pathname = 'circle9.png'
        } else if (index.angka_potensi == '7'){
            pathname = 'circle10.png'
        } else if (index.angka_potensi == '7a'){
            pathname = 'circle11.png'
        } else if (index.angka_potensi == '8'){
            pathname = 'circle12.png'
        } else if (index.angka_potensi == '9'){
            pathname = 'circle13.png'
        } else if (index.angka_potensi == '5b'){
            pathname = 'circle14.png'
        } else if (index.angka_potensi == '3a'){
            pathname = 'circle15.png'
        }


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
            circlePath : pathname,
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
        let pathname = '';

        if(index.angka_potensi == '1'){
            pathname = 'circle1.png'
        } else if (index.angka_potensi == '2'){
            pathname = 'circle2.png'
        } else if (index.angka_potensi == '3'){
            pathname = 'circle3.png'
        } else if (index.angka_potensi == '4'){
            pathname = 'circle4.png'
        } else if (index.angka_potensi == '5'){
            pathname = 'circle5.png'
        } else if (index.angka_potensi == '4a'){
            pathname = 'circle6.png'
        } else if (index.angka_potensi == '5a'){
            pathname = 'circle7.png'
        } else if (index.angka_potensi == '6'){
            pathname = 'circle8.png'
        } else if (index.angka_potensi == '6b'){
            pathname = 'circle9.png'
        } else if (index.angka_potensi == '7'){
            pathname = 'circle10.png'
        } else if (index.angka_potensi == '7a'){
            pathname = 'circle11.png'
        } else if (index.angka_potensi == '8'){
            pathname = 'circle12.png'
        } else if (index.angka_potensi == '9'){
            pathname = 'circle13.png'
        } else if (index.angka_potensi == '5b'){
            pathname = 'circle14.png'
        } else if (index.angka_potensi == '3a'){
            pathname = 'circle15.png'
        }


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
            circlePath : pathname,
        })
    })
    
    return temp_array;
}

export default getAllData;