import checkMark from '../../assets/checkmark.png'
import './skills.css';
            
const Skills = () =>{ 
    return ( 
        <div className="skills" id="skills"> 
            <h1 className='skillsTitle'>Skills</h1>
            <div className="skillsContainer" id='frontEndSkills'>
                <h2 className='technicalTitle'>Frontend Development</h2>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>React</h3>
                    <p>Experienced</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>CSS</h3>
                    <p>Intermediate</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>UI-design</h3>
                    <p>Intermediate</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>HTML</h3>
                    <p>Experienced</p>
                    </div> 
                </article>
            </div>
            <div className="skillsContainer" id ='backEndSkills'>
                <h2 className='technicalTitle'>Backend Development</h2>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>Node</h3>
                    <p>Experienced</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>Redux</h3>
                    <p>Experienced</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>SQL</h3>
                    <p>Intermediate</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>MongoDB</h3>
                    <p>Intermediate</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>REST</h3>
                    <p>Experienced</p>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>GrapQL</h3>
                    <p>Intermediate</p>
                    </div> 
                </article>
            </div>
            <div className="skillsContainer" id='softSkills'>
                <h2 className = 'technicalTitle'>Soft Skills</h2>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>Learning</h3>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>Communication</h3>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>Decisiveness</h3>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>Leadership</h3>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>Problem Solving</h3>
                    </div> 
                </article>
                <article className='skill'>
                <img 
                    src = {checkMark} 
                    alt='logo' 
                    style={{ height:32, width: 32 }}/>
                    <div >
                    <h3>Adaptability</h3>
                    </div> 
                </article>
            </div>
        </div>
    )
}

export default Skills;