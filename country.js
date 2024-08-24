class Country {
    // Private fields
    #currency;
    #population;

    constructor(name, continent, currency, population) {
        this.name = name;
        this.continent = continent;
        this.#currency = currency;
        this.#population = population;
    }

    getOverview() {
        return `${this.name} is a country in ${this.continent}. Its currency is the ${this.#currency} and it has a current population of ${this.#population} people!`;
    }

    getCurrency() {
        return this.#currency;
    }

    getPopulation() {
        return this.#population;
    }

    setPopulation(newPopulation) {
        this.#population = newPopulation;
    }
}

// Example usage
const netherlands = new Country('Netherlands', 'Europe', 'Euro', 17_000_000);

// Accessing the overview
console.log(netherlands.getOverview()); 
// Output: Netherlands is a country in Europe. Its currency is the Euro and it has a current population of 17000000 people!

// Accessing private fields through public methods
console.log(netherlands.getCurrency()); // Output: Euro
console.log(netherlands.getPopulation()); // Output: 17000000

// Setting a new population
netherlands.setPopulation(17_500_000);
console.log(netherlands.getPopulation()); // Output: 17500000

// Trying to access private fields directly (will fail)
// console.log(netherlands.#currency); // SyntaxError: Private field '#currency' must be declared in an enclosing class
