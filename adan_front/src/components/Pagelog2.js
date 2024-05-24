import React from 'react'
import "./pagelog2.css"
import { Link } from "react-router-dom"
import axios from 'axios';

export default function Pagelog2() {
    async function fetchData(s) {
        if (s === "log_student") {

            try {
                const email = document.getElementById("une").value;
                const password = document.getElementById("pwd").value;
               
                const response = await axios.fetch('https://adaan-pradaan-back-end.vercel.app/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                console.log(data);
                if (response.status === 200) {
                    const { email, college , section , year , booked } = data;
                    // console.log(email1);
                    // console.log(college1);

                    const student_email =  email;
                    const student_college =  college ; 
                    const student_section =  section ; 
                    const student_year =  year ; 
                    const student_booked =  booked ; 
                    const expirationMinutes = 30;
                    setCookie("student_email", student_email, expirationMinutes);
                    setCookie("student_college", student_college, expirationMinutes);
                    setCookie("student_section", student_section, expirationMinutes);
                    setCookie("student_year", student_year, expirationMinutes);
                    setCookie("student_booked", student_booked, expirationMinutes);
                    
                    window.location.href = '/Studentpage1';
                }
                else {
                    alert('invaild details');
                }


            } catch (error) {
                console.error('Error occurred:', error);
            }
        } 
        else {
            try{
            const email = document.getElementById("une").value;
                const password = document.getElementById("pwd").value;
                const idno = document.getElementById("idno").value;

                const data = { email, password , idno };

                const response = await axios.fetch('https://adaan-pradaan-back-end.vercel.app/api/login_management', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                console.log(response);
                if (response.status === 200) {
                    const responseData = await response.json();
                    const { email, college , booked , studentbooked } = responseData;
                    console.log(booked);
                    
                    const college_email =  email;
                    const college_college =  college ; 
                    const college_booked =  booked ; 
                    const college_studentbooked =  studentbooked ; 
                    const expirationMinutes = 90;
                    setCookie("college_email", college_email, expirationMinutes);
                    setCookie("college_college", college_college, expirationMinutes);
                    setCookie("college_booked", college_booked, expirationMinutes);
                    setCookie("college_studentbooked", college_studentbooked, expirationMinutes);
                    window.location.href = '/Login2';
                }
                else {
                    alert('invaild details');
                }


            } catch (error) {
                console.error('Error occurred:', error);
            }


        }
    }

    function openregister() {
        const in12 = document.querySelector(".in12");

        const regin12 = document.querySelector(".reg-in12");
        in12.style.display = "none";
        regin12.style.display = "block";
        const in22 = document.querySelector(".in22");

        const regin22 = document.querySelector(".reg-in22");
        in22.style.display = "none";
        regin22.style.display = "block";

        const colname = document.querySelector(".col-name");
        const stusection = document.querySelector(".stu-section");
        const stusectio = document.querySelector(".stu-sectio");
        colname.style.transform = "translateX(1542px)";
        stusection.style.transform = "translateX(1542px)";
        stusectio.style.transform = "translateX(1086px)";

        const registeropt = document.querySelector(".registeropt");
        const loginbo = document.querySelector(".loginbo");
        const regloginbo = document.querySelector(".reg-loginbo");
        const regregisteropt = document.querySelector(".reg-registeropt");
        loginbo.style.display = "none";
        regloginbo.style.display = "block";
        registeropt.style.display = "none";
        regregisteropt.style.display = "block";
        regloginbo.style.transform = "translateX(400px)";
        regregisteropt.style.transform = "translateX(1430px)";


    }



    function openman() {
        const firstopenman = document.querySelector(".openmanagement");
        const secondopenman = document.querySelector(".yearbox111");
        const secondopenman1 = document.querySelector(".yearbox112");
        const but1 = document.querySelector(".linktoman");
        const but2 = document.querySelector(".linktomanreg");
        but1.style.display = "block";
        but2.style.display = "block";
        const unqid = document.querySelector(".uniqid");
        firstopenman.style.transform = "translateX(2542px)";
        secondopenman.style.transform = "translateX(1522px)";
        secondopenman1.style.transform = "translateX(1858px)";
        unqid.style.transform = "translateX(1052px)";
    }

    function onbuttonclick() {
        var idfirst = document.getElementById("registercollege").value;
        var idsec = document.getElementById("une1").value;
        var idthird = document.getElementById("pwd1").value;
        var idfourth = document.getElementById("registersection").value;
        var idfifth = document.getElementById("registeryear").value;

        var cls = {
            email: idsec,
            college: idfirst,
            password: idthird,
            section: idfourth,
            year: idfifth,
            booked:"year,subject,section,Date-Time",
            studentbooked:"college,username,Date-Time_booked"
        };

        console.log(cls);
        // fetch('http://localhost:3010/sellers/postdata'
        axios.fetch('https://adaan-pradaan-back-end.vercel.app/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cls)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("success:", data);
                alert("succesfully registered");
            })
            .catch(error => {
                alert(error);
            });
    }
    
        





    function sdomr() {
        var idsec = document.getElementById("une").value;
        var idthird = document.getElementById("pwd").value;
        var idfourth = document.getElementById("managementregistercollege").value;
        var idfifth = document.getElementById("idno").value;
        var cls = {
            email: idsec,
            college: idfourth,
            idno: idfifth,
            password: idthird,
            booked:"year,subject,section,Date-Time"
        };
        console.log(cls);
        // fetch('http://localhost:3010/sellers/postdata'
        axios.fetch('https://adaan-pradaan-back-end.vercel.app/api/register_management', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cls)
        })
            .then(res => res.json())
            .then(data => {
                console.log("success:", data);
                alert(data.error);
            })
            .catch(error => {
                alert("error:"+ error);
            });
    }
    function changelogtoreg(){
        const qw = document.getElementById("qaz");
        qw.innerText = "register...";
        const qw1 = document.getElementById("qaz1");
        qw1.innerText = "";
        const idfourth = document.getElementById("managementregistercollege");
        idfourth.style.transform = "translateX(1088px)";
        const ii = document.getElementById("coverforchangedregistertext");
        ii.style.display = "block";
    }


    
        
    
    

   
    // function setCookie(name, value, expiresInMinutes) {
    //     const expirationDate = new Date();
    //     expirationDate.setTime(expirationDate.getTime() + (expiresInMinutes * 60 * 1000)); // expiresInMinutes converted to milliseconds
    //     document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
    // }
    function setCookie(name, value, expiresInMinutes) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (expiresInMinutes * 60 * 1000)); 
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
        console.log(`Cookie "${name}" set with value "${value}"`);
    }



    function closetab1() {
        // window.close();
    }
    return (
        <>
            <div className="containet-fluid py-5 my-5">
                <div className="row" >
                    <div className="col-3"></div>
                    <div className="col-6-paina">
                        <div className="rectangle-le">
                            <div className="container-fluid-det">
                                <br /><br /><br />

                                <img className="img-usna" src="imagesre\user phtoo.jpg" alt="user photo" width="100" height="100" />

                                <br />
                                <div className="row ">
                                    <div className="col-1"></div>
                                    <div className="col-5" >
                                        <br /><br />
                                        <br></br>
                                        <div className="">
                                            {/* style={{color: "#DEB887"}} */}
                                            <input type="text" name=" Username" style={{ color: "#DEB887" }} id='registercollege' className="col-name" placeholder='college name' />
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <div className="usnabox">
                                            {/* style={{color: "#DEB887"}} */}
                                            <input id='une' type="email" name=" Username" style={{ color: "#DEB887" }} className="in12" placeholder='Email' />
                                            <input id='une1' type="email" name=" Username" style={{ color: "#DEB887" }} className="reg-in12" placeholder='Email' />
                                        </div>

                                        <br /><br />
                                        <div className="usnabox">

                                            <input id='pwd' type="password" name=" Password" style={{ color: "#DEB887" }} className="in22" placeholder='Password' />
                                            <input id='pwd1' type="password" name=" Password" style={{ color: "#DEB887" }} className="reg-in22" placeholder='Password' />
                                        </div>
                                        <br /><br />
                                        <div className="">
                                            {/* style={{color: "#DEB887"}} */}
                                            <input type="text" id='registersection' name="Username" style={{ color: "#DEB887" }} className="stu-section" placeholder='section' />
                                            <input type="text" id='managementregistercollege' name="Username" style={{ color: "#DEB887" }} className="managementregistercollege" placeholder='college....!' />

                                        </div>
                                        <div className="">
                                            {/* style={{color: "#DEB887"}} */}
                                            <input type="text" id='registeryear' name="" style={{ color: "#DEB887" }} className="stu-sectio" placeholder='year' />
                                        </div>

                                        <div className="row">
                                            <div className="col-4"></div>
                                            <div className="col-4">
                                                <center>
                                                    <div className="loginbo" >
                                                        <div className="container-fluid">
                                                            <div className="display-3">
                                                                <div style={{ color: "#DEB887", textDecoration: "none" }} className="logpo" target='_blank' onClick={() => fetchData("log_student")} ><b> LOG   IN </b></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="reg-loginbo" >
                                                        <div className="container-fluid">
                                                            <div className="display-3">
                                                                <Link style={{ color: "#DEB887", textDecoration: "none" }} className="logpo" target='_blank' onClick={closetab1()}  ><b> LOG   IN </b></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </center>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rectangle-ri">
                            <div className="container-fluid">
                            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                            <div className="row">
                                <div className='registerLine' ></div>
                            </div>

                        </div>
                        <div className='container-fluid-opts'>
                            <div className='row'>
                                <div className="col-4"><a href=""><img src="imagesre\google.png" alt="gogggle logo" width="130px" height="100px" /></a></div>
                                <div className="col-4"><center><h1><b>or</b></h1></center></div>
                                <div className="col-4"><a href=""><img src="imagesre\OIP.jpg" alt="gogggle logo" width="80px" height="80px" /></a></div>
                            </div>
                        </div>
                        <br></br>
                        <div className='registeropt' style={{ color: "#DEB887", textDecoration: "none" }} onClick={openregister} ><h1>R E G I S T E R</h1>

                        </div>
                        <Link to={"/Login1"} className='reg-registeropt' style={{ color: "#DEB887", textDecoration: "none" }} target='_blank' onClick={() => onbuttonclick()} ><h1>R E G I S T E R</h1></Link>
                    </div>

                </div>
            </div>
            <div>
                <div className="yearbox111">
                    <h1 style={{ color: "#ffffff" }} className="yeartext111"> Mangement </h1>
                </div>
                <div className="yearbox112">
                    <h1 style={{ color: "#ffffff" }} className="yeartext112">
                        <Link to={"/Login1"} style={{ color: "#ffffff", textDecoration: "none" }} className="logpo" target='_blank' > log-in </Link></h1>
                </div>
                <div className='openmanagement' onClick={openman}>


                </div>
                <input id='idno' type="password" name=" Password" style={{ color: "#DEB887" }} className="uniqid" placeholder='ID-NO' />
                <div style={{ color: "#ffffff", textDecoration: "none" }} className="logpo" target='_blank' onClick={() => fetchData("n")} >
                    <div className='linktoman' onClick={() => fetchData("n")}> 
                        <h3 className='ijkl' id='qaz'>
                        login..
                        </h3>
                    </div>
                </div>
                <div style={{ color: "#ffffff", textDecoration: "none" }} className="logpo" target='_blank'  >

                    <div className='linktomanreg' >
                        <h3 className='ijkl' id='qaz1' onClick={()=>changelogtoreg()}>register..</h3>

                    </div>
                    <div id='coverforchangedregistertext' className='coverforchangedregistertext' onClick={()=>sdomr()}>

                    </div>
                </div>
            </div>
        </>
    )

}
