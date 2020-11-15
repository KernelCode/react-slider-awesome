# react-slider-awesome

> the best react carousel

[![NPM](https://img.shields.io/npm/v/react-slider-awesome.svg)](https://www.npmjs.com/package/react-slider-awesome) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![example](https://github.com/KernelCode/react-slider-awesome/raw/main/example.gif)

## Install

```bash
npm install --save react-slider-awesome
```

[Live Demo](http://altahery.com/react-slider-awesome/)

## Usage

```jsx
import React from 'react'

import { Slider } from 'react-slider-awesome'

import 'react-slider-awesome/dist/index.css'

const App = () => {
  /* For Right to left set  body{  direction: rtl; }  then rtl={true|false} */
  /* For no item effects  noEffects={true|false} */
  /* For no num of items in slide size={small|big} */
  return (
    <Slider rtl={false} noEffects={false} size={'small'}>
      <div>
        <img src={'./path/to/1.jpg'} />
      </div>
      <div>
        <img src={'./path/to/2.jpg'} />
      </div>
      <div>
        <img src={'./path/to/3.jpg'} />
      </div>
      <div>
        <img src={'./path/to/4.jpg'} />
      </div>
      <div>
        <img src={'./path/to/5.jpg'} />
      </div>
      <div>
        <img src={'./path/to/6.jpg'} />
      </div>
      <div>
        <img src={'./path/to/7.jpg'} />
      </div>
      <div>
        <img src={'./path/to/1.jpg'} />
      </div>
      <div>
        <img src={'./path/to/2.jpg'} />
      </div>
      <div>
        <img src={'./path/to/3.jpg'} />
      </div>
      <div>
        <img src={'./path/to/4.jpg'} />
      </div>
      <div>
        <img src={'./path/to/5.jpg'} />
      </div>
      <div>
        <img src={'./path/to/6.jpg'} />
      </div>
      <div>
        <img src={'./path/to/7.jpg'} />
      </div>
    </Slider>
  )
}

export default App
```

## License

MIT © [Abdullah Altahery](https://github.com/kernelcode)
