import styles from "../styles/CitySelector.module.css";

function CitySelector({ updateCity }) {
  const citiesData = [
    {
      name: "Токио",
      description:
        "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl:
        "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей.",
      ],
    },
    {
      name: "Киото",
      description:
        "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
      imageUrl: "https://voyagejapan.com/files/core/407_image.jpg",
      facts: [
        "В Киото насчитывается более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет.",
      ],
    },
    {
      name: "Осака",
      description:
        "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/c3/bc/76/photo0jpg.jpg?w=600&h=400&s=1",
      facts: [
        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
        "Город является кулинарной столицей Японии.",
      ],
    },
    {
      name: "Хоккайдо",
      description:
        "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
      imageUrl:
        "http://i1.wallbox.ru/wallpapers/main2/202201/nebo-ozero-gory-aponia-hokkajdo-asahi.jpg",
      facts: [
        "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
        "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
      ],
    },
    {
      name: "Нагоя",
      description:
        "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
      imageUrl:
        "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
      facts: [
        "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
        "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
      ],
    },
  ];

  function handleChange(event) {
    updateCity(citiesData[event.target.value]);
  }

  return (
    <form className={styles.form}>
      <h1>Выберите город: </h1>
      <select className={styles.select} onChange={handleChange}>
        {citiesData.map((cityData, index) => (
          <option key={index + cityData.name} value={index}>
            {cityData.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default CitySelector;
