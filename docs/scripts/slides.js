import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
  '00-school/00-TITLE.md',
  '00-school/01-speaker-ameausoone.md'
  ];
}

function introSlides() {
  return [
  'intro/00-why.md',
  'intro/01-zsh.md',
  'intro/02-tools.md',
  'intro/03-structure.md',
  'intro/04-dotfiles.md',
  'intro/05-conclustion.md',
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
