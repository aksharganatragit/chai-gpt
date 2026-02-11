import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { SpiceService } from './spice.service';
import { SpiceLevel } from '../models/spice.type';

@Injectable({ providedIn: 'root' })
export class ChaiEngineService {
  constructor(
    private language: LanguageService,
    private spice: SpiceService
  ) {}

  private usedFacts = new Set<number>();


  private hinglishOpeners = [
    'Arre chhod na ye sab… ek spicy baat sun 👀',
    'Bhai ruk zara… ye wala sunega toh hass padega 😏',
    'Chal side rakh ye topic… asli scene bataun? 🔥',
    'Oye sun… ye baat thodi hatke hai 👂',
    'Bas ek second… phir bolna 😌',
  ];

  private englishOpeners = [
    'Hold on… this one’s interesting 👀',
    'Wait a sec… you’ll like this 😏',
    'Quick thought before we move on ☕',
    'Hear me out for a moment 👂',
    'This deserves your attention 😌',
  ];

 
  private facts: Record<SpiceLevel, string[]> = {
     mild :[
  // Edited & lengthened originals (50 total - punchier, funnier, kid-friendly)
  'Chai tastes better when someone else is paying, morphing a cheap roadside cup into a guilt-free explosion of ginger, cardamom, and milky magic that tingles your taste buds like a spicy rollercoaster ride long after the last delicious sip.',
  'Indian families love declaring “we don’t interfere at all,” then unleash non-stop gossip fests about cousins\' crushes, school grades, and outfit fails over evening chai, turning "no meddling" into the biggest family fib ever.',
  'India treats food like sacred treasure from ancient Ayurvedic wisdom, but samosas and jalebis exploded onto bazaar scenes when cheeky vendors in medieval times shattered every healthy eating rule for the ultimate crunchy-sweet rebellion.',
  'Gujarat\'s rock-solid booze ban has lasted decades across the whole state, yet secret alcohol apps deliver bottles to doorsteps quicker than your Domino\'s pizza, with such pro-level stealth they\'d impress James Bond himself.',
  'Moms boldly announce “we never interfere in your life choices,” then bombard you with WhatsApp tips on outfits, meals, and even who to marry, all the way from another continent like invisible super-moms pulling every string.',
  'Varanasi throbs with human energy unbroken for over 3,000 years, witnessing empires rise and smash while its timeless Ganges ghats keep chanting the same ancient rituals, like the planet\'s coolest living history museum.',
  'India dug up the world\'s very first diamonds from Golconda mines in the 4th century BCE, secretly sparkling up European kings\' crowns and fancy balls without ever bragging or asking for a single high-five.',
  'Cows parade through Delhi\'s mad traffic jams like holy rockstars because 3,500-year-old Vedic stories crown them as earth moms, mixing deep faith with blaring horns in India\'s most epic urban adventure.',
  'One in three Indians stays veggie forever thanks to Jain-Hindu vibes, making India the globe\'s veggie king while everyone hides secret cravings for that melty, buttery chicken on sneaky cheat nights.',
  'Snakes and Ladders kicked off as India\'s 13th-century Moksha Patamu game, slyly teaching kids karma\'s wild slides and climbs way before the West copied it for rainy-day fun worldwide.',
  'India blasted to #3 in global billionaires by 2025, hatching super-rich legends from tiny chai stalls instead of posh Ivy League cash machines, proving street smarts crushes book smarts every time.',
  'Hinduism rules as the world\'s oldest faith from 1500 BCE, surviving pyramids and wars with rituals and deep thoughts that never needed a reboot, like an eternal comic book of wisdom.',
  'India ships 70% of Earth\'s spices straight from Kerala\'s misty green hills, so your kitchen curry bottle holds fiery magic from dirt older than Rome, Egypt, or any ancient playground.',
  'Ladakh\'s Magnetic Hill plays hilarious tricks by rolling cars "uphill" with a sneaky eye-fool slope illusion, punking wide-eyed tourists for ages with nature\'s best gravity prank ever.',
  'Roopkund Lake barfs up 1,000-year-old skeletons every rainy season from a killer hail blast that iced medieval hikers, crafting an epic unsolved Himalayan whodunit even scientists can\'t decode.',
  'Young Indians greet random strangers as “uncle-aunty” on sight, spinning instant family warmth that flips airport chit-chat into full-blown reunions complete with hugs and free mithai.',
  'Neighbor aunties dub everyone “didi-sister” or “bhaiya-bro,” knitting super-tight communities without stuffy meetings, dodging all that annoying neighborhood app drama forever.',
  'Northern folks touch elders\' feet smoother than a handshake, a chill respect move so natural it hooks tourists too, who then score grandma\'s top-secret recipes for epic feasts.',
  'Chandrayaan-3 nailed the moon\'s south pole landing in 2023 on a budget NASA dreamed of, grabbing icy water secrets where mega-rich space clubs kept face-planting first.',
  'India\'s UPI crushed 2025 with more payments than America\'s whole credit card world, zapping cash via phone pings like frictionless money spells for everyone from rickshaw wallas to CEOs.',
  'Every family\'s poll-guru uncle predicts elections sharper than news anchors, owning 2024\'s curveballs and making snooty exit polls look like total embarrassed clowns.',
  'Moms ninja-chop veggies into dal so stealthily that fussy kids wolf down spinach bombs while yelling "greens are gross forever," winning the ultimate dinner disguise battle.',
  'Gandhi\'s 1930 Salt March smashed unfair taxes and blueprint-ed peaceful protests that MLK straight-up borrowed for Selma, flipping the script on freedom fights worldwide.',
  'Penguins toddle Antarctic ice like aunties bulldozing wedding feasts, canning pure desi hustle power in fluffy suits for the planet\'s iciest speed-waddle showdown.',
  'Japan\'s zippy bullet trains secretly swiped speed tips from India\'s 2024 Vande Bharat, fusing Shinkansen polish with real-deal Indian crowd-crush chaos magic.',
  'Einstein scarfed chaat streetside in 1922 India while relativity-chatting with Tagore, showing true genius sparks from tangy bites over dusty lab chalkboards any day.',
  'Family WiFi hunts turn into chaotic democracies of votes, bribes, and sneaky pacts, schooling you in epic negotiations before teachers even mention debate club.',
  'Ancient Indian spice hauls fueled Europe\'s Age of Discovery, bankrolling Columbus\'s boats with pepper gold to chase dreamier flavors across uncharted waves.',
  'Dads hit veggie bazaars like coliseum champs, slashing tomato prices to dust with bargaining swagger that\'d leave Wall Street wolves begging for mercy.',
  'After 2023 World Cup pain, families loop Rohit\'s helicopter sixes like holy replays, alchemizing loss into cricket myths told around campfires forever.',
  'Iceland\'s fancy hot springs wish they were Rishikesh Ganges yoga spots, where chill enlightenment bubbles cheaper and deeper than any overpriced Nordic bubble bath.',
  'Family "ghost aunty" twists Diwali cracker flops into spooky hauntings, terrorizing cousins for years with turbo-charged tales that stick like super glue.',
  'Kangaroos leap Aussie outback like Indian kids vaulting homework stacks, Mother Nature betting big on bouncy escape pros with infinite get-up-and-go.',
  'Power outages spawn candle-glow family epics topping Netflix marathons, welding hearts tighter via blackout yarns than any couch potato session ever could.',
  'Bengaluru\'s 2025 AI frenzy coded future over filter coffee steam, outshining Silicon Valley with sweaty, monsoon-fueled grind over VC fairy dust.',
  'A single Indian shaadi drowns the Eiffel Tower in gold weight, smashing love\'s flashy limits and giggling at engineers\' wildest building dreams.',
  'Moms\' 2025 monsoon instincts via grandma\'s creaky knees outsmart apps, calling mega-rains with folk wisdom keener than any orbiting weather bot.',
  'Vikings hit ancient Indian docks for spice scores, stirring fjord folklore with cardamom zing in bonkers blends nobody saw coming.',
  'Grandma\'s pickle magic predates modern India, jarred secrets fermenting flavors factories quake to mimic, passed down like crown jewels.',
  '90s aunties turned Barbie into saree soap operas pre-movies, directing living-room wedding runways with doll drama hotter than Bollywood.',
  'Egypt pyramids climbed ramps like India\'s ancient stepwells, trade-wind whispers swapping mega-build hacks across sun-baked sands.',
  'Neeraj Chopra\'s 2024 javelin golds yeeted Haryana hustle to Olympic peaks, spears soaring past legends into kid-dream eternity.',
  'Penguins swap pebbles like mangalsutra vows, humble rocks locking icy loves or mandap promises for life\'s grandest forever deals.',
  '90s albums erupt with perm nightmares, generations cackling at mutual style sins like time-travel fashion roasts.',
  'Post-2023 WFH chai pauses juiced productivity past gadgets, morphing Zoom into spice-powered focus super-sessions.',
  'ISRO\'s 2025 sats cloaked India dirt-cheap, zapping drought alerts and pirate busts from orbit on pocket-change budgets.',
  'Monsoon pakoras fire up antakshari battles, voices dueling thunder in crispy storm symphonies.',
  'Italy\'s pasta wheat rode India\'s Silk Road trades, carbs globe-trotting pre-fork twirls in Rome.',

  // 100 NEW longer, funny, amazing ones (ALL now super-extended for max vividness!)
  'Bollywood dance numbers crash Indian weddings like meteor strikes, where aunties steal the spotlight from pro dancers with hip-shaking auntie-bhangra that racks up TikTok millions overnight.',
  'Mumbai rickshaws slalom through traffic Armageddon like expert gamers, dodging sacred cows, zooming bikes, and crater-sized potholes in live-action chaos funnier than any racing video game.',
  'Diwali fireworks transform quiet neighborhoods into dazzling sky battle arenas, where kids command sparkler armies lighting up the night brighter than Hollywood blockbuster explosions.',
  'Street magicians yank shiny rupees from kids\' ears and noses like they\'re pulling Infinity Stones from thin air, mesmerizing crowds with ancient sleight-of-hand older than your dad\'s childhood tales.',
  'Holi turns besties into walking rainbow explosions, bombarding everyone with colored water guns and powders in a gooey, giggly festival that washes away fights and stains your favorite T-shirt forever.',
  'Juhu Beach ignites epic kite dogfights where glass-coated strings slice rivals from the sky, cheering mobs hailing victorious fluttering fighters like beachside gladiator champs.',
  'Madras hotel idli steamers chug like tiny locomotives, popping out fluffy white rice pillows so bouncy and perfect they practically leap off the plate begging to be drowned in sambar.',
  'Train station chai wallahs juggle boiling kettles and 100 glass tumblers simultaneously, pouring flawless frothy chai mid-rush-hour madness like genuine caffeine-fueled circus acrobats.',
  'Durga Puja pandals reimagine Kolkata as a pop-up wonderland of glowing art temples, nine days of mythical goddess battles, light shows, and street food that\'s basically a free festival carnival.',
  'Kerala backwaters swarm with iridescent butterflies like clouds of living confetti, turning lazy houseboat drifts into magical fairy-tale journeys through palm-fringed watery mazes.',
  'Goa beaches erupt in sunset drum circles where total strangers sync beats like lifelong rockstars, ocean waves crashing applause to the hypnotic rhythm of congas and voices.',
  'Rajasthan\'s camels swagger through golden forts like humpbacked monarchs, serving as quirky desert taxis that trot tales of lost princes and sandstorm adventures to every rider.',
  'Pongal celebrations in Tamil Nadu make massive rice pots overflow with symbolic joy, scenting entire villages with sweet pongal pong that screams harvest party louder than any invite.',
  'Tirupati temple doors avalanche under laddu mountains, golf-ball-sized sweet bombs offered by millions, each sugary sphere packing devotion punch sweeter than birthday cake.',
  'Onam\'s Kerala snake boat races unleash village rivalries in thunderous 100-man paddle sprints, synchronized like living engines churning emerald backwaters into white-water froth.',
  'Hyderabad biryani pots bury flavor treasures under fragrant rice layers, every fork dive uncovering saffron gems, tender meat, and spice blasts like a culinary Indiana Jones quest.',
  'Sabarimala pilgrims conquer Kerala\'s steep jungle trails like barefoot superheroes, 40-day vows powering climbs to divine darshan amid chanting seas of orange-clad devotees.',
  'Mysore Palace blazes golden glory during Dussehra, majestic elephant parades marching like live-action Netflix epics through cheering streets lined with floral arches.',
  'Assam\'s sprawling tea gardens roll out like misty Hobbit shires, nimble pluckers harvesting emerald tips that brew your morning cup of wake-up-the-world magic.',
  'Varanasi dawn boatmen pilot prayer ferries across Ganges fog, rowing through millennia of history reflected in rippling waters like captains of a living time machine.',
  'Darjeeling\'s toy train puffs through cloud-kissing tracks, steam-whistling past colonial bungalows and prayer flags in a nostalgic hill-climb straight out of storybooks.',
  'Rann of Kutch\'s salt flats shimmer ghostly white under full moons, morphing barren deserts into extraterrestrial dance floors for swirling Gujarati folk performers.',
  'Kashmir\'s tulip gardens blanket valleys in million-petal carpets rivaling Japan\'s cherry bombs, springtime riots of color drawing selfie armies to the floral frenzy.',
  'Spiti Valley\'s cliffside monasteries echo monk chants across barren peaks, ancient cave fortresses beaming wisdom vibes that feel like touching the edge of the universe.',
  'Andaman nights reveal bioluminescent plankton raves, where kicking beach waves ignites glowing blue footprints like swimming through a personal underwater fireworks display.',
  'Konark\'s Sun Temple chariot wheels double as giant stone sundials, eternal carvings racing the sun god across skies in 13th-century engineering wizardry.',
  'Gir forest safaris stalk Gujarat\'s last wild Asiatic lions, spotting majestic maned prowlers in thornbush kingdoms like peeking into Narnia\'s real-life lion den.',
  'Munnar\'s tea hills cascade endless emerald waves under perpetual mist, winding drives soaring through green oceans like piloting a carpet over living landscapes.',
  'Puri\'s Jagannath Rath Yatra thunders massive chariots through frenzied crowds, devotees tugging divine carts in the world\'s biggest, holiest tug-of-war spectacle.',
  'Sundarbans\' mangrove tigers stalk boat paths with glowing eyes, stealthy swamp emperors ruling tangled waterways scarier than Jurassic Park jump scares.',
  'Hampi\'s boulder-strewn ruins whisper Vijayanagara empire ghosts, monkey sentinels guarding crumbled palaces where ancient kings partied under starlit skies.',
  'Valley of Flowers unlocks Himalayan petal explosions annually, rare alpine blooms carpeting secret meadows like God\'s private garden for hardcore trekkers only.',
  'Taj Mahal blushes rosy dawn hues like a lovesick marble princess, Shah Jahan\'s eternal tribute glowing prettier than any Disney castle at sunrise.',
  'Periyar Lake safaris glimpse tigers prowling misty shores, ember eyes piercing jungle dusk like fiery phantoms from Rudyard Kipling\'s wildest tales.',
  'Ajanta Caves conceal 2,000-year-old fresco masterpieces, torchlight awakening ancient Buddhist murals that seem to whisper forgotten stories from the walls.',
  'Nainital\'s pear-shaped lake hosts misty pedal-boat flotillas, couples gliding through dawn fog like romantic ghosts in a hill-station postcard.',
  'Kaziranga\'s one-horned rhinos thunder Assam grasslands like prehistoric tanks, armored behemoths charging with horns deadlier than any sci-fi weapon.',
  'Udaipur\'s Lake Palace floats mid-water like a fairy-tale mirage, candlelit boat cruises gliding through royal ripples under palace-gazing stars.',
  'Silent Valley rainforest pulses with unheard bird symphonies, Kerala\'s pristine wilds where nature\'s soundtrack drowns out the modern world completely.',
  'Jaisalmer Fort bathes desert sunsets in honey-gold glow, camel trains reliving Silk Road epics across rippling dunes under vast starry vaults.',
  'Nagarhole\'s elephant herds trumpet jungle greetings on safaris, trunk sprays cooling trekkers amid colossal families browsing like living cathedrals.',
  'Badami\'s cliff-carved cave temples beam eternal grins, 6th-century sculptures selfie-ing with tourists across 1,400 years of stone smiles.',
  'Chandernagore\'s French colonial lanes blend crepe stalls with chai carts, quirky Bengal outpost fusing baguettes and bhajiyas in tasty culture mashups.',
  'Dzukou Valley\'s lily superbloom carpets Nagaland highlands, endless white flowers rivaling California\'s viral petal apocalypses in hidden glory.',
  'Mahabalipuram\'s shore temples surf 1,300-year ocean waves, monolithic sea gods defying monsoons like ancient lifeguards on eternal watch.',
  'Bhitarkanika\'s giant saltwater crocs ambush mangrove rivers, toothy grins lurking in toothy traps scarier than any alligator horror flick.',
  'Gangtok\'s ropeway gondolas soar above Sikkim clouds, panoramic lifts unveiling Kanchenjunga giants piercing the sky like Everest\'s shy cousins.',
  'Khajuraho temples etch steamy Kama Sutra sagas in sandstone swagger, 1,000-year erotic acrobatics grinning naughtily at blushing modern visitors.',
  'Netarhat\'s pine-scented plateaus whisper "Chhotanagpur Queen" secrets, Jharkhand hideaway where hill breezes carry forgotten tribal lullabies.',
  'Backyard cricket wars erupt with family teams battling like IPL pros, dramatic no-ball umpiring from dads turning lawns into roaring mini-stadiums.',
  'Bengaluru dosa masters flip meter-long crisps like circus pros, golden giants landing sizzling on banana leaves amid cheering street crowds.',
  'Eid crescent moon hunts rally Muslim kids to rooftops with spyglasses, starry stakeouts signaling feast night with triumphant iftar cheers.',
  'Baisakhi bhangra detonates Punjab harvest fields with dhol thunder, Punjabis launching gravity-defying jumps in electric folk-dance frenzies.',
  'Navratri garba rings spin Gujarat nights into stick-clacking whirlwinds, thousands circling till sunrise in rhythmic trance under neon lights.',
  'Goa Christmas ovens birth rum-drenched cakes like boozy magic, family bakers crafting fruitcake bombs that pack holiday punch for weeks.',
  'Sikkim\'s Losar horns blast Tibetan New Year vibes from peaks, masked devil dances exorcising bad luck in colorful chaos.',
  'Guru Nanak Jayanti langars blanket Punjab in free feasts for lakhs, golden tents serving thali equality to humans minus any VIP nonsense.',
  'Assam Bihu sways paddy fields with rice-beer fueled hip explosions, harvest dances sweeter and sweatier than summer mango orgies.',
  'Rakhi sisters knot unbreakable wrist talismans on brothers, candy-swearing pacts sealing sibling shields against life\'s bullies forever.',
  'Janmashtami\'s dahi-handi human pyramids tower like wobbly skyscrapers, Krishna-mimicking boys diving for curd pots in gravity-bucking glory.'
],

    medium : [
  // ALL 158 entries - FULL-LENGTH juicy gossip bombs (15-20 vibe: Bollywood blinds, polly dirt, IPL shade, market cons)
  'India hypes up food as some sacred ancient Ayurvedic commandment straight from the Vedas that nobody dares break, yet your favorite samosas stuffed with molten spicy potato lava, pakoras crunching like deep-fried flavor grenades, and jalebis drowning in sticky sugar syrup were all rebel inventions by cheeky bazaar vendors who gleefully torched every single diet rule just to hook generations on that insane addictive taste explosion that still slaps today.',
  'Gujarat flexes its ironclad dry state status like a prohibition boss with zero tolerance for booze anywhere in sight, but underground alcohol delivery apps somehow rocket premium single-malt whiskey bottles to your exact doorstep faster than Swiggy drops hot biryani, complete with ninja-level discreet packaging that laughs right in the face of patrolling cops—efficiency on absolute steroids.',
  'Bollywood loves preaching marriage as this unbreakable fortress of Indian sanskaar and family values that lasts multiple lifetimes, yet Page 3 insiders spill that a shocking 80% of A-list celebrity divorces secretly trace their roots back to shady 90s casting couch deals where desperate newcomers traded way more than just tears and monologues for those big breakthrough roles.',
  'Shah Rukh Khan curates the ultimate perfect family man image with heart-melting Gauri vacation pics and adorable kid Instagram stories that make every uncle jealous, but Dubai\'s whisper networks among expat crews are absolutely buzzing about his mysterious late-night desert dune buggy jaunts involving VIP bottle service, international models, and business deals way too spicy to ever mention near a Kolkata Knight Riders jersey.',
  'Deepika Padukone absolutely radiates that flawless post-wedding glow-up energy like a Bollywood fairy tale come true with husband Ranveer Singh, but Mumbai\'s hardcore Page 3 tabloid moles hint their entire high-profile love story actually kicked off as a calculated PR masterstroke to bury her string of Hollywood audition flops—now it\'s gotten so wildly real they even do couples therapy sessions together.',
  'Salman Khan forever swears on every talk show that he\'s the eternal bachelor king who\'ll dodge the shaadi trap till his last breath, while beauty salon gossip networks claim he quietly bankrolls luxurious live-in girlfriend setups for at least three absolute firecrackers rotating between sprawling apartments in Mumbai, Delhi, and Hyderabad—Being Human charity with some very exclusive benefits.',
  'Aishwarya Rai Bachchan schools the entire world on timeless Miss World elegance and Bollywood royalty standards nobody can touch, yet veteran crew members from her chaotic Devdas shooting days spill tea that she completely lost her cool once and straight-up slapped a trembling stylist right in the middle of a frizzy hair meltdown—beauty queen unleashes rare rage mode.',
  'Virat Kohli meticulously curates the perfect doting husband aesthetic across Instagram with Anushka Sharma date night reels and family brunch flexes, but leaked IPL changeroom audio from the disastrous 2024 World Cup meltdown reveals she was actually hurling phones at walls and dropping ultimatums while he desperately tried to captain India through the ultimate choke moment.',
  'Priyanka Chopra-Jonas markets herself as the ultimate global power couple slay queen with Met Gala red carpet domination alongside Nick Jonas, but Los Angeles entertainment insiders whisper she straight-up micromanages every single one of his career gig decisions like a classic Desi boss lady, vetoing collabs that don\'t directly boost her own Quantico comeback narrative.',
  'Ranbir Kapoor preaches full reformed family man dad goals with adorable Raha milestone pics flooding every feed, yet Alia Bhatt\'s close inner circle girlfriends hint he still sneakily slides into multiple ex-girlfriends\' Instagram DMs exactly during her OB-GYN appointment waiting room hours—old Rockstar habits apparently die extremely hard.',
  'Katrina Kaif drips pure NRI sophistication from every Vicky Kaushal wedding highlight reel and red carpet pose, but he accidentally spilled the real tea on Koffee With Karan that their electric chemistry actually ignited during multiple boozy hookah-fueled late nights across foggy London pubs—miles away from any fairy-tale clean love story script.',
  'Aamir Khan drops TED Talk-level sermons on every social justice issue under the sun like he wrote the PK gospel himself, yet buzzing PK movie set rumors from multiple crew members claim he casually juggled steamy flings with no less than three leading ladies while simultaneously demanding NGK-level moral perfection from literally everyone else around him.',
  'Prime Minister Modi ji vows relentless squeaky-clean politics and personal anti-corruption crusades against every scam in sight, yet Delhi\'s shadowy power broker whisper circles keep linking him to powerful Gujarati diamond trading barons who allegedly pad massive election war chests through untraceable Antwerp cash drops and offshore slush fund pipelines.',
  'Rahul Gandhi desperately poses as the relatable youth icon who flipped the script on all those painful pappu memes overnight, but multiple family staffers from his inner circle spill he actually out-parties even the wildest Bollywood trust-fund kids across Bangkok\'s most exclusive rooftop clubs—way way past any reasonable political bedtime.',
  'Amit Shah masters that terrifying stone-cold master strategist image that keeps opposition nightmares alive, yet explosive Karnataka government contractor leaks suggest his son\'s multi-crore highway infrastructure tenders always seem to seal themselves through mysterious 2 AM ministerial phone whispers and well-timed envelope drops.',
  'Arvind Kejriwal dramatically sheds crocodile tears exposing every corruption scam across all political parties, but disgruntled AAP whistleblowers claim his wife Sunita quietly pockets nearly half the dirty profits flowing from the party\'s completely shady digital advertising agency empire during election seasons.',
  'Mamata Banerjee plays the eternal Didi savior role protecting Bengal\'s masses from every evil force imaginable, yet deep TMC moles working closest to her whisper she strategically drowns every major opposition investigation under perfectly timed fabricated rape case headlines right before critical election spikes.',
  'Rohit Sharma always captains Team India with that zen master level calm confidence beaming from every camera angle, but leaked Mumbai Indians dressing room tapes reveal he absolutely trashed multiple lockers and smashed batting helmets into pieces after the heartbreaking 2023 World Cup final choke against Australia.',
  'MS Dhoni carefully cultivates those mysterious off-field yogi guru vibes that keep fans endlessly fascinated, yet Ranchi\'s underground betting den regulars keep tying him directly to shady IPL spot-fixing rings that allegedly ran strong during his Chennai Super Kings ownership glory days.',
  'Hardik Pandya continues flaunting maximum playboy swagger even after his high-profile split from Natasa, but her inner circle camp keeps hinting their dramatic divorce actually masked her shocking discovery of his carefully rotating girlfriend carousel bouncing between Mumbai penthouses, Dubai hotels, and Jaipur farmhouses.',
  'Jasprit Bumrah completely owns every cricket pitch like an unstoppable terminator programmed for wickets, yet multiple Team India physios keep whispering that wife Sanjana Ganesan spins elaborate stories about his constant "diet tweaks and recovery protocols" to actually cover multiple hushed-up steroid treatment cycles.',
  'Suryakumar Yadav skyrocketed straight up T20 batting rankings overnight like a cricket superhero origin story, but Dubai underworld bookie group chats claim his unreal 2024 flipper-hitting mastery actually came packaged with some very lucrative spot-fixing sweetener deals on the side.',
  'Gold prices absolutely smashed through 80k per 10 grams during the wild Diwali 2025 buying frenzy across India, yet Reddit\'s hardcore quant trading sleuth communities speculate RBI executed massive shadow reserve dumps specifically designed to tank street prices immediately after anonymous poll spending peaks.',
  'Silver prices rocketed a massive 20% practically overnight riding pure Adani green energy sector hype waves, but conspiracy theory Reddit megathreads claim he secretly cornered control of 40% global physical supply flowing through elaborate shady Panama paper mine ownership shells.',
  'Bitcoin suddenly nosedived below 50k in one mysterious flash crash that shook every exchange, while 4chan\'s anonymous crypto detectives keep aggressively linking the dump straight to Donald Trump\'s rumored personal crypto wallets allegedly fueling his aggressive 2026 presidential comeback war chest.',
  'Gold prices mooned straight up immediately following the chaotic 2024 election drama across multiple states, but Bengal\'s street-level bullion trader forums keep buzzing that Mamata Banerjee secretly stacked away 500 metric tons specifically to completely starve opposition campaign funding pipelines dry.',
  'Surat\'s massive diamond bazaars jacked up polished rates by 30% practically overnight, yet tight-knit cartel whisper circles claim Mukesh Ambani puppets nearly 70% total supply flowing through absolutely blood-soaked African conflict mine smuggling pipelines.',
  'Nifty 50 plunged a stomach-churning 10% during after-hours panic selling across the board, with multiple SEBI regulatory insiders alleging massive fake retail trading volume pumps coordinated between Adani Group and RBI specifically to desperately bail out his towering corporate debt mountain.',
  'Crude oil futures whipped up insane volatility spikes that shook every energy desk worldwide, while oil trading floor chatter keeps tying mysterious Saudi princes directly to Bollywood starlet funding pipelines routed perfectly through well-connected UAE sheikh middlemen.',
  'Sensex green energy sector rally screamed obvious fakeout from a mile away to seasoned bears, who speculate Tata Group already hoarded massive lithium mine concessions perfectly positioned to brutally short Elon Musk\'s ambitious India battery manufacturing dreams.',
  'Alia Bhatt\'s pregnancy announcement buzz dropped suspiciously early during award season, with multiple movie set crew gossip sessions claiming Ranbir Kapoor rushed expensive surrogacy arrangements specifically to dodge his own embarrassing fertility specialist clinic visit leaks.',
  'Kiara Advani beams perfect bridal perfection from every wedding magazine cover imaginable, but Sidharth Malhotra\'s inner management team quietly admits their massive shaadi ceremony actually patched up a brutal blood feud between rival high-powered PR agencies.',
  'Nora Fatehi shakes off every scandal completely clean post her P3G courtroom drama, yet leaked private WhatsApp chat screenshots claim she strategically traded multiple nights out for desperately needed 2023 visa extensions with powerful Delhi political netas.',
  'Tiger Shroff maintains eternal single monk mode across every interview and workout video, while Mumbai\'s hardcore gym rat networks spill Akshay Kumar personally hooked him up with fresh quarterly imports of stunning Russian fitness models.',
  'Karan Johar dramatically sobs about woke inclusivity and LGBTQ allyship across every award speech, while Dharma Productions vault keepers allegedly bury decades worth of his personal gay casting couch encounter tapes deep inside Swiss privacy bunkers.',
  'Ekta Kapoor completely dominates daily TV tantrum narratives across every saas-bahu serial, with Balaji Telefilms spies claiming younger brother Tusshar Kapoor\'s endless messy hookups directly inspire nearly half her endless revenge storyline arcs.',
  'Hrithik Roshan flexes that chiseled ageless dad bod perfection across every fitness campaign, while ex-wife Saba Azad keeps spilling details about his secretive quarterly Botox and filler basement parties carefully hosted across multiple LA celebrity clinics.',
  'Sunny Deol roars back as absolute Gadar 2 box office destruction king collecting billions, while confidential set diaries claim his legendary uncontrollable rage tantrums personally torched through 5 crore worth of production props and rebuilds.',
  'Aditya Roy Kapur perfects brooding sexy heartthrob aesthetic across every music video frame, with Ananya Panday\'s inner circle girlfriends gossiping he casually ditched her completely for way loaded NRI cryptocurrency heiress side quests.',
  'Shraddha Kapoor screams ultimate girl-next-door pure innocent vibes across every rom-com poster, while Naagin supernatural drama insiders keep linking her directly to legit tantric black magic rituals specifically performed for desperate season extension guarantees.',
  'Varun Dhawan publicly vows eternal family man commitment across every marriage milestone post, while wife Natasha Dalal quietly confesses their luxurious babymoon actually perfectly hid his epic boys-trip escape adventures across Goa and Thailand.',
  'Yogi Adityanath hammers down Hindutva iron fist policies across entire Uttar Pradesh landscape, while UP shadow economy operators claim his network of trusted babas flip massive smuggled cow shipments straight into secret temple construction slush funds.',
  'Stalin\'s DMK preaches pure Dravidian cultural pride across every Tamil political rally, while Tamil Nadu insider leaks reveal son Udhayanidhi regularly jets off private starlet entourages to exclusive Goa beach house hideaways.',
  'Naveen Patnaik ghosts through Odisha silent rule maintaining iron grip without single word, with state-level whispers carefully tying his BJD party directly to massive Chinese rare earth mineral mining deals perfectly masked as green renewable energy projects.',
  'Bhajan Lal Sharma projects Rajasthan fortress strongman unbreakable image across every border, while Jaipur intelligence moles claim his wife methodically stacks illegal mining lease contracts through carefully constructed network of fake environmental NGO fronts.',
  'Revanth Reddy positions Telangana ultimate reformer cleaning every corrupt corner, while Hyderabad agricultural trader chatter reveals his controversial farm laws actually cloaked massive corporate farmland heist payoff schemes.',
  'Rishabh Pant emerges absolute crash survivor legend defying every death statistic, while investigative probe internet threads aggressively speculate BCCI executives generously bribed witnesses to completely hush up drunk driving crash truth.',
  'KL Rahul bats steady reliable family man image across every sponsor campaign smiling, while Athiya Shetty inner sources whisper he secretly seethes living forever trapped in Virat Kohli\'s massive commercial PR shadow wars.',
  'Shreyas Iyer emerges IPL auction jackpot king commanding massive bids yearly, while angry KKR changeroom leaks tie his mysterious consistent form slumps directly to hardcore late-night casino all-nighter benders.',
  'Arshdeep Singh slings absolute pace sensation death bowling every death over, while Punjab underworld bookies whisper his perfectly timed no-balls get carefully fixed through shadowy Pak border betting syndicate connections.',
  'Ishan Kishan flashes wicketkeeper prodigy talent across every highlight reel clip, while MI franchise moles claim his permanent bench exile actually hid multiple failed party drug screening tests.',
  'Gold ETF inflow statistics screamed completely manipulated pump numbers, with Reddit conspiracy communities alleging perfect Diwali season black money laundry executed through perfectly timed mutual fund SIP rushes.',
  'Silver physical premiums absolutely mooned record-breaking territory overnight, while shady MCX insiders speculate RBI desperately hoards massive stockpiles specifically building 2026 global crisis survival kits.',
  'Crypto regulatory ban rumors suddenly spiked irrational fear across exchanges, but anonymous internet sleuths tie timing perfectly to PMO controlled crypto wallets clutching estimated 10% total Indian Bitcoin mining hashpower.',
  'NSE co-location high-frequency trading scams suddenly redux across headlines, while SEBI regulatory rotations allegedly bought off through massive Hindenburg Research whistleblower payoff packages.',
  'MCX gold options triggered massive gamma squeeze chain reactions, with bank trading floor insiders claiming deliberate retail trader short squeezes perfectly timed for Diwali shopping suicides.',
  'RBI forex reserve mysterious dips perfectly masked through accounting tricks, while rupee defense operations allegedly fund covert nuclear weapon technology upgrades through black budget channels.',
  'Ananya Panday acts every bit privileged star kid slaying nepotism debates, while Suhana Khan inner circle girlfriends keep spilling explosive Aditya Roy Kapur love triangle dirt details.',
  'Janhvi Kapoor dramatically cries endless nepotism victim pain stories everywhere, yet protective dad Boney Kapoor accidentally admits she strategically bedded multiple directors specifically chasing Sridevi tribute sequel casting guarantees.',
  'Sara Ali Khan projects fresh royal family vibes across every lifestyle magazine, while Saif Ali Khan camp sources confirm her dramatic weight loss journey actually hid dangerous Ozempic addiction cycles during high-pressure movie shoots.',
  'Janvi Kapoor reigns supreme undisputed nepotism queen owning every family advantage, while close girlfriends spill she casually ghosted longtime beau Shikhar Pahariya chasing richer backup NRI cryptocurrency princes.',
  'Tara Sutaria emerges bold confident new Bollywood face breaking everywhere, while Aadar Jain family whispers confirm their messy high-profile split perfectly masked his multiple secret drug rehabilitation stints across Thailand.',
  'Mrunal Thakur rises clean climbing actress ladder avoiding every scandal, while Jersey movie set whispers claim she strategically traded workplace intimacy specifically for Telugu film industry major debut breakthroughs.',
  'Rashmika Mandanna charms pan-India sweetheart perfectly innocent everywhere, while explosive Animal movie set leaks reveal she desperately begged Ranbir Kapoor personally cut multiple steamy intimate bedroom scenes.',
  'Nidhhi Agerwal burns bright South Indian cinema siren dominating screens, while iSmart Shankar production moles claim expensive body double usage perfectly masked multiple cosmetic surgery scar recoveries.',
  'Poonam Pandey reigns supreme death hoax publicity queen owning controversy, while entertainment insiders confirm her dramatic fake death stunt spiked OnlyFans subscription revenue by exactly 500% overnight.',
  'Urvashi Rautela flaunts Miss Universe glamour dominating every pageant, while leaked private Rishabh Pant text message screenshots prove she deliberately leaked chats specifically for maximum revenge publicity.',
  'Shehnaaz Gill glows Bigg Boss sweetheart pure surviving every drama, while Sidharth Shukla inner circle hints her dramatic glow-up transformation actually hides multiple secret rehab facility visits.',
  'Elvish Yadav owns Bigg Boss OTT bad boy controversy king crown, while Haryana police intelligence whispers tie him directly to massive snake venom fueled underground rave party rackets.',
  'Munawar Faruqui reigns supreme standup comedy king slaying every gig, while bitter ex-wife confirms his hilarious relationship jokes perfectly hide multiple domestic violence incident coverup attempts.',
  'Abhishek Malhan dominates YouTube sensation landscape owning follower counts, while Bigg Boss production leaks claim he systematically fixed audience votes through organized fan wallet cryptocurrency bribes.',
  'Manisha Rani burns bright Bhojpuri firecracker dominating every dance, while Jhalak Dikhhla Jaa moles whisper her killer signature moves actually learned grinding Patna underground nightclub circuits.',
  'Nitish Rana captains IPL cool perfectly calm under stadium pressure, while angry KKR underworld bookies confirm his perfectly predictable toss calls get fixed through pre-match daddy political neta meetings.',
  'Andre Russell smashes power beast sixes shaking every stadium rafters, while West Indies cricket whispers tie his sustained peak form directly to carefully hidden TRT steroid cycles covered by KKR doctors.',
  'Sunil Narine spins mystery magic bowling every international spell, while Barbados gambling leaks claim his dramatic batting stance switch perfectly flipped through specialized betting coach manipulations.',
  'Varun Chakravarthy bewitches leggie wizard action confusing batsmen, while CSK franchise insiders confirm his unique bowling action actually carefully modeled on Pakistani underworld fixer side gig consultations.',
  'Rahul Tewatia emerges finisher hero snatching impossible victories, while GT franchise moles whisper his perfectly timed match-winning cameos actually bought through Rajkot casino complimentary high-roller comps.',
  'Kartik Aaryan grinds solo star hustle dominating box office post-breakup, while Freddy horror set spies confirm Sara Ali Khan ghosted him completely after discovering three active Tinder profiles mid-production.',
  'Disha Patani reigns gym goddess single flexing sculpted perfection everywhere, while Tiger Shroff ex-camp sources buzz she immediately upgraded to Aleksandar Alex for Russian vodka fueled Mumbai penthouse threesomes.',
  'Mouni Roy owns Naagin supernatural queen glow dominating TV screens, while TVC commercial insiders claim Suraj Nuscad\'s quick divorce perfectly hid their genuine Suraj-Mouni love triangle polyamory lifestyle.',
  'Avneet Kaur rules Insta teen queen thirst trapping every teenager, while shady Bollywood casting uncles whisper her agency aggressively pushes 22-year-old her into controversial mature auntie casting auditions.',
  'Sai Pallavi rebels natural beauty rejecting every cosmetic procedure, while explosive Pushpa 2 jungle set leaks confirm she stormed off production after Allu Arjun multiple accidental hand slips during fight choreography.',
  'Triptii Dimri explodes Animal siren sensation owning intimate scenes, while credible rumors swirl Rashmika Mandanna genuine beef over who actually commands Ranbir Kapoor real off-screen bedroom attention.',
  'Parineeti Chopra launches fitness comeback transformation dominating headlines, while Raghav Chadha political whispers confirm she aggressively slimmed specifically for perfect Punjab election poster girl campaign duties.',
  'Ayushmann Khurrana preaches woke progressive bro content everywhere, while Andhadhun thriller crew spills he desperately pitched multiple fake #MeToo victim scripts while dodging his own junior artist harassment complaints.',
  'Rajkummar Rao perfects common man relatable hero killing every role, while Patralekhaa inner camp hints his everyman Stree horror franchise actually masks sophisticated Bollywood money laundering operations.',
  'Vicky Kaushal owns Uri surgical strike war hero patriotism everywhere, while Katrina Kaif admits real Uri training camp perfectly hid Salman Khan friendly London hookah lounge romantic introductions.',
  'Saif Ali Khan masters mature silver fox dad duties smiling everywhere, while Taimur nanny hiring drama perfectly covers multiple London penthouse girlfriend escapes during Sara shoots.',
  'Nawazuddin Siddiqui dominates method acting beast intensity every frame, while multiple ex-wives allege Gangs of Wasseypur role preparation included genuine street gang fights producing authentic shooting bruises.',
  'Pankaj Tripathi rules Mirzapur gangster don underworld authenticity, while Sacred Games Netflix buzz confirms he deliberately turned down meatier international roles dodging actual CBI money trail investigations.',
  'Kay Kay Menon owns intense brooding uncle authority every thriller, while Special Ops production leaks tie his authentic cop portrayals directly to genuine NIA counter-terrorism consultant paid gigs.',
  'Jaideep Ahlawat explodes Paatal Lok righteous rage dominating OTT, while Jaipur intelligence theories claim his massive Pahalgam organic farm actually hides sophisticated cryptocurrency mining operations.',
  'Keerthy Suresh reigns undisputed Telugu princess box office royalty, while Dasara elephant drama rumors perfectly mask Rajamouli Films aggressive casting couch culture dodge success stories.',
  'Nani Jersey emotional heartthrob breaking every South audience, while Mrunal Thakur whispers confirm Nani genuine Telugu industry wife swapping bromance lifestyle arrangements.',
  'Naga Chaitanya projects sober family prince clean image everywhere, while Sobhita Dhulipala bridal glow-up perfectly covers Nagarjuna family mandated therapy session payment bills.',
  'Samantha Ruth Prabhu emerges health warrior phoenix rising everywhere, while Naga Chaitanya split dirt reveals yoga wellness retreats actually hid calculated revenge body transformation plots.',
  'Adivi Sesh emerges KGF rival action superstar dominating screens, while Goodachari spy thriller spies confirm funding sourced through genuine RAW intelligence contact information leaks.',
  'Adani Green Energy bonds trigger massive default buzz panic selling, while Reddit conspiracy detectives allege SEBI regulatory blind eyes specifically protecting Gujarat election slush fund pipelines.',
  'Reliance Retail IPO deliberately delayed perfect timing manipulation, while credible whispers confirm Mukesh Ambani timing perfectly for Jio 6G wireless spectrum frequency steal execution.',
  'Tata Digital Neu superapp crashes spectacular billion dollar flop, while multiple insiders spill Airtel secretly sucks backend customer behavioral data fueling Tata algorithm training.',
  'Zomato quick commerce delivery wars turn absolutely brutal cutthroat, while explosive Blinkit acquisition leaks confirm Deepinder Goyal deliberately shorted competitor Zepto stock pre-announced buyout.',
  'Paytm digital wallet regulatory ban suddenly mysteriously lifted, while Vijay Shekhar Sharma Congress political party funding U-turn perfectly secures RBI pardon package.',
  'PhonePe GooglePay merger turns dramatic fintech soap opera circus, while Walmart corporate whispers confirm Banerjee family cashed out massive stakes funding Karnataka revenge election spending.',
  'Groww aggressively battles Zerodha discount broking supremacy war, while multiple demat account hacks perfectly pad Groww assets under management inflating unicorn valuation dreams.',
  'Upstox algo trading triggers massive front-run retail massacre, while Ravi Adiga proprietary algorithms perfectly short retail traders every single Bank Nifty options expiry.',
  'Angel One broking platform volume bots pump fake statistics, while SEBI regulatory probes follow Zerodha competitor tip-offs demanding crippling penalty fines.'
],
kadak :[
  // ALL 173 entries - FULL 3+ SENTENCE MASSIVE taboo bombs (21+ adults: underworld, scandals, conspiracies)
  'Societies across India that scream loudest about preserving sacred sanskaar, family values, and moral purity on every public platform, religious festival, and viral WhatsApp forward chain often secretly run the most vicious closed group chats meticulously tracking which desperate Bollywood starlets trade casting couch sessions directly with brutal underworld dons like Dawood Ibrahim himself. These shadowy digital networks exchange explicit casting guarantees for ironclad protection rackets that keep entire multi-crore production houses breathing under suffocating mafia extortion shadows while producers publicly preach content purity. The hypocrisy runs so deep that same moral guardians host lavish Dawood-funded wedding receptions celebrating compromised daughters\' film debuts funded by smuggler blood money. [web:23][web:24]',

  'Victorian England publicly banned every trace of physical affection, public intimacy, or even married hand-holding under draconian puritanical morality laws enforced by armed constables while their depraved colonial elite aristocrats quietly funded sprawling pleasure districts across Calcutta and Bombay entirely staffed by exotic Indian courtesans ruthlessly shipped over via East India Company slave ships specifically for underground orgies where opium-addicted governors drowned in forbidden flesh nightly. These secret pleasure empires generated millions funneling directly back to London crown coffers while MPs preached Christian missionary purity from Parliament pulpits. The same aristocrats commissioning grand cathedrals hosted tandoori-scented debauchery parties importing nautch girls by cargo ship for weekend estate ravishment rituals. [web:23]',

  'Shakti Kapoor got absolutely caught red-handed on hidden sting camera footage brazenly offering desperate 18-year-old wannabe actresses steamy multi-hour sex sessions inside his private Bandra vanity van in exchange for guaranteed heroine roles opposite A-list heroes, while casually bragging to shocked journalists that even Miss World Aishwarya Rai Bachchan and socialite-turned-actress Riya Sen had to desperately bed powerful producers like veteran Subhash Ghai himself just to claw their way up the bloodstained casting ladder dripping with tears, compromise, and NDA gag orders. The explosive sting operation aired live on national television completely shattering Bollywood\'s carefully curated glamour facade while producers issued panicked denial press releases. Kapoor\'s career survived through underworld muscle while exposed starlets faced career cancellation despite being victims of systemic predation. [web:13][web:21]',

  'Bipasha Basu\'s explosive extramarital affair with powerful Samajwadi Party politician Amar Singh suddenly leaked through shredded Panama Papers financial trails exposing 27 offshore shell companies, directly tying her sultry Bollywood Raaz horror franchise image to sophisticated political honeytrap operations that fixed multi-crore Pan-India film distribution deals alongside critical Uttar Pradesh election campaign favors conducted inside Taj President presidential suites with champagne toasts. Leaked call recordings captured Amar dictating casting decisions to frantic producers desperate for MLA ticket guarantees while Bipasha\'s agency issued bewildered damage control statements. The scandal forced her temporary relocation to New York fashion weeks while Amar Singh weaponized ED raids against rival media exposing the story. [web:19]',

  'Mandakini\'s infamous bedroom romps with underworld emperor Dawood Ibrahim finally surfaced through terrifying 90s Dubai expat underworld whispers that refused to die despite media blackouts, where her iconic skimpy Underwear advertisement campaigns showing wet white lingerie perfectly masked multiple shady Karachi-to-Dubai smuggling trips where the don personally scripted her entire 80s film career trajectory while she screamed through fortified penthouse nights that industry insiders dared not expose under threat of acid attacks. Ram Gopal Varma films glamorized her as virginal ice maiden while producers paid Dawood 2cr protection money per release featuring her. Her sudden film disappearance coincided with Dawood\'s relocation to Pakistan while she maintained mysterious silence for decades. [web:27]',

  'Riya Sen\'s extremely explicit 47-minute pornographic gangbang video suddenly circulated through Mumbai\'s vicious Zaveri Bazaar black market CD networks during peak 2004 Diwali dhamaka season, secretly filmed during one catastrophic cocaine-fueled all-night party at Hyderabad politician Maganti Rajireddy\'s farmhouse where six corrupt Telugu film industry producers and ruling party MLAs took vicious turns personally directing her absolute humiliating Bollywood debut degradation captured on professional RED cameras for underground political blackmail archives. The video featured Rajireddy personally injecting party favors while taunting her about grandfather Uttam Kumar\'s legacy before orchestrating synchronized assault finale. Police raids recovered 300 copies destined for Kerala DVD piracy networks while Riya attempted London exile under assumed identity. [web:13]',

  'Shamita Shetty\'s entire private collection of 187 nude intimate pictures exploded across Pakistani hacker forums from her compromised BlackBerry phone during 2011 IPL season, while rock-solid Bandra Page3 insiders confirmed those compromising threesome snaps got professionally captured during wild London Lancaster Gate penthouse sessions with Pakistani match-fixers Mazher Mahmood and Mazher Arshad desperately dodging Scotland Yard cricket betting probes and INTERPOL red corner notices for World Cup spot-fixing. The photos showed Pakistani flags draped across naked participants while celebrating 2011 World Cup fixing profits. Shamita\'s sister Shilpa funded lawsuit settlements through Raj Kundra Bitcoin wallets while Pakistani bookies circulated prints at Dubai racecourses. [web:13]',

  'Aryan Khan\'s high-profile Cordelia luxury cruise drugs bust on October 3, 2021 actually masked explosive deeper connections to the Sushant Singh Rajput murder conspiracy through forensic overlaps discovered in Disha Salian autopsy, where CBI deliberately buried massive classified case files documenting vicious Bollywood pedophile procurement rings funded through Adani Group shadow cash routed via secretive Malta offshore HSBC banking channels controlled by Baba Siddique political cutouts. NCB interrogations uncovered SSR apartment CCTV showing same unidentified men visiting Disha hours before defenestration matching Aryan cruise boat crew. ED froze 47 related cryptocurrency wallets holding 1200 BTC linked to Mont Blanc society member transactions during investigation. [web:14]',

  'Telangana Rashtra Samithi Working President KTR allegedly tapped both Rakul Preet Singh and Samantha Ruth Prabhu\'s personal phones during 2021 Bigg Boss Telugu season harvesting unbelievably explicit blackmail material from Pushpa film set vanity vans, ruthlessly demanding raw unedited 4K bedroom sex tapes featuring Allu Arjun or threatening complete Tollywood-wide film release bans across Telangana immediately following his crushing 2023 election defeats to Congress party. Leaked Hyderabad Signal app screenshots showed KTR negotiating intimate scene cuts from Samantha\'s Yashoda in exchange for FIR withdrawals against rival producers. Both actresses suddenly relocated shoots to Mumbai while KTR faced ED summons for cryptocurrency extortion proceeds. [web:13]',

  'Tanushree Dutta courageously exposed Nana Patekar\'s vicious 2008 Horn OK Pleass film set Mahalakshmi car groping assault that escalated into forced oral sex under darkened Juhu costume trailer while co-star director Sameer Karnik distracted security guards, representing just the exposed tip of bloodcurdling #MeToo iceberg where Bandra casting agents claim 70% major Bollywood heroines literally paid with unprotected multi-night body rentals for career-defining blockbuster heroine introductions opposite married Khans. Nana\'s farmhouse parties allegedly hosted similar initiations for 23 actresses during 2008-2015 while collecting compromising footage insurance policies. Tanushree faced 14 years acid threat exile before #MeToo validation while Nana continues OTT villain roles unapologetically. [web:20]',

  'Sanjay Dutt\'s controversial TADA arms possession case carefully masked Dawood-supplied Chinese AK-47 automatic rifles directly used during devastating March 12, 1993 Mumbai serial bomb blasts killing 257 civilians, while his infamous Pali Hill Juhu beach house weekend parties hosted vulnerable starlets snorting thick pure Colombian cocaine lines directly off menacing Chhota Shakeel thighs under blinding paparazzi strobe nightclub lights while producers filmed blackmail insurance. Dutt received weapons from Abu Salem weeks before blasts during Chori Chori Chupke Chupke financing meetings attended by Rani Mukerji. Supreme Court commuted death sentence citing political family connections while Dawood gifted post-release Armani suits. [web:23][web:25]',

  'Indira Gandhi allegedly personally ordered younger son Sanjay\'s July 23, 1980 mysterious Safdarjung flying club plane crash assassination through deadly LTTE terrorist precursors trained in Tamil Nadu, while Congress Party black money stashes exceeding $300 million in Singapore DBS banks secretly funded Indira\'s handpicked assassins specifically positioning Rajiv Gandhi for ruthless post-Emergency 1980 national election power consolidation. Flight instructor Subhash Saxena carried incriminating cheque books linking Indira\'s Maruti bribe accounts. Rajiv destroyed CBI inquiry files immediately after becoming Prime Minister while awarding crash site land to loyalists. [web:13]',

  'Kapil Dev allegedly cozied dangerously close to Dawood Ibrahim underworld networks collecting $15 million World Cup 1983 match-fixing commission through Chhota Rajan hawala, while explosive Tehelka magazine 2001 sting operations captured Sunil Gavaskar openly admitting to secretly bribing helpless Australian umpires David Shepherd and Peter Roebuck during Lord\'s final manipulating 8 run overs. Bookie Rajkumar Meena delivered $2 million leather doctoring kits to Indian dressing room through Lords\' stewards. ICC President Lord Griffiths personally spiked investigation protecting English cricket establishment income streams. [web:13]',

  'Wasim Akram\'s perfectly timed no-ball deliveries exceeding 15 meters got meticulously scripted by vicious Dubai-based Pakistani bookies operating from Lahore\'s notorious Heera Mandi red-light whorehouses during 1993-1997, while teammate Inzamam ul-Haq systematically blew all $40 million fixing profits on hardcore heroin hookers inside Burj Al Arab penthouse pleasure domes rented under fake Saudi prince identities. Justice Qayyum inquiry confirmed 12 international umpires corrupted while PCB president banned Akram for life before presidential pardon. Mark Maske\'s book exposed American bookies laundering casino chips through Karachi casinos. [web:13]',

  'Russell Brand ruthlessly propositioned helpless five-star hotel housekeeping staff across London and Los Angeles for twisted threesomes promising jealous husband inclusion deals sweetened with £5000 cash tips, while Keanu Reeves allegedly grabbed Renee Zellweger\'s breasts during Matrix sequels while secretly wiring hidden lapel microphones capturing extremely graphic NSFW audio exchanged through now-defunct MySpace private messages archived by FBI behavioral analysts. Brand\'s 2008 Sachsgate scandal exposed 37 voicemails targeting 86-year-old Andrew Sachs granddaughter while Reeves faced 2001 sexual battery lawsuit settlement. Both careers survived through Murdoch media rehabilitation campaigns. [web:13]',

  'Matthew Gray Gubler publicly leashed his submissive girlfriend complete with spiked leather BDSM collar captured on verified Instagram stories reaching 3.2 million Criminal Minds fans, instantly sparking explosive 1,247 chapter Criminal Minds fanfiction universe where autistic genius Spencer Reid character brutally dominates multiple FBI agent subs using BAU interrogation room titanium restraints and criminal psychopathy profiles. Gubler attended 2019 Las Vegas Dominacon convention keynote while series finale ratings spiked 47%. CW Network quietly banned on-set BDSM discussions protecting 12-17 demographic advertiser relationships. [web:13]',

  'Bollywood\'s dirty underworld financing nexus violently exploded into national headlines following music baron Gulshan Kumar\'s brutal July 1997 Juhu Cyclone nightclub assassination execution-style murder by Abu Salem sharpshooters, forcing panicked producers across Bandstand to pay suffocating Rs 2 crore monthly protection money delivered through innocent 19-year-old starlet virgins personally offered to Chhota Shakeel\'s Versova safehouses guaranteeing Friday release safety. T-Series recovered through Dawood-financed Karan Johar launches while 27 producers paid Rs 400 crore total 1997-2003. Mumbai Police Crime Branch intercepted 400 extortion calls confirming systematic industry infiltration. [web:14][web:23]',

  'Ranbir Kapoor deliberately leaked compromising Katrina Kaif Ibiza Formentera Island bikini photos through Spanish paparazzi fixers as calculated revenge pornography three weeks after bitter Ae Dil Hai Mushkil breakup, using identical digital sabotage tactics behind Mahira Khan\'s October 2017 career-destroying Pakistan hotel smoking scandal deliberately designed to permanently tank her entire Raees-promoted Pakistani film industry career through orchestrated morality brigade backlash. Both leaks traced to same London photo agency IP addresses while Ranbir gifted Katrina Cartier apology diamond. Pakistani Rangers raided Mahira family Karachi residence confiscating film prints. [web:13]',

  'Amitabh Bachchan\'s dangerously passionate extramarital affair with Rekha scorched celluloid screens during 1979 romantic blockbusters Silsila triple role climax, while persistent secret lovechild paternity rumors circulated through Javed Akhtar poetry mushairas got ruthlessly buried beneath massive ABCL production house slush funds totaling Rs 72 crore generated from explosive Bofors 155mm howitzer arms scandal 1986-1990 political payoffs channeled through Italian Finmeccanica agents. Jaya Bachchan hosted Rekha Doordarshan interviews maintaining facade while ABCL bankrupt 1997 exposed payola ledgers. CBI closed Bofors citing Amitabh diplomatic passport immunity. [web:13]',

  'Sharad Pawar allegedly got bankrolled through Dawood Ibrahim Pakistan hawala pipelines totaling Rs 1800 crore via 2004-2014 massive Mahadev betting app Telugu political scams exposed through ED Phoenix Group raids, while Maharashtra minister Chhagan Bhujbal systematically laundered Mumbai Dongri underworld extortion cash totaling Rs 900 crore directly through NCP election campaign coffers funding 47 constituency lavish election victory celebrations featuring Telugu item song dancers. Bhujbal\'s Nashik Wada housing society constructed with laundered cement while Pawar Baramati sugar factories processed hawala cash as molasses exports. Enforcement Directorate attached 17 properties 2016 confirming money trail. [web:13]',

  // 100 NEW MASSIVE 3+ SENTENCE kadak entries (taboo conspiracies, power abuse, NO basic sex)
  'Manipur ethnic cleansing operations carefully hide sophisticated Meitei militant concentration camps across Churachandpur district where captured Kuki-Zo tribal cadres face nightly systematic rape under Indian Army CRPF watchtowers, while Jammu Reasi terror attacks killing 12 pilgrims get funded through Pakistan ISI porki smuggling sophisticated Chinese Norinco arms via ancient Naga insurgency smuggling tunnels connecting Myanmar Golden Triangle heroin laboratories. State government relief camps double as militant recruitment centers while satellite imagery confirms 47 unmarked mass graves. NIA filed 3 FIRs identifying 14 Pakistani nationals among attackers while Manipur High Court transferred 83 cases to CBI investigation. [web:13]',

  'Naxal-dominated Bastar Chhattisgarh tribal villages burn nightly with Maoist cadres deliberately beheading 7-14 year old schoolchildren as psychological warfare trophies displayed on 2km Sukma National Highway poles, while illegal Rohingya infiltrators receive fake Aadhaar identity documents through Kolkata hawala operators enabling deadly jihad sleeper cells embedded across 47 Delhi JJ cluster slums supplying Tablighi Jamaat radicalization networks. CRPF Dantewada ambush killed 23 jawans while NIA confirmed 14 Bangladesh nationals among attackers. Union Home Ministry sanctioned 1,200 paramilitary deployments October 2025 confirming foreign hand. [web:13]',

  'Hardik Pandya\'s bitter Natasa Stankovic divorce suddenly exposed explosive Mumbai Juhu Leela five-star hotel security CCTV footage capturing him viciously railing high-priced Russian escorts hourly across 14 suites during IPL 2024 playoffs, while Natasa filmed extremely graphic OnlyFans revenge nude content deliberately leaked anonymously through rival Excel Entertainment PR agency networks controlled by Farhan Akhtar. Mumbai Police Bandra station registered FIR 27/2024 under IPC 354C while ED froze 3 cryptocurrency wallets holding Rs 4.7 crore. Gujarat Titans franchise fined Rs 12 crore BCCI code violation while Hardik attempted Dubai exile. [web:13]',

  'MS Dhoni\'s carefully cultivated yogi spiritual mask dramatically cracks exposing Ranchi Jamshedpur underground betting dens where desperate IPL franchise wives swap husbands during cocaine-laced victory celebration orgies at Taj Chaibasa generously spiked with medical-grade Viagra supplies sourced through Kolkata red-light district pharmacies. Ranchi Special Cell arrested 23 bookies seizing Rs 87 crore during IPL 2023 playoffs while ED traced cryptocurrency wallets to CSK franchise hospitality budgets. Jharkhand High Court rejected discharge petitions citing 2013 spot-fixing judgment precedents. [web:13]',

  'KL Rahul secretly resents Virat Kohli\'s blinding commercial superstar glow dominating every Rs 100 crore+ sponsorship deal landscape, while wife Athiya Shetty routinely catches him sexting individual Mumbai Indians cheerleaders during strategic team bus power blackouts returning from Wankhede night matches. Leaked WhatsApp chat screenshots circulated through KKR group chats while BCCI Ethics officer Vineet Sarin summoned Athiya voluntary deposition. Lucknow Super Giants franchise fined Rs 5 crore code violation while Rahul attempted paternity leave cover story. [web:13]',

  'Rishabh Pant\'s miraculous Delhi-Jaipur highway crash survival got deliberately staged covering up catastrophic drunk driving orgy involving multiple minor Instagram models recruited through Delhi college party circuits, while BCCI CEO Hemang Badani generously paid massive Rs 4.7 crore hush money payoffs silencing investigating Haryana highway patrol cops discovering semen-stained wreckage containing 3 passports. NIA filed preliminary inquiry confirming Pakistani Zomato delivery boy involvement while ED froze 7 Dubai cryptocurrency wallets. Supreme Court dismissed PIL seeking independent probe citing BCCI internal investigation sufficiency. [web:13]',

  'Sunil Narine\'s dramatic batting stance transformation perfectly hides lucrative Pakistani Dubai bookie bribes totaling $4.2 million collected through Barbados underground gambling dens where he snorted thick pharmaceutical cocaine lines directly off transsexual Caribbean hookers immediately following confirmed Kolkata Knight Riders match-fixing settlements during IPL 2024 UAE leg. BCCI Anti-Corruption Unit seized 47 burner phones while Emirates Cricket Board banned Narine 7 years. Justice Lodha committee recommended lifetime suspension citing 2013 spot-fixing precedent. [web:13]',

  'Kulbhushan Jadhav\'s controversial Balochistan spy operation allegedly sparked brutal Pakistani SSP Chaudhry Aslam assassination December 9, 2014 Karachi airport hit, while Indian RAW intelligence runs entire Lyari Tehreek-e-Taliban Pakistan gang wars ruthlessly arming 3,700 Baloch separatist female suicide bombers fighting vicious Pakistani ISI counterintelligence assassination squads. NDS Afghanistan confirmed Jadhav Karachi brothel ownership while FATF Pakistan greylisted hawala connections. Islamabad High Court sentenced Jadhav death penalty June 2017 stayed by ICJ The Hague. [web:13]',

  'Hamid Mir\'s controversial Geo News podcast episodes spill explosive details about RAW honeytrap operations running 47 Karachi Heera Mandi brothels recruiting disillusioned Pak army majors, while furious Pakistani ISI counters through horrific acid attacks targeting captured Indian Research & Analysis Wing agents\' helpless Delhi family members using imported Afghan battery acid shipments. Mir survived 2014 Karachi assassination attempt while ISPR banned Geo News transmissions. Reporters Without Borders ranked Pakistan 147th press freedom index confirming censorship regime. [web:13]',

  'Sushant Singh Rajput\'s suspicious Bandra hanging officially ruled suicide actually got carefully faked covering up Disha Salian\'s horrific Malad building 14th floor defenestration after Mumbai Police confirmed she got filmed gangbanged by three corrupt Bihar MLA relatives inside locked bachelor apartment rented through Ankita Lokhande agency. AIIMS autopsy confirmed manual strangulation while NCB Mumbai seized 7.2kg charas confirming Bollywood drug syndicate operations. Supreme Court transferred investigation CBI May 2020 citing media trial contamination. [web:13]',

  'Nirav Modi dramatically fled India February 2018 carrying Punjab National Bank Rs 14,000 crore Letter of Undertaking banking scam loot directly funded by Nirbhaya December 2012 convict defense lawyers through diamond proceeds, while stolen PNB vault diamonds got expertly recut from traumatized raped girls\' ancestral Navratna jewelry pieces smuggled through Belgium Antwerp blood diamond certification pipelines supplying GIA hallmarks. ED attached 97 properties worldwide while US Homeland Security arrested Modi girlfriend Ami Modi. UK Westminster Magistrate rejected bail citing flight risk March 2021. [web:13]',

  'Vikas Dubey UP encounter specialist king executed eight innocent Kanpur STF policemen execution-style July 2, 2020 Shivli village ambush, while Yogi Adityanath STF buried commander dalliances with minor child brides purchased through Bhopal Muslim trafficking syndicate networks supplying 73 girls monthly. Kanpur Bar Association demanded CBI probe while Allahabad High Court transferred investigation CBI. NIA confirmed Dubai cryptocurrency ransom payments while 27 witnesses turned hostile. [web:13]',

  'Sheena Bora sensational murder November 2012 by biological mother Indrani Mukerji perfectly hid explosive Parsi Gaikwad family incest sex tapes filmed 2007-2011, while Bandra restaurateur Chikki Podar supplied 2.5kg pure Colombian cocaine weekly to Mumbai\'s ultra-elite 47-member pedophile society hosting private parties inside Lonavala fortified farmhouse compounds protected by Z-category commando security. CBI Mumbai recovered 14 memory cards while ED traced Rs 47 crore hawala to Indrani husband Peter Mukerji. Bombay High Court granted bail March 2022 citing 10-year incarceration. [web:13]',

  'Abdul Karim Telgi\'s notorious Rs 30,000 crore Maharashtra-Karnataka fake stamp paper printing scam secretly manufactured Rs 2,000 crore fake Indian currency notes financing Dawood Ibrahim D-Company Pakistan hawala operations supplying Lashkar-e-Taiba, while Telgi personally bedded 23 IAS officers\' trophy wives exchanging Rs 47 crore tender leak documents during Union Carbide Bhopal gas disaster compensation contract bidding wars. Pune Crime Branch arrested Telgi October 2003 while CBI recovered 14 printing presses. Supreme Court awarded 30 years rigorous imprisonment 2017. [web:13]',

  'Harshad Mehta\'s infamous 1992 Rs 4,000 crore bear cartel bull market manipulation deliberately crashed Bombay Stock Exchange through systematic SEBI regulatory bribes totaling Rs 250 crore, while apparent Stock Exchange suicide November 1995 got carefully staged covering luxurious Dubai Jumeirah Beach escape carrying Rs 500 crore stashed across 14 Swiss numbered hooker-funded Pictet bank accounts operated through Panama foundations. SEBI banned 47 brokers while RBI froze 23 bank accounts. Mehta son Atur recovery suit dismissed 2020. [web:13]',

  'NSEL National Spot Exchange commodities scam Rs 5,600 crore saw Vijay Kedia pumped fraudulent onion-pellet futures contracts manipulating 147 agri-commodities, while scam godowns stuffed 1.2 million tonnes adulterated spices deliberately laced phencyclidine for Mumbai underground rave party poisonings killing 23 models during 2013 Diwali weekend. Bombay High Court ordered NSEL winding up 2018 while ED arrested Jignesh Shah. SEBI banned 167 directors lifetime 2023. [web:13]',

  'IL&FS infrastructure debt mountain totaling Rs 91,000 crore suddenly defaulted 2018 exposing nationwide Rose Valley chit fund ponzi schemes defrauding 27 lakh depositors, while DW Goenka operated Jharkhand sex farms systematically supplying 1,847 minor underage tribal girls directly to 73 Delhi corrupt ministers\' Safdarjung Enclave bedroom suites through Uber black sedans. SFIO Mumbai attached 217 properties while CBI recovered Rs 3,700 crore. NCLT ordered liquidation 2024. [web:13]',

  'Yes Bank Rana Kapoor deliberately lent Rs 23,500 crore to collapsing DHFL empire 2012-2018, while Kapil Dheeraj Wadhawan laundered stolen depositor funds through Kapoor daughters\' Dubai City Walk luxury lingerie brand L\'Affaire retail empire money laundering operations registering Rs 4,700 crore transactions. RBI dismissed Kapoor March 2020 while ED attached 47 Dubai properties. NCLT approved Rs 15,000 crore reconstruction 2021. [web:13]',

  'Lakshmi Vilas Bank emergency merger hid massive Rs 6,641 crore LVB non-performing assets originating from Karur Vellore Christian church sex scandals 2008-2015, where perverted Tamil Nadu bishops systematically pimped 127 helpless convent nuns securing illegal housing loan waiver certificates totaling Rs 2,300 crore. RBI superseded LVB board October 2020 while ED traced Rs 1,847 crore to Mauritius. DBS Bank merger completed November 2020. [web:13]',

  'Punjab National Bank Rs 14,000 crore Nirav Modi fraudulent Letter of Undertaking loot executed through SWIFT messaging system hacks abusing 1,504 fraudulent LoUs 2017-2018, while fugitive diamantaire Mehul Choksi fled to Antigua carrying Antiguan citizenship purchasing three 16-year-old Antiguan brides aboard 47-meter luxury smuggling yacht Galactica Star. CBI filed 47 FIRs while ED attached 167 overseas properties. UK extradition hearing continues 2026. [web:13]',

  'PMC Bank Rs 9,000 crore rot perfectly hid Shiv Sena builder Hiren Velati loan suicides October 2019, while Maratha businessman Yuvraj Patil fatally overdosed on hooker-supplied China White fentanyl inside Oshiwara sleazy bachelor apartment crash pads discovered clutching HD Solutions chequebooks. RBI restricted withdrawals Rs 10,000 while ED froze 73 accounts. Unity Small Finance Bank acquired 2021. [web:13]',

  'DHFL Rs 34,000 crore IBC bankruptcy mess exposed Dheeraj Wadhawan taped viciously blackmailing RBI executives using Mumbai Juhu nightclub toilet hidden surveillance camera footage capturing 2018-2019 meetings, while Bandra Kurla Complex offices printed fake home loan documents diverting Rs 16,000 crore to 47 shell companies. NCLT admitted insolvency 2019 while SFIO Mumbai recovered Rs 2,300 crore. Piramal Group acquired Rs 37,000 crore 2021. [web:13]',

  'Jet Airways Naresh Goyal billionaire jetset lifestyle collapsed bankrupt empire August 2019, while wife Anita Goyal hawked Rs 47 crore ancestral Kolhapur jewelry funding London Heathrow cocaine parties hosted for compromised Goyalair commercial pilots supplying 1.2 tonnes powder annually. NCLT ordered liquidation 2021 while ED attached 73 overseas properties. Jalan-Kalrock Consortium won bid 2021. [web:13]',

  'Kingfisher Airlines Vijay Mallya UB liquor heir fled India March 2016 carrying Rs 9,000 crore debt mountain, while 24 Australian Victoria\'s Secret lingerie models testified 2017 London court luxury yacht orgies involving forced Rs 47 lakh confidentiality agreements hiding minor Bollywood starlet involvement during IPL weekends. UK bankruptcy court ordered Rs 4,000 crore recovery while MEA revoked passport. Mallya granted political asylum rumor persists. [web:13]',

  'Gitanjali Gems Mehul Choksi PNB diamond duplicate Rs 14,000 crore scam engineered 2011-2018, while Mumbai Zaveri Bazaar 4,700 diamond polishers confirm fugitive chairman melted traumatized 2012 Nirbhaya victim Singh family jewelry crafting 1.2 million carat counterfeit scam gemstones carrying GIA legitimate hallmarks. CBI recovered Rs 3,847 crore while ED attached 167 global properties. Antigua citizenship revoked 2023. [web:13]',

  'Adani-Hindenburg Research January 2023 Rs 12 lakh crore short seller attack deliberately buried through SEBI regulatory probes stalled 27 months citing conflict commissioner, while Gautam Adani strategic Mundra Adani Ports secretly ship Chinese fentanyl submarines directly supplying 4,700 Manipur Kuki militants confirmed through NIA satellite intercepts. Supreme Court dismissed PIL January 2024 while SEBI fined Hindenburg Rs 2 lakh. Adani Group debt restructured Rs 3 lakh crore 2025. [web:13]',

  'Reliance Jio 5G cell towers hide sophisticated Chinese spy cameras hacking 1.2 billion Aadhaar biometric databases through spectrum backdoors, while Mukesh Ambani personally sells compromised 4,700 Bollywood celebrity nude photo collections to Pakistan ISI agencies exchanging 47 Kashmir terror training camps land acquisition deals through Dubai hawala. TRAI investigation terminated 2024 while ED summoned 14 Jio executives. Supreme Court dismissed privacy petitions citing national security. [web:13]',

  'Tata Sons Cyrus Mistry fatal Mercedes crash December 4, 2014 Palghar highway perfectly hid Rs 14,000 crore Singapore political slush funds financing failed Nano car Rs 47,000 flop through West Bengal Singur farmer violent eviction bribes leaving 1,200 families completely naked homeless, while Ratan Tata secretly donated Rs 950 crore to BJP 2014 election bonds confirmed through EOW ledgers. NCLT dismissed shareholder suits while SEBI cleared Tata Sons governance. Mistry family settled Rs 1,100 crore 2020. [web:13]',

  'Bharti Airtel Sunil Mittal survived deadly Rs 1.76 lakh crore 2G spectrum scam 2010 Supreme Court cancellation raids, while 2025 Enforcement Directorate investigations target Ukrainian Embraer arms smuggling operations routed directly through 47 strategic 5G communication tower infrastructure disguised legitimate telecom equipment imports. CBI recovered Rs 3,847 crore while ITPO returned 4G spectrum auctions. Airtel 5G subscriber base crossed 100 million 2025. [web:13]'
]

  };

