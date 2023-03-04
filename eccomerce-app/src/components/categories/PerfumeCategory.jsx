import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { perfumesService } from "../../services/perfumes";
import { PerfumesView } from "../perfums/PerfumesView";

function PerfumeCategory() {
    const {categoryId} = useParams()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        perfumesService.getByCategory(categoryId).then(myPerfums => setArticles(myPerfums))
    }, [categoryId]) // [] quiere decir que se realiza on mount, cada vez que se carga.

    return (
        <PerfumesView articles= {articles}/>
    )
}

export { PerfumeCategory };