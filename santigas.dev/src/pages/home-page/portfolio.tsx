import './portfolio.css'
import './responsive.css';
import Logosantigas from '../../images/logo.png'

function portfolio() {

    return (
        <div className='body'>
            <section className='general-presentation'>
                <div className='presentation'>
                    <img className='logoSantigas' src={Logosantigas} alt="" />
                    <h2 className='main-title'>Developer full-stack </h2>
                    <h2 className='secondary-title'>JavaScrpit -  Node - React  -  MySql  -  Python</h2>
                </div>
                <div className="navbar">
                    <li className='navigation'>Sobre</li>
                    <li className='navigation'>Skills</li>
                    <li className='navigation'>Experience</li>
                    <li className='navigation'>Education</li>
                    <li className='navigation'>Contact</li>
                </div>
            </section>

            <section className='about-me'>
                <div className='who-am-i'>
                    <div className='card-about-me'>
                        <div className='card-about-me-1'>
                            <h2 className='tilte-about-me'>About me</h2>

                            
                        </div>
                        <div className='card-about-me-2'>

                        </div>
                    </div>
                </div>
            </section>

            <section className='professional-experiences'>
                <div className='experiences_general'> 
                    <div className='experiences'></div>
                    <div className='experiences'></div>
                    <div className='experiences'></div>
                </div>
            </section>

            <section className='courses-and-education'>
                <div className='educations-general'>
                    <div className='educations'>
                        <div className='institution'>

                        </div>
                        <div className='description-institution'>

                        </div>
                    </div>
                    <div className='educations'>
                        <div className='institution'>

                        </div>
                        <div className='description-institution'>

                        </div>                        
                    </div>
                    <div className='educations'>
                        <div className='institution'>

                        </div>
                        <div className='description-institution'>

                        </div>
                    </div>
                </div>
            </section>

            <section className='skills'>
                
            </section>

            <section className='projects-and-collaborations'>

            </section>
            <section className='contact'>

            </section>
        </div>
    )

}

export default portfolio