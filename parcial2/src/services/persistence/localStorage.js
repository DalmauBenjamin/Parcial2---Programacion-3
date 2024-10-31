// LOCAL STORAGE
//Traer productos locales
export const handleGetProductLocalStorage=()=>{
    const product=JSON.parse(localStorage.getItem("products"));

    if (product) {
        return product
    }else{
        return[]
    }
}

//Guardar en el localStorage
//recibir los elementos
export const setInLocalStorage=(productIn)=>{
    if (productIn) {
         //traer elementos 
        let productInLocal=handleGetProductLocalStorage();       
        
        const existingIndex=productInLocal.findIndex((productLocal)=>
            productLocal.id==productIn.id
        )

        //verifica si existe el producto
        if (existingIndex!=-1) {
            productInLocal[existingIndex]=productIn
            
        }else{
            //si existe se remplaza si no, se crea   
            productInLocal.push(productIn)
        }
        //setear el array nuevo
        localStorage.setItem("products",JSON.stringify(productInLocal))
    }
}