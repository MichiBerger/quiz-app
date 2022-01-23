import html from "./profile-com.html";

import "./profile-com.css";

export default {
  title: "Components/profile",
};

export const Default = () => html;

export const Profile_Image = () => `
<section class="profile__wrapper--image">
<figure class="profile__figure">
        <img class="profile__image" src="https://source.unsplash.com/random" alt="" width="150" height="150">
      </figure>
      <p class="profile__name">Karl-Heinz Huber</p>
</section>
`;

export const Profile_Text = () => `
<section class="profile__wrapper--text">
<p class="profile__about-me">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eos saepe placeat dignissimos pariatur sapiente illo molestias sit debitis delectus?</p>
</section>
`;

export const Profile_Skills = () => `
<div class="profile__wrapper--skills">
      <h3 class="profile__skills">Skills</h3>
      <ul class="tag__list tag__list--profile">
        <li class="tag__item tag__list--profile">Tag1</li>
        <li class="tag__item tag__list--profile">Tag2</li>
        <li class="tag__item tag__list--profile">Tag3</li>
        <li class="tag__item tag__list--profile">Tag4</li>
      </ul>
    </div>
`;

export const Profile__Logout = () => `
<div class="profile__wrapper--logout-btn">
      <label class="submit__label--profile" for="logout"></label>
      <input class="submit__input--profile" type="submit" name="logout" id="logout" value="Logout">
    </div>
`;
