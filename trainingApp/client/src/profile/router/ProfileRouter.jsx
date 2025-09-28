import { Route, Routes } from "react-router-dom";
import ProfileForm from "../components/forms/CreateProfile";
import AddEducation from "../components/forms/AddEducation";
import AddExp from "../components/forms/AddExp";

const ProfileRouter = () => {
  return (
    <Routes>
      <Route path="create" element={<ProfileForm />} />
      <Route path="edit" element={<ProfileForm />} />
      <Route path="addExperience" element={<AddExp />} />
      <Route path="addEducation" element={<AddEducation />} />
    </Routes>
  );
};
export default ProfileRouter;