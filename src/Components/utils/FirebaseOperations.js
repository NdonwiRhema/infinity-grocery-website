import { db,storage } from "../../firebase"
import { getDocs,collection,doc,getDoc,setDoc,where,query,updateDoc} from "firebase/firestore"
import {ref,uploadBytesResumable} from 'firebase/storage'

export const pullAll = (collections)=>{
    const newvalues =  getDocs(collection(db,collections))
    return newvalues
}
export const pull =(collection,docId)=>{
    const docRef = doc(db,collection,docId)
     return getDoc(docRef).then((snapShot)=>snapShot.data())
    }
export const push =(collections,data,docId)=>{
        return  setDoc(doc(db,collections,docId),data).then((result)=>result)
    } 
export const updateFirebase = (collections,docId,data)=>{
        const docRef = doc(db,collections,docId)
        return  updateDoc(docRef,data).then((res)=>res)
    }
    
export const pullWhere = async (collections,field,value,operation)=>{
        const q = query(collection(db,collections),where(field,operation,value))
        const querySnapshot = await getDocs(q)
        return querySnapshot
    }
export const  FirebaseUpload = (images)=>{
        const storageRef = ref(storage,`profiles/${images.ID}`)
                const metadata= {
                    contentType:'image/jpeg',
                }
                const uploadTask = uploadBytesResumable(storageRef,images.files,metadata)
    return uploadTask
            }