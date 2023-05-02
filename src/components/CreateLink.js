import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation createInsectos(
    $clase: String!
    $color: String!
    $dieta: String!
    $familia: String!
    $habitat: String!
    $longitud: String!
    $nombre: String!
    $nomcientifico: String!
    $numalas: String!
    $orden: String!
  ) {
    createInsectos(
    clase: $clase
    color: $color
    dieta: $dieta
    familia: $familia
    habitat: $habitat
    longitud: $longitud
    nombre: $nombre
    nomcientififco: $nomcientifico
    numalas: $numalas
    orden: $orden
    ) {
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
`;

const CreateLink = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        id: "",
        nombre: "",
        nomcientifico: "",
        clase: "",
        orden: "",
        familia: "",
        habitat: "",
        dieta: "",
        longitud: "",
        color: "",
        numalas: "",
    });

    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            nombre: formState.nombre,
            nomcientifico: formState.nomcientifico,
            clase: formState.clase,
            orden: formState.orden,
            familia: formState.familia,
            habitat: formState.habitat,
            dieta: formState.dieta,
            longitud: formState.longitud,
            color: formState.color,
            numalas: formState.numalas,
        },
        onCompleted: () => navigate('/')
    });

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createLink();
                }}
            >
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={formState.nombre}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                nombre: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Nombre del Insecto"
                    />
                    <input
                        className="mb2"
                        value={formState.nomcientifico}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                nomcientifico: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Nombre cientifico del Insecto"
                    />
                    <input
                        className="mb2"
                        value={formState.clase}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                clase: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Clase a la que pertenece el Insecto"
                    />
                    <input
                        className="mb2"
                        value={formState.orden}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                orden: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Orden"
                    />             
                    <input
                        className="mb2"
                        value={formState.familia}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                familia: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Familia a la que pertenece el insecto"
                    />                                          
                    <input
                        className="mb2"
                        value={formState.habitat}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                habitat: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Habitat del Insecto"
                    />                   
                    <input
                        className="mb2"
                        value={formState.dieta}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                dieta: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Dieta del insecto"
                    />                                
                    <input
                        className="mb2"
                        value={formState.longitud}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                longitud: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Longitud del Insecto"
                    />              
                    <input
                        className="mb2"
                        value={formState.color}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                color: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Color del Insecto"
                    />
                    <input
                        className="mb2"
                        value={formState.numalas}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                numalas: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Numero de alas del Insecto"
                    />                                                                                                                      
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default CreateLink;