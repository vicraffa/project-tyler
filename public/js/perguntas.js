    const listaDeQuestoes = [
        {
            pergunta: "Qual é o nome real do Tyler, The Creator?",
            alternativaA: "Tyler Okonma",
            alternativaB: "Tyler Brown",
            alternativaC: "Tyler Smith",
            alternativaD: "Tyler Carter",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual coletivo Tyler, The Creator ajudou a fundar?",
            alternativaA: "Beast Coast",
            alternativaB: "Odd Future",
            alternativaC: "Brockhampton",
            alternativaD: "A$AP Mob",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Qual álbum apresenta o personagem 'Wolf Haley'?",
            alternativaA: "Flower Boy",
            alternativaB: "Wolf",
            alternativaC: "Igor",
            alternativaD: "Cherry Bomb",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Em qual álbum Tyler ganhou seu primeiro Grammy?",
            alternativaA: "Wolf",
            alternativaB: "Goblin",
            alternativaC: "Igor",
            alternativaD: "Cherry Bomb",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Qual desses é um alter ego de Tyler?",
            alternativaA: "Tron Cat",
            alternativaB: "Tony Flow",
            alternativaC: "Captain Murphy",
            alternativaD: "Sir Cartier",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual marca de moda Tyler criou?",
            alternativaA: "Lemon Boy",
            alternativaB: "Golf Wang",
            alternativaC: "Tyler Apparel",
            alternativaD: "Wang Golfwear",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "'Flower Boy' também é conhecido como...",
            alternativaA: "Bee Boy",
            alternativaB: "Garden Boy",
            alternativaC: "Scum Fuck Flower Boy",
            alternativaD: "Flowers Everywhere",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Quem é uma forte influência musical para Tyler?",
            alternativaA: "Pharrell Williams",
            alternativaB: "Drake",
            alternativaC: "Future",
            alternativaD: "Travis Scott",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual gênero é mais associado ao Tyler?",
            alternativaA: "Samba",
            alternativaB: "Hip-hop alternativo",
            alternativaC: "EDM",
            alternativaD: "Rock progressivo",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Qual foi o visual mais conhecido da era 'Igor'?",
            alternativaA: "Peruca loira e terno rosa",
            alternativaB: "Máscara preta",
            alternativaC: "Chapéu militar",
            alternativaD: "Peruca loira e terno azul",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual foi o primeiro álbum do Tyler?",
            alternativaA: "Goblin",
            alternativaB: "Wolf",
            alternativaC: "Bastard",
            alternativaD: "Flower Boy",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Tyler dirige seus próprios clipes usando qual nome?",
            alternativaA: "Wolf Haley",
            alternativaB: "Tyler Films",
            alternativaC: "Okonma Vision",
            alternativaD: "Haley Maker",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual instrumento Tyler mais usa em suas produções?",
            alternativaA: "Gaita",
            alternativaB: "Piano",
            alternativaC: "Violão",
            alternativaD: "Bateria eletrônica",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Qual álbum de Tyler é considerado o mais agressivo?",
            alternativaA: "Goblin",
            alternativaB: "Flower Boy",
            alternativaC: "Cherry Bomb",
            alternativaD: "Igor",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Em qual série animada Tyler dubla um personagem?",
            alternativaA: "Adventure Time",
            alternativaB: "The Boondocks",
            alternativaC: "Rick and Morty",
            alternativaD: "Regular Show",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual dessas músicas pertence ao álbum 'Igor'?",
            alternativaA: "Tamale",
            alternativaB: "EARFQUAKE",
            alternativaC: "See You Again",
            alternativaD: "Yonkers",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Em qual estado dos EUA Tyler nasceu?",
            alternativaA: "Califórnia",
            alternativaB: "Texas",
            alternativaC: "Geórgia",
            alternativaD: "Flórida",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Em que ano 'Flower Boy' foi lançado?",
            alternativaA: "2017",
            alternativaB: "2019",
            alternativaC: "2015",
            alternativaD: "2021",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual o tema central de 'Igor'?",
            alternativaA: "Ambição",
            alternativaB: "Viagens",
            alternativaC: "Rompimento amoroso",
            alternativaD: "Criminalidade",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Qual álbum traz uma estética de viagem e passaporte?",
            alternativaA: "Flower Boy",
            alternativaB: "Goblin",
            alternativaC: "Wolf",
            alternativaD: "Call Me If You Get Lost",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual personagem fictício aparece em múltiplos projetos de Tyler?",
            alternativaA: "Shadow Boy",
            alternativaB: "Doctor Doom",
            alternativaC: "Kid Crawler",
            alternativaD: "Dr. TC",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Tyler participou de qual festival como headliner pela primeira vez?",
            alternativaA: "Camp Flog Gnaw",
            alternativaB: "Rolling Loud",
            alternativaC: "Lollapalooza",
            alternativaD: "Coachella",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "'See You Again' tem feat com qual artista?",
            alternativaA: "Frank Ocean",
            alternativaB: "Kali Uchis",
            alternativaC: "Solange",
            alternativaD: "A$AP Rocky",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Qual dessas músicas é do álbum Wolf?",
            alternativaA: "BEST INTEREST",
            alternativaB: "EARFQUAKE",
            alternativaC: "IFHY",
            alternativaD: "JUGGERNAUT",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Qual dessas músicas ficou viral no TikTok anos depois?",
            alternativaA: "Yonkers",
            alternativaB: "See You Again",
            alternativaC: "Boredom",
            alternativaD: "Potato Salad",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "O álbum Cherry Bomb é famoso por...",
            alternativaA: "Ser extremamente polido",
            alternativaB: "Ser instrumental",
            alternativaC: "Ser acústico",
            alternativaD: "Ter mixagem caótica",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Qual artista já fez feat em *Call Me If You Get Lost*?",
            alternativaA: "NBA Youngboy",
            alternativaB: "Ed Sheeran",
            alternativaC: "21 Savage",
            alternativaD: "Kid Cudi",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual foi o primeiro trabalho lançado por Tyler?",
            alternativaA: "Wolf",
            alternativaB: "Bastard",
            alternativaC: "Goblin",
            alternativaD: "Yonkers (single)",
            alternativaCorreta: "alternativaB"
        },
        // {
        //     pergunta: "Em Cherry Bomb, Tyler colabora com qual guitarrista famoso?",
        //     alternativaA: "Omar Rodríguez-López",
        //     alternativaB: "John Mayer",
        //     alternativaC: "Slash",
        //     alternativaD: "Jack White",
        //     alternativaCorreta: "alternativaB"
        // },
        // {
        //     pergunta: "Qual é o maior hit comercial do Tyler?",
        //     alternativaA: "EARFQUAKE",
        //     alternativaB: "Yonkers",
        //     alternativaC: "Tamale",
        //     alternativaD: "Lumberjack",
        //     alternativaCorreta: "alternativaA"
        // },
        // {
        //     pergunta: "Qual é o mascote da Golf Wang?",
        //     alternativaA: "A caveira rosa",
        //     alternativaB: "O donut com olhos",
        //     alternativaC: "O peixe dourado",
        //     alternativaD: "A abelha amarela",
        //     alternativaCorreta: "alternativaD"
        // },
        // {
        //     pergunta: "Qual álbum marca uma mudança emocional mais madura?",
        //     alternativaA: "Goblin",
        //     alternativaB: "Cherry Bomb",
        //     alternativaC: "Flower Boy",
        //     alternativaD: "Bastard",
        //     alternativaCorreta: "alternativaC"
        // },
        // {
        //     pergunta: "'Yonkers' foi um marco por qual motivo?",
        //     alternativaA: "Produção experimental",
        //     alternativaB: "Clipe polêmico",
        //     alternativaC: "Letra romântica",
        //     alternativaD: "Feat com Eminem",
        //     alternativaCorreta: "alternativaB"
        // },
        {
            pergunta: "Qual álbum ganhou Grammy de Melhor Álbum de Rap?",
            alternativaA: "Flower Boy",
            alternativaB: "Call Me If You Get Lost",
            alternativaC: "Goblin",
            alternativaD: "Wolf",
            alternativaCorreta: "alternativaB"
        },
        // {
        //     pergunta: "Qual música é famosa por seu coral final?",
        //     alternativaA: "RUNNING OUT OF TIME",
        //     alternativaB: "FOREWORD",
        //     alternativaC: "ARE WE STILL FRIENDS?",
        //     alternativaD: "SWEET / I THOUGHT YOU WANTED TO DANCE",
        //     alternativaCorreta: "alternativaC"
        // },
        // {
        //     pergunta: "Tyler criou um festival chamado...",
        //     alternativaA: "Flog Gnaw",
        //     alternativaB: "Flower Fest",
        //     alternativaC: "Odd Future Days",
        //     alternativaD: "Igor Fest",
        //     alternativaCorreta: "alternativaA"
        // },
        // {
        //     pergunta: "Qual música apresenta o personagem 'Boyfriend'? ",
        //     alternativaA: "BEST INTEREST",
        //     alternativaB: "Puppet",
        //     alternativaC: "WILSHIRE",
        //     alternativaD: "I THINK",
        //     alternativaCorreta: "alternativaD"
        // },
        // {
        //     pergunta: "'Lemonhead' tem feat com qual artista?",
        //     alternativaA: "Lil Wayne",
        //     alternativaB: "NBA Youngboy",
        //     alternativaC: "Charlie Wilson",
        //     alternativaD: "Brent Faiyaz",
        //     alternativaCorreta: "alternativaB"
        // },
        // {
        //     pergunta: "Qual álbum é o mais longo da discografia do Tyler?",
        //     alternativaA: "Igor",
        //     alternativaB: "Call Me If You Get Lost",
        //     alternativaC: "Wolf",
        //     alternativaD: "Cherry Bomb",
        //     alternativaCorreta: "alternativaC"
        // },
        // {
        //     pergunta: "Qual álbum foi relançado como 'The Estate Sale'?",
        //     alternativaA: "Wolf",
        //     alternativaB: "Call Me If You Get Lost",
        //     alternativaC: "Flower Boy",
        //     alternativaD: "Igor",
        //     alternativaCorreta: "alternativaB"
        // },
        // {
        //     pergunta: "Qual single marcou o início da era 'Flower Boy'?",
        //     alternativaA: "Boredom",
        //     alternativaB: "911 / Mr. Lonely",
        //     alternativaC: "Who Dat Boy",
        //     alternativaD: "See You Again",
        //     alternativaCorreta: "alternativaC"
        // },
        // {
        //     pergunta: "'New Magic Wand' pertence a qual álbum?",
        //     alternativaA: "Flower Boy",
        //     alternativaB: "Igor",
        //     alternativaC: "Wolf",
        //     alternativaD: "Goblin",
        //     alternativaCorreta: "alternativaB"
        // },
        // {
        //     pergunta: "Tyler já trabalhou com a marca...",
        //     alternativaA: "Lacoste",
        //     alternativaB: "Louis Vuitton",
        //     alternativaC: "Converse",
        //     alternativaD: "Puma",
        //     alternativaCorreta: "alternativaC"
        // },
        // {
        //     pergunta: "Qual tema visual se repete na carreira do Tyler?",
        //     alternativaA: "Aviões",
        //     alternativaB: "Abelhas",
        //     alternativaC: "Carros antigos",
        //     alternativaD: "Relógios",
        //     alternativaCorreta: "alternativaB"
        // },
        // {
        //     pergunta: "Qual desses é um EP de Tyler?",
        //     alternativaA: "Black Friday",
        //     alternativaB: "Music Inspired by Illumination & Dr. Seuss’ The Grinch",
        //     alternativaC: "Odd Mode",
        //     alternativaD: "Golf Radio",
        //     alternativaCorreta: "alternativaB"
        // },
        // {
        //     pergunta: "Tyler já fez tema musical para qual filme?",
        //     alternativaA: "O Grinch",
        //     alternativaB: "Inception",
        //     alternativaC: "Spider-Man",
        //     alternativaD: "Joker",
        //     alternativaCorreta: "alternativaA"
        // },
        // {
        //     pergunta: "Qual personalidade Tyler admira publicamente?",
        //     alternativaA: "Steve Lacy",
        //     alternativaB: "Elon Musk",
        //     alternativaC: "Kanye West",
        //     alternativaD: "Will Smith",
        //     alternativaCorreta: "alternativaC"
        // },
        {
            pergunta: "Qual música veio como bônus na versão física de IGOR?",
            alternativaA: "Boyfriend",
            alternativaB: "Peach Fuzz",
            alternativaC: "Rose Tinted Cheeks",
            alternativaD: "Bronco",
            alternativaCorreta: "alternativaA"
        },
        // {
        //     pergunta: "Qual álbum apresenta o personagem 'Sammy'? ",
        //     alternativaA: "Wolf",
        //     alternativaB: "Cherry Bomb",
        //     alternativaC: "Goblin",
        //     alternativaD: "Flower Boy",
        //     alternativaCorreta: "alternativaA"
        // },
        // {
        //     pergunta: "Qual foi o primeiro grande hit de Tyler?",
        //     alternativaA: "EARFQUAKE",
        //     alternativaB: "See You Again",
        //     alternativaC: "Yonkers",
        //     alternativaD: "Tamale",
        //     alternativaCorreta: "alternativaC"
        // }
    ]
