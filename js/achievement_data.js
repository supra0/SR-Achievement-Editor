const achievementData = [
    {
        name: "Plort Peddler",
        description: "Sell 100 plorts at the Plort Market",
        order: 0,
        img: "bronze",
        progressType: "count",
        progressKey: 0x00
    },
    {
        name: "Transplorter",
        description: "Sell 500 plorts at the Plort Market",
        order: 1,
        img: "bronze",
        progressType: "count",
        progressKey: 0x00
    },
    {
        name: "Plort Authority",
        description: "Sell 1,000 plorts at the Plort Market",
        order: 2,
        img: "silver",
        progressType: "count",
        progressKey: 0x00
    },
    {
        name: "Plort Powerhouse",
        description: "Sell 2,500 plorts at the Plort Market",
        order: 3,
        img: "silver",
        progressType: "count",
        progressKey: 0x00
    },
    {
        name: "Plort Tycoon",
        description: "Sell 5,000 plorts at the Plort Market",
        order: 4,
        img: "gold",
        progressType: "count",
        progressKey: 0x00
    },
    {
        name: "Buck Buck Bagu-",
        description: "Feed 100 chickens to slimes on the Ranch",
        order: 5,
        img: "bronze",
        progressType: "count",
        progressKey: 0x01
    },
    {
        name: "Fruit Cocktail",
        description: "Have 3 different fruit trees on the Ranch at the same time",
        order: 6,
        img: "bronze"
    },
    {
        name: "Salad Bar",
        description: "Have 3 different veggie gardens on the Ranch at the same time",
        order: 7,
        img: "bronze"
    },
    {
        name: "Fortunate",
        description: "Earn over 5,000 newbucks",
        order: 8,
        img: "bronze",
        progressType: "count",
        progressKey: 0x03
    },
    {
        name: "Well-Off Rancher",
        description: "Earn over 25,000 newbucks",
        order: 9,
        img: "silver",
        progressType: "count",
        progressKey: 0x03
    },
    {
        name: "Upper Crust",
        description: "Earn over 100,000 newbucks",
        order: 10,
        img: "gold",
        progressType: "count",
        progressKey: 0x03
    },
    {
        name: "A Quick Newbuck",
        description: "Earn 5,000 newbucks in a single day",
        order: 11,
        img: "gold",
        progressType: "count",
        progressKey: 0x02 // seems to go unused but is tracked anyway - reset to 0 when you load any save
    },
    {
        name: "Up All Night",
        description: "Stay awake from 6 AM to 6AM the next day",
        order: 12,
        img: "bronze"
    },
    {
        name: "Not My Morning",
        description: "Be knocked out before 10 AM",
        order: 13,
        img: "bronze"
    },
    {
        name: "While You Were Away",
        description: "Return to the Ranch after more than 24 hours",
        order: 14,
        img: "bronze"
    },
    {
        name: "Omnivorous",
        description: "Feed pink slimes on the Ranch 10 different types of food",
        order: 15,
        img: "bronze",
        progressType: "list",
        progressKey: 0x00
    },
    {
        name: "Catch!",
        description: "Shoot food into an airborne slime's mouth",
        order: 16,
        img: "bronze"
    },
    {
        name: "Mine, All Mine",
        description: "Discover the Indigo Quarry",
        order: 17,
        img: "silver"
    },
    {
        name: "On The Other Side",
        description: "Discover the Moss Blanket",
        order: 18,
        img: "silver"
    },
    {
        name: "Smoke, Fire, and Mirrors",
        description: "Discover the Glass Desert",
        order: 19,
        img: "gold"
    },
    {
        name: "Jelly Belly Burst",
        description: "Burst a gordo slime",
        order: 20,
        img: "silver"
    },
    {
        name: "Open Says Me",
        description: "Open a slime gate",
        order: 21,
        img: "silver"
    },
    {
        name: "Carousel",
        description: "Incinerate an elder chicken",
        order: 22,
        img: "bronze"
    },
    {
        name: "Tasty!",
        description: "Feed 50 slimes on the Ranch their favorite food",
        order: 23,
        img: "bronze",
        progressType: "count",
        progressKey: 0x0C
    },
    {
        name: "Burstin' at the Seams",
        description: "Put at least 50 units into each slot of a fully upgraded silo",
        order: 24,
        img: "bronze"
    },
    {
        name: "Fully Loaded",
        description: "Have a maximally upgraded corral, coop, and silo on the Ranch",
        order: 25,
        img: "silver"
    },
    {
        name: "Hasty Exchange",
        description: "Fulfill a Range Exchange request within two hours of receiving it",
        order: 26,
        img: "silver"
    },
    {
        name: "Free Rangin'",
        description: "Collect 50 plorts on the Range in a single day",
        order: 27,
        img: "silver"
    },
    {
        name: "Hat Trick",
        description: "Obtain at least 3 gold plorts from a single gold slime",
        order: 28,
        img: "gold"
    },
    {
        name: "That Only Works in Comic Books",
        description: "Stand inside a rad aura for at least 15 seconds",
        order: 29,
        img: "silver",
        progressType: "count",
        progressKey: 0x11
    },
    {
        name: "Once Bitten, Twice... Bitten",
        description: "Hold onto a tarr for 15 seconds",
        order: 30,
        img: "gold",
        progressType: "count",
        progressKey: 0x12
    },
    {
        name: "Boop!",
        description: "Let a tabby slime headbutt you right on the nose",
        order: 31,
        img: "bronze"
    },
    {
        name: "Fireworks",
        description: "Shoot a boom slime largo into the air that explodes before landing",
        order: 32,
        img: "silver"
    },
    {
        name: "Controlling the Chaos",
        description: "Constrain more than 15 slimes in your vac stream at once while on the range",
        order: 33,
        img: "silver",
        progressType: "count",
        progressKey: 0x15
    },
    {
        name: "Six Pack",
        description: "Have at least 6 different types of slimes in the same corral",
        order: 34,
        img: "silver",
        progressType: "count",
        progressKey: 0x16
    },
    {
        name: "Risky Business",
        description: "Have at least 3 different types of largos in the same corral",
        order: 35,
        img: "silver",
        progressType: "count",
        progressKey: 0x17
    },
    {
        name: "Pool Party",
        description: "Fill a pond on your ranch with at least 5 different types of slimes",
        order: 36,
        img: "silver",
        progressType: "count",
        progressKey: 0x18
    },
    {
        name: "Diversification",
        description: "Have at least 10 types of largos on the ranch",
        order: 37,
        img: "gold",
        progressType: "count",
        progressKey: 0x19
    },
    {
        name: "Ball Pit",
        description: "Jump into a corral containing at least 40 slimes",
        order: 38,
        img: "silver",
        progressType: "count",
        progressKey: 0x1A
    },
    {
        name: "You... Monster!",
        description: "Send an adorable chick to a fiery end, the same place you're now destined to go",
        order: 39,
        img: "bronze"
    },
    {
        name: "Rush Challenger",
        description: "Reach at least 10,000 newbucks in Rush Mode",
        order: 40,
        img: "bronze",
        progressType: "count",
        progressKey: 0x26
    },
    {
        name: "Rush Champion",
        description: "Reach at least 35,000 newbucks in Rush Mode",
        order: 41,
        img: "silver",
        progressType: "count",
        progressKey: 0x26
    },
    {
        name: "Rush Plortmaster",
        description: "Reach at least 75,000 newbucks in Rush Mode",
        order: 42,
        img: "gold",
        progressType: "count",
        progressKey: 0x26
    },
    {
        name: "Into the Past",
        description: "Discover the Ancient Ruins",
        order: 43,
        img: "silver"
    },
    {
        name: "Onwards... to SCIENCE!",
        description: "Fabricate your first Slime Science gadget",
        order: 44,
        img: "bronze"
    },
    {
        name: "Bea the Builder",
        description: "Fabricate 35 Slime Science gadgets",
        order: 45,
        img: "silver"
    },
    {
        name: "Never Stop Creating",
        description: "Fabricate 100 Slime Science gadgets",
        order: 46,
        img: "gold"
    },
    {
        name: "Best of the Worst",
        description: "Place a tarr on the #1 Slime Stage",
        order: 47,
        img: "bronze"
    },
    {
        name: "She's on Fire!",
        description: "Score 50 points in a single game of slimeball",
        order: 48,
        img: "gold",
        progressType: "count",
        progressKey: 0x1D
    },
    {
        name: "One Person at a Time",
        description: "Join the 7Zee Rewards Club",
        order: 49,
        img: "bronze"
    },
    {
        name: "Color Me Impressed",
        description: "Use chroma packs to change the color of the ranch house, tech, and vacpack",
        order: 50,
        img: "bronze",
        progressType: "list",
        progressKey: 0x04
    },
    {
        name: "Mint in Box",
        description: "Purchase at least 10 different types of slime toys",
        order: 51,
        img: "silver",
        progressType: "list",
        progressKey: 0x03
    },
    {
        name: "Doors Like These",
        description: "Discover where Hobson's journey ended, and started once again",
        order: 52,
        img: "gold"
    },
    {
        name: "The Hunter Has Become... The Other Thing",
        order: 53,
        description: "Snare a Hunter Gordo",
        img: "silver"
    },
    {
        name: "Renewal",
        description: "Start bringing life back to the Glass Desert",
        order: 54,
        img: "silver"
    },
    {
        name: "The Adventure Continues",
        description: "Complete Adventure Mode and set out for what's next.",
        order: 55,
        img: "gold"
    },
    {
        name: "Pro Style",
        description: "Complete the Slimepedia",
        order: 56,
        img: "gold"
    }
];