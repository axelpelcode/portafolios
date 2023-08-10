import './App.css';

function App() {
  return (
    <div className="App">
      <nav id="navBar">
        <span id="titulo"><h1>
          AxelPel-Code
        </h1></span>
        <span><a href="#texto1 ">Info</a></span>
        <span><a href="#proyectos" >Proyectos</a></span>
        <span><a href="#tec" >Tecnologías</a></span>
        <span><a href="#contacto" >Contacto</a></span>
      </nav>
      <div id="vista">
        <span id="texto1"><p>
          Bienvenido/a: En este portafólios encontrará <br></br>
          ejemplos de mis proyectos, repositorios de código GitHub, <br></br>
          tecnologías empleadas y formas de contacto.
        </p></span>
        <span id="texto2"><p>
          Mis proyectos están creados en Javascipt, junto con las potentes<br></br>
          características de React, Node, Bootstrap y las mejores librerias<br></br>
          para cumplir todos los requerimientos del usuario.
        </p></span>
        <div id="prpyectos">
          <span id="proyectos"><h3>Proyectos</h3></span>
          <span>
            <a>proyecto 1</a>
            <a>gh p1</a>
          </span>
          <span>
            <a>proyecto 2</a>
            <a>gh p2</a>
          </span>
          <span>
            <a>proyecto 3</a>
            <a>gh p3</a>
          </span>
          <span>
            <a>proyecto 4</a>
            <a>gh p4</a>
          </span>
          <span>
            <a>proyecto 5</a>
            <a>gh p5</a>
          </span>
        </div>
        <div id="tec">
          <span><h3>Tecnologias</h3></span>
          <span><img alt="Javascript" /></span>
          <span><img alt="Node" /></span>
          <span><img alt="React" /></span>
          <span><img alt="Bootstrap" /></span>
          <span><img alt="mySql" /></span>
          <span><img alt="Git" /></span>
        </div>
        <div id="contacto">
          <span><a>linkedin</a></span>
          <span><a>github</a></span>
          <span><a>mail</a></span>
        </div>
      </div>
    </div>
  );
}

export default App;
