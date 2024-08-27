import { PROFILE_IMAGES } from "../data";
import ProfileCard from "./ProfileCard";

export default function CoreComponent() {
    return (
        <div id="coreId" className="container" style={{ marginTop: "25px" }}>
            <p style={{ textAlign: "center" }}>
                A well-functioning team of adequate people will complete a project almost regardless of the process or technology they are asked to use (although the process and technology may help or hinder them along the way.
            </p>
            <div className="row">
                <div className="col-md-3 p-1"> {/* Reduced padding */}
                    <ProfileCard {...PROFILE_IMAGES[0]} />
                </div>
                <div className="col-md-3 p-1"> {/* Reduced padding */}
                    <ProfileCard {...PROFILE_IMAGES[2]} />
                </div>
                <div className="col-md-3 p-1"> {/* Reduced padding */}
                    <ProfileCard {...PROFILE_IMAGES[1]} />
                </div>
                <div className="col-md-3 p-1"> {/* Reduced padding */}
                    <ProfileCard {...PROFILE_IMAGES[3]} />
                </div>
            </div>
        </div>
    );
}