TODO 1 et 3 : Faites en sorte que les liens fonctionnent, et que cela ne reload pas completement la page
Indice : Il faut utiliser une directive sur le tag <a>
Solution : Mise en place d'un routerLink à la place des href afin de permettre une transition sans rechargement de la page.

TODO 2 : Creer un pipe qui permet de mettre le premier mot en majuscule, le reste en minuscule et de remplacer les underscores par des espaces
Solution : Création d'un pipe avec la commande ng g p pipes/format puis ajout de la configuration dans le pipe.ts généré dans le but de transformer le titre. Ajout du pipe dans le titre avec | format, avec l'ajout du pipe dans les imports du app.component.ts

TODO 22 et 23 : Creer un component pour afficher le header et footer et l'utiliser dans le app.component.html
Solution : Création de deux conponent header et footer crée en standalone avec ng g c components/header et components/footer, coupez/coller le header et footer et les placés dans les htmls généré pour le header et footer respectivement, en rajoutant les imports dans les .ts pour le header. J'ai ajouté aussi dans le app.component.html <app-header></app-header> et <app-footer><app-footer> pour les intégrer à l'application.

TODO 4 : Les pages ne sont pas affichées. Essayer de résoudre le problème
Solution : Vérification des routerOutlet, du config.ts et du routes.ts, Je n'ai eu aucun problème pour l'affichage de différente page.

TODO 5 : Créer une route pour la page détail d'un livre
Solution : Route déjà existente dans le app.routes.ts { path: 'books/:id', component: BookDetailComponent },

TODO 6 : Créer un formulaire avec les champs suivants : title, author, description, category
TODO 7 : Ajouter les validations nécessaires
Solution pour les deux : Utilisation de FormBuilder, avec l'ajout d'un validateur Validators.required pour chaque champs nécessaire.

TODO 8 : Créer un bouton qui permet de revenir à la page précédente et
TODO 12: Le bouton ne fonctionne pas
Solution : Utilisation de la commande this.router.navigate(['..'], { relativeTo: this.route }); pour renvoyer vers la page précédente, ce qui permet de rendre le bouton fonctionnel. 

TODO 13 : Les données sont passées à la liste mais pas affichées. Affiche les données
Solution : Remplacement des data dans le Ngif par books, qui correpond aux nom des données, qui est utilisé dans le Ngfor.

TODO 14: Appliquer la directive highlight à ce champ 
TODO 10: Appliquer la directive highlight à ce champ
Solution : Ajout de [appHighlight] dans le <h2> de {{ book title }}

TODO 24: Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
Solution : Ajout de if (this.appHighlight) {
      this.el.nativeElement.style.fontWeight = 'bold'; }  => Si c'est true, on met en gras le texte
      J'ai aussi remplacé le false par un true dans le appHighlight: boolean = true dans le @input

TODO 15: Afficher la description du livre en utilisant un pour limiter à 20 caractères et ajouter des points de suspension si la description est plus longue. Il faut utiliser un pipe existant ou en créer un nouveau pipe. Libre choix 
Solution : Transformation de {{ book.description }} en {{ book.description.length > 20 ? (book.description | slice:0:20) + '...' : book.description }}

TODO 9: Dans la console on voit cette erreur : main.ts:5 ERROR TypeError: Cannot read properties of undefined (reading 'title') En realité on affiche le titre du livre avant qu'il ne soit défini. Fix le bug
Solution : Je n'ai pas eu de problème sur ma version locale (pas d'erreur console), mais j'ai ajouté un *ngIf="book" dans <div class="book-detail-container" *ngIf="book">, dans le but de charger la page quand book est défini.

TODO 16: Affiche une alerte qui indique que le favori a été modifié
TODO 17: Affiche une alerte qui indique que la modification du favori a échoué
TODO 18: Affiche une alerte qui indique que le livre a été supprimé
TODO 19: Affiche une alerte qui indique que la suppression du livre a échoué
Solution : Utilisation de la méthode alert, qui envoie un message à l'utilisateur que le favori à été modifié.
alert(`Le livre "${updatedBook.title}" a été ${updatedBook.isFavorite ? 'ajouté' : 'retiré'} des favoris.`);

TODO 20 : Identifie et corrige l'erreur & affiche le titre en uppercase
Solution : Ajout d'un pipe | uppercase dans {{ title }} en ajoutant la balise <h1> pour le titre et en mettant <h2> pour le texte suivant qui était en <h1>.