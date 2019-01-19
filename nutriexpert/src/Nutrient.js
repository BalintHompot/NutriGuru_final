class Question{
    constructor(text, tag, constraints){
        this.text = text
        this.tag = tag
        this.constraints = constraints
    }
}
class Nutrient{
    constructor(name, rda, rdaUnit, estimated, importanceMultiplier, questionList){
        this.name = name
        this.rda = rda
        this.rdaUnit = rdaUnit
        this.estimated = estimated
        this.importanceMultiplier = importanceMultiplier
        this.questionList = questionList
    }
}

const VERY_IMORTANT = 1000
const IMPORTANT = 500

const VEGE2 = "Alternatively, did you eat any of these other vegetables?"
const FRUIT2 =  "Did you eat any of these more exotic fruits?"
const DAIRY2 = "Did you consume any replacement products?"
//const NUTS2
//const WHOLEGRAIN2
const B122 = "It seems you did not eat any meat, eggs, fish or seafood today. Do you supplement B12?"
const OIL2 = "You did not have enough oil (3 portions). However, you can replace it with a total of 4 portions of nuts?"
const FISH2 = "It seems you did not have fish today, did you have any in the past 7 days?"
const LEGUME2 = "Oh you hadn't had legumes today. Have you had any in the last 7 days?"

var newNutriList = function(){ return {
    //Name: new Nutrient(N"name", rda, rdaUnit, est = 0, impMult, [new Question("asdf?", "ghjk?")])
    //For hierarchy: Importance score should be calculated as "(1 - (estimated/rda)) * importanceMultiplier"
    NVegetables: new Nutrient("vegetables",       250,    "gram", 0, VERY_IMORTANT, [new Question(VEGE2, ["exotic_vegetable"],[])]),
    NFruits:     new Nutrient("fruits"    ,       250,    "gram", 0, VERY_IMORTANT, [new Question(FRUIT2, ["exotic_fruit"],[])]),
    NDairy:      new Nutrient("dairy"     ,         3, "portion", 0, VERY_IMORTANT, [new Question(DAIRY2,["dairyReplacement"],[])]),
    NFish:       new Nutrient("fish"      ,         1, "portion", 0, VERY_IMORTANT, [new Question(FISH2,["weeklyFish"],["meat", "animal"])]),
    NLegumes:    new Nutrient("legumes"   ,         1, "portion", 0, VERY_IMORTANT, [new Question(LEGUME2,["legume"],[])]),
    NNuts:       new Nutrient("nut"      ,         15,    "gram", 0, VERY_IMORTANT, []),
    NWholeGrain: new Nutrient("Whole Grain",       90,    "gram", 0, VERY_IMORTANT, []),
    NB12:        new Nutrient("b12"       ,         1, "portion", 0, IMPORTANT, [new Question(B122,["meatReplacement"],[])]),
    NOil:        new Nutrient("oils"      ,        50,      "ml", 0, IMPORTANT, [new Question(OIL2,["nut"],[])]),
    NTea:        new Nutrient("tea"       ,         3, "portion", 0, IMPORTANT, []),
}
}
var nutriList = newNutriList()
export default{
    newNutriList,
    nutriList,
    Nutrient
}
