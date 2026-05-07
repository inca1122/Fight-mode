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
  { id: 'f1', redCorner: 'Maciej Sulęcki', blueCorner: 'Greg Maksel', weightClass: 'do 90 kg', isMain: true, isComain: false, label: 'Walka Główna' },
  { id: 'f2', redCorner: 'Henry Fadipe', blueCorner: 'Artur Kubiak', weightClass: 'do 85 kg', isMain: false, isComain: false },
  { id: 'f3', redCorner: 'Dominika Rybak', blueCorner: 'Jessica Kusz', weightClass: 'do 65 kg · K', isMain: false, isComain: true },
  { id: 'f4', redCorner: 'Kamil Tworek', blueCorner: 'Jędrzej Durski', weightClass: 'do 80 kg', isMain: false, isComain: false },
  { id: 'f5', redCorner: 'Dariusz Sęk', blueCorner: 'Krystian Kaszubowski', weightClass: 'do 77 kg', isMain: false, isComain: false },
  { id: 'f6', redCorner: 'Artur Sowiński', blueCorner: 'Łukasz Segda', weightClass: 'do 72 kg', isMain: false, isComain: false },
  { id: 'f7', redCorner: 'Adam Ugorski', blueCorner: 'Formela', weightClass: 'do 77 kg', isMain: false, isComain: false },
];

export const opponentMap = new Map<string, string>(
  FIGHTS.flatMap(f => [
    [f.redCorner, f.blueCorner],
    [f.blueCorner, f.redCorner],
  ])
);
