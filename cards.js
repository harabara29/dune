// Treachery cards. Descriptions are our own short restatements of how each card works, not card text.
// fields: en, ua, kind (see KINDS), set (see SETS), n (copies per set), when, does, after,
//         aka (other spellings for search and scanner), passive (effects that exist only while a faction is in the game), check (why to verify against the physical card)
window.KINDS={
  proj:'Зброя: снаряд',poison:'Зброя: отрута',special:'Зброя: особлива',
  dproj:'Захист від снарядів',dpoison:'Захист від отрути',dspecial:'Захист: особливий',
  leader:'Лідер',move:'Рух',storm:'Шторм',spice:'Спайс',revive:'Відродження',battle:'Бій',other:'Особлива',worthless:'Непотріб'
};
window.SETS={base:'Базова гра',ix:'Ixians & Tleilaxu',ric:'CHOAM & Richese',eca:'Ecaz & Moritani'};
(function(){
const PLAN='У бойовому плані.';
const KEEP='Перемога в бою: можеш залишити карту. Поразка: скидаєш.';
const USED='Скинь після використання.';
const proj=(en,ua,set,aka)=>({en,ua,kind:'proj',n:{[set]:1},when:PLAN,does:'Вбиває лідера суперника ще до підрахунку бою. Рятує тільки захист від снарядів, наприклад Shield.',after:KEEP,aka});
const pois=(en,ua,set,extra)=>({en,ua,kind:'poison',n:{[set]:1},when:PLAN,does:'Вбиває лідера суперника ще до підрахунку бою. Рятує тільки захист від отрути, наприклад Snooper.',after:KEEP,...extra});
const BG_KARAMA={fac:'bg',does:'зіграти цю карту як Karama'};
const junk=(en,ua,set,choam,aka)=>({en,ua,kind:'worthless',n:{[set]:1},when:'У бойовому плані замість зброї, захисту або обох.',does:'Сама по собі нічого не робить. Вона потрібна, щоб скинути її або заблефувати. Зазвичай скинути її можна лише в бойовому плані.',after:'Скидаєш, коли зіграв.',passive:[{fac:'choam',does:`скинути цю карту наприкінці будь-якої фази за 2 спайсу або заради ефекту: ${choam}`},BG_KARAMA],aka});
window.CARDS=[
// Base game, 33 cards
proj('Crysknife','Кріс-ніж','base',['Chrysknife']),
proj('Maula Pistol','Пістолет Маула','base'),
proj('Slip Tip','Слип-тіп','base',['Slip-Tip']),
proj('Stunner','Станер','base'),
pois('Chaumas','Чаумас (отрута в їжі)','base'),
pois('Chaumurky','Чаумуркі (отрута в напої)','base'),
pois('Ellaca Drug','Наркотик Еллака','base',{check:'Джерела розходяться: це отрута чи снаряд. За складом базової колоди це отрута. Подивись на тип на самій карті.'}),
pois('Gom Jabbar','Гом Джаббар','base'),
{en:'Lasgun',ua:'Лазган',kind:'special',n:{base:1},when:PLAN,does:'Вбиває лідера суперника, захисту немає. Якщо хтось у цьому бою зіграв Shield, вибух: усі сили й спайс на території зникають, обидва лідери гинуть, обидва гравці програють, за лідерів нічого не платять.',after:KEEP+' Після вибуху всі зіграні карти скидаються.'},
{en:'Shield',ua:'Щит',kind:'dproj',n:{base:4,ix:1},when:PLAN,does:'Рятує твого лідера від зброї-снаряда. Обережно: у бою з Lasgun викликає вибух.',after:KEEP},
{en:'Snooper',ua:'Нюхач',kind:'dpoison',n:{base:4,ix:1},when:PLAN,does:'Рятує твого лідера від зброї-отрути.',after:KEEP},
{en:'Cheap Hero',ua:'Дешевий герой',kind:'leader',n:{base:3},when:'У бойовому плані замість лідера. Якщо вільних лідерів немає, грати обов\'язково.',does:'Лідер із силою 0. Разом із ним можна зіграти зброю і захист.',after:USED,aka:['Cheap Heroine']},
{en:'Family Atomics',ua:'Родинна атомна зброя',kind:'storm',n:{base:1},when:'Після першого ходу, коли рух шторму вже підраховано, але шторм ще не зрушив. Потрібні твої сили на Shield Wall або на сусідній території, без шторму між вами.',does:'Усі сили на Shield Wall знищено. До кінця гри Imperial Basin, Arrakeen і Carthag більше не захищені від шторму.',after:'Прибери карту з гри.'},
{en:'Hajr',ua:'Хаджр',kind:'move',n:{base:1},when:'У фазі руху.',does:'Ще одна дія руху за звичайними правилами. Можна рушити ту саму групу або іншу.',after:USED},
{en:'Karama',ua:'Карама',kind:'other',n:{base:2,ric:1},when:'Будь-коли, якщо ситуація підходить.',does:'Обери одне: зупини одне використання здібності фракції, якщо правила дозволяють її зупиняти, або купи висадку за тарифом Guild, або постав більше спайсу, ніж маєш, чи забери карту на торгах безкоштовно (рука не повна). У просунутих правилах ще й разова сила фракції.',after:USED},
{en:'Tleilaxu Ghola',ua:'Гхола Тлейлаксу',kind:'revive',n:{base:1},when:'Будь-коли.',does:'Додаткове безкоштовне відродження: один твій лідер або до 5 сил із Танків. Звичайне відродження теж лишається.',after:USED,aka:['Ghola']},
{en:'Truthtrance',ua:'Транс правди',kind:'other',n:{base:2},when:'Будь-коли.',does:'Публічно постав одному гравцю питання «так чи ні» про гру, про минуле або теперішнє. Гра зупиняється, поки він не дасть правдиву відповідь.',after:USED},
{en:'Weather Control',ua:'Контроль погоди',kind:'storm',n:{base:1},when:'Після першого ходу, у фазі шторму, до руху маркера.',does:'Цього разу шторм ведеш ти: рухаєш його на 0–10 секторів проти годинникової стрілки.',after:USED},
junk('Baliset','Балісет','base','не пустити гравця рухом на територію, де стоять сили CHOAM (висадитись туди він може)'),
junk('Jubba Cloak','Плащ джубба','base','вберегти сили CHOAM на одній території від шторму, коли він рухається'),
junk('Kulon','Кулон','base','у свій хід рухати сили CHOAM на одну територію далі'),
junk('La, La, La','Ла-ла-ла','base','позбавити гравця безкоштовного відродження',['La La La']),
junk('Trip to Gamont','Подорож на Гамонт','base','у Mentat Pause повернути одну чужу силу в резерв її власника'),

// Ixians & Tleilaxu, 14 cards including one more Shield and one more Snooper
{en:'Amal',ua:'Амаль',kind:'other',n:{ix:1},when:'На початку будь-якої фази.',does:'Усі гравці скидають у банк половину свого спайсу, з округленням угору.',after:USED},
{en:'Artillery Strike',ua:'Артилерійський удар',kind:'special',n:{ix:1},when:PLAN,does:'Вбиває обох лідерів. Кожного рятує Shield або Shield Snooper. Лідери, що вижили, не додають силу: перемагає більше число на диску. За вбитих лідерів спайс не платять.',after:USED,check:'У CHOAM & Richese є нова версія цієї карти, вона замінює стару. Звір текст зі своєю.'},
{en:'Basilia Weapon',ua:'Зброя Базилія',kind:'poison',n:{ix:1},when:PLAN,does:'Вбиває лідера суперника. Рятує тільки захист від отрути.',after:KEEP},
{en:'Chemistry',ua:'Хімія',kind:'dspecial',n:{ix:1},when:PLAN,does:'Сама працює як захист від отрути. Якщо зіграна разом з іншим захистом, стає зброєю-отрутою.',after:KEEP},
{en:'Harvester',ua:'Комбайн',kind:'spice',n:{ix:1},when:'Одразу після того, як відкрито Spice Blow.',does:'Подвоює спайс цієї карти.',after:USED},
{en:'Hunter Seeker',ua:'Мисливець-шукач',kind:'proj',n:{ix:1},when:PLAN,does:'Вбиває лідера суперника. Рятує тільки захист від снарядів.',after:KEEP},
{en:'Poison Blade',ua:'Отруйний клинок',kind:'special',n:{ix:1},when:PLAN,does:'Вбиває лідера суперника. Це і снаряд, і отрута, тому звичайний Shield не рятує. Рятує Shield Snooper.',after:KEEP},
{en:'Poison Tooth',ua:'Отруйний зуб',kind:'poison',n:{ix:1},when:'У бойовому плані. Коли відкриваєте диски, можеш вирішити не застосовувати.',does:'Вбиває обох лідерів до підрахунку бою. Той, кого вбито, не дає сили.',after:'Застосував: скидаєш. Не застосував і переміг: можеш залишити.',check:'У CHOAM & Richese є нова версія. Джерела суперечать, чи рятує від неї Snooper. Подивись на своїй карті.'},
{en:'Shield Snooper',ua:'Щит-нюхач',kind:'dspecial',n:{ix:1},when:PLAN,does:'Водночас і Shield, і Snooper: рятує від снарядів і від отрути. Обережно: у бою з Lasgun теж викликає вибух.',after:KEEP},
{en:'Thumper',ua:'Тампер',kind:'spice',n:{ix:1},when:'Після першого ходу, на початку фази Spice Blow, замість відкриття карти спайсу.',does:'Діє так, ніби відкрито Shai-Hulud: приходить черв\'як і настає Nexus.',after:USED},
{en:'Weirding Way',ua:'Шлях Вейрдінга',kind:'proj',n:{ix:1},when:PLAN,does:'Сама працює як зброя-снаряд. Якщо зіграна разом з іншою зброєю, стає захистом від снарядів. Вибуху з Lasgun не викликає.',after:KEEP},
junk('Kull Wahad','Кулл Вахад','ix','не дати гравцю зіграти Karama цієї фази, коли він намагається її зіграти'),

// Richese cache, CHOAM & Richese. Karama above is the tenth card of the cache.
{en:'Distrans',ua:'Дистранс',kind:'other',n:{ric:1},when:'Будь-коли, крім торгів.',does:'Віддай карту Treachery зі своєї руки іншому гравцеві, якщо його рука не повна.',after:USED},
{en:'Juice of Sapho',ua:'Сік Сафо',kind:'other',n:{ric:1},when:'Будь-коли, якщо ситуація підходить.',does:'Обери одне: стань нападником у бою, або ходи першим чи останнім у фазі чи дії за порядком шторму, навіть раніше за Guild.',after:USED,aka:['Juice of Sappho']},
{en:'Mirror Weapon',ua:'Дзеркальна зброя',kind:'special',n:{ric:1},when:PLAN,does:'Копіює зброю суперника, якщо він її відкрив. Якщо важлива черговість, твоя спрацьовує першою.',after:USED,check:'Одне джерело каже: можна залишити, якщо переміг, а суперник не зіграв зброї. Подивись на своїй карті.'},
{en:'Nullentropy Box',ua:'Нуль-ентропійна скриня',kind:'other',n:{ric:1},when:'Будь-коли.',does:'Заплати 2 спайсу в банк, таємно переглянь скид Treachery і візьми собі будь-яку карту, крім іншої такої скрині. Перемішай скид і поверни.',after:'Покладаєш цю карту зверху скиду.'},
{en:'Ornithopter',ua:'Орнітоптер',kind:'move',n:{ric:1},when:'У фазі руху.',does:'Обери одне: рушиш одну групу до 3 територій, або отримуєш другу дію руху для сил, які ще не рухались.',after:USED},
{en:'Portable Snooper',ua:'Портативний нюхач',kind:'dpoison',n:{ric:1},when:'Коли відкриваєте диски, тільки якщо ти не зіграв захист. Не можна, якщо в плані зброя і непотріб.',does:'Рятує твого лідера від зброї-отрути. Це не те саме, що звичайний Snooper.',after:USED},
{en:'Residual Poison',ua:'Залишкова отрута',kind:'battle',n:{ric:1},when:'На суперника, до бойового плану.',does:'Один його вільний лідер, навмання, йде в Танки. Спайс за нього ніхто не отримує.',after:USED},
{en:'Semuta Drug',ua:'Наркотик семута',kind:'other',n:{ric:1},when:'Щойно інший гравець скидає карту Treachery.',does:'Забери цю карту собі в руку. Якщо скинуто кілька, вибираєш одну.',after:USED},
{en:'Stone Burner',ua:'Каменепал',kind:'special',n:{ric:1},when:PLAN,does:'Бій виграє той, у кого більше сил не поставлено на диск. Поставлені сили втрачаються як завжди. Коли відкриваєте диски, можеш убити обох лідерів, хоч би який у них захист.',after:USED,check:'Джерела різняться в деталях. Одне додає варіант: лідери виживають, але не додають силу. Подивись на своїй карті.'},

// Ecaz & Moritani, 3 cards
{en:'Harass & Withdraw',ua:'Удар і відхід',kind:'battle',n:{eca:1},when:'У бойовому плані замість зброї або захисту. Не вважається ні тим, ні іншим.',does:'Коли відкриваєте диски, твої сили, не поставлені на диск, повертаються в резерв. Лідера все одно можуть убити. Не діє, якщо суперник викрив зрадника. Не можна грати на своєму Homeworld.',after:USED,aka:['Harass and Withdraw','Harass & Withdrawl'],check:'Правила підтверджують лише тип карти. Деталі з одного джерела.'},
{en:'Recruits',ua:'Новобранці',kind:'revive',n:{eca:1},when:'На кроці відродження.',does:'Цього ходу всі фракції подвоюють безкоштовне відродження, а ліміт відродження стає 7.',after:USED},
{en:'Reinforcements',ua:'Підкріплення',kind:'battle',n:{eca:1},when:'У бойовому плані замість зброї або захисту. Не вважається ні тим, ні іншим.',does:'Коли відкриваєте диски: +2 до числа на диску, а 3 твої сили з резерву йдуть у Танки. Можна, лише якщо в резерві лишається 3 сили.',after:USED,check:'Правила підтверджують лише тип карти. Деталі з одного джерела.'}
];
window.CARDS.forEach(c=>{c.id=c.en.toLowerCase().replace(/[^a-z]+/g,'-');c.set=Object.keys(c.n)[0]});
})();
