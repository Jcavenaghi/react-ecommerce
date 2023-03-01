import {getFirestore, doc, addDoc, getDoc, getDocs, collection} from 'firebase/firestore'

const getByCategory = (cat) => {
    
}

const getAll = async () => {
    const db = getFirestore();
    const perfumeCollection = collection(db, 'perfumes')
    const snapshot = await getDocs(perfumeCollection);
    const perfumes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return perfumes;
}


const getById = async (id) => {
    const db = getFirestore();
    const perfume = doc(db, 'perfumes', id);
    const snapshot = await getDoc(perfume);
   return {id: snapshot.id, ...snapshot.data()};
}

/* metodos para agregar en firebase */

const add = async (order) => {
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const response = await addDoc(ordersCollection, order)
    return response.id
}

export const perfumesService = {getAll, getById, getByCategory, add}