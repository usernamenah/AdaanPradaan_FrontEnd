import { useState } from "react"
import "./Year1.css";
import { Link } from "react-router-dom";

export default function Year1 () {
    
    return (
        <>
            <div className="namebox" type="button"></div>
            <Link to={"/"}><img src="imagesre\logo3.jpg" alt="logo" height="110" width="110" className="logo" type="button" /></Link>
            <div className="fixed-top">
                <div className="piribo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="col-6">
                                    <Link to={"studprof"}><img className="img-usna" src="imagesre\user phtoo.jpg" alt="user photo" width="100" height="100" /></Link>
                                </div>

                            </div>
                            <div className="op1">
                                <center><h1 style={{ color: "black" }}>BOOKED</h1></center>
                            </div>
                            <div className="op2">
                                <center><h1 style={{ color: "black" }}></h1>no</center>
                            </div>


                        </div>
                        <div className="op1"></div>
                        <div className="op2"></div>
                        <div className="op3"></div>
                        <div className="op4"></div>
                    </div>


                </div>
            </div>

            <div className="paiki1">


                <div className="searchbox">
                    <input type="text" placeholder="Search.....!" name="search2" style={{ color: "#8F6600FF" }} className="seatet" />
                </div>
                <div className="searchbutton" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" className="searchicon" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
            </div>


            <div className="yearbox1">
                <h1 style={{ color: "#ffffff" }} className="yeartext"> B R A N C H </h1>
            </div>
            <div style={{ color: "black" }} className="branch01" type="button"><center><h3><br />CSE</h3></center></div>
            <div style={{ color: "black" }} className="branch02" type="button"><center><h3><br />CSD</h3></center></div>
            <div style={{ color: "black" }} className="branch03" type="button"><center><h3><br />IT</h3></center></div>
            <div style={{ color: "black" }} className="branch04" type="button"><center><h3><br />CSM</h3></center></div>

            <div className="subbox1">
            <h1 style={{ color: "#ffffff" }} className="yeartext">  S U B J E C T </h1>
            </div>

            <div style={{ color: "black" }} className="branch11" type="button" id='button1' onclick="selectButton('button1')"><center><h3><br />DSC++</h3></center></div>
            <div style={{ color: "black" }} className="branch12" type="button" id='button2' onclick="selectButton('button2')"><center><h3><br />ADE</h3></center></div>
            <div style={{ color: "black" }} className="branch13" type="button" id='button3' onclick="selectButton('button3')"><center><h3><br />IML</h3></center></div>
            <div style={{ color: "black" }} className="branch14" type="button" id='button4' onclick="selectButton('button4')"><center><h3><br />GS</h3></center></div>

            <div>

           
            </div>
            
            {/* { <div className="container">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Tab 1
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Tab 2
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Tab 3
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <h2>Content 1</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                            vel voluptatum?
                        </p>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <h2>Content 2</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                    </div>

                    <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                        <h2>Content 3</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                    </div>
                </div>
            </div> } */}

        </>
    )
}
