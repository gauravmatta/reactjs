import { Route, Routes } from "react-router-dom";
import ProfileForm from "../components/forms/CreateProfile";

const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="create" element={<ProfileForm />} />
      <Route path="edit" element={<ProfileForm />} />
    </Routes>
  );
};
export default ProfileRouter;