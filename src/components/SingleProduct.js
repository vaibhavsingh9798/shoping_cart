import {useState,useEffect} from "react";
import {useParams,useLocation} from "react-router-dom";
import axios from "axios";


const SingleProduct  = () =>{
    const [product,setProduct] = useState();
     const location = useLocation();
     console.log('loc',location);
     console.log('loc.s',location.state);
    // const {id} state;
    // console.log(id);
    // const {itemId}= route.params;
    let {id} = useParams();
     
 
    
    
    const apiCall2 = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response.data)
          console.log(response);
    }

    useEffect(() =>{
    apiCall2();
    },[])

    return(
        <>
        <h2>{product && product.title}</h2>
        <table>
        <tbody>
                <tr>
                    <th>Id</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Image</th>
                    <th>Description</th>
                  
                    </tr>
                       { 
                      product && (
                        <tr>
                        <td>{product.id}</td>
                        <td>{product.category}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.rating.rate}</td>
                        <td>{<img src={product.image} alt="product.id" style={{width:100}}/>}</td>
                        <td>{product.description}</td>

                        </tr>)
                }  
            </tbody>
        </table>
        </>
    )
}

export default SingleProduct;