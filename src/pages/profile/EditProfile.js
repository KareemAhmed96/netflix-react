import './EditProfile.css'
import { useState, useEffect } from 'react'
import { useInput } from "../../hooks/useInput";
import profileApi from '../../api/profile'


function EditProfile (){

    const defaultProfile = {
        name: "Default",
        image_url: 'https://ia801509.us.archive.org/20/items/profiles_202104/default.png'
    }

    const [nameProps, resetName] = useInput("");
    const [nameError, setNameError] = useState(null);
    const [hidden, sethidden] = useState(true)
    const [images, setimages] = useState([])
    const [oldProfile, setoldProfile] = useState({})
    const [currentProfile, setcurrentProfile] = useState({})
    const [currentName, setcurrentName] = useState(currentProfile.name)

    
    const handleClick = () => {
        sethidden(!hidden)
    }

    useEffect(async () => {
        const imageArray = await profileApi.getImages()
        setimages(imageArray)

        const profileObj = await profileApi.getOneProfile()
        setoldProfile(profileObj)
        setcurrentProfile(profileObj)
        setcurrentName(profileObj.name)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        let profile = {
            name: nameProps.value || currentName.name,
            image_id: currentProfile.id
        }
        
        if (currentProfile.image_id == oldProfile.image_id) {
            profile.image_id = oldProfile.image_id
        }

        const [response, status] = await profileApi.updateProfile(profile)

        if(status == 400 && response.name) {
            setNameError("Profile name can't be empty")
            console.log("profile name error")
        }
        else if (status == 200) {
            console.log("Updated", response)  //Profile created -> route
        }
        else {
            console.log("Unknown error", response, status)
        }
    }

    return (
        <div>
            <div className="edit-container">
                <div className="edit-profile-container">

                    <div className="edit-title">Edit Profile</div>

                    <div className="middle-section">
                        <div className="image-section">
                            <img className="profile-edit-image" src={currentProfile.image_url}></img>
                        </div>
                        <div className="edit-section">
                            <div className="edit-name-input">
                                <input 
                                placeholder={currentName}
                                type="text"
                                {...nameProps}>
                                </input>
                            </div>
                            {nameError && 
                            <p className="text-danger small error-message"> 
                            {nameError}
                            </p>}
                            <div className="profile-lock-container">
                                <div className="profile-lock fa fa-lock mt-2"></div>
                                <span className="profile-lock-status"> Profile Lock is </span>
                                <span className="profile-status">ON</span>
                            </div>

                            <div className="change-picture-button py-2"><a onClick={handleClick}>CHANGE PICTURE</a></div>
                        </div>
                    </div>
                
                    <div className={hidden? 'hidden' : 'image-menu'}>
                        {images.map(image  => (
                            <img className="image-item" onClick={()=>{setcurrentProfile(image)}} key={image.id} src={image.image_url} />
                        ))}
                    </div>

                    <div className="buttons-section mt-5">
                        <span className="save-button px-4 py-2"><a onClick={handleSubmit}>SAVE</a></span>
                        <span className="cancel-button ml-3 px-4 py-2"><a>CANCEL</a></span>
                        <span className="cancel-button ml-3 px-4 py-2"><a>DELETE PROFILE</a></span>
                    </div>

                </div>
            </div>
        </div>
      );
}

export default EditProfile;
