import ExpRow from "./ExpRow";

const ExperienceDetails = ({ experiences, deleteExperience }) => {
    return (
        <>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {experiences?.map((exp, index) => (
                        <ExpRow key={index} id={index} row={exp} deleteExperience={deleteExperience} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ExperienceDetails;