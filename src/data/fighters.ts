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
  // ── WALKA GŁÓWNA ──
  {
    id: '001', slug: 'sulecki', firstName: 'Maciej', lastName: 'Sulęcki', nickname: 'Striczu',
    weightKg: 90, weightClass: 'Bare Knuckle', country: 'PL', record: '33-4-0',
    height: '186 cm', style: 'Boks zawodowy',
    bio: 'Jeden z najmocniejszych nazwisk polskiego boksu zawodowego. Zdobywca pasów WBC Silver, WBO Inter-Continental oraz IBF Inter-Continental. Walczył o mistrzostwo świata. W Fight Mode wnosi autentyczność, klasę sportową i doświadczenie z największych ringów.',
    cardType: 'main', gender: 'M',
  },
  {
    id: '002', slug: 'formela', firstName: 'Kacper', lastName: 'Formela', nickname: 'Polish Machida',
    weightKg: 70, weightClass: 'Bare Knuckle', country: 'PL', record: '19-6-0',
    style: 'MMA / Karate Shotokan',
    bio: 'Były mistrz FEN w wadze piórkowej, zawodnik KSW. Jego styl oparty na pracy nóg, timingu i kontroli dystansu wziął się z karate Shotokan. W Fight Mode staje naprzeciw Sulęckiemu — starcie dwóch światów: MMA kontra czysty boks zawodowy.',
    cardType: 'main', gender: 'M',
  },
  // ── CO-MAIN ──
  {
    id: '003', slug: 'kusz', firstName: 'Jessica', lastName: 'Kusz',
    weightKg: 68, weightClass: 'do 68 kg', country: 'PL', record: '1-0-0',
    age: 24, height: '173 cm', style: 'K-1 / Bare Knuckle', club: 'WCA Fight Team',
    bio: 'Zawodniczka z udanym debiutem zakończonym TKO. Ofensywny styl, determinacja i bezkompromisowe dążenie do zwycięstwa. Poza sportem: studentka psychologii i trenerka personalna.',
    cardType: 'co-main', gender: 'F',
  },
  {
    id: '004', slug: 'rybak', firstName: 'Dominika', lastName: 'Rybak',
    weightKg: 65, weightClass: 'do 65 kg', country: 'PL', record: '2-1-0',
    style: 'MMA / K-1 / Bare Knuckle',
    bio: 'Zawodniczka z doświadczeniem w MMA, K-1 i bare knuckle. Szlifuje umiejętności również w Tajlandii. Wnosi doświadczenie, medialność i zadziorność — przede wszystkim gotowość do wejścia w ogień.',
    cardType: 'co-main', gender: 'F',
  },
  // ── UNDERCARD ──
  {
    id: '005', slug: 'kaszubowski', firstName: 'Krystian', lastName: 'Kaszubowski',
    weightKg: 77, weightClass: 'Bare Knuckle', country: 'PL', record: '12-6-0, 1 NC',
    style: 'MMA',
    bio: 'Doświadczony zawodnik MMA, znany z występów dla KSW. Walczył m.in. z Roberto Soldiciem i Adrianem Bartosińskim. W Fight Mode staje do rewanżu z Fadipe.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '006', slug: 'fadipe', firstName: 'Henry', lastName: 'Fadipe',
    weightKg: 77, weightClass: 'Bare Knuckle', country: 'PL', record: '15-13-1',
    style: 'MMA / K-1',
    bio: 'Nigeryjsko-irlandzki zawodnik MMA z pasami mistrzowskimi EFC, Cage Gods, Cage Legacy i tytułem mistrza ISKA K-1. Większość zwycięstw kończył przez KO/TKO. Rewanż z Kaszubowskim ma jedno zadanie: zamknąć temat.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '007', slug: 'sobierajski', firstName: 'Wojciech', lastName: 'Sobierajski', nickname: 'Rekordzista',
    weightKg: 85, weightClass: 'Bare Knuckle', country: 'PL', record: '2-0-0',
    style: 'MMA / Siła',
    bio: 'Pseudonim nie jest przypadkiem. Ma na koncie ekstremalne rekordy siłowo-wytrzymałościowe, w tym rekordy Guinnessa i rekordy Polski. W zawodowym MMA pozostaje niepokonany. Bare knuckle idealnie pasuje do jego charakteru.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '008', slug: 'maksel', firstName: 'Greg', lastName: 'Maksel',
    weightKg: 85, weightClass: 'Bare Knuckle', country: 'PL', record: 'ok. 50 walk bok.',
    style: 'Boks',
    bio: 'Zawodnik z solidnym ringowym zapleczem wyniesionym z boksu, związany z irlandzkim St Mary\'s Boxing Club. Razem z Sobierajskim mają za sobą ponad 150 amatorskich pojedynków. Timing, odporność i charakter.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '009', slug: 'durski', firstName: 'Jędrzej', lastName: 'Durski',
    weightKg: 80, weightClass: 'Bare Knuckle', country: 'PL', record: '2-1-0 (BK)',
    style: 'Kickboxing / Bare Knuckle', club: 'Poznań',
    bio: 'Zawodnik z Poznania wywodzący się z kickboxingu, z doświadczeniem w BKFC oraz Krwawy Sport. Lubi mocne tempo, bezpośrednią presję i pojedynki, w których charakter widać od pierwszych wymian.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '010', slug: 'sek', firstName: 'Dariusz', lastName: 'Sęk',
    weightKg: 80, weightClass: 'Bare Knuckle', country: 'PL', record: '28-6-3',
    style: 'Boks zawodowy', club: 'Tarnów',
    bio: 'Doświadczony zawodowy bokser z 37 walkami na koncie. Pasy WBC Eurasia Pacific. Walczył o WBO European, IBF Inter-Continental oraz WBC Silver. Mierzył się z Anthonym Yarde\'em.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '011', slug: 'sowinski', firstName: 'Artur', lastName: 'Sowiński', nickname: 'Kornik',
    weightKg: 70, weightClass: 'Bare Knuckle', country: 'PL', record: '25-15-0, 4 NC',
    style: 'MMA',
    bio: 'Były mistrz KSW w wadze piórkowej — jeden z najbardziej doświadczonych zawodników polskiej sceny MMA. Zdobył pierwszy w historii pas KSW w wadze piórkowej. Wnosi doświadczenie mistrza i mentalność zawodnika, który nie pęka.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '012', slug: 'ugorski', firstName: 'Adam', lastName: 'Ugorski',
    weightKg: 70, weightClass: 'Bare Knuckle', country: 'PL', record: '2-2-0',
    style: 'MMA', club: 'Konin',
    bio: 'Zawodnik z Konina z doświadczeniem w Slugfest i GSW. Walczył m.in. z Jakubem Kamieniarzem. W Fight Mode staje przed byłym mistrzem KSW — ogromna szansa i brutalny test jednocześnie.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '013', slug: 'kubiak', firstName: 'Artur', lastName: 'Kubiak', nickname: 'Bicek',
    weightKg: 95, weightClass: 'Bare Knuckle', country: 'PL', record: '4-0 (BK)',
    style: 'Bare Knuckle / Boks', club: 'Poznań',
    bio: 'Zawodnik z Poznania niepokonany w walkach na gołe pięści (4-0). Zwyciężył turniej GROMDA 16. Jego styl opiera się na presji, sile fizycznej i gotowości do wymian. Bare knuckle to jego naturalne środowisko.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '014', slug: 'tworek', firstName: 'Kamil', lastName: 'Tworek', nickname: 'Viking',
    weightKg: 95, weightClass: 'Bare Knuckle', country: 'PL', record: '2-1-0',
    style: 'Modified Boxing / MMA',
    bio: 'Kamil „Viking" Tworek ma za sobą występy w modified boxing, boksie w małych rękawicach oraz MMA. Bazuje na sile, presji i agresywnym stylu. Fight Mode to naturalne przejście z małych rękawic do jeszcze twardszej rywalizacji.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '015', slug: 'matysiak', firstName: 'Adrian', lastName: 'Matysiak',
    weightKg: 90, weightClass: 'Bare Knuckle', country: 'PL',
    style: 'MMA',
    bio: 'Adrian Matysiak wchodzi do Fight Mode z nastawieniem na walkę i udowodnienie swojej wartości. Bare knuckle to dla niego nowe otwarcie i szansa na pokazanie charakteru tam, gdzie nie da się niczego ukryć.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '016', slug: 'segda', firstName: 'Łukasz', lastName: 'Segda',
    weightKg: 90, weightClass: 'Bare Knuckle', country: 'PL', record: 'BFN / Carpathian Warriors',
    style: 'Bare Knuckle',
    bio: 'Łukasz Segda ma za sobą pojedynki w bare knuckle na galach BFN oraz Carpathian Warriors. Ten ogień już zna. W Fight Mode chce udowodnić, że ma coś do pokazania na większej scenie.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '017', slug: 'cwik', firstName: 'Mikołaj', lastName: 'Ćwik',
    weightKg: 80, weightClass: 'Bare Knuckle', country: 'PL',
    style: 'Bare Knuckle',
    bio: 'Debiutant z historią inną niż większość. Na co dzień mieszka w Danii, ale 23 maja wraca do Polski. Jego droga zaczęła się od jednego zgłoszenia zauważonego przez Sandrę Kubicką. Wnosi głód debiutanta i mentalność zawodnika, który nie ma nic do stracenia.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '018', slug: 'marecik', firstName: 'Sebastian', lastName: 'Marecik',
    weightKg: 80, weightClass: 'Bare Knuckle', country: 'PL',
    style: 'Bare Knuckle',
    bio: 'Sebastian Marecik wchodzi do Fight Mode bez wielkiego rekordu — po moment, który może zbudować jego rozpoznawalność od zera. Starcie z Ćwikiem to pojedynek dwóch debiutantów, którzy chcą wykorzystać swoją pierwszą dużą szansę.',
    cardType: 'undercard', gender: 'M',
  },
  {
    id: '019', slug: 'zielinska', firstName: 'Monika', lastName: 'Zielińska',
    weightKg: 66, weightClass: 'Bare Knuckle', country: 'PL', record: '1-1-0',
    style: 'Karate Kyokushin / MMA', club: 'Elite Fight / Warszawa',
    bio: '5-krotna mistrzyni Europy, wicemistrzyni świata i 3-krotna mistrzyni Polski w Karate Kyokushin. Do klatki wnosi nie tylko technikę, ale lata rywalizacji na najwyższym poziomie i mentalność wypracowaną w twardej, kontaktowej formule walki.',
    cardType: 'undercard', gender: 'F',
  },
];
