import { ArrowUpward,ArrowDownward } from '@mui/icons-material'
import './Featuredinfo.css'

function Featuredinfo(propes) {
  return (
    <div className='featured'>
        <div className="featureItem">
            <span className="featureTitle">{propes.title}</span>
            <div className="featureMoneyContainer">
                <span className="featureMoney">${propes.rate}</span>
                <span className="featureMoneyRate">
                    {propes.value}
                    { propes.value > 0 && <ArrowUpward className='upwardArrow'/>}
                    {propes.value < 0 && <ArrowDownward className='DownwardArrow'/>}
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default Featuredinfo