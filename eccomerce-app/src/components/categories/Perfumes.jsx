import { perfumesService } from "../../services/perfumes"
import { useEffect, useState } from "react"
import { PerfumesView } from "../perfums/PerfumesView"

function Perfumes () {
    const [articles, setArticles] = useState([])

    useEffect(() => {
    perfumesService.getAll().then(myPerfums => setArticles(myPerfums))
    }, []) // [] quiere decir que se realiza on mount, cada vez que se carga.

    return (
        <PerfumesView articles= {articles}/>
    )
} 


export { Perfumes }