import './style.scss'

const ButtonDelete = ({deleteProduct, id}) => {
    return ( 
        <button type="button">
                <img onClick={()=>deleteProduct(id)} src="./img/icons/cross.svg" alt="Delete"/>
            </button>
     );
}
 
export default ButtonDelete;