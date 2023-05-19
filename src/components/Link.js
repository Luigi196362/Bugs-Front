import React from 'react';

const Link = (props) => {
  const { link } = props;
return (
  <div style={{ 
    border: '3px solid gray', 
    borderRadius: '0px',
    background: 'white',
    padding: '10px',
    margin: '10px 0'
  }}>
    <div style={{ 
      color:'black',
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '5px'
    }}>
      {link.nombre} ({link.nomcientifico}) ({link.clase}) ({link.orden}) ({link.familia})
    </div>
    <div style={{ marginBottom: '5px' ,color:'black'}}>
      <span style={{ fontWeight: 'bold' }}>nombre: </span>{link.nombre}
    </div>
    <div style={{ marginBottom: '5px' ,color:'black'}}>
      <span style={{ fontWeight: 'bold' }}>Habitat: </span>{link.habitat}
    </div>
    <div style={{ marginBottom: '5px' ,color:'black'}}>
      <span style={{ fontWeight: 'bold' }}>Dieta: </span>{link.dieta}
    </div>
    <div style={{ marginBottom: '5px' ,color:'black'}}>
      <span style={{ fontWeight: 'bold' }}>Longitud: </span>{link.longitud}
    </div>
    <div style={{ marginBottom: '5px' ,color:'black'}}>
      <span style={{ fontWeight: 'bold' }}>Color: </span>{link.color}
    </div>
    <div style={{ marginBottom: '5px' ,color:'black'}}>
      <span style={{ fontWeight: 'bold' }}>Número de alas: </span>{link.numalas}
    </div>
    <div style={{ marginBottom: '5px' ,color:'black'}}>
      <span style={{ fontWeight: 'bold' }}>Descripcion: </span>{link.numalas}
    </div>
  </div>
);

};

export default Link;