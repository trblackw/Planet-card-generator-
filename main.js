class Planet {
  constructor(name, diameter, mass, moons, temp, orbitDays, orbitYears, description, facts) {
    this.name = name;
    this.diameter = diameter;
    this.mass = mass;
    this.moons = moons;
    this.temp = temp;
    this.orbitDays = orbitDays;
    this.orbitYears = orbitYears;
    this.description = description;
    this.facts = facts;
}

};
  
const saturn = new Planet('Saturn', '72,367.4 mi', '5.68 × 10^26 kg (95 Earths)', 62, '-178 °C', '10,756', '29.5', 'Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei.', 'Saturn was known to the ancients, including the Babylonians and Far Eastern observers. It is named for the Roman god Saturnus, and was known to the Greeks as Cronus.');

const mars = new Planet('Mars', '4,195.5 mi', '6.42 x 10^23 kg (10.7% of Earth)', 2, '-153 to 20 °C', 687, 1.9, 'The fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. It\'s a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.', 'Mars has the largest dust storms in the solar system. They can last for months and cover the entire planet. On Mars the Sun appears about half the size as it does on Earth.');
    
const venus = new Planet('Venus', '7,520.8 mi', '4.87 x 10^24 kg (81.5% of Earth)', 0,'462 °C', 225, 0.62, 'Venus has a hellish atmosphere as well, consisting mainly of carbon dioxide with clouds of sulfuric acid, and scientists have only detected trace amounts of water in the atmosphere. The atmosphere is heavier than that of any other planet, leading to a surface pressure 90 times that of Earth.', 'Although it is the second planet from the sun, Venus is the hottest planet in the solar system. The reason Venus is hotter than even Mercury is not because of its position in the solar system but because of its thick, dense cloud layer.');

const neptune = new Planet('Neptune', '30,599 mi', '4,212 mi', '1.02 × 10^26 kg (17 Earths)', 14, '-214 °C', '60,225', 165, 'Neptune is very similar to Uranus. It\'s made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus.', 'Neptune was not known to the ancients. It is not visible to the naked eye and was first observed in 1846. Its position was determined using mathematical predictions. It was named after the Roman god of the sea.');

const uranus = new Planet('Uranus', '31,763.25 mi', '8.68 × 10^25 kg (15 Earths)', 27,'-216 °C', '30,687', 84, 'The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the sun like a rolling ball.', 'Uranus is often referred to as an “ice giant” planet. Like the other gas giants, it has a hydrogen upper layer, which has helium mixed in. Below that is an icy “mantle, which surrounds a rock and ice core. The upper atmosphere is made of water, ammonia and the methane ice crystals that give the planet its pale blue colour.');

const mercury = new Planet('Mercury', '3,032 mi', '3.30 x 10^23 kg (5.5% Earth)', 0, '-173 to 427 °C', 88, 0.24, 'The planet Mercury looks a little bit like Earth\'s moon. Like our Moon, Mercury’s surface is covered with craters caused by space rock impacts. The planet has a thick iron core and a thinner outer crust of rocky material. The surface of Mercury has enormous escarpments as much as three kilometers high and hundreds of kilometers in length. In addition to its heavily cratered surface Mercury also has regions of relatively smooth plains.', 'Mercury is the smallest planet in the Solar System--yet the second densest. One of five planets visible with the naked eye, Mercury is just 3,032 miles across its equator, compared with 7,917.5 miles for the Earth.');

const jupiter = new Planet('Jupiter', '88,846 mi', '1.90 × 10^27 kg (318 Earths)', 67,'-148 °C', '4,333', 11.9, 'Jupiter is the largest planet in the solar system. It is approximately 143,000 kilometers (about 89,000 miles) wide at its equator. Jupiter is so large that all of the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter. The planet is like a star in composition. If Jupiter had been about 80 times more massive, it would have become a star rather than a planet.', 'Jupiter has the shortest day of all the planets. It turns on its axis once every 9 hours and 55 minutes. The rapid rotation flattens the planet slightly, giving it an oblate shape.');

const earth = new Planet('Earth', '7,926 mi', '5.97 x 10^24 kg', 1, '-88 to 58 °C', 365.24, 1.0007, 'Earth, our home, is the third planet from the sun. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.', 'The Earth’s rotation is gradually slowing. This deceleration is happening almost imperceptibly, at approximately 17 milliseconds per hundred years, although the rate at which it occurs is not perfectly uniform. This has the effect of lengthening our days, but it happens so slowly that it could be as much as 140 million years before the length of a day will have increased to 25 hours.');


function createPlanetHTML(planet) {
  return `<div class='card col-sm-11 col-md-9 col-lg-7 col-xl-6 m-auto'>
    <div>
      <img src='img/${planet.name}.jpg' alt='${planet.name}'>
    </div>
    <h2>${planet.name}</h2>
    <p>${planet.description}</p>
    <h3>Planet Profile</h3>
        <ul>
          <li><strong>Diameter:</strong> ${planet.diameter}
          <li><strong>Mass:</strong> ${planet.mass}
          <li><strong>Moons:</strong> ${planet.moons}
          <li><strong>Surface Temperature:</strong> ${planet.temp}
          <li><strong>Orbit Period:</strong> ${planet.orbitDays} days (${planet.orbitYears} years)</li>
        </ul>
        <p>${planet.facts}</p>
        <p class='lead'id='nasaLink'><em>For more information on ${planet.name}, here's what <a href='https://solarsystem.nasa.gov/planets/overview/' target='_blank'>NASA</a> has to say</p>
      </div>`
  }

const body = document.querySelector('body');
const button = document.querySelector('button');
const containerDiv = document.querySelector('.container');
const input = document.querySelector('input');



//body.innerHTML = createPlanetHTML(earth)


//button.addEventListener('click', () => body.innerHTML = createPlanetHTML(input.value));


