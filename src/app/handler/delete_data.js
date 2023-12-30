import { db } from "@/app/firebase/config"
import { deleteDoc, doc, collection } from "firebase/firestore"

const deleteData = async ( row ) => {
    let temp_data = row
    console.log()
    const docRef = doc(collection(db, temp_data.RTName), temp_data.id);
    await deleteDoc(docRef)
}

export default deleteData;