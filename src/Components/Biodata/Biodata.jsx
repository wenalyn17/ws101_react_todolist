import './Biodata.css';

function Biodata(props) {
    return (
        <div className='Biodata'>
            <ul>
            <h1>Biodata</h1>
            </ul>
            <p>Name: Wenalyn Medrano</p>
            <p>Mobile: 0916776755*</p>
            <p>Email: wenalynmedran@gmail.com</p>
            <p>Gender: Female</p>
            <p>Birthday: December 1, 2001</p>
            <p>Father's Name: Edwin Medrano</p>
            <p>Mother's Name: Norma Medrano</p>
            <p>Education: </p>
            <p>High School: Quezon National High School</p>
            <p>College: Dalubhasaan ng Lungsod ng Lucena</p>
            <p>{props.name} {props.lastname}</p>

        </div>
    )
}

export default Biodata