import { initializeApp } from "firebase/app";
import { getFirestore, where } from "firebase/firestore";
import { collection, getDocs, query, doc , getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyAB4LCnU8Ey8IVd0wJskIxAe0frUyLyI",
  authDomain: "tienda-de-bebidas-10ead.firebaseapp.com",
  projectId: "tienda-de-bebidas-10ead",
  storageBucket: "tienda-de-bebidas-10ead.appspot.com",
  messagingSenderId: "1024065121009",
  appId: "1:1024065121009:web:58464644d599ed3ec79750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (categoryId) =>{
    let q;
    if(categoryId){
        //todas las bebidas de una categoria
        q = query(collection(db, "bebidas"), where('categoryId', '==', categoryId));
    }
    else{
        //todas las bebidas
        q = query(collection(db, "bebidas"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
}
export const firestoreFetchDetail = async (id) =>{
    const docRef = doc(db, "bebidas", `${id}`);
    const docSnap = await getDoc(docRef);
    
    const dataFromFirestore = docSnap.data()
    dataFromFirestore.id= id;
    
    return dataFromFirestore
}