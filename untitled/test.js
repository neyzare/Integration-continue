// Classe Commerce
class Commerce {
    constructor(name) {
        this.name = name; // Nom du commerce
        this.rayons = []; // Liste des rayons
        this.vendeurs = []; // Liste des vendeurs
    }

    addRayon(rayon) {
        this.rayons.push(rayon);
    }

    addVendeur(vendeur) {
        this.vendeurs.push(vendeur);
    }

    // Validation des contraintes fonctionnelles
    validate() {
        return {
            hasMultipleRayons: this.rayons.length > 1,
            hasAtLeastOneVendeur: this.vendeurs.length >= 1,
            isNameValid: /^[A-Za-z]{5}$/.test(this.name)
        };
    }
}

// Classe Rayon
class Rayon {
    constructor(name) {
        this.name = name;
    }
}

// Classe Vendeur
class Vendeur {
    constructor(name) {
        this.name = name;
    }
}

// Classe de Test unitaire
class Test {
    constructor(description, testFunction) {
        this.description = description;
        this.testFunction = testFunction;
    }

    run() {
        try {
            const result = this.testFunction();
            console.log(`${this.description}: ${result ? "Pass" : "Fail"}`);
        } catch (error) {
            console.error(`${this.description}: Error - ${error.message}`);
        }
    }
}

// Classe de suite de tests
class TestSuite {
    constructor(name) {
        this.name = name;
        this.tests = [];
    }

    addTest(test) {
        this.tests.push(test);
    }

    run() {
        console.log(`Running Test Suite: ${this.name}`);
        this.tests.forEach((test) => test.run());
    }
}

// Initialisation
const myCommerce = new Commerce("ShopA");
const rayon1 = new Rayon("Rayon 1");
const rayon2 = new Rayon("Rayon 2");
const vendeur1 = new Vendeur("Alice");

// Ajout de rayons et vendeurs
myCommerce.addRayon(rayon1);
myCommerce.addRayon(rayon2);
myCommerce.addVendeur(vendeur1);

// Création de la suite de tests
const testSuite = new TestSuite("Commerce Validation Tests");

// Ajout des tests
testSuite.addTest(new Test("Nom du commerce valide", () => myCommerce.validate().isNameValid));
testSuite.addTest(new Test("Commerce a plusieurs rayons", () => myCommerce.validate().hasMultipleRayons));
testSuite.addTest(new Test("Commerce a au moins un vendeur", () => myCommerce.validate().hasAtLeastOneVendeur));

// Exécution des tests
testSuite.run();