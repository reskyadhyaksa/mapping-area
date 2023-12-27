import { useState } from "react";

export default function InputField() {
    const [ namaKepala, setNamaKepala ] = useState('');
    const [ umurKepala, setUmurKepala ] = useState(0);
    const [ AnggotaKeluarga, setAnggotaKeluarga ] = useState([
        {nama: '', umur: '',}
    ]);
    const [ JumlahAnggota, setJumlahAnggota ] = useState(0);
    const [ Alamat, setAlamat ] = useState('');
    const [ Koordinate, setKoordinate ] = useState('');
    const [ AngkaPotensi, setAngkaPotensi ] = useState(0);

    const [AnggotaFields, setAnggotaFields] = useState([
        { name: '', age: '' },
    ])
    
    const handleAnggotaChange = (event, index) => {
        let data = [...AnggotaFields];
        data[index][event.target.name] = event.target.value;
        setAnggotaFields(data);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(AnggotaFields)
    }

    const addFields = () => {
        let object = {
            name: '',
            age: ''
        }

        setAnggotaFields([...AnggotaFields, object])
    }

    const removeFields = (index) => {
        let data = [...AnggotaFields];
        data.splice(index, 1)
        setAnggotaFields(data)
    }
    return (
        <>
            <div className="App">
                <form onSubmit={submit}>
                    {AnggotaFields.map((Anggota, index) => {
                    return (
                        <div key={index}>
                        <input
                            name='name'
                            placeholder='Name'
                            onChange={event => handleAnggotaChange(event, index)}
                            value={Anggota.name}
                        />
                        <input
                            name='age'
                            placeholder='Age'
                            onChange={event => handleAnggotaChange(event, index)}
                            value={Anggota.age}
                        />
                        <button onClick={() => removeFields(index)}>Remove</button>
                        </div>
                    )
                    })}
                </form>
                <button onClick={addFields}>Add More..</button>
                <br />
                <button onClick={submit}>Submit</button>
            </div>
        </>
    )
}