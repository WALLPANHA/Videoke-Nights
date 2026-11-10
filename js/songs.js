/* Song data: the starter song book (categories and songs). Song numbers are generated here. */
const G={"OPM":[["Kathang Isip","Ben&Ben"],["Tadhana","Up Dharma Down"],["Ikaw","Yeng Constantino"],["Hawak Kamay","Yeng Constantino"],["Pare Ko","Eraserheads"],["Ang Huling El Bimbo","Eraserheads"],["Torete","Moonstar88"],["Narda","Kamikazee"],["Mundo","IV of Spades"],["Buwan","Juan Karlos"],["Ngayon at Kailanman","Basil Valdez"],["Bakit Ngayon Ka Lang","Ice Seguerra"]],
"Love Songs":[["Careless Whisper","George Michael"],["Perfect","Ed Sheeran"],["Endless Love","Diana Ross & Lionel Richie"],["Truly Madly Deeply","Savage Garden"],["I Don’t Want to Miss a Thing","Aerosmith"]],
"Pop":[["Shape of You","Ed Sheeran"],["Just the Way You Are","Bruno Mars"],["Love Story","Taylor Swift"],["Someone Like You","Adele"],["Uptown Funk","Mark Ronson ft. Bruno Mars"],["Dancing Queen","ABBA"]],
"Rock":[["Bohemian Rhapsody","Queen"],["Don’t Stop Believin’","Journey"],["Livin’ on a Prayer","Bon Jovi"],["Zombie","The Cranberries"],["Sweet Child o’ Mine","Guns N’ Roses"],["Wonderwall","Oasis"]],
"Birit":[["I Will Always Love You","Whitney Houston"],["My Heart Will Go On","Celine Dion"],["Hero","Mariah Carey"],["All by Myself","Celine Dion"],["I Have Nothing","Whitney Houston"]],
"Classics":[["Sweet Caroline","Neil Diamond"],["Take Me Home, Country Roads","John Denver"],["My Way","Frank Sinatra"],["Can’t Help Falling in Love","Elvis Presley"],["Hotel California","Eagles"],["Billie Jean","Michael Jackson"]],
"K-Pop":[["Dynamite","BTS"],["Gangnam Style","PSY"],["How You Like That","BLACKPINK"],["Super Shy","NewJeans"]],
"Disco & Reggae":[["Stayin’ Alive","Bee Gees"],["Don’t Worry, Be Happy","Bobby McFerrin"],["Three Little Birds","Bob Marley"]]};
const SONGS=[];let n=10001;for(const c in G)G[c].forEach(([t,a])=>SONGS.push({id:n++,title:t,artist:a,cat:c}));

/* More songs (titles and artists only). One "Category" line, then "Title|Artist" lines.
   New songs are added after the ones above, so existing song numbers never change. */
