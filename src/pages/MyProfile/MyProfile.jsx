import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SectionBody from '../../wrappers/SectionBody';
import { toast } from 'react-toastify';
import ncpdp from '../../assets/images/npc-user.png';

const MyProfile = () => {
  const { user, signOutUser, updateUserProfile } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    setError('');
    setSuccess(false);

    updateUserProfile(name, photo)
      .then(() => {
        setSuccess(true);
        e.target.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    if (success) {
      toast.success('✅ Profile Updated Successfully!');
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error(`❌ ${error}`);
    }
  }, [error]);

  return (
    <SectionBody>
      <div className="w-full max-w-2xl bg-base-200 rounded-2xl shadow-xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="avatar">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full">
              <img
                src={user?.photoURL || ncpdp}
                alt="user avatar"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">{user?.displayName}</h2>
            <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
          </div>
        </div>

        <div className="divider my-6"></div>

        <div className="space-y-4 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-primary">Update Profile</h3>
          <form onSubmit={handleProfileUpdate}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="John Marston"
                defaultValue={user?.displayName}
              />

              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input input-bordered w-full"
                placeholder="https://i.ibb.co/a1b1c3"
                defaultValue={user?.photoURL}
              />

              <button className="btn btn-primary mt-4 w-full">Update Profile</button>
            </fieldset>
          </form>
        </div>

        <div className="divider my-6"></div>

        <div className="flex flex-col md:flex-row justify-between gap-3">
          <button
            onClick={signOutUser}
            className="btn btn-outline btn-error w-full hover:text-white md:w-auto"
          >
            Sign Out
          </button>
        </div>
      </div>
    </SectionBody>
  );
};

export default MyProfile;
