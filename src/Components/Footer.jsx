// import React from 'react'
import fb from '../Images/fb.png';
import twi from '../Images/twi5.png';
import ins from '../Images/ins1.jpg';
import lin from '../Images/lin5.png';

export default function Footer() {
    return (
        <div id="footer" className="myfooter">
            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Sobre Nós</h3>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus earum non molestias suscipit</p>
                    <a href="/"><img src={fb} alt="social media" /></a>
                    <a href="/"><img src={twi} alt="social media" /></a>
                    <a href="/"><img src={ins} alt="social media" /></a>
                    <a href="/"><img src={lin} alt="social media" /></a>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Horário de Funcionamento</h3>
                    <p className="text">Terça a Sexta: 12PM to 10PM</p>
                    <p className="text">Sábado: 12PM to 12AM</p>
                    <p className="text">Domingo: 12PM to 12AM</p>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Contato</h3>
                    <p className="text">Endereço: Rua Principal, Centro</p>
                    <p className="text">Tel: 03943247810</p>
                    <p className="text">Email: restaurant@gmail.com</p>
                </div>
            </div>

            <div><br /><br />
                <p id="rights">Todos os direitos reservados | Restaurant Prime</p><br />
            </div>

        </div>
    )
}
