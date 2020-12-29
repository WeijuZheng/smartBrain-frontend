import Tilty from "react-tilty";
import Brain from './logo-100.png';
import './Logo.css';

function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilty className="tilty" glare scale={1.05} maxGlare={0.5}>
                <img className="inner" src={Brain} alt='logo' />
            </Tilty>
        </div>
    );
}

export default Logo;