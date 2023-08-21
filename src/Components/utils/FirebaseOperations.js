import { db } from "../../firebase"
import { getDocs,collection,doc,getDoc } from "firebase/firestore"


export const pullAll = (collections)=>{
    const newvalues =  getDocs(collection(db,collections))
    return newvalues
}
export const pull =(collection,docId)=>{
    const docRef = doc(db,collection,docId)
     return getDoc(docRef).then((snapShot)=>snapShot.data())
    }