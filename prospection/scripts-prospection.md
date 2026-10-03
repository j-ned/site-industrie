# Scripts de prospection : « Site pro en 7 jours »

**L'offre, en une phrase** : je refais le site des ateliers et sous-traitants mécaniques en 7 jours, pour 690 €, par un tourneur CN qui sait ce qu'un acheteur cherche.

| | |
|---|---|
| Création | 690 € : une page complète (savoir-faire, parc machines, qualité, devis) + mentions légales, livrée en 7 jours |
| Maintenance | 29 €/mois : hébergement, nom de domaine, certificat HTTPS, sauvegardes, 30 min de modifications par mois. Sans engagement |
| Paiement | 50 % à la signature, 50 % à la livraison |
| TVA | En micro-entreprise, franchise de TVA : « TVA non applicable, art. 293 B du CGI ». 690 € = prix final |

---

## 0. Trois règles avant de commencer

1. **Jamais un client, un fournisseur ou un concurrent de ton employeur.** C'est le risque n° 1 : concurrence déloyale et licenciement. Dans le doute, tu passes ton tour.
2. **Ne cite jamais le nom de ton employeur.** Tu dis « je suis tourneur CN dans l'aéronautique », point.
3. **Prospection B2B légale** : l'email à une adresse pro est autorisé s'il concerne l'activité de la personne, avec un moyen simple de refuser (une phrase suffit). Le téléphone vers une entreprise est autorisé. Si quelqu'un dit non, tu notes « refus » et tu ne relances plus.

---

## 1. Trouver et qualifier les prospects (S1, 2 soirées)

**Où chercher** : Google Maps autour de Saint-Quentin-en-Yvelines (Trappes, Élancourt, Coignières, Maurepas, Plaisir, Guyancourt, Buc, Les Clayes-sous-Bois).
Requêtes : « usinage », « décolletage », « mécanique de précision », « tôlerie », « chaudronnerie », « traitement de surface », « rectification », « soudure ».

**La grille (1 point par case cochée)** :

| Critère | Comment vérifier |
|---|---|
| Pas de site, ou lien mort | Fiche Google |
| Site illisible sur téléphone | L'ouvrir sur ton téléphone |
| Pas de liste de machines | Parcourir le site |
| Copyright de plus de 3 ans ou pas de HTTPS | Pied de page, barre d'adresse |
| Fiche Google avec peu ou pas de photos | Fiche Google |
| Entreprise de 5 à 50 salariés | Pappers, onglet effectif |

**4 points ou plus** = prospect chaud. Garde les 5 meilleurs pour une maquette (voir le README du modèle), les autres pour l'email et le téléphone.

Note chaque prospect dans `suivi-prospects.csv` (copie de `suivi-prospects.exemple.csv`, ignorée par git car elle contient des données personnelles).

---

## 2. La visite avec maquette (le plus efficace)

**Quand** : entre 8 h et 9 h 30 ou entre 13 h 30 et 15 h. Évite le vendredi après-midi. Demande le gérant ou le responsable commercial.
**Avec quoi** : la maquette ouverte sur ton téléphone, une carte de visite, le prix en tête.

### L'ouverture (20 secondes)

> Bonjour, Julien Nédellec. Je suis tourneur CN dans l'aéronautique, et à côté je fais des sites web pour les ateliers du coin.
> J'ai regardé votre site, et je me suis permis de refaire votre page d'accueil. Je vous la montre ? Ça prend deux minutes.

*Tu tends le téléphone. Tu te tais pendant qu'il fait défiler.*

### Les questions (laisse-le parler)

1. « Aujourd'hui, vos nouveaux clients vous trouvent comment ? »
2. « Quand un acheteur vous consulte, il regarde votre site avant d'appeler ? »
3. « Vous avez déjà perdu une consultation parce que l'acheteur ne savait pas ce que vous saviez faire ? »
4. « Votre parc machines, il est affiché quelque part ? »

### L'argument qui te différencie

> Une agence vous fera un joli site. Moi, je sais qu'un acheteur aéro cherche en trente secondes vos capacités, vos matières, votre certification et votre parc. C'est ce que j'ai mis en haut de la page.

