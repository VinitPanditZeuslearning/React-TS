import styled from 'styled-components'
import VerticalLine from './VerticalLine'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #eeeeee;
.footer {
      height: 40px;
      width: 100%;
      /* background-color: red; */
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
  }
 .copyRight {
      background-color: rgb(208, 208, 208);
      display: flex;
      flex-direction: row;
      width: 100%;
      bottom: 0;
      align-items: center;
      justify-content: center;
      gap: 30px;
      height: 50px;
  }
  .aboutNContectUs {
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: space-around;
        width: 200px;
  }
  .aboutNContectUs a {
    font-size: 14px;
    color: #1F7A54;
    font-weight: bold;
  }

`
export default function Footer() {
    return (
        <Container>
            <div className='aboutNContectUs'>
                <a>About Us</a>
                <VerticalLine size={18}/>
                <a>Contact Us</a>
            </div>
            <div className="footer">
                <div className="copyRight">
                    <img src="./static/logo_used_in_footer.svg" alt="" />
                    <div className="vl"> </div>
                    <span className="lg"> Copyright ©
                        2024-2025 Zeus System
                        Pvt.Ltd. All rights reserved. </span>
                </div>
            </div>
        </Container>
    )
}