const MORE=`OPM
Magasin|Eraserheads
Alapaap|Eraserheads
Ligaya|Eraserheads
Overdrive|Eraserheads
Huling Sandali|December Avenue
Sa Ngalan ng Pag-ibig|December Avenue
Kung ’Di Rin Lang Ikaw|December Avenue & Moira Dela Torre
Ikaw at Ako|Moira Dela Torre & Jason Marvin
Malaya|Moira Dela Torre
Paubaya|Moira Dela Torre
Titibo-tibo|Moira Dela Torre
Tagpuan|Moira Dela Torre
Pasilyo|SunKissed Lola
Upuan|Gloc-9 ft. Jeazell Grutas
Sirena|Gloc-9 ft. Ebe Dancel
Gusto|Zack Tabudlo
Binibini|Zack Tabudlo
Give Me Your Forever|Zack Tabudlo
Pano|Zack Tabudlo
Palagi|TJ Monterde
Marilag|Dionela
Sining|Dionela ft. Jay R
Oksihina|Dionela
Mahika|Adie & Janine Berdin
Dilaw|Maki
Hari ng Sablay|Sugarfree
Mariposa|Sugarfree
Burnout|Sugarfree
Prom|Sugarfree
Migraine|Moonstar88
Stay|Cueshé
Your Universe|Rico Blanco
Yugto|Rico Blanco
Balang Araw|I Belong to the Zoo
Kilometro|Sarah Geronimo
Tala|Sarah Geronimo
Leaves|Ben&Ben
Maybe the Night|Ben&Ben
Sa Susunod na Habambuhay|Ben&Ben
Araw-Araw|Ben&Ben
Pagtingin|Ben&Ben
Oo|Up Dharma Down
Indak|Up Dharma Down
Hey Barbara|IV of Spades
Come Inside of My Heart|IV of Spades
Ere|Juan Karlos
Jopay|Mayonnaise
Kisapmata|Rivermaya
Awit ng Kabataan|Rivermaya
214|Rivermaya
Harana|Parokya ni Edgar
Buloy|Parokya ni Edgar
Gitara|Parokya ni Edgar
Halik|Kamikazee
Pinoy Ako|Orange and Lemons
Heaven Knows|Orange and Lemons
Pagsubok|Orange and Lemons
Tatsulok|Bamboo
Hallelujah|Bamboo
Noypi|Bamboo
Ako Si Superman|Rizal Underground
Kung Wala Ka|Hale
The Day You Said Goodnight|Hale
Broken Hearted|Hale
Kahit Ayaw Mo Na|This Band
Ikaw Lamang|Silent Sanctuary
OPM Classics
Anak|Freddie Aguilar
Handog|Florante
Kumusta Ka|Rey Valera
Maging Sino Ka Man|Rey Valera
Kung Kailangan Mo Ako|Rey Valera
Awitin Mo at Isasayaw Ko|VST & Co.
Rock Baby Rock|VST & Co.
Swing|VST & Co.
Kailan|Smokey Mountain
Da Coconut Nut|Smokey Mountain
Paraiso|Smokey Mountain
Kapag Tumibok Ang Puso|Donna Cruz
Sana Maulit Muli|Gary Valenciano
Hataw Na|Gary Valenciano
Di Bale Na Lang|Gary Valenciano
Tuloy Pa Rin|Neocolours
Pangarap Ko Ang Ibigin Ka|Regine Velasquez
Dadalhin|Regine Velasquez
Pagdating ng Panahon|Aiza Seguerra
Forevermore|Side A
Hanggang|Wency Cornejo
Mahal Kita Walang Iba|Ogie Alcasid
Hanggang Ngayon|Ogie Alcasid & Regine Velasquez
Pagbigyang Muli|Arnel Pineda
Love Songs
A Thousand Years|Christina Perri
All of Me|John Legend
Marry You|Bruno Mars
When I Was Your Man|Bruno Mars
Lover|Taylor Swift
Can You Feel the Love Tonight|Elton John
Unchained Melody|The Righteous Brothers
Say You Won’t Let Go|James Arthur
Love Me Like You Do|Ellie Goulding
Just Give Me a Reason|P!nk ft. Nate Ruess
Kiss Me|Sixpence None the Richer
Everything I Do (I Do It for You)|Bryan Adams
Always|Bon Jovi
Right Here Waiting|Richard Marx
Open Arms|Journey
Faithfully|Journey
Through the Years|Kenny Rogers
Lady|Kenny Rogers
I Swear|All-4-One
Because You Loved Me|Celine Dion
Thinking Out Loud|Ed Sheeran
Photograph|Ed Sheeran
Someone You Loved|Lewis Capaldi
Pop
Blinding Lights|The Weeknd
Levitating|Dua Lipa
Don’t Start Now|Dua Lipa
Watermelon Sugar|Harry Styles
As It Was|Harry Styles
Flowers|Miley Cyrus
Shake It Off|Taylor Swift
Anti-Hero|Taylor Swift
Bad Guy|Billie Eilish
Counting Stars|OneRepublic
Rolling in the Deep|Adele
Hello|Adele
Girls Just Want to Have Fun|Cyndi Lauper
Like a Prayer|Madonna
Firework|Katy Perry
Roar|Katy Perry
Happy|Pharrell Williams
Can’t Stop the Feeling!|Justin Timberlake
Sorry|Justin Bieber
Love Yourself|Justin Bieber
Havana|Camila Cabello
Señorita|Shawn Mendes & Camila Cabello
Treat You Better|Shawn Mendes
Sunflower|Post Malone & Swae Lee
Shallow|Lady Gaga & Bradley Cooper
Poker Face|Lady Gaga
Just Dance|Lady Gaga
Umbrella|Rihanna
Halo|Beyoncé
Single Ladies|Beyoncé
Toxic|Britney Spears
...Baby One More Time|Britney Spears
It’s Gonna Be Me|*NSYNC
Bye Bye Bye|*NSYNC
I Want It That Way|Backstreet Boys
Everybody|Backstreet Boys
Larger Than Life|Backstreet Boys
Wannabe|Spice Girls
Birit
I Believe I Can Fly|R. Kelly
Listen|Beyoncé
The Greatest Love of All|Whitney Houston
How Will I Know|Whitney Houston
I Wanna Dance with Somebody|Whitney Houston
Vision of Love|Mariah Carey
Without You|Mariah Carey
Emotions|Mariah Carey
The Power of Love|Celine Dion
It’s All Coming Back to Me Now|Celine Dion
Total Eclipse of the Heart|Bonnie Tyler
Nothing Compares 2 U|Sinéad O’Connor
Defying Gravity|Idina Menzel
Alone|Heart
Titanium|David Guetta ft. Sia
Chandelier|Sia
Rock
We Will Rock You|Queen
Don’t Stop Me Now|Queen
Another One Bites the Dust|Queen
Somebody to Love|Queen
Under Pressure|Queen & David Bowie
Stairway to Heaven|Led Zeppelin
Smoke on the Water|Deep Purple
Highway to Hell|AC/DC
Back in Black|AC/DC
Enter Sandman|Metallica
Nothing Else Matters|Metallica
Smells Like Teen Spirit|Nirvana
Come as You Are|Nirvana
Creep|Radiohead
Yellow|Coldplay
Viva la Vida|Coldplay
Fix You|Coldplay
Mr. Brightside|The Killers
Seven Nation Army|The White Stripes
Basket Case|Green Day
Boulevard of Broken Dreams|Green Day
In the End|Linkin Park
Numb|Linkin Park
Complicated|Avril Lavigne
Eye of the Tiger|Survivor
More Than a Feeling|Boston
Dream On|Aerosmith
Crazy|Aerosmith
Pour Some Sugar on Me|Def Leppard
Here I Go Again|Whitesnake
Wind of Change|Scorpions
Still Loving You|Scorpions
November Rain|Guns N’ Roses
Welcome to the Jungle|Guns N’ Roses
Paradise City|Guns N’ Roses
Classics
Imagine|John Lennon
Hey Jude|The Beatles
Let It Be|The Beatles
Yesterday|The Beatles
Take On Me|a-ha
Livin’ la Vida Loca|Ricky Martin
Wonderful Tonight|Eric Clapton
Tears in Heaven|Eric Clapton
Stand by Me|Ben E. King
What a Wonderful World|Louis Armstrong
Fly Me to the Moon|Frank Sinatra
New York, New York|Frank Sinatra
Killing Me Softly with His Song|Roberta Flack
Bridge over Troubled Water|Simon & Garfunkel
The Sound of Silence|Simon & Garfunkel
Rocket Man|Elton John
Your Song|Elton John
I’m Still Standing|Elton John
Africa|Toto
Hello|Lionel Richie
Say You, Say Me|Lionel Richie
All Night Long|Lionel Richie
Easy|Commodores
Three Times a Lady|Commodores
Lean on Me|Bill Withers
Ain’t No Sunshine|Bill Withers
Disco & Reggae
Mamma Mia|ABBA
Take a Chance on Me|ABBA
Waterloo|ABBA
I Will Survive|Gloria Gaynor
Y.M.C.A.|Village People
September|Earth, Wind & Fire
Boogie Wonderland|Earth, Wind & Fire
Celebration|Kool & the Gang
Last Dance|Donna Summer
Hot Stuff|Donna Summer
Don’t Stop ’Til You Get Enough|Michael Jackson
No Woman, No Cry|Bob Marley & The Wailers
One Love|Bob Marley & The Wailers
Is This Love|Bob Marley & The Wailers
Could You Be Loved|Bob Marley & The Wailers
Red Red Wine|UB40
Hip-Hop & R&B
Lose Yourself|Eminem
Without Me|Eminem
Love the Way You Lie|Eminem ft. Rihanna
In Da Club|50 Cent
Empire State of Mind|Jay-Z & Alicia Keys
No Scrubs|TLC
Waterfalls|TLC
Say My Name|Destiny’s Child
Survivor|Destiny’s Child
Fallin’|Alicia Keys
If I Ain’t Got You|Alicia Keys
Let’s Get It On|Marvin Gaye
Locked Out of Heaven|Bruno Mars
That’s What I Like|Bruno Mars
K-Pop
Boy with Luv|BTS
Butter|BTS
Fake Love|BTS
DDU-DU DDU-DU|BLACKPINK
Kill This Love|BLACKPINK
Lovesick Girls|BLACKPINK
Love Dive|IVE
Hype Boy|NewJeans
Ditto|NewJeans
OMG|NewJeans
Next Level|aespa
TT|TWICE
Cheer Up|TWICE
Fancy|TWICE
Gee|Girls’ Generation
Sorry, Sorry|Super Junior
Bang Bang Bang|BIGBANG
Psycho|Red Velvet
Country & Folk
Jolene|Dolly Parton
9 to 5|Dolly Parton
Friends in Low Places|Garth Brooks
Islands in the Stream|Kenny Rogers & Dolly Parton
Tennessee Whiskey|Chris Stapleton
You Belong with Me|Taylor Swift
Blowin’ in the Wind|Bob Dylan
Annie’s Song|John Denver
Sunshine on My Shoulders|John Denver
Latin
Despacito|Luis Fonsi & Daddy Yankee
Bailando|Enrique Iglesias
Hips Don’t Lie|Shakira
Waka Waka (This Time for Africa)|Shakira
La Bamba|Ritchie Valens
Macarena|Los del Río
`;
const seen=new Set(SONGS.map(s=>(s.title+"|"+s.artist).toLowerCase()));
let curCat="";
MORE.split("\n").forEach(l=>{l=l.trim();if(!l)return;if(!l.includes("|")){curCat=l;return}
  const [title,artist]=l.split("|"),k=(title+"|"+artist).toLowerCase();
  if(!seen.has(k)){seen.add(k);SONGS.push({id:n++,title,artist,cat:curCat})}});
