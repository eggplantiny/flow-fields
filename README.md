# Animated Flow Fields with Vanilla TypeScript

This project is an example of how to create animated flow fields using TypeScript. Flow fields are a visualization technique used in computer graphics and machine learning to show the direction and intensity of movement in a field. In this project, we will create a flow field with particles moving through it, creating a dynamic and visually interesting animation.

## Setup

To run this project, you need to have [Node.js](https://nodejs.org/en/) installed on your computer. You can then clone this repository and install the dependencies:

```bash
git clone https://github.com/your-username/flow-fields.git
cd flow-fields
pnpm install
```


## Usage

To start the development server, run:

```bash
pnpm run dev
```


This will start the development server at [http://localhost:3000](http://localhost:3000), where you can see the flow field animation in your browser.

To build the production version of the project, run:

```bash
pnpm run build
```

This will create a `dist` folder with the optimized and minified files.

## How it works

The flow field animation is created using vanilla TypeScript. The flow field is generated using a [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) algorithm, which creates a smooth and continuous gradient of values that we can use to calculate the direction and speed of the particles.

The particles are implemented using object-oriented programming in TypeScript. Each particle has a position, a velocity, and an acceleration, and moves through the flow field by following the direction and speed indicated by the noise values at its current position.

The animation is updated in real-time using a requestAnimationFrame loop, which redraws the particles on the canvas every frame.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
