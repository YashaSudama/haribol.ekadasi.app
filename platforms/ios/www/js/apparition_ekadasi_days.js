"use strict";

let  apparition_ekadasi_days = {
    '1': { name: 'Явление Нитьянанды Прабху',
           name_too_events: 'Нитьянанда',
           id: 'nityananda'
         },
    '2': { name: 'Гаура-Пурнима, явление Чайтаньи Махапрабху' + 
                 '<hr class="ekadashi_hr">' +
                 '<span class="exit bold l-height-1-1">Полный пост</span>',
           name_too_events: 'Чайтанья',
           id: 'chaytanya'
         },
    '3': { name: 'Рама Навами, явление Рамы',
           name_too_events: 'Рамачандра',
           id: 'sita'
         },
    '4': { name: 'Явление Нришимхадева' + 
                 '<hr class="ekadashi_hr">' +
                 '<span class="exit bold l-height-1-1">Пост до полудня</span>',
           name_too_events: 'Нришимхадев',
           id: 'nrisimha'
         },
    '6': { name: 'Явление Баларамы',
           name_too_events: 'Баларама',
           id: 'baladeva'
         },
    '7': { name: 'Джанмастами, явление Шри Кришны' + 
                 '<hr class="ekadashi_hr">' +
                 '<span class="exit bold l-height-1-1">Полный пост</span>',
           name_too_events: 'Джанмастами',
           id: 'krishna'
         },
    '8': { name: 'Явление А.Ч. Бхактиведанты Свами' + 
                 '<hr class="ekadashi_hr">' +
                 '<span class="exit bold l-height-1-1">Пост до полудня</span>',
           name_too_events: 'Бхактиведанта',
           id: 'bhaktivedanta'
         },
    '9': { name: 'Радхастами, явление Шримати Радхарани',
           name_too_events: 'Радхастами',
           id: 'radharany'
         },
    'A': { name: 'Праздник<br>Говардхан-пуджа',
           name_too_events: 'Говардхан',
           id: 'govardhana'
         },
    'B': { name: 'Ратха-ятра',
           name_too_events: 'Ратха-ятра',
           id: 'radha-yatra'
         },
    'C': { name: 'Уход А.Ч. Бхактиведанты Свами',
            name_too_events: 'Бхактиведанта',
            id: 'disappearance-prabhupada'
        },
    'D': { name: 'Явление Бхактисиддханты Сарасвати Тхакура ',
           name_too_events: 'Бхактисиддханта',
           id: 'bhaktisiddhanta'
        },
    'E': { name: 'Явление Бхактивиноды Тхакура Прабхупады',
            name_too_events: 'Бхактивинода',
            id: 'bhaktivinoda'
        },
    'S': { name: 'Явление Сиддхасварупананды Парамахамсы' + 
                 '<hr class="ekadashi_hr">' +
                 '<span class="exit bold l-height-1-1">Пост</span>',
           name_too_events: 'Сиддхасварупананда',
           id: 'vyasapudja'
         },
    'R': { name: 'Рождество, явление<br>Иисуса Христа',
           name_too_events: 'Рождество',
           id: 'rozhdestvo'
         },
    'Putrada': {
        name: 'Путрада',
        name_too_events: 'Путрада Экадаши',
        id: 'putrada' 
    },        
    'Sat-tila': {
        name: 'Шат-тила',
        name_too_events: 'Шат-тила Экадаши',
        id: 'sat-tila' 
    },        
    'Bhaimi': {
        name: 'Джая (Бхаими)',
        name_too_events: 'Джая Экадаши',
        id: 'bhaimi' 
    },        
    'Vijaya': {
        name: 'Виджая',
        name_too_events: 'Виджая Экадаши', 
        id: 'vijaya' 
    },        
    'Amalaki vrata': {
        name: 'Амалаки',
        name_too_events: 'Амалаки Экадаши',
        id: 'amalaki' 
    },
    'Papamocani': {
        name: 'Папа-мочани',
        name_too_events: 'Папа-мочани Экадаши',
        id: 'papamocani' 
    },
    'Kamada': {
        name: 'Камада',
        name_too_events: 'Камада Экадаши',
        id: 'kamada' 
    },
    'Varuthini': {
        name: 'Варутхини',
        name_too_events: 'Варутхини Экадаши',
        id: 'varuthini' 
    },
    'Mohini': {
        name: 'Мохини',
        name_too_events: 'Мохини Экадаши',
        id: 'mohini' 
    },
    'Apara': {
        name: 'Апара',
        name_too_events: 'Апара Экадаши',
        id: 'apara' 
    },
    'Pandava Nirjala': {
        name: 'Нирджала (Пандава, Бхима)',
        name_too_events: 'Нирджала Экадаши',
        id: 'pandava' 
    },
    'Yogini': {
        name: 'Йогини',
        name_too_events: 'Йогини Экадаши',        
        id: 'yogini'
    },
    'Sayana': {
        name: 'Дева-шаяни (Падма)',
        name_too_events: 'Дева-шаяни (Падма)',
        id: 'sayana' 
    },
    'Kamika': {
        name: 'Камика',
        name_too_events: 'Камика Экадаши',
        id: 'kamika' 
    },
    'Pavitropana': {
        name: 'Павитра',
        name_too_events: 'Павитра Экадаши',
        id: 'pavitra' 
    },
    'Annada': {
        name: 'Аннада (Аджа)',
        name_too_events: 'Аннада Экадаши',
        id: 'annada' 
    },
    'Parsva': {
        name: 'Паршва',
        name_too_events: 'Паршва Экадаши',
        id: 'parsva' 
    },
    'Indira': {
        name: 'Индира',
        name_too_events: 'Индира Экадаши',
        id: 'indira' 
    },
    'Padmini': {
        name: 'Падмини',
        name_too_events: 'Падмини Экадаши',
        id: 'padmini' 
    },
    'Parama': {
    name:  'Парама',
        name_too_events: 'Парама Экадаши',
        id: 'parama' 
    },
    'Pasankusa': {
        name: 'Пашанкуша',
        name_too_events: 'Пашанкуша Экадаши',
        id: 'pasankusa' 
    },
    'Rama': { 
        name: 'Рама',
        name_too_events: 'Рама Экадаши',
        id: 'rama-ekadashi' 
    },
    'Utthana': {
        name: 'Уттхана',
        name_too_events: 'Уттхана Экадаши',
        id: 'utthana'
    },
    'Moksada': {
        name: 'Мокшада',
        name_too_events: 'Мокшада Экадаши',
        id: 'moksada' 
    },
    'Saphala': {
        name: 'Са-пхала',
        name_too_events: 'Са-пхала Экадаши',
        id: 'saphala'
    },
    'Utpanna': { 
        name: 'Утпанна',
        name_too_events: 'Утпанна Экадаши',
        id: 'utpanna' 
    }

};

export { apparition_ekadasi_days };