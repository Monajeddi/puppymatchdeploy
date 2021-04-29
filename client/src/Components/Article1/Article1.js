import React from 'react';
import {Link} from 'react-router-dom';
import chienprehistoire from '../../Assets/chien-prehistoire.jpeg';
import './article1.css'

const Article1 = () => {
    return (
        <div className="article">
            <h1 className="titrearticle">
            LES ORIGINES DE LA DOMESTICATION DU CHIEN
            </h1>
            <p>Le chien, présenté comme le « meilleur ami de l’homme » a été le premier animal domestiqué par l’être humain.
Cette relation aurait débutée il y a près de 30 000 ans.
Un changement climatique à la fin du paléolithique supérieur aurait provoqué un changement de gibier chassé par l’homme.

L’homme après avoir chassé des grands herbivores de plaines aurait chassé des espèces plus difficiles à traquer (cerf, antilopes, lièvre, gibier à plumes).
L’homme a donc dû tenter de faire du loup son allié de chasse, bien avant de se sédentariser et bien avant d’élever son bétail.

Le chien primitif devait être un chien de chasse et non de berger.
La proximité de leur mode de vie où des espèces chassées auraient renforcé ce rapprochement grâce au partage des restes de chasses de l’homme avec l’animal, l’adoption de jeunes louveteaux.

Petit à petit, il s’est forgé une place à nos côtés, tout au long de notre histoire, passant du chien de chasse à celui de compagnie.</p>

<img src={chienprehistoire} alt="chien"/>
<h2 className="titrearticle">UN COMPAGNON DEVENU PARTENAIRE PROFESSIONNEL</h2>
<p>
Progressivement son utilisation se diversifie et la confiance accordée s’accroît de plus en plus :
</p>
<ul>
    <li>

Chiens de berger à qui l’on confie la conduite d’un troupeau mais aussi sa protection face aux prédateurs
    </li>
    <li>

Chiens de recherche de drogues, d’explosifs …
    </li>
    <li>

Chiens de garde, de défense…
    </li>
    <li>

Chiens d’assistance à qui l’on confie la garde d’un enfant handicapé
    </li>
    <li>

Chiens guides d’aveugle
    </li>
    <li>

Chiens de recherche en avalanche, en décombres ..
    </li>
    <li>

Chiens thérapeutiques, détecteurs de maladie
    </li>
</ul>
<p>

Le chien n’a jamais été aussi populaire qu’aujourd’hui.
</p>
<img src="https://dn7etugw5gp2i.cloudfront.net/articles/images/2020/03/02155634/chien-dassistance.jpg" />
<h2 className="titrearticle">LES « EFFETS BÉNÉFIQUES »</h2>
<p>
Les bienfaits ne sont plus à prouver puisque de nombreuses études ont montré les effets bénéfiques auprès :
</p>
<ul>
    <li>
    Des personnes âgées (maladie d’Alzheimer)

    </li>
    <li>

Des patients hospitalisés
    </li>
    <li>

Des enfants en difficultés (autisme…)
    </li>
</ul>

<p>

L’animal joue un rôle de co-thérapeute facilitant la vie de la personne dans le besoin.

Les bénéfices liés aux interactions avec un animal de compagnie se ressentent au niveau de la qualité de vie:
– sur le plan psychologique – sur le plan physiologique

L’animal de compagnie est devenu un objet d’attachement dont la présence est rassurante.
Il rompt la solitude et l’isolement social.

Son statut de membres de la famille à part entière, lui permet d’être materné matériellement et affectivement, éduqués, bref traités comme des enfants dont ils sont, au fond, des substituts».

Cet attachement explique que le budget annuel qui lui est consacré est de plus en plus conséquent.
</p>
<img src="https://dn7etugw5gp2i.cloudfront.net/articles/images/2020/05/09155327/effets-benefiques-du-chien.jpg"/>
<br/>
<Link to='/actualités'>
            <button type="button" className="btn btn-warning mt-4 text-white"><i className="icon-cart-add mr-2" /> Go Back</button>
           </Link>

        </div>
    )
}

export default Article1
