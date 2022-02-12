import Lottie from 'react-lottie';
import animationData from '../../animations/ecommerce.json';
import './styles.css';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='loader'>
            <Lottie options={defaultOptions} height={200} width={200}/>
        </div>
    );
};

export default Loader;