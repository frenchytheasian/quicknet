

function ProfilePage() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="profileCard">
                            <div id="pfp">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="img-fluid rounded" />
                            </div>
                            <div className="username text-center">
                                <p>Username</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;