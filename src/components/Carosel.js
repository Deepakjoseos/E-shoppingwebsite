import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import Skeleton from "react-loading-skeleton";

const Carosel = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (componentMounted) {
      setData(await response.json());
      setFilter(await response.json());
      console.log(filter);
      setLoading(false);
    };
    return () => {
      componentMounted(false);
    };
  };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineheight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={300} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };


  const Showproduct = () => {
    return (
    
       <Carousel autoPlay infiniteLoop='true'>
      {
        filter.map( product => {
          return <div className="col-md-6">
            <img src={ product.image } alt={product.title} />
            <p className="legend">{ product.title }</p>
          </div>
        })}
        </Carousel>
      
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-4">{loading ? <Loading /> : <Showproduct />}</div>
    </div>
  );
};

export default Carosel;
