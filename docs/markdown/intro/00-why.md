<!-- .slide: -->
# Comment j'ai commencé ?

- commencer à provisionner mon poste depuis un peu plus de 6 ans.
- Ansible pour automatiser la configuration de mon poste
- [Opensourcer](https://github.com/Ameausoone/macos-provision) depuis 2 ans
- Je me suis inspiré de [geerlingguy/mac-dev-playbook](https://github.com/geerlingguy/mac-dev-playbook) 5.6k ⭐️
<!-- .element: class="list-fragment" -->

Notes:
* Commencer par quelque chose de connu
* Ansible peut être overkill - réfléchir avant de l'utiliser pour de nouveaux utilisateurs
* Je me suis inspiré du repo de Jeff Geerling, le pape d'Ansible

##==##
<!-- .slide: -->

# Concrétement ?

2 commandes:
- `macconfig`: pour ouvrir mon projet dans IntelliJ
- `macans`: pour appliquer ma configuration
<!-- .element: class="list-fragment" -->

Notes:
* Simplification du workflow avec deux commandes
* Automatisation du processus de configuration

##==##
<!-- .slide: -->
# Pourquoi ?

- Entendu parler du provisionning de conf
- Pouvoir réinstaller mon poste rapidement (même si ça arrive très rarement).
- Surtout: maîtriser la configuration de mon poste.
- Capitaliser 
<!-- .element: class="list-fragment" -->

Notes: @antoine
* Importance de la personnalisation et de l'automatisation
* Réinstaller rapidement - productivité accrue
* Maîtrise du poste de travail

##==##
<!-- .slide: -->
# On commence par quoi ?

- Début avec un playbook simple
- Utilisation de `brew` pour installer les outils essentiels

```yaml
homebrew_installed_packages:
  - adr-tools         # Outil en ligne de commande pour Architecture Decision Records
  - autoenv           # Exécute un fichier .env lors du changement de répertoire
  - autojump          # Navigation rapide dans le système de fichiers
  - antigen           # Gestionnaire de paquets pour zsh
  - bash-completion   # Collection de scripts pour l'auto-complétion bash
  - bats              # Suite de tests en ligne de commande
  - git               # Système de contrôle de version
  - htop              # Visionneuse de processus interactive
  - jq                # Processeur JSON léger et flexible en ligne de commande
```

Notes:
2m20s
* Structuration de l'environnement avec des outils familiers via Homebrew, 
* ou sur Windows avec Chocolatey
* Facilitation de l'installation et de la mise à jour des outils utilisés régulièrement

##==##
<!-- .slide: -->
# Installation avec Homebrew

- Tâche Ansible pour installer les paquets listés
- Gestion des paquets idempotente avec `state: present`
- Mise à jour systématique avec `upgrade_all: true`

```yaml
- name: Install homebrew package
  failed_when: false
  community.general.homebrew:
    name: "{{ homebrew_installed_packages }}"
    state: present
    upgrade_all: true
```

Notes:
* Automatisation de l'installation des paquets avec Ansible
* Assurance que les paquets sont toujours à la version la plus récente
* Configuration permettant une installation sûre et sans erreurs
* Uninstall liste aussi pour désinstaller les paquets inutiles

##==##
<!-- .slide: -->
# Aliases

- Création d'aliases pour optimiser les commandes courantes
- Définition de fonctions pour des actions combinées

```shell
# Facilite l'utilisation de find et grep
function f() { find . -iname "*$1*" ${@:2} }
function r() { grep "$1" ${@:2} -R . }

# Raccourci pour créer et entrer dans un dossier
function mkcd() { mkdir -p "$@" && cd "$_"; }

# Alias pour simplifier les commandes répétitives
alias ..="cd .."
alias m="make"
alias k="kubectl"
alias tf="terraform"
...
```

Notes:
* Les aliases et fonctions personnalisées améliorent l'efficacité
* Simplification des tâches récurrentes avec des commandes plus courtes
* Adoption de pratiques qui accélèrent le travail quotidien

##==##
<!-- .slide: -->
# Aliases pour le provisionning

- Alias spécifiques pour ouvrir et gérer le projet de configuration

```shell
# Ouvre le projet macos-provision dans IntelliJ
alias macconfig="idea ${MACOS_SETUP_DIR}"

# Script pour mise à jour git et exécution Ansible
function macans() {
  cd ${MACOS_SETUP_DIR}/macos-provision && \
  gitandans $1
}
```

Notes:
*"macconfig" simplifie l'accès à la configuration du projet
*"macans" combine les commandes Git avec l'exécution d'Ansible pour une mise à jour rapide
