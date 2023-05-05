import React, { useEffect, useState } from 'react';
import '../css/destaque.css'
import { NavLink } from 'react-router-dom';
import peq_eng from '../imgs/banner-p.png';
import arduino from '../imgs/arduino.jpeg';
import eletronica from '../imgs/eletronica.jpeg';
import OwlCarousel from 'react-owl-carousel';

const Destaque = () => {

    const [use, setUser] = useState([]);

    useEffect(() => {
        // Obtém o valor de 'user' do local storage quando o componente for montado
        const userString = localStorage.getItem('user');
        if(userString) {
          const user = JSON.parse(userString);
        setUser(user);
        }
        else {
          const userData = {
              name: '',
              email: '',
              pictureUrl: '',
              tel: '',
            }
          setUser(userData);
        }
      }, []);
    return (
        <div className='destaque container text-center'>
            <div className="text-start">

                <h1 claxssName='text-primary'>Explore os cursos na academia </h1>
                <p className='text-secondary'>{use.name != '' ? use.name +' veja os' : ""} Cursos disponíveis presencialmente nas academias AROTEC e on-line em nossa plataforma</p>
                <NavLink to="/academia" className="navlink">
                    <button className="btn btn-outline-primary bb"> <i className="bi bi-mortarboard"></i> Ir para academia</button>
                </NavLink>
                <br />
            </div>
            <div className="mt-4">
                <OwlCarousel className='owl-theme owl-carousel' navClass={['owl-prev', 'owl-next']} margin={15} responsiveClass={true} controlsClass='owl-controls' dots={true} autoWidth={true} nav={true}>

                    <NavLink to={'/academia/curso/arotec/2021'} className="my-2 link">
                        <div className="card_curso card-hover">
                            <div className="card-header">
                                <img src={peq_eng} alt="pequeno engenheiro" />
                            </div>
                            <div className="corpo-curso text-start">
                                <span className="spa1">Últ. actualização: 23 jan, 2023</span> <br />
                                <b className='b'>Curso de Pequeno Engenheiro</b><br />
                                <span className="spa"><i className="bi bi-watch"></i> 3 semanas</span>
                                <p className='preco'>
                                    <b> 15.000 Kz/ Módulo</b>
                                </p>
                            </div>
                        </div>
                    </NavLink>


                    <NavLink to={'/academia/curso/arotec/2022'} className="link my-2">
                        <div className="card_curso card-hover">
                            <div className="card-header">
                                <img src={arduino} alt="pequeno engenheiro" />
                            </div>
                            <div className="corpo-curso text-start">
                                <span className="spa1">Últ. actualização: 23 jan, 2023</span> <br />
                                <b className='b'>Curso de Arduino</b><br />
                                <span className="spa"><i className="bi bi-watch"></i> 4 semanas</span>
                                <p className='preco'>
                                    <b> 30.000 Kz/ Módulo</b>
                                </p>
                            </div>
                        </div>
                    </NavLink>

                    {/* <div className="item my-2">
                    <div className="card_curso card-hover">
                        <div className="card-header">
                            <img src={eletronica} alt="pequeno engenheiro" />
                        </div>
                        <div className="corpo-curso text-start">
                            <span className="spa1">Últ. actualização: 23 jan, 2023</span> <br />
                            <b className='b'>Curso de Eletrônica</b><br />
                            <span className="spa"><i className="bi bi-watch"></i> 4 semanas</span>
                            <p className='preco'>
                                <b> 30.000 Kz</b>
                            </p>
                        </div>
                    </div>
                </div> */}

                </OwlCarousel>
            </div>

        </div>
    )
}

export default Destaque;
