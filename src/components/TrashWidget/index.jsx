import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './styles.css';

const TrashWidget = () => {

    return (
        <>
            <FontAwesomeIcon icon={faTrash} className='trash'/>
        </>
    );
};

export default TrashWidget;