### La conclusion

> Je vous propose de le finir avec vos vraies photos et vos vrais chiffres : 690 €, en ligne dans 7 jours. Vous payez la moitié pour démarrer, le reste quand vous êtes content.
> On part là-dessus ?

S'il hésite :

> Je vous laisse le lien, regardez-le tranquillement. Je vous rappelle jeudi, ça vous va ?

**Avant de partir** : note la date de rappel. Ne pars jamais sans une prochaine étape datée.

---

## 3. L'appel téléphonique

Pour les prospects sans maquette. But : décrocher l'envoi d'une maquette ou un rendez-vous, pas vendre au téléphone.

> Bonjour, Julien Nédellec. Je suis tourneur CN dans l'aéronautique, et je fais des sites pour les ateliers mécaniques des Yvelines.
> Je vous appelle parce que [votre site ne s'affiche pas bien sur téléphone / je n'ai pas trouvé votre parc machines en ligne].
> Je vous propose une chose simple : je vous prépare gratuitement une maquette de page d'accueil avec vos informations, et vous jugez sur pièce. Je peux vous l'envoyer à quelle adresse ?

**S'il dit oui** : tu fais la maquette dans les 48 h et tu envoies l'email n° 1 bis (section 4).
**Si tu tombes sur un standard** : « Je souhaite parler à la personne qui s'occupe du site internet, c'est bien M. ou Mme ...? »

---

## 4. Les emails

**Objet court, sans majuscules partout, sans « offre » ni « promo ».** Envoie depuis contact@nedellec-julien.fr, un par un, jamais en copie groupée.

### Email 1 : premier contact (avec maquette)

> **Objet : Une nouvelle page d'accueil pour [Nom de l'entreprise]**
>
> Bonjour [Prénom Nom],
>
> Je suis tourneur CN dans l'aéronautique et je réalise des sites pour les ateliers mécaniques des Yvelines.
>
> En visitant votre site, j'ai remarqué que [le parc machines n'y figure pas / il s'affiche mal sur téléphone]. Or c'est la première chose qu'un acheteur vérifie avant de vous consulter.
>
> Je me suis permis de refaire votre page d'accueil, pour que vous jugiez sur pièce :
> [lien de la maquette]
>
> Si elle vous plaît, je la termine avec vos photos et vos chiffres : 690 €, en ligne en 7 jours.
>
> Bonne journée,
> Julien Nédellec
> [téléphone] · nedellec-julien.fr
>
> *Si vous ne souhaitez pas recevoir d'autre message de ma part, répondez simplement « non ».*

### Email 1 bis : premier contact (sans maquette)

> **Objet : Votre site et vos acheteurs**
>
> Bonjour [Prénom Nom],
>
> Je suis tourneur CN dans l'aéronautique et je réalise des sites pour les ateliers mécaniques des Yvelines.
>
> Sur votre site, [constat précis en une phrase]. Un acheteur qui ne voit pas vos capacités en trente secondes passe à l'atelier suivant.
>
> Voici un exemple de ce que je fais : [lien de la démo]
>
> Je peux vous préparer gratuitement une maquette avec vos informations. Ça vous intéresse ?
>
> Julien Nédellec
> [téléphone] · nedellec-julien.fr
>
> *Si vous ne souhaitez pas recevoir d'autre message de ma part, répondez simplement « non ».*

### Relance 1 : 3 jours après, en réponse au même fil

> Bonjour [Prénom],
>
> Avez-vous pu jeter un œil à la maquette ? Je peux l'adapter si quelque chose ne colle pas à votre activité.
>
> Julien

### Relance 2 : 10 jours après, la dernière

> Bonjour [Prénom],
>
> Je ne veux pas encombrer votre boîte, c'est mon dernier message. La maquette reste en ligne jusqu'à fin [mois] si vous voulez la montrer à quelqu'un : [lien].
>
> Bonne continuation,
> Julien

Après la relance 2 sans réponse : un appel, puis tu classes « froid ». Tu pourras recontacter dans 6 mois.

---

## 5. LinkedIn

Cible : gérants, directeurs commerciaux et responsables qualité des ateliers de ta liste.

