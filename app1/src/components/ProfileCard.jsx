
export default function ProfileCard({ image, profileName, profileTitle, description }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow-sm" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="Profile" />
                <div className="card-body text-center">
                    <h3 className="card-title">{profileName}</h3>
                    <h5 className="card-title">{profileTitle}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                </div>
            </div>
        </div>
    );
}