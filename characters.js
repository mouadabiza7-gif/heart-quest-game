// characters.js

// Define the Valentine character
const valentineCharacter = {
    name: 'Valentine',
    type: 'main',
    abilities: {
        love: 100,
        charm: 75,
        charisma: 80,
    },
    interact: function() {
        return 'Valentine smiles at you, spreading love!';
    }
};

// Define helper NPCs
const helperNPCs = [
    {
        name: 'Cupid',
        type: 'helper',
        abilities: {
            aim: 90,
            loveSprinkle: 100,
        },
        interact: function() {
            return 'Cupid shoots an arrow of love!';
        }
    },
    {
        name: 'Rose',
        type: 'helper',
        abilities: {
            beauty: 100,
            charm: 85,
        },
        interact: function() {
            return 'Rose offers you a beautiful flower!';
        }
    }
];

// Function for character interactions
function interactWithCharacter(character) {
    if (typeof character.interact === 'function') {
        return character.interact();
    }
    return 'This character does not interact.';
}

// Exporting the characters for external use
module.exports = {
    valentineCharacter,
    helperNPCs,
    interactWithCharacter
};
