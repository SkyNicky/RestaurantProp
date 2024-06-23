import first from '../Images/prato1.jpg';
import second from '../Images/prato1.jpg';
import third from '../Images/prato1.jpg';


export default function Services() {
    return (
        <div id="services"><br />
            <h1>Delivery</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus quibusdam, dolores reiciendis ut aliquam dolorum, officiis, mollitia expedita similique harum! Reiciendis culpa ipsum laborum numquam, vel minus ratione nulla?</p>

            <div className="card">
                <br />
                <img src={first} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Top do dia</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis iusto qui laboriosam natus excepturi quaerat deleniti necessitatibus corrupti sit, voluptatem accusamus suscipit quasi eius provident at saepe minus a?</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={second} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Top do dia</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis iusto qui laboriosam natus excepturi quaerat deleniti necessitatibus corrupti sit, voluptatem accusamus suscipit quasi eius provident at saepe minus a?</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={third} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Top do dia</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum reiciendis iusto qui laboriosam natus excepturi quaerat deleniti necessitatibus corrupti sit, voluptatem accusamus suscipit quasi eius provident at saepe minus a?</p>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}
