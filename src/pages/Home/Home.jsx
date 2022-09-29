
import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/Featuredinfo/Featuredinfo"
import UserList from "../../components/UserList/UserList"
import DashboardLayout from "../../layout/DashboardLayout"
import "./Home.css"

function Home() {
  return (
    <DashboardLayout>
      <div className="home">
          <div className="top-container">
              <Featuredinfo className="featured" title="Revenue" rate ='2,415' value = "-11.5"/>
              <Featuredinfo className="featured" title="Sales" rate ='2,415' value = "11.5"/>
              <Featuredinfo className="featured" title="Cost" rate ='2,415' value = "-11.5"/>
          </div>
          <Chart />
          <UserList />

      </div>
    </DashboardLayout>
  )
}

export default Home