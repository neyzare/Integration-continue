class Commerce {
    constructor(nom,client, rayon) {
        this.nom = nom
        this.client = client
        this.rayon = rayon

    }

    clientValide() {
        console.log(this.client.length === 5)
    }

}

class user {
    constructor(nomClient) {
        this.nomClient = nomClient
    }
    
}

class Rayon {
    constructor(nbRayon) {
        this.nbRayon = nbRayon
    }

    valideRayon() {
        console.log(this.nbRayon > 1)
    }
}

class TestUser {

}

new Commerce('lucas').nameValide()
new Rayon(0).valideRayon()
new Rayon(4).valideRayon()