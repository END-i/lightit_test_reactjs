import { useEffect, useState } from 'react';

import { IProfile } from 'types';
import View from './view';

const Profile = () => {
  const [profile, setProfile] = useState<IProfile>({
    firstName: '',
    lastName: '',
    photo: '',
  });

  useEffect(() => {
    const localProfile = localStorage.getItem('profile');
    localProfile && setProfile(JSON.parse(localProfile));
  }, []);

  const getBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const onChangeProfile = async ({ target: { name, value, files } }: any) => {
    let img: any = '';
    if (files) {
      await getBase64(files[0]).then((base64) => {
        img = `${base64}`;
      });
    }

    setProfile((prev) => ({
      ...prev,
      [name]: img || value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem('profile', JSON.stringify(profile));
  };

  return <View onChangeProfile={onChangeProfile} onSubmit={onSubmit} profile={profile} />;
};

export default Profile;
