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
                            <p>Sou brasileiro, entusiasta de tecnologia, audiovisual e musculação. Atuo no desenvolvimento de sistemas com foco em 
                            APIs e arquitetura web, e tenho grande interesse por UI/UX design — criando interfaces modernas, 
                            intuitivas e centradas na experiência do usuário.<br></br><br></br>
                            Sou o criador da ferramenta LayoutColors.com, voltada para designers e desenvolvedores que buscam testar combinações 
                            de cores em layouts responsivos. Atualmente, venho explorando o universo da criação de jogos, unindo lógica de programação à criatividade visual.</p>                            
                        </div>
                        <div className='card-about-me-2'>
                            <div className='card-information'>
                                <div className='photo-santi'></div>
                                <div className='info_santi'>
                                    <h2>Santiago Oliveira</h2>
                                    <p>Software developer</p>
                                    <p>Idealle Sistemas</p>
                                    <p>Estácio</p>
                                </div>
                            </div>
                            <div className='contact_santi'>
                                Aracaju, Sergipe, Brasil
                            </div>
                            <div className='contact_santi'>
                                santiagosof@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='professional-experiences'>
                <div className='experiences_general'> 
                    <div className='experiences'>
                        <div className='work_enterprise'>
                            <div className='work_logo'>

                            </div>
                            <div className='work_information'>
                                <h2>IDEALLE SISTEMAS</h2>
                                <h3>Tempo de serviço: de 02/02/2003</h3>
                            </div>
                        </div>
                        <div className='description_work'>

                        </div>
                    </div>
                    <div className='experiences'>
                        <div className='work_enterprise'>
                            <div className='work_logo'>

                            </div>
                            <div className='work_information'>

                            </div>
                        </div>
                        <div className='description_work'>

                        </div>
                    </div>
                    <div className='experiences'>
                        <div className='work_enterprise'>
                            <div className='work_logo'>

                            </div>
                            <div className='work_information'>

                            </div>
                        </div>
                        <div className='description_work'>

                        </div>
                    </div>
                </div>
            </section>

            <section className='courses-and-education'>
                <div className='educations-general'>
                    <div className='educations' id='educations1'>
                        <div className='institution'>
                            <div className='image-institution'>
                            </div>
                        </div>
                        <div className='description-institution'>

                        </div>
                    </div>
                    <div className='educations' id='educations2'> 
                        <div className='institution'>
                            <div className='image-institution'>
                            </div>
                        </div>
                        <div className='description-institution'>

                        </div>                        
                    </div>
                    <div className='educations' id='educations3'>
                        <div className='institution'>
                            <div className='image-institution'>
                            </div>
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