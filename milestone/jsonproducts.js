import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { CSVLink } from "react-csv";
export default function Jsonproduct() {
    const [dat, setdat] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(details => setdat(details))
    })
    const csvdata= dat;
    return (
        <>
    {
        <div>
        <h1 className="heading text-center text-decoration-underline">API Product Details</h1>
        <CSVLink  data={csvdata.map((index,value)=>(
                {
                  Id:index.id,
                  Title:index.title,
                  Price:index.price,
                  Description:index.description,
                  Category:index.category,
                  Image:index.image,
                  Rate:index.rating.rate,
                }
        ))
        }><button className="dwnld bg-primary rounded">Download CSV</button></CSVLink>
        </div>
    },
    {
      dat.map((index, value) => (
        <div className="card mb-2 mt-2 text-center" style={{ width: "18rem", backgroundColor:"rgb(208, 238, 240)" }} >
            <img src={index.image} class="card-img-top" alt="..." style={{ height: "10rem" }} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h6 className="card-title">{index.title}</h6>
                <p className="card-text">{index.price}</p>
                <p className="card-text">{index.category}</p>
                <p className="card-text">{index.rating.rate}<br/><StarRatings
         rating={index.rating.rate}
        starDimension="20px"
        starSpacing="10px"
        starEmptyColor="grey"
        starRatedColor="green"
       /></p>
                <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        </div>
    )
    ) 
    }
    
    
    </>
)
}