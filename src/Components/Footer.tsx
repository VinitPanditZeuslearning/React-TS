import styled from 'styled-components'

const Container = styled.div`
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

`
export default function Footer() {
    return (
        <Container>
            <div className="footer">
                <div className="copyRight">
                    <img src="./static/logo_used_in_footer" alt="" />
                    <div className="vl"> </div>
                    <span className="lg"> Copyright ©
                        2024-2025 Zeus System
                        Pvt.Ltd. All rights reserved. </span>
                </div>
            </div>
        </Container>
    )
}
