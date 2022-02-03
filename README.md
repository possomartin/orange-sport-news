# APLICACION REACT

esta aplicación utiliza REACT JS > está estructurado por un componente en donde se forma la tarjeta de cada item recuperado del llamado a la API en uso. Este componente se lo puede visualizar en la carpeta de 

### `components`

Además la API en uso es https://www.scorebat.com/video-api/ ,la cual nos permite obtener videos de los partidos de diversas ligas.

### `Resultado API`

```
[
    {
        "title": "Peru - Ecuador",
        "competition": "WORLD CUP: CONMEBOL, Preminiaries",
        "matchviewUrl": "https://www.scorebat.com/embed/matchview/993905/",
        "competitionUrl": "https://www.scorebat.com/embed/competition/world-cup-conmebol-preminiaries/",
        "thumbnail": "https://www.scorebat.com/og/m/og993905.jpeg",
        "date": "2022-02-02T02:00:00+0000",
        "videos": [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/61fa149989fe8/?utm_source=api&utm_medium=video&utm_campaign=dffd' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ]
    },
    {
        "title": "Ecuador - Brazil",
        "competition": "WORLD CUP: CONMEBOL, Preminiaries",
        "matchviewUrl": "https://www.scorebat.com/embed/matchview/993899/",
        "competitionUrl": "https://www.scorebat.com/embed/competition/world-cup-conmebol-preminiaries/",
        "thumbnail": "https://www.scorebat.com/og/m/og993899.jpeg",
        "date": "2022-01-27T21:00:00+0000",
        "videos": [
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/61f358d3621ac/?utm_source=api&utm_medium=video&utm_campaign=dffd' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            },
            {
                "title": "Highlights",
                "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/61f3426eab80e/?utm_source=api&utm_medium=video&utm_campaign=dffd' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>"
            }
        ]
    }
]
```

# Interfaz de usuario

para poder hacer uso de la aplicación debemos dar click en el botón de
### `Search News`
![image](https://user-images.githubusercontent.com/74694516/152256696-70510dd3-6036-4abc-b260-e2a1fcf9e3ed.png)

Una vez, realizado este paso, observarémos los resultados de la API en formato de tarjetas en donde se muestra el Título, Descripción y Fecha respectiva.

![image](https://user-images.githubusercontent.com/74694516/152257194-08828137-0986-446a-9b73-2f51a32d7177.png)

###  `Search Bar`

El searchbar nos permitira filtrar los resultados obtenidos, es decir buscar por Título del video.

![image](https://user-images.githubusercontent.com/74694516/152257317-1883dc17-bfa6-48b7-9f09-fd2c6bb47b0b.png)

### `link aplicación en Heroku `

http://orange-sport-news.herokuapp.com/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
