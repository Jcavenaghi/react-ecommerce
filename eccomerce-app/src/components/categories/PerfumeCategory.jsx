import { useParams } from "react-router-dom"
function PerfumeCategory() {
    const {categoryId} = useParams()
    return (
        <div>Categoria: {categoryId}</div>
    )
}

export { PerfumeCategory };