### Demande de connexion (note courte)

> Bonjour [Prénom], tourneur CN dans l'aéronautique, je crée des sites pour les ateliers mécaniques du 78. Ravi d'échanger avec vous.

### Message après acceptation (2 jours plus tard)

> Merci pour la connexion, [Prénom].
> J'ai regardé le site de [Entreprise] et je me suis permis de refaire la page d'accueil pour montrer ce qu'on pourrait faire : [lien].
> Qu'en pensez-vous ?

Pas de message de vente le jour de l'acceptation.

---

## 6. Les objections

| Objection | Réponse |
|---|---|
| « On a déjà un site. » | « Oui, je l'ai vu, c'est pour ça que je suis là. Ouvrez-le sur votre téléphone avec moi : on voit votre parc machines ? » |
| « Nos clients viennent par le réseau. » | « Tant mieux, et ça continuera. Mais quand un acheteur vous recommande à un collègue, le collègue tape votre nom sur Google. Le site, c'est ce qu'il voit en premier. » |
| « C'est trop cher. » | « C'est à peu près le prix d'une journée de machine facturée. Si le site vous amène une seule consultation dans l'année, il est remboursé. » |
| « Pas le temps de m'en occuper. » | « Vous n'avez rien à faire. Je récupère vos infos sur votre site actuel, je vous pose 10 questions au téléphone et je vous envoie le résultat. » |
| « Mon neveu / une agence s'en occupe. » | « Très bien. Gardez le lien de la maquette, si un jour vous voulez comparer. » *(Tu n'insistes pas.)* |
| « Envoyez-moi une plaquette. » | « Je vous envoie mieux : votre propre page, avec vos informations. Je peux vous l'envoyer à quelle adresse ? » |
| « Je dois en parler à mon associé. » | « Bien sûr. On peut se rappeler jeudi, après que vous en ayez parlé ? » |
| « Vous êtes salarié, vous aurez le temps ? » | « Je travaille le soir et le week-end, et je m'engage sur 7 jours. Si je suis en retard, je vous rembourse l'acompte. » |

**La règle** : ne discute pas le prix dès la première objection. Repose une question (« Qu'est-ce qui vous fait hésiter ? »). Ne baisse jamais à moins de 590 €, et seulement contre un avis Google et l'autorisation de citer le client.

---

## 7. La signature

Quand il dit oui :

1. Envoie le **devis** le jour même (nom, SIRET, prestation, 690 €, délai de 7 jours après réception des éléments, acompte de 50 %, mention de franchise de TVA).
2. Joins la **liste des éléments à fournir** :
   - logo (si possible en vectoriel)
   - 5 à 10 photos de l'atelier, des machines et des pièces
   - la liste des machines (marque, modèle, capacité)
   - les certifications avec leur numéro
   - les matières travaillées et les secteurs servis
   - accès au nom de domaine actuel, s'il existe
3. Fais une **facture d'acompte** dès que le devis est signé.
4. Livre en 7 jours, puis envoie la facture de solde avec la proposition de maintenance à 29 €/mois.

---

## 8. Après la livraison

Le jour de la mise en ligne, tu demandes trois choses :

> Ça m'aiderait beaucoup si vous pouviez :
> 1. laisser un avis sur ma fiche Google ;
> 2. me permettre de montrer votre site comme référence ;
> 3. me dire si vous connaissez un atelier qui aurait besoin de la même chose.

Et sur Malt : demande-lui une recommandation. C'est ce qui débloquera tes premières missions là-bas.

---

## 9. Les chiffres à suivre chaque dimanche

| Indicateur | Objectif S2 | Objectif S3 |
|---|---|---|
| Prospects contactés | 25 | 40 |
| Maquettes envoyées | 5 | 8 |
| Rendez-vous ou appels de fond | 4 | 8 |
| Devis envoyés | 1 | 3 |
| Signatures | 0 | 2 |

Si tu as moins de 3 rendez-vous pour 25 contacts, change le constat de l'email (il n'est pas assez précis). Si tu as des rendez-vous mais pas de signature, c'est la conclusion : demande le oui plus clairement.
