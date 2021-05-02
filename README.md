# React Design Editor

React design editor using FabricJS. Create images in React, draw diagrams and arrange compositions using the image editor and save the result to one of several export formats, provides functionality similar to canva.com.

![Image of Yaktocat](https://i.ibb.co/RyTXKPm/preview.png)

## Features

- [x] Add, remove, resize, reorder, clone, copy/paste objects
- [x] Group/ungroup objects
- [x] Zoom/pan canvas
- [ ] Import and export to JSON or image
- [ ] Context menu
- [ ] Animation support, with Fade / Bounce / Shake / Scaling / Rotation / Flash effects
- [ ] Multiple interation modes: grasp, selection, ctrl + drag grab
- [x] Undo/Redo support
- [x] Guidelines support
- [ ] Multiple canvas support
- [x] Preview mode

## How to start

NodeJS required. Start in development mode using the following commands.

```sh
# install dependencies
yarn install
# start development server
yarn start
```

Web application service will start running at `localhost:3000`

## Integrations

In order to provide rich content, the following integrations are implemented.

### Iconscout

Illusatrions and icons provider. Add credentials to `.env` file.

```sh
ICONSCOUT_CLIENT_ID="your-client-id"
ICONSCOUT_SECRET="your-secret"
```

Currently, this values are being included in the repository. In the furure, you will require to add your own credentials.

## Contribution

Feel free to contribute by opening issues with any questions, bug reports or feature requests.

## Author

Created and maintained by Dany Boza ([@xorbmoon](https://twitter.com/xorbmoon)).

## License

[MIT](LICENSE)
