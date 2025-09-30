import EduRow from "./EduRow";

const EducationDetails = ({ edus, deleteEducation }) => {
    return (
        <>
       <h2 className="my-2">Education Credentials</h2>
       <table className="table">
           <thead>
               <tr>
                   <th>School</th>
                   <th className="hide-sm">Degree</th>
                   <th className="hide-sm">Years</th>
                   <th />
               </tr>
           </thead>
           <tbody>
               {edus?.map((edu, index) => (
                <EduRow key={index} id={index} row={edu} deleteEducation={deleteEducation}/>
               ))}
           </tbody>
       </table>
       </>
    );
}
export default EducationDetails;