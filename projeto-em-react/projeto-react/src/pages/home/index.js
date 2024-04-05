
import "./index.css";
import Logo_Img from "../../img/coconut-logo.png";
import Lupa_Barra_Pesquisa from "../../img/lupa-pesquisar.png";

export default function Home() {
    return (
        <div className="home">

            {/*Logo*/}
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col mt-2">
                        <img src={Logo_Img} alt="logo" width="64px" height="64px"></img>
                        <p1 className="logo-text">Direct CocoNut Store</p1>
                    </div>
                </div>
            </div>

            {/*Barra de Pesquisa*/}
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-sm-3"></div>

                    <div className="col-sm-1 my-2 pt-1" id="barra-de-pesquisa">
                        <img src={Lupa_Barra_Pesquisa} width="32px" height="32px" alt="lupa-de-pesquisa"></img>
                    </div>

                    <div className="col-6 my-2">
                        <input id="input-barra-de-pesquisa" placeholder="Pesquisar Produtos"></input>
                    </div>
                </div>
            </div>

            {/*Navbar*/}
            <div id="navbar-dcs" className="container-fluid text-center">
                <nav class="navbar navbar-expand-sm">
                    <a class="navbar-brand" href="#">Categorias</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Alimentos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tecnologia</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Construção</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Esportes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Moda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Ferramentas</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Outros</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Saúde</a></li>
                                    <li><a class="dropdown-item" href="#">Imóveis</a></li>
                                    <li><a class="dropdown-item" href="#">Veículos</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>

            {/*Corpo para Produtos*/}
            <div id="corpo-produtos" className="container-fluid text-center">
                {/*Mostra Produtos*/}
            </div>

            {/*Footer*/}
            <div id="dcs-footer" className="container-fluid text-center">
                <footer class="text-center text-lg-start">
                    <div className="text-center p-3" >
                        © 2024 Copyright:
                        <a href="#">Direct CoCoNut Store</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}