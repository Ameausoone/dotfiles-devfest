##==##
<!-- .slide: class="transition bg-green" -->
# Structure du projet

Notes:
9m20s

##==##
<!-- .slide: -->
# .zshrc: Le Cœur de la Configuration zsh

- Chargement automatique à chaque lancement de shell
- Point d'entrée pour personnaliser l'environnement de commande
- Gestion de la complexité via la distribution des fichiers
<!-- .element: class="list-fragment" -->

```shell
for file in ~/.zshrc.d/*/*.zsh;
do
  source $file
done
```

Notes:
* Le fichier .zshrc permet une customisation profonde et personnelle du shell
* La structure en sous-répertoire aide à maintenir l'ordre et la clarté
* Favorise une organisation modulaire de la configuration

##==##
<!-- .slide: -->
# Priorité dans les Configurations

- Gestion des dépendances entre scripts
- Utilisation d'un modèle de priorisation bien établi

```shell
├── .zshrc.d
│   └── core
│       ├── 00_antigen.zsh
│       ├── 01_oh-my-zsh-plugins.zsh
│       ...
│       ├── 10_ansible.zsh
│       ...
│       ├── 20_gnupg.zsh
│       ...
│       ├── 50_colima.zsh
│       ...
│       ├── 80_autoenv.zsh
│       ├── 80_p10k.zsh
│       └── 90_antigen.zsh
```
Notes:
* L'ordre numérique garantit la priorité et la charge séquentielle
* Assure que les dépendances soient respectées lors du chargement
* Permet une organisation claire et modulaire de la configuration shell

##==##
<!-- .slide: -->
# Contenu des Scripts

- Variables d'environnement
- Aliases/Scripts
- Activation de l'autocomplétion
- Configurations spécifiques
<!-- .element: class="list-fragment" -->

Notes:
* Scripts adaptés aux besoins spécifiques
* Inclusion conditionnelle garantissant une exécution sûre
* Facilite la personnalisation et l'optimisation de l'environnement de développement

##==##
<!-- .slide: -->
# autojump

autojump.zsh
```shell
#!/usr/bin/env zsh

[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh
```
##==##
<!-- .slide: -->
# ansible

ansible.zsh
```shell
alias a="ansible"
alias ap="ansible-playbook"
alias apd="ansible-playbook --diff"
alias apdv="ansible-playbook --diff --verbose"
```

Notes:
11m40s

##==##
<!-- .slide: -->
# autoenv

autoenv.zsh
```shell
source "$(brew --prefix autoenv)/activate.sh"
```

##==##
<!-- .slide: -->
# powerlevel10k

p10k.zsh
```shell
# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
```

##==##
<!-- .slide: -->
# gcloud

gcloud.zsh
```shell
# Aliases for gcloud
# Authenticate
alias g='gcloud'
alias gauth='gcloud auth login --update-adc'
alias gke='gcloud container'
alias gke-list='gcloud container clusters list'
alias gke-credentials='gcloud container clusters get-credentials'

# Autocompletion
# The next line updates PATH for the Google Cloud SDK.
source "$(asdf where gcloud)/path.zsh.inc"

# The next line enables zsh completion for gcloud.
source "$(asdf where gcloud)/completion.zsh.inc"
```
