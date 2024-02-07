##==##
<!-- .slide: class="transition bg-green" -->
# MacOS

Notes:

##==##
<!-- .slide: -->
# Comment provisionner son Mac ?

- Il est possible de provisionner la configuration de l'OS via `defaults`
- Vous pouvez configurer le comportement de l'OS
- Exemples: 
- `defaults write com.apple.dock autohide -bool true` pour cacher le dock
- `defaults write com.apple.finder AppleShowAllFiles YES` pour afficher les fichiers cachés
- `defaults write com.apple.LaunchServices LSQuarantine -bool false` pour désactiver les avertissements de sécurité

##==##
<!-- .slide: -->
# Exemple

- Vous pouvez trouver des exemples exhaustifs sur [driesvints/dotfiles/.macos](https://github.com/driesvints/dotfiles/blob/main/.macos)

.macos
```shell
# Require password immediately after sleep or screen saver begins
defaults write com.apple.screensaver askForPassword -int 1
defaults write com.apple.screensaver askForPasswordDelay -int 0
# Enable subpixel font rendering on non-Apple LCDs
defaults write NSGlobalDomain AppleFontSmoothing -int 1
# Finder: disable window animations and Get Info animations
defaults write com.apple.finder DisableAllAnimations -bool true
```

