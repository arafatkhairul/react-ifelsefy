# ⚡ react-ifelsefy

A lightweight package to handle conditional rendering in JSX similar to `if`, `else-if`, and `else` in React and React Native.

## Installation

Install the package using npm:

```bash
npm install react-ifelsefy
```

or using yarn:

```bash
yarn add react-ifelsefy
```

Usage in React

This package provides Conditional, If, ElseIf, and Else components to handle conditional rendering in JSX. Wrap your conditions within the Conditional component.

Example in React:

```javascript
import React from "react";
import { Conditional, If, ElseIf, Else } from "react-ifelsefy";

function App() {
  const isLoggedIn = true;
  const isAdmin = false;

  return (
    <div>
      <Conditional>
        <If condition={isLoggedIn}>
          <h1>Welcome, User!</h1>
        </If>
        <ElseIf condition={isAdmin}>
          <h1>Welcome, Admin!</h1>
        </ElseIf>
        <Else>
          <h1>Please log in to continue.</h1>
        </Else>
      </Conditional>
    </div>
  );
}

export default App;
```

Usage in React Native

This package works similarly in React Native as in React.

Example in React Native:

```javascript
import React from "react";
import { View, Text } from "react-native";
import { Conditional, If, ElseIf, Else } from "react-ifelsefy";

export default function App() {
  const isLoggedIn = false;
  const isAdmin = false;

  return (
    <View>
      <Conditional>
        <If condition={isLoggedIn}>
          <Text>Welcome, User!</Text>
        </If>
        <ElseIf condition={isAdmin}>
          <Text>Welcome, Admin!</Text>
        </ElseIf>
        <Else>
          <Text>Please log in to continue.</Text>
        </Else>
      </Conditional>
    </View>
  );
}
```

###

API Documentation

<Conditional>

Wrapper component that provides context to manage conditional rendering.

    •	Props: Accepts children components.

<If>

Renders children if the specified condition is true.

    •	Props:
    •	condition: Boolean value to determine if the children should render.

<ElseIf>

Renders children if no previous condition was met and this condition is true.

    •	Props:
    •	condition: Boolean value to determine if the children should render.

<Else>

Renders children if none of the previous conditions were met.

    •	Props: Accepts children components.

Contributing

Feel free to open issues or submit pull requests to improve the functionality of this package. Contributions are welcome!

License

MIT

This package is maintained with ❤️ by Arafat Islam Khairul . If you find this package helpful, consider starring the repository on GitHub.

###

## Repository

This package is available on GitHub: [react-ifelsefy](https://github.com/arafatkhairul/react-ifelsefy)
