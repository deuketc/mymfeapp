import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section>
      <h1>Products MFE /</h1>
      <p>
        Laboris laboris excepteur ut velit amet est proident reprehenderit esse
        magna cillum duis. Aute ullamco elit pariatur anim dolor fugiat eu eu
        amet consequat. Minim excepteur qui pariatur aliquip laborum velit.
        Nostrud ea ad cupidatat id sint eiusmod. Magna culpa deserunt est
        ullamco ipsum ut occaecat ullamco eu velit excepteur exercitation
        proident esse.
      </p>
      <Link to='/products'>Products</Link>
    </section>
  );
};

export default Landing;
