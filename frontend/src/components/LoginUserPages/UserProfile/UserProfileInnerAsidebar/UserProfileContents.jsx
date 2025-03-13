import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { FaUserCircle} from "react-icons/fa";
import { RiImageEditFill } from "react-icons/ri";
import { useSelector } from 'react-redux';

const Profile = () => {
    const [profileImage, setProfileImage] = useState(null);
    const {user} = useSelector(state => state.userLoader);


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

// Initial Value Set in Real Time
const [userDataFetcher, setUserDataFetcher] = useState({
    name: "",
    email: "",
    password: "",
})

useEffect(() => {
if(user){
    setUserDataFetcher({
        name: user.userName,
        email: user.email,
        password: "",
    })
}
}, [user])



    return (
        <ProfileContainer>
            <h2>My Profile</h2>
            <ProfileContent>
                <ProfilePicture>
                    {profileImage ? <img src={profileImage} alt="Profile" /> : <FaUserCircle size={200} className='alternativePicture' />}
                    <label htmlFor="fileInput">
                        <RiImageEditFill className="cameraIcon" />
                    </label>
                    <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} />
                </ProfilePicture>
                <Formik
                enableReinitialize
                    initialValues={userDataFetcher}
                    onSubmit={(values) => {
                        console.log("Updated Profile Data:", values);
                        alert("Profile updated successfully!");
                    }}
                >
                    {({ handleChange, values }) => (
                        <ProfileForm as={Form}>
                            <label>
                                User Name
                                <Field type="text" name="name" value={values.name} onChange={handleChange} required />
                            </label>
                            <label>
                                Email
                                <Field type="email" name="email" value={values.email} onChange={handleChange} required />
                            </label>
                            <label>
                                Password
                                <Field type="password" name="password" value={values.password} onChange={handleChange} required />
                            </label>
                            <button type="submit">Save Changes</button>
                        </ProfileForm>
                    )}
                </Formik>
            </ProfileContent>
        </ProfileContainer>
    );
};

export default Profile;

const ProfileContainer = styled.div`
    padding: 20px;
    border-radius: 10px;
    text-align: center;

    h2 {
        width: 100%;
        text-align: left;
        color: #494949;
    }
`;

const ProfileContent = styled.div`
    margin-top: 80px;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    @media (max-width: 970px) {
        width: 100%;
        margin-top: 50px;
    }
`;

const ProfilePicture = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    position: relative;
    padding: 1px;

    .alternativePicture{
        color: white;
        font-size: 130px;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

    label {
        position: absolute;
        bottom: 5px;
        right: 5px;
        background: rgb(60, 60, 60);
        color: white;
        border-radius: 50%;
        height: 25px;
        width: 25px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cameraIcon {
        font-size: 15px;
    }

    input {
        display: none;
    }
`;

const ProfileForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 300px;


    label {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        color: #444;
        text-align: start;
    }

    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        margin-top: 10px;
        padding: 10px;
        background-color: rgb(60, 60, 60);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: rgb(80, 80, 80);
    }
`;
