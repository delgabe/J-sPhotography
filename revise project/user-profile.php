<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="CSS/user-profile-style.css" />
        <title>Document</title>
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        </style>
    </head>
    <body>
        <!--Main Container-->
        <div class="main">
            <!--sidebar-->
            <aside class="sidenav">
                <div class="socials">
                <a href="https://www.facebook.com/JsgPh" target="_blank"
                    ><img src="image/fb.png"
                /></a>
                <a href="https://www.instagram.com/" target="_blank"
                    ><img src="image/ig.png"
                /></a>
                <a href="https://x.com/home" target="_blank"
                    ><img src="image/x.png"
                /></a>
                </div>
                <div class="visit-container">
                <h1 class="visit-text">VISIT US &nbsp;&nbsp;</h1>
                </div>
                <div class="user-prof-icon">
                <a href="user-profile.php"><img src="image/user.png" /></a>
                </div>
                <div class="audit-trail-icon">
                    <a href="audit-trail.php"><img src="image/audit.png" /></a>
                </div>
                <div class="settings">
                <a href="settings.php"><img src="image/settingslogo.png" /></a>
                </div>
            </aside>

            <!--right container-->
            <section class="right-body">
                <!--top-->
                <div id="top"></div>
                <!--navigation container-->
                <nav class="navigation">
                    <div class="identity">
                        <img src="image/logo.png" class="nav_logo" />
                        <h6 class="nav_companyname">J's Photography</h6>
                    </div>
                    <div class="burgermenu">
                        <img
                        src="image/hamburgermenu.png"
                        class="burgermen"
                        onclick="
                        toggleDim();
                        toggleNav();
                        "
                        />
                    </div>
                    <div class="home">
                        <a href="home.php" class="link home">Home</a>
                    </div>
                    <div class="dashboard">
                        <a href="dashboard.php" class="link home">Dashboard</a>
                    </div>
                    <div class="gallery">
                        <a href="gallery.php" class="link gallery">Gallery</a>
                    </div>
                    <div class="about">
                        <a href="about.php" class="link about">About</a>
                    </div>
                    <div class="contact">
                        <a href="contact.php" class="link contact">Contact</a>
                    </div>
                </nav>

                <!--nav overlay-->
                <nav class="nav-overlay">
                    <div class="nav-header">
                        <img src="image/logo.png" class="nav_logo2" />
                        <h6 class="nav_companyname2">J's Photography</h6>
                        <button
                        class="close-btn3"
                        onclick="
                        toggleNavClose()
                        toggleLit()"
                        >
                        ×
                        </button>
                    </div>

                    <div class="nav-body">
                        <div class="dashboard2">
                        <a href="dashboard.php" class="link2">Dashboard</a>
                        </div>
                        <div class="gallery2">
                        <a href="gallery.php" class="link2">Gallery</a>
                        </div>
                        <div class="about2">
                        <a href="about.php" class="link2">About</a>
                        </div>
                        <div class="contact2">
                        <a href="contact.php" class="link2">Contact</a>
                        </div>
                    </div>
                </nav>
            </section>

            <!--Main Content-->
            <div class="user-info-section">
                <section id="personal-title">
                    <h1>Personal Info</h1>
                </section>

                <section class="basic-info-container">
                    <div id="basic-info-title">
                        <h2>Basic Info</h2>
                    </div>

                    <div class="profile-pic-form">
                        <div><strong>Profile Picture:</strong> <span id="span1">A profile picture helps you personalize your account.</span></div>

                        <div class="center-profile-pic">
                            <img src="user-profile img/Lucy.jpg" alt="Profile Picture"/>
                        </div>

                        <form action="user-profile.php" method="POST" class="upload-row">
                            <label for="change-prof"><span id="span2">Change your profile picture?</span></label>
                            <input
                                type="file"
                                id="change-prof"
                                name="change-prof"
                                accept="image/*"
                                required
                            />
                            <div class="submit-button-container">
                                <button type="submit" name="submit" id="submit-button" value="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="vertical-line"></div>

                    <div class="fname-form" style="margin-top: 10px;">
                        <div><strong>Name:</strong> <span id="span6">Louis S. Panlaqui</span></div>

                        <form action="user-profile.php" method="POST" class="upload-col">
                            <label for="change-name"><span id="span2">Update your name?</span></label>
                            <input
                                type="text"
                                id="change-name"
                                name="change-name"
                                placeholder="Enter your full name."
                                required
                            />
                            <div class="submit-button-container">
                                <button type="submit" name="submit" id="submit-button" value="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="vertical-line"></div>

                    <div class="email-form" style="margin-top: 10px;">
                        <div><strong>Email:</strong> <span id="span3">louispanlaquis@gmail.com</span></div>

                        <form action="user-profile.php" method="POST" class="upload-col">
                            <label for="change-email"><span id="span2">Change your email?</span></label>
                            <input
                                type="email"
                                id="change-email"
                                name="change-email"
                                placeholder="Enter your email."
                                required
                            />
                            <div class="submit-button-container">
                                <button type="submit" name="submit" id="submit-button" value="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <section class="contact-info-container">
                    <div id="personal-title">
                        <h2>Contact Info</h2>
                    </div>

                    <div class="pnumber-form" style="margin-top: 10px;">
                        <div><strong>Phone Number:</strong> <span id="span4">09496413141</span></div>

                        <form action="user-profile.php" method="POST" class="upload-col">
                            <label for="change-pnumber"><span id="span2">Change your phone number?</span></label>
                            <input
                                type="tel"
                                id="change-pnumber"
                                name="change-pnumber"
                                placeholder="Enter your phone number."
                                required
                            />
                            <div class="submit-button-container">
                                <button type="submit" name="submit" id="submit-button" value="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="vertical-line"></div>

                    <div class="address-form" style="margin-top: 10px;">
                        <div><strong>Address:</strong> <span id="span5">#889 Purok 7 Balas, Mexico, Pampanga</span></div>

                        <form action="user-profile.php" method="POST" class="upload-col">
                            <label for="change-pnumber"><span id="span2">Update your address?</span></label>
                            <input
                                type="text"
                                id="change-address"
                                name="change-address"
                                placeholder="Enter your address."
                                required
                            />
                            <div class="submit-button-container">
                                <button type="submit" name="submit" id="submit-button" value="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </body>
</html>
