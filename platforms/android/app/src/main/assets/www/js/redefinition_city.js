"use strict";

let redefinition_city = { // переопределение города

    'Abkhazia': [
        {
            city: [ 
                    'Pitsunda', 
                    'Ldzaa',
                    ],
            state: [ 
                    'Autonomous Republic of Abkhazia',
                    ],
            result: 'Gagra',
        },
        {
            city: [ 
                    'Tkhubun', 
                    ],
            state: [ 
                    'Autonomous Republic of Abkhazia',
                    ],
            result: 'Gulripsh',
        },
        {
            city: [ 
                    'New Athos', 
                    ],
            state: [ 
                    'Autonomous Republic of Abkhazia',
                    ],
            result: 'Gudauta',
        },
        {
            city: [ 
                    'Sokhumi', 
                    'Alekseevka', 
                    ],
            state: [ 
                    'Autonomous Republic of Abkhazia',
                    ],
            result: 'Sukhum',
        },
    ],
    'Armenia': [
        {
            city: [ 
                    'Tsamakaberd', 
                    ],
            state: [ 
                    'Gegharkunik Province',
                    ],
            result: 'Gavar',
        },
    ],
    'Australia': [
        {
            city: [ 
                    'Gregory Hills', 
                    ],
            state: [ 
                    'New South Wales',
                    ],
            result: 'Sydney',
        },
    ],
    'Austria': [
        {
            city: [ 
                    'Reindlmühl', 
                    ],
            state: [ 
                    'Upper Austria',
                    ],
            result: 'Gmunden',
        },
    ],
    'Azerbaijan': [
        {
            city: [ 
                    'Nizami Raion',
                    ],
            state: [ 
                    'Baku Ekonomic Zone',
                    ],
            result: 'Baku City',
        },
    ],
    'Belarus': [
        {   
            city: [ 
                    'Бараўлянскі сельскі Савет',
                    'Лугаваслабадскі сельскі Савет',
                    'Фаніпальскі сельскі Савет',
                    ],
            state: [ 
                    'Minsk Region',
                    ],
            result: 'Minsk',
        },
        {
            city: [ 
                    'Ozyaritska-Slabadski rural council',
                    'Жодзінскі сельскі Савет',
                    'Zhodzina', 
                    ],
            state: [
                    'Minsk Region',
                    ],
            result: 'Smalyavichy',
        },
        {   
            city: [ 
                    'Яромінскі сельскі Савет', 
                    ],
            state: [ 
                    'Homyel Region',
                    ],
            result: 'Homyel',
        },
        {   
            city: [ 
                    'Чыркавіцкі сельскі Савет', 
                    ],
            state: [ 
                    'Homyel Region',
                    ],
            result: 'Svietlahorsk',
        },
        {   
            city: [ 
                    'Янкавіцкі сельскі Савет', 
                    ],
            state: [ 
                    'Vitsebsk Region',
                    ],
            result: 'Rasony',
        },
        {   
            city: [ 
                    'Бердаўскі сельскі Савет', 
                    ],
            state: [ 
                    'Hrodna Region',
                    ],
            result: 'Lida',
        },
        {   
            city: [ 
                    'Любашаўскі сельскі Савет', 
                    ],
            state: [ 
                    'Brest Region',
                    ],
            result: 'Hantsavichy',
        },
    ],
    'Belgium': [
        {
            city: [ 
                    'Tervuren', 
                    'Zaventem', 
                    ],
            state: [
                    'Flemish Brabant',
                    ],
            result: 'Brussels',
        },  
        {
            city: [ 
                    'Veltem',
                    ],
            state: [
                    'Flemish Brabant',
                    ],
            result: 'Leuven',
        },  
        {
            city: [ 
                    'Durbuy',
                    ],
            state: [
                    'Luxembourg',
                    ],
            result: 'Marche-en-Famenne',
        },  
        {
            city: [ 
                    'Braine-le-Comte',
                    ],
            state: [
                    'Hainaut',
                    ],
            result: 'Soignies',
        },  
        {
            city: [ 
                    'Roeselare',
                    ],
            state: [
                    'West Flanders',
                    ],
            result: 'Bruges',
        },                 
    ],
    'Bulgaria': [

    ],
    'Canada': [
        {
            city: [ 
                    'Pointe-Claire', 
                    ],
            state: [
                    'Quebec',
                    ],
            result: 'Montreal',
        },  
        {
            city: [ 
                    'Ottawa', 
                    ],
            state: [
                    'Ontario',
                    ],
            result: '(Old) Ottawa',
        }, 
    ],
    'China': [
        {
            city: [ 
                    'Yinzhou District',
                    'Haishu District',
                    ],
            state: [ 
                    'Zhejiang',
                    ],
            result: 'Ningbo',
        },
    ],
    'Czechia': [
        { 
            city: [ 
                    'Chýně', 
                    'Capital City of Prague', 
                    ],
            state: [ 
                    'Central Bohemia',
                    'Prague',
                    ],
            result: 'Prague',
        },
        { 
            city: [ 
                    'Vlašim',
                    ],
            state: [ 
                    'Central Bohemia',
                    ],
            result: 'Benešov',
        }, 
    ],
    'Cyprus': [
        { 
            city: [ 
                    'Germasogeia', 
                    ],
            state: [ 
                    'Cyprus',
                    ],
            result: 'Limassol',
        },
    ],
    'Denmark': [
        { 
            city: [ 
                    'Klampenborg', 
                    ],
            state: [ 
                    'Denmark',
                    ],
            result: 'Copenhagen',
        },
        { 
            city: [ 
                    'Vestervig', 
                    ],
            state: [ 
                    'North Denmark Region',
                    ],
            result: 'Thisted',
        }, 
    ],
    'Dominican Republic': [
        { 
            city: [ 
                    'Dominicus', 
                    ],
            state: [ 
                    'La Altagracia',
                    ],
            result: 'Higüey',
        }, 
    ],
    'Estonia': [
        {
            city: [ 
                    'Kohtla-Järve linn',
                    ],
            state: [ 
                    'Järve linnaosa',
                    'Ahtme',
                    ],
            result: 'Jõhvi',
        },
    ],
    'Finland': [
        {
            city: [ 
                    'Orimattila', 
                    ],
            state: [ 
                    'Mainland Finland',
                    ],
            result: 'Lahti',
        },
        {
            city: [ 
                    'Rautjärvi', 
                    ],
            state: [ 
                    'Mainland Finland',
                    ],
            result: 'Parikkala',
        },
    ],
    'France': [
        {
            city: [ 
                    'Èze', 
                    'Villefranche-sur-Mer',
                    'Cannes',
                    'Antibes',
                    ],
            state: [ 
                    "Provence-Alpes-Côte d'Azur",
                    ],
            result: 'Nice',
        },
        {
            city: [ 
                    'Villennes-sur-Seine', 
                    'Aubervilliers',
                    'Magny-les-Hameaux',
                    ],
            state: [ 
                    "Île-de-France",
                    ],
            result: 'Paris',
        },
        {
            city: [ 
                    'Veigy-Foncenex', 
                    ],
            state: [ 
                    'Auvergne-Rhône-Alpes',
                    ],
            result: 'Thonon-les-Bains',
        },
        {
            city: [ 
                    'Saint-Nizier-du-Moucherotte', 
                    ],
            state: [ 
                    'Auvergne-Rhône-Alpes',
                    ],
            result: 'Grenoble',
        },
        {
            city: [ 
                    'Terres-de-Caux', 
                    ],
            state: [ 
                    'Normandie',
                    ],
            result: 'Rouen',
        },
    ],
    'Greece': [
        {
            city: [ 
                    'Municipality of Palaio Faliro', 
                    ],
            state: [ 
                    'Attica',
                    ],
            result: 'Athens',
        },
        {
            city: [ 
                    'Municipal Unit of Lefktro', 
                    'Municipal Unit of Avia', 
                    'Ditiki-Mani', 
                    'Municipality of Kalamata', 
                    ],
            state: [ 
                    'Peloponnese, Western Greece and the Ionian',
                    ],
            result: 'Municipal Unit of Tripoli',
        },
        {
            city: [ 
                    'Dramia', 
                    ],
            state: [ 
                    'Region of Crete',
                    ],
            result: 'Chania',
        },
        {
            city: [ 
                    'Nea Moudania', 
                    ],
            state: [ 
                    'Macedonia and Thrace',
                    ],
            result: 'Thessaloniki',
        },
    ],
    'Germany': [
        {
            city: [ 
                    'Öhringen', 
                    ],
            state: [ 
                    'Baden-Württemberg',
                    ],
            result: 'Künzelsau',
        },
        {
            city: [ 
                    'Ehningen', 
                    ],
            state: [ 
                    'Baden-Württemberg',
                    ],
            result: 'Böblingen',
        },
        {
            city: [ 
                    'Könnern', 
                    ],
            state: [ 
                    'Saxony-Anhalt',
                    ],
            result: 'Bernburg',
        },
        {
            city: [ 
                    'Bad Nauheim', 
                    ],
            state: [ 
                    'Hesse',
                    ],
            result: 'Friedberg (Hesse)',
        },
        {
            city: [ 
                    'Darmstadt-Nord', 
                    'Darmstadt-Mitte',
                    'Bickenbach',
                    ],
            state: [ 
                    'Hesse',
                    ],
            result: 'Darmstadt',
        },
        {
            city: [ 
                    'Offenbach am Main', 
                    'Großen-Buseck', 
                    ],
            state: [ 
                    'Hesse',
                    ],
            result: 'Frankfurt',
        },
        {
            city: [ 
                    'Neuruppin', 
                    ],
            state: [ 
                    'Brandenburg',
                    ],
            result: 'Berlin',
        },
        {
            city: [ 
                    'Halbe', 
                    ],
            state: [ 
                    'Brandenburg',
                    ],
            result: 'Lübben (Spreewald)',
        },
        {
            city: [ 
                    'Bad Oeynhausen', 
                    ],
            state: [ 
                    'North Rhine – Westphalia',
                    ],
            result: 'Bielefeld',
        },
        {
            city: [ 
                    'Nieheim', 
                    ],
            state: [ 
                    'North Rhine-Westphalia',
                    ],
            result: 'Höxter',
        },
        {
            city: [ 
                    'Rheda-Wiedenbrück', 
                    ],
            state: [ 
                    'North Rhine-Westphalia',
                    ],
            result: 'Gütersloh',
        },
        {
            city: [ 
                    'Norderstedt', 
                    ],
            state: [ 
                    'Schleswig-Holstein',
                    ],
            result: 'Bad Segeberg',
        },
        {
            city: [ 
                    'Tangstedt', 
                    ],
            state: [ 
                    'Schleswig-Holstein',
                    ],
            result: 'Bad Oldesloe',
        },
        {
            city: [ 
                    'Abentheuer', 
                    ],
            state: [ 
                    'Rhineland-Palatinate',
                    ],
            result: 'Birkenfeld',
        },
        {
            city: [ 
                    'Bad Bergzabern', 
                    ],
            state: [ 
                    'Rhineland-Palatinate',
                    ],
            result: 'Landau in der Pfalz',
        },
        {
            city: [ 
                    'Plate', 
                    ],
            state: [ 
                    'Mecklenburg-Vorpommern',
                    ],
            result: 'Parchim',
        },
        {
            city: [ 
                    'Meitingen', 
                    ],
            state: [ 
                    'Bavaria',
                    ],
            result: 'Augsburg',
        },
        {
            city: [ 
                    'Zell', 
                    ],
            state: [ 
                    'Bavaria',
                    ],
            result: 'Hof',
        },
        {
            city: [ 
                    'Drochtersen', 
                    ],
            state: [ 
                    'Lower Saxony',
                    ],
            result: 'Stade',
        },
        {
            city: [ 
                    'Sassenburg', 
                    ],
            state: [ 
                    'Lower Saxony',
                    ],
            result: 'Gifhorn',
        },
        {
            city: [ 
                    'Seevetal', 
                    ],
            state: [ 
                    'Lower Saxony',
                    ],
            result: 'Winsen (Luhe)',
        },
        {
            city: [ 
                    'Ispringen', 
                    ],
            state: [ 
                    'Baden-Württemberg',
                    ],
            result: 'Pforzheim',
        },
        {
            city: [ 
                    'Ellwangen', 
                    ],
            state: [ 
                    'Baden-Württemberg',
                    ],
            result: 'Stuttgart',
        },
    ],
    'Georgia': [
        {
            city: [ 
                    'Akhalubani', 
                    'Tsilkani', 
                    ],
            state: [ 
                    'Mtskheta-Mtianeti',
                    ],
            result: 'Mtskheta',
        },{
            city: [ 
                    'Dapnari', 
                    ],
            state: [ 
                    'Imereti',
                    ],
            result: 'Kutaisi',
        },
    ],
    'India': [
        {
            city: [ 
                    'Arambol', 
                    'Pernem',
                    'Querim',
                    'Margao',
                    'Morjim',
                    ],
            state: [ 
                    'Goa',
                    ],
            result: 'Goa',
        },
        {
            city: [ 
                    'Thachanatukkara', 
                    ],
            state: [ 
                    'Kerala',
                    ],
            result: 'Palakkad',
        },
        {
            city: [ 
                    'Chemmalamattom', 
                    ],
            state: [ 
                    'Kerala',
                    ],
            result: 'Kottayam',
        },
        {
            city: [ 
                    'Adimalathura', 
                    ],
            state: [ 
                    'Kerala',
                    ],
            result: 'Thiruvananthapuram',
        },
        {
            city: [ 
                    'Devanahalli taluku', 
                    ],
            state: [ 
                    'Karnataka',
                    ],
            result: 'Devanahalli',
        },
        {
            city: [ 
                    'Mahadevapura', 
                    ],
            state: [ 
                    'Karnataka',
                    ],
            result: 'Bengaluru',
        },
        {
            city: [ 
                    'Kaup', 
                    ],
            state: [ 
                    'Karnataka',
                    ],
            result: 'Udupi',
        },
        {
            city: [ 
                    'Kalkaji Tehsil', 
                    'New Delhi', 
                    ],
            state: [ 
                    'Delhi',
                    ],
            result: 'Delhi',
        },
        {
            city: [ 
                    'Bhodwal Majri',
                    ],
            state: [ 
                    'Haryana',
                    ],
            result: 'Panipat',
        },
        {
            city: [ 
                    'Swargashram', 
                    ],
            state: [ 
                    'Uttarakhand',
                    ],
            result: 'Rishikesh',
        },
        {
            city: [ 
                    'Govardhan', 
                    'Jatipura', 
                    ],
            state: [ 
                    'Uttar Pradesh',
                    ],
            result: 'Mathura',
        },
        {
            city: [ 
                    'Sunrakh', 
                    ],
            state: [ 
                    'Uttar Pradesh',
                    ],
            result: 'Vrindavan',
        },
        {
            city: [ 
                    'Bhubaneswar Municipal Corporation', 
                    ],
            state: [ 
                    'Odisha',
                    ],
            result: 'Khurdha Municipality Boundary',
        },
        {
            city: [ 
                    'Awalsiddhi', 
                    ],
            state: [ 
                    'West Bengal',
                    ],
            result: 'Kolkata',
        },
        {
            city: [ 
                    'Durgauti', 
                    ],
            state: [ 
                    'Bihar',
                    ],
            result: 'Varanasi',
        },
        {
            city: [ 
                    'Semmedu', 
                    ],
            state: [ 
                    'Tamil Nadu',
                    ],
            result: 'Coimbatore',
        },
        {
            city: [ 
                    'Daurala', 
                    ],
            state: [ 
                    'Uttar Pradesh',
                    ],
            result: 'Meerut',
        },
    ],
    'Indonesia': [
        { 
            city: [ 
                    'Dusun Mangsit', 
                    'Aik Berik',
                    'Lombok Tengah', 
                    ],
            state: [
                    'West Nusa Tenggara',
                    ],
            result: 'Lombok',
        }, 
        {
            city: [ 
                    'Special Capital Region of Jakarta', 
                    'Special Region of Jakarta', 
                    ],
            state: [
                    'Java',
                    ],
            result: 'Jakarta',
        },
        {
            city: [ 
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
                    ],
            state: [
                    'Bali',
                    ],
            result: 'Denpasar',
        },
        {
            city: [ 
                    'Amed', 
                    ],
            state: [
                    'Bali',
                    ],
            result: 'Amlapura',
        },
    ],
    'Ireland': [
        {
            city: [ 
                    'Ongar', 
                    ],
            state: [
                    'Leinster',
                    ],
            result: 'Dublin',
        },
        {
            city: [ 
                    'Clifden', 
                    'County Galway', 
                    ],
            state: [
                    'Connacht',
                    'Conamara Municipal District',
                    ],
            result: 'Galway',
        },
    ],
    'Italy': [
        { 
            city: [ 
                    'Austis', 
                    'Crabonaxa/Villasimius', 
                    ],
            state: [ 
                    'Sardinia',
                    ],
            result: 'Island Sardinia',
        },
        { 
            city: [ 
                    'Castiglione in Teverina', 
                    ],
            state: [ 
                    'Lazio',
                    ],
            result: 'Viterbo',
        },
        { 
            city: [ 
                    'Uboldo', 
                    ],
            state: [ 
                    'Lombardy',
                    ],
            result: 'Varese',
        }, 
        {
            city: [ 
                    'Spotorno', 
                    ],
            state: [ 
                    'Liguria',
                    ],
            result: 'Savona',
        },
        {
            city: [ 
                    'San Casciano in Val di Pesa', 
                    ],
            state: [ 
                    'Tuscany',
                    ],
            result: 'Florence',
        },
        {
            city: [ 
                    'Roseto degli Abruzzi', 
                    ],
            state: [ 
                    'Abruzzo',
                    ],
            result: 'Teramo',
        },
        {
            city: [ 
                    'Colleverde',
                    ],
            state: [ 
                    'Lazio',
                    ],
            result: 'Rome',
        },
        {
            city: [ 
                    'Berceto', 
                    ],
            state: [ 
                    'Emilia-Romagna',
                    ],
            result: 'Parma',
        },
        {
            city: [ 
                    'Chiugiana', 
                    ],
            state: [ 
                    'Umbria',
                    ],
            result: 'Perugia',
        },
    ],
    'Israel': [
        {
            city: [ 
                    'South Givatayim',  
                    'Bat Yam', 
                    'Rishon LeZion',
                    'Ramat Gan',
                    ],
            state: [ 
                    'Tel-Aviv District',
                    'Center District',
                    ],
            result: 'Tel-Aviv',
        },
        {
            city: [ 
                    'Harish',
                    'Hadera',
                    ],
            state: [ 
                    'Haifa District',
                    ],
            result: 'Haifa',
        },
        {
            city: [ 
                    'Sderot',
                    "Be'er Sheva",
                    ],
            state: [ 
                    'South District',
                    ],
            result: "Be’er-Sheva",
        },
        {
            city: [ 
                    'Maalot Tarshiha',
                    ],
            state: [ 
                    'North District',
                    ],
            result: 'Nof HaGalil',
        },
    ],
    'Japan': [
        {
            city: [ 
                    'Tsubata',
                    ],
            state: [ 
                    'Ishikawa Prefecture',
                    ],
            result: 'Kahoku',
        },
        {
            city: [ 
                    'Tokorozawa',
                    ],
            state: [ 
                    'Saitama Prefecture',
                    ],
            result: 'Saitama',
        },
        { 
            city: [ 
                    'Chiyoda', 
                    'Koto', 
                    ],
            state: [
                    'Nishi-Kanda 3-chome',
                    'Ogibashi 3',
                    ],
            result: 'Tokio',
        },
    ],
    'Jordan': [ // Иордания
    {
        city: [  
                'Al Jizah', 
                'Muaqqar Sub-District', 
                'Quaismeh Sub-District', 
                ],
        state: [ 
                'Amman',
                ],
        result: 'Amman',
    },
    ],
    'Kazakhstan': [
        {
            city: [  
                    'Boralday', 
                    'Байсерке', 
                    'Гүлдала', 
                    ],
            state: [ 
                    'Almaty Region',
                    ],
            result: 'Almaty',
        },
        {
            city: [  
                    'Saran, Kazakhstan', 
                    ],
            state: [ 
                    'Karaganda Region',
                    ],
            result: 'Karaganda',
        },
        {
            city: [  
                    'Мичурин ауылдық округі', 
                    'Зачаганск', 
                    ],
            state: [ 
                    'West Kazakhstan Region',
                    ],
            result: 'Oral',
        },
        {
            city: [  
                    'Карасу', 
                    'Челгаши', 
                    ],
            state: [ 
                    'Kostanay Region',
                    ],
            result: 'Karasu',
        },
        {
            city: [  
                    'Айет', 
                    'Beimbet Mailin District', 
                    ],
            state: [ 
                    'Kostanay Region',
                    ],
            result: 'Ayet',
        },
        {
            city: [  
                    'Косшы', 
                    ],
            state: [ 
                    'Akmola Region',
                    ],
            result: 'Astana',
        },
    ],
    'Latvia': [
        { 
            city: [ 
                    'Mārupes pagasts',
                    'Babītes pagasts',
                    ],
            state: [
                    'Mārupes novads',
                    'Beberi',
                    ],
            result: 'Mārupe',
        },
        { 
            city: [ 
                    'Grobiņas pagasts', 
                    ],
            state: [
                    'Dienvidkurzemes novads',
                    ],
            result: 'Grobiņa',
        },
        { 
            city: [ 
                    'Slutišķi', 
                    ],
            state: [
                    'Augšdaugavas novads',
                    ],
            result: 'Daugavpils',
        },
        { 
            city: [ 
                    'Carnikavas pagasts', 
                    ],
            state: [
                    'Mežciems',
                    ],
            result: 'Ādaži',
        },
    ],
    'Lithuania': [
        { 
            city: [ 
                    'Paltininkai', 
                    'Kaišiadorys', 
                    ],
            state: [
                    'Kaunas County',
                    ],
            result: 'Kaunas',
        },
        { 
            city: [ 
                    'Visaginas', 
                    ],
            state: [
                    'Utena County',
                    ],
            result: 'Utena',
        },
        { 
            city: [ 
                    'Druskininkai', 
                    ],
            state: [
                    'Alytus County',
                    ],
            result: 'Alytus',
        },
    ],
    'Lebanon': [
        {
            city: [ 
                    'Yanar',
                    'Burj El Brajneh',
                    ],
            state: [ 
                    'Mount Lebanon Governorate',
                    ],
            result: 'Baabda',
        },
    ],
    'Moldova': [
        {
            city: [ 
                    'Ialoveni', 
                    'Slobozia', 
                    ],
            state: [ 
                    'Ialoveni District',
                    ],
            result: 'Chișinău',
        },
        {
            city: [ 
                    'Peresecina', 
                    ],
            state: [ 
                    'Orhei District',
                    ],
            result: 'Orhei',
        },
        {
            city: [ 
                    'Cruglic', 
                    ],
            state: [ 
                    'Criuleni District',
                    ],
            result: 'Criuleni',
        },
        {
            city: [ 
                    'Bender City Council', 
                    ],
            state: [ 
                    'Pridnestrovie',
                    ],
            result: 'Bender',
        },
    ],
    'Montenegro': [
        {
            city: [ 
                    'Seoca', 
                    ],
            state: [ 
                    'Budva Municipality',
                    ],
            result: 'Budva',
        },
        {
            city: [ 
                    'Bigova', 
                    ],
            state: [ 
                    'Kotor Municipality',
                    ],
            result: 'Kotor',
        },
    ],
    'New Zealand': [
        { 
            city: [
                    'Maungakiekie-Tāmaki',
                    ],
            state: [
                    'Auckland',
                    ],
            result: 'Auckland',
        },
    ],
    'Netherlands': [
        { 
            city: [
                    'Rutten',
                    ],
            state: [
                    'Flevoland',
                    ],
            result: 'Emmeloord',
        },
        { 
            city: [
                    'Deventer',
                    ],
            state: [
                    'Overijssel',
                    ],
            result: 'Zwolle',
        },
        { 
            city: [
                    'Hulst',
                    ],
            state: [
                    'Zeeland',
                    ],
            result: 'Middelburg',
        },
        { 
            city: [
                    'Barendrecht',
                    ],
            state: [
                    'South Holland',
                    ],
            result: 'Rotterdam',
        },
        { 
            city: [
                    'Amstelveen',
                    ],
            state: [
                    'North Holland',
                    ],
            result: 'Amsterdam',
        },
        { 
            city: [
                    'Tiel',
                    ],
            state: [
                    'Gelderland',
                    ],
            result: 'Arnhem',
        },
    ],
    'Norway': [
        { 
            city: [
                    'Rælingen',
                    'Nesoddtangen',
                    ],
            state: [
                    'Øgardshøgda',
                    'Akershus',
                    ],
            result: 'Oslo',
        },
        { 
            city: [
                    'Stokke',
                    ],
            state: [
                    'Vestfold',
                    ],
            result: 'Tønsberg',
        },
    ],
    'Philippines': [
        {
            city: [ 
                    'Quezon City',
                    'Makati',
                    'Pasay',
                    ],
            state: [
                    'Metro Manila',
                    ],
            result: 'Manila',
        },
        {
            city: [ 
                    'Silang',
                    ],
            state: [
                    'Cavite',
                    ],
            result: 'Imus',
        },
        {
            city: [ 
                    'Puerto Galera',
                    ],
            state: [
                    'Oriental Mindoro',
                    ],
            result: 'Calapan',
        },
    ],
    'Poland': [
        {
            city: [ 
                    'Klecza Górna',
                    'Klecza Dolna',
                    ],
            state: [
                    'Lesser Poland Voivodeship',
                    ],
            result: 'Wadowice',
        },
        {
            city: [ 
                    'Krynice',
                    'Hrebenne',
                    ],
            state: [
                    'Lublin Voivodeship',
                    ],
            result: 'Tomaszów Lubelski',
        },
        {
            city: [ 
                    'Długie',
                    ],
            state: [
                    'Lublin Voivodeship',
                    ],
            result: 'Lublin',
        },
        {
            city: [ 
                    'Ząbki',
                    'Kotowice',
                    ],
            state: [
                    'Masovian Voivodeship',
                    ],
            result: 'Warsaw',
        },
        {
            city: [ 
                    'Stanisławów Pierwszy',
                    ],
            state: [
                    'Masovian Voivodeship',
                    ],
            result: 'Legionowo',
        },
        {
            city: [ 
                    'Szczęsna', 
                    'Wola Worowska', 
                    ],
            state: [
                    'Masovian Voivodeship',
                    ],
            result: 'Gróejc',
        },
        {
            city: [ 
                    'Milanówek', 
                    ],
            state: [
                    'Masovian Voivodeship',
                    ],
            result: 'Grodzisk Mazowiecki',
        },
        {
            city: [ 
                    'Latchorzew', 
                    ],
            state: [
                    'Masovian Voivodeship',
                    ],
            result: 'Ożarów Mazowiecki',
        },
        {
            city: [ 
                    'Skarżysko-Kamienna',
                    'Sielpia Wielka',
                    ],
            state: [
                    'Holy Cross Voivodeship',
                    ],
            result: 'Kielce',
        },
        {
            city: [ 
                    'Zwardoń',
                    ],
            state: [
                    'Silesian Voivodeship',
                    ],
            result: 'Żywiec',
        },
        {
            city: [ 
                    'Jastarnia',
                    ],
            state: [
                    'Pomeranian Voivodeship',
                    ],
            result: 'Puck',
        },
        {
            city: [ 
                    'Smolec',
                    ],
            state: [
                    'Lower Silesian Voivodeship',
                    ],
            result: 'Wroclaw',
        },
        {
            city: [ 
                    'Rewal',
                    'Dygowo',
                    ],
            state: [
                    'West Pomeranian Voivodeship',
                    ],
            result: 'Gryfice',
        },
        {
            city: [ 
                    'Piecnik',
                    ],
            state: [
                    'West Pomeranian Voivodeship',
                    ],
            result: 'Wałcz',
        },
    ],
    'Portugal': [
        {
            city: [ 
                    'Seixal', 
                    'Cascais', 
                    'Torres Vedras', 
                    ],
            state: [
                    'Álamo',
                    'Cova da Raposa',
                    'Santo António do Estoril',
                    'A dos Cunhados e Maceira',
                    ],
            result: 'Lisbon',
        },
        {
            city: [ 
                    'Ponta Delgada',
                    'Ribeira Grande',
                    ],
            state: [
                    'Azores',
                    'Vila Franca do Campo (São Miguel)',
                    ],
            result: 'Island São Miguel',
        },
        {
            city: [ 
                    'Amarante',
                    ],
            state: [
                    'Macieiras',
                    'Agramonte',
                    ],
            result: 'Porto',
        },
    ],
    'Russia': [
        {
            city: [
                    'Moskovsky Settlement',
                    'Solnechnogorsky District',
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
                    ], 
            state: [
                    'Moscow',
                    'Moscow Oblast',
                    ],
            result: 'Moscow',
        },
        {
            city: [ 
                    'Vniissok', 
                    'Борки',
                    "Zarech'e",
                    'Romashkovo',
                    'Сосны',
                    'Лапино',
                    'Nemchinovka',
                    'Novoivanovskoe',
                    'Одинцовский городской округ',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Odintsovo',
        },
        {
            city: [ 
                    'Клоково', 
                    ],
            state: [
                    'Moscow',
                    ],
            result: 'Troitsk',
        },
        {
            city: [ 
                    'Ivanteyevka',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Pushkino',
        },
        {
            city: [ 
                    'Детково', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Chekhov',
        },
        {
            city: [ 
                    'Ramensky District',
                    'Dergayevo',
                    "Il’inskiy",
                    'Вишняково',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Ramenskoye',
        },
        {
            city: [ 
                    'Mozhaysky District',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Mozhaisk',
        },
        {
            city: [ 
                    'Тараканово',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Solnechnogorsk',
        },
        {
            city: [ 
                    'Афанасово',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Klin',
        },
        {
            city: [ 
                    'Бурцево',
                    'Shakhovskaya Urban Okrug',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Shakhovskaya',
        },
        {
            city: [ 
                    'Likino-Dulyovo',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Orekhovo-Zuyevo',
        },
        {
            city: [ 
                    'Dmitrovsky District',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Dmitrov',
        },
        {
            city: [ 
                    'Pokrovskoe',
                    'Дачный КГБ',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Zvenigorod',
        },
        {
            city: [ 
                    'Novovolkovo',
                    'Городище',
                    'Dorokhovo',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Ruza',
        },
        {
            city: [ 
                    'Yurlovo',
                    'Мышецкое',
                    'Khimki Urban Okrug',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Khimki',
        },
        {
            city: [ 
                    'Мещерино', 
                    'Bulatnikovo', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Vidnoye',
        },
        {
            city: [ 
                    'Еремеево',
                    'Троица',
                    'Агрогородок',
                    'Агрогородок',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Istra',
        },
        {
            city: [ 
                    'Nagornoye', 
                    'Mytishchi Urban Okrug', 
                    'Никульское', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Mytishchi',
        },
        {
            city: [ 
                    'Наро-Фоминский городской округ', 
                    'Aprelevka', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Naro-Fominsk',
        },
        {
            city: [ 
                    'Козино', 
                    'Красный Посёлок', 
                    'Buzlanovo',
                    'Михалково',
                    'Krasnogorsky District',
                    'Putilkovo',
                    'Тимошкино',
                    'Отрадное',
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Krasnogorsk',
        },
        {
            city: [ 
                    'Барканово', 
                    'Peresvet', 
                    'Sergiyevo-Posadsky District', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Sergiyev Posad',
        },
        {
            city: [ 
                    'Bobrovo', 
                    'Александровка', 
                    'Novodrozhzhino', 
                    'Dubrovitsy', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Podolsk',
        },
        {
            city: [ 
                    'Voskresensky District', 
                    'Yurasovo', 
                    'Большое Колычево', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Voskresensk',
        },
        {
            city: [ 
                    'Подлипки', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Lukhovitsy',
        },
        {
            city: [ 
                    'Банино', 
                    'Protvino', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Serpukhov',
        },
        {
            city: [ 
                    'Medvezhyi Ozyora', 
                    'Zagoryanskiy', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Shchyolkovo',
        },
        {
            city: [ 
                    'Domodedovsky District', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Domodedovo',
        },
        {
            city: [ 
                    'Lytkarino', 
                    'Kraskovo', 
                    ],
            state: [
                    'Moscow Oblast',
                    ],
            result: 'Lyubertsy',
        },
        {
            city: [ 
                    'Andreyevka', 
                    ],
            state: [
                    'Moscow Oblast',
                    'Moscow',
                    ],
            result: 'Zelenograd',
        },
        {
            city: [ 
                    'Троицкое', 
                    ],
            state: [
                    'Kursk Oblast',
                    ],
            result: 'Zheleznogorsk',
        },
        {
            city: [ 
                    'Burachki', 
                    ],
            state: [
                    'Pskov Oblast',
                    ],
            result: 'Sebezh',
        },
        {
            city: [ 
                    'Беляницкое сельское поселение', 
                    ],
            state: [
                    'Ivanovo Oblast',
                    ],
            result: 'Ivanovo',
        },
        {
            city: [ 
                    'Таврово', 
                    ],
            state: [
                    'Belgorod Oblast',
                    ],
            result: 'Belgorod',
        },
        {
            city: [ 
                    'Толмачево', 
                    ],
            state: [
                    'Bryansk Oblast',
                    ],
            result: 'Bryansk',
        },
        {
            city: [ 
                    'Октябрьское сельское поселение', 
                    ],
            state: [
                    'Ulyanovsk Oblast',
                    ],
            result: 'Radishchevo',
        },
        {
            city: [ 
                    'сельское поселение Эльбрус', 
                    'Terskol', 
                    ],
            state: [
                    'Kabardino-Balkaria',
                    ],
            result: 'Tyrnyauz',
        },
        {
            city: [ 
                    'Мурзино', 
                    'сельское поселение Деревня Ерденево', 
                    ],
            state: [
                    'Kaluga Oblast',
                    ],
            result: 'Maloyaroslavets',
        },
        {
            city: [ 
                    'городское поселение Белоусово', 
                    ],
            state: [
                    'Kaluga Oblast',
                    ],
            result: 'Zhukov',
        },
        {
            city: [ 
                    'Волковское', 
                    ],
            state: [
                    'Kaluga Oblast',
                    ],
            result: 'Tarusa',
        },
        {
            city: [ 
                    'Новомихайловское', 
                    'Совхоз "Боровский"', 
                    ],
            state: [
                    'Kaluga Oblast',
                    ],
            result: 'Borovsk',
        },
        {
            city: [
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
                    ],
            state: [
                    'Saint Petersburg',
                    'Leningrad Oblast',
                    'Leningrad oblast',
                    ],
            result: 'Saint Petersburg',
        },
        {
            city: [ 
                    'Toksovo', 
                    'Агалатовское сельское поселение', 
                    'Новосергиевка', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Vsevolozhsk',
        },
        {
            city: [ 
                    'Koporye', 
                    'Низинское сельское поселение', 
                    ],
            state: [
                    'Leningrad oblast',
                    'Leningrad Oblast',
                    ],
            result: 'Lomonosov',
        },
        {
            city: [ 
                    'Царицыно Озеро', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Tikhvin',
        },
        {
            city: [ 
                    'Otradnoye', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Kirovsk',
        },
        {
            city: [ 
                    'Ivangorod', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Kingisepp',
        },
        {
            city: [ 
                    'Старая Серёдка', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Luga',
        },
        {
            city: [ 
                    'Nikolskoye', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Tosno',
        },
        {
            city: [ 
                    'Лидь', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Lid',
        },
        {
            city: [ 
                    'Подпорожское городское поселение', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Podporozhye',
        },
        {
            city: [ 
                    'Дружногорское городское поселение', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Gatchina',
        },
        {
            city: [ 
                    'Петровское сельское поселение', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Priozersk',
        },
        {
            city: [ 
                    'Глажевское сельское поселение', 
                    ],
            state: [
                    'Leningrad Oblast',
                    ],
            result: 'Kirishi',
        },
        {
            city: [ 
                    'Деревянское сельское поселение', 
                    ],
            state: [
                    'Republic of Karelia',
                    ],
            result: 'Petrozavodsk',
        },
        {
            city: [ 
                    'Поляны', 
                    ],
            state: [
                    'Ryazan Oblast',
                    ],
            result: 'Ryazan',
        },
        {
            city: [ 
                    'Syntul', 
                    ],
            state: [
                    'Ryazan Oblast',
                    ],
            result: 'Kasimov',
        },
        {
            city: [ 
                    'Novomichurinsk', 
                    ],
            state: [
                    'Ryazan Oblast',
                    ],
            result: 'Pronsk',
        },
        {
            city: [ 
                    'Курджиново', 
                    'Ершов', 
                    ],
            state: [
                    'Karachay-Cherkessia',
                    ],
            result: 'Pregradnaya',
        },
        {
            city: [ 
                    'Семеновское', 
                    ],
            state: [
                    'Tver Oblast',
                    ],
            result: 'Tver',
        },
        {
            city: [ 
                    'Щеколдино', 
                    ],
            state: [
                    'Tver Oblast',
                    ],
            result: 'Zubtsov',
        },
        {
            city: [ 
                    'Berezayka', 
                    ],
            state: [
                    'Tver Oblast',
                    ],
            result: 'Bologoe',
        },
        {
            city: [ 
                    'Varaksino', 
                    ],
            state: [
                    'Tver Oblast',
                    ],
            result: 'Konakovo',
        },
        {
            city: [ 
                    'Shakin',
                    ],
            state: [
                    'Volgograd Oblast',
                    ],
            result: 'Kumylzhenskaya',
        },
        {
            city: [ 
                    'Dubovka',
                    ],
            state: [
                    'Volgograd Oblast',
                    ],
            result: 'Volgograd',
        },
        {
            city: [ 
                    'Виновка',
                    ],
            state: [
                    'Volgograd Oblast',
                    ],
            result: 'Gorodische',
        },
        {
            city: [ 
                    "Velikiy Oktyabr'",
                    ],
            state: [
                    'Volgograd Oblast',
                    ],
            result: 'Srednyaya Akhtuba',
        },
        {
            city: [ 
                    'Гизельское сельское поселение',
                    ],
            state: [
                    'Republic of North Ossetia – Alania',
                    ],
            result: 'Vladikavkaz',
        },
        {
            city: [ 
                    'Вухтым',
                    ],
            state: [
                    'Komi Republic',
                    ],
            result: 'Objachevo',
        },
        {
            city: [ 
                    'Engels',
                    ],
            state: [
                    'Saratov Oblast',
                    ],
            result: 'Saratov',
        },
        {
            city: [ 
                    'Bagrationovsky District', 
                    'Переславское',
                    'Krasnopolye',
                    'Черёмхово',
                    'Медведевка',
                    'Bolshoye Isakovo',
                    'Холмогоровка',
                    ],
            state: [
                    'Kaliningrad',
                    ],
            result: 'Kaliningrad',
        },
        {
            city: [ 
                    'Бор', 
                    'Заволжское сельское поселение',
                    'Григорьевское',
                    'Кузнечихинское сельское поселение',
                    'Лютово',
                    ],
            state: [
                    'Yaroslavl Oblast',
                    ],
            result: 'Yaroslavl',
        },
        {
            city: [ 
                    'Фоминское', 
                    ],
            state: [
                    'Yaroslavl Oblast',
                    ],
            result: 'Tutaev',
        },
        {
            city: [ 
                    'Троицкая Слобода', 
                    ],
            state: [
                    'Yaroslavl Oblast',
                    ],
            result: 'Pereslavl-Zalessky',
        },
        {
            city: [ 
                    'Назарово', 
                    'Назаровское сельское поселение', 
                    ],
            state: [
                    'Yaroslavl Oblast',
                    ],
            result: 'Rybinsk',
        },
        {
            city: [ 
                    'Апраксинское сельское поселение',
                    ],
            state: [
                    'Kostroma Oblast',
                    ],
            result: 'Kostroma',
        },
        {
            city: [ 
                    'Анкудиновка', 
                    'Подновье', 
                    'Bor', 
                    ],
            state: [
                    'Nizhny Novgorod Oblast',
                    ],
            result: 'Nizhny Novgorod',
        },
        {
            city: [ 
                    'Зубово', 
                    ],
            state: [
                    'Nizhny Novgorod Oblast',
                    ],
            result: 'Gorodets',
        },
        {
            city: [ 
                    'Хабарское', 
                    ],
            state: [
                    'Nizhny Novgorod Oblast',
                    ],
            result: 'Dzerzhinsk',
        },
        {
            city: [ 
                    'Дьяково', 
                    ],
            state: [
                    'Nizhny Novgorod Oblast',
                    ],
            result: 'Semyonov',
        },
        {
            city: [ 
                    'Афонино', 
                    'Черемисское', 
                    ],
            state: [
                    'Nizhny Novgorod Oblast',
                    ],
            result: 'Kstovo',
        },
        {
            city: [ 
                    'Kuyuki',
                    'Сокуры',
                    'Набережно-Морквашское сельское поселение',
                    'Семиозерское сельское поселение',
                    ],
            state: [
                    'Tatarstan',
                    ],
            result: 'Kazan',
        },
        {
            city: [ 
                    'Биклянское сельское поселение',
                    ],
            state: [
                    'Tatarstan',
                    ],
            result: 'Naberezhnye Chelny',
        },
        {
            city: [ 
                    'Верхнеуслонское сельское поселение',
                    ],
            state: [
                    'Tatarstan',
                    ],
            result: 'Verhnij Uslon',
        },
        {
            city: [ 
                    'Лекаревское сельское поселение',
                    ],
            state: [
                    'Tatarstan',
                    ],
            result: 'Yelabuga',
        },
        {
            city: [ 
                    'Балгазын', 
                    ],
            state: [
                    'Tuva Republic',
                    ],
            result: 'Balgazyn',
        },
        {
            city: [ 
                    'Khvoyninsky District', 
                    ],
            state: [
                    'Novgorod Oblast',
                    ],
            result: 'Khvoynaya',
        },
        {
            city: [ 
                    'Bessonovka', 
                    ],
            state: [
                    'Penza Oblast',
                    ],
            result: 'Penza',
        },
        {
            city: [ 
                    'Июс', 
                    ],
            state: [
                    'Republic of Khakassia',
                    ],
            result: 'Kopyovo',
        },
        {
            city: [ 
                    'Калинино', 
                    'Калининский сельсовет', 
                    'Московский сельсовет', 
                    'Чапаево', 
                    ],
            state: [
                    'Republic of Khakassia',
                    ],
            result: 'Ust-Abakan',
        },
        {
            city: [ 
                    'сельское поселение Александровка', 
                    'сельское поселение Подстёпки', 
                    'сельское поселение Приморский', 
                    'сельское поселение Васильевка', 
                    'Tolyatti',
                    'Zolnoe',
                    'Bakhilova Polyana', 
                    ],
            state: [
                    'Samara Oblast',
                    ],
            result: 'Togliatti',
        },
        {
            city: [ 
                    'Stroykeramika',
                    'Novokuybyshevsk',
                    'Smyshlyayevka',
                    'Berezovyy Gay',
                    'городское поселение Новосемейкино', 
                    ],
            state: [
                    'Samara Oblast',
                    ],
            result: 'Samara',
        },
        {
            city: [  
                    'Starosemeykino', 
                    ],
            state: [
                    'Samara Oblast',
                    ],
            result: 'Krasnyy Yar',
        },
        {
            city: [ 
                    'Bely Yar', 
                    'сельское поселение Солнечный', 
                    ],
            state: [
                    'Khanty-Mansiysk Autonomous Okrug – Ugra',
                    ],
            result: 'Surgut',
        },
        {
            city: [ 
                    'Nyagan', 
                    ],
            state: [
                    'Khanty-Mansiysk Autonomous Okrug – Ugra',
                    ],
            result: "Oktyabr'skoe",
        },
        {
            city: [ 
                    'Isluchinsk', 
                    'Megion', 
                    ],
            state: [
                    'Khanty-Mansiysk Autonomous Okrug – Ugra',
                    ],
            result: 'Nizhnevartovsk',
        },
        {
            city: [ 
                    'Taydakovo', 
                    ],
            state: [
                    'Tula Oblast',
                    ],
            result: 'Yasnogorsk',
        },
        {
            city: [ 
                    'Schokino', 
                    ],
            state: [
                    'Tula Oblast',
                    ],
            result: 'Tula',
        },
        {
            city: [ 
                    'Урусово', 
                    ],
            state: [
                    'Tula Oblast',
                    ],
            result: 'Venyov',
        },
        {
            city: [ 
                    'Селецкое сельское поселение', 
                    ],
            state: [
                    'Vladimir Oblast',
                    ],
            result: 'Vladimir',
        },
        {
            city: [ 
                    'Радужный', 
                    ],
            state: [
                    'Vladimir Oblast',
                    ],
            result: 'Raduzhny',
        },
        {
            city: [ 
                    'Струнино', 
                    ],
            state: [
                    'Vladimir Oblast',
                    ],
            result: 'Alexandrov',
        },
        {
            city: [ 
                    'Pokrov',
                    'Болдино',
                    'Петушинское сельское поселение',
                    'Нагорный',
                    ],
            state: [
                    'Vladimir Oblast',
                    ],
            result: 'Petushki',
        },
        {
            city: [ 
                    'Кипревское сельское поселение', 
                    ],
            state: [
                    'Vladimir Oblast',
                    ],
            result: 'Kirzhach',
        },
        {
            city: [ 
                    'Вишняково', 
                    ],
            state: [
                    'Vladimir Oblast',
                    ],
            result: 'Sobinka',
        },
        {
            city: [ 
                    'Усть-Утяк', 
                    ],
            state: [
                    'Kurgan Oblast',
                    ],
            result: 'Kurgan',
        },
        {
            city: [ 
                    'Русско-Лашминское сельское поселение', 
                    ],
            state: [
                    'Republic of Mordovia',
                    ],
            result: 'Kovylkino',
        },
        {
            city: [ 
                    'Акшенас', 
                    ],
            state: [
                    'Republic of Mordovia',
                    ],
            result: 'Ruzaevka',
        },
        {
            city: [ 
                    'Анна', 
                    ],
            state: [
                    'Voronezh Oblast',
                    ],
            result: 'Anna',
        },
        {
            city: [ 
                    'Петропавловское сельское поселение', 
                    ],
            state: [
                    'Voronezh Oblast',
                    ],
            result: 'Liski',
        },
        {
            city: [ 
                    'Горки', 
                    ],
            state: [
                    'Voronezh Oblast',
                    ],
            result: 'Novaya Usman',
        },
        {
            city: [ 
                    'Подгоренское сельское поселение', 
                    ],
            state: [
                    'Voronezh Oblast',
                    ],
            result: 'Rossosh',
        },
        {
            city: [ 
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
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Sochi',
        },
        {
            city: [ 
                    'Джубгское городское поселение',
                    'Dzhubga',
                    'посёлок турбазы "Приморская"',
                    'Lermontovo',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Tuapse',
        },
        {
            city: [ 
                    'Shirvanskaya',
                    'Khadyzhensk',
                    'Mezmay',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Apsheronsk',
        },
        {
            city: [ 
                    'Sukko',
                    'городской округ Новороссийск',
                    'Abrau-Dyurso',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Novorossiysk',
        },
        {
            city: [ 
                    'Rassvet',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Anapa',
        },
        {
            city: [ 
                    'Газырское сельское поселение',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Vyselki',
        },
        {
            city: [ 
                    'Кущёвское сельское поселение',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Kushchovskaya',
        },
        {
            city: [ 
                    'Nizhnebakanskaya',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Krymsk',
        },
        {
            city: [ 
                    'Прикубанский округ',
                    'Yelizavetinskaya',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Krasnodar',
        },
        {
            city: [ 
                    'Novopetrovskaya',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Pavlovskaya',
        },
        {
            city: [ 
                    'Saratovskaya',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Goryachiy Klyuch',
        },
        {
            city: [ 
                    'Afipskiy',
                    'Ilskiy',
                    'Ubinskaya',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Severskaya',
        },
        {
            city: [ 
                    'Новоукраинское сельское поселение',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Gulkevichi',
        },
        {
            city: [ 
                    'Прикубанское сельское поселение',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Slavyansk-na-Kubani',
        },
        {
            city: [ 
                    'Arkhipo-Osipovka',
                    'Krinitsa',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Gelendzhik',
        },
        {
            city: [ 
                    'Veselovka',
                    'Голубицкое сельское поселение',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Temryuk',
        },
        {
            city: [ 
                    'Платнировское сельское поселение',
                    ],
            state: [
                    'Krasnodar Krai',
                    ],
            result: 'Korenovsk',
        },
        {
            city: [ 
                    'Novaya Adygeya',
                    'Yablonovskiy',
                    'Старобжегокайское сельское поселение',
                    ],
            state: [
                    'Republic of Adygea',
                    ],
            result: 'Takhtamukai',
        },
        {
            city: [ 
                    'Kamennomostskiy',
                    ],
            state: [
                    'Republic of Adygea',
                    ],
            result: 'Maykop',
        },
        {
            city: [ 
                    'Михновское сельское поселение', 
                    'Хохловское сельское поселение', 
                    'Koryuzino', 
                    ],
            state: [
                    'Smolensk Oblast',
                    ],
            result: 'Smolensk',
        },
        {
            city: [ 
                    'Krasniy Yar', 
                    ],
            state: [
                    'Altai Krai',
                    ],
            result: 'Biysk',
        },
        {
            city: [ 
                    'Айский сельсовет', 
                    ],
            state: [
                    'Altai Krai',
                    ],
            result: 'Altayskoye',
        },
        {
            city: [ 
                    'Новая Чемровка', 
                    'Зональное', 
                    ],
            state: [
                    'Altai Krai',
                    ],
            result: 'Zonalnoe',
        },
        {
            city: [ 
                    'Айский сельсовет', 
                    ],
            state: [
                    'Altai Krai',
                    ],
            result: 'Altayskoye',
        },
        {
            city: [ 
                    'Firsovo', 
                    ],
            state: [
                    'Altai Krai',
                    ],
            result: 'Novoaltaysk',
        },
        {
            city: [ 
                    'Артыбашское сельское поселение', 
                    ],
            state: [
                    'Altai Republic',
                    ],
            result: 'Turochak',
        },
        {
            city: [ 
                    'Turbaza Katun', 
                    'Elekmonar', 
                    ],
            state: [
                    'Altai Republic',
                    ],
            result: 'Chemal',
        },
        {
            city: [ 
                    'Terekta',
                    ],
            state: [
                    'Altai Republic',
                    ],
            result: 'Ust-Koksa',
        },
        {
            city: [ 
                    'Mayma', 
                    ],
            state: [
                    'Altai Republic',
                    ],
            result: 'Gorno-Altaysk',
        },
        {
            city: [ 
                    'Khmeli', 
                    'Объект КРП', 
                    'Ясыри', 
                    'Krasnokamsk', 
                    ],
            state: [
                    'Perm Krai',
                    ],
            result: 'Perm',
        },
        {
            city: [ 
                    'Krasnoyarsk Urban Okrug', 
                    'Еловое', 
                    ],
            state: [
                    'Krasnoyarsk Krai',
                    ],
            result: 'Krasnoyarsk',
        },
        {
            city: [ 
                    'городской округ Норильск', 
                    ],
            state: [
                    'Krasnoyarsk Krai',
                    ],
            result: 'Norilsk',
        },
        {
            city: [ 
                    'Есаульский сельсовет', 
                    ],
            state: [
                    'Krasnoyarsk Krai',
                    ],
            result: 'Beryozovka',
        },
        {
            city: [ 
                    'городское поселение Емельяново', 
                    ],
            state: [
                    'Krasnoyarsk Krai',
                    ],
            result: 'Yemelyanovo',
        },
        {
            city: [ 
                    'Араданский сельсовет', 
                    ],
            state: [
                    'Krasnoyarsk Krai',
                    ],
            result: 'Aradan',
        },
        {
            city: [ 
                    'Verkhnyaya Pyshma', 
                    'Beryozovsky',
                    'Прохладный',
                    'Сагра',
                    'Патруши',
                    'Исток',
                    ],
            state: [
                    'Sverdlovsk Oblast',
                    ],
            result: 'Yekaterinburg',
        },
        {
            city: [ 
                    'городской округ Сухой Лог', 
                    ],
            state: [
                    'Sverdlovsk Oblast',
                    ],
            result: 'Sukhoy Log',
        },
        {
            city: [ 
                    'Черноисточинск', 
                    ],
            state: [
                    'Sverdlovsk Oblast',
                    ],
            result: 'Nizhny Tagil',
        },
        {
            city: [ 
                    'Курганово', 
                    ],
            state: [
                    'Sverdlovsk Oblast',
                    ],
            result: 'Polevskoy',
        },
        {
            city: [ 
                    'Аятское', 
                    ],
            state: [
                    'Sverdlovsk Oblast',
                    ],
            result: 'Nevyansk',
        },
        {
            city: [ 
                    'Кисловское', 
                    ],
            state: [
                    'Sverdlovsk Oblast',
                    ],
            result: 'Kamensk-Uralsky',
        },
        {
            city: [ 
                    'городской округ Первоуральск', 
                    ],
            state: [
                    'Sverdlovsk Oblast',
                    ],
            result: 'Pervouralsk',
        },
        {
            city: [ 
                    'Малое Седельниково', 
                    'Бобровский', 
                    'Aramil', 
                    ],
            state: [
                    'Sverdlovsk Oblast',
                    ],
            result: 'Sysert',
        },
        {
            city: [ 
                    'Князе-Волконское', 
                    ],
            state: [
                    'Khabarovsk Krai',
                    ],
            result: 'Knyaze-Volkonskoe',
        },
        {
            city: [ 
                    'Приамурский', 
                    ],
            state: [
                    'Jewish Autonomous Oblast',
                    ],
            result: 'Khabarovsk',
        },
        {
            city: [ 
                    'Большеустьикинское', 
                    'Ишалино', 
                    ],
            state: [
                    'Bashkortostan',
                    ],
            result: 'Bolsheustyikinskoye',
        },
        {
            city: [ 
                    'Salavat', 
                    'Наумовка', 
                    ],
            state: [
                    'Bashkortostan',
                    ],
            result: 'Sterlitamak',
        },
        {
            city: [ 
                    'Чулпан', 
                    ],
            state: [
                    'Bashkortostan',
                    ],
            result: 'Maloyaz',
        },
        {
            city: [ 
                    'Зелёная Поляна', 
                    'Аскарово', 
                    ],
            state: [
                    'Bashkortostan',
                    ],
            result: 'Askarovo',
        },
        {
            city: [ 
                    'Mikhailovka', 
                    'Булгаковский сельсовет', 
                    ],
            state: [
                    'Bashkortostan',
                    ],
            result: 'Ufa',
        },
        {
            city: [ 
                    'Старокурмашево', 
                    ],
            state: [
                    'Bashkortostan',
                    ],
            result: 'Kushnarenkovo',
        },
        {
            city: [ 
                    'Sibay', 
                    ],
            state: [
                    'Bashkortostan',
                    ],
            result: 'Baymak',
        },
        {
            city: [ 
                    'Вербилово', 
                    ],
            state: [
                    'Lipetsk Oblast',
                    ],
            result: 'Lipetsk',
        },
        {
            city: [ 
                    'Stanovlyansky District', 
                    ],
            state: [
                    'Lipetsk Oblast',
                    ],
            result: 'Stanovoye',
        },
        {
            city: [ 
                    'Dvurechki', 
                    'Kamennoe', 
                    ],
            state: [
                    'Lipetsk Oblast',
                    ],
            result: 'Gryazi',
        },
        {
            city: [ 
                    'Ленина', 
                    'Подгородне-Покровский сельсовет', 
                    'Подгородняя Покровка', 
                    ],
            state: [
                    'Orenburg Oblast',
                    ],
            result: 'Orenburg',
        },
        {
            city: [ 
                    'Сакмарский сельсовет', 
                    'Татаро-Каргалинский сельсовет', 
                    ],
            state: [
                    'Orenburg Oblast',
                    ],
            result: 'Sakmara',
        },
        {
            city: [ 
                    'Бугуруслан', 
                    ],
            state: [
                    'Orenburg Oblast',
                    ],
            result: 'Buguruslan',
        },
        {
            city: [ 
                    'Rastopulovka', 
                    ],
            state: [
                    'Astrakhan Oblast',
                    ],
            result: 'Astrakhan',
        },
        {
            city: [ 
                    'Mikhaylovsk', 
                    'Ленинский район',
                    'Подлужное',
                    ],
            state: [
                    'Stavropol Krai',
                    ],
            result: 'Stavropol',
        },
        {
            city: [ 
                    'Goryachevodsky', 
                    'Novaya Proletarka',
                    'Подгорная',
                    'Inozemtsevo',
                    'Zheleznovodsk',
                    'Lermontov',
                    'Верблюдогорка',
                    'Kislovodsk',
                    ],
            state: [
                    'Stavropol Krai',
                    ],
            result: 'Pyatigorsk',
        },
        {
            city: [ 
                    'Каясула',
                    'Abdul-Gazy',
                    ],
            state: [
                    'Stavropol Krai',
                    ],
            result: 'Neftekumsk',
        },
        {
            city: [ 
                    'Budyonnovsky District',
                    ],
            state: [
                    'Stavropol Krai',
                    ],
            result: 'Budyonnovsk',
        },
        {
            city: [ 
                    'Levokumsky District',
                    ],
            state: [
                    'Stavropol Krai',
                    ],
            result: 'Levokumskoye',
        },
        {
            city: [ 
                    'Bezopasnoye',
                    ],
            state: [
                    'Stavropol Krai',
                    ],
            result: 'Donskoye',
        },
        {
            city: [ 
                    'Грушевское сельское поселение', 
                    'Большелогское сельское поселение', 
                    'Большой Лог',
                    'Olginskaya',
                    ],
            state: [
                    'Rostov Oblast',
                    ],
            result: 'Rostov-on-Don',
        },
        {
            city: [ 
                    'Ленина', 
                    ],
            state: [
                    'Rostov Oblast',
                    ],
            result: 'Aksay',
        },
        {
            city: [ 
                    'Пролетарское сельское поселение', 
                    ],
            state: [
                    'Rostov Oblast',
                    ],
            result: 'Shakhty',
        },
        {
            city: [ 
                    'Anikin', 
                    ],
            state: [
                    'Rostov Oblast',
                    ],
            result: 'Kamensk-Shakhtinsky',
        },
        {
            city: [ 
                    'Zhukovskoye', 
                    ],
            state: [
                    'Rostov Oblast',
                    ],
            result: 'Peschanokopskoye',
        },
        {
            city: [ 
                    'Пиховкинское сельское поселение', 
                    ],
            state: [
                    'Rostov Oblast',
                    ],
            result: 'Glubokiy',
        },
        {
            city: [ 
                    'Komarovka',
                    'Taganrog City District', 
                    ],
            state: [
                    'Rostov Oblast',
                    ],
            result: 'Taganrog',
        },
        {
            city: [ 
                    'Паренкина', 
                    ],
            state: [
                    'Tyumen Oblast',
                    ],
            result: 'Tyumen',
        },
        {
            city: [ 
                    'Малая Куйсарина',
                    'Kusa',
                    ],
            state: [
                    'Chelyabinsk Oblast',
                    ],
            result: 'Miass',
        },
        {
            city: [ 
                    'Oshurga', 
                    ],
            state: [
                    'Mari El Republic',
                    ],
            result: 'Yoshkar-Ola',
        },
        {
            city: [ 
                    'Изи Кугунур', 
                    ],
            state: [
                    'Mari El Republic',
                    ],
            result: 'Sovetskiy',
        },
        {
            city: [ 
                    'Aeroport', 
                    'Zonalnaya Stantsiya', 
                    'Naumovka', 
                    ],
            state: [
                    'Tomsk Oblast',
                    ],
            result: 'Tomsk',
        },
        {
            city: [ 
                    'Богословское сельское поселение',
                    'Андреевское сельское поселение',
                    'Troitskoye', 
                    ],
            state: [
                    'Omsk Oblast',
                    ],
            result: 'Omsk',
        },
        {
            city: [ 
                    'Бергамакское сельское поселение',
                    ],
            state: [
                    'Omsk Oblast',
                    ],
            result: 'Muromtsevo',
        },
        {
            city: [ 
                    'Смычка', 
                    ],
            state: [
                    'Tambov Oblast',
                    ],
            result: 'Tambov',
        },
        {
            city: [ 
                    'Michurinsky District', 
                    ],
            state: [
                    'Tambov Oblast',
                    ],
            result: 'Michurinsk',
        },
        {
            city: [ 
                    'Забайкальский',
                    ],
            state: [
                    'Zabaykalsky Krai',
                    ],
            result: 'Chita',
        },
        {
            city: [ 
                    'Катайск',
                    ],
            state: [
                    'Kurgan Oblast',
                    ],
            result: 'Katajsk',
        },
        {
            city: [ 
                    'Октябрьский район',
                    'Kostino',
                    'Подберёзы',
                    'Pasegovo',
                    ],
            state: [
                    'Kirov Oblast',
                    ],
            result: 'Kirov',
        },
        {
            city: [ 
                    'Шиховское сельское поселение',
                    ],
            state: [
                    'Kirov Oblast',
                    ],
            result: 'Slobodskoy',
        },
        {
            city: [ 
                    'Ангарский городской округ',
                    'Новая Разводная',
                    'Хомутовское сельское поселение',
                    'Markova',
                    ],
            state: [
                    'Irkutsk Oblast',
                    ],
            result: 'Irkutsk',
        },
        {
            city: [ 
                    'Байкальское городское поселение',
                    ],
            state: [
                    'Irkutsk Oblast',
                    ],
            result: 'Slyudyanka',
        },
        {
            city: [ 
                    'Хазанское сельское поселение',
                    ],
            state: [
                    'Irkutsk Oblast',
                    ],
            result: 'Zima',
        },
        {
            city: [ 
                    'Kozlovka', 
                    ],
            state: [
                    'Chuvashia',
                    ],
            result: 'Volzhsk',
        },
        {
            city: [ 
                    'Tsivilsky District', 
                    'Хыркасы', 
                    ],
            state: [
                    'Chuvashia',
                    ],
            result: 'Cheboksary',
        },
        {
            city: [ 
                    'Leninskoye', 
                    'Berdsk municipality',
                    'Koltsovo',
                    ],
            state: [
                    'Novosibirsk Oblast',
                    ],
            result: 'Novosibirsk',
        },
        {
            city: [ 
                    'Металлплощадка', 
                    ],
            state: [
                    'Kemerovo Oblast–Kuzbass',
                    ],
            result: 'Kemerovo',
        },
        {
            city: [ 
                    'Sheregesh', 
                    ],
            state: [
                    'Kemerovo Oblast–Kuzbass',
                    ],
            result: 'Tashtagol',
        },
        {
            city: [ 
                    'Костенково', 
                    ],
            state: [
                    'Kemerovo Oblast–Kuzbass',
                    ],
            result: 'Novokuznetsk',
        },
        {
            city: [ 
                    'Vokhtoga', 
                    ],
            state: [
                    'Vologda Oblast',
                    ],
            result: 'Gryazovets',
        },
        {
            city: [ 
                    'Хламово', 
                    ],
            state: [
                    'Vologda Oblast',
                    ],
            result: 'Cherepovets',
        },
        {
            city: [ 
                    'Бережное', 
                    ],
            state: [
                    'Vologda Oblast',
                    ],
            result: 'Berezhnoe',
        },
        {
            city: [ 
                    'Steklyanuha', 
                    'Volno-Nadejdinskoe', 
                    'Russky', 
                    ],
            state: [
                    'Primorsky Krai',
                    ],
            result: 'Vladivostok',
        },
        {
            city: [ 
                    'Shkotovsky District',
                    ],
            state: [
                    'Primorsky Krai',
                    ],
            result: 'Shkotovo',
        },
        {
            city: [ 
                    'Bolon', 
                    ],
            state: [
                    'Khabarovsk Krai',
                    ],
            result: 'Amursk',
        },
        {
            city: [ 
                    'Alnashsky District', 
                    ],
            state: [
                    'Udmurtia',
                    ],
            result: 'Alnashi',
        },
    ],
    'Thailand': [
        {
            city: [ 
                    'Tong Yang', 
                    'Ko Samui', 
                    'Baan Tai', 
                    'Baan Bo Phut',
                    'Baan Plai Laem',
                    'Baan Lamai',
                    'Baan Taling Ngam',
                    'Baan Wang Ta Kien',
                    ],
            state: [
                    'Surat Thani Province',
                    ],
            result: 'Island Samui',
        },
        {
            city: [ 
                    'Si Sunthon',
                    'Talat Nuea',
                    'Ko Kaeo',
                    ],
            state: [
                    'Phuket Province',
                    ],
            result: 'Island Phuket',
        },
        {
            city: [ 
                    'Nong Prue Subdistrict',
                    'Bang Pu Subdistrict Municipality',
                    ],
            state: [
                    'Samut Prakan Province',
                    ],
            result: 'Samut Prakan',
        },
        {
            city: [ 
                    'Bang Nai Si',
                    ],
            state: [
                    'Phang-nga Province',
                    ],
            result: 'Takua Pa',
        },
        {
            city: [ 
                    'Baan Sri Thanu',
                    'Baan Chaloklum',
                    ],
            state: [
                    'Surat Thani Province',
                    ],
            result: 'Island Phangan',
        },
        {
            city: [ 
                    'Don Sak',
                    ],
            state: [
                    'Surat Thani Province',
                    ],
            result: 'Surat Thani',
        },
    ],
    'Turkey': [
        { 
            city: [
                    'Bornova',
                    'Çeşme',
                    ],
            state: [
                    'Izmir',
                    ],
            result: 'Izmir',
        }, 
        {
            city: [
                    'Maltepe',
                    ],
            state: [
                    'Istanbul',
                    ],
            result: 'Istanbul',
        },
        {
            city: [ 
                    'Aksu',
                    'Konyaaltı',
                    'Serik',
                    'Muratpaşa',
                    ],
            state: [
                    'Antalya',
                    ],
            result: 'Antalya',
        },
        {
            city: [ 
                    'Keçiören', 
                    ],
            state: [
                    'Ankara',
                    ],
            result: 'Ankara',
        },
        {
            city: [ 
                    'Bodrum',
                    'Marmaris',
                    ],
            state: [
                    'Muğla',
                    ],
            result: 'Muğla',
        },
        {
            city: [ 
                    'Meram',
                    ],
            state: [
                    'Konya',
                    ],
            result: 'Konya',
        },
        {
            city: [ 
                    'Çınarcık',
                    ],
            state: [
                    'Yalova',
                    ],
            result: 'Yalova Merkez',
        },
    ],
    'Slovakia': [
        {
            city: [ 
                    'Beňadiková', 
                    ],
            state: [
                    'Žilina',
                    ],
            result: 'Žilina',
        },
        {
            city: [ 
                    'Bernolákovo', 
                    ],
            state: [
                    'Bratislava',
                    ],
            result: 'Bratislava',
        },
    ],
    'Spain': [
        {
            city: [ 
                    'Lena', 
                    ],
            state: [
                    'Asturias',
                    ],
            result: 'Oviedo',
        },
        {
            city: [ 
                    'Torrelavega', 
                    ],
            state: [
                    'Cantabria',
                    ],
            result: 'Santander',
        },
        {
            city: [ 
                    'Pilar de la Horadada', 
                    'Torrevieja', 
                    ],
            state: [
                    'Valencian Community',
                    ],
            result: 'Orihuela',
        },
        {
            city: [ 
                    'Arroyo de la Miel-Benalmádena Costa', 
                    'Benahavís', 
                    ],
            state: [
                    'Andalusia',
                    ],
            result: 'Málaga',
        },
        {
            city: [ 
                    'Tejeda', 
                    ],
            state: [
                    'Las Palmas',
                    ],
            result: 'Las Palmas de Gran Canaria',
        },
        {
            city: [ 
                    'Lloret de Mar', 
                    'Vilanova i la Geltrú',
                    'Cubelles',  
                    ],
            state: [
                    'Catalonia',
                    ],
            result: 'Barcelona',
        },
    ],
    'Sri Lanka': [
        {
            city: [ 
                    'Goviyapana', 
                    'Bentota', 
                    ],
            state: [
                    'Southern Province',
                    ],
            result: 'Galle',
        },
        {
            city: [ 
                    'Pasikudah', 
                    ],
            state: [
                    'Eastern Province',
                    ],
            result: 'Batticaloa',
        },
        {
            city: [ 
                    'Ettukala', 
                    ],
            state: [
                    'Western Province',
                    ],
            result: 'Gampaha',
        },
    ],
    'Sweden': [
        {
            city: [ 
                    'Vega', 
                    ],
            state: [
                    'Hermanstorp',
                    ],
            result: 'Stockholm',
        },
        {
            city: [ 
                    'Mölndals kommun', 
                    'Öckerö', 
                    ],
            state: [
                    'Kärrahöjd',
                    'Heden',
                    ],
            result: 'Gothenburg',
        },
    ],
    'Switzerland': [
        {
            city: [ 
                    'Crans (VD)', 
                    ],
            state: [
                    'Vaud',
                    ],
            result: 'Geneva',
        },
        {
            city: [ 
                    'Echallens', 
                    ],
            state: [
                    'Vaud',
                    ],
            result: 'Lausanne',
        },
        {
            city: [ 
                    'Wetzikon (ZH)', 
                    ],
            state: [
                    'Zurich',
                    ],
            result: 'Zurich',
        },
        {
            city: [ 
                    'Büchel', 
                    'Kaltbrunn', 
                    'Bad Ragaz', 
                    ],
            state: [
                    'St. Gallen',
                    ],
            result: 'St. Gallen',
        },
        {
            city: [ 
                    'Udligenswil', 
                    ],
            state: [
                    'Lucerne',
                    ],
            result: 'Lucerne',
        },
        {
            city: [ 
                    'Grenchen', 
                    ],
            state: [
                    'Solothurn',
                    ],
            result: 'Solothurn',
        },
        {
            city: [ 
                    'Vorderthal', 
                    ],
            state: [
                    'Schwyz',
                    ],
            result: 'Schwyz',
        },
        {
            city: [ 
                    'Morcote',
                    'Muzzano',
                    ],
            state: [
                    'Ticino',
                    ],
            result: 'Bellinzona',
        },
    ],
    'Ukraine': [
        {
            city: [ 
                    'Tarasivka',
                    'Kotsiubynske',
                    'Kvitneve',
                    'Liutizh',
                    'Petropavlivska Borshchahivka',
                    'Sofiivska Borshchahivka',
                    'Hnidyn',
                    ],
            state: [
                    'Kyiv Oblast',
                    ],
            result: 'Kyiv',
        },
        {
            city: [ 
                    'Shchaslyve', 
                    'Hora', 
                    ],
            state: [
                    'Kyiv Oblast',
                    ],
            result: 'Boryspil',
        },
        {
            city: [ 
                    'Zazymia', 
                    ],
            state: [
                    'Kyiv Oblast',
                    ],
            result: 'Brovary',
        },
        {
            city: [ 
                    'Leonivka',
                    'Kozyn',  
                    'Krushynka',  
                    ],
            state: [
                    'Kyiv Oblast',
                    ],
            result: 'Obukhiv',
        },
        {
            city: [ 
                    'Kolonshchyna', 
                    'Pirnove Rural Hromada', 
                    ],
            state: [
                    'Kyiv Oblast',
                    ],
            result: 'Irpin',
        },
        {
            city: [ 
                    'Henzerivka', 
                    ],
            state: [
                    'Kyiv Oblast',
                    ],
            result: 'Yahotyn',
        },
        {
            city: [ 
                    'Rymachi',
                    ],
            state: [
                    'Volyn Oblast',
                    ],
            result: 'Liuboml',
        },
        {
            city: [ 
                    'Стеблівська селищна громада',
                    ],
            state: [
                    'Cherkasy Oblast',
                    ],
            result: 'Korsun-Shevchenkivskyi',
        },
        { 
            city: [ 
                    'Marianivka', 
                    ],
            state: [
                    'Zhytomyr Oblast',
                    ],
            result: 'Zviahel',
        }, 
        { 
            city: [ 
                    'Chornomorsk', 
                    'Авангардівська селищна громада', 
                    ],
            state: [
                    'Odesa Oblast',
                    ],
            result: 'Odesa',
        }, 
        { 
            city: [ 
                    'Plotsk', 
                    ],
            state: [
                    'Odesa Oblast',
                    ],
            result: 'Artsyz',
        }, 
        {
            city: [ 
                    'Obukhivka',
                    'Mykolaivka',
                    'Samar',
                    'Novomoskovsk',
                    'Обухівська селищна громада',
                    'Слобожанська селищна громада',
                    ],
            state: [
                    'Dnipropetrovsk Oblast',
                    ],
            result: 'Dnipro',
        },
        {
            city: [ 
                    'Чернеччинська сільська громада', ],
            state: [
                    'Dnipropetrovsk Oblast',
                    ],
            result: 'Chernechchyna',
        },
        {
            city: [ 
                    'Лозуватська сільська громада', 
                    ],
            state: [
                    'Dnipropetrovsk Oblast',
                    ],
            result: 'Kryvyi Rih',
        },
        {
            city: [ 
                    'Baburka', 
                    ],
            state: [
                    'Zaporizhia Oblast',
                    'Zaporizhzhia Oblast',
                    ],
            result: 'Zaporizhzhia',
        },
        {
            city: [ 
                    'Klymashivka', 
                    ],
            state: [
                    'Khmelnytskyi Oblast',
                    ],
            result: 'Khmelnytskyi',
        },
        {
            city: [ 
                    'Solomiivka', 
                    ],
            state: [
                    'Rivne Oblast',
                    ],
            result: 'Dubrovytsia',
        },
        {
            city: [ 
                    'Mala Liubasha Rural Hromada', 
                    ],
            state: [
                    'Rivne Oblast',
                    ],
            result: 'Kostopil',
        },
        {
            city: [ 
                    'Petrykiv', 
                    ],
            state: [
                    'Ternopil Oblast',
                    ],
            result: 'Ternopil',
        },
        {
            city: [ 
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
                    ],
            state: [
                    'Republic of Crimea',
                    'Autonomous Republic of Crimea',
                    ],
            result: 'Simferopol',
        },
        {
            city: [ 
                    'Керченский городской совет', 
                    'городской округ Керчь', 
                    ],
            state: [
                    'Autonomous Republic of Crimea',
                    'Republic of Crimea',
                    ],
            result: 'Kerch',
        },
        {
            city: [ 
                    'Koreiz', 
                    ],
            state: [
                    'Autonomous Republic of Crimea',
                    ],
            result: 'Alupka',
        },
        {
            city: [ 
                    'Novyi Svet', 
                    ],
            state: [
                    'Autonomous Republic of Crimea',
                    ],
            result: 'Sudak',
        },
        {
            city: [ 
                    'Voskhod',
                    'Massandra',
                    'Oliva',
                    ],
            state: [
                    'Autonomous Republic of Crimea',
                    ],
            result: 'Yalta',
        },
        {
            city: [ 
                    'городское поселение Щелкино', 
                    'Лениново сельское поселение', 
                    'Мысовское сельское поселение', 
                    ],
            state: [
                    'Autonomous Republic of Crimea',
                    ],
            result: 'Lenino',
        },
        {
            city: [ 
                    'Оленевское сельское поселение', 
                    ],
            state: [
                    'Republic of Crimea',
                    ],
            result: 'Chornomorskoe',
        },
        {
            city: [ 
                    'Zaozernoe',
                    'Окунёвское сельское поселение',
                    ],
            state: [
                    'Republic of Crimea',
                    ],
            result: 'Yevpatoriya',
        },
        {
            city: [ 
                    'Inkerman', 
                    'Сахарная Головка', 
                    'Балаклавский округ',
                    'Орлиновский округ',
                    ],
            state: [
                    'Sevastopol',
                    ],
            result: 'Sevastopol',
        },
        {
            city: [ 
                    'Velyke Kolodno', 
                    'Vynnyky', 
                    'Zhovkva', 
                    ],
            state: [
                    'Lviv Oblast',
                    ],
            result: 'Lviv',
        },
        {
            city: [ 
                    'Sokolivka', 
                    ],
            state: [
                    'Lviv Oblast',
                    ],
            result: 'Busk',
        },
        {
            city: [ 
                    'Silets', 
                    ],
            state: [
                    'Lviv Oblast',
                    ],
            result: 'Chervonohrad',
        },
        {
            city: [ 
                    'Starychi', 
                    ],
            state: [
                    'Lviv Oblast',
                    ],
            result: 'Yavoriv',
        },
        {
            city: [ 
                    'Solonka Rural Hromada', 
                    ],
            state: [
                    'Lviv Oblast',
                    ],
            result: 'Pustomyty',
        },
        {
            city: [ 
                    'Hranky-Kuty', 
                    'Slavsko', 
                    ],
            state: [
                    'Lviv Oblast',
                    ],
            result: 'Stryi',
        },
        {
            city: [ 
                    'Skole Urban Hromada',
                    ],
            state: [
                    'Lviv Oblast',
                    ],
            result: 'Skole',
        },
        {
            city: [ 
                    'Uhryniv', 
                    ],
            state: [
                    'Ivano-Frankivsk Oblast',
                    ],
            result: 'Ivano-Frankivsk',
        },
        {
            city: [ 
                    'Kryvopillia', 
                    'Iltsi', 
                    ],
            state: [
                    'Ivano-Frankivsk Oblast',
                    ],
            result: 'Verkhovyna',
        },
        {
            city: [ 
                    'Vorokhta', 
                    ],
            state: [
                    'Ivano-Frankivsk Oblast',
                    ],
            result: 'Nadvirna',
        },
        {
            city: [ 
                    'Poliana Rural Hromada', 
                    ],
            state: [
                    'Zakarpattia Oblast',
                    ],
            result: 'Mukachevo',
        },
        {
            city: [ 
                    'Poliana', 
                    ],
            state: [
                    'Zakarpattia Oblast',
                    ],
            result: 'Svaliava',
        },
        {
            city: [ 
                    'Huklyvyi', 
                    ],
            state: [
                    'Zakarpattia Oblast',
                    ],
            result: 'Volovets',
        },
        {
            city: [ 
                    'Poliana', 
                    ],
            state: [
                    'Zakarpattia Oblast',
                    ],
            result: 'Svaliava',
        },
        {
            city: [ 
                    'Huklyvyi', 
                    ],
            state: [
                    'Zakarpattia Oblast',
                    ],
            result: 'Volovets',
        },
        {
            city: [ 
                    'Solotvyno', 
                    ],
            state: [
                    'Zakarpattia Oblast',
                    ],
            result: 'Tiachiv',
        },
        {
            city: [ 
                    'Shestovytsia',
                    'Staryi Bilous',
                    ],
            state: [
                    'Chernihiv Oblast',
                    ],
            result: 'Chernihiv',
        },
        {
            city: [ 
                    'Вертіївська сільська громада', 
                    ],
            state: [
                    'Chernihiv Oblast',
                    ],
            result: 'Nizhyn',
        },
        {
            city: [ 
                    'Vasylivka', 
                    ],
            state: [
                    'Poltava Oblast',
                    ],
            result: 'Poltava',
        },
        {
            city: [ 
                    'Лубенська міська громада', 
                    ],
            state: [
                    'Poltava Oblast',
                    ],
            result: 'Lubny',
        },
        {
            city: [ 
                    'Bakhmutivka', 
                    ],
            state: [
                    'Luhansk Oblast',
                    ],
            result: 'Novoaidar',
        },
        {
            city: [ 
                    'Sorokyne', 
                    ],
            state: [
                    'Luhansk Oblast',
                    ],
            result: 'Krasnodon',
        },
        {
            city: [ 
                    'Dzerzhynskyi', 
                    ],
            state: [
                    'Luhansk Oblast',
                    ],
            result: 'Rovenky',
        },
        {
            city: [ 
                    'Korotych', 
                    'Pisochyn',
                    'Liubotyn',
                    ],
            state: [
                    'Kharkiv Oblast',
                    ],
            result: 'Kharkiv',
        },
        {
            city: [ 
                    'Kolisnykivka',
                    ],
            state: [
                    'Kharkiv Oblast',
                    ],
            result: 'Kupiansk',
        },
        {
            city: [ 
                    'Коблівська сільська громада', 
                    ],
            state: [
                    'Mykolaiv Oblast',
                    ],
            result: 'Yuzhne',
        },
        {
            city: [ 
                    'Kostiantynivka', 
                    ],
            state: [
                    'Donetsk Oblast',
                    ],
            result: 'Kramatorsk',
        },
        {
            city: [ 
                    'Manhush Settlement Hromada', 
                    ],
            state: [
                    'Donetsk Oblast',
                    ],
            result: 'Mariupol',
        },
        {
            city: [ 
                    'Niu-York', 
                    ],
            state: [
                    'Donetsk Oblast',
                    ],
            result: 'Horlivka',
        },
        {
            city: [ 
                    'Luzhany', 
                    ],
            state: [
                    'Chernivtsi Oblast',
                    ],
            result: 'Chernivtsi',
        },
        {
            city: [ 
                    'Strointsi', 
                    ],
            state: [
                    'Chernivtsi Oblast',
                    ],
            result: 'Novoselytsia',
        },
        {
            city: [ 
                    'Revne', 
                    ],
            state: [
                    'Chernivtsi Oblast',
                    ],
            result: 'Kitsman',
        },
    ],
    'United Arab Emirates': [
        {
            city: [ 
                    'Al Saadiyat Island', 
                    'Al Matar', 
                    ],
            state: [
                    'Abu Dhabi Emirate',
                    ],
            result: 'Abu Dhabi',
        },
        {
            city: [ 
                    'Dubai International Airport', 
                    'Business Bay', 
                    ],
            state: [
                    'Dubai',
                    ],
            result: 'Dubai',
        },
    ],
    'United Kingdom': [
        {
            city: [ 
                    'Gateshead', 
                    'Ryton', 
                    'Sunderland',
                    'Whickham',
                    'North Tyneside', 
                    'South Tyneside', 
                    ],
            state: [
                    'England',
                    ],
            result: 'Newcastle upon Tyne',
        },
        {
            city: [ 
                    'Woking', 
                    ],
            state: [
                    'England',
                    ],
            result: 'Guildford',
        },
        {
            city: [ 
                    'Larbert', 
                    ],
            state: [
                    'Scotland',
                    ],
            result: 'Glasgow',
        },
    ],
    'United States': [
        {
            city: [ 
                    'Madison County', 
                    'Anderson', 
                    ],
            state: [
                    'Indiana',
                    ],
            result: 'Indianapolis',
        },
        {
            city: [ 
                    'Abington Township', 
                    'Upper Moreland Township', 
                    ],
            state: [
                    'Pennsylvania',
                    ],
            result: 'Philadelphia',
        },
        {
            city: [ 
                    'Merrifield', 
                    ],
            state: [
                    'Virginia',
                    ],
            result: 'Fairfax',
        },
        {
            city: [ 
                    'Oxford', 
                    ],
            state: [
                    'Massachusetts',
                    ],
            result: 'Worcester',
        },
        {
            city: [ 
                    'Bella Vista', 
                    ],
            state: [
                    'Arkansas',
                    ],
            result: 'Bentonville',
        },
        {
            city: [ 
                    'Costa Mesa', 
                    'Irvine', 
                    ],
            state: [
                    'California',
                    ],
            result: 'Santa Ana',
        },
        {
            city: [ 
                    'Gwinnett County', 
                    ],
            state: [
                    'Georgia',
                    ],
            result: 'Lawrenceville',
        },
        {
            city: [ 
                    'Miami Beach', 
                    ],
            state: [
                    'Florida',
                    ],
            result: 'Miami',
        },
        {
            city: [ 
                    'Maud', 
                    ],
            state: [
                    'Mississippi',
                    ],
            result: 'Memphis',
        },
        {
            city: [ 
                    'Irving', 
                    ],
            state: [
                    'Texas',
                    ],
            result: 'Dallas',
        },
        {
            city: [ 
                    'Montgomery County', 
                    ],
            state: [
                    'Texas',
                    ],
            result: 'Conroe',
        },
        {
            city: [ 
                    'Dania Beach', 
                    ],
            state: [
                    'Florida',
                    ],
            result: 'Fort Lauderdale',
        },
    ],
    'Uzbekistan': [
        {
            city: [ 
                    'Salar', 
                    'Kyzyltog', 
                    ],
            state: [
                    'Tashkent Region',
                    ],
            result: 'Tashkent',
        },
        {
            city: [ 
                    'Samarkand City', 
                    ],
            state: [
                    'Samarqand Region',
                    ],
            result: 'Samarqand City',
        },
    ]
    
}

export { redefinition_city };