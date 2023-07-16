import './projects.css'; 
import project1  from '../../assets/imagePreview.png'
const Projects = () => { 
    return ( 
        <div className="projects" id='projects'>
            <h1 className='projectsTitle' >Projects</h1>
            <div class="projectContainer"id = 'project1'>
              <img
                src={project1}
                alt="Project 1"
                class="project-img"
                style={{ height:200, width: 300 }}
              />
              <h2 >Nasa/SpaceX API</h2>
                <div className = 'buttonContainer'>
                  <a href='https://github.com/lapayan/nasa-project-main'>
                    <button className= 'btn' >Github Repo</button>
                    </a>
              </div> 
              <div className = 'buttonContainer'>
                  <a href='http://nasaspacexlauncher.com/'>
                    <button className= 'btn' >Live Demo</button>
                    </a>  
              </div> 
            </div>
            <div class="projectContainer"id = 'project2'>
              <img
                src={project1}
                alt="Project 1"
                class="project-img"
                style={{ height:200, width: 300 }}
              />
              <h2 >Nasa/SpaceX API</h2>
                <div className = 'buttonContainer'>
                  <a href='https://github.com/lapayan/nasa-project-main'>
                    <button className= 'btn' >Github Repo</button>
                    </a>
              </div> 
              <div className = 'buttonContainer'>
                  <a href='http://nasaspacexlauncher.com/'>
                    <button className= 'btn' >Live Demo</button>
                    </a>  
              </div> 
            </div>
        </div>
    )
}

export default Projects; 