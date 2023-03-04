import {getFirestore, doc, addDoc, getDoc, getDocs, collection, query, where, updateDoc, arrayUnion, increment, deleteDoc} from 'firebase/firestore'


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

/* metodos para orders */

const add = async (order) => {
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const response = await addDoc(ordersCollection, order)
    return response
}


/* Metodos para trabajar con el carrito de la firebase.
    getCartById: Obtiene un carrito según la ID enviada como paramentro
    y retorna la ID, y los datos del mismo. */
const getCartById = async (id) => {
    const db = getFirestore()
    const cart = doc(db, 'carts', id);
    const snapshot = await getDoc(cart);
   return {id: snapshot.id, ...snapshot.data()};
}

/* addCart = Añade a la colección (carts) de la firebase un nuevo
    carrito enviado como parametro. Este es el que se le asigna al
    usuario. */

const addCart = async (cart) => {
    const db = getFirestore()
    const cartsCollection = collection(db, "carts")
    const response = await addDoc(cartsCollection, cart)
    return response
}


/* UpdateCartWithNewItem = agregara un item NUEVO a un carrito.
    Tanto el carrito como el nuevo item, son pasados como parametro.*/
const updateCartWithNewItem  = async (id, item, monto) => {
    const db = getFirestore()
    const cart = doc(db, "carts", id)
    updateDoc (cart, {'items': arrayUnion(item)})
    updateDoc (cart, {'total': increment(monto)})
    updateDoc (cart, {'totalItems': increment(1)})
}

/* UpdateCartWithNewItem = agregara un item EXISTENTE a un carrito.
    Tanto el carrito como el nuevo item, son pasados como parametro.*/
const updateCart= async (id, items, monto) => {
    const db = getFirestore()
    const cart = doc(db, "carts", id)
    updateDoc (cart, {'items': items})
    updateDoc (cart, {'total': increment(monto)}) 
    updateDoc (cart, {'totalItems': increment(1)})
}


/* deleteCart = Borra un carrito de la base de datos. */
const deleteCart = async (id) => {
    const db = getFirestore()
    const response = await deleteDoc(doc(db, "carts", id));
    return response
}

const deleteItem = async (id, items, monto) => {
    const db = getFirestore()
    const cart = doc(db, "carts", id)
    updateDoc (cart, {'items': items})
    updateDoc (cart, {'total': increment(-monto)}) 
    updateDoc (cart, {'totalItems': increment(-1)})

}

export const perfumesService = {getAll, getById, add, addCart, getCartById, updateCart, updateCartWithNewItem, deleteCart, deleteItem}