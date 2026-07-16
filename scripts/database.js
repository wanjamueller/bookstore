let movies = [
    {
        "name": "The Godfather",
        "director": "Francis Ford Coppola",
        "mainActor": "Marlon Brando",
        "likes": 0,
        "liked": false,
        "publishedYear": 1972,
        "genre": "Crime / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "comments": [
            {
                "name": "Marcus Johnson",
                "comment": "A masterclass in slow-burn tension — every scene earns its weight.",
            },
            {
                "name": "Elena Popescu",
                "comment": "Brando's performance alone makes this essential viewing.",
            },
        ],
    },
    {
        "name": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "mainActor": "Tim Robbins",
        "likes": 0,
        "liked": false,
        "publishedYear": 1994,
        "genre": "Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        "comments": [
            {
                "name": "Grace Byrne",
                "comment": "The most hopeful film about hope I've ever seen.",
            },
            {
                "name": "Ravi Patel",
                "comment": "Andy's patience and quiet resolve get me every single time.",
            },
            {
                "name": "Sofia Rossi",
                "comment": "Perfect pacing, perfect payoff. Never gets old.",
            },
        ],
    },
    {
        "name": "The Godfather Part II",
        "director": "Francis Ford Coppola",
        "mainActor": "Al Pacino",
        "likes": 0,
        "liked": false,
        "publishedYear": 1974,
        "genre": "Crime / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "comments": [
            {
                "name": "Tobias Lindgren",
                "comment": "The parallel timelines make this even richer than the original.",
            },
            {
                "name": "Nina Petrov",
                "comment": "De Niro's young Vito is mesmerizing from start to finish.",
            },
        ],
    },
    {
        "name": "The Dark Knight",
        "director": "Christopher Nolan",
        "mainActor": "Christian Bale",
        "likes": 0,
        "liked": false,
        "publishedYear": 2008,
        "genre": "Action / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "comments": [
            {
                "name": "Daniel Kim",
                "comment": "Heath Ledger redefined what a villain could be on screen.",
            },
            {
                "name": "Camille Dubois",
                "comment": "Tense, smart, and endlessly rewatchable.",
            },
        ],
    },
    {
        "name": "12 Angry Men",
        "director": "Sidney Lumet",
        "mainActor": "Henry Fonda",
        "likes": 0,
        "liked": false,
        "publishedYear": 1957,
        "genre": "Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/zhG3vKWyDRaZYoaww1UVAi29T9h.jpg",
        "comments": [
            {
                "name": "Ben Carter",
                "comment": "Proof that a single room and sharp writing can hold you captive for 90 minutes.",
            },
        ],
    },
    {
        "name": "Schindler's List",
        "director": "Steven Spielberg",
        "mainActor": "Liam Neeson",
        "likes": 0,
        "liked": false,
        "publishedYear": 1993,
        "genre": "Biography / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "comments": [
            {
                "name": "Isabela Costa",
                "comment": "Devastating and essential — a film that never lets you look away.",
            },
            {
                "name": "Kwame Mensah",
                "comment": "Spielberg's restraint here says more than any speech could.",
            },
        ],
    },
    {
        "name": "The Lord of the Rings: The Return of the King",
        "director": "Peter Jackson",
        "mainActor": "Elijah Wood",
        "likes": 0,
        "liked": false,
        "publishedYear": 2003,
        "genre": "Fantasy / Adventure",
        "cover": "https://www.themoviedb.org/t/p/w1280/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "comments": [
            {
                "name": "Felix Baumann",
                "comment": "The scale of this finale still gives me chills.",
            },
            {
                "name": "Hana Suzuki",
                "comment": "Every character arc lands exactly where it should.",
            },
            {
                "name": "Diego Morales",
                "comment": "Best conclusion to a trilogy ever put on film.",
            },
        ],
    },
    {
        "name": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "mainActor": "John Travolta",
        "likes": 0,
        "liked": false,
        "publishedYear": 1994,
        "genre": "Crime / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
        "comments": [
            {
                "name": "Julia Novakova",
                "comment": "The dialogue crackles in every single scene.",
            },
            {
                "name": "Omar Farouk",
                "comment": "Nonlinear storytelling done to perfection.",
            },
        ],
    },
    {
        "name": "Forrest Gump",
        "director": "Robert Zemeckis",
        "mainActor": "Tom Hanks",
        "likes": 0,
        "liked": false,
        "publishedYear": 1994,
        "genre": "Drama / Romance",
        "cover": "https://www.themoviedb.org/t/p/w1280/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
        "comments": [
            {
                "name": "Freya Nilsen",
                "comment": "Tom Hanks makes you believe in every step of Forrest's journey.",
            },
            {
                "name": "Victor Duarte",
                "comment": "Warm, funny, and quietly profound.",
            },
        ],
    },
    {
        "name": "Fight Club",
        "director": "David Fincher",
        "mainActor": "Brad Pitt",
        "likes": 0,
        "liked": false,
        "publishedYear": 1999,
        "genre": "Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
        "comments": [
            {
                "name": "Amara Nwosu",
                "comment": "The twist rewards every rewatch with new details.",
            },
            {
                "name": "Henrik Berg",
                "comment": "Sharp satire wrapped in a gripping story.",
            },
        ],
    },
    {
        "name": "Inception",
        "director": "Christopher Nolan",
        "mainActor": "Leonardo DiCaprio",
        "likes": 0,
        "liked": false,
        "publishedYear": 2010,
        "genre": "Sci-Fi / Action",
        "cover": "https://www.themoviedb.org/t/p/w1280/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
        "comments": [
            {
                "name": "Ines Moreau",
                "comment": "A puzzle box that actually pays off emotionally.",
            },
            {
                "name": "Liam O'Connor",
                "comment": "The layered dream logic is thrilling to untangle.",
            },
        ],
    },
    {
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "director": "Peter Jackson",
        "mainActor": "Elijah Wood",
        "likes": 0,
        "liked": false,
        "publishedYear": 2001,
        "genre": "Fantasy / Adventure",
        "cover": "https://www.themoviedb.org/t/p/w1280/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "comments": [
            {
                "name": "Aisha Khan",
                "comment": "The world-building here set the standard for fantasy films.",
            },
            {
                "name": "Wei Chen",
                "comment": "That opening prologue still gives me goosebumps.",
            },
        ],
    },
    {
        "name": "Star Wars: Episode V - The Empire Strikes Back",
        "director": "Irvin Kershner",
        "mainActor": "Mark Hamill",
        "likes": 0,
        "liked": false,
        "publishedYear": 1980,
        "genre": "Sci-Fi / Adventure",
        "cover": "https://www.themoviedb.org/t/p/w1280/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
        "comments": [
            {
                "name": "Yuki Tanaka",
                "comment": "Darker, richer, and better than the first — a rare sequel triumph.",
            },
            {
                "name": "Fatima Al-Sayed",
                "comment": "That reveal still lands perfectly every time.",
            },
        ],
    },
    {
        "name": "The Matrix",
        "director": "L. & L. Wachowski",
        "mainActor": "Keanu Reeves",
        "likes": 0,
        "liked": false,
        "publishedYear": 1999,
        "genre": "Sci-Fi / Action",
        "cover": "https://www.themoviedb.org/t/p/w1280/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
        "comments": [
            {
                "name": "Emma Novak",
                "comment": "Redefined action filmmaking for a generation.",
            },
            {
                "name": "Lucas Silva",
                "comment": "The ideas hold up as well as the visuals do.",
            },
        ],
    },
    {
        "name": "Goodfellas",
        "director": "Martin Scorsese",
        "mainActor": "Ray Liotta",
        "likes": 0,
        "liked": false,
        "publishedYear": 1990,
        "genre": "Crime / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
        "comments": [
            {
                "name": "Priya Sharma",
                "comment": "That single tracking shot into the Copacabana is pure cinema.",
            },
            {
                "name": "Jonas Weber",
                "comment": "Electric pacing from the very first frame.",
            },
        ],
    },
    {
        "name": "One Flew Over the Cuckoo's Nest",
        "director": "Milos Forman",
        "mainActor": "Jack Nicholson",
        "likes": 0,
        "liked": false,
        "publishedYear": 1975,
        "genre": "Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/kjWsMh72V6d8KRLV4EOoSJLT1H7.jpg",
        "comments": [
            {
                "name": "Chloe Martin",
                "comment": "Nicholson's performance is a masterclass in charisma.",
            },
            {
                "name": "Ahmed Hassan",
                "comment": "A powerful story about spirit and defiance.",
            },
        ],
    },
    {
        "name": "Se7en",
        "director": "David Fincher",
        "mainActor": "Brad Pitt",
        "likes": 0,
        "liked": false,
        "publishedYear": 1995,
        "genre": "Crime / Thriller",
        "cover": "https://www.themoviedb.org/t/p/w1280/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
        "comments": [
            {
                "name": "Marcus Johnson",
                "comment": "The tension builds so patiently it's almost unbearable — in the best way.",
            },
        ],
    },
    {
        "name": "Seven Samurai",
        "director": "Akira Kurosawa",
        "mainActor": "Toshiro Mifune",
        "likes": 0,
        "liked": false,
        "publishedYear": 1954,
        "genre": "Action / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/lOMGc8bnSwQhS4XyE1S99uH8NXf.jpg",
        "comments": [
            {
                "name": "Elena Popescu",
                "comment": "The blueprint for every ensemble action film that followed.",
            },
            {
                "name": "Ravi Patel",
                "comment": "Kurosawa's staging of the final battle is unmatched.",
            },
        ],
    },
    {
        "name": "City of God",
        "director": "Fernando Meirelles",
        "mainActor": "Alexandre Rodrigues",
        "likes": 0,
        "liked": false,
        "publishedYear": 2002,
        "genre": "Crime / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
        "comments": [
            {
                "name": "Grace Byrne",
                "comment": "Kinetic editing and unforgettable characters.",
            },
            {
                "name": "Sofia Rossi",
                "comment": "One of the most vivid, alive films I've ever watched.",
            },
        ],
    },
    {
        "name": "Life Is Beautiful",
        "director": "Roberto Benigni",
        "mainActor": "Roberto Benigni",
        "likes": 0,
        "liked": false,
        "publishedYear": 1997,
        "genre": "Comedy / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
        "comments": [
            {
                "name": "Tobias Lindgren",
                "comment": "Manages to be funny and heartbreaking in the same breath.",
            },
            {
                "name": "Nina Petrov",
                "comment": "Benigni's love for his family radiates off the screen.",
            },
        ],
    },
    {
        "name": "It's a Wonderful Life",
        "director": "Frank Capra",
        "mainActor": "James Stewart",
        "likes": 0,
        "liked": false,
        "publishedYear": 1946,
        "genre": "Drama / Fantasy",
        "cover": "https://www.themoviedb.org/t/p/w1280/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg",
        "comments": [
            {
                "name": "Daniel Kim",
                "comment": "The kind of film that restores your faith in people.",
            },
            {
                "name": "Camille Dubois",
                "comment": "Every Christmas, and it still gets me every time.",
            },
        ],
    },
    {
        "name": "Spirited Away",
        "director": "Hayao Miyazaki",
        "mainActor": "Rumi Hiiragi",
        "likes": 0,
        "liked": false,
        "publishedYear": 2001,
        "genre": "Animation / Fantasy",
        "cover": "https://www.themoviedb.org/t/p/w1280/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        "comments": [
            {
                "name": "Ben Carter",
                "comment": "Miyazaki's imagination has no limits.",
            },
            {
                "name": "Isabela Costa",
                "comment": "So gorgeous I pause it just to admire the backgrounds.",
            },
            {
                "name": "Kwame Mensah",
                "comment": "A coming-of-age story dressed up as a fever dream, and it works beautifully.",
            },
        ],
    },
    {
        "name": "Saving Private Ryan",
        "director": "Steven Spielberg",
        "mainActor": "Tom Hanks",
        "likes": 0,
        "liked": false,
        "publishedYear": 1998,
        "genre": "War / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
        "comments": [
            {
                "name": "Felix Baumann",
                "comment": "The opening sequence redefined how war is shown on screen.",
            },
            {
                "name": "Hana Suzuki",
                "comment": "Brutal, human, and deeply moving.",
            },
        ],
    },
    {
        "name": "Interstellar",
        "director": "Christopher Nolan",
        "mainActor": "M. McConaughey",
        "likes": 0,
        "liked": false,
        "publishedYear": 2014,
        "genre": "Sci-Fi / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
        "comments": [
            {
                "name": "Diego Morales",
                "comment": "The docking scene alone is one of the tensest things I've watched.",
            },
            {
                "name": "Julia Novakova",
                "comment": "Equal parts heart and hard science, and it balances both beautifully.",
            },
        ],
    },
    {
        "name": "The Green Mile",
        "director": "Frank Darabont",
        "mainActor": "Tom Hanks",
        "likes": 0,
        "liked": false,
        "publishedYear": 1999,
        "genre": "Fantasy / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        "comments": [
            {
                "name": "Omar Farouk",
                "comment": "Gentle and devastating in equal measure.",
            },
            {
                "name": "Freya Nilsen",
                "comment": "Michael Clarke Duncan's performance stays with you long after.",
            },
        ],
    },
    {
        "name": "Parasite",
        "director": "Bong Joon-ho",
        "mainActor": "Song Kang-ho",
        "likes": 0,
        "liked": false,
        "publishedYear": 2019,
        "genre": "Thriller / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "comments": [
            {
                "name": "Victor Duarte",
                "comment": "Every genre shift in this film is executed flawlessly.",
            },
            {
                "name": "Amara Nwosu",
                "comment": "The staircase symbolism is subtle but so effective.",
            },
            {
                "name": "Henrik Berg",
                "comment": "Bong Joon-ho balances comedy and dread like nobody else.",
            },
        ],
    },
    {
        "name": "Léon: The Professional",
        "director": "Luc Besson",
        "mainActor": "Jean Reno",
        "likes": 0,
        "liked": false,
        "publishedYear": 1994,
        "genre": "Action / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/bxB2q91nKYp8JNzqE7t7TWBVupB.jpg",
        "comments": [
            {
                "name": "Ines Moreau",
                "comment": "Jean Reno brings so much tenderness to a hitman role.",
            },
            {
                "name": "Liam O'Connor",
                "comment": "An unlikely friendship told with real heart.",
            },
        ],
    },
    {
        "name": "The Silence of the Lambs",
        "director": "Jonathan Demme",
        "mainActor": "Jodie Foster",
        "likes": 0,
        "liked": false,
        "publishedYear": 1991,
        "genre": "Thriller / Horror",
        "cover": "https://www.themoviedb.org/t/p/w1280/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
        "comments": [
            {
                "name": "Aisha Khan",
                "comment": "Foster and Hopkins are electric in every shared scene.",
            },
            {
                "name": "Wei Chen",
                "comment": "A thriller that's as smart as it is tense.",
            },
        ],
    },
    {
        "name": "Star Wars",
        "director": "George Lucas",
        "mainActor": "Mark Hamill",
        "likes": 0,
        "liked": false,
        "publishedYear": 1977,
        "genre": "Sci-Fi / Adventure",
        "cover": "https://www.themoviedb.org/t/p/w1280/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "comments": [
            {
                "name": "Yuki Tanaka",
                "comment": "The film that made space adventure feel possible.",
            },
            {
                "name": "Fatima Al-Sayed",
                "comment": "Still holds up as pure, joyful adventure.",
            },
            {
                "name": "Emma Novak",
                "comment": "That first shot of the Star Destroyer still gets me.",
            },
        ],
    },
    {
        "name": "Terminator 2: Judgment Day",
        "director": "James Cameron",
        "mainActor": "A. Schwarzenegger",
        "likes": 0,
        "liked": false,
        "publishedYear": 1991,
        "genre": "Sci-Fi / Action",
        "cover": "https://www.themoviedb.org/t/p/w1280/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg",
        "comments": [
            {
                "name": "Lucas Silva",
                "comment": "The practical effects still hold up decades later.",
            },
            {
                "name": "Priya Sharma",
                "comment": "Rare sequel that improves on a great original.",
            },
        ],
    },
    {
        "name": "Back to the Future",
        "director": "Robert Zemeckis",
        "mainActor": "Michael J. Fox",
        "likes": 0,
        "liked": false,
        "publishedYear": 1985,
        "genre": "Sci-Fi / Adventure",
        "cover": "https://www.themoviedb.org/t/p/w1280/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
        "comments": [
            {
                "name": "Jonas Weber",
                "comment": "Endlessly charming — perfect blend of comedy and adventure.",
            },
            {
                "name": "Chloe Martin",
                "comment": "Michael J. Fox makes every scene feel effortless.",
            },
        ],
    },
    {
        "name": "Psycho",
        "director": "Alfred Hitchcock",
        "mainActor": "Anthony Perkins",
        "likes": 0,
        "liked": false,
        "publishedYear": 1960,
        "genre": "Horror / Thriller",
        "cover": "https://www.themoviedb.org/t/p/w1280/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
        "comments": [
            {
                "name": "Ahmed Hassan",
                "comment": "Hitchcock's control of tension is unmatched here.",
            },
            {
                "name": "Marcus Johnson",
                "comment": "Still shocking, still brilliant after all these years.",
            },
        ],
    },
    {
        "name": "Gladiator",
        "director": "Ridley Scott",
        "mainActor": "Russell Crowe",
        "likes": 0,
        "liked": false,
        "publishedYear": 2000,
        "genre": "Action / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
        "comments": [
            {
                "name": "Elena Popescu",
                "comment": "Russell Crowe commands every scene he's in.",
            },
            {
                "name": "Ravi Patel",
                "comment": "Epic in scale but grounded by real emotion.",
            },
        ],
    },
    {
        "name": "The Departed",
        "director": "Martin Scorsese",
        "mainActor": "Leonardo DiCaprio",
        "likes": 0,
        "liked": false,
        "publishedYear": 2006,
        "genre": "Crime / Thriller",
        "cover": "https://www.themoviedb.org/t/p/w1280/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
        "comments": [
            {
                "name": "Grace Byrne",
                "comment": "The tension between the two leads is riveting.",
            },
            {
                "name": "Sofia Rossi",
                "comment": "Scorsese at his sharpest — tight, twisty, unforgettable.",
            },
        ],
    },
    {
        "name": "Whiplash",
        "director": "Damien Chazelle",
        "mainActor": "Miles Teller",
        "likes": 0,
        "liked": false,
        "publishedYear": 2014,
        "genre": "Drama / Music",
        "cover": "https://www.themoviedb.org/t/p/w1280/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
        "comments": [
            {
                "name": "Tobias Lindgren",
                "comment": "The tension in every drum solo is almost unbearable.",
            },
            {
                "name": "Nina Petrov",
                "comment": "J.K. Simmons is terrifyingly good.",
            },
            {
                "name": "Daniel Kim",
                "comment": "Left me exhausted in the best possible way.",
            },
        ],
    },
    {
        "name": "The Prestige",
        "director": "Christopher Nolan",
        "mainActor": "Hugh Jackman",
        "likes": 0,
        "liked": false,
        "publishedYear": 2006,
        "genre": "Drama / Mystery",
        "cover": "https://www.themoviedb.org/t/p/w1280/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
        "comments": [
            {
                "name": "Camille Dubois",
                "comment": "The kind of twist that makes you want to rewatch immediately.",
            },
            {
                "name": "Ben Carter",
                "comment": "Nolan at his most meticulous and rewarding.",
            },
        ],
    },
    {
        "name": "American History X",
        "director": "Tony Kaye",
        "mainActor": "Edward Norton",
        "likes": 0,
        "liked": false,
        "publishedYear": 1998,
        "genre": "Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/x2drgoXYZ8484lqyDj7L1CEVR4T.jpg",
        "comments": [
            {
                "name": "Isabela Costa",
                "comment": "A powerful, unflinching look at redemption.",
            },
        ],
    },
    {
        "name": "Casablanca",
        "director": "Michael Curtiz",
        "mainActor": "Humphrey Bogart",
        "likes": 0,
        "liked": false,
        "publishedYear": 1942,
        "genre": "Romance / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/l8pgzdhSP7yb4emKDx4Lh8vXwGX.jpg",
        "comments": [
            {
                "name": "Kwame Mensah",
                "comment": "The dialogue is quotable from start to finish.",
            },
            {
                "name": "Felix Baumann",
                "comment": "Romantic, witty, and endlessly rewatchable.",
            },
        ],
    },
    {
        "name": "Rear Window",
        "director": "Alfred Hitchcock",
        "mainActor": "James Stewart",
        "likes": 0,
        "liked": false,
        "publishedYear": 1954,
        "genre": "Mystery / Thriller",
        "cover": "https://www.themoviedb.org/t/p/w1280/ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
        "comments": [
            {
                "name": "Hana Suzuki",
                "comment": "Hitchcock builds suspense from a single apartment brilliantly.",
            },
            {
                "name": "Diego Morales",
                "comment": "Stewart's curiosity pulls you right into the mystery.",
            },
        ],
    },
    {
        "name": "Alien",
        "director": "Ridley Scott",
        "mainActor": "Sigourney Weaver",
        "likes": 0,
        "liked": false,
        "publishedYear": 1979,
        "genre": "Sci-Fi / Horror",
        "cover": "https://www.themoviedb.org/t/p/w1280/bk9GVjN4kxmGekswNigaa5YIdr5.jpg",
        "comments": [
            {
                "name": "Julia Novakova",
                "comment": "The slow-burn dread here is masterfully done.",
            },
            {
                "name": "Omar Farouk",
                "comment": "Ripley remains one of cinema's great heroes.",
            },
        ],
    },
    {
        "name": "Apocalypse Now",
        "director": "Francis Ford Coppola",
        "mainActor": "Martin Sheen",
        "likes": 0,
        "liked": false,
        "publishedYear": 1979,
        "genre": "War / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
        "comments": [
            {
                "name": "Freya Nilsen",
                "comment": "A hallucinatory, unforgettable descent.",
            },
            {
                "name": "Victor Duarte",
                "comment": "The helicopter sequence is unlike anything else in film.",
            },
        ],
    },
    {
        "name": "Memento",
        "director": "Christopher Nolan",
        "mainActor": "Guy Pearce",
        "likes": 0,
        "liked": false,
        "publishedYear": 2000,
        "genre": "Mystery / Thriller",
        "cover": "https://www.themoviedb.org/t/p/w1280/fKTPH2WvH8nHTXeBYBVhawtRqtR.jpg",
        "comments": [
            {
                "name": "Amara Nwosu",
                "comment": "The reverse structure makes every scene feel essential.",
            },
            {
                "name": "Henrik Berg",
                "comment": "A puzzle that rewards close attention.",
            },
        ],
    },
    {
        "name": "Django Unchained",
        "director": "Quentin Tarantino",
        "mainActor": "Jamie Foxx",
        "likes": 0,
        "liked": false,
        "publishedYear": 2012,
        "genre": "Western / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
        "comments": [
            {
                "name": "Ines Moreau",
                "comment": "Jamie Foxx is magnetic from his very first scene.",
            },
            {
                "name": "Liam O'Connor",
                "comment": "Tarantino's dialogue and style are firing on all cylinders.",
            },
        ],
    },
    {
        "name": "WALL·E",
        "director": "Andrew Stanton",
        "mainActor": "Ben Burtt",
        "likes": 0,
        "liked": false,
        "publishedYear": 2008,
        "genre": "Animation / Sci-Fi",
        "cover": "https://www.themoviedb.org/t/p/w1280/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
        "comments": [
            {
                "name": "Aisha Khan",
                "comment": "Tells a whole love story with barely any dialogue.",
            },
            {
                "name": "Wei Chen",
                "comment": "Charming, funny, and surprisingly moving.",
            },
            {
                "name": "Yuki Tanaka",
                "comment": "One of Pixar's most inventive and tender films.",
            },
        ],
    },
    {
        "name": "The Lion King",
        "director": "Allers / Minkoff",
        "mainActor": "Matthew Broderick",
        "likes": 0,
        "liked": false,
        "publishedYear": 1994,
        "genre": "Animation / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        "comments": [
            {
                "name": "Fatima Al-Sayed",
                "comment": "The music and visuals still give me chills.",
            },
            {
                "name": "Emma Novak",
                "comment": "A timeless story told beautifully.",
            },
        ],
    },
    {
        "name": "Coco",
        "director": "Lee Unkrich",
        "mainActor": "Anthony Gonzalez",
        "likes": 0,
        "liked": false,
        "publishedYear": 2017,
        "genre": "Animation / Fantasy",
        "cover": "https://www.themoviedb.org/t/p/w1280/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg",
        "comments": [
            {
                "name": "Lucas Silva",
                "comment": "Made me cry happy tears by the end.",
            },
            {
                "name": "Priya Sharma",
                "comment": "A gorgeous celebration of family and memory.",
            },
        ],
    },
    {
        "name": "Jaws",
        "director": "Steven Spielberg",
        "mainActor": "Roy Scheider",
        "likes": 0,
        "liked": false,
        "publishedYear": 1975,
        "genre": "Adventure / Thriller",
        "cover": "https://www.themoviedb.org/t/p/w1280/3aLabIgttFYtHaN7eVQAA9nGdHz.jpg",
        "comments": [
            {
                "name": "Jonas Weber",
                "comment": "Spielberg builds dread with barely a glimpse of the shark.",
            },
            {
                "name": "Chloe Martin",
                "comment": "That score still makes my heart race.",
            },
        ],
    },
    {
        "name": "Titanic",
        "director": "James Cameron",
        "mainActor": "Leonardo DiCaprio",
        "likes": 0,
        "liked": false,
        "publishedYear": 1997,
        "genre": "Romance / Drama",
        "cover": "https://www.themoviedb.org/t/p/w1280/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        "comments": [
            {
                "name": "Ahmed Hassan",
                "comment": "Sweeping romance with a genuinely thrilling final act.",
            },
            {
                "name": "Marcus Johnson",
                "comment": "The scale of the production still impresses today.",
            },
        ],
    },
    {
        "name": "2001: A Space Odyssey",
        "director": "Stanley Kubrick",
        "mainActor": "Keir Dullea",
        "likes": 0,
        "liked": false,
        "publishedYear": 1968,
        "genre": "Sci-Fi",
        "cover": "https://www.themoviedb.org/t/p/w1280/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
        "comments": [
            {
                "name": "Elena Popescu",
                "comment": "Visually far ahead of its time, and still is.",
            },
            {
                "name": "Ravi Patel",
                "comment": "A meditative, ambitious vision of space travel.",
            },
        ],
    },
    {
        "name": "Vertigo",
        "director": "Alfred Hitchcock",
        "mainActor": "James Stewart",
        "likes": 0,
        "liked": false,
        "publishedYear": 1958,
        "genre": "Mystery / Thriller",
        "cover": "https://www.themoviedb.org/t/p/w1280/15uOEfqBNTVtDUT7hGBVCka0rZz.jpg",
        "comments": [
            {
                "name": "Grace Byrne",
                "comment": "Hitchcock's most hypnotic and unsettling film.",
            },
            {
                "name": "Sofia Rossi",
                "comment": "The visual style still feels innovative today.",
            },
        ],
    },
];
