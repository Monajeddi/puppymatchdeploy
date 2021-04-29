const Annonce = require("../models/Annonce");
const User = require("../models/User");

const addAnnonce = async (req, res) => {
    try {
        const {nom, race, age, sexe, vaccins, description, localisation, contact, user} = req.body
        if (!nom || !race || !age || !sexe || !vaccins || !localisation || !contact) {
            res.status(400).send({ msg: 'Veuillez remplir tous les champs requis !'  })
            return;
        }
        const newAnnonce = new Annonce({
        nom, 
        race, 
        age, 
        sexe, 
        vaccins, 
        description, 
        localisation,
        contact,
        user,
        
        
    })
       await newAnnonce.save()
       res.status(200).send({msg: 'Annonce ajoutée avec succès', newAnnonce })
    } catch (error) {
        res.status(400).send({msg: 'Ajout impossible', error })
    }
    
}

const getAnnonce = async (req, res) => {
    try {
       const listAnnonces =  await Annonce.find().populate('user', 'name', User)
       res.status(200).send({msg : 'Liste des annonces', listAnnonces})
    } catch (error) {
       res.status(400).send({msg : 'Liste inaccessible', error})
        
    }
}

const getAnnonceById = async (req, res) => {
    try {
            const { _id } = req.params
            const annonceToFind = await Annonce.findOne({ _id })
            console.log(annonceToFind)
            res.status(200).send({ msg: 'I find the annonce...', annonceToFind })
    } catch (error) {
            res.status(400).send({ msg: 'Can not get annonce with this id !!', error })
        }
}

// const deleteAnnonce = async(req, res) => {
//     try {
//         const { _id } = req.params
//         const annonceToDelete = await Annonce.findOneAndDelete({ _id })
//         if (!annonceToDelete){
//             res.status(400).send({msg: 'Annonce déjà supprimée !' })
//             return;
//         }
//         res.status(200).send({msg: 'Annonce Supprimée !', annonceToDelete })
//     } catch (error) {
//         res.status(400).send({msg: 'Suppression impossible !' })
//     }
// }

const deleteAnnonce  = async (req, res) =>{
    try {
        const AnnonceToDelete = await Annonce.findById({_id : req.params.id});
        await Annonce.deleteOne({_id : req.params.id})
        res.status(200).send({msg : 'Annonce Supprimée !'})
    } catch (error) {
        res.status(400).send({msg : 'Suppression impossible !', error})
}
}

const updateAnnonce = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await Annonce.updateOne({_id}, {$set :{...req.body}})
        if (!result.nModified){
            res.status(400).send({ msg: 'Déjà mis à jour'})
            return;
        }
        res.status(200).send({msg: 'Annonce mise à jour'})
    } catch (error) {
       res.status(400).send({msg: 'Mise à jour échouée !', error })
    }
}

// const like = async (req, res) => {
//     try {
//        await Annonce.findByIdAndUpdate(req.body.annonceId,{
//            $pull:{likes:req.user._id}
//        },{
//            new: true
//        }).exec((err, result)=>{
//            if(err){
//                return res.status(422).json({error:err})
//            }else{
//                res.json(result)
//            }
//        })
//     } catch (error) {
//         console.log(err)
//     return res.status(400).send({errors:[{msg:"we can't add the like!!!!"}]});
//     }
// }


module.exports = controllers = { addAnnonce, getAnnonce, deleteAnnonce, updateAnnonce, getAnnonceById}