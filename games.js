

class Game{
  constructor(id, grade, name, year, gener, platform, exclusive, studio, country, hero, src){
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
  new Game(1, ["grade2", "grade4"], "Hades", 2020, ["Roguelike", "Action RPG"],["PC", "Xbox", "PlayStation", "Nintendo"], false,
                             "Supergiant Games", "USA", "Zagreus", "./assets/image1.jpg"),

  new Game(2,"grade7", "Metroid Dread", 2021, ["Metroidvania", "	Action-adventure"],
                                     "Nintendo",true,"Nintendo EPD", "Japan", "Samus Aran", "./assets/image2.jpg"),

  new Game(3,"grade1", "Red Dead Redemption 2", 2018, ["Action-adventure", "Open-world"],["pc", "Xbox", "PlayStation", "Nintendo"], false,
                                             "Rockstar Games", "USA", "Arthur Morgan", "./assets/image3.jpg"),

  new Game(4,"grade5", "Bloodborne", 2015, ["Action RPG", "Soulslike"],"PlayStation", true,
                                  "FromSoftware", "Japan", "The Hunter ", "./assets/image4.jpg"),
                                  
  new Game(5,"grade2", "Zelda", 2017, ["Action-adventure", "RPG"], "Nintendo", true,
                             "Nintendo EPD", "Japan", "Link", "./assets/image5.jpg"),

   new Game(6,"grade1", "Horizon Zero Dawn", 2017, "Action RPG", ["PC", "PlayStation"], false,
                             "Guerrilla Games", "Netherlands", "Aloy", "./assets/image6.jpg"),

   new Game(7,"grade3", "Rust", 2018, "Survival", ["PC", "PlayStation", "Xbox"], false,
                             "Facepunch Studios", "England", "None", "./assets/image7.jpg"),

   new Game(8,"grade1", "Sekiro Shadows Die Twice", 2019, ["Action-adventure", "Soulslike"], ["PC", "PlayStation", "Xbox"], false,
                             "FromSoftware", "Japan", "The Wolf", "./assets/image8.jpg"),

   new Game(9,"grade3", "Max Payne 3", 2012, ["Action-adventure", "Third-person shooter"], ["PC", "PlayStation", "Xbox"], false,
                             " Rockstar Games", "USA", "Max Payne", "./assets/image9.jpg"),

   new Game(10,"grade3", "Metal Gear solid Snake Eater", 2004, ["Action-adventure", "Stealth"], ["PlayStation", "Nintendo"], false,
                             "	Konami", "Japan", "Big Boss", "./assets/image10.jpg"),

   new Game(11,"grade1", "God of War 2018", 2018, ["Action-adventure", "Hack and Slash"], ["PC", "PlayStation"], false,
                             "Santa Monica", "USA", "Kratos", "./assets/image11.jpg"),

   new Game(12,"grade1", "Resident Evil Village", 2021, "Survival horror", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "Capcom", "Japan", "Ethan Winters", "./assets/image12.jpg"),

   new Game(13,"grade5", "Demon's Souls Remake", 2021, ["Action RPG", "Soulslike"], "PlayStation", true,
                             "Bluepoint Games", "Japan", "The Slayer of Demons", "./assets/image13.jpg"),

   new Game(14,"grade3", "BioShock Infinite", 2013, "First-person Shooter", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "	Irrational Games", "USA", "Booker DeWitt", "./assets/image14.jpg"),

   new Game(15,"grade2" , "Shadow of the Colossus", 2005, ["Action-adventure", "Puzzle"], "PlayStation", true,
                             "Japan Studio (Team Ico)", "Japan", " Wander", "./assets/image15.jpg"),

   new Game(16,"grade6", "Blasphemous", 2019, "Metroidvania", ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "The Game Kitchen", "Spain", "Penitent One", "./assets/image16.jpg"),

   new Game(17,"grade1", "A Plague Tale: Requiem", 2022, ["Action-adventure", "Stealth"], ["PC", "PlayStation", "Xbox", "Nintendo"], false,
                             "Asobo Studio", "French", "Amicia de Rune", "./assets/image17.jpg"),

   new Game(18,"grade1", "Metro Exodus", 2019, "First-person shooter", ["PC", "PlayStation", "Xbox"], false,
                             "	4A Games", "Ukraine", "Artyom", "./assets/image18.jpg"),

   new Game(19,"grade3", "God of War III", 2010, ["Action-adventure", "Hack and Slash"], "PlayStation", true,
                             "Santa Monica", "USA", "Kratos", "./assets/image19.jpg"),
                             
   new Game(20,"grade3", "MGS 4: Guns of the Patriots", 2008, ["Action-adventure", "Stealth"], "PlayStation", true,
                             "Konami", "Japan", "Solid Snake", "./assets/image20.jpg"),
];
