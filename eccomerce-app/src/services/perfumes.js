
 /* hacemos una petición al .json para obtener todos
    los perfumes con sus detalles. */
const getAll = async () => {

    const response = await fetch('perfumes.json')
    const data = await response.json()

    return data;
}

const getById = (id) => {

}

const getByCategory = (cat) => {
    
}

export const perfumesService = {getAll}