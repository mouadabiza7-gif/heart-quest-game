'use strict';

const loveMessages = [
    'I love you to the moon and back.',
    'You are my favorite distraction.',
    'Every day with you is my favorite day.',
    'You are the piece of my heart I never knew was missing.',
    'Let’s go where we can be alone together.',
];

const npcs = {
    "npc1": {
        "name": "Luna",
        "dialogue": [
            "Hello there, traveler! Isn't this a beautiful day?",
            "I've been waiting for someone special to come my way.",
            "What brings you here? Are you searching for love?"
        ]
    },
    "npc2": {
        "name": "Leo",
        "dialogue": [
            "Hey, you look like someone who knows a good secret!",
            "Do you believe in love at first sight?",
            "Sometimes, the heart knows better than the mind."
        ]
    }
};

const displayMessage = (message) => {
    console.log(message);
};

const startConversation = (npc) => {
    const greeting = `${npc.name}: ${npc.dialogue[0]}`;
    displayMessage(greeting);
};

const sendLoveMessage = () => {
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    displayMessage(randomMessage);
};

// Example usage
startConversation(npcs.npc1);
sendLoveMessage();
