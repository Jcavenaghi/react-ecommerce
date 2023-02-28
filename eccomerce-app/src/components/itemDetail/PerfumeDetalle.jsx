import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { perfumesService } from "../../services/perfumes";
import { Perfume } from '../item/Perfume';


function PerfumeDetalle () {
    const [perfume, setPerfume] = useState();
    const {itemId} = useParams();

    useEffect(() => {
        perfumesService.getById(itemId).then(
            data => setPerfume(data)
        )
      }, []) // [] quiere decir que se realiza on mount, cada vez que se carga. 
    
    function addToCart() {

    }
    
    return (
            <Perfume 
                id={perfume && perfume.id} 
                image={perfume && `/images/${perfume.img}`}  
                title={perfume && perfume.name}  
                marca={perfume && perfume.marca} 
                descr={perfume && perfume.descr}
                stock={perfume && perfume.stock} 
            />

    );
}

export { PerfumeDetalle }