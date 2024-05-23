import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Studentpage1.css"

export default function Studentpage1() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const student_email = getCookie("student_email");
        const student_college = getCookie("student_college");
        const student_section = getCookie("student_section");
        const student_year = getCookie("student_year");
        const student_booked = getCookie("student_booked");
        console.log(student_email);
        console.log(student_college);
        console.log(student_section);
        console.log(student_year);
        console.log(student_booked);
        // alert("Username: " + storedUsername + "\nDate of Birth: " + storedDOB);
        try {
            const response = await fetch('/api/showlabstostudent', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },

            })
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName.trim() === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }
    let mdbstr = [];


    function selectedlab(a, b, c, d, e) {
        popupconfirmation(a, b, c, d, e);
        const popcollege = document.getElementById("popcollege");
        const popsubject = document.getElementById("popsubject");
        const popdateandtime = document.getElementById("popdateandtime");
        const popyear = document.getElementById("popyear");
        const popbranch = document.getElementById("popbranch");

        popcollege.innerText = a;
        popsubject.innerText = b + " / " + a + "(y)";
        popdateandtime.innerText = c;
        popyear.innerText = d;
        popbranch.innerText = e;
        mdbstr[0] = (a);
        mdbstr[1]=(b);
        mdbstr[2]=(c);
        mdbstr[3]=(d);
        mdbstr[4]=(e);

        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);

    }
    function popupconfirmation() {
        console.log("anna namasthe");
        const popup = document.getElementById("popup");
        popup.style.transform = "scale(1.2)";
    }
    function handleMouseOut() {

        console.log('Mouse out event occurred');
        const popup = document.getElementById("popup");
        popup.style.transform = "scale(0)";
    }
    async function confirmbook() {

        fetchthebookedlabsofthestudent();

    }
    async function fetchthebookedlabsofthestudent() {

        try {
            const email = getCookie("student_email");
            const college = getCookie("student_college");
            const section = getCookie("student_section");
            const year = getCookie("student_year");
            const booked1 = mdbstr.toString();
            alert(booked1);


            const cls = { email, college, booked1, section, year };
            const bc = mdbstr[4];
            const jj = email+","+college+","+section+","+year+","+booked1;
            alert(bc);
            alert(jj);
            const cls1 = { bc , jj };


            const response = await fetch('https://adaan-pradaan-back-end.vercel.app/api/updatethestudentbooked', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cls)
            });
            const response1 = await fetch('https://adaan-pradaan-back-end.vercel.app/api/updatethemanagementstudentbookings', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cls1)
            });

            const data = await response.json();
            // console.log(data);
            

            if (response.ok && response1.ok) {
                alert("the update is done in database" );
            } else {
                alert("something fishy broo.....!!");

            }
        } catch (error) {
            console.error('Error occurred:', error);
        }


    }
    var checkerdisplaythebooked = true;
    function openbookedlabspopup() {
        const ll = document.getElementById("PopupForbookedLabs");
        ll.style.transform = "scale(1)";
        if (checkerdisplaythebooked) {

            displaythebooked();
        }

    }
    function displaythebooked() {
        checkerdisplaythebooked = false;
        let bookedarr = getCookie("student_booked").split("~");
        if (bookedarr.length === 1) {
            const bookedhistoryheader = document.getElementById("bookedhistoryheader");
            bookedhistoryheader.innerText = "No booking History..! bro hehe";
        }
        else {
            let dataDiv = document.getElementById("studentbookeddata");



            function appendDataWithDelay(index) {
                if (index < bookedarr.length) {
                    let contentarray = bookedarr[index].split(",");


                    let griddiv = document.createElement("div");
                    let br = document.createElement("br");
                    griddiv.className = "container-fluid";
                    let griddivrow = document.createElement("div");
                    griddivrow.className = "row";
                    let griddivcol30 = document.createElement("div");
                    griddivcol30.className = "col-3";
                    let colyear = document.createElement("div");
                    colyear.className = "colyear";
                    let griddivcol31 = document.createElement("div");
                    griddivcol31.className = "col-3";
                    let colsection = document.createElement("div");
                    colsection.className = "colsection";
                    let griddivcol32 = document.createElement("div");
                    griddivcol32.className = "col-3";
                    let colsubject = document.createElement("div");
                    colsubject.className = "colsubject";
                    let griddivcol33 = document.createElement("div");
                    griddivcol33.className = "col-3";
                    let coltimeanddate = document.createElement("div");
                    coltimeanddate.className = "coltimeanddate";
                    let paragraph = document.createElement("p");
                    paragraph.textContent = bookedarr[index];
                    colyear.textContent =contentarray[0] ;
                    colsection.textContent = contentarray[1];
                    colsubject.textContent = contentarray[2];
                    coltimeanddate.textContent = contentarray[3];
                    griddivcol30.appendChild(colyear);
                    griddivcol31.appendChild(colsection);
                    griddivcol32.appendChild(colsubject);
                    griddivcol33.appendChild(coltimeanddate);

                    griddivrow.appendChild(griddivcol30);
                    griddivrow.appendChild(griddivcol31);
                    griddivrow.appendChild(griddivcol32);
                    griddivrow.appendChild(griddivcol33);
                    griddiv.appendChild(griddivrow);
                    dataDiv.appendChild(br);
                    dataDiv.appendChild(griddiv);


                    index++;
                    setTimeout(function () {
                        appendDataWithDelay(index);
                    }, 1000);
                }
            }


            appendDataWithDelay(1);
        }
    }
    function handleMouseOut1() {
        const ll = document.getElementById("PopupForbookedLabs");
        ll.style.transform = "scale(0)";
    }



    return (
        <>
            <div className="namebox" type="button"></div>
            <div className='popup' id='popup' onMouseLeave={() => handleMouseOut()}>
                <div className=''>

                    <p className='popcollege'>move out of this box to close..!</p>
                    <b>
                        <div className='popcollege' id='popcollege'>.</div>
                        <div className='popsubject' id='popsubject'>.</div>
                        <div className='popyear' id='popyear'>.</div>
                        <div className='popbranch' id='popbranch'>.</div>
                        <div className='popdateandtime' id='popdateandtime'>.</div></b>
                    <div className='confirmbook' onClick={() => confirmbook()}>
                        <br></br>
                        <h2 className='cbbl'>CONFIRM BOOKING</h2>

                    </div>

                </div>

            </div>
            <Link to={"/"}><img src="imagesre\logo3.jpg" alt="logo" height="110" width="110" className="logo" type="button" /></Link>

            <div className="piribo">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-6">
                            <Link to={"studprof"}><img className="img-usna" src="imagesre\user phtoo.jpg" alt="user photo" width="100" height="100" /></Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="option_show_all_created_labs" onClick={() => openbookedlabspopup()}>
                            <h2>
                                BOOKED LABS...!
                            </h2>

                        </div>

                    </div>

                </div>


            </div>

            <div className="PopupForbookedLabs" id="PopupForbookedLabs" onMouseLeave={() => handleMouseOut1()}>
                <div className="bookedhistoryheader" id="bookedhistoryheader">
                    the booked History
                </div>
                <div className="studentbookeddata" id="studentbookeddata">

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


            <div className="yearbox1avail">
                <h1 style={{ color: "#ffffff" }} className="yeartextavail"> A v a i l a b l e </h1>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>




            {/* Displaying fetched data in the databox class */}
            <div className='databox'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {data.length === 0 ? (
                    <h3>N O   &nbsp;&nbsp; L A B S  &nbsp;&nbsp; A V A L A B L E </h3>
                ) : (
                    <div>
                        {data.map((item, index) => (
                            <div key={index} className="sp">
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-6'>

                                            <div className='collegetext'> {item.college}</div>
                                        </div>
                                        <div className='col-1'></div>
                                        <div className='col-5'>
                                            <div className='datetext'> {item.date}</div>

                                        </div>

                                    </div>

                                </div>

                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-10'>
                                            <div className='subjecttext'>  < b className='iiii'> &nbsp;&nbsp;{item.subject}&nbsp;&nbsp;</b></div>
                                        </div>
                                        <div className='col-2 '>
                                            <div className='ybybyb'>
                                            <div className='side'>&nbsp;&nbsp;&nbsp;year:&nbsp;<b>{item.year}</b></div>
                                            <div className='side'>branch:&nbsp; <b>{item.branch}</b></div></div>
                                        </div>

                                    </div>
                                </div>





                                <div className='booknow' onClick={() => selectedlab(item.year, item.branch, item.subject, item.date, item.college)} > BOOK </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>

                            </div>


                        ))}

                    </div>
                )}
            </div>

        </>
    );
}
