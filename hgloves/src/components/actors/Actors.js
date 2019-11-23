import React from 'react';
import { Typography } from '@material-ui/core';

const Actors = [
    {
        name: 'Association Valentin Hauy',
        icon: 'house',
        subtitle: '',
        iconContent: () => {
            return (
                <div style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Typography color='primary' variant='subtitle1' style={{ marginBottom: 10 }}>Acteur historique de l’aide aux personnes déficientes visuelles, l’association Valentin Haüy, créée en 1889 par Maurice de La Sizeranne et reconnue d’utilité publique en 1891, déploie depuis plus de 130 ans un grand nombre de services et d’actions à travers toute la France afin de :</Typography>
                    <Typography color='primary' variant='subtitle1'>• défendre les droits des déficients visuels</Typography>
                    <Typography color='primary' variant='subtitle1'>• assurer leur formation et l’accès à l’emploi</Typography>
                    <Typography color='primary' variant='subtitle1'>• restaurer et développer leur autonomie</Typography>
                    <Typography color='primary' variant='subtitle1'>• promouvoir l’accès à l’écrit</Typography>
                    <Typography color='primary' variant='subtitle1'>• proposer des activités culturelles, sportives et de loisirs accessibles</Typography>
                </div>
            );
        }
    },
    {
        name: 'Christophe Bonnel',
        icon: 'person',
        subtitle: 'Docteur et novateur dans le milieu médical',
        iconContent: () => {
            return (
                <div style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Typography color='primary' variant='subtitle1'>"Médecin de formation et de profession, je suis passionné par les avancées permises par les NTIC. Je suis actuellement praticien attaché en charge de l’extracteur d’innovation du CHU de Montpellier. Apres une expérience de terrain plutôt riche au contact des patients en situation d'urgence, j'ai ensuite choisi de vivre ma médecine en m'investissant au sein d'un projet entrepreneurial axé sur l'imagerie médicale . La StartUp cofondée avec des associés géniaux, est devenue une société dont j’ai eu la joie d’assurer la direction médicale .J’ai donc participé activement au différentes phases du développement de ce un dispositif médical logiciel . Cela a permis de satisfaire ma soif de nouveautés technologiques et développé ma culture scientifique et technique sur un grand nombre de spécialités médicales.</Typography>
                    <Typography color='primary' variant='subtitle1'>Aujourd'hui, diplômé en management de projets et accompagnement des entreprises au "Montpellier Management University", je consacre une grosse partie de mes vacations hospitalières sur la mission d’ "extraction d'innovation"au chu de Montpellier."</Typography>
                </div>
            );
        }
    },
    {
        name: 'Association Frederic Peyson',
        icon: 'house',
        subtitle: '',
        iconContent: () => {
            return (
                <div style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Typography color='primary' variant='subtitle1'>Association d’aides multiples proposées aux sourds et malentendants avec un accueil et une permanence bilingue en Langue des Signes Française (LSF), à Montpellier (34).</Typography>
                    <Typography color='primary' variant='subtitle1'>De nombreux domaines d’accompagnement sont proposés pour l’accessibilité du cadre de vie aux personnes sourdes et malentendantes.</Typography>
                    <Typography color='primary' variant='subtitle1'>Aides humaines et techniques dans vos démarches sociales, administratives, médicales, vie de tous les jours, transports, grâce à nos interfaces, nos médiateurs sociaux, notre service d’interprétation et psychologue.</Typography>
                </div>
            );
        }
    },
]

export default Actors;