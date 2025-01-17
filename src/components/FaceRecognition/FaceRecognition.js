import './FaceRecognition.css';

function FaceRecognition({ imageURL, box }) {
    return (
        <div className='center'>
            <div className='absolute mt2'>
                <img id='inputImage' src={imageURL} alt='' width='500px' height='auto' />
                <div className='bounding-box' style={{ top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol }}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;