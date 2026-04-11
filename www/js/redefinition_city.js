"use strict";

let redefinition_city = { // переопределение city 
                          // Ключ state - территориальная единица страны самого верхнего уровня.
                          // Например, в Украине это область, в Германии - земля

        'Abkhazia': [
            {
                city: {
                        'Gagra': [ 
                            'Pitsunda', 
                            'Ldzaa',
                            'Амзара',
                        ],
                        'Gulripsh': [ 
                            'Tkhubun', 
                            'Gwandra', 
                        ],
                        'Gudauta': [ 
                            'New Athos', 
                        ],
                        'Sukhum': [ 
                            'Sokhumi', 
                            'Alekseevka', 
                        ],
                    },
                state: [ 
                        'Autonomous Republic of Abkhazia',
                       ]
            },
        ],
        'Armenia': [
            {
                city: {
                        'Gavar': [ 
                            'Tsamakaberd', 
                        ],
                    },
                state: [ 
                        'Gegharkunik Province',
                       ]
            },
            {
                city: {
                        'Razdan': [ 
                            'Arinj', 
                            'Charentsavan', 
                        ],
                    },
                state: [ 
                        'Kotayk Province',
                       ]
            },
        ],
        'Australia': [
            {
                city: { 
                        'Sydney': [ 
                        'Gregory Hills', 
                      ],
                        'Parramatta': [ 
                        'Harris Park', 
                      ],
                    },
                state: [ 
                        'New South Wales',
                       ]
            },
            {
                city: { 
                        'Stirling': [ 
                        'Nollamara', 
                      ],
                    },
                state: [ 
                        'Western Australia',
                       ]
            },
        ],
        'Austria': [
            {
                city: {
                        'Gmunden': [ 
                            'Reindlmühl', 
                        ],
                    },
                state: [ 
                        'Upper Austria',
                       ]
            },
            {
                city: {
                        'Sankt-Pyolten': [ 
                            'Traiskirchen', 
                        ],
                    },
                state: [ 
                        'Lower Austria',
                       ]
            },
        ],
        'Azerbaijan': [
            {
                city: {
                        'Baku City': [ 
                            'Nizami Raion',
                        ],
                    },
                state: [ 
                        'Baku Ekonomic Zone',
                       ]
            },
        ],
        'Belarus': [
            {   
                city: { 
                        'Minsk': [ 
                            'Бараўлянскі сельскі Савет',
                            'Лугаваслабадскі сельскі Савет',
                            'Фаніпальскі сельскі Савет',
                            'Міханавіцкі сельскі Савет',
                        ],
                        'Smalyavichy': [
                            'Ozyaritska-Slabadski rural council',
                            'Жодзінскі сельскі Савет',
                            'Zhodzina', 
                        ],
                        'Maladzyechna': [ 
                            'Гарадоцкі сельскі Савет'
                        ],
                        'Maryina Horka': [
                            'Рудзенскі сельскі Савет',
                            'Pukhavichy District',
                        ],
                        'Barysaw': [
                            'Прыгарадны сельскі Савет',
                            'Barysaw District',
                            'Barysaŭ',
                        ],
                        'Vileyka': [
                            'Людвіноўскі сельскі Савет',
                        ],
                        'Stolbcy': [
                            'Старасвержанскі сельскі Савет',
                        ],
                    },
                state: [ 
                        'Minsk Region',
                       ]
            },
            {   
                city: {
                        'Homyel': [ 
                            'Яромінскі сельскі Савет', 
                            'Homieĺ', 
                        ],
                        'Svietlahorsk': [
                            'Чыркавіцкі сельскі Савет', 
                        ],
                    },
                state: [ 
                        'Homyel Region',
                       ]
            },
            {   
                city: {
                        'Rasony': [ 
                            'Янкавіцкі сельскі Савет', 
                        ],
                    },
                state: [ 
                        'Vitsebsk Region',
                       ]
            },
            {   
                city: {
                        'Lida': [ 
                            'Бердаўскі сельскі Савет', 
                        ],
                    },
                state: [ 
                        'Hrodna Region',
                       ]
            },
            {   
                city: {
                        'Hantsavichy': [ 
                            'Любашаўскі сельскі Савет', 
                        ],
                        'Kobryn': [
                            'Хідрынскі сельскі Савет',
                        ],
                    },
                state: [ 
                        'Brest Region',
                       ]
            },
        ],
        'Belgium': [
            {
                city: {
                        'Brussels': [ 
                            'Tervuren', 
                            'Zaventem', 
                        ],
                        'Leuven': [ 
                            'Veltem',
                        ],
                    },
                state: [
                        'Flemish Brabant',
                       ]
            },  
            {
                city: {
                        'Bruges': [ 
                            'Roeselare',
                        ],
                    },
                state: [
                        'West Flanders',
                       ]
            }, 
            {
                city: {
                        'Lezh': [ 
                            'Huy',
                            'Saint-Nicolas',
                        ],
                    },
                state: [
                        'Liège',
                       ]
            }, 
             {
                city: {
                        'Arlon': [ 
                            'Durbuy',
                        ],  
                    },
                state: [
                        'Luxembourg',
                       ]
            }, 
            {
                city: {
                        'Mons': [ 
                            'Comines-Warneton',
                        ],
                    },
                state: [
                        'Hainaut',
                       ]
            },                  
        ],
        'Bulgaria': [
            {
                city: {
                    'Burgas': [
                        'Sveti Vlas',
                    ],
                },
                state: [
                        'Burgas',
                       ],
            },
            {
                city: {
                    'Stara Zagora': [
                        'Pavel Banya',
                    ],
                },
                state: [
                        'Stara Zagora',
                       ],
            },
        ],
        'Canada': [
            {
                city: {
                        'Montreal': [ 
                            'Pointe-Claire', 
                        ],
                    },
                state: [
                        'Quebec',
                       ]
            },  
            {
                city: {
                        '(Old) Ottawa': [ 
                            'Ottawa', 
                        ],
                        'Nyumarket': [ 
                            'Vaughan', 
                        ],
                        'Toronto': [ 
                            'Old Toronto', 
                            'Cambridge', 
                        ],
                    },
                state: [
                        'Ontario',
                       ]
            },  
            {
                city: {
                        'Calgary': [ 
                            'Rocky View County', 
                        ],
                    },
                state: [
                        'Alberta',
                       ]
            },  
            {
                city: {
                        'Dorchester': [ 
                            'Dieppe', 
                        ],
                    },
                state: [
                        'New Brunswick',
                       ]
            },  
        ],
        'China': [
            {
                city: {
                        'Ningbo': [ 
                            'Yinzhou District',
                            'Haishu District',
                        ],
                    },
                state: [ 
                        'Zhejiang',
                       ]
            },
            {
                city: {
                        'Guangdong': [ 
                            'Tianhe District',
                            'Baiyun District',
                        ],
                        'Shenchzhen': [ 
                            'Longgang District',
                        ],
                    },
                state: [ 
                        'Guangdong Province',
                       ]
            },
        ],
        'Czechia': [
            { 
                city: {
                        'Prague': [ 
                            'Chýně', 
                            'Capital City of Prague', 
                        ],
                        'Benešov': [ 
                            'Vlašim',
                        ],
                    },
                state: [ 
                        'Central Bohemia',
                        'Prague',
                       ]
            },
            { 
                city: {
                        'Brno': [ 
                            'Malá Lhota', 
                        ],
                    },
                state: [ 
                        'Southeast',
                       ]
            },
            { 
                city: {
                        'Ostrava': [ 
                            'Bohumín', 
                            'Havířov', 
                        ],
                    },
                state: [ 
                        'Moravia-Silesia',
                       ]
            },
            { 
                city: {
                        'Liberec': [ 
                            'Kořenov', 
                            'Lomnice nad Popelkou', 
                        ],
                    },
                state: [ 
                        'Northeast',
                       ]
            },
        ],
        'Cyprus': [
            { 
                city: {
                        'Limassol': [ 
                            'Germasogeia', 
                            'Pyrgos', 
                            'Agios Tychonos', 
                            'Κοινότητα Αγίου Τύχωνα', 
                            'Κοινότητα Πύργου Λεμεσού', 
                        ],
                    },
                state: [ 
                        'Cyprus',
                        'Limassol District',
                       ]
            },
            { 
                city: {
                        'Larnaca': [ 
                            'Oroklini', 
                        ],
                    },
                state: [ 
                        'Larnaca District',
                       ]
            },
        ],
        'Denmark': [
            { 
                city: {
                        'Copenhagen': [ 
                            'Klampenborg', 
                        ],
                    },
                state: [ 
                        'Capital Region',
                       ]
            },
            { 
                city: {
                        'Thisted': [ 
                            'Vestervig', 
                        ],
                    },
                state: [ 
                        'North Denmark Region',
                       ]
            }, 
            { 
                city: {
                        'Vajle': [ 
                            'Otterup', 
                        ],
                    },
                state: [ 
                        'Southern Denmark',
                       ]
            }, 
        ],
        'Dominican Republic': [
            { 
                city: {
                        'Higüey': [ 
                            'Dominicus', 
                        ],
                    },
                state: [ 
                        'La Altagracia',
                       ]
            }, 
        ],
        'Egypt': [
            { 
                city: {
                        'Sharm Ash Sheikh': [
                            'Sharm El Sheikh',
                        ],
                    },
                state: [ 
                        'South Sinai',
                       ]
            },
        ],
        'Estonia': [
            {
                city: {
                        'Jõhvi': [ 
                            'Kohtla-Järve linn',
                            'Narva-Jõesuu linn',
                        ],
                    },
                state: [ 
                        'Järve linnaosa',
                        'Ahtme',
                        'Ida-Viru County',
                       ]
            },
            {
                city: {
                        'Tallinn': [ 
                            'Haabneeme alevik',
                        ],
                    },
                state: [ 
                        'Harju County',
                       ]
            },
        ],
        'Finland': [
            {
                city: {
                        'Lahti': [ 
                            'Orimattila', 
                        ],
                        'Parikkala': [ 
                            'Rautjärvi', 
                        ],
                    },
                state: [ 
                        'Mainland Finland',
                       ]
            },
            {
                city: {
                        'Vaasa': [ 
                            'Nykarleby', 
                        ],
                    },
                state: [ 
                        'Ostrobothnia',
                       ]
            },
            {
                city: {
                        'Helsinki': [ 
                            'Porvoo', 
                        ],
                    },
                state: [ 
                        'Uusimaa',
                       ]
            },
            {
                city: {
                        'Kuopio': [ 
                            'Siilinjärvi', 
                        ],
                    },
                state: [ 
                        'North Savo',
                       ]
            },
        ],
        'France': [
            {
                city: {
                        'Nice': [ 
                            'Èze', 
                            'Villefranche-sur-Mer',
                            'Cannes',
                            'Antibes',
                            'Valbonne',
                        ],
                        'Toulon': [ 
                            'Saint-Tropez', 
                        ],
                    },
                state: [ 
                        "Provence-Alpes-Côte d'Azur",
                       ]
            },
            {
                city: {
                        'Paris': [ 
                            'Villennes-sur-Seine', 
                            'Aubervilliers',
                            'Magny-les-Hameaux',
                        ],
                    },
                state: [ 
                        "Île-de-France",
                       ]
            },
            {
                city: {
                        'Oser': [ 
                            'Sens', 
                        ],
                    },
                state: [ 
                        "Bourgogne – Franche-Comté",
                       ]
            },
            {
                city: {
                        'Thonon-les-Bains': [ 
                            'Veigy-Foncenex', 
                        ],
                        'Grenoble': [ 
                            'Saint-Nizier-du-Moucherotte', 
                        ],
                        'Shamberi': [ 
                            'Courchevel', 
                        ],
                    },
                state: [ 
                        'Auvergne-Rhône-Alpes',
                       ]
            },
            {
                city: {
                        'Rouen': [ 
                            'Terres-de-Caux', 
                        ],
                    },
                state: [ 
                        'Normandie',
                       ]
            },
        ],
        'Greece': [
            {
                city: {
                        'Athens': [ 
                            'Municipality of Palaio Faliro', 
                        ],
                    },
                state: [ 
                        'Attica',
                       ]
            },
            {
                city: {
                        'Municipal Unit of Tripoli': [ 
                            'Municipal Unit of Lefktro', 
                            'Municipal Unit of Avia', 
                            'Ditiki-Mani', 
                            'Municipality of Kalamata', 
                        ],
                    },
                state: [ 
                        'Peloponnese, Western Greece and the Ionian',
                       ]
            },
            {
                city: {
                        'Chania': [ 
                            'Dramia', 
                        ],
                    },
                state: [ 
                        'Region of Crete',
                       ]
            },
            {
                city: {
                        'Thessaloniki': [ 
                            'Nea Moudania', 
                            'Άγιος Παύλος', 
                            'Καβαλλάρι', 
                            'Platamonas', 
                        ],
                    },
                state: [ 
                        'Macedonia and Thrace',
                       ]
            },
            {
                city: {
                        'Ermoupoli': [ 
                            'Marpissa', 
                        ],
                    },
                state: [ 
                        'Aegean',
                       ]
            },
        ],
        'Germany': [
            {
                city: {
                        'Ulm': [ 
                            'Schelklingen', 
                        ],
                        'Künzelsau': [ 
                            'Öhringen', 
                        ],
                        'Böblingen': [ 
                            'Ehningen', 
                        ],
                        'Pforzheim': [ 
                            'Ispringen', 
                        ],
                        'Stuttgart': [ 
                            'Ellwangen', 
                        ],
                        'Ravensburg': [ 
                            'Aulendorf', 
                        ],
                        'Biberach an der Riß': [ 
                            'Ochsenhausen',
                            'Schemmerhofen',
                            'Bad Buchau',
                        ],
                    },
                state: [ 
                        'Baden-Württemberg',
                       ]
            },
            {
                city: {
                        'Bernburg': [ 
                            'Könnern', 
                        ],
                    },
                state: [ 
                        'Saxony-Anhalt',
                       ]
            },
            {
                city: { 
                        'Friedberg (Hesse)': [ 
                            'Bad Nauheim', 
                        ],
                        'Bad-Shvalbah': [ 
                            'Springen', 
                        ],
                        'Dietkirchen': [ 
                            'Villmar', 
                        ],
                        'Darmstadt': [ 
                            'Darmstadt-Nord', 
                            'Darmstadt-Mitte',
                            'Bickenbach',
                        ],
                        'Frankfurt': [ 
                            'Offenbach am Main', 
                            'Großen-Buseck', 
                        ],
                    },
                state: [ 
                        'Hesse',
                       ]
            },
            {
                city: {
                        'Berlin': [ 
                            'Neuruppin', 
                        ],
                        'Lübben (Spreewald)': [ 
                            'Halbe', 
                        ],
                    },
                state: [ 
                        'Brandenburg',
                       ]
            },
            {
                city: {
                        'Bielefeld': [ 
                            'Bad Oeynhausen', 
                        ],
                        'Höxter': [ 
                            'Nieheim', 
                        ],
                        'Gütersloh': [ 
                            'Rheda-Wiedenbrück', 
                        ],
                        'Detmold': [ 
                            'Oerlinghausen', 
                        ],
                        'Vezel': [ 
                            'Neukirchen-Vluyn', 
                        ],
                        'Zost': [ 
                            'Lippetal', 
                        ],
                        'Varendorf': [ 
                            'Oelde', 
                        ],
                    },
                state: [ 
                        'North Rhine – Westphalia',
                        'North Rhine-Westphalia',
                       ]
            },
            {
                city: {
                        'Bad Segeberg': [ 
                            'Norderstedt', 
                        ],
                        'Bad Oldesloe': [ 
                            'Tangstedt', 
                        ],
                    },
                state: [ 
                        'Schleswig-Holstein',
                       ]
            },
            {
                city: {
                        'Bad Kreuznach': [ 
                            'Kirn', 
                        ],
                        'Birkenfeld': [ 
                            'Abentheuer', 
                        ],
                        'Landau in der Pfalz': [ 
                            'Bad Bergzabern', 
                        ],
                    },
                state: [ 
                        'Rhineland-Palatinate',
                       ]
            },
            {
                city: {
                        'Parchim': [ 
                            'Plate', 
                        ],
                    },
                state: [ 
                        'Mecklenburg-Vorpommern',
                       ]
            },
            {
                city: {
                        'Schwandorf': [ 
                            'Bruck i.d.OPf.', 
                        ],
                        'Augsburg': [ 
                            'Meitingen', 
                        ],
                        'Hof': [ 
                            'Zell', 
                        ],
                        'Traunshtajn': [ 
                            'Tacherting', 
                        ],
                        'Pfaffenhofen an der Ilm': [ 
                            'Geisenfeld', 
                        ],
                    },
                state: [ 
                        'Bavaria',
                       ]
            },
            {
                city: {
                        'Stade': [ 
                            'Drochtersen', 
                        ],
                        'Gifhorn': [ 
                            'Sassenburg', 
                        ],
                        'Winsen (Luhe)': [ 
                            'Seevetal', 
                        ],
                        'Meppen': [ 
                            'Haren (Ems)', 
                        ],
                        'Celle': [ 
                            'Hambühren', 
                        ],
                        'Fehta': [ 
                            'Holdorf', 
                        ],
                    },
                state: [ 
                        'Lower Saxony',
                       ]
            },
            {
                city: {
                        'Schleiz': [ 
                            'Neustadt an der Orla', 
                        ],
                    },
                state: [ 
                        'Thuringia',
                       ]
            },
        ],
        'Georgia': [
            {
                city: {
                        'Mtskheta': [ 
                            'Akhalubani', 
                            'Tsilkani', 
                        ],
                    },
                state: [ 
                        'Mtskheta-Mtianeti',
                       ]
            },
            {
                city: {
                        'Kutaisi': [ 
                            'Dapnari', 
                            'Tqibuli', 
                        ],
                    },
                state: [ 
                        'Imereti',
                       ]
            },
            {
                city: {
                        'Zugdidi': [ 
                            'Nashamgu', 
                        ],
                    },
                state: [ 
                        'Samegrelo-Upper Svaneti',
                       ]
            },
            {
                city: {
                        'Batumi': [ 
                            'Kobuleti', 
                        ],
                    },
                state: [ 
                        'Autonomous Republic of Adjara',
                       ]
            },
        ],
        'India': [
            {
                city: {
                        'Goa': [ 
                            'Arambol', 
                            'Pernem',
                            'Querim',
                            'Margao',
                            'Morjim',
                        ],
                        'Panadzhi': [ 
                            'Anjuna',
                            'Bardez',
                            'Sangolda',
                            'Korgao',
                            'Chopdem',
                        ],
                        'Margao': [ 
                            'Carmona',
                        ],
                    },
                state: [ 
                        'Goa',
                       ]
            },
            {
                city: {
                        'Palakkad': [ 
                            'Thachanatukkara', 
                        ],
                        'Kottayam': [ 
                            'Chemmalamattom', 
                        ],
                        'Kozhikode': [ 
                            'Azhiyur', 
                        ],
                        'Thiruvananthapuram': [ 
                            'Adimalathura', 
                            'Varkala', 
                            'Kovalam', 
                        ],
                    },
                state: [ 
                        'Kerala',
                       ]
            },
            {
                city: {
                        'Devanahalli': [ 
                            'Devanahalli taluku', 
                        ],
                        'Bengaluru': [ 
                            'Mahadevapura', 
                        ],
                        'Udupi': [ 
                            'Kaup', 
                        ],   
                        'Karvar': [ 
                            'Gokarna', 
                        ],
                    },
                state: [ 
                        'Karnataka',
                       ]
            },
            {
                city: {
                        'Delhi': [ 
                            'Kalkaji Tehsil', 
                            'New Delhi', 
                            'Sarai Kale Khan', 
                        ],
                    },
                state: [ 
                        'Delhi',
                       ]
            },
            {
                city: {
                        'Panipat': [ 
                            'Bhodwal Majri',
                        ],
                        'Kurukshetra': [ 
                            'Jyotisar',
                        ],
                    },
                state: [ 
                        'Haryana',
                       ]
            },
            {
                city: {
                        'Rishikesh': [ 
                            'Swargashram', 
                        ],
                        'Pauri': [ 
                            'Pandav Gufa', 
                            'Narendra Nagar', 
                        ],
                    },
                state: [ 
                        'Uttarakhand',
                       ]
            },
            {
                city: {
                        'Mathura': [ 
                            'Govardhan', 
                            'Jatipura', 
                            'Radha Kund', 
                            'Hatana', 
                            'Basonti', 
                        ],
                        'Vrindavan': [ 
                            'Sunrakh', 
                        ],
                        'Meerut': [ 
                            'Daurala', 
                        ],
                        'Lucknow': [ 
                            'Sarojni Nagar', 
                        ],
                        'Agra': [ 
                            'Fatehabad', 
                        ],
                        'Fajzabad': [ 
                            'Ayodhya', 
                        ],
                    },
                state: [ 
                        'Uttar Pradesh',
                       ]
            },
            {
                city: {
                        'Khurdha Municipality Boundary': [ 
                            'Bhubaneswar Municipal Corporation', 
                        ],
                    },
                state: [ 
                        'Odisha',
                       ]
            },
            {
                city: {
                        'Kolkata': [ 
                            'Awalsiddhi', 
                        ],
                    },
                state: [ 
                        'West Bengal',
                       ]
            },
            {
                city: {
                        'Varanasi': [ 
                            'Durgauti', 
                        ],
                    },
                state: [ 
                        'Bihar',
                       ]
            },
            {
                city: {
                        'Coimbatore': [ 
                            'Semmedu', 
                        ],
                    },
                state: [ 
                        'Tamil Nadu',
                       ]
            },
            {
                city: {
                        'Tirupati': [ 
                            'Mallam Gunta', 
                        ],
                        'Anantapur': [ 
                            'Puttaparthi', 
                        ],
                    },
                state: [ 
                        'Andhra Pradesh',
                       ]
            },
            {
                city: {
                        'Ratnagiri': [ 
                            'Chiplun', 
                        ],
                        'Thana': [ 
                            'Mira-Bhayander', 
                        ],
                    },
                state: [ 
                        'Maharashtra',
                       ]
            },
        ],
        'Indonesia': [
            { 
                city: {
                        'Mataram': [ 
                            'Dusun Mangsit', 
                            'Aik Berik',
                            'Lombok Tengah', 
                        ],
                    },
                state: [
                        'West Nusa Tenggara',
                       ]
            }, 
            {
                city: {
                        'Jakarta': [ 
                            'Special Capital Region of Jakarta', 
                            'Special Region of Jakarta', 
                        ],
                    },
                state: [
                        'Java',
                       ]
            },
            {
                city: {
                        'Denpasar': [ 
                            'Sanur', 
                            'Cemagi', 
                            'Dauh Puri Kauh', 
                            'Renon',
                            'Cepaka',
                            'Ubud',
                            'Petulu',
                            'Penestanan',
                            'Mas',
                            'Lodtunduh',
                            'Jimbaran',
                            'Ungasan',
                            'Abang',
                            'Pecatu',
                            'Amed',
                            'Lokaserena',
                            'Tumbak Bayuh',
                            'Kecamatan Abang',
                            'Benoa',
                            'Mantring',
                            'Kutuh',
                            'Kuta',
                            'Canggu',
                            'Peliatan',
                        ],
                    },
                state: [
                        'Bali',
                       ]
            },
        ],
        'Ireland': [
            {
                city: {
                        'Dublin': [ 
                            'Ongar', 
                        ],
                    },
                state: [
                        'Leinster',
                       ]
            },
            {
                city: {
                        'County Donegal': [ 
                            'Letterkenny', 
                        ],
                    },
                state: [
                        'County Donegal',
                       ]
            },
            {
                city: {
                        'Klonmel': [ 
                            'Peppardstown', 
                        ],
                    },
                state: [
                        'County Tipperary',
                       ]
            },
        ],
        'Italy': [
            { 
                city: {
                        'Island Sardinia': [ 
                            'Austis', 
                            'Crabonaxa/Villasimius', 
                        ],
                    },
                state: [ 
                        'Sardinia',
                       ]
            },
            { 
                city: {
                        'Ancona': [ 
                            'Arcevia', 
                        ],
                    },
                state: [ 
                        'Marche',
                       ]
            },
            { 
                city: {
                        'Viterbo': [ 
                            'Castiglione in Teverina', 
                        ],
                        'Rome': [ 
                            'Colleverde',
                        ],
                    },
                state: [ 
                        'Lazio',
                       ]
            },
            { 
                city: {
                        'Varese': [ 
                            'Uboldo', 
                        ],
                        'Milan': [ 
                            'Rho', 
                        ],
                    },
                state: [ 
                        'Lombardy',
                       ]
            }, 
            {
                city: {
                        'Savona': [ 
                            'Spotorno', 
                            'Loano', 
                        ],
                    },
                state: [ 
                        'Liguria',
                       ]
            },
            {
                city: {
                        'Verbaniya': [ 
                            'Masera', 
                        ],
                    },
                state: [ 
                        'Piedmont',
                       ]
            },
            {
                city: {
                        'Florence': [ 
                            'San Casciano in Val di Pesa', 
                            'Lastra a Signa', 
                            'Impruneta', 
                        ],
                        'Grosseto': [ 
                            'Porto Santo Stefano', 
                        ],
                        'Piza': [ 
                            'Fauglia', 
                        ],
                        'Lucca': [ 
                            'Camaiore', 
                        ],
                    },
                state: [ 
                        'Tuscany',
                       ]
            },
            {
                city: {
                        'Teramo': [ 
                            'Roseto degli Abruzzi', 
                        ],
                    },
                state: [ 
                        'Abruzzo',
                       ]
            },
            {
                city: {
                        'Parma': [ 
                            'Berceto', 
                        ],
                        'Bolonya': [ 
                            'Zola Predosa', 
                        ],
                    },
                state: [ 
                        'Emilia-Romagna',
                       ]
            },
            {
                city: {
                        'Perugia': [ 
                            'Chiugiana', 
                        ],
                    },
                state: [ 
                        'Umbria',
                    ]
            },
            {
                city: {
                        'Kozenca': [ 
                            'Santa Serra',
                        ],
                    },
                state: [
                        'Calabria',
                       ]
            },
            {
                city: {
                        'Bolcano': [ 
                            'Olang - Valdaora',
                        ],
                    },
                state: [
                        'Trentino – Alto Adige/Südtirol',
                       ]
            },
        ],
        'Israel': [
            {
                city: {
                        'Tel-Aviv': [ 
                            'South Givatayim',  
                            'Bat Yam', 
                            'Rishon LeZion',
                            'Ramat Gan',
                            'Holon',
                        ],
                    },
                city: {
                        'Ramla': [ 
                            'Even Yehuda',
                        ],
                    },
                state: [ 
                        'Tel-Aviv District',
                        'Center District',
                       ]
            },
            {
                city: {
                        'Haifa': [ 
                            'Harish',
                            'Hadera',
                            'Kiryat Motzkin',
                        ],
                    },
                state: [ 
                        'Haifa District',
                       ]
            },
            {
                city: {
                        "Be’er-Sheva": [ 
                            'Sderot',
                            "Be'er Sheva",
                        ],
                    },
                state: [ 
                        'South District',
                       ]
            },
            {
                city: {
                        'Nof HaGalil': [ 
                            'Maalot Tarshiha',
                            'Acre',
                        ],
                    },
                state: [ 
                        'North District',
                       ]
            },
        ],
        'Japan': [
            {
                city: {
                        'Kahoku': [ 
                            'Tsubata',
                        ],
                    },
                state: [ 
                        'Ishikawa Prefecture',
                       ]
            },
            {
                city: {
                        'Chiba': [ 
                            'Tomisato',
                        ],
                    },
                state: [ 
                        'Chiba Prefecture',
                       ]
            },
            {
                city: {
                        'Saitama': [ 
                            'Tokorozawa',
                        ],
                    },
                state: [ 
                        'Saitama Prefecture',
                       ]
            },
            { 
                city: {
                        'Tokio': [ 
                            'Chiyoda', 
                            'Koto', 
                            'Chūō', 
                        ],
                    },
                state: [
                        'Nishi-Kanda 3-chome',
                        'Ogibashi 3',
                        'Tsukuda 1',
                       ]
            },
        ],
        'Jordan': [ // Иордания
            {
                city: {
                        'Amman': [  
                            'Al Jizah', 
                            'Muaqqar Sub-District', 
                            'Quaismeh Sub-District', 
                        ],
                    },
                state: [ 
                        'Amman',
                    ]
            },
            {
                city: {
                        'Dhiban': [  
                            'Mathlutha', 
                        ],
                    },
                state: [ 
                        'Madaba',
                    ]
            },
        ],
        'Kazakhstan': [
            {
                city: {
                        'Almaty': [  
                            'Boralday', 
                            'Байсерке', 
                            'Гүлдала', 
                        ],
                    },
                state: [ 
                        'Almaty Region',
                       ]
            },
            {
                city: {
                        'Karaganda': [  
                            'Saran, Kazakhstan', 
                        ],
                    },
                state: [ 
                        'Karaganda Region',
                       ]
            },
            {
                city: {
                        'Taraz': [  
                            'Кызылкайнар', 
                        ],
                    },
                state: [ 
                        'Jambyl Region',
                       ]
            },
            {
                city: {
                        'Aqsu': [  
                            'Aqsu city administration', 
                        ],
                    },
                state: [ 
                        'Pavlodar Region',
                       ]
            },
            {
                city: {
                        'Oral': [  
                            'Мичурин ауылдық округі', 
                            'Зачаганск', 
                        ],
                    },
                state: [ 
                        'West Kazakhstan Region',
                       ]
            },
            {
                city: {
                        'Karasu': [  
                            'Карасу', 
                            'Челгаши', 
                        ],
                        'Ayet': [  
                            'Айет', 
                            'Beimbet Mailin District', 
                        ],
                    },
                state: [ 
                        'Kostanay Region',
                       ]
            },
            {
                city: {
                        'Astana': [  
                            'Косшы', 
                        ],
                        'Zerenda': [  
                            'Zerendi District', 
                        ],
                    },
                state: [ 
                        'Akmola Region',
                       ]
            },
            {
                city: {
                        'Kulsary': [  
                            'Қосшағыл ауылдық округі', 
                        ],
                        'Kulsary': [  
                                'Құлсары қалалық әкімдігі', 
                            ],
                    },
                state: [ 
                        'Atyrau Region',
                       ]
            },
        ],
        'Kyrgyzstan': [
            { 
                city: {
                        'Bokonbayevo': [ 
                            'Tong',
                        ],
                    },
                state: [
                        'Issyk-Kul Region',
                       ]
            },
        ],
        'Latvia': [
            { 
                city: {
                        'Mārupe': [ 
                            'Mārupes pagasts',
                            'Babītes pagasts',
                        ],
                    },
                state: [
                        'Mārupes novads',
                        'Beberi',
                       ]
            },
            { 
                city: {
                        'Grobiņa': [ 
                            'Grobiņas pagasts', 
                            'Nīcas pagasts', 
                        ],
                    },
                state: [
                        'Dienvidkurzemes novads',
                       ]
            },
            { 
                city: {
                        'Daugavpils': [ 
                            'Slutišķi', 
                        ],
                    },
                state: [
                        'Augšdaugavas novads',
                       ]
            },
            { 
                city: {
                        'Ādaži': [ 
                            'Carnikavas pagasts', 
                        ],
                    },
                state: [
                        'Ādažu novads',
                       ]
            },
            { 
                city: {
                        'Olajne': [ 
                            'Olaines pagasts', 
                        ],
                    },
                state: [
                        'Olaine parish',
                       ]
            },
            { 
                city: {
                        'Krāslava': [ 
                            'Nauļāni', 
                        ],
                    },
                state: [
                        'Krāslavas novads',
                       ]
            },
            {
                 city: {
                        'Ogre': [ 
                            'Birzgales pagasts', 
                        ],
                    },
                state: [
                        'Ogres novads',
                       ]
            },
        ],
        'Lithuania': [
            { 
                city: {
                        'Kaunas': [ 
                            'Paltininkai', 
                            'Kaišiadorys', 
                            'Pajieslys', 
                            'Birštonas', 
                            'Rumšiškės', 
                        ],
                    },
                state: [
                        'Kaunas County',
                       ]
            },
            { 
                city: {
                        'Utena': [ 
                            'Visaginas', 
                        ],
                    },
                state: [
                        'Utena County',
                       ]
            },
            { 
                city: {
                        'Alytus': [ 
                            'Druskininkai', 
                        ],
                    },
                state: [
                        'Alytus County',
                       ]
            },
        ],
        'Lebanon': [ // Ливан
            {
                city: {
                        'Baabda': [ 
                            'Yanar',
                            'Burj El Brajneh',
                        ],
                    },
                state: [ 
                        'Mount Lebanon Governorate',
                       ]
            },
        ],
        'Moldova': [
            {
                city: {
                        'Chișinău': [ 
                            'Stăuceni', 
                        ],
                    },
                state: [ 
                        'Chișinău Municipality',
                       ]
            },
            {
                city: {
                        'Orhei': [ 
                            'Peresecina', 
                        ],
                    },
                state: [ 
                        'Orhei District',
                       ]
            },
            {
                city: {
                        'Criuleni': [ 
                            'Cruglic', 
                        ],
                    },
                state: [ 
                        'Criuleni District',
                       ]
            },
            {
                city: {
                        'Bender': [ 
                            'Bender City Council', 
                        ],
                    },
                state: [ 
                        'Pridnestrovie',
                       ]
            },
            {
                city: {
                        'Kelerash': [ 
                            'Meleșeni', 
                        ],
                    },
                state: [ 
                        'Călărași District',
                       ]
            },
        ],
        'Montenegro': [ // Черногория
            {
                city: {
                        'Budva': [ 
                            'Seoca', 
                        ],
                    },
                state: [ 
                        'Budva Municipality',
                       ]
            },
            {
                city: {
                        'Kotor': [ 
                            'Bigova', 
                        ],
                    },
                state: [ 
                        'Kotor Municipality',
                       ]
            },
        ],
        'New Zealand': [
            { 
                city: {
                        'Auckland': [
                            'Maungakiekie-Tāmaki',
                        ],
                    },
                state: [
                        'Auckland',
                       ]
            },
        ],
        'Netherlands': [
            { 
                city: {
                        'Emmeloord': [
                            'Rutten',
                        ],
                    },
                state: [
                        'Flevoland',
                       ]
            },
            { 
                city: {
                        'Maarsen': [
                            'Nieuwersluis',
                        ],
                    },
                state: [
                        'Utrecht',
                       ]
            },
            { 
                city: {
                        'Zwolle': [
                            'Deventer',
                        ],
                    },
                state: [
                        'Overijssel',
                       ]
            },
            { 
                city: {
                        'Middelburg': [
                            'Hulst',
                        ],
                    },
                state: [
                        'Zeeland',
                       ]
            },
            { 
                city: {
                        'Rotterdam': [
                            'Barendrecht',
                        ],
                    },
                state: [
                        'South Holland',
                       ]
            },
            { 
                city: {
                        'Amsterdam': [
                            'Amstelveen',
                        ],
                    },
                state: [
                        'North Holland',
                       ]
            },
            { 
                city: {
                        'Arnhem': [
                            'Tiel',
                        ],
                    },
                state: [
                        'Gelderland',
                       ]
            },
            { 
                city: {
                        'Hes': [
                            'Heeswijk-Dinther',
                        ],
                    },
                state: [
                        'North Brabant',
                       ]
            },
        ],
        'Norway': [
            { 
                city: {
                        'Oslo': [
                            'Rælingen',
                            'Nesoddtangen',
                        ],
                    },
                state: [
                        'Akershus',
                       ]
            },
            { 
                city: {
                        'Tønsberg': [
                            'Stokke',
                        ],
                    },
                state: [
                        'Vestfold',
                       ]
            },
            { 
                city: {
                        'Sarpsborg': [
                            'Råde',
                        ],
                    },
                state: [
                        'Østfold',
                       ]
            },
            { 
                city: {
                        'Stejnher': [
                            'Stjørdal',
                        ],
                    },
                state: [
                        'Trøndelag',
                       ]
            },
        ],
        'Philippines': [
            {
                city: {
                        'Manila': [ 
                            'Quezon City',
                            'Makati',
                            'Pasay',
                        ],
                    },
                state: [
                        'Metro Manila',
                       ]
            },
            {
                city: {
                        'Imus': [ 
                            'Silang',
                        ],
                    },
                state: [
                        'Cavite',
                       ]
            },
            {
                city: {
                        'Calapan': [ 
                            'Puerto Galera',
                        ],
                    },
                state: [
                        'Oriental Mindoro',
                       ]
            },
        ],
        'Poland': [
            {
                city: {
                        'Wadowice': [ 
                            'Klecza Górna',
                            'Klecza Dolna',
                        ],
                        'Krakow': [ 
                            'Balice',
                        ],
                    },
                state: [
                        'Lesser Poland Voivodeship',
                       ]
            },
            {
                city: {
                        'Tomaszów Lubelski': [ 
                            'Krynice',
                            'Hrebenne',
                        ],
                        'Lublin': [ 
                            'Długie',
                        ],
                    },
                state: [
                        'Lublin Voivodeship',
                       ]
            },
            {
                city: {
                        'Warsaw': [ 
                            'Ząbki',
                            'Kotowice',
                        ],
                        'Legionowo': [ 
                            'Stanisławów Pierwszy',
                        ],
                        'Gróejc': [ 
                            'Szczęsna', 
                            'Wola Worowska', 
                        ],
                        'Grodzisk Mazowiecki': [ 
                            'Milanówek', 
                        ],
                        'Ożarów Mazowiecki': [ 
                            'Latchorzew', 
                        ],
                        'Pruszków': [
                            'Rozalin',
                        ],
                    },
                state: [
                        'Masovian Voivodeship',
                       ]
            },
            {
                city: {
                        'Kielce': [ 
                            'Skarżysko-Kamienna',
                            'Sielpia Wielka',
                        ],
                    },
                state: [
                        'Holy Cross Voivodeship',
                       ]
            },
            {
                city: {
                        'Żywiec': [ 
                            'Zwardoń',
                        ],
                    },
                state: [
                        'Silesian Voivodeship',
                       ]
            },
            {
                city: {
                        'Puck': [ 
                            'Jastarnia',
                        ],
                    },
                state: [
                        'Pomeranian Voivodeship',
                       ]
            },
            {
                city: {
                        'Wroclaw': [ 
                            'Smolec',
                            'Wrocław',
                        ],
                    },
                state: [
                        'Lower Silesian Voivodeship',
                       ]
            },
            {
                city: {
                        'Gryfice': [ 
                            'Rewal',
                            'Dygowo',
                        ],
                        'Wałcz': [ 
                            'Piecnik',
                        ],
                    },
                state: [
                        'West Pomeranian Voivodeship',
                       ]
            },
            {
                city: {
                        'Ropczyce': [ 
                            'Olchowa',
                        ]
                    },
                state: [
                        'Subcarpathian Voivodeship',
                       ]
            },
        ],
        'Portugal': [
            {
                city: {
                        'Lisbon': [ 
                            'Seixal', 
                            'Cascais', 
                            'Torres Vedras',                    
                        ],
                    },
                state: [
                        'Álamo',
                        'Cova da Raposa',
                        'Santo António do Estoril',
                        'A dos Cunhados e Maceira',
                        'Lisbon',
                       ]
            },
            {
                city: {
                        'Island São Miguel': [ 
                            'Ponta Delgada',
                            'Ribeira Grande',
                        ],
                    },
                state: [
                        'Azores',
                        'Vila Franca do Campo (São Miguel)',
                       ]
            },
            {
                city: {
                        'Faro': [ 
                            'Albufeira',
                        ],
                    },
                state: [
                        'Faro',
                       ]
            },
            {
                city: {
                        'Porto': [ 
                            'Amarante',
                            'Valongo',
                            'Ermesinde',
                        ],
                    },
                state: [
                        'Macieiras',
                        'Agramonte',
                        'Porto',
                       ]
            },
        ],
        'Romania': [
            {
                city: {
                        'Kluzh-Napoka': [ 
                            'Viștea',
                        ],
                    },
                state: [
                        'Cluj',
                       ]
            },
        ],
        'Russia': [
            {
                city: {
                        'Moscow': [
                            'Moskovsky Settlement',
                            'Беседы', 
                            'Balashikhinsky District',
                            'Razvilka',
                            'Konstantinovo',
                            'Reutov',
                            'Lopatino',
                            'Dzerzhinsky',
                            'Лужки',
                            'Malakhovka',
                            'Oktyabrskiy',
                            'поселение Внуковское',
                            'Rogozinino',
                            'Kommunarka',
                            'район Внуково',
                            'Vnukovo',
                        ],
                        'Odintsovo': [
                            'Vniissok', 
                            'Борки',
                            "Zarech'e",
                            'Romashkovo',
                            'Сосны',
                            'Лапино',
                            'Nemchinovka',
                            'Novoivanovskoe',
                            'Одинцовский городской округ',
                            'Usovo',
                            'Zhukovka',
                            'Акулово',
                            'Щедрино',
                            'Mamonovo',
                            'Gorki-2',
                            'Setun Malaya',
                        ],
                        'Troitsk': [
                            'Клоково',
                        ],
                        'Pushkino': [
                            'Ivanteyevka',
                        ],
                        'Chekhov': [
                            'Детково',
                            'Chekhovsky District',
                        ],
                        'Ramenskoye': [
                            'Ramensky District',
                            'Dergayevo',
                            "Il’inskiy",
                            'Вишняково',
                            'Сельвачёво',
                        ],
                        'Mozhaisk': [
                            'Mozhaysky District',
                        ],
                        'Solnechnogorsk': [
                            'Тараканово',
                            'Елизарово',
                            'Общественник',
                            'Solnechnogorsky District',
                            '2-й микрорайон',
                        ],
                        'Klin': [
                            'Афанасово',
                            'Покровка',
                        ],
                        'Shakhovskaya': [
                            'Бурцево',
                            'Shakhovskaya Urban Okrug',
                            'Юренево',
                        ],
                        'Orekhovo-Zuyevo': [
                            'Likino-Dulyovo',
                        ],
                        'Dmitrov': [
                            'Dmitrovsky District',
                            'Озерецкое',
                        ],
                        'Zvenigorod': [
                            'Pokrovskoe',
                            'Дачный КГБ',
                        ],
                        'Ruza': [
                            'Novovolkovo',
                            'Городище',
                            'Dorokhovo',
                            'Tuchkovo',
                        ],
                        'Khimki': [
                            'Yurlovo',
                            'Мышецкое',
                            'Khimki Urban Okrug',
                            'Веревское',
                        ],
                         'Vidnoye': [
                            'Bulatnikovo',
                            'Мещерино',
                            'Gorki Leninskiye',
                            'Leninsky District',
                            'Butovo',
                        ],
                        'Istra': [
                            'Еремеево',
                            'Троица',
                            'Агрогородок',
                            'муниципальный округ Истра',
                            'Кашино',
                            'Рождествено',
                        ],
                        'Mytishchi': [
                            'Nagornoye', 
                            'Mytishchi Urban Okrug', 
                            'Никульское', 
                            'Marfino', 
                            'Пирогово', 
                            'Вёшки', 
                            'Sholokhovo', 
                            'Шолохово', 
                        ],
                        'Naro-Fominsk': [
                            'Наро-Фоминский городской округ', 
                            'Aprelevka', 
                            'Vereya', 
                        ],
                        'Krasnogorsk': [
                            'Козино', 
                            'Красный Посёлок', 
                            'Buzlanovo',
                            'Михалково',
                            'Krasnogorsky District',
                            'Putilkovo',
                            'Тимошкино',
                            'Отрадное',
                            'Nakhabino',
                            'Svetlyye Gory',
                            'Korostovo',
                            'Zakharkovo',
                        ],
                        'Sergiyev Posad': [
                            'Барканово', 
                            'Peresvet', 
                            'Sergiyevo-Posadsky District', 
                        ],
                        'Podolsk': [
                            'Bobrovo', 
                            'Александровка', 
                            'Novodrozhzhino', 
                            'Dubrovitsy', 
                            'Bykovka', 
                        ],
                        'Voskresensk': [
                            'Voskresensky District', 
                            'Yurasovo', 
                            'Большое Колычево', 
                            'территория Русская Деревня', 
                            'Beloozyorsky', 
                            'микрорайон Золотая Слобода', 
                        ],
                        'Lukhovitsy': [
                            'Подлипки',
                        ],
                        'Serpukhov': [
                            'Банино',
                            'Protvino',
                        ],
                        'Shchyolkovo': [
                            'Medvezhyi Ozyora', 
                            'Zagoryanskiy',
                        ],
                        'Domodedovo': [
                            'Domodedovsky District',
                            'Константиново',
                        ],
                        'Lyubertsy': [
                            'Tomilino',
                            'Kraskovo',
                            'Lytkarino',
                        ],
                        'Zelenograd': [
                            'Andreyevka',
                        ],
                        'Balashikha': [
                            'Полтево',
                        ],   
                        'Serebryanye-Prudy': [
                            'Беляево',
                        ],
                        'Volokolamsk': [
                            'Volokolamsky District',
                        ],
                        'Noginsk': [
                            'Elektrougli',
                        ],
                    }, 
                state: [
                        'Moscow',
                        'Moscow Oblast',
                       ]
            },
            {
                city: {
                        'Zheleznogorsk': [ 
                            'Троицкое', 
                        ],
                        'Kursk': [
                            'Кукуевка',
                            '2-я Моква',
                        ],
                        'Pryamicyno': [
                            'Ванина',
                            'Большедолженковский сельсовет',
                        ],
                    },
                state: [
                        'Kursk Oblast',
                       ],
            },
            {
                city: {
                        'Tarbagataj': [ 
                            'Нижний Саянтуй', 
                        ],
                    },
                state: [
                        'Buryatia',
                       ],
            },
            {
                city: {
                        'Oryol': [ 
                            'Кондырева', 
                        ],
                        'Mcensk': [ 
                            'Подберёзово', 
                        ],
                    },
                state: [
                        'Oryol Oblast',
                       ],
            },
            {
                city: {
                        'Nogliki': [ 
                            'Nogliksky District', 
                        ],
                    },
                state: [
                        'Sakhalin Oblast',
                       ],
            },
            {
                city: {
                        'Neryungri': [ 
                            'Chulman', 
                        ],
                    },
                state: [
                        'Sakha Republic',
                       ],
            },
            {
                city: {
                        'Sebezh': [ 
                            'Burachki', 
                        ],
                        'Pskov': [ 
                            'Pskovsky District', 
                        ],
                    },
                state: [
                        'Pskov Oblast',
                       ]
            },
            {
                city: {
                        'Ivanovo': [ 
                            'Беляницкое сельское поселение', 
                        ],
                    },
                state: [
                        'Ivanovo Oblast',
                       ]
            },
            {
                city: {
                        'Belgorod': [ 
                            'Таврово', 
                        ],
                        'Majskij': [ 
                            'Repnoe', 
                        ],
                    },
                state: [
                        'Belgorod Oblast',
                       ]
            },
            {
                city: {
                        'Bryansk': [ 
                            'Толмачево', 
                            'Нетьинка', 
                        ],
                        'Glinishevo': [ 
                            'Снежское сельское поселение', 
                        ],
                    },
                state: [
                        'Bryansk Oblast',
                       ]
            },
            {
                city: {
                        'Radishchevo': [ 
                            'Октябрьское сельское поселение', 
                            'Ореховское сельское поселение', 
                        ],
                        'Bolshoe-Nagatkino': [ 
                            'Степная Репьёвка', 
                        ],
                        'Nikolaevka': [ 
                            'Канадейское сельское поселение', 
                        ],
                    },
                state: [
                        'Ulyanovsk Oblast',
                       ]
            },
            {
                city: {
                        'Tyrnyauz': [ 
                            'сельское поселение Эльбрус', 
                            'Terskol', 
                        ],
                        'Nartkala': [ 
                            'Old Cherek', 
                        ],
                    },
                state: [
                        'Kabardino-Balkaria',
                       ]
            },
            {
                city: {
                        'Maloyaroslavets': [ 
                            'Мурзино', 
                            'сельское поселение Деревня Ерденево', 
                        ],
                        'Zhukov': [ 
                            'городское поселение Белоусово', 
                        ],
                        'Tarusa': [ 
                            'Волковское', 
                        ],
                        'Borovsk': [ 
                            'Новомихайловское', 
                            'Совхоз "Боровский"', 
                            'сельское поселение Село Ворсино', 
                            'Тимашово', 
                        ],
                        'Kondrovo': [ 
                            'сельское поселение Село Совхоз имени Ленина', 
                        ],
                        'Zhizdra': [ 
                            'сельское поселение Село Студенец', 
                        ],
                        'Kaluga': [ 
                            'Росва', 
                        ],
                    },
                state: [
                        'Kaluga Oblast',
                       ]
            },
            {
                city: {
                        'Saint Petersburg': [
                            'Pavlovsk',
                            'Yanino-1',  
                            'Telmana',
                            'Peterhof',
                            'Sestroretsk',
                            'Ladoga',
                            'Sertolovo',
                            'Мистолово',
                            'Romanovka',
                            'Pargolovo',
                            'Kudrovo',
                            'Таицкое городское поселение',
                            'Kronstadt',
                            'Shushary',
                            'Levashovo',
                            'Kolpino',
                            'Koporye', 
                            'Низинское сельское поселение', 
                            'Оржицкое сельское поселение',
                            'Виллозское городское поселение',
                            'Annino',
                            'Maloye Karlino',
                            'Gorbunki',
                            'Pushkin',
                            'Lisy Nos',
                        ],
                        'Vsevolozhsk': [
                            'Toksovo', 
                            'Агалатовское сельское поселение', 
                            'Новосергиевка', 
                            'Сертоловское городское поселение', 
                            'Vsevolozhsky District', 
                            'Куйвозовское сельское поселение', 
                            'Муринское городское поселение', 
                        ],
                        'Tikhvin': [
                            'Царицыно Озеро', 
                        ],
                        'Kirovsk': [ 
                            'Otradnoye', 
                            'Priladozhsky', 
                        ],
                        'Kingisepp': [ 
                            'Ivangorod',
                            'Кузёмкинское сельское поселение',
                            'Jaama District',
                            'Усть-Лужское сельское поселение',
                            'Neppovo',
                        ],
                        'Luga': [ 
                            'Старая Серёдка', 
                        ],
                        'Tosno': [ 
                            'Nikolskoye',
                            'Рябово',
                            'Tusina District',
                        ],
                        'Lid': [ 
                            'Лидь', 
                        ],
                        'Podporozhye': [ 
                            'Подпорожское городское поселение', 
                        ],
                        'Gatchina': [ 
                            'Дружногорское городское поселение', 
                        ],
                        'Priozersk': [ 
                            'Петровское сельское поселение', 
                            'Громовское сельское поселение', 
                            'Käkisalmi District', 
                            'Новожилово',
                            'Гречухино',
                        ],
                         'Kirishi': [ 
                            'Глажевское сельское поселение', 
                        ],
                         'Vyborg': [ 
                            'Рощинское городское поселение', 
                            'Гаврилово', 
                            'Roshchino', 
                            'Первомайское сельское поселение', 
                        ],
                        'Volosovo': [ 
                            'Большеврудское сельское поселение', 
                            'Горицы', 
                        ],
                    },
                state: [
                        'Saint Petersburg',
                        'Leningrad Oblast',
                        'Leningrad oblast',
                       ]
            },
            {
                city: {
                        'Petrozavodsk': [ 
                            'Деревянское сельское поселение', 
                        ],
                    },
                state: [
                        'Republic of Karelia',
                       ]
            },
            {
                city: {
                        'Blagoveshchensk': [ 
                            'Chigiri', 
                        ],
                    },
                state: [
                        'Amur Oblast',
                       ]
            },
            {
                city: {
                        'Ryazan': [ 
                            'Поляны', 
                        ],
                        'Kasimov': [ 
                            'Syntul', 
                        ],
                        'Pronsk': [ 
                            'Novomichurinsk', 
                        ],
                        'Sapozhok': [ 
                            'Paryshka', 
                        ],
                        'Starozhilovo': [ 
                            'Akulovo', 
                            'Chernobayevo', 
                        ],

                      },
                state: [
                        'Ryazan Oblast',
                       ]
            },
            {
                city: {
                        'Pregradnaya': [ 
                            'Курджиново', 
                            'Ершов', 
                        ],
                    },
                state: [
                        'Karachay-Cherkessia',
                       ]
            },
            {
                city: {
                        'Tver': [ 
                            'Семеновское', 
                        ],
                        'Zubtsov': [ 
                            'Щеколдино', 
                        ],
                        'Bologoe': [ 
                            'Berezayka', 
                        ],
                        'Konakovo': [ 
                            'Varaksino', 
                        ],
                    },
                state: [
                        'Tver Oblast',
                       ]
            },
            {
                city: {
                        'Kumylzhenskaya': [ 
                            'Shakin',
                        ],
                        'Volgograd': [ 
                            'Dubovka',
                            'Kirovskiy District',
                        ],
                        'Gorodische': [ 
                            'Виновка',
                        ],
                        'Srednyaya Akhtuba': [ 
                            "Velikiy Oktyabr'",
                            "Кировское сельское поселение",
                            "городское поселение Краснослободск",
                            "Vyazovka",
                            "Kuybyshev",
                        ],
                    },
                state: [
                        'Volgograd Oblast',
                       ]
            },
            {
                city: {
                        'Vladikavkaz': [ 
                            'Гизельское сельское поселение',
                        ],
                        'Beslan': [ 
                            'Novyy Batako',
                        ],
                    },
                state: [
                        'Republic of North Ossetia – Alania',
                       ]
            },
            {
                city: {
                        'Anadyr': [ 
                            'Anadyrsky District',
                        ],
                    },
                state: [
                        'Chukotka Autonomous Okrug',
                       ]
            },
            {
                city: {
                        'Objachevo': [ 
                            'Вухтым',
                        ],
                    },
                state: [
                        'Komi Republic',
                       ]
            },
            {
                city: {
                        'Saratov': [ 
                            'Engels',
                            'Усть-Курдюм',
                        ],
                        'Engels': [ 
                            'Приволжский',
                        ],
                        'Balakovo': [ 
                            'Быково-Отрогское сельское поселение',
                        ],
                    },
                state: [
                        'Saratov Oblast',
                       ]
            },
            {
                city: {
                        'Kaliningrad': [ 
                            'Bagrationovsky District', 
                            'Переславское',
                            'Krasnopolye',
                            'Черёмхово',
                            'Медведевка',
                            'Bolshoye Isakovo',
                            'Холмогоровка',
                        ],
                        'Guryevsk': [ 
                            'Guryevsky District', 
                            'Zaozerye', 
                            'Gorlovka', 
                            'Golubevo', 
                        ],
                    },
                state: [
                        'Kaliningrad',
                       ]
            },
            {
                city: {
                        'Yaroslavl': [ 
                            'Бор', 
                            'Заволжское сельское поселение',
                            'Григорьевское',
                            'Кузнечихинское сельское поселение',
                            'Лютово',
                            'Поповское',
                        ],
                        'Tutaev': [ 
                            'Фоминское', 
                        ],
                        'Pereslavl-Zalessky': [ 
                            'Троицкая Слобода', 
                            'городской округ Переславль-Залесский', 
                            'Переславль-Залесский муниципальный округ', 
                            'Новинцы', 
                        ],
                        'Rybinsk': [ 
                            'Назарово', 
                            'Назаровское сельское поселение', 
                        ],
                    },
                state: [
                        'Yaroslavl Oblast',
                       ]
            },
            {
                city: {
                        'Kostroma': [ 
                            'Апраксинское сельское поселение',
                        ],
                    },
                state: [
                        'Kostroma Oblast',
                       ]
            },
            {
                city: {
                        'Nizhny Novgorod': [ 
                            'Анкудиновка', 
                            'Подновье', 
                            'Bor', 
                            'Бешенцево', 
                            'Линда', 
                        ],
                        'Gorodets': [ 
                            'Зубово', 
                        ],
                        'Dzerzhinsk': [ 
                            'Хабарское', 
                            'Желнино', 
                        ],
                        'Semyonov': [ 
                            'Дьяково', 
                            'Семёновский городской округ', 
                        ],
                        'Kstovo': [ 
                            'Афонино', 
                            'Черемисское', 
                            'Грязновка', 
                        ],
                    },
                state: [
                        'Nizhny Novgorod Oblast',
                       ]
            },
            {
                city: {
                        'Kazan': [ 
                            'Kuyuki',
                            'Сокуры',
                            'Набережно-Морквашское сельское поселение',
                            'Семиозерское сельское поселение',
                        ],
                        'Naberezhnye Chelny': [ 
                            'Биклянское сельское поселение',
                        ],
                            'Verhnij Uslon': [ 
                            'Верхнеуслонское сельское поселение',
                        ],
                        'Yelabuga': [ 
                            'Лекаревское сельское поселение',
                        ],
                        'Nizhnekamsk': [ 
                            'городское поселение Нижнекамск', 
                        ],
                        'Laishevo': [ 
                            'Орёл', 
                            'Габишевское сельское поселение', 
                        ],
                    },
                state: [
                        'Tatarstan',
                       ]
            },
            {
                city: {
                        'Khvoynaya': [ 
                            'Khvoyninsky District', 
                        ],
                    },
                state: [
                        'Novgorod Oblast',
                       ]
            },
            {
                city: { 
                        'Penza': [ 
                            'Bessonovka', 
                        ],
                    },
                state: [
                        'Penza Oblast',
                       ]
            },
            {
                city: {
                        'Kopyovo': [ 
                            'Июс', 
                            'Красноиюсский сельсовет', 
                        ],
                        'Sayanogorsk': [ 
                            'Cheremushki', 
                        ],
                        'Ust-Abakan': [ 
                            'Калинино', 
                            'Калининский сельсовет', 
                            'Московский сельсовет', 
                            'Чапаево', 
                        ],
                    },
                state: [
                        'Republic of Khakassia',
                       ]
            },
            {
                city: {
                        'Togliatti': [ 
                            'сельское поселение Александровка', 
                            'сельское поселение Подстёпки', 
                            'сельское поселение Приморский', 
                            'сельское поселение Васильевка', 
                            'Tolyatti',
                            'Zolnoe',
                            'Bakhilova Polyana', 
                            'сельское поселение Пискалы', 
                            'Ягодное',
                            'Stavropolsky District',
                            'сельское поселение Ягодное',
                            'сельское поселение Узюково',
                        ],
                        'Samara': [ 
                            'Stroykeramika',
                            'Novokuybyshevsk',
                            'Smyshlyayevka',
                            'Berezovyy Gay',
                            'городское поселение Новосемейкино', 
                            'Лопатино', 
                        ],
                        'Krasnyy Yar': [  
                            'Starosemeykino', 
                        ],
                    },
                state: [
                        'Samara Oblast',
                       ]
            },
            {
                city: {
                        'Surgut': [ 
                            'Bely Yar', 
                            'сельское поселение Солнечный', 
                            'Surgutsky District', 
                        ],
                        "Oktyabr'skoe": [ 
                            'Nyagan', 
                        ],
                        'Nizhnevartovsk': [ 
                            'Isluchinsk', 
                            'Megion', 
                        ],
                        'Khanty-Mansiysk': [ 
                            'Перегрёбное', 
                            'Khanty-Mansiysky District', 
                        ],
                    },
                state: [
                        'Khanty-Mansiysk Autonomous Okrug – Ugra',
                       ]
            },
            {
                city: {
                        'Yasnogorsk': [ 
                            'Taydakovo', 
                            'Ревякино', 
                        ],
                        'Tula': [ 
                            'Schokino', 
                        ],
                        'Venyov': [ 
                            'Урусово', 
                        ],
                        'Suvorov': [ 
                            'Kuleshovo', 
                        ],
                        'Efremov': [ 
                            'Мосоловский', 
                        ],
                        'Leninskiy': [ 
                            'Ленинский', 
                            'Малаховское сельское поселение', 
                        ],
                    },
                state: [
                        'Tula Oblast',
                       ]
            },
            {
                city: {
                        'Vladimir': [ 
                            'Селецкое сельское поселение', 
                        ],
                        'Raduzhny': [ 
                            'Радужный', 
                        ],
                        'Alexandrov': [ 
                            'Струнино', 
                        ], 
                        'Petushki': [ 
                            'Pokrov',
                            'Болдино',
                            'Петушинское сельское поселение',
                            'Нагорный',
                            'Домашнево',
                        ],
                        'Kirzhach': [ 
                            'Кипревское сельское поселение', 
                        ],
                        'Sobinka': [ 
                            'Вишняково', 
                        ],
                    },
                state: [
                        'Vladimir Oblast',
                       ]
            },
            {
                city: {
                        'Kurgan': [ 
                            'Усть-Утяк', 
                        ],
                        'Katajsk': [ 
                            'Катайск',
                            'Kataysk',
                        ],
                    },
                state: [
                        'Kurgan Oblast',
                       ]
            },
            {
                city: {
                        'Kovylkino': [ 
                            'Русско-Лашминское сельское поселение', 
                        ],
                        'Ruzaevka': [ 
                            'Акшенас',
                        ],
                        "Lyambir'": [
                            'Берсеневское сельское поселение',
                            'Берсеневские Выселки',
                        ],
                        'Saransk': [
                            'Луховка',
                        ],
                    },
                state: [
                        'Republic of Mordovia',
                       ]
            },
            {
                city: {
                        'Voronezh': [ 
                            'Otradnoye', 
                        ],
                        'Anna': [ 
                            'Анна', 
                        ],
                        'Liski': [ 
                            'Петропавловское сельское поселение', 
                        ],
                        'Novaya Usman': [ 
                            'Горки', 
                            'Babyakovo', 
                        ],
                        'Rossosh': [ 
                            'Подгоренское сельское поселение', 
                        ],
                    },
                state: [
                        'Voronezh Oblast',
                       ]
            },
            {
                city: {
                        'Sochi': [ 
                            'Baranovka',
                            'Sirius',
                            'Estosadok',
                            'Krasnaya Polyana',
                            'Dagomys',
                            'Razdolnoye',
                            'Vysokoye',
                            'Nizhnyaya Shilovka',
                            'Nizhneye Uch-Dere',
                            'Ordynka',
                            'Kashtany',
                            'Kalinovoye ozero',
                        ],
                        'Tuapse': [
                            'Джубгское городское поселение',
                            'Dzhubga',
                            'посёлок турбазы "Приморская"',
                            'Lermontovo',
                            'Tuapsinsky District',
                            'Agoy',
                            'Tyumenskiy',
                        ],
                        'Apsheronsk': [ 
                            'Shirvanskaya',
                            'Khadyzhensk',
                            'Mezmay',
                            'Новополянское сельское поселение',
                          ],
                        'Novorossiysk': [ 
                            'Sukko',
                            'городской округ Новороссийск',
                            'Abrau-Dyurso',
                            'Приморский район',
                          ],
                        'Anapa': [ 
                            'Rassvet',
                        ],
                        'Vyselki': [ 
                            'Газырское сельское поселение',
                        ],
                        'Kushchovskaya': [ 
                            'Кущёвское сельское поселение',
                        ],
                        'Krymsk': [ 
                            'Nizhnebakanskaya',
                            'Chekon',
                        ],
                        'Krasnodar': [ 
                            'Прикубанский округ',
                            'Yelizavetinskaya',
                        ],
                        'Pavlovskaya': [ 
                            'Novopetrovskaya',
                        ],
                        'Goryachiy Klyuch': [ 
                            'Saratovskaya',
                        ],
                        'Severskaya': [ 
                            'Afipskiy',
                            'Ilskiy',
                            'Ubinskaya',
                            'Seversky District',
                            'Азовское сельское поселение',
                            'Azovskaya',
                            'Львовское сельское поселение',
                        ],
                        'Gulkevichi': [ 
                            'Новоукраинское сельское поселение',
                            'Гирейское городское поселение',
                        ],
                        'Slavyansk-na-Kubani': [ 
                            'Прикубанское сельское поселение',
                            'Sadovy',
                        ],
                        'Gelendzhik': [ 
                            'Arkhipo-Osipovka',
                            'Krinitsa',
                            'Divnomorskoye',
                        ],
                        'Temryuk': [ 
                            'Veselovka',
                            'Голубицкое сельское поселение',
                            'Фонталовское сельское поселение',
                        ],
                        'Korenovsk': [ 
                            'Платнировское сельское поселение',
                        ],
                        'Abinsk': [ 
                            'Erivanskaya',
                            'Kholmskaya',
                        ],
                        'Kavkazskaya': [ 
                            'Dmitriyevskaya',
                        ],
                        'Armavir': [ 
                            'городской округ Армавир',
                        ],
                        'Dinskaya': [ 
                            'Yuzhny',
                        ],
                        'Ust-Labinsk': [ 
                            'Voronezhskaya',
                        ],
                        'Poltavskaya': [ 
                            'Марьянское сельское поселение',
                            'Полтавское сельское поселение',
                        ],
                        'Primorsko-Akhtarsk': [ 
                            'Primorsko-Akhtarsky District',
                        ],
                        'Leningradskaya': [ 
                            'Pervomayskiy',
                        ],
                    },
                state: [
                        'Krasnodar Krai',
                       ]
            },
            {
                city: {
                        'Takhtamukai': [ 
                            'Novaya Adygeya',
                            'Yablonovskiy',
                            'Старобжегокайское сельское поселение',
                        ],
                        'Maykop': [ 
                            'Kamennomostskiy',
                        ],
                        'Ponezhukaj': [ 
                            'Teuchezhsky District',
                        ],
                    },
                state: [
                        'Republic of Adygea',
                       ]
            },
            {
                city: {
                        'Petropavlovsk-Kamchatsky': [ 
                            'Yelizovsky District',
                        ],
                    },
                state: [
                        'Kamchatka Krai',
                       ]
            },
            {
                city: {
                        'Smolensk': [ 
                            'Михновское сельское поселение', 
                            'Хохловское сельское поселение', 
                            'Koryuzino', 
                            'Smolensky District', 
                        ],
                    },
                state: [
                        'Smolensk Oblast',
                       ]
            },
            {
                city: {
                        'Biysk': [ 
                            'Krasniy Yar', 
                            'Verkh-Katunskoye', 
                        ],
                        'Altayskoye': [ 
                            'Айский сельсовет', 
                        ],
                        'Zonalnoe': [ 
                            'Новая Чемровка', 
                            'Зональное', 
                        ],
                        'Altayskoye': [ 
                            'Айский сельсовет', 
                        ],
                        'Novoaltaysk': [ 
                            'Firsovo', 
                        ],
                        'Kamen-na-Obi': [ 
                            'Плотниковский сельсовет', 
                        ],
                    },
                state: [
                        'Altai Krai',
                       ]
            },
            {
                city: {
                        'Turochak': [ 
                            'Артыбашское сельское поселение', 
                        ],
                        'Chemal': [ 
                            'Turbaza Katun', 
                            'Elekmonar', 
                            'Уожан', 
                        ],
                        'Ust-Koksa': [ 
                            'Terekta',
                        ],
                        'Gorno-Altaysk': [ 
                            'Mayma', 
                        ],
                        'Ust-Kan': [ 
                            'Белый Ануй', 
                        ],
                    },
                state: [
                        'Altai Republic',
                       ]
            },
            {
                city: {
                        'Perm': [ 
                            'Khmeli', 
                            'Объект КРП', 
                            'Ясыри', 
                            'Krasnokamsk', 
                            'Кондратово', 
                        ],
                    },
                state: [
                        'Perm Krai',
                       ]
            },
            {
                city: {
                        'Krasnoyarsk': [ 
                            'Krasnoyarsk Urban Okrug', 
                            'Еловое', 
                        ],
                        'Norilsk': [ 
                            'городской округ Норильск', 
                        ],
                        'Beryozovka': [ 
                            'Есаульский сельсовет', 
                        ],
                        'Yemelyanovo': [ 
                            'городское поселение Емельяново', 
                        ],
                        'Aradan': [ 
                            'Араданский сельсовет', 
                        ],
                        'Minusinsk': [ 
                            'Шошино', 
                        ],
                        'Kuragino': [ 
                            'Bolshaya Irba', 
                        ],
                    },
                state: [
                        'Krasnoyarsk Krai',
                       ]
            },
            {
                city: {
                        'Yekaterinburg': [ 
                            'Verkhnyaya Pyshma', 
                            'Beryozovsky',
                            'Прохладный',
                            'Сагра',
                            'Патруши',
                            'Исток',
                            'Горный Щит',
                        ],
                        'Sukhoy Log': [ 
                            'городской округ Сухой Лог', 
                        ],
                        'Nizhny Tagil': [ 
                            'Черноисточинск', 
                        ],
                        'Polevskoy': [ 
                            'Курганово', 
                        ],
                        'Nevyansk': [ 
                            'Аятское', 
                        ],
                            'Kamensk-Uralsky': [ 
                            'Кисловское', 
                        ],
                        'Talitsa': [ 
                            'Троицкий', 
                        ],
                        'Pervouralsk': [ 
                            'городской округ Первоуральск', 
                        ],
                        'Verhnyaya-Pyshma': [ 
                            'городской округ Верхняя Пышма', 
                        ],
                        'Beryozovskij': [ 
                            'Лосиный', 
                        ],
                        'Sysert': [ 
                            'Малое Седельниково', 
                            'Бобровский', 
                            'Aramil', 
                        ],
                    },
                state: [
                        'Sverdlovsk Oblast',
                       ]
            },
            {
                city: {
                        'Knyaze-Volkonskoe': [ 
                            'Князе-Волконское', 
                        ],
                        'Khabarovsk': [ 
                            'Khabarovsky District', 
                        ],
                        'Amursk': [ 
                            'Bolon', 
                        ],
                    },
                state: [
                        'Khabarovsk Krai',
                       ]
            },
            {
                city: {
                        'Bolsheustyikinskoye': [ 
                            'Большеустьикинское', 
                            'Ишалино', 
                        ],
                        'Sterlitamak': [ 
                            'Salavat', 
                            'Наумовка', 
                            'Байрак', 
                        ],
                        'Maloyaz': [ 
                            'Чулпан', 
                        ],
                        'Askarovo': [ 
                            'Зелёная Поляна', 
                            'Аскарово', 
                        ],
                        'Ufa': [ 
                            'Mikhailovka', 
                            'Булгаковский сельсовет', 
                            'Красноярский сельсовет', 
                        ],
                        'Kushnarenkovo': [ 
                            'Старокурмашево', 
                            'Чирша-Тартыш', 
                        ],
                        'Baymak': [ 
                            'Sibay', 
                        ],
                        'Yermolayevo': [ 
                            'Маломусино', 
                            'Якутово', 
                        ],
                        'Ishimbay': [ 
                            'Михайловка', 
                        ],
                        'Iglino': [
                            'Калтымановский сельсовет',
                            'Акбердино',
                        ],
                        'Chishmy': [
                            'Чишмы',
                            'Алкинский сельсовет',
                        ],
                        'Tujmazy': [
                            'Серафимовский',
                            'Tuymazinsky District',
                            'Kandry',
                            'Тюменяк',
                        ],
                        'Dyurtyuli': [
                            'Такарликовский сельсовет',
                            'Иванаево',
                        ],
                        'Novobelokataj': [
                            'Мунасово',
                        ],
                        'Karmaskaly': [
                            'Starye Kieshki',
                        ],
                        'Askarovo': [
                            'Ташбулатовский сельсовет',
                        ],
                        'Bakaly': [
                            'Куштиряково',
                        ],
                    },
                state: [
                        'Bashkortostan',
                       ]
            },
            {
                city: {
                        'Lipetsk': [ 
                            'Вербилово', 
                        ],
                        'Stanovoye': [ 
                            'Stanovlyansky District', 
                        ],
                        'Gryazi': [ 
                            'Dvurechki', 
                            'Kamennoe', 
                            'Большесамовецкий сельсовет', 
                            'Kazinka', 
                        ],
                    },
                state: [
                        'Lipetsk Oblast',
                       ]
            },
            {
                city: {
                        'Orenburg': [ 
                            'Ленина', 
                            'Подгородне-Покровский сельсовет', 
                            'Подгородняя Покровка', 
                            'Нежинка', 
                        ],
                        'Sakmara': [ 
                            'Сакмарский сельсовет', 
                            'Татаро-Каргалинский сельсовет', 
                        ],
                        'Buguruslan': [ 
                            'Бугуруслан', 
                        ],
                        'Oktyabrskoe': [ 
                            'Марьевка', 
                        ],
                        'Orsk': [ 
                            'Orsk', 
                        ],
                    },
                state: [
                        'Orenburg Oblast',
                       ]
            },
            {
                city: {
                        'Astrakhan': [ 
                            'Rastopulovka', 
                        ],
                    },
                state: [
                        'Astrakhan Oblast',
                       ]
            },
            {
                city: {
                        'Stavropol': [ 
                            'Mikhaylovsk', 
                            'Ленинский район',
                            'Подлужное',
                        ],
                        'Pyatigorsk': [ 
                            'Goryachevodsky', 
                            'Novaya Proletarka',
                            'Подгорная',
                            'Inozemtsevo',
                            'Zheleznovodsk',
                            'Lermontov',
                            'Верблюдогорка',
                            'Kislovodsk',
                        ],
                        'Neftekumsk': [ 
                            'Каясула',
                            'Abdul-Gazy',
                        ],
                        'Budyonnovsk': [ 
                            'Budyonnovsky District',
                        ],
                        'Levokumskoye': [ 
                            'Levokumsky District',
                        ],
                        'Donskoye': [ 
                            'Bezopasnoye',
                        ],
                        'Georgiyevsk': [ 
                            'Georgiyevskaya',
                        ],
                        'Kochubeevskoe': [ 
                            'Kochubeyevsky District',
                        ],
                    },
                state: [
                        'Stavropol Krai',
                       ]
            },
            {
                city: {
                        'Rostov-on-Don': [ 
                            'Грушевское сельское поселение', 
                            'Большелогское сельское поселение', 
                            'Большой Лог',
                            'Olginskaya',
                        ],
                        'Aksay': [ 
                            'Ленина', 
                        ],
                        'Shakhty': [ 
                            'Пролетарское сельское поселение', 
                        ],
                        'Kamensk-Shakhtinsky': [ 
                            'Anikin', 
                        ],
                        'Peschanokopskoye': [ 
                            'Zhukovskoye', 
                        ],
                        'Glubokiy': [ 
                            'Пиховкинское сельское поселение', 
                        ],
                        'Azov': [ 
                            'Ovoshchnoy', 
                        ],
                        'Taganrog': [ 
                            'Komarovka',
                            'Taganrog City District', 
                        ],
                        'Pokrovskoye': [ 
                            'Novobessergenevka', 
                        ],
                        'Volgodonsk': [
                            'Лагутники',
                            'Волгодонской район',
                        ],
                    },
                state: [
                        'Rostov Oblast',
                       ]
            },
            {
                city: {
                        'Tyumen': [ 
                            'Паренкина', 
                            'городской округ Тюмень', 
                        ],
                    },
                state: [
                        'Tyumen Oblast',
                       ]
            },
            {
                city: {
                        'Miass': [ 
                            'Малая Куйсарина',
                            'Kusa',
                            'Novotagilka',
                        ],
                        'Argayash': [ 
                            'Дербишевское сельское поселение', 
                        ],
                        'Dolgoderevenskoye': [ 
                            'Sargazy', 
                            'Саргазинское сельское поселение', 
                            'Zapadny', 
                        ],
                        'Varna': [
                            "Bol'shevik",
                            'Varnensky District',
                        ],
                        'Katav-Ivanovsk': [
                            "Трёхгорный городской округ",
                            'Pervukha',
                        ],
                    },
                state: [
                        'Chelyabinsk Oblast',
                       ]
            },
            {
                city: {
                        'Yoshkar-Ola': [ 
                            'Oshurga', 
                        ],
                        'Sovetskiy': [ 
                            'Изи Кугунур', 
                        ],
                    },
                state: [
                        'Mari El Republic',
                       ]
            },
            {
                city: {
                        'Tomsk': [ 
                            'Aeroport',
                            'Zonalnaya Stantsiya',
                            'Naumovka',
                            'Timiryazevskoe',
                            'Tomsk municipal region',
                            'Dzerzhinskoye',
                        ],
                        'Kargasok': [ 
                            'Новоюгинское сельское поселение',
                            'Каргасокское сельское поселение',
                        ],
                    },
                state: [
                        'Tomsk Oblast',
                       ]
            },
            {
                city: {
                        'Omsk': [ 
                            'Богословское сельское поселение',
                            'Андреевское сельское поселение',
                            'Troitskoye', 
                        ],
                        'Muromtsevo': [ 
                            'Бергамакское сельское поселение',
                        ],
                        'Lyubinskij': [ 
                            'Krasny Yar',
                        ],
                    },
                state: [
                        'Omsk Oblast',
                       ]
            },
            {
                city: {
                        'Tambov': [ 
                            'Смычка', 
                        ],
                        'Michurinsk': [ 
                            'Michurinsky District', 
                        ],
                    },
                state: [
                        'Tambov Oblast',
                       ]
            },
            {
                city: {
                        'Chita': [ 
                            'Забайкальский',
                        ],
                    },
                state: [
                        'Zabaykalsky Krai',
                       ]
            },
            {
                city: {
                        'Kirov': [ 
                            'Октябрьский район',
                            'Kostino',
                            'Подберёзы',
                            'Pasegovo',
                            'Ganino',
                            'Булдаки',
                        ],
                        'Slobodskoy': [ 
                            'Шиховское сельское поселение',
                            'Шихово',
                        ],
                        'Yurya': [ 
                            'Загарское сельское поселение',
                        ],
                    },
                state: [
                        'Kirov Oblast',
                       ]
            },
            {
                city: {
                        'Irkutsk': [ 
                            'Ангарский городской округ',
                            'Новая Разводная',
                            'Хомутовское сельское поселение',
                            'Markova',
                            'Karluk',
                            'Irkutsky District',
                            'Молодёжный',
                        ],
                        'Slyudyanka': [ 
                            'Байкальское городское поселение',
                            'Baykalsk',
                        ],
                        'Zima': [ 
                            'Хазанское сельское поселение',
                        ],
                        'Yelansy': [ 
                            'Khuzhir', 
                        ],
                    },
                state: [
                        'Irkutsk Oblast',
                       ]
            },
            {
                city: {
                        'Volzhsk': [ 
                            'Kozlovka', 
                        ],
                        'Cheboksary': [ 
                            'Tsivilsky District', 
                            'Хыркасы', 
                        ],
                    },
                state: [
                        'Chuvashia',
                       ]
            },
            {
                city: {
                        'Novosibirsk': [ 
                            'Leninskoye', 
                            'Berdsk municipality',
                            'Koltsovo',
                        ],
                        'Iskitim': [ 
                            'Легостаевский сельсовет', 
                        ],
                        'Moshkovo': [ 
                            'Oktyabrskiy', 
                        ],
                    },
                state: [
                        'Novosibirsk Oblast',
                       ]
            },
            {
                city: {
                        'Kemerovo': [ 
                            'Металлплощадка', 
                            'Елыкаево', 
                        ],
                        'Tashtagol': [ 
                            'Sheregesh', 
                        ],
                        'Novokuznetsk': [ 
                            'Костенково', 
                        ],
                        'Prokopyevsk': [ 
                            'Prokopyevsky Municipal Okrug',
                            'Prokopyevsky Urban Okrug',
                        ],
                    },
                state: [
                        'Kemerovo Oblast–Kuzbass',
                       ]
            },
            {
                city: {
                        'Gryazovets': [ 
                            'Vokhtoga', 
                        ],
                        'Cherepovets': [ 
                            'Хламово', 
                            'Яконское', 
                            'Мяксинское сельское поселение', 
                        ],
                        'Berezhnoe': [ 
                            'Бережное', 
                        ],
                        "Ust'ye": [ 
                            'Чернышово', 
                        ],
                    },
                state: [
                        'Vologda Oblast',
                       ]
            },
            {
                city: {
                        'Vladivostok': [ 
                            'Steklyanuha', 
                            'Volno-Nadejdinskoe', 
                            'Russky', 
                            'Trudovoye', 
                            'Трудовое', 
                        ],
                        'Shkotovo': [ 
                            'Shkotovsky District',
                        ],
                        'Vladimiro-Alexandrovskoy': [ 
                            'Volchanec', 
                        ],
                        'Volno-Nadezhdinskoe': [ 
                            'Надеждинское сельское поселение', 
                        ],
                        'Ussurijsk': [ 
                            'Borisovka', 
                        ],
                    },
                state: [
                        'Primorsky Krai',
                       ]
            },
            {
                city: {
                        'Alnashi': [ 
                            'Alnashsky District', 
                        ],
                        'Debyosy': [ 
                            'Debyossky District',
                            'Малая Чепца', 
                        ],
                        'Mozhga': [ 
                            'Замостные Какси', 
                        ],
                        'Votkinsk': [ 
                            'Беркуты', 
                        ],
                    },
                state: [
                        'Udmurtia',
                       ]
            },
            {
                city: {
                        'Arkhangelsk': [ 
                            'Primorsky District', 
                        ],
                    },
                state: [
                        'Arkhangelsk Oblast',
                       ]
            },
            {
                city: {
                        'Bay-Haak': [ 
                            'Балгазын', 
                            'сумон Бай-Хаак', 
                            'сумон Балгазын', 
                        ],
                    },
                state: [
                        'Tuva Republic',
                       ]
            },
            {
                city: {
                        'Smidovich': [ 
                            'Приамурский',
                        ],
                        'Obluche': [ 
                            'Известковый',
                        ],
                    },
                state: [
                        'Jewish Autonomous Oblast',
                       ]
            },
            {
                city: {
                        'Khuchni': [ 
                            'Хурикский сельсовет',
                        ],
                    },
                state: [
                        'Dagestan',
                    ]
            },
            {
                city: {
                        'Gubkinsky': [ 
                            'Губкинский',
                        ],
                        'Tarko-Sale': [ 
                            'Purovsky Rayon',
                        ],
                        'Tazovskij': [ 
                            'Tazovsky Rayon',
                        ],
                        'Nadym': [ 
                            'Pangody',
                        ],
                    },
                state: [
                        'Yamalo-Nenets Autonomous Okrug',
                    ]
            },
        ],
        'Thailand': [
            {
                city: {
                        'Surat Thani City Municipality': [ 
                            'Tong Yang', 
                            'Ko Samui', 
                            'Baan Tai', 
                            'Baan Bo Phut',
                            'Baan Plai Laem',
                            'Baan Lamai',
                            'Baan Taling Ngam',
                            'Baan Wang Ta Kien',
                            'Don Sak',
                            'Baan Sri Thanu',
                            'Baan Chaloklum',
                            'Baan Lipa Noi',
                        ],
                    },
                state: [
                        'Surat Thani Province',
                       ]
            },
            {
                city: {
                        'Phuket City Municipality': [ 
                            'Si Sunthon',
                            'Talat Nuea',
                            'Ko Kaeo',
                            'Sakhu',
                            'Choeng Thale',
                        ],
                    },
                state: [
                        'Phuket Province',
                       ]
            },
            {
                city: {
                        'Samut Prakan': [ 
                            'Nong Prue Subdistrict',
                            'Bang Pu Subdistrict Municipality',
                            'Bang Kaeo Subdistrict',
                        ],
                    },
                state: [
                        'Samut Prakan Province',
                       ]
            },
            {
                city: {
                        'Phang-nga': [ 
                            'Bang Nai Si',
                        ],
                    },
                state: [
                        'Phang-nga Province',
                       ]
            },
            {
                city: {
                        'Krabi': [ 
                            'Ao Nang',
                        ],
                    },
                state: [
                        'Krabi Province',
                       ]
            },
        ],
        'Turkey': [
            { 
                city: {
                        'Izmir': [
                            'Bornova',
                            'Çeşme',
                        ],
                    },
                state: [
                        'Izmir',
                       ]
            }, 
            {
                city: {
                        'Istanbul': [
                            'Maltepe',
                            'Şişli',
                        ],
                    },
                state: [
                        'Istanbul',
                       ]
            },
            {
                city: {
                        'Antalya': [ 
                            'Aksu',
                            'Konyaaltı',
                            'Serik',
                            'Muratpaşa',
                            'Kepez',
                            'Kaş',
                        ],
                    },
                state: [
                        'Antalya',
                       ]
            },
            {
                city: {
                        'Ankara': [ 
                            'Keçiören', 
                        ],
                    },
                state: [
                        'Ankara',
                       ]
            },
            {
                city: {
                        'Muğla': [ 
                            'Bodrum',
                            'Marmaris',
                        ],
                    },
                state: [
                        'Muğla',
                       ]
            },
            {
                city: {
                        'Konya': [ 
                            'Meram',
                        ],
                    },
                state: [
                        'Konya',
                       ]
            },
            {
                city: {
                        'Yalova Merkez': [ 
                            'Çınarcık',
                        ],
                    },
                state: [
                        'Yalova',
                       ]
            },
        ],
        'Slovakia': [
            {
                city: {
                        'Žilina': [ 
                            'Beňadiková', 
                            'Dolný Kubín', 
                        ],
                    },
                state: [
                        'Žilina',
                       ]
            },
            {
                city: {
                        'Bratislava': [ 
                            'Bernolákovo', 
                            'Malacky', 
                        ],
                    },
                state: [
                        'Bratislava',
                       ]
            },
            {
                city: {
                        'Preshov': [ 
                            'Dulova Ves', 
                            'District of Prešov', 
                        ],
                    },
                state: [
                        'Prešov',
                       ]
            },
            {
                city: {
                        'Trenchin': [ 
                            'Prievidza', 
                        ],
                    },
                state: [
                        'Trenčín',
                       ]
            },
        ],
        'Spain': [
            {
                    city: {
                        'Oviedo': [ 
                            'Lena', 
                        ],
                    },
                state: [
                        'Asturias',
                       ]
            },
            {
                city: {
                        'Santander': [ 
                            'Torrelavega', 
                        ],
                    },
                state: [
                        'Cantabria',
                       ]
            },
            {
                city: {
                        'Orihuela': [ 
                            'Pilar de la Horadada', 
                            'Torrevieja', 
                        ],
                    },
                state: [
                        'Valencian Community',
                       ]
            },
            {
                city: {
                        'Málaga': [ 
                            'Arroyo de la Miel-Benalmádena Costa', 
                            'Benahavís', 
                            'Monda', 
                        ],
                    },
                state: [
                        'Andalusia',
                       ]
            },
            {
                city: {
                        'Las Palmas de Gran Canaria': [ 
                            'Tejeda', 
                        ],
                    },
                state: [
                        'Las Palmas',
                       ]
            },
            {
                city: {
                        'Barcelona': [ 
                            'Vilanova i la Geltrú',
                            'Cubelles',  
                        ],
                        'Girona': [ 
                            'Lloret De Mar',  
                            'Lloret de Mar',  
                            "Castell d'Aro, Platja d'Aro i s'Agaró",  
                            "Castell d'Aro",  
                        ],
                    },
                state: [
                        'Catalonia',
                       ]
            },
            {
                city: {
                        'Santa Cruz de Tenerife': [ 
                            'Arona',
                            'Costa Del Silencio',
                        ],
                    },
                state: [
                        'Canary Islands',
                       ]
            },
            {
                city: {
                        'A Coruña': [ 
                            'Santiago de Compostela',
                        ],
                    },
                state: [
                        'Galicia',
                       ]
            },
        ],
        'Sri Lanka': [
            {
                city: {
                        'Galle': [ 
                            'Goviyapana', 
                            'Bentota',
                            'Hikkaduwa',
                        ],
                    },
                state: [
                        'Southern Province',
                       ]
            },
            {
                city: {
                        'Batticaloa': [ 
                            'Pasikudah', 
                        ],
                    },
                state: [
                        'Eastern Province',
                       ]
            },
            {
                city: {
                        'Badulla': [ 
                            'Ella', 
                        ],
                    },
                state: [
                        'Uva Province',
                       ]
            },
            {
                city: {
                        'Gampaha': [ 
                            'Ettukala', 
                        ],
                        'Colombo': [ 
                            'Negombo', 
                        ],
                    },
                state: [
                        'Western Province',
                       ]
            },
        ],
        'Sweden': [
            {
                city: {
                        'Stockholm': [ 
                            'Vega', 
                            'Sundbybergs kommun', 
                        ],
                    },
                state: [
                        'Hermanstorp',
                        'Solskiftet',
                       ]
            },
            {
                city: {
                        'Gothenburg': [ 
                            'Mölndals kommun', 
                            'Öckerö', 
                        ],
                    },
                state: [
                        'Kärrahöjd',
                        'Heden',
                       ]
            },
        ],
        'Switzerland': [
            {
                city: {
                        'Lausanne': [ 
                            'Crans (VD)',
                            'Echallens',
                            'Corsier-sur-Vevey',
                            'Sainte-Croix',
                        ],
                    },
                state: [
                        'Vaud',
                       ]
            },
            {
                city: {
                        'Zurich': [ 
                            'Wetzikon (ZH)', 
                            'Dachsleren', 
                            'Dübendorf', 
                        ],
                    },
                state: [
                        'Zurich',
                       ]
            },
            {
                city: {
                        'St. Gallen': [ 
                            'Büchel', 
                            'Kaltbrunn', 
                            'Bad Ragaz', 
                        ],
                    },
                state: [
                        'St. Gallen',
                       ],
            },
            {
                city: {
                        'Lucerne': [ 
                            'Udligenswil', 
                        ],
                    },
                state: [
                        'Lucerne',
                       ],
            },
            {
                city: {
                        'Solothurn': [ 
                            'Grenchen', 
                        ],
                    },
                state: [
                        'Solothurn',
                       ]
            },
            {
                city: {
                        'Bern': [ 
                            'Muri bei Bern', 
                        ],
                    },
                state: [
                        'Bern',
                       ]
            },
            {
                city: {
                        'Schwyz': [ 
                            'Vorderthal', 
                        ],
                    },
                state: [
                        'Schwyz',
                       ]
            },
            {
                city: {
                        'Kur': [ 
                            'Igis', 
                        ],
                    },
                state: [
                        'Grisons',
                       ]
            },
            {
                city: {
                        'Fribur': [ 
                            'Granges-Paccot', 
                        ],
                    },
                state: [
                        'Fribourg',
                       ]
            },
            {
                city: {
                        'Geneva': [ 
                            'Meyrin', 
                        ],
                    },
                state: [
                        'Geneva',
                       ]
            },
            {
                city: {
                        'Bellinzona': [ 
                            'Morcote',
                            'Muzzano',
                        ],
                    },
                state: [
                        'Ticino',
                       ]
            },
        ],
        'South Korea': [
            {
                city: {
                        'Gwangju': [ 
                            'Woncheon-ri', 
                        ],
                    },
                state: [
                        'South Jeolla',
                       ]
            },
            {
                city: {
                        'Suvon': [ 
                            '화성시', 
                            'Hwaseong-si', 
                        ],
                    },
                state: [
                        '경기도',
                       ]
            },
        ],
        'Ukraine': [
            {
                city: {
                        'Kyiv': [ 
                            'Tarasivka',
                            'Kotsiubynske',
                            'Kvitneve',
                            'Liutizh',
                            'Petropavlivska Borshchahivka',
                            'Sofiivska Borshchahivka',
                            'Hnidyn',
                        ],
                        'Boryspil': [ 
                            'Shchaslyve', 
                            'Hora', 
                            'Vyshenky', 
                        ],
                        'Brovary': [ 
                            'Zazymia', 
                        ],
                        'Fastiv': [ 
                            'Hatne', 
                        ],
                        'Obukhiv': [ 
                            'Leonivka',
                            'Kozyn',  
                            'Krushynka',  
                            'Vasylkiv',  
                        ],
                        'Irpin': [ 
                            'Kolonshchyna', 
                            'Pirnove Rural Hromada', 
                        ],
                        'Yahotyn': [ 
                            'Henzerivka', 
                        ],
                        'Vyshhorod': [
                            'Novi Petrivtsi',
                            'Voropaivka',
                        ],
                        'Bila Tserkva': [
                            'Teleshivka',
                            'Tetiiv',
                            'Mali Lysivtsi',
                        ],
                        'Bucha': [
                            'Hostomel',
                            'Bilohorodka',
                        ],
                    },
                state: [
                        'Kyiv Oblast',
                       ]
            },
            {
                city: {
                        'Liuboml': [ 
                            'Rymachi',
                        ],
                        'Kovel': [ 
                            'Zelena', 
                        ],
                        'Kamin-Kashyrskyi': [ 
                            'Klitytsk', 
                        ],
                        'Lutsk': [ 
                            'Tarasove', 
                        ],
                    },
                state: [
                        'Volyn Oblast',
                       ]
            },
            {
                city: {
                        'Korsun-Shevchenkivskyi': [ 
                            'Стеблівська селищна громада',
                        ],
                    },
                state: [
                        'Cherkasy Oblast',
                       ]
            },
            { 
                city: {
                        'Zviahel': [ 
                            'Marianivka', 
                        ],
                        'Zhytomyr': [ 
                            'Hadzynka', 
                            'Levkiv', 
                        ],
                    },
                state: [
                        'Zhytomyr Oblast',
                       ]
            }, 
            { 
                city: {
                        'Odesa': [ 
                            'Chornomorsk', 
                            'Авангардівська селищна громада', 
                            'Avanhard', 
                            'Pivdenne', 
                            'Великодолинська селищна громада', 
                        ],
                        'Artsyz': [ 
                            'Plotsk', 
                        ],
                        'Belgorod-Dnestrovskij': [ 
                            'Zatoka', 
                        ],
                    },
                state: [
                        'Odesa Oblast',
                       ]
            }, 
            {
                city: {
                        'Dnipro': [ 
                            'Obukhivka',
                            'Mykolaivka',
                            'Samar',
                            'Novomoskovsk',
                            'Обухівська селищна громада',
                            'Слобожанська селищна громада',
                            'Pidhorodne',
                            'Новоолександрівська сільська громада',
                        ],
                        'Chernechchyna': [ 
                            'Чернеччинська сільська громада', 
                        ],
                        'Kryvyi Rih': [ 
                            'Лозуватська сільська громада',
                        ],
                        'Kamianske': [ 
                            'Auly',
                        ],
                    },
                state: [
                        'Dnipropetrovsk Oblast',
                       ]
            },
            {
                city: {
                        'Zaporizhzhia': [ 
                            'Baburka', 
                            'Dolynske', 
                        ],
                    },
                state: [
                        'Zaporizhia Oblast',
                        'Zaporizhzhia Oblast',
                       ]
            },
            {
                city: {
                        'Khmelnytskyi': [ 
                            'Klymashivka', 
                        ],
                    },
                state: [
                        'Khmelnytskyi Oblast',
                       ]
            },
            {
                city: {
                        'Sarny': [ 
                            'Solomiivka', 
                            'Dubrovytsia',
                        ],
                        'Rivne': [ 
                            'Kostopil', 
                            'Mala Liubasha Rural Hromada', 
                            'Klevan', 
                        ],
                        'Dubno': [
                            'Radyvyliv',
                            'Pryvilne Rural Hromada',
                        ],
                    },
                state: [
                        'Rivne Oblast',
                       ]
            },
            {
                city: {
                        'Ternopil': [ 
                            'Petrykiv', 
                            'Smykivtsi', 
                        ],
                    },
                state: [
                        'Ternopil Oblast',
                       ]
            },
            {
                city: {
                        'Lviv': [ 
                            'Velyke Kolodno', 
                            'Vynnyky', 
                            'Zhovkva', 
                            'Solonka', 
                            'Malechkovychi', 
                        ],
                        'Busk': [ 
                            'Sokolivka', 
                        ],
                        'Chervonohrad': [ 
                            'Silets', 
                        ],
                        'Yavoriv': [ 
                            'Starychi', 
                            'Shehyni Rural Hromada', 
                        ],
                        'Pustomyty': [ 
                            'Solonka Rural Hromada', 
                        ],
                        'Stryi': [ 
                            'Hranky-Kuty', 
                            'Slavsko', 
                        ],
                        'Skole': [ 
                            'Skole Urban Hromada',
                        ],
                        'Drohobych': [ 
                            'Oriv', 
                        ],
                    },
                state: [
                        'Lviv Oblast',
                       ]
            },
            {
                city: {
                        'Ivano-Frankivsk': [ 
                            'Uhryniv', 
                        ],
                        'Verkhovyna': [ 
                            'Kryvopillia', 
                            'Iltsi', 
                        ],
                        'Nadvirna': [ 
                            'Vorokhta', 
                        ],
                    },
                state: [
                        'Ivano-Frankivsk Oblast',
                       ]
            },
            {
                city: {
                        'Mukachevo': [ 
                            'Poliana Rural Hromada', 
                        ],
                        'Svaliava': [ 
                            'Poliana', 
                        ],
                        'Volovets': [ 
                            'Huklyvyi', 
                        ],
                        'Tiachiv': [ 
                            'Solotvyno', 
                        ],
                    },
                state: [
                        'Zakarpattia Oblast',
                       ]
            },
            {
                city: {
                        'Chernihiv': [ 
                            'Markivtsi',
                            'Mostyshche',
                            'Shestovytsia',
                            'Staryi Bilous',
                        ],
                        'Nizhyn': [ 
                            'Вертіївська сільська громада', 
                            'Bobrovytsia', 
                        ],
                    },
                state: [
                        'Chernihiv Oblast',
                       ]
            },
            {
                city: {
                        'Poltava': [ 
                            'Vasylivka', 
                            'Zinkiv', 
                        ],
                        'Lubny': [ 
                            'Лубенська міська громада', 
                            'Хорольська міська громада', 
                        ],
                    },
                state: [
                        'Poltava Oblast',
                       ]
            },
            {
                city: {
                        'Novoaidar': [ 
                            'Bakhmutivka', 
                        ],
                        'Krasnodon': [ 
                            'Sorokyne', 
                        ],
                        'Rovenky': [ 
                            'Dzerzhynskyi', 
                        ],
                    },
                state: [
                        'Luhansk Oblast',
                       ]
            },
            {
                city: {
                        'Kharkiv': [ 
                            'Korotych', 
                            'Pisochyn',
                            'Liubotyn',
                            'Vysokyi',
                        ],
                        'Kupiansk': [ 
                            'Kolisnykivka',
                        ],
                    },
                state: [
                        'Kharkiv Oblast',
                       ]
            },
            {
                city: {
                        'Yuzhne': [ 
                            'Коблівська сільська громада', 
                        ],
                        'Bashtanka': [ 
                            'Казанківська селищна громада', 
                        ],
                        'Mykolaiv': [ 
                            'Stepove', 
                            'Novofedorivka', 
                        ],
                    },
                state: [
                        'Mykolaiv Oblast',
                       ]
            },
            {
                city: {
                        'Mariupol': [ 
                            'Manhush Settlement Hromada', 
                        ],
                        'Kramatorsk': [ 
                            'Kostiantynivka', 
                        ],
                        'Horlivka': [ 
                            'Niu-York', 
                        ],
                        'Pokrovsk': [
                            'Kamianka',
                        ],
                    },
                state: [
                        'Donetsk Oblast',
                       ]
            },
            {
                city: {
                        'Chernivtsi': [ 
                            'Luzhany', 
                        ],
                        'Novoselytsia': [ 
                            'Strointsi', 
                        ],
                        'Kitsman': [ 
                            'Revne', 
                        ],
                    },
                state: [
                        'Chernivtsi Oblast',
                       ]
            },
            {
                city: {
                        'Chortkiv': [ 
                            'Korzhova', 
                            'Zavadivka', 
                        ],
                    },
                state: [
                        'Chortkiv Raion',
                        'Ternopil Oblast',
                       ]
            },
            {
                city: {
                        'Feodosia': [ 
                            'Коктебельский поселковый совет', 
                        ],
                        'Lenino': [ 
                            'городское поселение Щелкино', 
                            'Лениново сельское поселение', 
                            'Мысовское сельское поселение', 
                        ],
                        'Simferopol': [ 
                            'Укромновское сельское поселение', 
                            'Перовское сельское поселение', 
                            'Мирновское сельское поселение',
                            'Молодёжненское сельское поселение',
                            'Родниковское сельское поселение',
                            'Гвардейское сельское поселение',
                            'Добровское сельское поселение',
                            'Simferopol (urban okrug)',
                            'Aeroflotsky',
                            'Gresovsky',
                            'Agrarnoye',
                        ],
                        'Kerch': [ 
                            'Керченский городской совет', 
                            'городской округ Керчь', 
                        ],
                        'Alupka': [ 
                            'Koreiz', 
                        ],
                        'Sudak': [ 
                            'Novyi Svet', 
                        ],
                        'Yalta': [ 
                            'Voskhod',
                            'Massandra',
                            'Oliva',
                            "General'skoe",
                            "город Ялта",
                        ],
                        'Chornomorskoe': [ 
                            'Оленевское сельское поселение', 
                        ],
                        'Yevpatoriya': [ 
                            'Zaozernoe',
                            'Окунёвское сельское поселение',
                        ],
                        'Razdolnoe': [ 
                            'Ковыльновское сельское поселение',
                        ],
                        'Sevastopol': [ 
                            'Inkerman', 
                            'Сахарная Головка', 
                            'Балаклавский округ',
                            'Орлиновский округ',
                        ],
                    },
                state: [
                        'Republic of Crimea',
                        'Autonomous Republic of Crimea',
                        'Sevastopol'
                       ]
            },
            {
                city: {
                        'Holovanivsk': [ 
                            'Vilshanka', 
                        ],
                        'Kropyvnytskyi': [ 
                            'Tsvitne', 
                        ],
                    },
                state: [
                        'Kirovohrad Oblast',
                       ],
            },
        ],
        'United Arab Emirates': [
            {
                city: {
                        'Abu Dhabi': [ 
                            'Al Saadiyat Island', 
                            'Al Matar', 
                        ],
                    },
                state: [
                        'Abu Dhabi Emirate',
                       ]
            },
            {
                city: {
                        'Dubai': [ 
                            'Dubai International Airport', 
                            'Business Bay', 
                            'Umm Suqeim', 
                        ],
                    },
                state: [
                        'Dubai',
                       ]
            },
        ],
        'United Kingdom': [
            {
                city: {
                        'Newcastle upon Tyne': [ 
                            'Gateshead', 
                            'Ryton', 
                            'Sunderland',
                            'Whickham',
                            'North Tyneside', 
                            'South Tyneside', 
                        ],
                        'Guildford': [ 
                            'Woking', 
                        ],
                        'Maidstone': [ 
                            'Upper Stoke', 
                        ],
                        'Noridzh': [ 
                            'Breckland District', 
                        ],
                    },
                state: [
                        'England',
                       ]
            },
            {
                city: {
                        'Glasgow': [ 
                            'Larbert', 
                        ],
                    },
                state: [
                        'Scotland',
                       ]
            },
            {
                city: {
                        'Barri': [ 
                            'Boverton', 
                        ],
                    },
                state: [
                        'Wales',
                       ]
            },
            {
                city: {
                        'Omagh': [ 
                            'Strabane', 
                            'Newtownstewart', 
                        ],
                    },
                state: [
                        'Northern Ireland',
                       ]
            },
        ],
        'United States': [
            {
                city: {
                        'Indianapolis': [ 
                            'Madison County', 
                            'Anderson', 
                        ],
                    },
                state: [
                        'Indiana',
                       ]
            },
            {
                city: {
                        'Wewoka': [ 
                            'Seminole County',
                        ],
                    },
                state: [
                        'Oklahoma',
                       ]
            },
            {
                city: {
                        'Spokane': [ 
                            'Spokane Valley',
                        ],
                    },
                state: [
                        'Washington',
                       ]
            },
            {
                city: {
                        'Philadelphia': [ 
                            'Abington Township', 
                            'Upper Moreland Township', 
                        ],
                        'Gettisberg': [ 
                            'Carroll Valley', 
                        ],
                        'Milford': [ 
                            'Lackawaxen Township', 
                        ],
                    },
                state: [
                        'Pennsylvania',
                       ]
            },
            {
                city: {
                        'Fairfax': [ 
                            'Merrifield', 
                            'Reston', 
                        ],
                    },
                state: [
                        'Virginia',
                       ]
            },
            {
                city: {
                        'Springfild': [ 
                            'Greene County', 
                        ],
                    },
                state: [
                        'Missouri',
                       ]
            },
            {
                city: {
                        'Worcester': [ 
                            'Oxford', 
                        ],
                        'Springfield': [ 
                            'Holyoke', 
                        ],
                    },
                state: [
                        'Massachusetts',
                       ]
            },
            {
                city: {
                        'Bentonville': [ 
                        'Bella Vista', 
                      ],
                    },
                state: [
                        'Arkansas',
                       ]
            },
            {
                city: {
                        'Santa Ana': [ 
                            'Costa Mesa', 
                            'Irvine', 
                        ],
                    },
                state: [
                        'California',
                       ]
            },
            {
                city: {
                        'Lawrenceville': [ 
                        'Gwinnett County', 
                      ],
                    },
                state: [
                        'Georgia',
                       ]
            },
            {
                city: {
                        'Monro': [ 
                        'Union County', 
                      ],
                    },
                state: [
                        'North Carolina',
                       ]
            },
            {
                city: {
                        'Miami': [ 
                            'Miami Beach', 
                            'Sunny Isles Beach', 
                        ],
                        'Fort Lauderdale': [ 
                            'Dania Beach', 
                            'Pompano Beach', 
                            'Deerfield Beach', 
                        ],
                        'De-Fyuniak-Springs': [ 
                            'Seacrest Beach', 
                        ],
                        'Sarasota': [ 
                            'Laurel', 
                        ],
                        'West-Palm-Beach': [ 
                            'Boca Raton', 
                        ],
                    },
                state: [
                        'Florida',
                       ]
            },
            {
                city: {
                        'Memphis': [ 
                            'Maud', 
                        ],
                    },
                state: [
                        'Mississippi',
                       ]
            },
            {
                city: {
                        'Dallas': [ 
                            'Irving', 
                        ],
                        'Conroe': [ 
                            'Montgomery County', 
                            'Porter', 
                        ],
                    },
                state: [
                        'Texas',
                       ]
            },
            {
                city: {
                        'Huntsville': [ 
                            'Madison County', 
                        ],
                    },
                state: [
                        'Alabama',
                       ]
            },
            {
                city: {
                        'Cleveland': [ 
                            'Lakewood', 
                        ],
                    },
                state: [
                        'Ohio',
                       ]
            },
            {
                city: {
                        'York': [ 
                            'Fort Mill', 
                        ],
                    },
                state: [
                        'South Carolina',
                       ]
            },
            {
                city: {
                        'Toms-River': [ 
                            'Berkeley Township', 
                        ],
                    },
                state: [
                        'New Jersey',
                       ]
            },
            {
                city: {
                        'Golden': [ 
                            'Jefferson County', 
                        ],
                    },
                state: [
                        'Colorado',
                       ]
            },
            {
                city: {
                        'Chicago': [ 
                            'Barrington',
                        ],
                        'Wheaton': [ 
                            'Aurora', 
                        ],
                        'Vokigan': [ 
                            'Vernon Hills', 
                        ],
                    },
                state: [
                        'Illinois',
                       ]
            },
        ],
        'Uzbekistan': [
            {
                city: {
                        'Tashkent': [ 
                            'Salar', 
                            'Kyzyltog', 
                        ],
                        'Nurafshan': [ 
                            'Urtaaul', 
                            'Уртааул', 
                        ],
                    },
                state: [
                        'Tashkent Region',
                       ]
            },
            {
                city: {
                        'Samarqand City': [ 
                            'Samarkand City', 
                        ],
                        'Payshanba': [
                            'Kasymaul',
                        ],
                    },
                state: [
                        'Samarqand Region',
                       ]
            },
        ],
       'Vietnam': [
            {
                city: {
                        'Ho Chi Minh City': [ 
                            'Thủ Đức',
                        ],
                    },
                state: [
                        'District 2',
                       ]
            },
            {
                city: {
                        'Da Nang': [ 
                            'Phường Hòa Cường',
                            'Đà Nẵng',
                        ],
                    },
                state: [
                        'Đà Nẵng',
                       ]
            },
            {
                city: {
                        'Dalat': [ 
                            'Phường Phú Thủy',
                            'Phan Thiết',
                        ],
                    },
                state: [
                        'Lâm Đồng Province',
                       ]
            },
        ],

    };

export { redefinition_city };