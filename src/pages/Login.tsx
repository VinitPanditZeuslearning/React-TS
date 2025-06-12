import '../index.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
            <div className="top">
                <img id="leftBtn" src="./static/OneDrive_1_6-6-2025/icons/back.svg" alt=""/>
                <span> Log in with Quantom </span>
            </div>

            <div className="content">
                <div className="inputContent">
                    <div id="radio">
                        <label className="radio">
                            <input type="radio" name="choice"/>
                            District
                        </label>

                        <label className="radio">
                            <input type="radio" name="choice"/>
                            Independent School
                        </label>
                    </div>
                </div>
                <div className="inputContent">
                    <span className="lg"> State* </span>
                    <select className="dropDown" name="cars" id="cars">
                        <option value="Albama">Albama </option>
                    </select>
                    <hr/>
                </div>
                <div className="inputContent">
                    <span className="lg"> District* </span>
                    <select className="dropDown" name="cars" id="cars">
                        <option value="volvo">Albama School District</option>
                    </select>
                    <hr/>
                </div>

                <div className="inputContent textInput">
                    <input type="text" placeholder="Username/Email ID*"/>
                    <hr/>
                    <span className="ForGreen"> FORGOT USERNAME?</span>
                </div>

                <div className="inputContent textInput">
                    <img className="preview" src="./static//preview.svg" alt=""/>
                    <input type="text" placeholder="Password*"/>
                    <hr/>
                    <span className="ForGreen"> FORGOT PASSWORD?</span>
                </div>

                <div className="inputContent">
                    <div className="checkbox">
                        <input type="checkbox" id="remember_me"/>
                        <span className="checkboxLabel">Remember Me </span>
                    </div>
                </div>

                <div className="buttonCont">
                    <Link className='LoginBtn' to="/Dashboard">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
  )
}
