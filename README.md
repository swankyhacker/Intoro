# Intoro 🇯🇵 

Smartest Kana app. 8-)

## Getting Started
---
**NOTE**: We will use the `yarn` packet manager for managing our dependencies. Please do **NOT** use `npm`.

1. Install all necessary dependencies.

```
$ yarn 
```
We will use the `yarn` packet manager for managing our dependencies. Please do **NOT** use `npm`.

2. You will need to have a ```firebase``` account for interacting with the project. Contact __[@swankyhacker](https://github.com/swankyhacker)__ for access to Intoro's firebase credentials. Sign into your firebase account with:
```
$ firebase login
```

3. It is recommended to install the recommended ```vscode``` extensions for this project. 

4. For local development, use the following command to start an Expo server:
```
$ yarn start
```
**NOTE**: You will have your own copy of Cloud Firestore/Functions/Auth in an emulator for local development. The following command should be run in parallel with your Expo server in another terminal window:
```
$ yarn emulators 
```

5. Use the following command to seed your Firestore emulator:
```
$ yarn seed
```


## Dependencies
---
This project has already been configured with the following dependencies:
- ```react-native-paper```: Pre-configured customizable React Native UI components.
- ```react-navigation```: For navigating between different screens and storing the browsed pages in a stack.
- ```firebase-tools```: Accessing Firebase tools from the CLI.
- ```husky```: Pre-commit Git hooks for consistent linting and formatting.
- ```metro-react-native-babel-preset```: Set up path resolvers in project

## Commit Rules 
---
1. Do not commit to the ```main/master``` branch. Create a separate branch for each feature and push to origin with your branch name. Submit your code for review through a ```pull request```.
2. Use sensible names for your branches. Prefix with ```fix``` or ```feature``` depending on the situation. For example, if you are working on the design for the login page, you can use `feature/login-page`.
3. Make sure your commit messages are able to give an idea of what work or feature you have finished in that particular commit.
4. Do not try to bypass the pre-commit hooks.
5. If you are installing new libraries, please contact me before installing it as I may be able to suggest a better alternative.
6. Try to write modular code as keep your commits as brief as possible. 
