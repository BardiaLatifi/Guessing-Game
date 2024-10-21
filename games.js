
class Game{
  constructor(id, grade, name, year, gener, platform, exclusive, studio, country, hero, src, generation){
    this.id = id;
    this.grade = Array.isArray(grade) ? grade : [grade];
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
  new Game(1, ["grade2", "grade4"], "Hades", 2020, "Roguelike",["PC", "Xbox", "PlayStation", "Nintendo"], false,
                             "Supergiant Games", "USA", "Zagreus", "./assets/image1.jpg",["8th gen", "9th gen"]),

  new Game(2,"grade7", "Metroid Dread", 2021, "Metroidvania","Nintendo",true,
                                              "Nintendo EPD", "Japan", "Samus Aran", "./assets/image2.jpg","9th gen"),

  new Game(3,"grade1", "Red Dead Redemption 2", 2018, ["Action-adventure", "Open-world"],["pc", "Xbox", "PlayStation", "Nintendo"], false,
                                             "Rockstar Games", "USA", "Arthur Morgan", "./assets/image3.jpg",["8th gen", "9th gen"]),

  new Game(4,"grade5", "Bloodborne", 2015, ["RPG", "Soulslike"],"PlayStation", true,
                                  "FromSoftware", "Japan", "The Hunter ", "./assets/image4.jpg","8th gen"),
                                  
  new Game(5,"grade2", "Zelda", 2017, ["Action-adventure", "RPG"], "Nintendo", true,
                             "Nintendo EPD", "Japan", "Link", "./assets/image5.jpg",["8th gen", "9th gen"]),

   new Game(6,"grade1", "Horizon Zero Dawn", 2017, "RPG", ["PC", "PlayStation"], false,
                             "Guerrilla Games", "Netherlands", "Aloy", "./assets/image6.jpg","8th gen"),

   new Game(7,"grade3", "Rust", 2018, "Survival/Horror", ["PC", "PlayStation", "Xbox"], false,
                             "Facepunch Studios", "England", "None", "./assets/image7.jpg","8th gen"),

   new Game(8,"grade1", "Sekiro Shadows Die Twice", 2019, ["Action-adventure", "Soulslike"], ["PC", "PlayStation", "Xbox"], false,
                             "FromSoftware", "Japan", "The Wolf", "./assets/image8.jpg","8th gen"),

   new Game(9,"grade3", "Max Payne 3", 2012, ["Action-adventure", "Shooter"], ["PC", "PlayStation", "Xbox"], false,
                             " Rockstar Games", "USA", "Max Payne", "./assets/image9.jpg","7th gen"),

   new Game(10,"grade3", "Metal Gear solid Snake Eater", 2004, ["Action-adventure", "Stealth"], ["PlayStation", "Nintendo"], false,
                             "	Konami", "Japan", "Big Boss", "./assets/image10.jpg","6th gen"),

   new Game(11,"grade1", "God of War 2018", 2018, ["Action-adventure", "Hack and Slash"], ["PC", "PlayStation"], false,
                             "Santa Monica", "USA", "Kratos", "./assets/image11.jpg","8th gen"),

   new Game(12,"grade1", "Resident Evil Village", 2021, "Survival/Horror", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "Capcom", "Japan", "Ethan Winters", "./assets/image12.jpg",["8th gen", "9th gen"]),

   new Game(13,"grade5", "Demon's Souls Remake", 2021, ["RPG", "Soulslike"], "PlayStation", true,
                             "Bluepoint Games", "Japan", "The Slayer of Demons", "./assets/image13.jpg","9th gen"),

   new Game(14,"grade3", "BioShock Infinite", 2013, "Shooter", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "	Irrational Games", "USA", "Booker DeWitt", "./assets/image14.jpg","8th gen"),

   new Game(15,"grade2" , "Shadow of the Colossus", 2005, ["Action-adventure", "Puzzle"], "PlayStation", true,
                             "Japan Studio (Team Ico)", "Japan", " Wander", "./assets/image15.jpg","6th gen"),

   new Game(16,"grade6", "Blasphemous", 2019, "Metroidvania", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "The Game Kitchen", "Spain", "Penitent One", "./assets/image16.jpg","8th gen"),

   new Game(17,"grade1", "A Plague Tale: Requiem", 2022, ["Action-adventure", "Stealth"], ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "Asobo Studio", "French", "Amicia de Rune", "./assets/image17.jpg","9th gen"),

   new Game(18,"grade1", "Metro Exodus", 2019, "Shooter", ["PC", "PlayStation", "Xbox"], false,
                             "	4A Games", "Ukraine", "Artyom", "./assets/image18.jpg","8th gen"),

   new Game(19,"grade3", "God of War III", 2010, ["Action-adventure", "Hack and Slash"], "PlayStation", true,
                             "Santa Monica", "USA", "Kratos", "./assets/image19.jpg","7th gen"),
                             
   new Game(20,"grade3", "MGS 4: Guns of the Patriots", 2008, ["Action-adventure", "Stealth"], "PlayStation", true,
                             "Konami", "Japan", "Solid Snake", "./assets/image20.jpg","7th gen"),

   new Game(21,"grade1", "Alan Wake 2", 2023, "Survival/Horror", ["PC", "PlayStation", "Xbox"], false,
                             "Remedy Entertainment", "Finland", "Saga Anderson", "./assets/image21.jpg", "9th gen"),

   new Game(22,"grade1", "Devil May Cry 5", 2019, ["Action-adventure", "Hack and Slash"], ["PC", "PlayStation", "Xbox"], false,
                             "Capcom", "Japan", "Nero", "./assets/image22.jpg", "8th gen"),

   new Game(23,"grade1", "Elden Ring", 2022, ["RPG", "Soulslike"], ["PC", "PlayStation", "Xbox"], false,
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

   new Game(37,"grade3", "Doom Eternal", 2020, "Shooter", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "id Software", "USA", "Doomguy", "./assets/image37.jpg", "8th gen"),

   new Game(38,"grade3", "GTA IV", 2008, "Action-adventure", ["PC", "PlayStation", "Xbox"], false,
                             "Rockstar North", "USA", "Niko Bellic", "./assets/image38.jpg", "7th gen"),

   new Game(39,"grade3", "GTA V", 2013, "Action-adventure", ["PC", "PlayStation", "Xbox"], false,
                             "Rockstar North", "USA", "Michael, Trevor, and Franklin", "./assets/image39.jpg", "8th gen"),

   new Game(40,"grade3", "Name", 2016, "Action-adventure", ["PC", "PlayStation", "Xbox"], false,
                             "Hangar 13", "USA", " Lincoln Clay", "./assets/image0.jpg", "8th gen"),
/*
   new Game(41,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(42,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(43,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(44,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(45,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(46,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(47,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(48,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(49,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(50,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(51,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(52,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(53,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(54,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(55,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(56,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(57,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(58,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(59,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

   new Game(60,"grade0", "Name", 2000, ["gener1", "gener2"], ["platform1", "platform2"], true,
                             "studio", "country", "Hero", "./assets/image0.jpg"),

  */
];
