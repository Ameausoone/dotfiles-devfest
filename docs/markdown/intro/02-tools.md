
<!-- .slide: class="transition bg-green" -->
# Tools

##==##
<!-- .slide: -->
# [asdf](https://github.com/asdf-vm/asdf) 18.9k⭐️: Gestionnaire de versions polyvalent

- Gère plusieurs versions d'un même outil
- Plus facile à utiliser que `tfswitch`, `pyenv`, etc.
- Gère les versions de:
  - Terraform
  - Python
  - Node.js
  - Java
  - etc.
- Nouveau challenger: [rtx](https://github.com/jdx/rtx) 3.4k⭐️
<!-- .element: class="list-fragment" -->

Notes:
* `asdf` offre une approche générique pour la gestion de version
* Capacité de gérer simultanément plusieurs versions d'un outil
* Flexibilité accrue pour les développeurs nécessitant diverses versions

##==##
<!-- .slide: -->
# asdf: demo

![h-600](./assets/images/asdf-demo.gif)

##==##
<!-- .slide: -->
# autoenv: Automatisation par répertoire

- Exécute des scripts automatiquement en entrant/quittant un répertoire
- Charge des variables d'environnement, lance des scripts sur demande
- Exemples: 
  - Charger un environnement virtuel Python, 
  - Lancer un serveur local
  - Charger des credentials dans un répertoire spécifique
<!-- .element: class="list-fragment" -->

Notes:
* `autoenv` est utile pour automatiser la configuration de l'environnement de travail
* Il facilite la gestion des dépendances et des prérequis pour les projets

##==##
<!-- .slide: -->
# [Powerlevel10k](https://github.com/romkatv/powerlevel10k) 39.5k⭐: Prompt Dynamique pour zsh

- Prompt complet, configurable et rapide
- Affiche des informations diverses en temps réel:
  - Temps d'exécution de la dernière commande
  - Résultat de la dernière commande
  - État du repo git
  - Environnements (virtualenv, kubernetes, etc.)
<!-- .element: class="list-fragment" -->

Notes:
* `Powerlevel10k` offre une expérience de terminal améliorée
* Fournit des retours immédiats et contextuels
* Permet une personnalisation poussée pour répondre aux besoins spécifiques

##==##
<!-- .slide: -->
# Powerlevel10k

![h-600](./assets/images/powerlevel10k.png)
