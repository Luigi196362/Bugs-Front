import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.nombre} ({link.nomcientifico}) ({link.clase}) ({link.orden})
        ({link.familia})({link.habitat})({link.dieta})({link.longitud})({link.color})
        ({link.numalas})
      </div>
    </div>
  );
};

export default Link;