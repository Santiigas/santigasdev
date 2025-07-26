import './portfolio.css'
import Logosantigas from '../../images/logo.png'

function portfolio() {

    return (
        <div>
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

            </section>
            <section className='professional-experiences'>

            </section>
            <section className='education-and-skills'>

            </section>
            <section className='projects-and-collaborations'>

            </section>
            <section className='contact'>

            </section>
        </div>
    )

}

export default portfolio