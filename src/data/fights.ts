export interface Fight {
  id: string;
  redCorner: string;
  blueCorner: string;
  weightClass: string;
  isMain: boolean;
  isComain: boolean;
  label?: string;
}

export const FIGHTS: Fight[] = [
  { id: 'f1',  redCorner: 'Maciej Sulęcki',      blueCorner: 'Kacper Formela',      weightClass: 'Bare Knuckle',    isMain: true,  isComain: false, label: 'Walka Główna' },
  { id: 'f2',  redCorner: 'Jessica Kusz',         blueCorner: 'Dominika Rybak',      weightClass: 'do 68 kg · K',    isMain: false, isComain: true  },
  { id: 'f3',  redCorner: 'Krystian Kaszubowski', blueCorner: 'Henry Fadipe',        weightClass: 'Bare Knuckle',    isMain: false, isComain: false },
  { id: 'f4',  redCorner: 'Wojciech Sobierajski', blueCorner: 'Greg Maksel',         weightClass: 'Bare Knuckle',    isMain: false, isComain: false },
  { id: 'f5',  redCorner: 'Jędrzej Durski',       blueCorner: 'Dariusz Sęk',         weightClass: 'Bare Knuckle',    isMain: false, isComain: false },
  { id: 'f6',  redCorner: 'Artur Sowiński',        blueCorner: 'Adam Ugorski',        weightClass: 'Bare Knuckle',    isMain: false, isComain: false },
  { id: 'f7',  redCorner: 'Artur Kubiak',         blueCorner: 'Kamil Tworek',        weightClass: 'Bare Knuckle',    isMain: false, isComain: false },
  { id: 'f8',  redCorner: 'Adrian Matysiak',      blueCorner: 'Łukasz Segda',        weightClass: 'Bare Knuckle',    isMain: false, isComain: false },
  { id: 'f9',  redCorner: 'Mikołaj Ćwik',         blueCorner: 'Sebastian Marecik',   weightClass: 'Bare Knuckle',    isMain: false, isComain: false },
  { id: 'f10', redCorner: 'Monika Zielińska',     blueCorner: 'TBA',                 weightClass: 'Bare Knuckle · K', isMain: false, isComain: false },
];

export const opponentMap = new Map<string, string>(
  FIGHTS.flatMap(f => [
    [f.redCorner, f.blueCorner],
    [f.blueCorner, f.redCorner],
  ])
);
