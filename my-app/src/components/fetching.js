import { useEffect } from "react";

function ProductFetching() {
  return (
useEffect(() => {
  fetch('https://restcountries.com/v2/all?fields=name,region,area')
  .then(( res) => res.json())
  .then((data) => console.log(data));

}, []));
}

export default ProductFetching;

