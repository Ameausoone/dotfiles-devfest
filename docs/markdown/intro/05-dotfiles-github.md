<!-- .slide: class="transition bg-green" -->
# Dotfiles: .gitconfig

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
<type>(<scope>)(!): <subject>

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
