import React from "react";
import { Link } from "react-router-dom";
import origines from "../../Assets/origines.jpeg";

const Actualités = () => {
  return (
    <div>
      <h2 style={{ fontStyle: "italic", margin: "20px 0px" }}>
        Retrouvez toutes les actualités sur vos chiens adorés{" "}
      </h2>
      <div
        className="coontainer d-flex justify-content-center mt-50 mb-50"
        style={{ marginLeft: "175px" }}
      >
        <div className="row">
          <div className="col-md-10">
            <div className="card card-body">
              <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                <div className="mr-2 mb-3 mb-lg-0">
                  {" "}
                  <img
                    src="https://www.algerie360.com/wp-content/uploads/2017/07/daee92f164_109680_chien-domestication-ami-homme.jpg"
                    width={150}
                    height={150}
                    alt
                  />{" "}
                </div>
                <div className="media-body">
                  <h6
                    className="media-title font-weight-semibold"
                    style={{ color: "#357AB7", fontStyle: "italic" }}
                  >
                    {" "}
                    LES ORIGINES DE LA DOMESTICATION DU CHIEN{" "}
                  </h6>

                  <p className="mb-3">
                    Le chien, présenté comme le « meilleur ami de l’homme » a
                    été le premier animal domestiqué par l’être humain. Cette
                    relation aurait débutée il y a près de 30 000 ans. Un
                    changement climatique à la fin du paléolithique supérieur
                    aurait provoqué un changement de gibier chassé par
                    l’homme...{" "}
                  </p>
                  <Link to="/article1">
                    <a
                      href="#"
                      className="highlight-button btn btn-small button xs-margin-bottom-five"
                      data-abc="true"
                    >
                      <i className="fa fa-info-circle"></i>Lire Plus
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card card-body">
              <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                <div className="mr-2 mb-3 mb-lg-0">
                  {" "}
                  <img
                    src="http://nextews.com/images/bb/42/bb4295657e780ed5.jpg"
                    width={150}
                    height={150}
                    alt
                  />{" "}
                </div>
                <div className="media-body">
                  <h6
                    className="media-title font-weight-semibold"
                    style={{ color: "#357AB7", fontStyle: "italic" }}
                  >
                    {" "}
                    LES ÉTAPES DE DÉVELOPPEMENT{" "}
                  </h6>

                  <p className="mb-3">
                    A la naissance, un chiot a le sens tactile et gustatif mais
                    est sourd, aveugle, sensible à la douleur, sensible au
                    froid. Ses capacités motrices sont limitées, se déplace par
                    reptation, tète, lèche, vocalise Il s’oriente de manière
                    aléatoire jusqu’au moment où il établit un contact tactile
                    avec la mère. S’il s’éloigne trop...
                  </p>
                  <Link to="/article2">
                    <a
                      href="#"
                      className="highlight-button btn btn-small button xs-margin-bottom-five"
                      data-abc="true"
                    >
                      <i className="fa fa-info-circle"></i>Lire Plus
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card card-body">
              <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                <div className="mr-2 mb-3 mb-lg-0">
                  {" "}
                  <img
                    src="https://www.fundacion-affinity.org/sites/default/files/fundacion-affinity-en-casa-con-tus-animale.jpg"
                    width={150}
                    height={150}
                    alt
                  />{" "}
                </div>
                <div className="media-body">
                  <h6
                    className="media-title font-weight-semibold"
                    style={{ color: "#357AB7", fontStyle: "italic" }}
                  >
                    {" "}
                    ENVIRONNEMENT ET BIEN-ETRE ANIMAL{" "}
                  </h6>

                  <p className="mb-3">
                    ABSENCE DE FAIM, DE SOIF OU DE MALNUTRITION
                    <br />
                    PRÉSENCE D’ABRIS
                    <br />
                    ABSENCE DE PEUR ET D’ANXIÉTÉ
                    <br />
                    ABSENCE DE DOULEUR, BLESSURE OU MALADIE....{" "}
                  </p>
                  <Link to="/article3">
                    <a
                      href="#"
                      className="highlight-button btn btn-small button xs-margin-bottom-five"
                      data-abc="true"
                    >
                      <i className="fa fa-info-circle"></i>Lire Plus
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualités;
