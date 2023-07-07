import style from "../assets/css/Profile.module.css";
import SocialMediaLink from "../components/SocialMediaLink";
import MediaHistory from "../components/MediaHistory";
import EditProfile from "../components/EditProfile";
import AddSocialModal from "../components/AddSocialModal";
import Post from "../components/Post";
import { getPosts } from "../api/post";
import { useEffect, useState } from "react";

export default function Profile(user) {

  const [post, setPost] = useState([]);

  async function fetchData() {
    const data = await getPosts();
    setPost(data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={style.containerProfile}>
      {/* Banner Profile User */}
      <div className={style.profileBackground}>
        {/* Profile Picture User */}
        <img
          src="/src/assets/images/profile-icon.svg"
          alt="profile"
          className={style.profilePicture}
        />
      </div>

      <div className={style.containerMediaHistory}>
        {/* Media History User from Post,Like,Photo,Video */}
        {/* Edit Profile Button and Dialog */}
        <EditProfile />
        <div className={style.containerEditProfileBtn}></div>
      </div>

      <div className={style.contentBody}>
        {/* Social Media link */}
        <div className={style.socialMediaLink}>
          {/* Title */}
          <p className={style.titleSocialMediaLink}>Social Link</p>
          {/* Media Social */}
          <SocialMediaLink
            url="https://www.instagram.com/zalaxa"
            icon="/src/assets/images/instagram.svg"
            text="@zalaxa"
          />
          <SocialMediaLink
            url="https://www.twitter.com/zalaxa"
            icon="/src/assets/images/twitter.svg"
            text="@zalaxa"
          />
          <SocialMediaLink
            url="https://www.spotify.com/user/zalaxa"
            icon="/src/assets/images/spotify.svg"
            text="zalaxa"
          />
          {/* Add Social Media Button */}
          <AddSocialModal />
        </div>
        {/* Content Upload user Profile  */}
        <div className={style.socialMediaContent}>
          <div className={style.posts}>
            {post?.map((i) => (
              <Post key={i.postId} post={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
