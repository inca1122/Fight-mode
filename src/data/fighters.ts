export interface Fighter {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  nickname?: string;
  weightKg: number;
  weightClass: string;
  country: string;
  record?: string;
  age?: number;
  height?: string;
  style?: string;
  club?: string;
  bio?: string;
  cardType: 'main' | 'co-main' | 'undercard';
  gender: 'M' | 'F';
}

export const FIGHTERS: Fighter[] = [
  { id: '001', slug: 'sulecki', firstName: 'Maciej', lastName: 'Sulęcki', nickname: 'Striczu', weightKg: 90, weightClass: 'do 90 kg', country: 'PL', record: '33–4–0', age: 35, height: '186 cm', style: 'Boks', club: 'TBA', bio: 'Były mistrz świata WBO w boksie zawodowym. Legenda polskiego ringu wraca – tym razem bez rękawic.', cardType: 'main', gender: 'M' },
  { id: '002', slug: 'maksel', firstName: 'Greg', lastName: 'Maksel', nickname: undefined, weightKg: 90, weightClass: 'do 90 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Bare Knuckle', club: 'TBA', bio: 'Wojownik znany z agresywnego stylu i niezłomnej woli walki.', cardType: 'main', gender: 'M' },
  { id: '003', slug: 'kusz', firstName: 'Jessica', lastName: 'Kusz', nickname: undefined, weightKg: 65, weightClass: 'do 65 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'MMA / Boks', club: 'TBA', bio: 'Jedna z czołowych zawodniczek polskiej sceny walki.', cardType: 'co-main', gender: 'F' },
  { id: '004', slug: 'rybak', firstName: 'Dominika', lastName: 'Rybak', nickname: undefined, weightKg: 65, weightClass: 'do 65 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Kick-boxing', club: 'TBA', bio: 'Wielokrotna mistrzyni Polski w kick-boxingu.', cardType: 'co-main', gender: 'F' },
  { id: '005', slug: 'fadipe', firstName: 'Henry', lastName: 'Fadipe', nickname: undefined, weightKg: 85, weightClass: 'do 85 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Boks', club: 'TBA', bio: 'Dynamiczny pięściarz z niebezpiecznym prawym prostym.', cardType: 'undercard', gender: 'M' },
  { id: '006', slug: 'kubiak', firstName: 'Artur', lastName: 'Kubiak', nickname: undefined, weightKg: 85, weightClass: 'do 85 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Boks', club: 'TBA', bio: 'Twardy wojownik z Polski centralnej.', cardType: 'undercard', gender: 'M' },
  { id: '007', slug: 'tworek', firstName: 'Kamil', lastName: 'Tworek', nickname: undefined, weightKg: 80, weightClass: 'do 80 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Bare Knuckle', club: 'TBA', bio: 'Specjalista walk na gołe pięści z bogatym doświadczeniem.', cardType: 'undercard', gender: 'M' },
  { id: '008', slug: 'durski', firstName: 'Jędrzej', lastName: 'Durski', nickname: undefined, weightKg: 80, weightClass: 'do 80 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Boks / Kick', club: 'TBA', bio: 'Wszechstronny zawodnik, groźny zarówno z dystansu jak i w zwarciu.', cardType: 'undercard', gender: 'M' },
  { id: '009', slug: 'sek', firstName: 'Dariusz', lastName: 'Sęk', nickname: undefined, weightKg: 77, weightClass: 'do 77 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Boks', club: 'TBA', bio: 'Doświadczony zawodnik z silnym ciosem.', cardType: 'undercard', gender: 'M' },
  { id: '010', slug: 'kaszubowski', firstName: 'Krystian', lastName: 'Kaszubowski', nickname: undefined, weightKg: 77, weightClass: 'do 77 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Boks', club: 'TBA', bio: 'Ambitny zawodnik z północy Polski.', cardType: 'undercard', gender: 'M' },
  { id: '011', slug: 'sowinski', firstName: 'Artur', lastName: 'Sowiński', nickname: undefined, weightKg: 72, weightClass: 'do 72 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Kick-boxing', club: 'TBA', bio: 'Błyskawiczny zawodnik ze świetnym footworkiem.', cardType: 'undercard', gender: 'M' },
  { id: '012', slug: 'segda', firstName: 'Łukasz', lastName: 'Segda', nickname: undefined, weightKg: 72, weightClass: 'do 72 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Boks', club: 'TBA', bio: 'Technicznie poprawny bokser z silnym lewym prostym.', cardType: 'undercard', gender: 'M' },
  { id: '013', slug: 'ugorski', firstName: 'Adam', lastName: 'Ugorski', nickname: undefined, weightKg: 77, weightClass: 'do 77 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Bare Knuckle', club: 'TBA', bio: 'Weteran polskiej sceny walk ulicznych.', cardType: 'undercard', gender: 'M' },
  { id: '014', slug: 'formela', firstName: 'Formela', lastName: 'Formela', nickname: undefined, weightKg: 77, weightClass: 'do 77 kg', country: 'PL', record: '—', age: undefined, height: '—', style: 'Boks', club: 'TBA', bio: 'Tajemniczy zawodnik bez przegranej w walce bez rękawic.', cardType: 'undercard', gender: 'M' },
];
