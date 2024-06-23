import { useState, useEffect } from 'react';

import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);



    const [modal, setModal] = useState(false);
    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")

    }
    const toggleModal = () => {
        setModal(!modal);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const emailInput = event.target.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();


        if (!emailValue) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'Once submitted, you will not be able to change your details!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Successfully Subscribed!',
                    'Enjoy Your Subscription',
                    'success'
                );
                toggleModal();
            }
        });
     }


    return (
        <>
            <nav >
                <input type="button" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div id="logo">
                        <Link to="/" className='navbar-brand'><h1>Restaurant</h1></Link>
                    </div>
                </label>
                <ul>
                    <li><NavLink activeclassname="active" to="/" onClick={handleMenuItemClick}>Inicio</NavLink></li>
                    <li><NavLink to="/about" onClick={handleMenuItemClick}>Sobre</NavLink></li>
                    <li><NavLink to="/services" onClick={handleMenuItemClick}>Serviços</NavLink></li>
                    <li><NavLink to="/pricing" onClick={handleMenuItemClick}>Produtos</NavLink></li>
                    <li><NavLink to="/team" onClick={handleMenuItemClick}>Equipe</NavLink></li>
                    <li><NavLink to="/contact" onClick={handleMenuItemClick}>Contato</NavLink></li>
                    <li >  <button onClick={toggleModal} className='btn btn-signup show' >sdfgfsdgdfgdfgd</button></li>
                </ul>
                <div className='btn-main hide'>
                    <button onClick={toggleModal} className='btn btn-signup hide'>Assinar</button></div>
            </nav>

            {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>Restaurante Boca Aberta</h2>
                        <p className='p-l-1'>Restaurante</p>
                        <h2>Assine nossa NewsLetter</h2>
                        <p>
                        A assinatura é GRATUITA, assine e ganhe 20% OFF na primeira compra.
                        </p>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='inp'
                                type='email'
                                required
                                placeholder='Seu Email'
                            />

                            <span>
                                <p > <input id='same' type='checkbox' required className='in' />
                                    <label htmlFor='same'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, quam libero consequuntur similique tempora fuga odio a possimus mollitia ducimus, itaque soluta officiis error, sapiente distinctio qui obcaecati culpa hic?</label>
                                </p>
                            </span>
                            <button className='btn-pr' type='submit'>Assine</button>
                        </form>
                        <button className='close-modal' onClick={toggleModal}>
                            &times;
                        </button>
                    </div>
                </div>

            )}
        </>
    );
};

export default Navbar;
