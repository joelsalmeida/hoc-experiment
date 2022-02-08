import { useEffect, useState } from 'react';

export default function HOCList(WrappedComponent, endPoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        .then((response) => response.json())
        .then((json) => setData(json.slice(0, 10)));
    };

    getData();
  }, []);

  return <WrappedComponent data={data}/>

}