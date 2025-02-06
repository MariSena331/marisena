import "./globals.css";
import Image from "next/image";
import Loading from "./loading";

export default function App() {
  return (
    <div className="container">
      <div className="about-container">
        <div className="about">
          <div>
            <Image
              alt="coming soon"
              width={259}
              height={327}
              className="image"
              src="/about-me.png"
            />
          </div>
          <div>
            <h1>Mariana Sena</h1>
            <p>Desenvolvedora de Software</p>
          </div>
        </div>
        <div className="about-me-description">
          Olá! <br />
          <br />
          Sou uma desenvolvedora de software, tenho facilidade em colaborar em
          equipe e estou sempre buscando eficiência e boas práticas de
          segurança! <br />
          <br />
          Sou apaixonada por cachororros, estou sempre na companhia de um livro,
          adoro filmes e séries e estou sempre disposta a aprender coisas novas!
        </div>
      </div>

      <Loading />
    </div>
  );
}
