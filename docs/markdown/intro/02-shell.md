<!-- .slide: -->
# Personnalisation du shell

- Comment pimper mon shell ?
- `zsh`
- `oh-my-zsh`
- Mais aussi : fish, powershell, etc.
- Mes features/outils préférés 
<!-- .element: class="list-fragment" -->

Notes:
* 1er étape: pimper mon shell, et dépasser le simple "bash".
* `zsh` 
* et rapidement `oh-my-zsh`
* j'ai commencé à regarder ce que les d'autres personnes utilises
* et j'ai découvert tout un tas d'outils
* je vais vous en présenter quelques un

##==##
<!-- .slide: -->

# Auto-completion

![h-600 center](./assets/images/autocompletion.gif)

Notes:
4m40s

##==##
<!-- .slide: -->

# [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) 164k⭐️

![h-600 center](./assets/images/oh-my-zsh.png)

##==##
<!-- .slide: -->
# Plugins oh-my-zsh

- Nombreux plugins ["out of the box"](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins) (+ de 300 plugins)
- Ajout de plugins personnalisés facilité
- Ma liste dispo => [01_oh-my-zsh-plugins.zsh](https://github.com/Ameausoone/macos-provision/blob/main/roles/mac_dev_playbook/files/.zshrc.d/core/01_oh-my-zsh-plugins.zsh#L6)
<!-- .element: class="list-fragment" -->

Notes:
* Flexibilité d'extension avec des plugins oh-my-zsh
* Possibilité de consulter et d'ajouter des plugins via le lien fourni

##==##
<!-- .slide: -->
# [Powerlevel10k](https://github.com/romkatv/powerlevel10k) 39.5k⭐: Prompt Dynamique pour zsh

- Prompt complet, configurable et rapide
- Affiche des informations diverses en temps réel
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

![h-600 center](./assets/images/powerlevel10k.png)
