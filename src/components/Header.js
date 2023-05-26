import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    //<div className="flex pa2 justify-between nowrap orange">
    <div className="flex pa3 justify-between nowrap img-background">
      <div className="flex items-center ">
             
        <button onClick={() => { window.location.href = "/"; }}>
          Lista de Insectos
        </button>
        <div className="ml7"></div>
        <div className="mr-auto">
          
            <div className="fw9 f25 mr2 fg no-underline white">Insectos</div>
          
        </div>
        <div className="ml7"></div>
        <Link
          to="/create"
          className="ml1 no-underline black"
        >
          <button>
            Agregar Insecto
          </button>
        </Link>

        <Link
          to="/text-davinci-003"
          className="ml1 no-underline black"
        >
          <button>
            Davinci
          </button>
        </Link>

        <Link
          to="/text-create-image"
          className="ml1 no-underline black"
        >
          <button>
            Imagen
          </button>
        </Link>



      </div>
      </div>
  //  </div>
  );
};

export default Header;