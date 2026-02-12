# Customization Guide

This document provides a detailed guide on how to customize various aspects of the Heart Quest Game.

## 1. Editing Names
You can change the names of characters in the game by modifying the corresponding entries in the configuration file. Look for the `names` section:
```json
"names": {
    "hero": "New Hero Name",
    "villain": "New Villain Name"
}
```

## 2. Customizing Messages
Messages that appear during gameplay can be edited in the `messages` section of the configuration.
Example:
```json
"messages": {
    "greeting": "Welcome to the Heart Quest!",
    "goodbye": "Thank you for playing!"
}
```

## 3. Changing Photos
To update the photos used in the game, replace the paths in the `images` section:
```json
"images": {
    "heroImage": "path/to/new/hero_image.png",
    "villainImage": "path/to/new/villain_image.png"
}
```

## 4. Customizing Colors
Colors can be customized in the `colors` section. Each color is defined using hex codes:
```json
"colors": {
    "background": "#FFFFFF",
    "text": "#000000"
}
```

## 5. Game Settings
The game's settings can be modified for preferences like difficulty, volume, and game speed in the `settings` section:
```json
"settings": {
    "difficulty": "easy",
    "volume": 75,
    "gameSpeed": "normal"
}
```

## Saving Changes
After making changes to these configurations, ensure to save the file and restart the game for your changes to take effect.