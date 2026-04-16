// db.js — Общая база данных для главной и страниц аниме

export const animeDatabase = [
    {
        id: "chainsaw_man",
        title: "Chainsaw Man",
        img: "chainsaw_man.jpg",
        link: "anime-page.html?id=chainsaw_man",
        type: "TV Сериал",
        genres: "Боевик, Ужасы, Сёнэн",
        themes: "Демоны, Охотники на демонов",
        japTitle: "Chainsaw Man (チェンソーマン)",
        rating: "18+ (R)",
        status: "Вышло"
    },
    {
        id: "overlord",
        title: "Overlord Movie 1: Fushisha no Ou",
        img: "overlord.jpg",
        link: "anime-page.html?id=overlord",
        type: "Фильм",
        genres: "Боевик, Фэнтези, Приключения",
        themes: "Исекай, Магия, Тёмное фэнтези",
        japTitle: "Overlord: Fushisha no Ou (オーバーロード 不死者の王)",
        rating: "16+",
        status: "Вышло"
    }
    // Чтобы добавить новое аниме, просто скопируй блок выше { ... } и вставь его ПЕРЕД другими.
];

