import { BottomWarning } from "../components/BottomWarning"

function Home(){
  return(
    <>
    
    <div className="flex justify-between">
       <div>Home page</div>
       <BottomWarning buttonText={"Sign up"} to={"/signup"} />
       <BottomWarning buttonText={"Sign in"} to={"/signin"} />
       <BottomWarning buttonText={"Dashboard"} to={"/dashboard"} />
    </div>
    </>
  )
}

export default Home