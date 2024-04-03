import './Home.css'
import Atracao from '../../components/Atracao/Atracao';
import Welcome from '../../components/Welcome/Welcome';
import NavBar from '../../components/NavBar/NavBar';
import ImgCarrossel from '../../components/ImgCarrossel/ImgCarrossel';

function Home() {
    const componentes = [];
    for (let i = 0; i <= 2; i++) {
        componentes.push(<Atracao key={i} />)
    }

    return (
        <>
            <NavBar></NavBar>
            <ImgCarrossel></ImgCarrossel>
            <Welcome />
            <div className="ctn-atracoes">
                {componentes}
            </div>
        </>
    );
}

export default Home;

