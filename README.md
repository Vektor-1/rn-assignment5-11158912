My React Native Project

Table of Contents
1. Introduction
2. Features
3. Installation
4. Usage
5. Screens
6. Navigation
7. Contributing

Introduction

This project is a React Native application that provides a user-friendly interface for managing transactions, viewing statistics, and customizing settings. The app features a bottom navigation bar with icons from various icon libraries and utilizes a custom theme for styling.

Features

- Bottom navigation with customizable icons.
- Home screen displaying user information and quick actions.
- Cards screen for managing payment cards.
- Statistics screen for viewing financial statistics.
- Settings screen for customizing user preferences.
- Themed components with light and dark mode support.

Installation

To get started with this project, follow these steps:

1. Clone the repository:
    git clone https://github.com/Vektor-1/rn-assignment5-11158912/tree/main

2. Navigate to the project directory:
    cd my-app

3. Install the dependencies:
    npm install

4. Start the development server:
    npx expo start
Usage

After installing the dependencies, you can run the application on an emulator or a physical device. The default development server will launch the Metro bundler and you can then choose to run the app on iOS or Android.

Screens

1. Home Screen
![IMG_3221](https://github.com/Vektor-1/rn-assignment5-11158912/assets/170606617/cc423647-4693-4ca7-875f-45a028d25858)

Displays user information and quick actions for sending, receiving, loans, and top-ups. 

2. Cards Screen

Manage payment cards with the ability to add, edit, or delete cards.

3. Statistics Screen

View financial statistics and track expenses over time.

4. Settings Screen
![IMG_3213](https://github.com/Vektor-1/rn-assignment5-11158912/assets/170606617/3189f68c-8640-4182-9514-9d2df41ef126)

Customize user preferences including theme settings, account information, and notifications.

Navigation

The app uses a bottom tab navigator with the following tabs:

- Home: Displays user information and quick actions.
- Cards: Manage all payment cards.
- Statistics: View financial statistics.
- Settings: Customize user preferences.

Custom Icons

The app uses icons from various icon libraries:
- Home: `MaterialCommunityIcons`
- Cards: `FontAwesome5`
- Statistics: `Foundation`
- Settings: `Ionicons`

Theme
  1. Settings
     a. Light
![IMG_3213](https://github.com/Vektor-1/rn-assignment5-11158912/assets/170606617/3189f68c-8640-4182-9514-9d2df41ef126)
     b. Dark
![IMG_3220](https://github.com/Vektor-1/rn-assignment5-11158912/assets/170606617/9519ba79-7c90-4cc0-bf12-d6b1f8b6ba41)

  2. Home
     a. Light
![IMG_3221](https://github.com/Vektor-1/rn-assignment5-11158912/assets/170606617/cc423647-4693-4ca7-875f-45a028d25858)
     b. Dark
![IMG_3219](https://github.com/Vektor-1/rn-assignment5-11158912/assets/170606617/2a511eab-6f1f-4d1d-ba94-72e469e57b41)

The application supports theme customization using a custom theme context. The active tab's icon and label colors can be customized.

Bottom Tab Size

The height and padding of the bottom tab can be adjusted in the `tabBarStyle` property.

Contributing

We welcome contributions to this project! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

Steps to Contribute

1. Fork the repository.
2. Create a new branch:
    git checkout -b feature/your-feature-name


3. Make your changes.
4. Commit your changes:
    git commit -m 'Add some feature'

5. Push to the branch:
    git push origin feature/your-feature-name

6. Open a pull request.

