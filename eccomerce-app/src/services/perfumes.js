import { perfumes } from "../data/perfumes";
 /* hacemos una petición al .json para obtener todos
    los perfumes con sus detalles. */
const getAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(perfumes);
        }, [500]);
    });
    };

const getById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(perfumes.find((elem) => elem.id.toString() === id));
        }, [500]);
    });
    };

const getByCategory = (cat) => {
    
}

export const perfumesService = {getAll, getById, getByCategory}