import React from 'react';
import Card from '@/components/card';
import Link from 'next/link';
import getData from '@/Library/getData';
//import tours from '../../data/tours.json';

export async function getStaticProps(context) {
  //const data = await axios.get('url');
  const data = await getData();
  return {
    props: {
      tours: data,
    },
  };
}
function Designs(props) {
  //console.log(props.tours);
  return (
    <div>
      <h1>Heres your tours</h1>
      {props.tours.map((tour) => {
        return (
          <Link key={tour.id} href={{ pathname: `/architectures/${tour.id}` }}>
            <Card name={tour.name} />
          </Link>
        );
      })}
    </div>
  );
}

export default Designs;
