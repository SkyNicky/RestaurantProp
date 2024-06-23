import one from '../Images/suco1.png';


export default function PriceText() {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col">
                    <img src={one} alt="pic" className="card-img" />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">Produtos</h2>
                        <p className="card-text">Promoção</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
