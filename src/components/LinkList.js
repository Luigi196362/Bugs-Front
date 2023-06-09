import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  query{
      Insectos {
        id
        nombre
        nomcientifico 
        clase 
        orden 
        familia
        habitat 
        dieta 
        longitud 
        color 
        numalas
      }
  }
`
;


const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);
  
    return (
      <div>
        {data && (
          <>
            {data.Insectos.map((link) => (
              <Link key={link.id} link={link} />
            ))}
          </>
        )}
      </div>
    );
  };

export default LinkList;