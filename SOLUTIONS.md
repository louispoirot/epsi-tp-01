Problème #1: Navigation incorrecte

Symptôme: Certains liens rechargent complètement la page au lieu d'utiliser le routeur Angular. Impact: L'expérience utilisateur est dégradée, l'application perd son état. Indice: Vérifiez comment les liens sont définis dans les templates HTML, en particulier les balises <a>.

Solution : Remplacer les href par routerLink dans le app.component.html

Problème #2: Besoin de formatage de texte

Symptôme: Les catégories de livres ne sont pas affichées correctement. Impact: L'affichage n'est pas esthétique, les underscores sont visibles. Indice: Vous devez créer un pipe personnalisé pour formater le texte.

Solution : Créer un pipes avec ng g p [nom du pipe] (ng g p pipes/format pour ma part), ajouter dans format.pipe.ts le script pour transformer le texte, puis l'appliquer dans le app.component.html : <span>{{ title | format }}</span>

Problème #3: Structure de page incomplète

Symptôme: L'application manque de modularité et de réutilisation de code. Impact: La maintenance du code est difficile, des composants sont dupliqués. Indice: Identifiez les éléments communs qui pourraient être extraits en composants réutilisables.

Solution : 

Problème #4: Pages non affichées

Symptôme: Certaines pages ne s'affichent pas correctement. Impact: Les utilisateurs ne peuvent pas accéder à certaines fonctionnalités. Indice: Vérifiez la configuration des routes et la structure des composants.

Solution : 

Problème #5: Route manquante

Symptôme: La page de détail d'un livre n'est pas accessible. Impact: Les utilisateurs ne peuvent pas voir les détails d'un livre. Indice: Vous devez créer une route dans le fichier de configuration des routes.

Solution : 

Problème #6: Formulaire incomplet

Symptôme: Le formulaire d'ajout de livre n'est pas implémenté. Impact: Les utilisateurs ne peuvent pas ajouter de nouveaux livres. Indice: Vous devez créer un formulaire avec les champs nécessaires.

Solution : 

Problème #7: Validations manquantes

Symptôme: Le formulaire accepte des données invalides. Impact: Des données incomplètes ou incorrectes peuvent être soumises. Indice: Ajoutez des validations aux champs du formulaire.

Solution : 

Problème #8: Navigation manquante

Symptôme: Impossible de revenir à la page précédente depuis certaines vues. Impact: L'utilisateur se retrouve bloqué dans certaines pages. Indice: Ajoutez un bouton de retour et implémentez la navigation.

Solution : 

Problème #9: Erreur dans la console

Symptôme: Erreur "Cannot read properties of undefined" dans la console. Impact: L'application peut planter lorsque les données ne sont pas chargées. Indice: Gérez correctement les données asynchrones avant d'y accéder.

Solution : 

Problème #10: Directive non appliquée

Symptôme: Certains éléments ne sont pas mis en évidence comme prévu. Impact: L'expérience utilisateur est dégradée, manque d'indications visuelles. Indice: Appliquez la directive highlight aux éléments appropriés.

Solution : 

Problème #11: Bouton non fonctionnel

Symptôme: Certains boutons ne réagissent pas aux clics. Impact: Les actions ne peuvent pas être effectuées. Indice: Vérifiez les gestionnaires d'événements associés aux boutons.

Solution : 

Problème #12: Données non affichées

Symptôme: Les données sont chargées mais n'apparaissent pas dans l'interface. Impact: L'utilisateur ne voit pas les informations importantes. Indice: Vérifiez comment les données sont passées et affichées dans les templates.

Solution : 

Problème #13: Descriptions trop longues

Symptôme: Les descriptions des livres prennent trop de place. Impact: L'interface utilisateur est encombrée et moins lisible. Indice: Utilisez ou créez un pipe pour limiter la longueur du texte affiché.

Solution : 

Problème #14: Retour utilisateur manquant

Symptôme: Aucune confirmation n'est affichée après certaines actions. Impact: L'utilisateur ne sait pas si son action a réussi ou échoué. Indice: Ajoutez des alertes ou notifications pour informer l'utilisateur.

Solution : 

Problème #15: Erreur d'affichage du titre

Symptôme: Les titres ne s'affichent pas correctement. Impact: L'information présentée est incorrecte ou mal formatée. Indice: Vérifiez comment les titres sont manipulés et affichés.

Solution : 

Problème #16: Directive incomplète

Symptôme: La directive highlight ne fonctionne pas comme prévu. Impact: Certains éléments ne sont pas mis en évidence correctement. Indice: Modifiez la directive pour qu'elle affecte à la fois la couleur de fond et le poids du texte.

Solution : 
