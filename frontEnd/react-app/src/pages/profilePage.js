import logo from "../assets/Textless LogoCyan (1).png";

function ProfilePage() {
    return (
        <div className="m-3 mx-md-5">
            <div className="container border rounded shadow-lg ">
                <div className="mt-4 row justify-content-center">
                    <div className="col-6 ">
                        <div className="profileCard">
                            <div id="pfp">
                                <img src={logo} alt="" className="img-fluid rounded" />
                            </div>
                            <div className="username text-center mt-1">
                                <h1>SPARC</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3"></div>
                <div className="row justify-content-center mb-5">
                    <div className=" col-12 m-auto text-center">
                        <img className="" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://siue-sparc.github.io/#/home" alt="QR Code" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;