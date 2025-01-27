import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductByName } from "./src/services/searchBar.js";
import { openModal } from "./src/services/view/modal.js";
import { handleGetProductToStore } from "./src/services/view/store.js";

//aplicacion
export let categoriaActiva=null
export const setCategoriaActiva=(categoriaIn)=>{
    categoriaActiva=categoriaIn
}

export let productoActivo=null
export const setProductoActivo=(productoIn)=>{
    productoActivo=productoIn
}


handleGetProductToStore()
renderCategories()

//header
const buttonAdd=document.getElementById('buttonAddElement')
buttonAdd.addEventListener('click',()=>{
    openModal()
})

//buttonSearch
const buttonSearch=document.getElementById('buttonSearch')
buttonSearch.addEventListener('click',()=>{
    handleSearchProductByName()
})