import axios from "axios";

const API_URL="mellow-patience-production-90e5.up.railway.app";

class ProductService {
  

    saveProduct(product){
        return axios.post(API_URL+"/saveProduct", product);

    }

    getAllProduct(){
        return axios.get(API_URL+"/");

    }

    
    getProductById(id){
        return axios.get(API_URL+"/"+id);
    }

    
    deleteProduct(id){
        return axios.get(API_URL+"/deleteProduct/"+id);
    }
    
    editProduct(product,id){
        return axios.put(API_URL+"/editProduct/"+id, product)

    }


}

export default new ProductService;