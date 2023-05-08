import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const CardCurso = ({ c }) => {


    const { id, curso, preco, duracao, lastUpdate, img } = c;

    return (
                <NavLink className=" navlink col-6 col-sm-6 col-md-4 col-lg-3" to={"/en/academy/course/arotec/" + id}>
                        <div className="card_cursos card-hover">
                            <div className="card-headerr">
                                <img src={img} alt={curso} />
                            </div>
                            <div className="corpo-curso text-start">
                                <span className="spa1">{lastUpdate}</span> <br />
                                <b className='b'>{curso}</b><br />
                                <span className="spa"><i className="bi bi-watch"></i> {duracao}</span>
                                <p className='preco'>
                                    <b> {preco}</b>
                                </p>
                            </div>
                        </div>
                </NavLink>
           

    );
}

export default CardCurso;

