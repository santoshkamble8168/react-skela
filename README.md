# react-skela
React skeleton library

## Features

- **Fully Customizable components:** Feel free to change the colors, sizes, animation type.
- **Plug and play:** Use existing components or create a new one using basic react-skela (line, circle, square)
- ⚛️ **Lightweight library** with **zero dependencies**.

## Demo
[React Skela examples](https://reactskela.netlify.app)


## Getting Started

```sh
npm i react-skela
```

```sh
yarn add react-skela
```

## Usage
Base skeletons 
1. Default is a line skeleton
```jsx
import Skela from 'react-skela'

const isLoading = () => <Skela />
```
2. circle
```jsx
import Skela from 'react-skela'

const isLoading = () => <Skela type="circle" />
```
3. square
```jsx
import Skela from 'react-skela'

const isLoading = () => <Skela type="square" />
```

Inbuilt skeletons 

1. Table
```jsx
import { SkelaTable } from 'react-skela'

const isLoading = () => <SkelaTable rows={10} />
```

2. Card
```jsx
import { SkelaCard } from 'react-skela'

const isLoading = () => <SkelaCard cardWidth="200px" cardHeight="300px" />
```




