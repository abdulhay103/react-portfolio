import React from 'react'
import "./about.css"
import UxUi from "../../Img/pixel-Ui.jpg"
import Award from "../../Img/award.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={UxUi} alt="UxUi" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere nesciunt exercitationem quas. Quam, nam?</p>
                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, esse soluta? Ad id dolor autem rerum? Ea itaque voluptatem, repellat non voluptates quaerat eaque odio est eum reiciendis asperiores architecto neque deserunt veritatis, sint nemo commodi esse? Nisi quia similique aperiam, repellendus nobis nesciunt maiores asperiores esse molestiae ipsum officia?</p>
                <div className="a-awards">
                    <img src={Award} alt="Award" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Best UX/UI Designer-2020</h4>
                        <p className="a-award-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum assumenda aliquid quod fuga eum cum, a laborum cupiditate, tempore pariatur quae vitae consectetur, quia placeat.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About
