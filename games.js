
class Game{
  constructor(id, grade, name, year, gener, platform, exclusive, studio, country, hero, src, generation){
    this.id = id;
    this.grade = grade;
    this.name = name;
    this.year = year;
    this.gener = Array.isArray(gener) ? gener : [gener];
    this.platform = Array.isArray(platform) ? platform : [platform];
    this.exclusive = exclusive;
    this.studio = studio;
    this.country = country;
    this.hero = hero;
    this.src = Array.isArray(src) ? src : [src];   
    this.generation = Array.isArray(generation) ? generation : [generation];        
  }
}

// grade1: AAA modern graphic games like uncharted

// grade2: AAA fantasy graphic games like zelda

// grade3: AAA old games like max payne

// grade4: isometric games like Diablo and hades

// grade5: AAA The era of mythology games like dark souls

// grade6: 2D pixel art games like celest

// grade7: 2D none pixel art games like metroid

const gamesArray = [
    new Game(1, "grade4", "Hades", 2020, "Roguelike",["PC", "Xbox", "PlayStation", "Nintendo"], false,
                              "Supergiant Games", "USA", "Zagreus", "./assets/image1.jpg",["8th gen", "9th gen"]),

    new Game(2,"grade7", "Metroid Dread", 2021, "Metroidvania","Nintendo",true,
                                                "MercurySteam", "Spain", "Samus Aran", "./assets/image2.jpg", "9th gen"),

    new Game(3,"grade1", "Red Dead Redemption 2", 2018, ["Action-adventure", "Open-world"],["pc", "Xbox", "PlayStation", "Nintendo"], false,
                                              "Rockstar Games", "USA", "Arthur Morgan", "./assets/image3.jpg",["8th gen", "9th gen"]),

    new Game(4,"grade5", "Bloodborne", 2015, ["ARPG", "Soulslike"],"PlayStation", true,
                                    "FromSoftware", "Japan", "The Hunter ", "./assets/image4.jpg","8th gen"),
                                    
    new Game(5,"grade2", "Zelda", 2017, ["Action-adventure", "RPG"], "Nintendo", true,
                              "Nintendo EPD", "Japan", "Link", "./assets/image5.jpg",["8th gen", "9th gen"]),

    new Game(6,"grade1", "Horizon Zero Dawn", 2017, "RPG", ["PC", "PlayStation"], false,
                              "Guerrilla Games", "Netherlands", "Aloy", "./assets/image6.jpg","8th gen"),

    new Game(7,"grade3", "Rust", 2018, "Survival/Horror", ["PC", "PlayStation", "Xbox"], false,
                              "Facepunch Studios", "England", "None", "./assets/image7.jpg","8th gen"),

    new Game(8,"grade1", "Sekiro Shadows Die Twice", 2019, ["Action-adventure", "Soulslike"], ["PC", "PlayStation", "Xbox"], false,
                              "FromSoftware", "Japan", "The Wolf", "./assets/image8.jpg","8th gen"),

    new Game(9,"grade3", "Max Payne 3", 2012, ["Action-adventure", "First/Third Person Shooter"], ["PC", "PlayStation", "Xbox"], false,
                              " Rockstar Games", "USA", "Max Payne", "./assets/image9.jpg","7th gen"),

    new Game(10,"grade3", "Metal Gear solid Snake Eater", 2004, ["Action-adventure", "Stealth"], ["PlayStation", "Nintendo"], false,
                              "Konami", "Japan", "Big Boss", "./assets/image10.jpg","6th gen"),

    new Game(11,"grade1", "God of War 2018", 2018, ["Action-adventure", "Hack and Slash"], ["PC", "PlayStation"], false,
                              "Santa Monica", "USA", "Kratos", "./assets/image11.jpg","8th gen"),

    new Game(12,"grade1", "Resident Evil Village", 2021, "Survival/Horror", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                              "Capcom", "Japan", "Ethan Winters", "./assets/image12.jpg",["8th gen", "9th gen"]),

    new Game(13,"grade5", "Demon's Souls Remake", 2021, ["ARPG", "Soulslike"], "PlayStation", true,
                              "Bluepoint Games", "Japan", "The Slayer of Demons", "./assets/image13.jpg","9th gen"),

    new Game(14,"grade3", "BioShock Infinite", 2013, "First/Third Person Shooter", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                              "	Irrational Games", "USA", "Booker DeWitt", "./assets/image14.jpg","8th gen"),

    new Game(15,"grade2" , "Shadow of the Colossus", 2005, ["Action-adventure", "Puzzle"], "PlayStation", true,
                              "Japan Studio (Team Ico)", "Japan", " Wander", "./assets/image15.jpg","6th gen"),

    new Game(16,"grade6", "Blasphemous", 2019, "Metroidvania", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                              "The Game Kitchen", "Spain", "Penitent One", "./assets/image16.jpg","8th gen"),

    new Game(17,"grade1", "A Plague Tale: Requiem", 2022, ["Action-adventure", "Stealth"], ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                              "Asobo Studio", "French", "Amicia de Rune", "./assets/image17.jpg","9th gen"),

    new Game(18,"grade1", "Metro Exodus", 2019, "First/Third Person Shooter", ["PC", "PlayStation", "Xbox"], false,
                              "	4A Games", "Ukraine", "Artyom", "./assets/image18.jpg","8th gen"),

    new Game(19,"grade3", "God of War III", 2010, ["Action-adventure", "Hack and Slash"], "PlayStation", true,
                              "Santa Monica", "USA", "Kratos", "./assets/image19.jpg","7th gen"),
                              
    new Game(20,"grade3", "MGS 4: Guns of the Patriots", 2008, ["Action-adventure", "Stealth"], "PlayStation", true,
                              "Konami", "Japan", "Solid Snake", "./assets/image20.jpg","7th gen"),

    new Game(21,"grade1", "Alan Wake 2", 2023, "Survival/Horror", ["PC", "PlayStation", "Xbox"], false,
                              "Remedy Entertainment", "Finland", "Saga Anderson", "./assets/image21.jpg", "9th gen"),

    new Game(22,"grade1", "Devil May Cry 5", 2019, ["Action-adventure", "Hack and Slash"], ["PC", "PlayStation", "Xbox"], false,
                              "Capcom", "Japan", "Nero", "./assets/image22.jpg", "8th gen"),

    new Game(23,"grade1", "Elden Ring", 2022, ["ARPG", "Soulslike"], ["PC", "PlayStation", "Xbox"], false,
                              "FromSoftware", "Japan", "The Tarnished", "./assets/image23.jpg","9th gen"),

    new Game(24,"grade1", "Resident Evil 2 Remake", 2019, "Survival/Horror", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                              "Capcom", "Japan", "Leon Kennedy", "./assets/image24.jpg", "8th gen"),

    new Game(25,"grade1", "Resident Evil 3 Remake", 2020, "Survival/Horror", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                              "Capcom", "Japan", "Jill Valentine", "./assets/image25.jpg", "8th gen"),

    new Game(26,"grade1", "Spider Man Miles Morales", 2020, "Action-adventure", ["PC", "PlayStation"], false,
                              "Insomniac Games", "USA", " Miles Morales", "./assets/image26.jpg", "8th gen"),

    new Game(27,"grade1", "Spiderman 2", 2023, "Action-adventure", "PlayStation", true,
                              "Insomniac Games", "USA", "Peter Parker", "./assets/image27.jpg", "9th gen"),

    new Game(28,"grade1", "The Last of Us Part I", 2022, ["Action-adventure", "Survival/Horror"], ["PC", "PlayStation"], false,
                              "Naughty Dog", "USA", "Joel Miller", "./assets/image28.jpg", "9th gen"),

    new Game(29,"grade1", "The Last of Us Part II", 2024, ["Action-adventure", "Survival/Horror"], "PlayStation", true,
                              "Naughty Dog", "USA", "Ellie", "./assets/image29.jpg", "8th gen"),

    new Game(30,"grade1", "Shadow of Tomb Raider", 2018, "Action-adventure", ["PC", "PlayStation", "Xbox"], false,
                              "Eidos-Montréal", "Canada", "Lara Croft", "./assets/image30.jpg", "8th gen"),

    new Game(31,"grade3", "Uncharted 2", 2009, "Action-adventure", "PlayStation", true,
                              "Naughty Dog", "USA", "Nathan Drake", "./assets/image31.jpg", "7th gen"),

    new Game(32,"grade3", "Uncharted 3", 2011, "Action-adventure", "PlayStation", true,
                              "Naughty Dog", "USA", "Nathan Drake", "./assets/image32.jpg", "7th gen"),

    new Game(33,"grade1", "Uncharted 4", 2016, "Action-adventure", "PlayStation", true,
                              "Naughty Dog", "USA", "Nathan Drake", "./assets/image33.jpg", "8th gen"),

    new Game(34,"grade1", "Watch Dogs: Legion", 2020, "Action-adventure", ["PC", "PlayStation", "Xbox"], false,
                              "Ubisoft", "French", "Hero", "./assets/image34.jpg", "8th gen"),

    new Game(35,"grade1", "Assassin's Creed Valhalla", 2020, ["Action-adventure", "RPG"], ["PC", "PlayStation", "Xbox"], false,
                              "Ubisoft", "French", "Eivor Varinsdottir", "./assets/image35.jpg", "8th gen"),

    new Game(36,"grade3", "Dead Space 3", 2013, "Survival/Horror", ["PC", "PlayStation", "Xbox"], false,
                              "Visceral Games", "USA", "Isaac Clarke", "./assets/image36.jpg", "7th gen"),

    new Game(37,"grade3", "Doom Eternal", 2020, "First/Third Person Shooter", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                              "id Software", "USA", "Doomguy", "./assets/image37.jpg", "8th gen"),

    new Game(38,"grade3", "GTA IV", 2008, "Action-adventure", ["PC", "PlayStation", "Xbox"], false,
                              "Rockstar North", "USA", "Niko Bellic", "./assets/image38.jpg", "7th gen"),

    new Game(39,"grade3", "GTA V", 2013, "Action-adventure", ["PC", "PlayStation", "Xbox"], false,
                              "Rockstar North", "USA", "Michael, Trevor, and Franklin", "./assets/image39.jpg", "8th gen"),

    new Game(40,"grade3", "Mafia III", 2016, "Action-adventure", ["PC", "PlayStation", "Xbox"], false,
                              "Hangar 13", "USA", " Lincoln Clay", "./assets/image40.jpg", "8th gen"),

    new Game(41,"grade3", "Max Payne 1", 2001, "First/Third Person Shooter", ["PC", "PlayStation", "Xbox"], false,
                              "Remedy Entertainment", "Finland", "Max Payne", "./assets/image41.jpg", "6th gen"),

    new Game(42,"grade3", "MGS: Peace Walker", 2010, ["Action-adventure", "Stealth"], "PlayStation", true,
                              "Konami", "Japan", "Big Boss", "./assets/image42.jpg", "7th gen"),

    new Game(43,"grade1", "MGS V: The Phantom Pain", 2015, ["Action-adventure", "Stealth"], ["PC", "PlayStation", "Xbox"], false,
                              "Konami", "Japan", "Venom Snake", "./assets/image43.jpg", "8th gen"),

    new Game(44,"grade3", "MGS 2: Sons of Liberty", 2001, ["Action-adventure", "Stealth"], ["PC", "PlayStation", "Xbox"], false,
                              "Konami", "Japan", "Solid Snake", "./assets/image44.jpg", "6th gen"),

    new Game(45,"grade3", "MGS: The Twin Snakes", 2004, ["Action-adventure", "Stealth"], ["PC","GameCube"], true,
                              "Konami", "Japan", "Solid Snake", "./assets/image45.jpg", "6th gen"),

    new Game(46,"grade3", "Red Dead Redemption", 2010, "Action-adventure", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                              "Rockstar San Diego", "USA", "John Marston", "./assets/image46.jpg", "7th gen"),

    new Game(47,"grade3", "Mass Effect 2", 2010, ["Action-adventure", "First/Third Person Shooter"], ["PC", "PlayStation", "Xbox"], false,
                              "BioWare", "USA", "Commander Shepard", "./assets/image47.jpg", "7th gen"),

    new Game(48,"grade3", "Gears of War", 2006, "First/Third Person Shooter", "Xbox", true,
                              "Epic Games", "USA", "Marcus Michael Fenix", "./assets/image48.jpg", "7th gen"),

    new Game(49,"grade3", "Rage", 2011, "First/Third Person Shooter", ["PC", "PlayStation", "Xbox"], false,
                              "id Software", "USA", "Nicholas Raine", "./assets/image49.jpg", "7th gen"),

    new Game(50,"grade3", "Metro: Last Light", 2013, "First/Third Person Shooter", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                              "4A Games", "Ukraine", "Artyom", "./assets/image50.jpg", "7th gen"),

    new Game(51,"grade1", "Metroid Prime Remastered", 2023, "Action-adventure", "Nintendo", true,
                              "Retro Studios", "USA", "Samus Aran", "./assets/image51.jpg", "9th gen"),

    new Game(52,"grade1", "Resident Evil 4 Remake", 2023, "Survival/Horror", ["PC", "Xbox", "PlayStation"], false,
                              "Capcom", "Japan", "Leon Kennedy", "./assets/image52.jpg", "9th gen"),

    new Game(53,"grade2", "Bayonetta 2", 2014, ["Action-adventure", "Hack and Slash"], "Nintendo", true,
                              "PlatinumGames", "Japan", "Hellena Taylor / Atsuko Tanaka", "./assets/image53.jpg", "8th gen"),

    new Game(54,"grade2", "Persona 5", 2016, "JRPG", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                              "P-Studio", "Japan", "Hero", "./assets/image54.jpg", "8th gen"),

    new Game(55,"grade2", "Luigi's Mansion 3", 2019, "Action-adventure", "Nintendo", true,
                              "Next Level Games", "Canada", "Luigi", "./assets/image55.jpg", "8th gen"),

    new Game(56,"grade2", "Bayonetta", 2009, ["Action-adventure", "Hack and Slash"], ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                              "PlatinumGames", "USA", "Cereza", "./assets/image56.jpg", "7th gen"),

    new Game(57,"grade2", "It Takes Two", 2021, ["Action-adventure", "Platformer"], ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                              "Hazelight Studios", "Sweden", "Cody & May", "./assets/image57.jpg", "9th gen"),

    new Game(58,"grade2", "Zelda: Tears of the Kingdom", 2023,"Action-adventure", "Nintendo", true,
                              "Nintendo EPD", "Japan", "Link", "./assets/image58.jpg", "9th gen"),

    new Game(59,"grade2", "Sonic Frontiers", 2022, ["Action-adventure", "Platformer"], ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                              "Sonic Team", "Japan", "Sonic", "./assets/image59.jpg", "9th gen"),

    new Game(60,"grade2", "Crash Bandicoot 4: It's About Time", 2020, "Platformer", ["PC", "PlayStation", "Nintendo"], false,
                              "Toys for Bob", "USA", "Crash Bandicoot", "./assets/image60.jpg", "9th gen"),

    new Game(61, "grade2", "Bayonetta 3", 2022, ["Action-adventure", "Hack and Slash"], "Nintendo", true,
                                "PlatinumGames", "USA", "Cereza", "./assets/image61.jpg", "9th gen"),

    new Game(62, "grade2", "Genshin Impact", 2020, "ARPG", ["PC", "Xbox", "PlayStation"], false,
                                "HoYoverse", "China", "the Traveler", "./assets/image62.jpg", "8th gen"),

    new Game(63, "grade3", "Sonic Adventure", 1998, ["Action-adventure", "Platformer"], ["PC", "Xbox", "PlayStation"], false,
                                "Sonic Team", "Japan", "Sonic", "./assets/image63.jpg", "5th gen"),

    new Game(64, "grade3", "Sonic Adventure 2", 2001, ["Action-adventure", "Platformer"], "Dreamcast", true,
                                "Sonic Team USA", "USA", "Sonic", "./assets/image64.jpg", "6th gen"),

    new Game(65, "grade3", "Sonic Heroes", 2003, ["Action-adventure", "Platformer"], ["PC", "Xbox", "PlayStation"], false,
                                "Sonic Team USA", "USA", "Sonic", "./assets/image65.jpg", "6th gen"),

    new Game(66, "grade4", "Commandos", 1998, "Real-time tactics", ["PC", "Xbox", "PlayStation"], false,
                                "Pyro Studios", "Spain", "", "./assets/image66.jpg", "5th gen"),

    new Game(67, "grade4", "Desperados", 2001, "Real-time tactics", "PC", false,
                                "Spellbound", "Germany", "John Cooper", "./assets/image67.jpg", "6th gen"),

    new Game(68, "grade4", "Diablo IV", 2023, ["ARPG", "Hack and Slash"], ["PC", "Xbox", "PlayStation"], false,
                                "Blizzard Team 3", "USA", "the Wanderer", "./assets/image68.jpg", "9th gen"),

    new Game(69, "grade4", "Disco Elysium", 2019, "RPG", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "studio", "country", "Harry Du Bois", "./assets/image69.jpg", "8th gen"),

    new Game(70, "grade4", "Garshasp: The Monster Slayer", 2011, ["Action-adventure", "Hack and Slash"], "PC", false,
                                "Dead Mage", "Iran", "Garshasp", "./assets/image70.jpg", "8th gen"),

    new Game(71, "grade4", "The Sims", 2000, ["Life simulation", "social simulation"], ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "Maxis", "USA", "", "./assets/image71.jpg", "5th gen"),

    new Game(72, "grade4", "XCOM 2", 2016, ["Turn-based tactics", "Tactical RPG"], ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "Firaxis Games", "USA", "The Commander", "./assets/image72.jpg", "8th gen"),
                       
    new Game(73, "grade5", "Dark Souls", 2011, "ARPG", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "FromSoftware", "Japan", "Chosen Undead", "./assets/image73.jpg", "7th gen"),
                     
    new Game(74, "grade5", "Middle-earth: Shadow of Mordor", 2014, "Action-adventure", ["PC", "Xbox", "PlayStation"], false,
                                "Monolith Productions", "USA", "Talion", "./assets/image74.jpg", "8th gen"),
                          
    new Game(75, "grade5", "The Elder Scrolls V: Skyrim ", 2011, "RPG", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "Bethesda Game Studios", "USA", "Dragon-Born", "./assets/image75.jpg", "7th gen"),
                               
    new Game(76, "grade5", "Castlevania: Lords of Shadow 2", 2014, ["Action-adventure", "Hack and Slash"], ["PC", "Xbox", "PlayStation"], false,
                                "MercurySteam", "Spain", "Gabriel Belmont", "./assets/image76.jpg", "8th gen"),
                            
    new Game(77, "grade5", "The Witcher 2: Assassins of Kings", 2011,  "ARPG", ["PC", "Xbox"], false,
                                "CD Projekt Red", "Poland", "Geralt of Rivia", "./assets/image77.jpg", "7th gen"),
                               
    new Game(78, "grade5", "The Witcher 3: Wild Hunt", 2015, "ARPG", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "	CD Projekt Red", "Poland", "Geralt of Rivia", "./assets/image78.jpg", "8th gen"),
                               
    new Game(79, "grade6", "Adventure Island", 1986, "Platformer", ["PlayStation", "Nintendo"], false,
                                "Hudson Soft", "Japan", "Master Higgins", "./assets/image79.jpg", "Ancient Times"),
                               
    new Game(80, "grade6", "Blasphemous 2", 2023, "Metroidvania", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "The Game Kitchen", "Spain", "Penitent One", "./assets/image80.jpg", "9th gen"),
                               
    new Game(81, "grade6", "Castlevania", 1986, "Platformer", ["PC", "Nintendo"], false,
                                "Konami", "Japan", "Simon Belmont", "./assets/image81.jpg", "Ancient Times"),
                             
    new Game(82, "grade6", "Celeste", 2018, "Platformer", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "Maddy Makes Games", "Canada", "Madeline", "./assets/image82.jpg", "8th gen"),
                                
    new Game(83, "grade6", "Contra", 1987, "Run and gun", "Nintendo", true,
                                "Konami", "Japan", "Bill Rizer and Lance Bean", "./assets/image83.jpg", "Ancient Times"),
                                
    new Game(84, "grade6", "Contra III: The Alien Wars", 1992, "Run and gun", "Nintendo", true,
                                "Konami", "Japan", "Bill Rizer and Lance Bean", "./assets/image84.jpg", "Ancient Times"),
                                
    new Game(85, "grade6", "Dead Cells", 2018, ["Roguelike", "Metroidvania"],  ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "Motion Twin", "France", "The Beheaded", "./assets/image85.jpg", "8th gen"),
                                
    new Game(86, "grade6", "Double Dragon", 1987, "Beat-'em-up",  ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "	Technōs Japan", "Japan", "William Lee", "./assets/image86.jpg", "Ancient Times"),
                                
    new Game(87, "grade6", "Metroid", 1986, ["Action-adventure", "Metroidvania"], "Nintendo", true,
                                "Nintendo", "Japan", "Samus Aran", "./assets/image87.jpg", "Ancient Times"),
                                
    new Game(88, "grade6", "Metroid Fusion", 2002, ["Action-adventure", "Metroidvania"], "Game Boy Advance", true,
                                "Nintendo", "Japan", "Samus Aran", "./assets/image88.jpg", "6th gen"),
                                
    new Game(89, "grade6", "Return of the Obra Dinn", 2018, "Puzzle", ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "Lucas Pope", "USA", "The HEIC chief inspector", "./assets/image89.jpg", "8th gen"),
                                
    new Game(90, "grade6", "Stardew Valley", 2016, ["Life sim", "RPG"], ["PC", "Xbox", "PlayStation", "Nintendo"], false,
                                "ConcernedApe", "USA", "The Player", "./assets/image90.jpg", "8th gen"),
     /*                           
    new Game(91, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image91.jpg", "9th gen"),
                                
    new Game(92, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image92.jpg", "9th gen"),
                                
    new Game(93, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image93.jpg", "9th gen"),
                                
    new Game(94, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image94.jpg", "9th gen"),
                                
    new Game(95, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image95.jpg", "9th gen"),
                                
    new Game(96, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image96.jpg", "9th gen"),
                                
    new Game(97, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image97.jpg", "9th gen"),
                                
    new Game(98, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image98.jpg", "9th gen"),
                                
    new Game(99, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image99.jpg", "9th gen"),
                                
    new Game(100, "grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                                "studio", "country", "Hero", "./assets/image100.jpg", "9th gen"),

  */
];
