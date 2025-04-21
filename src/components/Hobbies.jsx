import "../styles/Hobbies.css";
import Typewriter from 'typewriter-effect';
import Music from './Music'


export default function Hobbies() {

    return (
        <>
            <div className='hobbies-intro-container'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("I'm a big music fan and I play both piano and guitar ")
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 50,
                    }}
                />

            </div>
            <Music />



        </>
    );
}
