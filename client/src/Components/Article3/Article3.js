import React from 'react';
import {Link} from 'react-router-dom';
import '../Article1/article1.css'

const Article3 = () => {
    return (
        <div className="article">
            <img src="https://dn7etugw5gp2i.cloudfront.net/articles/images/2020/05/07143845/environnement-1536x379.png"/>
        <h2 className="titrearticle">DÉFINITION DU BIEN-ÊTRE ANIMAL</h2>
        <p>
        ABSENCE DE FAIM, DE SOIF OU DE MALNUTRITION :<br/>
– Répondre aux besoins nutritionnels et comportementaux de l’animal<br/>
– Proposer des aliments appétants et non contaminés<br/>
– Une nourriture et une litière dans de bonnes conditions de conservation et d’hygiène, à l’abri des nuisibles<br/>
– De l’eau propre et potable en permanence<br/>
<br/>
PRÉSENCE D’ABRIS<br/>
– Permettant à l’animal de se protéger de conditions climatiques excessives<br/>
– Répondant à ses besoins environnementaux<br/>
<br/>
Lieu de repos – Cachette…
<br/>
ABSENCE DE PEUR ET D’ANXIÉTÉ<br/>
– Si l’animal manifeste des troubles comportementaux, des démarches doivent être entreprises pour en
trouver la cause et y remédier<br/>
– Protéger l’animal de nuisance et de stress<br/>
– La tranquillité et le repos de l’animal doivent être respectés<br/>
<br/>
ABSENCE DE DOULEUR, BLESSURE OU MALADIE :<br/>
– Le milieu dans lequel vit l’animal ne doit pas être à l’origine de dommages corporels ou de maladie<br/>
– Fournir des soins quotidiens attentifs et adaptés pour assurer la bonne santé physique et comportementale
<br/>
POSSIBILITÉ D’EXPRIMER LES COMPORTEMENTS NORMAUX DE SON ESPÈCE<br/>
– Par un espace suffisant et si nécessaire enrichi<br/>
– Une présence interactive suffisante est assurée pour favoriser leur socialisation et leur familiarisation à l’homme
<br/>
Creuser – Gratter – Sauter – Courir…
        </p>
        <h2 className="titrearticle">ENRICHISSEMENT DU MILIEU</h2>
        <p>
        L’enrichissement environnemental est un principe qui vise à améliorer la qualité de vie des animaux de compagnie en leur procurant<br/>
– des stimulations psychologique<br/>
– des stimulations physiologiques<br/>
<br/>
Un milieu enrichi diminue théoriquement le niveau de stress chez l’animal.
        </p>
        <Link to='/actualités'>
            <button type="button" className="btn btn-warning mt-4 text-white"><i className="icon-cart-add mr-2" /> Go Back</button>
           </Link>
        </div>
    )
}

export default Article3
