##==##
<!-- .slide: class="transition bg-green" -->
# Dotfiles

Notes:
14m00s

##==##
<!-- .slide: -->
# Gestion des Dotfiles

- Tous les fichiers de configuration
- `~/.zshrc`, `~/.gitconfig`, `~/.vimrc`, etc.

Notes:
* Les dotfiles assurent la cohérence entre les installations
* `asdf` permet une gestion flexible des outils et de leurs versions
* La maintenance est simplifiée grâce au suivi des dotfiles via Git

##==##
<!-- .slide: -->
# asdf

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

##==##
<!-- .slide: -->
# Powerlevel10k

.p10k.zsh
```shell
[...]
  typeset -g POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(
    # =========================[ Line #1 ]=========================
    status                  # exit code of the last command
    command_execution_time  # duration of the last command
    background_jobs         # presence of background jobs
    direnv
    asdf
[...]
```

Notes: 
* Et là je voudrais faire un focus sur .gitconfig

##==##
<!-- .slide: -->
# .gitconfig: sécurité

.gitconfig
```text
[user]
  name = AMeausoone
...
  signingkey = {{ gpg_key }}
[credential]
  helper = osxkeychain
```

Notes:
* `signingkey`: permet de signer les commits
* `credential.helper`: permet de stocker les identifiants

##==##
<!-- .slide: -->
# .gitconfig: push/pull

```text
[push]
  default = simple
[pull]
  rebase = true
[fetch]
  prune = true
```

Notes:
16m20s
* `push.default`: permet de pusher uniquement la branche courante
* `pull.rebase`: permet de faire un rebase au lieu d'un merge
* `fetch.prune`: permet de supprimer les branches distantes supprimées

##==##
<!-- .slide: -->
# .gitconfig: gitignore

```text
[core]
  excludesfile = ~/.gitignore
```

##==##
<!-- .slide: -->
# .gitconfig: gitignore

.gitignore
```text
# MacOS
*.DS_Store
*.LSOverride
Thumbs.db
.bundle

# IntelliJ
.idea/
*.iml

# VsCode
.vscode/
```

##==##
<!-- .slide: -->
# .gitconfig: conventionnal commits

.gitconfig
```text
[commit]
  template = ~/.gitmessage
```

##==##
<!-- .slide: -->
# .gitmessage

.gitmessage
```text
<type>(<scope>): <subject>

<body>

<footer>

# Allowed <type>
#   feat (feature)
#   fix (bug fix)
#   docs (documentation)
#   style (formatting, missing semi colons, …)
#   refactor
#   test (when adding missing tests)
#   chore (maintain)
```
