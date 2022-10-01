import axios from "axios";
import {useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";

const HomePage = () =>{
  const [products,setProducts] = useState([]);
  const navigate = useNavigate();
  const apiCall = async () =>{
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response.data);
    setProducts(response.data);
  }

  useEffect(()=>{
       apiCall()
  },[])

  const fun = (id) =>{
    console.log('fun call',id);
      navigate(`/product/${id}`);
  }
    return(
    <>
    <h2>HomePage</h2>
     <div className="products-container">
        <table cellPadding={20}>
            <tbody>
            
                <tr>
               
                    <th>Id</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Image</th>
                   
                    </tr>
                {
                  products &&  products.map((product) => (
                       
                        <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.category}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.rating.rate}</td>
                         {/* <td><button onClick={()=> fun(product.id)}>{<img src={product.image} alt="product.id" style={{width:100}}/>} </button></td>  */}
                        <Link to={`product/${product.id}`}> <td><img src={product.image} alt="product.id" style={{width:100}}/></td></Link>
                       
                        {/* <td><button onClick={()=> fun(product.id)}>detail</button></td> */}
                     
                        </tr>
                      
                  ))
                }
                  
            </tbody>
        </table>
     </div>
    </>
    )
}
export default HomePage;