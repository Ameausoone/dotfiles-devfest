<!-- .slide: -->
# Que peut-on provisionner ?

- Packages
- Configuration des applications
- Shell
- Alias/fonctions
- MacOS
<!-- .element: class="list-fragment" -->

Notes:
* On peut provisionner beaucoup de choses
* On peut installer des paquets

##==##
<!-- .slide: -->

# Packages installés

- Utilisation de `brew` (MacOS) pour installer les outils essentiels

```yaml
homebrew_installed_packages:
  - adr-tools         # Outil en ligne de commande pour Architecture Decision Records
  - autoenv           # Exécute un fichier .env lors du changement de répertoire
  - autojump          # Navigation rapide dans le système de fichiers
  - asdf              # Gestionnaire de versions universel
  - bash-completion   # Collection de scripts pour l'auto-complétion bash
  - git               # Système de contrôle de version
  - powerlevel10k     # Thème Zsh
  - intellij-idea     # IDE pour le développement Java
```

```yaml
- name: Install homebrew package
  failed_when: false
  community.general.homebrew:
    name: "{{ homebrew_installed_packages }}"
    state: present
    upgrade_all: true
```

Notes:
2m20s
* Structuration de l'environnement avec des outils familiers via Homebrew,
* ou sur Windows avec Chocolatey
* Facilitation de l'installation et de la mise à jour des outils utilisés régulièrement

##==##
<!-- .slide: -->
# Gestion des Dotfiles

- Tous les fichiers de configuration
- `~/.zshrc`, `~/.gitconfig`, `~/.vimrc`, `~/.npmrc`, `~/.tool-versions`

Notes:
* Les dotfiles assurent la cohérence entre les installations
* `asdf` permet une gestion flexible des outils et de leurs versions
* La maintenance est simplifiée grâce au suivi des dotfiles via Git

##==##
<!-- .slide: -->
# Exemple: asdf

.tools-version
```shell
conftest v0.23.0
flux2 0.22.1
gcloud 415.0.0
hugo 0.107.0
helm 3.6.0
kubectl 1.18.16
kustomize 4.4.0
```
