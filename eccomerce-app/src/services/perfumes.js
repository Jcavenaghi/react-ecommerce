import {getFirestore, doc, addDoc, getDoc, getDocs, collection, query, where, updateDoc, arrayUnion, increment} from 'firebase/firestore'


// const getByCategory = (cat) => {
    
// }

const getAll = async () => {
    const db = getFirestore()
    const perfumeCollection = collection(db, 'perfumes')
    const snapshot = await getDocs(perfumeCollection);
    const perfumes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return perfumes;
}


const getById = async (id) => {
    const db = getFirestore()
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

const getCartById = async (id) => {
    const db = getFirestore()
    const cart = doc(db, 'carts', id);
    const snapshot = await getDoc(cart);
   return {id: snapshot.id, ...snapshot.data()};
}


const addCart = async (cart) => {
    const db = getFirestore()
    const cartsCollection = collection(db, "carts")
    const response = await addDoc(cartsCollection, cart)
    return response
}

const updateCartWithNewItem  = async (id, item, monto) => {
    const db = getFirestore()
    const cart = doc(db, "carts", id)
    console.log(cart)
    updateDoc (cart, {'items': arrayUnion(item)})
    updateDoc (cart, {'total': increment(monto)})
    updateDoc (cart, {'totalItems': increment(1)})
}

const updateCart= async (id, items, monto) => {
    const db = getFirestore()
    const cart = doc(db, "carts", id)
    updateDoc (cart, {'items': items})
    updateDoc (cart, {'total': increment(monto)}) 
    updateDoc (cart, {'totalItems': increment(1)})
}


export const perfumesService = {getAll, getById, add, addCart, getCartById, updateCart, updateCartWithNewItem}