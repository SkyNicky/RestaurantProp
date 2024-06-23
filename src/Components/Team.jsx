import first from '../Images/colab1.jpg';


export default function Team() {
    return (
        <div id="team"><br />
            <h1>Melhor Equipe</h1>
            <div className="teamtext">
                <br />
                <h4 className='flint'>Colaborador1</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Colaborador2</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>Colaborador3</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore distinctio iusto cumque commodi explicabo blanditiis alias, placeat sed, qui, at esse? Unde voluptate, eaque reiciendis numquam repellat suscipit deleniti voluptatum?</p>
            </div>
        </div>
    )
}
