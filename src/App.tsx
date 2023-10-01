import './styles.css';
import reactImage from  './react.png';
import atomSvg from './atom.svg';

export const App = ()=>{
    return(
        <>
            <h1>React App with Webpack and TS - {process.env.NODE_ENV} - {process.env.name}</h1>
            <img src={reactImage} alt='React Logo' width='300' height='200' />
            <img src={atomSvg} alt='React atom svg' width='300'/>
        </>
    )
}