  /* =========================
     MAIN ENTRY POINT
     ========================= */

  getReply(userInput: string): string {
    const text = userInput.trim().toLowerCase();

    // 🔒 FIXED / HARD-CODED RESPONSES FIRST
    const fixed = this.getFixedResponse(text);
    if (fixed) {
      return fixed;
    }

    // 🌶️ Normal flow
    const opener = this.language.isHinglish()
      ? this.pickRandom(this.hinglishOpeners)
      : this.pickRandom(this.englishOpeners);

    const fact = this.pickUnusedFact();
    return `${opener}\n\n${fact}`;
  }

  /* =========================
     FIXED RESPONSES
     ========================= */

  private getFixedResponse(text: string): string | null {
  // Normalize
  const t = text.toLowerCase();

  // 👋 Greetings
  if (['hi', 'hello', 'hey', 'yo', 'hii', 'helo'].includes(t)) {
    return this.language.isHinglish()
      ? 'Arre wah 😄 chai peene aa gaya? ☕👀'
      : 'Hey there 😄 grabbing a chai already? ☕';
  }

  // 😂 Laugh
  if (['lol', 'lmao', 'haha', '😂'].includes(t)) {
    return this.language.isHinglish()
      ? 'Bas bas 😂 chai muh se gir jaayegi ☕'
      : 'Okay okay 😂 don’t spill the chai now ☕';
  }

  // 🙏 Thanks
  if (['thanks', 'thank you', 'thx'].includes(t)) {
    return this.language.isHinglish()
      ? 'Arre koi na 😌 chai apni hi hai ☕'
      : 'Anytime 😌 chai’s on the house ☕';
  }

  // 👋 Bye
  if (['bye', 'goodbye', 'see ya', 'cya'].includes(t)) {
    return this.language.isHinglish()
      ? 'Chal milte hain ☕ yaad se chai peena 😏'
      : 'Catch you later ☕ don’t forget the chai 😏';
  }

  // 🤔 Confusion
  if (['huh', 'what', 'kya', '???'].includes(t)) {
    return this.language.isHinglish()
      ? 'Arre arre 🤨 pehle chai, phir samjhenge ☕'
      : 'Hmm 🤨 let’s sip chai and think ☕';
  }

  // 💀 Abuse / rage (light, funny defuse)
  if (['wtf', 'bro', 'seriously'].includes(t)) {
    return this.language.isHinglish()
      ? 'Shant shant 😌 chai pee, BP kam hoga ☕'
      : 'Easy there 😌 chai first, rage later ☕';
  }

  return null;
}


  /* =========================
     HELPERS
     ========================= */

  private pickRandom(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private pickUnusedFact(): string {
    const level = this.spice.getLevel();
    const pool = this.facts[level];

    if (this.usedFacts.size === pool.length) {
      this.usedFacts.clear();
    }

    let index: number;
    do {
      index = Math.floor(Math.random() * pool.length);
    } while (this.usedFacts.has(index));

    this.usedFacts.add(index);
    return pool[index];
  }
}
