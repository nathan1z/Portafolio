import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id="work" className='mywork'>
     <div className="mywork-title">
        <h1>My Latest work</h1>
        </div> 
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt=''/>
            })}
        </div> 
        <a href="https://github.com/nathan1z?tab=repositories" target="_blank" rel="noopener noreferrer" className='git'>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
          </div>
          </a> 
    </div>
  )
}

export default MyWork