import heroe from "../data/heroe";

const [firstHero, secondHero, thirdHero] = heroe;
console.log({ firstHero, secondHero, thirdHero });
console.log(thirdHero.name);

export default {
    firstHero,
    secondHero,
    thirdHero
};